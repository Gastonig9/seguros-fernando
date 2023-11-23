import style from "./Seguros.module.css";
import { cardSeguroInicio } from "../../../../assets/constants/constants";
import { SeguroInicio } from "../../../../assets/types/types";
import { Link } from "react-router-dom";
const Seguros = () => {
  return (
    <>
      <h2 className={style.tituloSeguros}>Seguros</h2>
      <div className={style.separador}></div>
      
      <div className={style.segurosInicioContain}>
        {cardSeguroInicio.map((seguro: SeguroInicio, index: number) => (
          <>
            <div key={index} className={style.seguroCard}>
              <img src={seguro.img} alt="Seguro Img" />
              <div className={style.degrades}></div>
              <div className={style.descripcionSeguroInicio}>
                <h6>{seguro.title}</h6>
                <p>{seguro.text}</p>
              </div>
            </div>
          </>
        ))}
      </div>

      <div className={style.verMas}>
        <Link to="/seguros">
          Ver mas seguros{" "}
          <i
            className="fa-solid fa-arrow-right"
            style={{ color: "color: #ffffff;" }}
          ></i>
        </Link>
      </div>
    </>
  );
};

export default Seguros;