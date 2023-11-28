import style from "./DetailSeguros.module.css";
const DetailSeguro5 = () => {
  const responsabilidadCivilCoberturas = [
    "RC Hechos Privados",
    "RC Comprensiva",
    "RC Instituciones de la Salud",
    "RC Profesiones Determinadas",
    "RC Establ. Educativos",
    "RC Drones",
    "RC Productores",
    "RC Garaje, Playas de estacionamiento y similares",
    "RC Embarcaciones",
    "RC Abogados",
    "RC Profesionales de la Salud",
    "RC Administradores de Consorcio",
    "RC Prof. Arquitectos",
    "RC Prof. Ingenieros",
    "RC Escribanos",
    "RC Contadores",
    "RC Gas y Petroleo",
    "RC Profesional",
  ];

  return (
    <div>
      <h2 className={style.responsabilidad}>RESPONSABILIDAD CIVIL</h2>

      <div className={style.responsabilidadTotal}>
        <div className={style.responsabilidadTexto}>
          <ul>
            {responsabilidadCivilCoberturas.map((cobertura, index) => (
              <li key={index}>{cobertura}</li>
            ))}
          </ul>
        </div>
        <div className={style.responsabilidadImg}>
          <img src="https://i.ibb.co/hHZSF6P/r-Civil-detail.jpg" alt="" />
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

export default DetailSeguro5;
