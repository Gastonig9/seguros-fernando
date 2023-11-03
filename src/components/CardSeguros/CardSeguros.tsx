import { CardProps } from '../../assets/types/types'
import "./CardSeguros.modules.css"

const CardSeguros = ({ img, title, description } : CardProps) => {
  return (
    <div className="card-contain">
        <div className='card-image'>
            <img src={img} alt="card-image" />
        </div>

        <div className='card-body'>
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default CardSeguros