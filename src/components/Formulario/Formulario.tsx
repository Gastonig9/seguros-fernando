import React from "react";
import "./Formulario.modules.css";
import { FormProps } from "../../assets/types/types";

const Formulario: React.FC<FormProps> = ({ nombre, correo, mensaje, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="nombre">Nombre</label>
      <input type="text" name="nombre" placeholder="Juan Perez" id="nombre" value={nombre}/>

      <label htmlFor="correo">Correo electronico</label>
      <input
        type="email"
        name="correo"
        placeholder="juanp@gmail.com"
        id="correo"
        value={correo}
      />

      <label htmlFor="mensaje">Mensaje</label>
      <textarea
        name="mensaje"
        id="mensaje"
        cols={30}
        rows={10}
        placeholder="Escibe tu mensaje"
        value={mensaje}
      ></textarea>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
