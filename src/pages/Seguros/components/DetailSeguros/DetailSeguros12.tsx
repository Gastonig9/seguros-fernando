import style from "./DetailSeguros.module.css";
const DetailSeguros12 = () => {
  return (
    <div className={style.salud}>
      <h2>SALUD</h2>
      <div className={style.saludContain}>
        <div className={style.saludImg}>
          <img src="https://i.ibb.co/BTZ3KJL/salud-detail.jpg" alt="" />
        </div>
        <div className={style.saludText}>
          <h2>Detalles del producto y beneficios</h2>
          <p>
            Conta con la ayuda económica para solventar el tratamiento de una
            enfermedad grave, lesión o intervención quirúrgica que se pueda
            presentar. Te damos la posibilidad de elegir la cobertura de salud
            que más se ajusta a tus necesidades y a tu presupuesto, contando
            además con un servicio de asistencia médica de urgencias y
            emergencias. Comunícate con nuestros productores y comenzá a
            disfrutar de la tranquilidad de estar respaldado por la aseguradora
            número uno en situación financiera del país.
          </p>
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

export default DetailSeguros12;
