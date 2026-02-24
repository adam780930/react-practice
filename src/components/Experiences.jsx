import Markdown from "react-markdown";
import Exp from "./markdowndocs/Experiences.md";

function Experiences() {
  const customReactComponents = {
    h1: ({ node, ...props }) => <h1 style={{ color: "gray" }} {...props} />,
    h2: ({ node, ...props }) => <h2 style={{ color: "gray" }} {...props} />,
    strong: ({ node, ...props }) => <strong style={{ color: "gray" }} {...props} />,
    a: ({ node, ...props }) => <a style={{ color: "blue" }} {...props} />,
  };
  return (
    <div className="prose dark:text-white">
      <Markdown components={customReactComponents}>{Exp}</Markdown>
    </div>
  );
}

export default Experiences;
