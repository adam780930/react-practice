import { useState } from "react";
import Buttons from "../components/Button.jsx";
import Experiences from "../components/Experiences.jsx";
import Modal from "../components/Modal.jsx";

function Mainpage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="bg-stone-block w-full max-w-5xl px-4 py-2 mx-auto bg-stone-300 rounded">
      <div className="hover:opacity-50">
        <Buttons buttonName={"Experiences"} onClick={handleOpenModal} />
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
  );
}

export default Mainpage;
