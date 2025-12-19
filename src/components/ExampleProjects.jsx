import reservation from "../assets/reservation.png";
import flashcard from "../assets/flashcard.png";
import decoder from "../assets/decoder.png";
import recipes from "../assets/recipes.png";

function ExampleProjects() {
  const projectLinks = [
    {
      projectName: reservation,
      projectURL: "https://reservationapp.adamtsaidev.com/",
    },
    {
      projectName: flashcard,
      projectURL: "https://flashcardapp.adamtsaidev.com/",
    },
    {
      projectName: decoder,
      projectURL: "https://decoderapp.adamtsaidev.com/",
    },
    {
      projectName: recipes,
      projectURL: "https://recipeapp.adamtsaidev.com/",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 divide-x divide-y border border-gray-600">
        {projectLinks.map((project) => (
          <div className="p-4 cursor-pointer hover:bg-stone-600">
            <img
              src={project.projectName}
              onClick={() => {
                window.open(project.projectURL);
              }}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExampleProjects;
