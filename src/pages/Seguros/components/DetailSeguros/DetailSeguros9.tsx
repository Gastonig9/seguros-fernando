import style from "./DetailSeguros.module.css";
const DetailSeguros9 = () => {
  return (
    <>
      <div className={style.caucion}>
        <h2>CAUCIÓN</h2>
        <div className={style.caucionContain}>
          <div className={style.caucionImg}>
            <img src="https://i.ibb.co/wLrKmgJ/caucion-detail.jpg" alt="" />
          </div>
          <div className={style.textoContain}>
            <h3>Detalles del producto y beneficios</h3>
            <p>
              El seguro de Caución es una de las herramientas más eficaces para
              todas aquellas personas físicas o jurídicas que desarrollan
              actividades comerciales o profesionales y que por determinadas
              exigencias legales, reglamentarias o contractuales, necesitan
              garantizar el cumplimiento de sus obligaciones contraídas frente a
              terceros. En Federación Patronal le brindamos asesoramiento
              integral en la contratación de los diferentes tipos de garantías.
              Ponemos a su disposición nuestro respaldo y experiencia,
              garantizándole un trámite ágil y sencillo, que le permitirá contar
              con una gama de coberturas acorde a las necesidades de gestión de
              sus negocios con el respaldo de la aseguradora número uno en
              situación financiera del país.
            </p>
          </div>
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

export default DetailSeguros9;
