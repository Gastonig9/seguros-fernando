import { aseguradoras } from "../../../../assets/constants/constants";
import { Aseguradora } from "../../../../assets/types/types";
import "./Aseguradoras.modules.css";

const Aseguradoras = () => {
  return (
    <section className="aseguradoras-contain">
      <h2>Aseguradoras</h2>
      <div className="separador"></div>
      <p>
        Más de 10 años de experiencia con las mejores aseguradoras para
        brindarte cotizaciones óptimas y respuesta rápida.
      </p>

      <div className="aseguradoras">
        {aseguradoras.map((aseguradora: Aseguradora, index) => (
          <>
            <div>
              <img
                key={index}
                src={aseguradora.img}
                alt={`Aseguradora ${index}`}
              />
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Aseguradoras;
