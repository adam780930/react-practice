import bgImg from "../assets/background.jpeg";

function Background() {
  return (
    <div>
      <img
        src={bgImg}
        className="absolute inset-0 bg-no-repeat bg-cover bg-center z-[-1] opacity-80"
      ></img>
    </div>
  );
}

export default Background;
