export default function getHeadings(content) {
  const obj = JSON.parse(content).content;
  const headers = obj.filter((block) => block.type === "heading");
  const filteredHeaders = headers.map((header) => ({
    id: header.id,
    text: header.content[0].text,
    level: header.attrs.level - 1,
  }));
  return filteredHeaders;
}
