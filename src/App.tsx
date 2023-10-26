// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio/Inicio";
import Seguros from "./pages/Seguros/Seguros";
import Siniestros from "./pages/Siniestros/Siniestros";
import Contactame from "./pages/Contactame/Contactame";
import NotFound from "./components/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ButtonW from "./components/ButtonW/ButtonW";

import PreguntasFrecuentes from "./Components/PreguntasFrecuentes/PreguntasFrecuentes";
import Reseñas from "./Reseñas/Reseñas";
function App() {
  return (
    <>
      <BrowserRouter>
        <ButtonW />
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/seguros" element={<Seguros />} />
          <Route path="/siniestros" element={<Siniestros />} />
          <Route path="/contacto" element={<Contactame />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
