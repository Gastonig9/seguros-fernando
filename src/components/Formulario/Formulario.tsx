import React from "react";
import "./Formulario.modules.css";
import { FormProps } from "../../assets/types/types";
import emailjs from "@emailjs/browser";
import { credentials } from "../../config";

const Formulario: React.FC<FormProps> = ({
  nombre,
  correo,
  mensaje,
  onChange,
  enviado,
  setEnviado,
  error,
  setError,
}) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const form = document.getElementById("form-email") as HTMLFormElement;

      await emailjs.sendForm(
        credentials.REACT_APP_EMAILJS_SERVICE_ID,
        credentials.REACT_APP_EMAILJS_TEMPLATE_ID,
        form,
        credentials.REACT_APP_EMAILJS_USER_ID
      );

      setEnviado(true);
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      setError(true);
    }
  };
  return (
    <form id="form-email" onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre</label>
      <input
        type="text"
        name="nombre"
        placeholder="Juan Perez"
        id="nombre"
        value={nombre}
        minLength={3}
        maxLength={10}
        onChange={onChange}
        required
        autoComplete="off"
      />

      <label htmlFor="correo">Correo electronico</label>
      <input
        type="email"
        name="correo"
        placeholder="juanp@gmail.com"
        id="correo"
        value={correo}
        onChange={onChange}
        required
        autoComplete="off"
      />

      <label htmlFor="mensaje">Mensaje</label>
      <textarea
        name="mensaje"
        id="mensaje"
        cols={30}
        rows={10}
        placeholder="Escribe tu mensaje"
        value={mensaje}
        minLength={10}
        onChange={onChange}
        required
        autoComplete="off"
      ></textarea>

      {error ? (
        <p className="error-message">
          Hubo un error al enviar el mensaje. <a href="/contacto">Inténtalo de nuevo</a>
        </p>
      ) : (
        <button className={enviado ? "button-send" : "button-submit"} type="submit">{enviado ? "Enviado" : "Enviar"}</button>
      )}
    </form>
  );
};

export default Formulario;
