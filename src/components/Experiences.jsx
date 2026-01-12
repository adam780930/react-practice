import Markdown from "react-markdown";
import Exp from "./markdowndocs/Experiences.md";


function Experiences() {
return (
    <div>
        <Markdown>{Exp}</Markdown>
    </div>
)

}

export default Experiences;