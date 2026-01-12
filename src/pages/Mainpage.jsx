import { useState } from "react";
import Experiences from "../components/Experiences.jsx";
import Buttons from "../components/Button.jsx";
import Modal from "../components/Modal.jsx";

function Mainpage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false)

  return (
    <div className="bg-stone-block w-full max-w-screen-lg px-4 py-2 mx-auto bg-stone-300">
      {/* <button id="open-modal" className="p-2 bg-blue-500 text-white rounded">
        Open Modal
      </button> */}

      <Buttons
        buttonName={"Experiences"}
        onClick={handleOpenModal}
      />
      
      <Modal show={isModalOpen} handleClose={handleCloseModal}>
        <Experiences />
      </Modal>
  
    </div>
  );
}

export default Mainpage;
