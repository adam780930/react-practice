function Button({ buttonName, buttonType, ...props }) {
  return (
    <button
      {...props}
      type={buttonType ? buttonType : "button"}
      className="bg-slate-100 border border-slate-300 hover:bg-slate-200 focus:ring-4 focus:ring-slate-300 shadow-sm font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none cursor-pointer rounded-lg text-slate-900 transition-colors dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-700 dark:focus:ring-slate-600"
    >
      {buttonName}
    </button>
  );
}

export default Button;
