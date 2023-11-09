import { useCurrentEditor } from "@tiptap/react";

function SaveBtn() {
  const { editor } = useCurrentEditor();
  console.log(JSON.stringify(editor.getJSON()));

  return <button></button>;
}

export default SaveBtn;
