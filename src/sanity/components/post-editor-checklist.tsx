import { Card, Stack, Text } from "@sanity/ui";
import type { StringInputProps } from "sanity";

export default function PostEditorChecklist(_props: StringInputProps) {
  return (
    <Card padding={4} radius={2} tone="primary">
      <Stack space={3}>
        <Text size={2} weight="semibold">
          Checklist inainte de Publish
        </Text>
        <Text size={1}>
          Publish este blocat daca lipseste un camp obligatoriu sau daca o imagine nu are alt text. Cele mai dese
          blocaje sunt: `Meta Description`, `Excerpt`, `Category`, `Topic cluster`, `Slug`, `Author`,
          `Main image`, `Main image alt`, `Open Graph image`, `Open Graph image alt`, `Published at` si `Body`.
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
