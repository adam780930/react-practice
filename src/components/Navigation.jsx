import { Link } from "react-router-dom";
import Reacticons from "./Reacticons.jsx";
import ThemeToggle from "./Themetoggle.jsx";

function Navigation() {
  const pages = [
    { link: "/#markdown", linkText: "Sample Projects" },
    { link: "/#contact", linkText: "Contact Me" },
  ];

  return (
    <div>
      <header>
        <nav className="block w-full max-w-5xl px-4 py-2 mx-auto bg-stone-300 bg-opacity-90 fixed top-3 inset-x-0 shadow lg:px-8 lg:py-3 backdrop-blur-lg backdrop-saturate-150 z-9999 dark:bg-slate-900/90 dark:text-white dark:border dark:border-slate-800">
          <div className="container flex flex-wrap items-center justify-between mx-auto text-black dark:text-white">
            <div className="flex items-center gap-1 text-xl">
              <Link to="/">
                <div className="mr-4 block cursor-pointer py-1.5 text-xl text-black font-semibold dark:text-white">
                  Adam Tsai
                </div>
              </Link>
              <Reacticons />
            </div>
            <div className="hidden lg:block">
              <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                {pages.map((page) => (
                  <li key={page.linkText}>
                    <Link to={page.link}>
                      <div className="flex items-center rounded-lg border border-slate-300 bg-slate-100 px-3 py-1.5 text-base text-black shadow-sm transition-colors hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">
                        {page.linkText}
                      </div>
                    </Link>
                  </li>
                ))}
                <ThemeToggle />
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navigation;
