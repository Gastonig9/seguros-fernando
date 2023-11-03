import { Link } from 'react-router-dom'
import "./Contacto.modules.css"


const Contacto = () => {
  return (
    <section className="contactame-contain">
        <div className='degrades-contacto'></div>
        <div className="contactame">
            <h1>Contactame</h1>
            <p>Si tenes alguna consulta, no dudes en contactarme.</p>
            <Link to="/contacto">Enviame tu consulta</Link>
        </div>
    </section>
  )
}

export default Contacto