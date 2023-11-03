import React from "react";
import style from "./Navbar.module.css";
const Navbar = () => {
  return (
    <>
      <div className={style.navBar}>
        <div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
             
              width="32"
              height="40"
              viewBox="0 0 32 40"
              fill="none"
            >
              <path d="M0 0H32V40H0V0Z" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                  
                    transform="matrix(0.00149701 0 0 0.0011976 0 -0.00718563)"
                  />
                </pattern>
                <image
                  id="image0_197_77"
                  width="668"
                  height="847"
                />
              </defs>
            </svg>
          </div>
        </div>
        <ul className={style.contenedorCard}>
          <li className={style.blue} >Inicio</li>
          <li>Seguros</li>
          <li>Siniestros</li>
          <li>Contactame</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;