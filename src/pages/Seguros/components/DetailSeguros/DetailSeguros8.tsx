import React from "react";
import style from "./DetailSeguros.module.css";
const DetailSeguros8 = () => {
  return (
    <div className={style.vidaIndividual}>
      <div className={style.vidaIndividualText}>
        <h2>VIDA INDIVIDUAL</h2>
        <p>
          Seguro de protección personal y familiar para cuidar los sueños,
          deseos, necesidades y proyectos de su familia.
        </p>

        <p>
          Beneficios Adicionales por asegurarse más de una persona de la misma
          familia.
        </p>
      </div>
      <div className={style.sepelioImg}>
        <img src="../../images/seguro-caucion.jpg" alt="" />
      </div>
    </div>
  );
};

export default DetailSeguros8;
