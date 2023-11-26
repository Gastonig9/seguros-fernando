import "./ButtonW.modules.css";
import { useState, useEffect } from "react";

const ButtonW = () => {
  const [hiddenButton, setHiddenButton] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Obtén el ancho de la ventana
      const windowWidth = window.innerWidth;

      // Define un umbral de ancho para ocultar el botón (puedes ajustar este valor)
      const thresholdWidth = 768;

      // Actualiza el estado basado en el ancho de la ventana
      setHiddenButton(windowWidth <= thresholdWidth);
    };

    // Agrega un event listener para manejar cambios en el tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Llama a handleResize al montar el componente para establecer el estado inicial
    handleResize();

    // Limpia el event listener al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {!hiddenButton && (
        <a
          href="https://wa.me/2615868074?text=¡Hola%20Fernando!%20Vengo de tu sitio web. ¿Puedo hacerte una consulta?"
          className="whatsapp animate__animated animate__pulse animate__infinite infinite"
          target="_blank"
        >
          <i className="fa-brands fa-whatsapp whatsapp-icon"></i>
        </a>
      )}
    </div>
  );
};

export default ButtonW;
