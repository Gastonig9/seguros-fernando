import React from "react";
import "./Formulario.modules.css";
import { FormProps } from "../../assets/types/types";
import emailjs from "@emailjs/browser";

const Formulario: React.FC<FormProps> = ({ nombre, correo, mensaje, onChange, enviado, setEnviado }) => {

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const form = document.getElementById("form-email") as HTMLFormElement;

      await emailjs.sendForm(
        "service_gid1uzi",
        "template_isulzzu",
        form,
        "rWreg_YhrnMARKfuN"
      );

      setEnviado(true)
    } catch (error) {
      console.error("Error al enviar el correo:", error);
    }
  }
  return (
    <form id="form-email" onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre</label>
      <input
        type="text"
        name="nombre"
        placeholder="Juan Perez"
        id="nombre"
        value={nombre}
        onChange={onChange}
      />

      <label htmlFor="correo">Correo electronico</label>
      <input
        type="email"
        name="correo"
        placeholder="juanp@gmail.com"
        id="correo"
        value={correo}
        onChange={onChange}
      />

      <label htmlFor="mensaje">Mensaje</label>
      <textarea
        name="mensaje"
        id="mensaje"
        cols={30}
        rows={10}
        placeholder="Escribe tu mensaje"
        value={mensaje}
        onChange={onChange}
      ></textarea>

      <button type="submit">{enviado ? "Enviado" : "Enviar"}</button>
    </form>
  );
};

export default Formulario;
