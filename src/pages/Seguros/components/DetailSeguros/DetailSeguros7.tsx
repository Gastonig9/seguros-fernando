import style from "./DetailSeguros.module.css";
const DetailSeguro7 = () => {
  return (
    <>
      <div className={style.sepelioTotal}>
        <div className={style.sepelioText}>
          <h2>SEPELIO INDIVIDUAL</h2>
          <p>
            Brinda un servicio de calidad, a través del cual ante el
            fallecimiento de un ser querido, los familiares pueden a través de
            un teléfono 0800 obtener la contención, respeto y calidez humana
            acompañando la capacidad resolutiva para definir los detalles
            necesarios en estos casos, respetando siempre a las personas, su
            dolor y privacidad.
          </p>

          <h2>SEPELIO COLECTIVO</h2>
          <p>
            Destinado a Cooperativas, Asociaciones, Clubes, Mutuales, Colegios
            Profesionales, etc. que busquen una protección de Sepelio
            Prestacional conjunta de una forma eficiente y/o como Beneficio para
            los Empleados de una Empresa.
          </p>
        </div>

        <div className={style.sepelioImg}>
          <img src="https://i.ibb.co/qDDNP5h/sepelio-detail.jpg" alt="" />
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

export default DetailSeguro7;
