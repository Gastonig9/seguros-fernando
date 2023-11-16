import React, { useState,  } from "react";
import Formulario from "../../../../components/Formulario/Formulario";
import "./FormContacto.modules.css";


const FormContacto = () => {
    const [formData, setFormData] = useState({
      nombre: "",
      correo: "",
      mensaje: "",
    });

    const [alert, setalert] = useState(false)
      
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    };
  
    return (
      <div className="formulario-contain">
        <div className="formulario-descripcion">
          <h1>
            Envia tu <span>duda</span> o <span>consulta</span>
          </h1>
        </div>
  
        <Formulario
          nombre={formData.nombre}
          correo={formData.correo}
          mensaje={formData.mensaje}
          onChange={handleChange}
          enviado={alert}
          setEnviado={setalert}
        />
      </div>
    );
  };
  
  export default FormContacto;
  