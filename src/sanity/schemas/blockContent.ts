function validatePortableTextHref(value: string) {
  const href = value?.trim();

  if (!href) {
    return "Introduce un URL.";
  }

  if (href.startsWith("/") || /^(#|mailto:|tel:)/i.test(href)) {
    return true;
  }

  try {
    const parsed = new URL(href);
    return /^https?:$/i.test(parsed.protocol)
      ? true
      : "Folosește /cale-internă, #anchor, mailto:, tel: sau URL complet cu http(s)://";
  } catch {
    return "Folosește /cale-internă, #anchor, mailto:, tel: sau URL complet cu http(s)://";
  }
}

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
const blockContent = {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "string",
                validation: (Rule: any) => Rule.required().custom(validatePortableTextHref),
              },
              {
                title: "Open in new tab",
                name: "blank",
                type: "boolean",
              },
            ],
            initialValue: {
              blank: true,
            },
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "Descriere scurtă a imaginii pentru SEO și accessibility.",
          validation: (Rule: any) => [
            Rule.required().error("Completează alt text pentru imagine."),
            Rule.min(5).max(140).warning("Țintește între 5 și 140 de caractere."),
          ],
        },
        {
          name: "caption",
          title: "Caption",
          type: "string",
        },
      ],
    },
  ],
};
export default blockContent;
