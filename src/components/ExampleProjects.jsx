import reservation from "../assets/reservation.png";
import flashcard from "../assets/flashcard.png";
import recipes from "../assets/recipes.png";
import decoder from "../assets/decoder.png";

function ExampleProjects() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div className="border-2 border-gray-400 p-4">
          <img src={reservation}></img>
        </div>
        <div className="border-2 border-gray-400 p-4">
          <img src={flashcard}></img>
        </div>
        <div className="border-2 border-gray-400 p-4">
          <img src={recipes}></img>
        </div>
        <div className="border-2 border-gray-400 p-4">
          <img src={decoder}></img>
        </div>
      </div>
    </div>
  );
}

export default ExampleProjects;
