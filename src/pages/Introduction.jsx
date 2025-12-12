import Markdown from "react-markdown";
import introduction from "../components/markdowndocs/introductions.md";

function Introduction() {
  return (
    <div>
      <div>this is Introductions page</div>
      <div className="bg-stone-800">
      <Markdown >{introduction}</Markdown>
      </div>
    </div>
  );
}

export default Introduction;
