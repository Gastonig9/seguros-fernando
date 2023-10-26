import logo_footer from "../../assets/images/logo-footer.png"
import matricula from "../../assets/images/matricula.png"
import "./Footer.module.css"

const Footer = () => {
  return (
    <footer className="footer-contain">
      <div>
        <img src={logo_footer} alt="logo footer" />
      </div>
      <div>
        <img src={matricula} alt="matricula" />
      </div>
    </footer>
  )
}

export default Footer