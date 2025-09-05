const post = {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
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
      description: "Optional. If empty, the page will use Title",
    },
    {
      name: "metadata",
      title: "Metadata",
      type: "string",
    },
    // Added: Meta description for SEO
    {
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
    },
    // Added: Short excerpt used on listings and meta fallbacks
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
    },
    // Added: Canonical URL (optional)
    {
      name: "canonicalUrl",
      title: "Canonical URL",
      type: "url",
      description: "Opțional. Trebuie să fie pe https://www.webdynamicx.ro (inclusiv calea)",
      validation: (Rule: any) =>
        Rule.uri({ scheme: ["https"] }).custom((value: string) => {
          if (!value) return true;
          try {
            const u = new URL(value);
            return u.hostname === "www.webdynamicx.ro"
              ? true
              : "Folosește domeniul https://www.webdynamicx.ro";
          } catch (e) {
            return "Introduce un URL valid";
          }
        }),
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
    // Added: Simple string category to match existing content
    {
      name: "category",
      title: "Category",
      type: "string",
      description: "Ex: magazin-online, web-design, seo",
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
          if (
            fields?.current !== fields?.current?.toLowerCase() ||
            fields?.current.split(" ").includes("")
          ) {
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
              if (
                fields !== fields.toLowerCase() ||
                fields.split(" ").includes("")
              ) {
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
      options: {
        hotspot: true,
      },
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
