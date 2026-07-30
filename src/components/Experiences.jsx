import Markdown from "react-markdown";
import Exp from "./markdowndocs/Experiences.md";

function Experiences() {
  const customReactComponents = {
    h1: ({ node, ...props }) => (
      <h1 className="text-slate-600 dark:text-slate-300" {...props} />
    ),
    h2: ({ node, ...props }) => (
      <h2 className="text-slate-600 dark:text-slate-300" {...props} />
    ),
    strong: ({ node, ...props }) => (
      <strong className="text-slate-600 dark:text-slate-300" {...props} />
    ),
    a: ({ node, ...props }) => (
      <a className="text-blue-600 dark:text-blue-400" {...props} />
    ),
  };
  return (
    <div className="prose dark:prose-invert">
      <Markdown components={customReactComponents}>{Exp}</Markdown>
    </div>
  );
}

export default Experiences;
