import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>amirgo</Link>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/obras">Obras</Link></li>
                <li><Link to="/artistas">Artistas</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
            </ul>
        </nav>
    );
};
