import "./header.css"
import { useState } from "react";
import MenuItems from "../../config/menu"
import { NavLink, Link } from "react-router-dom";

function Header() {
    const [ display, setdisplay ] = useState('none');
    function toggleMenu() {
        if (display == "none") {
            setdisplay("flex")
        }
        else {
            setdisplay("none")
        }
    }
    const menu = MenuItems.map((name) => {
        return <NavLink className="el" to={name[1]}><span>{name[0]}</span></NavLink>
    })
    const menuMobile = MenuItems.map((name) => {
        return <Link onClick={toggleMenu} to={name[1]}><span>{name[0]}</span></Link>
    })
    return (
        <header>
            <span className="title"><NavLink to="/">KLIND OS</NavLink></span>
            <div className="menu">{menu}</div>
            <div className="menu-btn" onClick={toggleMenu}></div>
            <div className="menu-mobile" style={{'display': display}}>
                <div className="menu-btn-mobile" onClick={toggleMenu}></div>
                <Link onClick={toggleMenu} to={"/"}><span>KLIND OS</span></Link>
                {menuMobile}
            </div>
        </header>
    )
}
export default Header;