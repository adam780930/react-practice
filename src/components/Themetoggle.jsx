function ThemeSwitch() {
  return (
    <div>
      <button
        type="button"
        className="hs-dark-mode hs-dark-mode-active:hidden block border rounded p-2"
        data-hs-theme-click-value="dark"
      >
        Dark
      </button>
      <button
        type="button"
        className="hs-dark-mode hs-dark-mode-active:inline-flex hidden border rounded p-2"
        data-hs-theme-click-value="light"
      >
        Light
      </button>
    </div>
  );
}

export default ThemeSwitch;
