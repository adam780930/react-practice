import { useState } from "react";
import Experiences from "../components/Experiences.jsx";
import Buttons from "../components/Button.jsx";
import Modal from "../components/Modal.jsx";

function Mainpage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="bg-stone-block w-full max-w-screen-lg px-4 py-2 mx-auto bg-stone-300 ">
      {/* <button id="open-modal" className="p-2 bg-blue-500 text-white rounded">
        Open Modal
      </button> */}

      <Buttons buttonName={"Experiences"} onClick={handleOpenModal} />
      <button
        data-dialog-target="modal"
        className=" rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
        type="button"
      >
        Open Modal
      </button>
      {/* remove hidden here to show modal */}
      <div class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg shadow-xl w-full max-w-3xl mx-4">
          <div class="p-4 border-b">
            <h3 class="text-xl font-semibold">Experiences</h3>
          </div>

          <div class="p-4 max-h-[70vh] overflow-y-auto">
            <Experiences />
          </div>

          <div class="p-4 border-t flex justify-end gap-4">
            <button class="px-4 py-2 bg-blue-600 text-white rounded">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
