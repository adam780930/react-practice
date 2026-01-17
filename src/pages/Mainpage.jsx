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
      <div className="pb-4">
        <Introductions />
      </div>
      <div className="bg-stone-block w-full max-w-5xl px-4 py-2 mx-auto bg-stone-300 rounded">
        <div>
          <ExampleProjects />
        </div>
        <div className="flex justify-center">
          <div className="p-4 hover:opacity-50">
            <Buttons
              onClick={() => {
                window.open("https://project.adamtsaidev.com");
              }}
              buttonName={"JavaScript Projects"}
            />
          </div>
          <div className="p-4 hover:opacity-50">
            <Buttons buttonName={"My Experiences"} onClick={handleOpenModal} />
          </div>
        </div>

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
