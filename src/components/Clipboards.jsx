import { useState } from "react";

export default function Clipboards() {
  const [clipText, setClipText] = useState("");

  async function getClipboardText() {
    try {
      const text = await navigator.clipboard.readText();
      console.log("Clipboard text:", text);
      setClipText(text);
      return text;
    } catch (err) {
      console.error("Failed to read clipboard contents: ", err);
      return null;
    }
  }

  return (
    <div>
      <h1>
        <button onClick={getClipboardText}>clickpls</button>
      </h1>
      <p>{clipText}</p>
    </div>
  );
}
