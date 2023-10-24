import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import Seguros from "./Components/Seguros/Seguros";

import PreguntasFrecuentes from "./Components/PreguntasFrecuentes/PreguntasFrecuentes";
import Reseñas from "./Reseñas/Reseñas";
function App() {
  return (
    <>
      <Navbar />
      <PreguntasFrecuentes />
      <Seguros />
      <Reseñas />
    </>
  );
}

export default App;
