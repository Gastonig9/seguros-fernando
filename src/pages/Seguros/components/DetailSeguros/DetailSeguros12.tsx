import style from "./DetailSeguros.module.css";
const DetailSeguros12 = () => {
  return (
    <div className={style.salud}>
      <h2>SALUD</h2>
      <div className={style.saludImg}>
        <img src="../../images/seguro-caucion.jpg" alt="" />
      </div>
      <p>
        Conta con la ayuda económica para solventar el tratamiento de una
        enfermedad grave, lesión o intervención quirúrgica que se pueda
        presentar. Te damos la posibilidad de elegir la cobertura de salud que
        más se ajusta a tus necesidades y a tu presupuesto, contando además con
        un servicio de asistencia médica de urgencias y emergencias. Comunícate
        con nuestros productores y comenzá a disfrutar de la tranquilidad de
        estar respaldado por la aseguradora número uno en situación financiera
        del país.
      </p>
    </div>
  );
};

export default DetailSeguros12;
