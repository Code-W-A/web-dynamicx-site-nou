import Image from "next/image";

export type DeviceFrameVariant = "card" | "hero" | "gallery";

type Props = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  variant?: DeviceFrameVariant;
};

/** Cadru tip smartphone pentru capturi portrait — hub, hero studiu de caz, galerie. */
export default function DeviceScreenshotFrame({
  src,
  alt,
  sizes,
  priority = false,
  variant = "hero",
}: Props) {
  const outer =
    variant === "card"
      ? "flex w-full justify-center py-5"
      : variant === "gallery"
        ? "flex w-[min(100%,240px)] shrink-0 justify-center sm:w-[min(100%,260px)]"
        : "flex w-full justify-center py-6 sm:py-8";

  const bezel =
    variant === "card"
      ? "w-[min(100%,200px)]"
      : variant === "gallery"
        ? "w-full max-w-[220px]"
        : "w-[min(100%,280px)] sm:max-w-[300px]";

  return (
    <div className={outer}>
      <div
        className={`${bezel} rounded-[1.75rem] border-[3px] border-slate-800 bg-gradient-to-b from-slate-800 to-slate-900 p-1.5 shadow-[0_20px_50px_rgba(15,23,42,0.22)] ring-1 ring-black/15`}
      >
        <div className="relative aspect-[9/19] w-full overflow-hidden rounded-[1.35rem] bg-slate-950">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes={sizes}
            priority={priority}
          />
        </div>
      </div>
    </div>
  );
}
