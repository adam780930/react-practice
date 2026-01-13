import { Link } from "react-router-dom";

function Navigation() {
  const pages = [
    { link: "sub", linkText: "Sub Page" },
    { link: "markdown", linkText: "Markdown" },
    { link: "introduction", linkText: "Introduction" },
    { link: "additional", linkText: "Additional" },
    { link: "example", linkText: "Example Projects" },
  ];

  return (
    <div>
      <header>
        <nav className="block w-full max-w-screen-lg px-4 py-2 mx-auto bg-stone-300 bg-opacity-90 sticky top-3 shadow lg:px-8 lg:py-3 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
          <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
            <Link to="/">
              <div className="mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold">
                My Practice Project
              </div>
            </Link>
            <div className="hidden lg:block">
              <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                {pages.map((page) => (
                  <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600" key={page.linkText}>
                    <Link to={page.link}>
                      <div className="flex items-center">{page.linkText}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navigation;
