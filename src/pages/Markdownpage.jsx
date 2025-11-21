import Markdown from "react-markdown";
import { useState } from "react";
// import firstmd from "../components/markdowndocs/firstmarkdown.md";

function Markdownpage() {
  const [firstmdContent, setFirstmdContent] = useState("");
  const markdownContent = `# Hello, Markdown!
      This is some **bold** text and *italic* text.
      - Item 1
      - Item 2`;

//   fetch(firstmd)
//     .then((response) => response.text())
//     .then((text) => setFirstmdContent(text))
//     .catch((error) => console.error("Error fetching markdown:", error));

  return (
    <div>
      <Markdown>{markdownContent}</Markdown>
      {/* <Markdown>{firstmdContent}</Markdown> */}
    </div>
  );
}

export default Markdownpage;
