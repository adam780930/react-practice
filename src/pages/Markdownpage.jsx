import Markdown from "react-markdown";
import sampleMd from "../components/markdowndocs/Exampletext.md";

function Markdownpage() {
  return (
    <div className="bg-stone-block w-full max-w-5xl p-4 mx-auto bg-stone-300 text-center">
      <Markdown>{sampleMd}</Markdown>
    </div>
  );
}

export default Markdownpage;
