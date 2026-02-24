const Modal = ({ modalContent, closeButton }) => {
  return (
    <div>
        <div className="fixed inset-0  bg-stone-900/75 flex items-center justify-center z-50">
          <div className="rounded-lg shadow-xl w-full max-w-3xl mx-4 bg-stone-300 dark:bg-black dark:text-white">
            <div className="p-4 border-b">
              <h1 className="text-3xl font-semibold">Experiences</h1>
            </div>
            <div className="p-4 max-h-[70vh] overflow-y-auto">
              {modalContent ? modalContent : ""}
            </div>
            <div className="p-4 border-t flex justify-end gap-4 hover:opacity-50">
              {closeButton ? closeButton : ""}
            </div>
          </div>
        </div>
    </div>
  );
};

export default Modal;
