import logo_footer from "../../assets/images/logo-footer.png";
import matricula from "../../assets/images/matricula.png";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footerContain}>
      <div className={style.footerText}>
        <h3>Fernando <span>Carrillo</span></h3>
        <h6> Productor de Seguros y atencion personalizada</h6>
        <p><b>Copyright 2023 © <span>fernandocarrilloasesor.com</span> - Todos los derechos reservados</b></p>
      </div>
      
      <div>
        <img src={logo_footer} alt="logo footer" />
      </div>

      <div>
        <img src={matricula} alt="matricula" />
      </div>
    </footer>
  );
};

export default Footer;
