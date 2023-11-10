import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/fernando-logo.png"

const Navbar = () => {
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
    </>
  );
};

export default Navbar;
