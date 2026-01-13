import { useState } from "react";
import Experiences from "../components/Experiences.jsx";
import Buttons from "../components/Button.jsx";
import Modal from "../components/Modal.jsx";

function Mainpage() {
  const [isModalOpen, setIsModalOpen] = useState("hidden");
  const handleOpenModal = () => setIsModalOpen("");
  const handleCloseModal = () => setIsModalOpen("hidden");

  return (
    <div className="bg-stone-block w-full max-w-screen-lg px-4 py-2 mx-auto bg-stone-300">
      <div className="hover:opacity-50">
      <Buttons buttonName={"Experiences"} onClick={handleOpenModal} />
      </div>

      <div className={isModalOpen}>
        <div className="fixed inset-0  bg-stone-900/75 flex items-center justify-center z-50">
          <div className="rounded-lg shadow-xl w-full max-w-3xl mx-4 bg-stone-300">
            <div className="p-4 border-b">
              <h1 className="text-3xl font-semibold">Experiences</h1>
            </div>

            <div className="p-4 max-h-[70vh] overflow-y-auto">
              <Experiences />
            </div>

            <div className="p-4 border-t flex justify-end gap-4 hover:opacity-50">
              <Buttons buttonName={"Close"} onClick={handleCloseModal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
