import Markdown from "react-markdown";
import sampleMd from "../components/markdowndocs/Exampletext.md";

function Markdownpage() {
  return (
    <div>
      <Markdown>{sampleMd}</Markdown>
    </div>
  );
}

export default Markdownpage;
