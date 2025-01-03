import "./scss/styles.scss";

import { header } from "./componentes/Header";
import { footer } from "./componentes/Footer";
// Importamos la vista por defecto (que será home)
async function cargarVista() {
  const componente = await import("./vistas/registroVista");
  const vista = componente.default; // Inyectamos la vista home
  document.querySelector("main").innerHTML = vista.template;
  //Ejectuamos el script de la vista
  vista.script();
}
cargarVista();

//Inyectamos el componente header
document.querySelector("header").innerHTML = header.template;
document.querySelector("footer").innerHTML = footer.template;
