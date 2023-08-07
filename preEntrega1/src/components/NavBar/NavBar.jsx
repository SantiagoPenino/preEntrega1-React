import React from "react"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-warning d-flex justify-content-around">
            <a className="navbar-brand" href="#">TiendaCoder</a>
                <ul className="navbar-nav">
                    <li className="nav-item"><a href="#" className="nav-link">Televisores</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Notebooks</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Celulares</a></li>
                </ul>   
            <div>
            <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar