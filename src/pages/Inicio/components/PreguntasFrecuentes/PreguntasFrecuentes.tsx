import { Accordion, AccordionTab } from "primereact/accordion";
import style from "./PreguntasFrecuentes.module.css";

const PreguntasFrecuentes = () => {
  return (
    <>
      <div className={style.texto}>Preguntas frecuentes</div>
      <div className={style.separador}></div>

      <div className={style.total}>
        <div>
          <Accordion className={style.accordionContainer}>
            <AccordionTab className={style.header} header="Header I">
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </AccordionTab>
            <AccordionTab className={style.header} header="Header II">
              <p className="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
              </p>
            </AccordionTab>
            <AccordionTab className={style.header} header="Header III">
              <p className="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate.
              </p>
            </AccordionTab>
          </Accordion>
        </div>

        <div>
          <Accordion className={style.accordionContainer}>
            <AccordionTab className={style.header} header="Header I">
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </AccordionTab>
            <AccordionTab className={style.header} header="Header II">
              <p className="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae.
              </p>
            </AccordionTab>
            <AccordionTab className={style.header} header="Header III">
              <p className="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate.
              </p>
            </AccordionTab>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default PreguntasFrecuentes;
