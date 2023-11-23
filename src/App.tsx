// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio/Inicio";
import Seguros from "./pages/Seguros/Seguros";
import Siniestros from "./pages/Siniestros/Siniestros";
import Contactame from "./pages/Contactame/Contactame";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import ButtonW from "./components/ButtonW/ButtonW";
import Navigation from "./components/Navigation/Navigation";

// RUTAS SEGUROS DETAIL
import DetailSeguros1 from "./pages/Seguros/components/DetailSeguros/DetailSeguros1";
import DetailSeguros2 from "./pages/Seguros/components/DetailSeguros/DetailSeguros2";
import DetailSeguros3 from "./pages/Seguros/components/DetailSeguros/DetailSeguros3";
import DetailSeguros4 from "./pages/Seguros/components/DetailSeguros/DetailSeguros4";
import DetailSeguros5 from "./pages/Seguros/components/DetailSeguros/DetailSeguros5";
import DetailSeguros6 from "./pages/Seguros/components/DetailSeguros/DetailSeguros6";
import DetailSeguros7 from "./pages/Seguros/components/DetailSeguros/DetailSeguros7";
import DetailSeguros8 from "./pages/Seguros/components/DetailSeguros/DetailSeguros8";
import DetailSeguros9 from "./pages/Seguros/components/DetailSeguros/DetailSeguros9";
import DetailSeguros10 from "./pages/Seguros/components/DetailSeguros/DetailSeguros10";
import DetailSeguros11 from "./pages/Seguros/components/DetailSeguros/DetailSeguros11";
import DetailSeguros12 from "./pages/Seguros/components/DetailSeguros/DetailSeguros12";
import DetailSeguros13 from "./pages/Seguros/components/DetailSeguros/DetailSeguros13";
import DetailSeguros14 from "./pages/Seguros/components/DetailSeguros/DetailSeguros14";

function App() {
  return (
    <>
      <BrowserRouter>
        <ButtonW />
        <Navigation/>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          {/* <Route path="/detail/:id" element={<CardDetail />}></Route> */}

          <Route path="/seguros" element={<Seguros />} />
          <Route path="/siniestros" element={<Siniestros />} />
          <Route path="/contacto" element={<Contactame />} />
          <Route path="*" element={<NotFound />} />

          {/* RUTAS SEGUROS DETAIL */}

          <Route path="/seguros/automotor" element={<DetailSeguros1/>}/> x
          <Route path="/seguros/motos" element={<DetailSeguros2/>}/>x
          <Route path="/seguros/combinado-familiar" element={<DetailSeguros3/>}/>x
          <Route path="/seguros/integral-comercio" element={<DetailSeguros4/>}/>x
          <Route path="/seguros/responsabilidad-civil" element={<DetailSeguros5/>}/>x
          <Route path="/seguros/accidentes-personales" element={<DetailSeguros6/>}/>
          <Route path="/seguros/sepelio" element={<DetailSeguros7/>}/>x
          <Route path="/seguros/vida" element={<DetailSeguros8/>}/>x
          <Route path="/seguros/caucion" element={<DetailSeguros9/>}/>x
          <Route path="/seguros/robo-identidad" element={<DetailSeguros10/>}/>x
          <Route path="/seguros/integral-consorcio" element={<DetailSeguros11/>}/>x
          <Route path="/seguros/salud" element={<DetailSeguros12/>}/> X
          <Route path="/seguros/seguro-tecnico" element={<DetailSeguros13/>}/> X
          <Route path="/seguros/seguro-viajes" element={<DetailSeguros14/>}/> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
