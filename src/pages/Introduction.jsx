import Markdown from "react-markdown";
import Portrait from "../assets/Portrait.png";
import introduction from "../components/markdowndocs/introductions.md";

function Introduction() {
  return (
    <div>
      <div className="bg-stone-block w-full max-w-screen-lg px-4 py-2 mx-auto bg-stone-300">
        <div class="grid grid-cols-2">
          <div className="m-auto p-auto">
            <img src={Portrait} className="w-70 h-70 rounded-full border"></img>
          </div>
          <div>
            <span className="text-3xl">Hello, I am Adam.</span>
            <Markdown>{introduction}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
