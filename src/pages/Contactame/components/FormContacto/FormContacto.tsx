import React from "react"
import Formulario from "../../../../components/Formulario/Formulario"
import "./FormContacto.modules.css"

const FormContacto = () => {

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
    }
  return (
    <div className="formulario-contain">
        <div className="formulario-descripcion">
            <h1>
                Envia tu <span>duda</span> o <span>consulta</span>
            </h1>
        </div>

        <Formulario nombre="" correo="" mensaje="" onSubmit={handleSubmit} />
    </div>
  )
}

export default FormContacto