import "./scss/styles.scss";
import * as bootstrap from 'bootstrap'

import { header } from "./componentes/Header";
import { footer } from "./componentes/Footer";

// Importamos la Función para detectar eventos al cargar las vistas
import { enrutador } from './componentes/enrutador'

//Inyectamos el componente header
document.querySelector("header").innerHTML = header.template;
document.querySelector("footer").innerHTML = footer.template;


// Cargamos la vista por defecto (home)
enrutador.observadorRutas()
// Cargamos la página home
window.location = '#/home'