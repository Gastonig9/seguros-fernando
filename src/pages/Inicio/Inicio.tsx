import Seguros from "./components/Seguros/Seguros";
import Aseguradoras from "./components/Aseguradoras/Aseguradoras";
import Contacto from "./components/Contacto/Contacto";
import Header from "./components/Header/Header";

const Inicio = () => {
  return (
    <>
      <Header />
      <Seguros />
      <Aseguradoras />
      <Contacto />
    </>
  );
};

export default Inicio;
