import Aseguradoras from "./components/Aseguradoras/Aseguradoras";
import Contacto from "./components/Contacto/Contacto";
import Header from "./components/Header/Header";
import PreguntasFrecuentes from "./components/PreguntasFrecuentes/PreguntasFrecuentes";
import Reseñas from "./components/Reseñas/Reseñas";
import Seguros from "./components/Seguros/Seguros";

const Inicio = () => {
  return (
    <>
      <Header />
      <Seguros/>
      <Aseguradoras />
      <Reseñas/>
      <Contacto/>
      <PreguntasFrecuentes/>
    </>
  );
};

export default Inicio;
