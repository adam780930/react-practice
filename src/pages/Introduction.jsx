import Markdown from "react-markdown";
import introduction from "../components/markdowndocs/introductions.md";

function Introduction() {
  return (
    <div>
      <div className="bg-stone-block w-full max-w-screen-lg px-4 py-2 mx-auto bg-stone-300">
        <span>Hello, I am Adam.</span>
        <Markdown>{introduction}</Markdown>
      </div>
    </div>
  );
}

export default Introduction;
