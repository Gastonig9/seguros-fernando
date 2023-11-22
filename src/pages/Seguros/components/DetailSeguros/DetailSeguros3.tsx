import style from "./DetailSeguros.module.css";
const DetailSeguros3 = () => {
  const coberturasHogar = [
    "Daños totales y parciales a la vivienda por incendio, explosión o derrumbe.",
    "Daños de la naturaleza: por rayo, vientos huracanados, granizo, terremoto, caídas de árboles.",
    "Gastos de limpieza y remoción de escombros; alojamiento y mudanza; guardamuebles.",
    "Daños al contenido: por incendio, explosión, derrumbe, rayo, robo, hurto, daños eléctricos, daños por intento de robo.",
    "Daños a la tecnología: por incendio, rayo, explosión, robo, hurto, daños eléctricos, accidente; inundación.",
    "Daños a cristales, sanitarios, mesadas y granitos.",
    "Pérdida de alimentos refrigerados.",
  ];

  const coberturasTecnologia = [
    "Reembolso de gastos para el remplazo de documentos por incendio o robo para todo el grupo familiar.",
    "Robo e incendio para bienes trasladados a un domicilio temporario por vacaciones.",
  ];

  const coberturasPersonas = [
    "Responsabilidad Civil hacia terceros de todo el grupo familiar en el hogar, y en toda República Argentina.",
    "Cobertura de accidentes personales; seguro de vida individual temporal (vida modular).",
  ];

  const adicionales = [
    "Daños por agua al edificio y al contenido producido por fallas en redes e instalaciones sanitarias de la vivienda.",
    "Coberturas para el personal doméstico y para el personal eventual que pueda trabajar en el hogar.",
    "Aficionados al golf: efectos personales, palos, responsabilidad civil.",
  ];

  return (
    <div>
      <h2 className={style.h2HogarTituloPrincipal}>Coberturas Para el Hogar</h2>
      <div className={style.hogarTotal}>
        <div className={style.hogarTexto}>
          <ul>
            {coberturasHogar.map((cobertura, index) => (
              <li key={index}>{cobertura}</li>
            ))}
          </ul>

          <h3 className={style.h3HogarTitulo}>
            Robo y todo riesgo para la tecnología que use fuera del hogar.
          </h3>
          <ul>
            {coberturasTecnologia.map((cobertura, index) => (
              <li key={index}>{cobertura}</li>
            ))}
          </ul>

          <h3 className={style.h3HogarTitulo}>Coberturas Para las Personas</h3>
          <ul>
            {coberturasPersonas.map((cobertura, index) => (
              <li key={index}>{cobertura}</li>
            ))}
          </ul>

          <h3 className={style.h3HogarTitulo}>Adicionales</h3>
          <ul>
            {adicionales.map((cobertura, index) => (
              <li key={index}>{cobertura}</li>
            ))}
          </ul>
        </div>
        <div className={style.imgHogar}>
          <img src="https://i.ibb.co/4KRjPDb/cobertura-F-detail.jpg"  alt="" />
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

export default DetailSeguros3;
