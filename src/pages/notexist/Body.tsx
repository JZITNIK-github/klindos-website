import { Link } from "react-router-dom";
import "./body.css"
function Body() {
    return (
        <div className="bodyn">
            <h1>404</h1>
            <h3>Omlouváme se ale tato stránka neexistuje.</h3>
            <Link to="/"><div className="button">Domů</div></Link>
        </div>
    )
}
export default Body;