function ThemeSwitch() {
  return (
    <div className="text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary-soft shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none cursor-pointer rounded">
      <button
        type="button"
        className="hs-dark-mode hs-dark-mode-active:hidden block"
        data-hs-theme-click-value="dark"
      >
        Dark
      </button>
      <button
        type="button"
        className="hs-dark-mode hs-dark-mode-active:inline-flex hidden"
        data-hs-theme-click-value="light"
      >
        Light
      </button>
    </div>
  );
}

export default ThemeSwitch;
