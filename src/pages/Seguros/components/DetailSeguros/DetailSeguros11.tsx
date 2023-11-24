import style from "./DetailSeguros.module.css";
const DetailSeguros11 = () => {
  return (
    <div className={style.consorcio}>
      <h2>INTEGRAL DE CONSORCIO</h2>
      <div className={style.consorcioTotal}>
        <div className={style.consorcioText}>
          <h3>COBERTURAS PRINCIPALES</h3>
          <h4>Incendio Edificio (con extensión a Unidades Funcionales)</h4>
          <p>
            Destinada a cubrir los daños materiales de las partes comunes del
            edificio causados por la acción del fuego, rayo y/o explosión.
          </p>

          <h4>Incendio Contenido (con extensión a Unidades Funcionales)</h4>
          <p>
            Destinado a cubrir los daños materiales a los elementos que se
            encuentren en las partes comunes del edificio. Incluimos las
            instalaciones, mobiliario y efectos de propiedad común del
            consorcio.
          </p>

          <h4>
            Daños por agua e inundación (con extensión a Unidades Funcionales)
          </h4>
          <p>
            Destinado a cubrir tanto al edificio como al contenido de las partes
            comunes por la acción directa del agua y/o inundación.
          </p>

          <h4>Cristales</h4>
          <p>
            Se amparan las piezas vítreas como consecuencia de rotura o
            rajadura. Incluye los gastos de colocación.
          </p>

          <h4>Responsabilidad Civil</h4>
          <p>
            Destinado a cubrir al consorcio por los daños ocasionados a un
            tercero. Los consorcistas, propietarios e inquilinos se consideran
            terceros. Esta cobertura no tendrá franquicia alguna.
          </p>

          <h3>COBERTURAS ADICIONALES</h3>
          <h4>
            Robo y/o Hurto del Mobiliario del Consorcio así como matafuegos,
            luces de emergencia y cámaras de seguridad, entre otros
          </h4>
          <p>
            No solo se ampara la pérdida de estos bienes sino los daños
            provocados para concretar el robo.
          </p>

          <h4>
            Daños por eventos de la naturaleza (Huracán, Vendaval, Ciclón y
            Tornado, Granizo y Terremoto)
          </h4>
          <p>
            Podrás incluir estos adicionales para mejorar tu cobertura de
            Incendio Edificio.
          </p>

          <h4>Responsabilidad Civil Linderos</h4>
          <p>
            Ampara los daños causados a inmuebles linderos como consecuencia de
            incendio, rayo y/o explosión.
          </p>

          <h4>Responsabilidad Civil Ascensores y/ montacargas</h4>
          <p>
            Ampara los daños producidos por el uso de ascensores y montacargas.
          </p>

          <h4>Responsabilidad Civil Guarda de Vehículos</h4>
          <p>
            Se ampara la responsabilidad civil del consorcio asegurado por daños
            y/o pérdidas provocados a los vehículos que se encuentren en garage
            perteneciente al edificio.
          </p>

          <h4>Daños por tensión al contenido y al edificio</h4>
          <p>
            Junto con la cobertura de Incendio Edificio, se puede optar por
            incluir los daños por tensión tanto al edificio como al contenido de
            las partes comunes del consorcio.
          </p>

          <h4>Responsabilidad Civil por Rotura de Cañerías</h4>
          <p>
            Se cubre la responsabilidad civil del consorcio asegurado por los
            daños causados a terceros por la acción directa del agua únicamente
            cuando sea causada por filtraciones, derrame o escape por rotura en
            las instalaciones destinadas a contenerla o distribuirla.
          </p>
        </div>
        <div className={style.consorcioImg}>
          <img src="../../images/seguro-caucion.jpg" alt="" />
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

export default DetailSeguros11;
