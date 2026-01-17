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
      <h1 className="p-4 text-3xl text-center">React Projects</h1>
      <div className="grid grid-cols-2 border">
        {projectLinks.map((project) => (
          <div
            className="cursor-pointer hover:opacity-50 border"
            key={project.projectName}
          >
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
