import Experiences from "../components/Experiences.jsx";
import Buttons from "../components/Button.jsx";

function Mainpage() {
  return (
    <div className="bg-stone-block w-full max-w-screen-lg px-4 py-2 mx-auto bg-stone-300">
      <Buttons buttonName={'Experiences'}/>
      <Experiences />
    </div>
  );
}

export default Mainpage;
