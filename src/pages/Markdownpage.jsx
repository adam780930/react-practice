import Markdown from "react-markdown";
import sampleMd from "../components/markdowndocs/Exampletext.md";

function Markdownpage() {
  return (
    <div className="bg-stone-block w-full max-w-screen-lg px-4 py-2 mx-auto bg-stone-300">
      <Markdown>{sampleMd}</Markdown>
    </div>
  );
}

export default Markdownpage;
