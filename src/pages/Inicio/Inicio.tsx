import Seguros from "./components/Seguros/Seguros";
import Aseguradoras from "./components/Aseguradoras/Aseguradoras";
import Contacto from "./components/Contacto/Contacto";
import Header from "./components/Header/Header";
import Reseñas from "./components/Reseñas/Reseñas";
import PreguntasFrecuentes from "./components/PreguntasFrecuentes/PreguntasFrecuentes";

const Inicio = () => {
  return (
    <>
      <Header />
      <Aseguradoras />
      <Seguros />
      <Contacto />
      <Reseñas />
      <PreguntasFrecuentes />
    </>
  );
};

export default Inicio;
