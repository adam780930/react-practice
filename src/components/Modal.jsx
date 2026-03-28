const Modal = ({ modalContent, closeButton, onClose }) => {
  return (
    <div>
      <div className="fixed inset-0  bg-stone-900/75 flex items-center justify-center z-50" onClick={onClose}>
        <div className="rounded-lg shadow-xl w-full max-w-3xl mx-4 bg-stone-300 dark:bg-black" onClick={(e) => e.stopPropagation()}>
          <div className="p-4 border-b">
            <h1 className="text-3xl font-semibold text-black dark:text-white">
              Experiences
            </h1>
          </div>
          <div className="p-4 max-h-[70vh] overflow-y-auto text-black dark:text-white">
            {modalContent ? modalContent : ""}
          </div>
          <div className="p-4 border-t flex justify-end gap-4 text-black dark:text-white">
            <div className="hover:opacity-50">
              {closeButton ? closeButton : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
