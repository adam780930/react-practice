import Markdown from "react-markdown";
import Portrait from "../assets/Portrait.png";
import introduction from "../components/markdowndocs/introductions.md";
import Reacticons from "../components/Reacticons.jsx";

function Introduction() {
  return (
    <div>
      <div className="bg-stone-block w-full max-w-5xl px-4 py-2 mx-auto bg-stone-300 rounded">
        <div className="grid grid-cols-2 p-4">
          <div className="m-auto p-auto">
            <img src={Portrait} className="w-70 h-70 rounded-full border"></img>
          </div>
          <div className="prose">
            <Markdown>{introduction}</Markdown>
          </div>
          <div className="text-3xl">
            <Reacticons />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
