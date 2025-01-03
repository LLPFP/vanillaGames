import "./scss/styles.scss";

import { header } from "./componentes/Header";
import { footer } from "./componentes/Footer";
// Importamos la vista por defecto (que será home)
async function cargarVista() {
  const componente = await import("./vistas/home");
  const vista = componente.default; // Inyectamos la vista home
  document.querySelector("main").innerHTML = vista.template;
}
cargarVista();

//Inyectamos el componente header
document.querySelector("header").innerHTML = header.template;
document.querySelector("footer").innerHTML = footer.template;
