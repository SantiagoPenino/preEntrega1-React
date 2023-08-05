import React from "react"
import CARTWIDGET from "../CartWidget/CartWidget"

const NAVBAR = () =>{
    return(
        <nav className="navbar">
        <div>
            <a class="navbar-brand" href="#">Tienda</a>
            <div>
                <ul>
                    <li className="nav-item"><a href="#" className="nav-link">Televisores</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Notebooks</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Celulares</a></li>
                </ul>
            </div>
            <CARTWIDGET/>
            
        </div>
        </nav>
    )
}

export default NAVBAR