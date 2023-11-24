import style from "./DetailSeguros.module.css";
const DetailSeguros14 = () => {
  return (
    <div>
      <div className={style.viajes}>
        <h2>SEGURO DE VIAJES</h2>
        <img
          src="https://i.ibb.co/Mh0SMs5/viajes-detail.jpg"
          alt="Seguro de viajes"
        />
      </div>

      <div className={style.textViajesContain}>
        <h2>Detalles del producto y beneficios</h2>
        <p>
          Durante un viaje para disfrutar tus vacaciones, imagina esta
          situación: el viaje comenzó perfecto porque el vuelo no se atrasó, no
          hubo turbulencias, pudiste dormir durante unas horas sin interrupción,
          el hotel elegido es realmente lo que te imaginabas, todo anda a las
          mil maravillas… hasta que te despertás durante la madrugada con
          puntadas en el estómago y fiebre. No dominás el idioma del país donde
          estás, por lo que te cuesta explicar qué estás sintiendo y todo se
          vuelve un tremendo dolor de cabeza. Para evitarte ese tipo de
          situación es que existe el Seguro de Viaje y aquí te explicaremos cómo
          funciona.
        </p>

        <p>
          La razón por la cual viajes o el país donde te encuentres al momento
          del imprevisto no es importante, porque lo que te ofrece un Seguro de
          Viaje es la protección total ante cualquier problema mientras estés en
          el exterior, ya sea una enfermedad repentina o un accidente.
        </p>

        <p>
          Muchos de los seguros de viaje que ofrecen las corredoras de seguros
          son contra reembolso. Esto quiere decir que, si sufrís un accidente o
          te pronto de enfermás por cualquier motivo, deberás resolver el
          problema en su totalidad (decidir a qué clínica ir, qué médico llamar
          y pagar todos los gastos que la situación exija). Recién al regresar a
          tu casa podrás recuperar lo que gastaste y tan sólo presentando las
          facturas originales de todo lo que has pagado. Y solamente recibirás
          el dinero correspondiente al valor del seguro que hayas contratado al
          momento de viajar.
        </p>

        <p>
          Pero también hay empresas que ofrecen asistencia real en el destino
          donde te encuentres viajando. Ese tipo de asistencia hará que no
          tengas que preocuparte con absolutamente nada, porque la asistencia va
          a cubrir todos los gastos, ya que trabajan con su propia red.
        </p>

        <p>
          Hay diferentes tipos de seguros de viaje, todos correspondientes al
          tipo de viaje que hagas: por trabajo, por estudio, por vacaciones, por
          deporte, por aventura, luna de miel, viaje de egresados… El seguro
          tendrá el valor correspondiente al tipo de viaje y también a la
          cantidad de días, semanas o meses de permanencia en el exterior.
        </p>

        <p>
          Hay ítems que no son cubiertos por ningún tipo de seguro de viaje:
        </p>

        <ul>
          <li>Poner la vida en riesgo intencionalmente</li>
          <li>Alcoholismo o drogadicción</li>
          <li>Enfermedades crónicas o preexistentes</li>
        </ul>

        <p>
          Es importante aclarar que los seguros solo dan cobertura para
          enfermedades eventuales que aparezcan durante el transcurso del viaje
          y que solamente productos específicamente detallados en el contrato
          darán cobertura –por un valor determinado- a enfermedades crónicas o
          preexistentes.
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

export default DetailSeguros14;
