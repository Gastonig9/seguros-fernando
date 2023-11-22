import style from "./DetailSeguros.module.css";
const DetailSeguros2 = () => {
  const coberturasMotos = [
    "Responsabilidad Civil hacia terceros transportados y no transportados, y daños a bienes de terceros.",
    "Robo Total.",
    "Incendio Total.",
    "Destrucción Total.",
    "Servicio de Grúa.",
  ];

  return (
    <div>
      <h2 className={style.detailMotosH2}>MOTOS</h2>
      <div className={style.detailMotosTotal}>
        <div className={style.detailMotosTexto}>
          <p>
            Vos y tu rodado tendrán a disposición un servicio integral que
            incluye:
          </p>
          <ul>
            {coberturasMotos.map((cobertura, index) => (
              <li key={index}>{cobertura}</li>
            ))}
          </ul>
        </div>
        <div className={style.detailMotosImg}>
          <img src="https://i.ibb.co/Nykz6Cr/moto-detail.jpg"  alt="" />
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

export default DetailSeguros2;
