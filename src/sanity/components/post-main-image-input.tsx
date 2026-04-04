"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useId, useRef, useState } from "react";
import { Box, Button, Card, Flex, Grid, Spinner, Stack, Text } from "@sanity/ui";
import { type ImageInputProps, useClient, useDocumentOperation, useFormValue } from "sanity";
import {
  BLOG_MAIN_IMAGE_PRESET,
  BLOG_OG_IMAGE_PRESET,
  BLOG_SOURCE_RECOMMENDATION,
  buildBlogHeroImageUrl,
  buildBlogOgImageUrl,
  getRawSanityImageUrl,
} from "../image-helpers";

type ImageFieldValue = {
  _type?: "image";
  asset?: {
    _type?: "reference";
    _ref?: string;
  };
  alt?: string;
  [key: string]: unknown;
};

type GeneratedPreview = {
  mainUrl: string;
  ogUrl: string;
  sourceWidth: number;
  sourceHeight: number;
  warning?: string;
};

function sanitizeFileBasename(input: string) {
  const normalized = input
    .toLowerCase()
    .trim()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return normalized || "blog-image";
}

function getMimeType(format: "webp" | "jpg") {
  return format === "webp" ? "image/webp" : "image/jpeg";
}

function resolveProcessingWarning(width: number, height: number) {
  if (width >= BLOG_SOURCE_RECOMMENDATION.width && height >= BLOG_SOURCE_RECOMMENDATION.height) {
    return "";
  }

  return `Sursa are ${width}x${height}px. Recomandarea pentru workflow-ul cu ChatGPT este ${BLOG_SOURCE_RECOMMENDATION.width}x${BLOG_SOURCE_RECOMMENDATION.height}px landscape. Varianta generata va evita upscale agresiv.`;
}

function getSmartCropRect(sourceWidth: number, sourceHeight: number, targetWidth: number, targetHeight: number) {
  const sourceRatio = sourceWidth / sourceHeight;
  const targetRatio = targetWidth / targetHeight;

  if (sourceRatio > targetRatio) {
    const cropWidth = sourceHeight * targetRatio;
    const cropX = (sourceWidth - cropWidth) / 2;
    return {
      x: cropX,
      y: 0,
      width: cropWidth,
      height: sourceHeight,
    };
  }

  const cropHeight = sourceWidth / targetRatio;
  const verticalExcess = Math.max(0, sourceHeight - cropHeight);

  return {
    x: 0,
    y: verticalExcess * 0.35,
    width: sourceWidth,
    height: cropHeight,
  };
}

function loadHtmlImage(blob: Blob): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const objectUrl = URL.createObjectURL(blob);
    const image = new window.Image();

    image.onload = () => {
      URL.revokeObjectURL(objectUrl);
      resolve(image);
    };

    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("Nu am putut citi imaginea selectata."));
    };

    image.src = objectUrl;
  });
}

function canvasToBlob(canvas: HTMLCanvasElement, format: "webp" | "jpg", quality: number): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error("Conversia imaginii a esuat."));
          return;
        }

        resolve(blob);
      },
      getMimeType(format),
      quality / 100,
    );
  });
}

async function generateVariant(
  image: HTMLImageElement,
  preset: { width: number; height: number; quality: number; format: "webp" | "jpg" },
) {
  const crop = getSmartCropRect(image.naturalWidth, image.naturalHeight, preset.width, preset.height);
  const downscaleRatio = Math.min(1, crop.width / preset.width, crop.height / preset.height);
  const outputWidth = Math.max(1, Math.round(preset.width * downscaleRatio));
  const outputHeight = Math.max(1, Math.round(preset.height * downscaleRatio));

  const canvas = document.createElement("canvas");
  canvas.width = outputWidth;
  canvas.height = outputHeight;

  const context = canvas.getContext("2d");
  if (!context) {
    throw new Error("Nu am putut initializa procesarea imaginii in browser.");
  }

  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = "high";
  context.drawImage(image, crop.x, crop.y, crop.width, crop.height, 0, 0, outputWidth, outputHeight);

  const blob = await canvasToBlob(canvas, preset.format, preset.quality);

  return {
    blob,
    width: outputWidth,
    height: outputHeight,
  };
}

async function blobToFile(blob: Blob, filename: string) {
  return new File([blob], filename, { type: blob.type });
}

function buildImageValue(assetId: string, alt: string): ImageFieldValue {
  return {
    _type: "image",
    asset: {
      _type: "reference",
      _ref: assetId,
    },
    alt,
  };
}

function PreviewCard({
  title,
  url,
  description,
}: {
  title: string;
  url: string;
  description: string;
}) {
  return (
    <Card padding={3} radius={2} border>
      <Stack space={3}>
        <Box>
          <Text size={1} weight="semibold">
            {title}
          </Text>
          <Text size={1} muted>
            {description}
          </Text>
        </Box>
        <Card overflow="hidden" radius={2} border tone="transparent">
          <img
            src={url}
            alt=""
            style={{
              width: "100%",
              display: "block",
              background: "#f3f4f6",
            }}
          />
        </Card>
      </Stack>
    </Card>
  );
}

export default function PostMainImageInput(props: ImageInputProps) {
  const fileInputId = useId();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const client = useClient({ apiVersion: "2023-06-19" });
  const documentId = ((useFormValue(["_id"]) as string | undefined) ?? "").trim();
  const documentType = ((useFormValue(["_type"]) as string | undefined) ?? "post").trim() || "post";
  const title = ((useFormValue(["title"]) as string | undefined) ?? "").trim();
  const slug = (((useFormValue(["slug"]) as { current?: string } | undefined)?.current as string | undefined) ?? "").trim();
  const ogImage = (useFormValue(["ogImage"]) as ImageFieldValue | undefined) ?? undefined;
  const imageVariantMainAssetRef =
    ((useFormValue(["imageVariantMainAssetRef"]) as string | undefined) ?? "").trim();
  const activeDocumentId = documentId || "__missing__";
  const documentOperations = useDocumentOperation(activeDocumentId, documentType);
  const currentValue = (props.value as ImageFieldValue | undefined) ?? undefined;

  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [generatedPreview, setGeneratedPreview] = useState<GeneratedPreview | null>(null);

  useEffect(() => {
    return () => {
      if (generatedPreview?.mainUrl) {
        URL.revokeObjectURL(generatedPreview.mainUrl);
      }
      if (generatedPreview?.ogUrl) {
        URL.revokeObjectURL(generatedPreview.ogUrl);
      }
    };
  }, [generatedPreview]);

  const currentMainPreviewUrl = currentValue?.asset?._ref ? buildBlogHeroImageUrl(currentValue) : "";
  const currentOgPreviewUrl = ogImage?.asset?._ref ? buildBlogOgImageUrl(ogImage) : "";
  const displayMainPreviewUrl = generatedPreview?.mainUrl || currentMainPreviewUrl;
  const displayOgPreviewUrl = generatedPreview?.ogUrl || currentOgPreviewUrl;
  const needsRegeneration =
    Boolean(currentValue?.asset?._ref) &&
    Boolean(imageVariantMainAssetRef) &&
    currentValue?.asset?._ref !== imageVariantMainAssetRef;

  async function uploadAndPatch(sourceBlob: Blob, originalFilename: string) {
    if (!documentId) {
      throw new Error("Documentul nu are inca un ID. Salveaza sau reincarca editorul si incearca din nou.");
    }

    const image = await loadHtmlImage(sourceBlob);
    const warning = resolveProcessingWarning(image.naturalWidth, image.naturalHeight);
    const basename = sanitizeFileBasename(slug || title || originalFilename.replace(/\.[^.]+$/, ""));
    const defaultAlt = title || basename.replace(/-/g, " ");

    const [mainVariant, ogVariant] = await Promise.all([
      generateVariant(image, BLOG_MAIN_IMAGE_PRESET),
      generateVariant(image, BLOG_OG_IMAGE_PRESET),
    ]);

    const [mainFile, ogFile] = await Promise.all([
      blobToFile(mainVariant.blob, `${basename}-main.webp`),
      blobToFile(ogVariant.blob, `${basename}-og.jpg`),
    ]);

    const [mainAsset, ogAsset] = await Promise.all([
      client.assets.upload("image", mainFile, {
        contentType: mainFile.type,
        filename: mainFile.name,
        title: title || basename,
        label: "blog-main-image",
      }),
      client.assets.upload("image", ogFile, {
        contentType: ogFile.type,
        filename: ogFile.name,
        title: title || basename,
        label: "blog-og-image",
      }),
    ]);

    const mainAlt = currentValue?.alt?.trim() || defaultAlt;
    const ogAlt = ogImage?.alt?.trim() || mainAlt || defaultAlt;
    const nextMainImage = buildImageValue(mainAsset._id, mainAlt);
    const nextOgImage = buildImageValue(ogAsset._id, ogAlt);

    (documentOperations.patch as any).execute(
      [
        {
          set: {
            mainImage: nextMainImage,
            ogImage: nextOgImage,
            imageVariantMainAssetRef: mainAsset._id,
          },
        },
      ],
      {
        _type: documentType,
      },
    );

    setGeneratedPreview({
      mainUrl: URL.createObjectURL(mainVariant.blob),
      ogUrl: URL.createObjectURL(ogVariant.blob),
      sourceWidth: image.naturalWidth,
      sourceHeight: image.naturalHeight,
      warning,
    });
    setStatusMessage("Am generat si incarcat automat varianta principala si varianta Open Graph.");
  }

  async function handleFileSelected(event: React.ChangeEvent<HTMLInputElement>) {
    const sourceFile = event.target.files?.[0];
    event.target.value = "";

    if (!sourceFile) {
      return;
    }

    setIsProcessing(true);
    setErrorMessage("");
    setStatusMessage("");

    try {
      await uploadAndPatch(sourceFile, sourceFile.name);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Procesarea imaginii a esuat.");
    } finally {
      setIsProcessing(false);
    }
  }

  async function handleRegenerateFromCurrentImage() {
    if (!currentValue?.asset?._ref) {
      return;
    }

    setIsProcessing(true);
    setErrorMessage("");
    setStatusMessage("");

    try {
      const response = await fetch(getRawSanityImageUrl(currentValue), { cache: "no-store" });
      if (!response.ok) {
        throw new Error("Nu am putut descarca imaginea curenta pentru regenerare.");
      }

      const blob = await response.blob();
      await uploadAndPatch(blob, `${slug || "current-blog-image"}.${blob.type.includes("png") ? "png" : "jpg"}`);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Regenerarea variantelor a esuat.");
    } finally {
      setIsProcessing(false);
    }
  }

  function handleClearBothImages() {
    setErrorMessage("");
    setStatusMessage("");
    setGeneratedPreview(null);

    (documentOperations.patch as any).execute([
      {
        unset: ["mainImage", "ogImage", "imageVariantMainAssetRef"],
      },
    ]);
  }

  return (
    <Stack space={4}>
      <Card padding={4} radius={2} tone="transparent" border>
        <Stack space={4}>
          <Box>
            <Text size={2} weight="semibold">
              Sistem rapid imagini articol
            </Text>
            <Text size={1} muted>
              Incarca o singura sursa, ideal {BLOG_SOURCE_RECOMMENDATION.width}x{BLOG_SOURCE_RECOMMENDATION.height}
              {" "}landscape. Studio genereaza automat imaginea principala pentru site si varianta Open Graph.
            </Text>
          </Box>

          <Flex gap={3} wrap="wrap">
            <Button
              text={isProcessing ? "Procesare..." : "Incarca imagine sursa"}
              mode="default"
              tone="primary"
              disabled={Boolean(props.readOnly) || isProcessing}
              onClick={() => fileInputRef.current?.click()}
            />
            {currentValue?.asset?._ref ? (
              <Button
                text="Regenerare din imaginea curenta"
                mode="ghost"
                disabled={Boolean(props.readOnly) || isProcessing}
                onClick={handleRegenerateFromCurrentImage}
              />
            ) : null}
            {(currentValue?.asset?._ref || ogImage?.asset?._ref) && !props.readOnly ? (
              <Button text="Sterge ambele imagini" mode="bleed" tone="critical" onClick={handleClearBothImages} />
            ) : null}
          </Flex>

          <input
            id={fileInputId}
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelected}
            style={{ display: "none" }}
          />

          {isProcessing ? (
            <Flex align="center" gap={3}>
              <Spinner muted />
              <Text size={1}>Generez variantele optimizate si le incarc in Sanity...</Text>
            </Flex>
          ) : null}

          {errorMessage ? (
            <Card padding={3} radius={2} tone="critical">
              <Text size={1}>{errorMessage}</Text>
            </Card>
          ) : null}

          {statusMessage ? (
            <Card padding={3} radius={2} tone="positive">
              <Text size={1}>{statusMessage}</Text>
            </Card>
          ) : null}

          {generatedPreview?.warning ? (
            <Card padding={3} radius={2} tone="caution">
              <Text size={1}>{generatedPreview.warning}</Text>
            </Card>
          ) : null}

          {needsRegeneration ? (
            <Card padding={3} radius={2} tone="caution">
              <Text size={1}>
                Imaginea principala a fost inlocuita manual dupa ultima generare. Ruleaza din nou generarea ca sa
                sincronizezi si varianta Open Graph; altfel publish-ul ramane blocat.
              </Text>
            </Card>
          ) : null}

          {displayMainPreviewUrl || displayOgPreviewUrl ? (
            <Grid columns={[1, 2]} gap={3}>
              {displayMainPreviewUrl ? (
                <PreviewCard
                  title="Preview imagine principala"
                  description={`${BLOG_MAIN_IMAGE_PRESET.width}x${BLOG_MAIN_IMAGE_PRESET.height} • ${BLOG_MAIN_IMAGE_PRESET.format.toUpperCase()}`}
                  url={displayMainPreviewUrl}
                />
              ) : null}
              {displayOgPreviewUrl ? (
                <PreviewCard
                  title="Preview Open Graph"
                  description={`${BLOG_OG_IMAGE_PRESET.width}x${BLOG_OG_IMAGE_PRESET.height} • JPG`}
                  url={displayOgPreviewUrl}
                />
              ) : null}
            </Grid>
          ) : null}

          <Text size={1} muted>
            Dupa generare poti ajusta `alt text`, hotspot sau crop din controalele standard de mai jos. Daca inlocuiesti
            manual imaginea principala prin input-ul standard, ruleaza din nou generarea pentru a actualiza si `ogImage`.
          </Text>
        </Stack>
      </Card>

      {currentValue?.asset?._ref ? props.renderDefault(props) : null}
    </Stack>
  );
}
