import { useState } from "react";
import Button from './Button.jsx'

export default function Clipboards() {
  const [clipText, setClipText] = useState("");
  const [currentText, setCurrentText] = useState("")

  async function getClipboardText() {
    try {
      const text = await navigator.clipboard.readText();
      console.log("Clipboard text:", text);
      setClipText(text);
      setCurrentText(text + ' modifed texts')
      return text;
    } catch (err) {
      console.error("Failed to read clipboard contents: ", err);
      return null;
    }
  }

  return (
    <div>
      <h1>
        <Button onClick={getClipboardText} buttonName={'clickpls'}/>
      </h1>
      <p>{clipText}</p>
      <p>{currentText}</p>
    </div>
  );
}
