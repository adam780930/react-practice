import { FaGithub, FaLinkedin } from "react-icons/fa6";

function Reacticons() {
  return (
    <div className="flex item-center gap-1">
      <div
        className="hover:opacity-50"
        onClick={() => {
          window.open("https://github.com/adam780930");
        }}
      >
        <FaGithub />
      </div>
      <div
        className="hover:opacity-50"
        onClick={() => {
          window.open("https://www.linkedin.com/in/adam-yilin-tsai");
        }}
      >
        <FaLinkedin />
      </div>
    </div>
  );
}

export default Reacticons;
