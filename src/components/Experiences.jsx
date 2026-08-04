import Markdown from "react-markdown";
import Exp from "./markdowndocs/Experiences.md";

function Experiences() {
  const customReactComponents = {
    h1: ({ node, ...props }) => (
      <h1 className="text-black dark:text-white" {...props} />
    ),
    h2: ({ node, ...props }) => (
      <h2 className="text-black dark:text-white" {...props} />
    ),
    strong: ({ node, ...props }) => (
      <strong className="text-black dark:text-white" {...props} />
    ),
    a: ({ node, ...props }) => (
      <a className="text-black dark:text-white" {...props} />
    ),
  };
  return (
    <div className="prose dark:prose-invert">
      <Markdown components={customReactComponents}>{Exp}</Markdown>
    </div>
  );
}

export default Experiences;
