function resolveTagIndexingIssues(document: any) {
  const issues: string[] = [];

  if (document?.indexable === true) {
    if (!document?.title?.trim()) issues.push("Title");
    if (!document?.description?.trim()) issues.push("Description");
  }

  return issues;
}

const category = {
  name: "tagDetail",
  title: "Tag Detail",
  type: "document",
  validation: (Rule: any) =>
    Rule.custom((document: any) => {
      const issues = resolveTagIndexingIssues(document);
      if (issues.length === 0) {
        return true;
      }

      return `Pentru un tag indexabil completează: ${issues.join(", ")}.`;
    }),
  fields: [
    {
      name: "tagname",
      title: "Tag Name",
      type: "string",
      options: {
        source: "tagname",
        unique: true,
        slugify: (input: any) => {
          return input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "");
        },
      },
      validation: (Rule: any) =>
        Rule.custom((fields: any) => {
          if (!fields) {
            return true;
          }
          if (fields !== fields.toLowerCase() || fields.includes(" ")) {
            return "Tags must be lowercase and not be included space";
          }
          return true;
        }),
    },
    {
      name: "ogImage",
      title: "Open Graph Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "indexable",
      title: "Indexable in Google",
      type: "boolean",
      description:
        "Activează doar pentru taguri care merită o pagină SEO dedicată. Dacă este o simplă etichetă editorială, lasă dezactivat.",
      initialValue: false,
    },
    {
      name: "minimumPostCountToIndex",
      title: "Minimum articles to index",
      type: "number",
      description:
        "Pagina de tag intră la index doar dacă are cel puțin acest număr de articole publicate. Recomandat: minim 3.",
      initialValue: 3,
      validation: (Rule: any) =>
        Rule.integer().min(1).warning("Folosește un prag de cel puțin 3 dacă vrei o taxonomie mai curată pentru SEO."),
    },
  ],
};
export default category;
