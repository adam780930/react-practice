function Button({ buttonName, buttonType, ...props }) {
  return (
    <button
      {...props}
      type={buttonType ? buttonType : "button"}
      className="text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary-soft shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none cursor-pointer rounded text-black dark:text-white"
    >
      {buttonName}
    </button>
  );
}

export default Button;
