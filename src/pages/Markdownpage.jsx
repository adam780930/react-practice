import Markdown from "react-markdown";
import sampleMd from "../components/markdowndocs/Exampletext.md";

function Markdownpage() {
  return (
    <div className="bg-stone-block w-full max-w-5xl px-4 py-2 mx-auto bg-stone-300 text-black rounded dark:bg-black dark:text-white text-center">
      <Markdown>{sampleMd}</Markdown>
    </div>
  );
}

export default Markdownpage;
