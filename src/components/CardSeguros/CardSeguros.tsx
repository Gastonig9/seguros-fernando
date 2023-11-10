import { CardProps } from "../../assets/types/types";
import "./CardSeguros.modules.css";
import { useParams } from "react-router-dom";

const CardSeguros = ({ img, title, description }: CardProps) => {
  const { id } = useParams();
  return (
    <div key={id} className="card-contain">
      <div className="card-image">
        <img src={img} alt="card-image" />
      </div>

      <div className="card-body">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
      <button>Ir al detalle</button>
    </div>
  );
};

export default CardSeguros;