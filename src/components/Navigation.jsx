import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <header>
        <nav>
          <ul class="flex">
            <li class="mr-10 mb-6">
              <a class="text-blue-200 hover:text-blue-200 mr-10 mb-6" href="#">
                Active
              </a>
            </li>
            <li class="mr-6">
              <a class="text-blue-500 hover:text-blue-800" href="#">
                Link
              </a>
            </li>
            <li class="mr-6">
              <a class="text-blue-500 hover:text-blue-800" href="#">
                Link
              </a>
            </li>
            <li class="mr-6">
              <a class="text-gray-400 cursor-not-allowed" href="#">
                Disabled
              </a>
            </li>
          </ul>
          {/* <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="sub">Sub page</Link>
            </li>
            <li>
              <Link to="markdown">markdown example page</Link>
            </li>
            <li>
              <Link to="introduction">Introduction page</Link>
            </li>
            <li>
              <Link to="additional">Additional page</Link>
            </li>
            <li>
              <Link to="example">Example page</Link>
            </li>
          </ul> */}
        </nav>
      </header>
    </>
  );
}

export default Navigation;
