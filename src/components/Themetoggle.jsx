function ThemeToggle() {
  // Example toggle script (include in <head> to prevent FOUC)
  const toggle = document.getElementById("theme-toggle");
  const setDark = (isDark) => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("color-theme", isDark ? "dark" : "light");
  };

  // Initial state
  setDark(
    localStorage.getItem("color-theme") === "dark" ||
      (!localStorage.getItem("color-theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches),
  );

  // Event listener
  // toggle.addEventListener("click", () =>
  //   setDark(!document.documentElement.classList.contains("dark")),
  // );

  return (
    <div>
      <button
        id="theme-toggle"
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
      >
        {/* <!-- Sun Icon (for when in dark mode) - initially hidden in light mode --> */}
        <svg
          id="theme-toggle-light-icon"
          className="w-6 h-6 text-gray-800 hidden dark:block"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org"
        >
          light
        </svg>
        {/* <!-- Moon Icon (for when in light mode) - initially hidden in dark mode --> */}
        <svg
          id="theme-toggle-dark-icon"
          className="w-6 h-6 text-gray-800 dark:hidden"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org"
        >
          dark
        </svg>
      </button>
    </div>
  );
}

export default ThemeToggle;
