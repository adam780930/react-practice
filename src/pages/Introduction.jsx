import Markdown from "react-markdown";
import introduction from "../components/markdowndocs/introductions.md";

function Introduction() {
  return (
    <div>
      <div>this is Introductions page</div>
      <Markdown>{introduction}</Markdown>
      <div class="my-5 text-primary">extra text</div>
    </div>
  );
}

export default Introduction;
