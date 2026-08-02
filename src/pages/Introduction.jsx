import { useState } from "react";
import Markdown from "react-markdown";
import Portrait from "../assets/Portrait.png";
import introduction from "../components/markdowndocs/introductions.md";
import Buttons from "../components/Button.jsx";
import Experiences from "../components/Experiences.jsx";
import Modal from "../components/Modal.jsx";

function Introduction() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(!isModalOpen);

  const customReactComponents = {
    h1: ({ node, ...props }) => (
      <h1 className="text-black dark:text-white" {...props} />
    ),
    a: ({ node, ...props }) => (
      <a className="text-black dark:text-white" {...props} />
    ),
  };
  return (
    <div>
      <div className="bg-stone-block w-full max-w-5xl px-4 py-2 mx-auto bg-stone-300 text-black rounded dark:bg-slate-900 dark:text-white dark:border dark:border-slate-800">
        <div className="grid grid-cols-2 p-4">
          <div className="m-auto p-auto">
            <img src={Portrait} className="w-70 h-70 rounded-full border dark:border-slate-700"></img>
            <div className="p-4 hover:opacity-50 text-center relative top-[5%]">
              <Buttons
                buttonName={"My Experiences"}
                onClick={handleOpenModal}
              />
            </div>
          </div>
          <div className="prose dark:prose-invert">
            <Markdown components={customReactComponents}>
              {introduction}
            </Markdown>
          </div>
        </div>
      </div>
      <div className="flex justify-center"></div>
      {isModalOpen && (
        <Modal
          modalContent={<Experiences />}
          closeButton={
            <Buttons buttonName={"Close"} onClick={handleOpenModal} />
          }
          onClose={handleOpenModal}
        />
      )}
    </div>
  );
}

export default Introduction;
