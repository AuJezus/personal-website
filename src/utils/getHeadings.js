export default function getHeadings(content) {
  const obj = JSON.parse(content).content;
  const headers = obj.filter((block) => block.type === "heading");
  const filteredHeaders = headers.map((header) => ({
    id: header.id,
    text: header.content[0].text,
    level: header.attrs.level - 1,
  }));
  return filteredHeaders;

  // const doc = new DOMParser().parseFromString(content, "text/html");
  // const headings = doc.querySelectorAll("h1, h2, h3, h4, h5, h6");
  // const filteredHeadings = Array.from(headings).map((h) => ({
  //   text: h.innerText,
  //   level: parseInt(h.nodeName[1]) - 1,
  // }));
  // return filteredHeadings;
}
