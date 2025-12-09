import Markdown from "react-markdown";
import introduction from "../components/markdowndocs/introductions.md";

function Introduction() {
  return (
    <div>
      <div>this is Introductions page</div>
      <Markdown>{introduction}</Markdown>
    </div>
  );
}

export default Introduction;
