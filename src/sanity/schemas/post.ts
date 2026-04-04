import { TOPIC_CLUSTER_ENTRIES } from "../../config/blog-topic-clusters";
import PostEditorChecklist from "../components/post-editor-checklist";
import PostMainImageInput from "../components/post-main-image-input";
import { collectPostBlockingIssues, formatPostBlockingIssues } from "../post-validation";

const CATEGORY_OPTIONS = Array.from(
  new Set(TOPIC_CLUSTER_ENTRIES.flatMap((entry) => entry.match.categories)),
).sort();

const TOPIC_CLUSTER_OPTIONS = Array.from(
  new Set(TOPIC_CLUSTER_ENTRIES.flatMap((entry) => entry.match.topicClusters)),
).sort();

function hasWhitespace(value?: string) {
  return typeof value === "string" && value.includes(" ");
}

function resolveCanonicalValidationIssue(value: string | undefined, document: any) {
  if (!value?.trim()) {
    return true;
  }

  const slug = document?.slug?.current?.trim();
  if (!slug) {
    return "Completează mai întâi slug-ul articolului.";
  }

  try {
    const parsed = new URL(value.trim());
    const hasExactCanonical = parsed.hostname === "www.webdynamicx.ro" && parsed.pathname === `/blog/${slug}` && !parsed.search && !parsed.hash;
    return hasExactCanonical
      ? true
      : `Canonical URL trebuie să fie exact https://www.webdynamicx.ro/blog/${slug}`;
  } catch {
    return "Introduce un URL valid";
  }
}

const post = {
  name: "post",
  title: "Post",
  type: "document",
  validation: (Rule: any) =>
    Rule.custom((document: any) => {
      const issues = collectPostBlockingIssues(document);
      if (issues.length === 0) {
        return true;
      }

      return `Nu poti publica articolul pana nu completezi sau corectezi: ${formatPostBlockingIssues(issues)}.`;
    }),
  fields: [
    {
      name: "editorChecklist",
      title: "Ghid publicare",
      type: "string",
      readOnly: true,
      components: {
        input: PostEditorChecklist,
      },
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    // SEO: Optional override for <title>
    {
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      description: "Opțional. Dacă lipsește, pagina folosește Title. Recomandat: max 65 caractere.",
      validation: (Rule: any) =>
        Rule.max(65).warning("Ideal sub 65 de caractere pentru a evita truncarea în rezultate."),
    },
    {
      name: "metadata",
      title: "Legacy metadata",
      type: "string",
      description: "Fallback vechi. Nu îl mai folosi pentru articole noi; completează Meta Description și Excerpt.",
    },
    // Added: Meta description for SEO
    {
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      description: "Folosită pentru snippet-ul SEO. Recomandat: 70–160 caractere.",
      validation: (Rule: any) => [
        Rule.required().error("Completează meta description."),
        Rule.min(70).max(160).warning("Țintește între 70 și 160 de caractere."),
      ],
    },
    // Added: Short excerpt used on listings and meta fallbacks
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "Rezumat scurt pentru listări și fallback SEO. Recomandat: 80–220 caractere.",
      validation: (Rule: any) => [
        Rule.required().error("Completează excerpt-ul."),
        Rule.min(80).max(220).warning("Țintește între 80 și 220 de caractere."),
      ],
    },
    // Added: Canonical URL (optional)
    {
      name: "canonicalUrl",
      title: "Canonical URL",
      type: "url",
      description: "Opțional. Lasă gol în majoritatea cazurilor. Dacă îl completezi, trebuie să fie exact URL-ul articolului curent.",
      validation: (Rule: any) =>
        Rule.uri({ scheme: ["https"] }).custom((value: string, context: { document?: any }) =>
          resolveCanonicalValidationIssue(value, context?.document),
        ),
    },
    // Added: Access level (e.g., free/premium)
    {
      name: "accessLevel",
      title: "Access Level",
      type: "string",
      options: {
        list: [
          { title: "Free", value: "free" },
          { title: "Premium", value: "premium" },
        ],
        layout: "radio",
      },
      initialValue: "free",
    },
    // Added: Simple string category to match existing content + internal linking (ex. mobile-app-development)
    {
      name: "category",
      title: "Category",
      type: "string",
      description:
        "Categorie editorială folosită în internal linking; trebuie să fie aliniată cu topic cluster-ul din site.",
      options: {
        list: CATEGORY_OPTIONS.map((value) => ({ title: value, value })),
        layout: "dropdown",
      },
      validation: (Rule: any) =>
        Rule.required().custom((value: string) => {
          if (!value) return "Selectează o categorie.";
          return CATEGORY_OPTIONS.includes(value) ? true : "Selectează o categorie validă din listă.";
        }),
    },
    {
      name: "topicCluster",
      title: "Topic cluster",
      type: "string",
      description:
        "Grup tematic pentru link-uri interne automate. Trebuie să coincidă cu maparea din site.",
      options: {
        list: TOPIC_CLUSTER_OPTIONS.map((value) => ({
          title:
            value === "mobile-apps"
              ? "Mobile apps"
              : value === "websites"
                ? "Websites"
                : value.toUpperCase(),
          value,
        })),
        layout: "dropdown",
      },
      validation: (Rule: any) =>
        Rule.custom((value: string, context: { document?: { category?: string } }) => {
          if (!value) {
            return "Selectează un topic cluster.";
          }
          if (!TOPIC_CLUSTER_OPTIONS.includes(value)) {
            return "Selectează un topic cluster valid.";
          }
          const category = context?.document?.category;
          const matchingEntry = TOPIC_CLUSTER_ENTRIES.find((entry) => entry.match.categories.includes(category ?? ""));
          if (matchingEntry && !matchingEntry.match.topicClusters.includes(value)) {
            return `Pentru categoria "${category}", folosește topicCluster "${matchingEntry.match.topicClusters[0]}".`;
          }
          return true;
        }).required(),
    },
    {
      name: "relatedServices",
      title: "Related services (manual)",
      type: "array",
      description:
        "Linkuri opționale către pagini de servicii. Se afișează compact; nu depăși 2 linkuri către aceeași pagină (inclusiv din conținut).",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Link text", type: "string", validation: (Rule: any) => Rule.required() },
            {
              name: "href",
              title: "URL",
              type: "string",
              description: "Cale relativă (ex. /servicii/...) sau https://www.webdynamicx.ro/...",
              validation: (Rule: any) =>
                Rule.required().custom((value: string) => {
                  if (!value?.trim()) return "Obligatoriu";
                  const v = value.trim();
                  if (v.startsWith("/")) return true;
                  try {
                    const u = new URL(v);
                    return u.hostname === "www.webdynamicx.ro"
                      ? true
                      : "Folosește cale relativă sau domeniul www.webdynamicx.ro";
                  } catch {
                    return "URL invalid";
                  }
                }),
            },
          ],
          preview: {
            select: { title: "title", href: "href" },
            prepare({ title, href }: { title?: string; href?: string }) {
              return { title: title || "Serviciu", subtitle: href };
            },
          },
        },
      ],
    },
    {
      name: "showPortfolioHub",
      title: "Show portfolio hub link",
      type: "boolean",
      description: "Afișează blocul către portofoliul relevant (ex. aplicații mobile), dacă există în config.",
      initialValue: false,
    },
    {
      name: "relatedCaseStudies",
      title: "Related case studies",
      type: "array",
      description:
        "Slug-uri din /portofoliu-aplicatii-mobile/[slug] pentru 1-2 studii relevante afișate sub articol.",
      of: [
        {
          type: "string",
          validation: (Rule: any) =>
            Rule.custom((value: string) => {
              if (!value) return true;
              return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)
                ? true
                : "Folosește un slug valid, ex. styleconnect-rezervari-saloane";
            }),
        },
      ],
      validation: (Rule: any) => Rule.unique().max(2),
    },
    {
      name: "relatedPosts",
      title: "Related posts",
      type: "array",
      of: [{ type: "reference", to: [{ type: "post" }] }],
      validation: (Rule: any) => Rule.unique(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        unique: true,
        slugify: (input: any) => {
          return input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "");
        },
      },
      validation: (Rule: any) =>
        Rule.required().custom((fields: any) => {
          const current = fields?.current;
          if (!current) {
            return true;
          }
          if (current !== current.toLowerCase() || hasWhitespace(current)) {
            return "Slug must be lowercase and not be included space";
          }
          return true;
        }),
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          type: "string",
          validation: (Rule: any) =>
            Rule.custom((fields: any) => {
              if (!fields) {
                return true;
              }
              if (fields !== fields.toLowerCase() || hasWhitespace(fields)) {
                return "Tags must be lowercase and not be included space";
              }
              return true;
            }),
        },
      ],
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      description:
        "Incarcă o sursă landscape, ideal 1536x1024. Studio generează automat varianta principală WebP pentru site și varianta JPG pentru Open Graph.",
      components: {
        input: PostMainImageInput,
      },
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "Descriere scurtă pentru SEO și accessibility.",
          validation: (Rule: any) => [
            Rule.required().error("Completează alt text pentru imaginea principală."),
            Rule.min(5).max(140).warning("Țintește între 5 și 140 de caractere."),
          ],
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "imageVariantMainAssetRef",
      title: "Image variant main asset ref",
      type: "string",
      readOnly: true,
      hidden: true,
    },
    {
      name: "ogImage",
      title: "Open Graph image",
      type: "image",
      description:
        "Se generează automat din upload-ul principal și este folosită pentru share/social. O poți înlocui manual dacă vrei o compoziție diferită.",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "Descriere scurtă pentru preview-urile Open Graph și accessibility.",
          validation: (Rule: any) => [
            Rule.required().error("Completează alt text pentru imaginea Open Graph."),
            Rule.min(5).max(140).warning("Țintește între 5 și 140 de caractere."),
          ],
        },
      ],
      validation: (Rule: any) => Rule.required().error("Generează sau încarcă imaginea Open Graph."),
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
      validation: (Rule: any) =>
        Rule.required().custom((value: unknown) => {
          if (!Array.isArray(value) || value.length === 0) {
            return "Adaugă conținut în articol.";
          }
          return true;
        }),
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection: any) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
export default post;
