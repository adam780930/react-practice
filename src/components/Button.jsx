function Button({ buttonName, ...props }) {
  return (
    <button
      {...props}
      type="button"
      className="text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary-soft shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none cursor-pointer"
    >
      {buttonName}
    </button>
  );
}

export default Button;
