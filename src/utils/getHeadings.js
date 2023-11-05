export default function getHeadings(content) {
  const headers = content.filter((block) => block.type === "heading");
  const filteredHeaders = headers.map((header) => ({
    id: header.id,
    text: header.content[0].text,
    level: header.props.level - 1,
  }));
  return filteredHeaders;
}
