export function renderStrapiContent(blocks?: any[] | string) {
  if (!Array.isArray(blocks)) return "";

  return blocks
    .map((block) => {
      const text = block.children
        ?.map((c) => c.text)
        .join("")
        .trim();

      if (!text) return "";

      if (block.type === "heading") {
        const level = block.level ?? 2;
        return `<h${level}>${text}</h${level}>`;
      }

      return `<p>${text}</p>`;
    })
    .join("\n");
}
