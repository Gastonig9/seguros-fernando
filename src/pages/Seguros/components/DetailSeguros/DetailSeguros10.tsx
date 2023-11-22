import style from "./DetailSeguros.module.css";
const DetailSeguros10 = () => {
  return (
    <div className={style.identidad}>
      <h2>ROBO DE IDENTIDAD</h2>
      <div className={style.roboContain}>
        <div className={style.identidadImg}>
          <img src="https://i.ibb.co/8NbG25x/robo-I-detail.png" alt="" />
        </div>
        <p>
          Te ofrecemos cobertura contra Robo de identidad, orientada al
          reintegro de los gastos incurridos para revertir la situación de
          sustracción de la identidad, con el fin de limitar los eventuales
          perjuicios económicos. Podes elegir entre una amplia variedad de
          coberturas, que van desde la pérdida económica directa hasta los
          honorarios profesionales por demandas, juicios, mediaciones, etc.
        </p>
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

export default DetailSeguros10;
