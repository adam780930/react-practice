import Markdown from "react-markdown";
import Exp from "./markdowndocs/Experiences.md";


function Experiences() {
return (
    <div className="prose">
        <Markdown>{Exp}</Markdown>
    </div>
)

}

export default Experiences;