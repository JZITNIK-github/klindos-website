import "./header.css"
import MenuItems from "../../config/menu"
import { NavLink } from "react-router-dom";
function Header() {
    const menu = MenuItems.map((name) => {
        return <NavLink className="el" to={name[1]}><span>{name[0]}</span></NavLink>
    })
    return (
        <header>
            <span className="title"><NavLink to="/">KLIND - OS</NavLink></span>
            <div className="menu">{menu}</div>
        </header>
    )
}
export default Header;