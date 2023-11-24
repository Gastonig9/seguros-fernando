import style from "./DetailSeguros.module.css";
const DetailSeguros8 = () => {
  return (
    <>
      <div className={style.vidaTitulo}>
        <h2>VIDA</h2>
      </div>
      <div className={style.vidaIndividual}>
        <div className={style.vidaIndividualText}>
          <h2>Detalles del producto y beneficios</h2>
          <p>
            Seguro de protección personal y familiar para cuidar los sueños,
            deseos, necesidades y proyectos de su familia.
          </p>

          <p>
            Beneficios Adicionales por asegurarse más de una persona de la misma
            familia.
          </p>
        </div>
        <div className={style.sepelioImg}>
          <img src="https://i.ibb.co/9WvcpmZ/vida-detail.png" alt="" />
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
    </>
  );
};

export default DetailSeguros8;
