import style from "./DetailSeguros.module.css"
const DetailSeguros13 = () => {
  return (
    <div className={style.seguroTecnico}>
      <h2>SEGURO TECNICO</h2>
      <div className={style.seguroTecnicoTotal}>
        <div className={style.seguroTecnicoText}>
          <h3>EQUIPOS ELECTRÓNICOS</h3>
          <p>
            Se cubren los daños materiales directos sufridos por los equipos
            electrónicos asegurados por cualquier causa accidental súbita e
            imprevista, que no haya sido excluida expresamente y mientras se
            encuentren en el domicilio de riesgo declarado.
          </p>
          <ul>
            <li>Daños materiales directos.</li>
            <li>Daños por falla en la red eléctrica pública.</li>
            <li>Incendio.</li>
            <li>Accidente.</li>
            <li>Robo (excluye hurto).</li>
          </ul>

          <h3>EQUIPOS CONTRATISTAS / AGRÍCOLAS</h3>
          <p>
            Se cubre la maquinaria y equipos a partir del momento en que se
            encuentre efectuando su función específica incluyendo su eventual
            traslado desde o hacia el lugar de trabajo, depósito u obrador en el
            ámbito de la República Argentina, como consecuencia de
          </p>
          <ul>
            <li>Incendio.</li>
            <li>Accidente.</li>
            <li>Robo.</li>
            <li>Hurto.</li>
          </ul>

          <h3>AVERÍA DE MAQUINARIAS</h3>
          <p>
            Se ampara todo tipo de maquinarias, específicamente aquellas en las
            cuales un daño y/o averías puede provocar perjuicios graves de
            índole financiera y/o económicas, fundamentalmente maquinarias e
            instalaciones fijas destinadas a la producción en serie, tales como:
            generadores de energía (calderas, turbinas, etc.), máquinas e
            instalaciones distribuidoras de energía eléctrica (transformadores,
            etc), máquinas de producción y equipos auxiliares (bombas,
            compresores, etc.).
          </p>

          <h3>TODO RIESGO CONSTRUCCIÓN Y MONTAJE</h3>
          <p>
            Ampara los riesgos producto de la construcción propiamente dicha,
            entre los que se cuenta el incendio, rayo, explosión, caída de
            aviones, robo, etc. Durante el montaje se cubre: errores, impericia,
            descuido y actos malintencionados, caída de partes del objeto que se
            monta, robo, incendio, rayo, explosión, hundimiento de tierra o
            desprendimiento de tierra o de rocas, etc. Se pueden cubrir todo
            tipo de obras de construcción tales como edificios, hoteles,
            escuelas, hospitales, fábricas, plantas industriales, carreteras,
            entre otras, y de montajes como por ejemplo montajes de maquinarias,
            acueductos, calderas, compresores, ascensores, motores, grúas, etc.,
            estos pueden ser montajes individuales y desmontajes.
          </p>
        </div>
        <div className={style.seguroTecnicoImg}>
          <img src="https://i.ibb.co/cCFVfmp/s-Tecnico-detail.jpg" alt="" />
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

export default DetailSeguros13;
