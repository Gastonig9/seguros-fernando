
import telefono from "../../../../assets/images/telefono.png"
import email from "../../../../assets/images/email.png"
import style from "./Medios.module.css"

const Medios = () => {
  return (
    <div className={style.mediosContain}>
        <h2>
            Otros medios de <span>contacto</span>
        </h2>
        <div className={style.medios}>
            <div>
                <img src={email} alt="Email icono" />
                <h6>xxxxxx@xxxx.com</h6>
            </div>

            <div>
                <img src={telefono} alt="Telefono Icono" />
                <h6>+5411111111111</h6>
            </div>
        </div>
    </div>
  )
}

export default Medios