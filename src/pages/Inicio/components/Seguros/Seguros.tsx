import style from "./Seguros.module.css";
import seguroAutomotor from "../../../../assets/images/seguro-automotor.png";
import seguroFamiliar from "../../../../assets/images/seguro-familiar.png";
import seguroMotocicletas from "../../../../assets/images/seguro-motocicleta.png"
import seguroComercio from "../../../../assets/images/seguro-comercio.png";
import seguroRobo from "../../../../assets/images/seguro-robo.png";
import seguroTrabajo from "../../../../assets/images/seguro-trabajo.jpg"
import { Link } from "react-router-dom";
const Seguros = () => {
  return (
    <>
      <div className={style.texto}>Seguros</div>
      <div className={style.separador}></div>

      <div className={style.divSeguros}>
        <div className={style.bgSeguros} style={{background: `url(${seguroAutomotor}), lightgray 50%`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition:"center"}}>
          <div className={style.textSeguros}>
          </div>
        </div>

        <div className={style.bgSeguros} style={{background: `url(${seguroFamiliar}), lightgray 50%`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition:"center"}}>
          <div className={style.textSeguros}>
            <div className={style.color}>
            </div>
          </div>
        </div>

        <div className={style.bgSeguros} style={{background: `url(${seguroMotocicletas}), lightgray 50%`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition:"center"}}>
          <div className={style.textSeguros}>
          </div>
        </div>
      </div>

      <div className={style.divSeguros}>
      <div className={style.bgSeguros} style={{background: `url(${seguroComercio}), lightgray 50%`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition:"center"}}>
          <div className={style.textSeguros}>
          </div>
        </div>

        <div className={style.bgSeguros} style={{background: `url(${seguroRobo}), lightgray 50%`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition:"center"}}>
          <div className={style.textSeguros}>
          </div>
        </div>

        <div className={style.bgSeguros} style={{background: `url(${seguroTrabajo}), lightgray 50%`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition:"center"}}>
          <div className={style.textSeguros}>
          </div>
        </div>
      </div>

      <div className={style.verMas}>
        <Link to="/seguros">
          Ver mas seguros <i className="fa-solid fa-arrow-right" style={{color: "color: #ffffff;"}}></i>
        </Link>
      </div>
    </>
  );
};

export default Seguros;
