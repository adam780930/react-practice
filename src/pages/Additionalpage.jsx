import Markdown from "react-markdown";

function Additionalpage() {
  const markdownContent = `# Hello, Markdown!
      This is some **bold** text and *italic* text.
      - Item 1
      - Item 2`;

  return (
    <div>
      <Markdown>{markdownContent}</Markdown>
    </div>
  );
}

export default Additionalpage;
