import CardSeguros from "../../../../components/CardSeguros/CardSeguros";
import { cardInfo } from "../../../../assets/constants/constants";
import "./SegurosList.modules.css"

const SegurosList = () => {
  return (
    <>
      <div className="seguros-cards">
        {cardInfo.map(card => {
            return(
                <CardSeguros  img={card.img} title={card.title} description={card.description} link={card.path}/>
            )
        })}
      </div>
    </>
  );
};

export default SegurosList;
