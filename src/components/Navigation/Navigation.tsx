import style from "./Navigation.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-fernando2.png";
import { useState } from "react";

const Navigation = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className={style.navBar}>
        <div className={style.imgBrand}>
          <img src={logo} alt="fernando logo" />
        </div>
        <ul className={style.contenedorCard}>
          <Link to="/">
            <li className={style.blue}>Inicio</li>
          </Link>

          <Link to="/seguros">
            <li>Seguros</li>
          </Link>
          <Link to="/siniestros">
            <li>Siniestros</li>
          </Link>
          <Link to="/contacto">
            <li>Contactame</li>
          </Link>
        </ul>
      </div>

      <div className={style.menuMobile}>
        <div className={style.menu}>
          <div className={style.imgBrand}>
            <img src={logo} alt="fernando logo" onClick={handleMenu} />
          </div>

          <div className={style.buttonMenu} onClick={handleMenu}>
            <i
              className="fa-solid fa-bars"
              style={{ color: menu ? "#00ADE6" : "#133e71" }}
            ></i>
          </div>
        </div>

        <ul className={menu ? style.menuAnimation : style.menuAnimationClose}>
          <a href="/">
            <li className={style.blue}>Inicio</li>
          </a>

          <a href="/seguros">
            <li>Seguros</li>
          </a>

          <a href="/siniestros">
            <li>Siniestros</li>
          </a>

          <a href="/contacto">
            <li>Contactame</li>
          </a>
          
          <a
            href="https://wa.me/2615868074?text=¡Hola%20Fernando!%20Vengo de tu sitio web. ¿Puedo hacerte una consulta?"
            target="_blank"
          >
            <div className={style.buttonWMobile}>
              <li className={style.whatsappConsulta}>
                Enviar consulta por Whatsapp
              </li>
            </div>
          </a>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
