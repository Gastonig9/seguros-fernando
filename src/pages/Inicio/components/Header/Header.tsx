import imagenBanner from "../../../../assets/images/fernando-carrillo-perfil.jpg";
import icono_contacto from "../../../../assets/images/icono-contacto.png";
import "./Header.modules.css";

const Header = () => {
  return (
    <header className="header-contain">
      <div className="degrades"></div>
      <div className="imagen-contain">
        <img src={imagenBanner} alt="Fernando Imagen de Perfil" />
      </div>

      <div className="descripcion-contain">
        <h6>Fernando Carrillo</h6>
        <h4>Productor de Seguros</h4>
        <p>
          Con más de una década de experiencia, te brindo atención personalizada
          para resguardar tu patrimonio y el de tus seres queridos de manera
          eficiente, segura y sencilla.
        </p>

        <div className="botones-contain">
          <a href="/contacto">
            <img src={icono_contacto} alt="Contacto Icono" />
            Contactame
          </a>

          <a href="/seguros">
            Ver Seguros{" "}
            <i
              className="fa-solid fa-arrow-right"
              style={{ color: "#545454" }}
            ></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;