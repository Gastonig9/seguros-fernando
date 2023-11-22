import style from "./DetailSeguros.module.css";

const SegurosDetail1 = () => {
  const coberturas = [
    [
      "Responsabilidad Civil",
      "Perdida total y parcial por Robo",
      "Perdida total y parcial por Incendio",
      "Destrucción total.",
      "Daños parciales.",
      "Accidentes Personales",
      "Asistencia Penal",
      "Servicio de Gestoría",
      "Reposición de O Km por robo total (según condiciones contractuales).",
      "Rotura de Cristales, Cerraduras y Antena.",
      "Indemnización de cubiertas sin desgaste, crique y llave de ruedas",
      "Auto sustituto (por diez días ante robo total)",
      "Daños parciales a consecuencia de la caída de Granizo",
    ],
    [
      "Responsabilidad Civil.",
      "Perdida total y parcial por Robo.",
      "Perdida total y parcial por Incendio.",
      "Destrucción total por Accidente.",
      "Accidentes Personales.",
      "Asistencia Penal.",
      "Servicio de Gestoría.",
      "Reposición de O Km por robo total (según condiciones contractuales).",
      "Rotura de Cristales, Cerraduras y Antena.",
      "Daños parciales a consecuencia de la caída de Granizo",
    ],
  ];

  return (
    <div>
      <div className={style.tituloH2Automotor}>
        <h2>AUTOMOTOR</h2>
      </div>
      <div className={style.textoImageAutomotor}>
        <div className={style.textoAutomotor}>
          <h2>
            AMPLIAS PROPUESTAS DE COBERTURA PARA QUE TU AUTO ESTE SIEMPRE BIEN
            PROTEGIDO
          </h2>
          <h3>Todo Riesgo con Franquicia</h3>
          <ul>
            {coberturas[0].map((cobertura, i) => (
              <li key={i}>{cobertura}</li>
            ))}
          </ul>

          <h3>TERCEROS COMPLETO</h3>
          <ul>
            {coberturas[1].map((cobertura, i) => (
              <li key={i}>{cobertura}</li>
            ))}
          </ul>
        </div>
        <div className={style.imageAutomotor}>
          <img src="https://i.ibb.co/hXWHz5y/auto-detail.jpg" alt="" />
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

export default SegurosDetail1;
