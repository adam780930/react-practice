import { useState } from "react";
import Experiences from "../components/Experiences.jsx";
import Buttons from "../components/Button.jsx";

function Mainpage() {
  const [modal, SetModal] = useState(
    "fixed inset-0 bg-black bg-opacity-50 hidden flex items-center justify-center z-50"
  );
  const modalClass =
    "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";

  return (
    <div className="bg-stone-block w-full max-w-screen-lg px-4 py-2 mx-auto bg-stone-300">
      {/* <button id="open-modal" className="p-2 bg-blue-500 text-white rounded">
        Open Modal
      </button> */}

      <Buttons
        buttonName={"Experiences"}
        onClick={() => {
          SetModal(modalClass);
        }}
      />

      <div
        id="modal-overlay"
        className={modal}
      >
        <div className="bg-white p-6 rounded shadow-lg w-1/2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Modal Title</h2>
            <button
              id="close-modal"
              className="text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
          </div>
          <Experiences />
          <div className="mt-4 flex justify-end">
            <button id="close-modal-footer" className="p-2 bg-gray-300 rounded">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
