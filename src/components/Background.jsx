import bgImg from "../assets/background.jpeg";

function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <img
        src={bgImg}
        className="w-full h-full object-cover opacity-80"
      ></img>
    </div>
  );
}

export default Background;
