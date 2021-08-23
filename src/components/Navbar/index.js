import React from "react";

import "./Navbar.scss";
import logo from "../../assets/images/logo.svg";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                <img src={logo} alt="Logo da Pharma Inc"/>
                    Pharma Inc.
                </a>
            </div>
        </nav>
    );
}

export default Navbar;