import style from "./DetailSeguros.module.css";

//RESPONSABILIDAD CIVIL
const DetailSeguro4 = () => {
  const coberturasPrincipales = [
    "Daños totales y parciales al local por incendio, explosión o derrumbe",
    "Daños de la naturaleza: por rayo, vientos huracanados, granizo, terremoto.",
    "Gastos por limpieza de contenidos y remoción de escombros; sueldos y jornales, alquileres, gastos fijos.",
    "Daños a los carteles y marquesinas",
    "Daños a las instalaciones y/o bienes de uso por incendio, explosión, derrumbe, rayo",
    "Daños a la mercadería por incendio, robo, pérdida de frío.",
    "Daños a cristales",
    "Daños a la tecnología del comercio por incendio, rayo, explosión, robo, daños eléctricos, accidentes.",
  ];

  const coberturasResponsableComercio = [
    "Responsabilidad Civil hacia terceros, emergente del denominado “deber de seguridad”",
    "Adicionales de responsabilidad civil específicos para cada actividad",
    "Cobertura de accidentes personales para la persona responsable",
  ];

  return (
    <div>
      <h2 className={style.h2Comercio}>Integral Comercio</h2>
      <div className={style.comercioTotal}>
        <div className={style.comercioTexto}>
          <ul>
            {coberturasPrincipales.map((cobertura, index) => (
              <li key={index}>{cobertura}</li>
            ))}
          </ul>

          <h3 className={style.h3Comercio}>
            COBERTURAS PARA EL RESPONSABLE DEL COMERCIO
          </h3>
          <ul>
            {coberturasResponsableComercio.map((cobertura, index) => (
              <li key={index}>{cobertura}</li>
            ))}
          </ul>
        </div>
        <div className={style.comercioImg}>
          <img src="https://i.ibb.co/2PrStrc/comercio-detail.png" alt="" />
        </div>
      </div>

      <div className={style.botonesSeguros}>
        <a
          href="https://self2.fedpat.com.ar/cotizar_seguro_online/p/23650-p3zQvI2M44yRpgvuITVpGo%2BKwxh%2By24NwRoVPhipg9U%3D"
          target="_blank"
          className={style.seguroEnLinea}
        >
          Cotizar seguro en linea
        </a>
        <a href="/contacto" className={style.seguroEnPagina}>
          Consultar cotizacion
        </a>
      </div>
    </div>
  );
};

export default DetailSeguro4;
