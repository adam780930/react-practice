import { useState } from "react";
import Introductions from "./Introduction.jsx";
import ExampleProjects from "../components/ExampleProjects.jsx";
import Buttons from "../components/Button.jsx";
import Experiences from "../components/Experiences.jsx";
import Modal from "../components/Modal.jsx";

function Mainpage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(!isModalOpen);
  return (
    <>
      <div className="pb-8">
        <Introductions handleOpenModal={handleOpenModal} />
      </div>
      <div className="bg-stone-block w-full max-w-5xl px-4 py-2 mx-auto bg-stone-300 text-black rounded dark:bg-black dark:text-white">
        <div>
          <ExampleProjects />
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
    </>
  );
}

export default Mainpage;
