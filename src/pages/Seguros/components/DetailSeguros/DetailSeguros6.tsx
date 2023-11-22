import style from "./DetailSeguros.module.css";
const DetailSeguros6 = () => {
  const coberturaBasica = [
    "Muerte Accidental",
    "Invalidez total y/o parcial permanente",
    "Asistencia médica y farmacéutica",
    "Renta diaria por internación",
    "Reintegro por gastos de sepelio.",
  ];

  const sumaAsegurada =
    "La suma asegurada es el límite máximo de la indemnización por cada cobertura, que el asegurador abonará en caso de ocurrencia de un siniestro.";

  const beneficiosAdicionales = [
    "Durante el trayecto directo e inmediato entre el lugar de trabajo del asegurado y su domicilio (o viceversa), se cubre el uso de motocicletas.",
    "Sin declaración de salud y exámenes médicos",
    "Libre designación de Beneficiarios",
  ];

  const principalesExclusiones = [
    "Enfermedades de cualquier naturaleza inclusive las originadas por la picadura de insectos",
    "Accidentes que el Asegurado y/o Beneficiario provoquen –por acción u omisión- dolosamente o con culpa grave o el Asegurado sufra en empresa criminal",
    "Suicidio; pactos o acuerdos de suicidio",
    "Lesiones autoinflingidas, aún cuando sean cometidas en estado de enajenación mental",
    "Accidentes que ocurran mientras el Asegurado tome parte en carreras, ejercicios o juegos atléticos de acrobacia o que tengan por objeto pruebas de carácter excepcional",
  ];

  return (
    <div>
      <h2 className={style.cobertura}> Cobertura Básica</h2>
      <div className={style.coberturaTotal}>
        <div className={style.coberturaText}>
          <ul>
            {coberturaBasica.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className={style.sumaAsegurada}>{sumaAsegurada}</p>

          <h3>Beneficios Adicionales</h3>
          <ul>
            {beneficiosAdicionales.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3>Principales Exclusiones</h3>
          <ul>
            {principalesExclusiones.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={style.coberturaImg}>
          <img src="https://i.ibb.co/yhkm60M/accidentes-detail.png"   alt="" />
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

export default DetailSeguros6;
