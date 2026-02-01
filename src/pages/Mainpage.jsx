import { useState } from "react";
import Introductions from "./Introduction.jsx";
import ExampleProjects from "../components/ExampleProjects.jsx";
import Buttons from "../components/Button.jsx";
import Experiences from "../components/Experiences.jsx";
import Modal from "../components/Modal.jsx";
import ThemeToggle from "../components/Themetoggle.jsx"

function Mainpage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
        <ThemeToggle></ThemeToggle>
      <div className="pb-8">
        <Introductions handleOpenModal={handleOpenModal} />
      </div>
      <div className="bg-stone-block w-full max-w-5xl px-4 py-2 mx-auto bg-stone-300 rounded">
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
          />
        )}
      </div>
    </>
  );
}

export default Mainpage;
