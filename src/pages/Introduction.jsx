import Markdown from "react-markdown";
import Portrait from "../assets/Portrait.png";
import introduction from "../components/markdowndocs/introductions.md";
import Buttons from "../components/Button.jsx";

function Introduction({ handleOpenModal }) {
  return (
    <div>
      <div className="bg-stone-block w-full max-w-5xl px-4 py-2 mx-auto bg-stone-300 text-black rounded dark:bg-black dark:text-white">
        <div className="grid grid-cols-2 p-4">
          <div className="m-auto p-auto">
            <img src={Portrait} className="w-70 h-70 rounded-full border"></img>
            <div className="p-4 hover:opacity-50 text-center">
              <Buttons
                buttonName={"My Experiences"}
                onClick={handleOpenModal}
              />
            </div>
          </div>
          <div className="prose">
            <Markdown>{introduction}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
