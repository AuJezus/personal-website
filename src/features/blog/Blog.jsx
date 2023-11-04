import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";

function Blog() {
  async function printContent() {
    const content = await JSON.stringify(editor.topLevelBlocks);
    console.log(content);
  }
  // Creates a new editor instance.
  const editor = useBlockNote({});

  return (
    <div className="bg-neutral-200">
      <BlockNoteView editor={editor} />
      <button onClick={printContent}>Print the shit</button>
    </div>
  );
}

export default Blog;
