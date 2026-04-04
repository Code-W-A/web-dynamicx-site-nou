import { Card, Stack, Text } from "@sanity/ui";
import type { StringInputProps } from "sanity";
import { useFormValue } from "sanity";
import { collectPostBlockingIssues } from "../post-validation";

export default function PostEditorChecklist(_props: StringInputProps) {
  const document = (useFormValue([]) as Record<string, unknown> | undefined) ?? undefined;
  const blockingIssues = collectPostBlockingIssues(document);

  return (
    <Card padding={4} radius={2} tone="primary">
      <Stack space={3}>
        <Text size={2} weight="semibold">
          Checklist inainte de Publish
        </Text>
        {blockingIssues.length > 0 ? (
          <Card padding={3} radius={2} tone="critical">
            <Stack space={2}>
              <Text size={1} weight="semibold">
                Publish este blocat acum de aceste validari:
              </Text>
              {blockingIssues.map((issue) => (
                <Text key={issue.key} size={1}>
                  - {issue.label}
                </Text>
              ))}
            </Stack>
          </Card>
        ) : (
          <Card padding={3} radius={2} tone="positive">
            <Text size={1}>Validarile principale din schema `post` sunt completate corect.</Text>
          </Card>
        )}
        <Text size={1}>
          Publish este blocat daca lipseste un camp obligatoriu sau daca o imagine nu are alt text. Cele mai dese
          blocaje sunt: `Meta Description`, `Excerpt`, `Category`, `Topic cluster`, `Slug`, `Author`,
          `Main image`, `Main image alt`, `Open Graph image`, `Open Graph image alt`, `Published at` si `Body`.
        </Text>
        <Text size={1}>
          Pentru articolele vechi, cel mai des blocaj ascuns este un `alt text` lipsa pe una dintre imaginile din
          `Body` sau nevoia de `Regenerare imagini dupa schimbarea Main image`.
        </Text>
        <Text size={1}>
          Pentru SEO, foloseste de regula imagini reale si relevante pentru subiect, nu stock generic. Format recomandat:
          `WebP`. `JPEG` este acceptabil pentru fotografii daca WebP nu este disponibil. `PNG` doar cand ai nevoie de
          transparenta sau grafica/text care trebuie sa ramana foarte clar.
        </Text>
        <Text size={1}>
          Pentru workflow-ul cu imagini generate in ChatGPT, pleaca de la o sursa `1536x1024 landscape`. Studio
          genereaza automat din ea varianta principala `1536x864 WebP` si varianta `1200x630 JPG` pentru share.
        </Text>
        <Text size={1}>
          Completeaza mereu un `alt text` descriptiv si specific imaginii. Evita imagini cu text mic, stock generic
          sau compozitii aglomerate care nu se inteleg bine in preview-urile social.
        </Text>
      </Stack>
    </Card>
  );
}
