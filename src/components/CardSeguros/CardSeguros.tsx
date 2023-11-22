import { CardProps } from "../../assets/types/types";
import "./CardSeguros.modules.css";
import { Link, useParams } from "react-router-dom";

const CardSeguros = ({ img, title, description, link }: CardProps) => {
  const { id } = useParams();
  return (
    <div key={id} className="card-contain">
      <div className="card-image">
        <img src={img} alt="card-image" />
      </div>

      <div className="card-body">
        <h5>{title}</h5>
        <p>{description}</p>
        <Link to={`/seguros${link}`}>
          <a>Ir al detalle</a>
        </Link>
      </div>
    </div>
  );
};

export default CardSeguros;