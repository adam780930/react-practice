import { Link } from "react-router-dom";
import Reacticons from "./Reacticons.jsx";
import ThemeToggle from "./Themetoggle.jsx";

function Navigation() {
  const pages = [
    { link: "markdown", linkText: "About this Site" },
    { link: "contact", linkText: "Contact Me" },
  ];

  return (
    <div>
      <header>
        <nav className="block w-full max-w-5xl px-4 py-2 mx-auto bg-stone-300 bg-opacity-90 sticky top-3 shadow lg:px-8 lg:py-3 backdrop-blur-lg backdrop-saturate-150 z-9999 dark:bg-black dark:text-white">
          <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800 dark:text-white">
            <div className="flex items-center gap-1 text-xl">
              <Link to="/">
                <div className="mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold dark:text-white">
                  My Landing Page
                </div>
              </Link>
              <Reacticons />
            </div>
            <div className="hidden lg:block">
              <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                {pages.map((page) => (
                  <li
                    className="flex items-center p-1 text-sm gap-x-2 text-slate-600 dark:text-white"
                    key={page.linkText}
                  >
                    <Link to={page.link}>
                      <div className="flex items-center">{page.linkText}</div>
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
