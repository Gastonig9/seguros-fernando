import React from "react";

import style from "./FormularioDenuncia.module.css";
import { FormProps } from "../../assets/types/types";

const FormularioDenuncia: React.FC<FormProps> = ({
  nombre,
  apellido,
  correo,
  mensaje,
  onSubmit,
}) => {
  return (
    <>
      <div className={style.formSiniestros}>
        <div className={style.textSiniestros}>
          <div className={style.title}>
            <div className={style.h3a}>
              <h3>Formulario de</h3>
            </div>
            <div className={style.h3b}>
              <h3>denuncia</h3>
            </div>
          </div>
          <div className={style.siniestrosText}>
            Completa todos los campos pra que pueda conocer el caso y me
            comunique con vos para ayudarte.
          </div>
        </div>
        <div className={style.formularioYWp}>
          <div>
            <form className={style.formulario} onSubmit={onSubmit}>
              <label htmlFor="nombre">Nombre</label>
              <input type="text" name="nombre" id="nombre" />
              <label htmlFor="nombre">Nombre</label>
              <input type="text" name="apellido" id="apellido" />
              <label htmlFor="nombre">Nombre</label>
              <input type="email" name="correo" id="correo" />
              <label htmlFor="nombre">Nombre</label>
              <textarea
                name="mensaje"
                id="mensaje"
                cols={20}
                rows={10}
              ></textarea>

              <button type="submit">Enviar</button>
            </form>
          </div>
          <img
            src="./wp.png"
            height={50}
            width={150}
            alt="WhatsappSiniestros"
          />
        </div>
      </div>
    </>
  );
};

export default FormularioDenuncia;
