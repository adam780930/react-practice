import { Link } from "react-router-dom";

function Navigation() {
  return (
    <header>
      <div></div>
      <nav>
        <ul>
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
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
