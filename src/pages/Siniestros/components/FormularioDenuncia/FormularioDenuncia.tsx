import React, { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { sinisterCredentials } from "../../../../config";
import style from "./FormularioDenuncia.module.css";
interface SiniestrosFormProps {}

const FormularioDenuncia: React.FC<SiniestrosFormProps> = () => {
  const [formulario, setFormulario] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });

  const [emailSend, setemailSend] = useState<string>("pending");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormulario((prevFormulario) => ({
      ...prevFormulario,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        sinisterCredentials.REACT_APP_EMAILJS_SERVICE_ID,
        sinisterCredentials.REACT_APP_EMAILJS_TEMPLATE_ID,
        formulario,
        sinisterCredentials.REACT_APP_EMAILJS_USER_ID
      )
      .then((response) => {
        if (response.status === 200) {
          setemailSend("send");
        } else {
          setemailSend("error");
        }
      })
      .catch((error) => {
        const errorMessage = `Error: status ${error.status}.`
        alert(`Ocurrio un error ${errorMessage}`)
        setemailSend(`error: ${error}`);
      });
  };

  return (
    <>
      <div className={style.siniestrosTotal}>
        <div className={style.textoSiniestros}>
          <h2 className={style.h2FormularioDenunciaA}>Formulario de </h2>
          <h2 className={style.h2FormularioDenunciaB}>denuncia</h2>
          <p className={style.parrafoDenuncia}>
            Completa todos los campos pra que pueda conocer el caso y me
            comunique con vos para ayudarte.
          </p>
        </div>
        <div className={style.formulario}>
          <div className={style.wpForm}>
            <form onSubmit={handleSubmit}>
              <div className={style.inputLabel}>
                <label>Nombre:</label>
                <input
                  type="text"
                  name="name"
                  value={formulario.name}
                  onChange={handleChange}
                  required
                  minLength={5}
                  autoComplete="off"
                />
              </div>
              <div className={style.inputLabel}>
                <label>Correo:</label>
                <input
                  type="email"
                  name="email"
                  value={formulario.email}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                  x-moz-errormessage="Por favor, especifique una dirección de correo válida."
                />
              </div>
              <div className={style.inputLabel}>
                <label>Descripción del problema:</label>
                <textarea
                  placeholder="Breve relato (Dia, hora, lugar, detalle de lo sucedido.
                               Descripción de los daños
                               Datos de la otra persona (nombre, Dni, teléfono,domicilio)
                               Datos del otro vehículo (patente, compañía de seguros)
                               Intervino policía?
                               Si hubo personas lesionadas por favor enviar (ya sea que iban en tu auto o no)
                               Nombre, DNI, Domicilio, Teléfono"
                  name="message"
                  value={formulario.message}
                  onChange={handleChange}
                  rows={6}
                  cols={50}
                  required
                  minLength={25}
                />
              </div>

              <button
                className={
                  emailSend.includes("send")
                    ? style.buttonSend
                    : emailSend.includes("error")
                    ? style.buttonError
                    : style.buttonPending
                }
                type="submit"
                disabled={emailSend.includes("send") ? true : false}
              >
                {emailSend.includes("pending")
                  ? "Enviar"
                  : emailSend.includes("send")
                  ? "Enviado"
                  : "Ocurrio un error"}
              </button>
            </form>

            <div>
              <img src="./wp.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormularioDenuncia;
