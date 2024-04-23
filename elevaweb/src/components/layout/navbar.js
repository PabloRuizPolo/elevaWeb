import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [burguer_class, setBurguerClass] = useState("burguer-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    setIsMenuClicked(!isMenuClicked);
    setBurguerClass(
      isMenuClicked ? "burguer-bar unclicked" : "burguer-bar clicked"
    );
    setMenuClass(isMenuClicked ? "menu hidden" : "menu visible");
  };

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <nav>
        <h1>ELEVA Tu Club</h1>
        <div className="burguer-menu" onClick={updateMenu}>
          <div className={burguer_class}></div>
          <div className={burguer_class}></div>
          <div className={burguer_class}></div>
        </div>
      </nav>

      <div className={menu_class}>
        <ul className="lista-menu">
          <li className="lista-menu-items">
            <a href="#servicios">Servicios</a>
          </li>
          <li className="lista-menu-items">
            <a href="#app">App</a>
          </li>
          <li className="lista-menu-items">
            <a href="#formulario">Formulario Contacto</a>
          </li>
          <li className="lista-menu-items">
            <a href="#opinions">Opiniones Clientes</a>
          </li>
          <li className="lista-menu-items">
            <a href="#about-me">Sobre mí</a>
          </li>
          <li className="lista-menu-items">
            <a href="#elevatuclub">ElevaTuClub</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
