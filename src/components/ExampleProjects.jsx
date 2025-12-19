import reservation from "../assets/reservation.png";
import flashcard from "../assets/flashcard.png";
import recipes from "../assets/recipes.png";
import decoder from "../assets/decoder.png";

function ExampleProjects() {
  const projectLinks = {
    reservation: "https://reservationapp.adamtsaidev.com/",
    flashcard: "https://flashcardapp.adamtsaidev.com/",
    decoder: "https://decoderapp.adamtsaidev.com/",
    recipes: "https://recipeapp.adamtsaidev.com/",
  };

  return (
    <div>
      <div className="grid grid-cols-2 divide-x divide-y border border-gray-600">
        <div className="p-4 cursor-pointer hover:bg-stone-600">
          <img
            src={reservation}
            onClick={() => {
              window.open(projectLinks.reservation);
            }}
          ></img>
        </div>
        <div className="p-4 cursor-pointer hover:bg-stone-600">
          <img
            src={flashcard}
            onClick={() => {
              window.open(projectLinks.flashcard);
            }}
          ></img>
        </div>
        <div className="p-4 cursor-pointer hover:bg-stone-600">
          <img
            src={decoder}
            onClick={() => {
              window.open(projectLinks.decoder);
            }}
          ></img>
        </div>
        <div className="p-4 cursor-pointer hover:bg-stone-600">
          <img
            src={recipes}
            onClick={() => {
              window.open(projectLinks.recipes);
            }}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default ExampleProjects;
