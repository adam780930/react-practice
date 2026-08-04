import Markdown from "react-markdown";
import sampleMd from "../components/markdowndocs/Exampletext.md";
import ExampleProjects from "../components/ExampleProjects.jsx";

function Markdownpage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-stone-block w-full max-w-5xl px-4 py-2 mx-auto bg-stone-300 text-black rounded dark:bg-slate-900 dark:text-white dark:border dark:border-slate-800 text-center">
        <Markdown>{sampleMd}</Markdown>
      </div>
      <div className="bg-stone-block w-full max-w-5xl px-4 py-2 mx-auto bg-stone-300 text-black rounded dark:bg-slate-900 dark:text-white dark:border dark:border-slate-800">
        <ExampleProjects />
      </div>
    </div>
  );
}

export default Markdownpage;
