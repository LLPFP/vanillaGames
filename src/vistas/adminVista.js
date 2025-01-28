import { proyectos, perfiles } from "../bd/datosPrueba";
import { ls } from "../componentes/funciones";
import { editarImagenPerfil } from "../componentes/editarImagenPerfil.js";

export default {
  // html
  template: `
  <div class="container">
  <h1 class="mt-5">Proyectos</h1>
  <div class="row mt-5">
    <div class="col-12">
      <!--nav-tabs-->
      <ul class="nav nav-tabs">
        <!--Etiqueta Todos los proyectos-->
        <li class="nav-item w-50">
          <button 
            class="selectorFicha fichaProyectos nav-link w-100"
          >
            Proyectos
          </button>
        </li>
        <!--Etiqueta Mis proyectos-->
        <li id="pestanyaMisProyectos" class="nav-item w-50">
          <button 
            class="selectorFicha fichaUsuarios nav-link w-100 active"
          >
            Usuarios
          </button>
        </li>
      </ul>
    </div>
  </div>
  <div class="border border-top-0 p-3">
    <div class="row">
      <div class="col-12 col-sm-4 mb-3">
      <!-- Boton para subir proyectos -->
        <a id="botonSubirProyecto" href="#/proyectoNuevo" class="btn btn-primary w-100 router-link">Subir proyecto</a>
      </div>
      <div class="d-flex col-12 col-sm-8 mb-3">
        <!-- Botones para alternar entre vista de tabla o de tarjetas -->
        <button class="vistaTabla btn btn-secondary me-2 bi bi-list">
        </button>
        <button class="vistaTarjetas btn btn-secondary me-2 bi bi-grid-3x3-gap ">
        </button>
        <!-- Buscador -->
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping"
            ><i class="bi bi-search"></i
          ></span>
          <input
            id="inputBusqueda"
            type="text"
            class="form-control"
            placeholder="Buscador"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
          <span class="input-group-text" id="addon-wrapping"
            ><i id="borrarBuscador" class="bi bi-x"></i
          ></span>
        </div>
      </div>
    </div>
    
    <!-- Tabla de Usuarios -->
    <div id="tabUsuarios" class="col-12" style="overflow-x: auto">
        <!-- Aqui van los datos generados por la lógica -->
        <p class="d-none" >No hay usuarios todavía.</p>
    </div>

    <!-- Tabla de Proyectos -->
    <div id="tabProyectos" class="col-12" style="overflow-x: auto">
      <!-- Aqui van los datos generados por la lógica -->
      <p>No tienes proyectos.</p>
    </div>

     <!-- Panel de tarjetas -->
    <div id="tabTarjetas" class="d-xl-none row">
      <!-- Aqui van los datos generados por la lógica -->
      <p class="d-none" >No tienes proyectos.</p>
    </div>


  </div>
</div>
  `,
  script: () => {
    // Capturamos los datos del usuario logueado
    const usuario = ls.getUsuario();

    // **** AQUI DEBEMOS CAPTURAR LOS PROYECTOS DE LA BASE DE DATOS ****

    // Capturamos proyectos y guardamos en variable para poder ser filtrada
    const datosProyectos = proyectos;
    const datosUsuarios = perfiles;

    // Definimos que por defecto se muestran 'proyectos'
    let selectUsuarios = true;

    // *** Detectamos si se cambia de proyectos a usuarios al hacer click en las pestañas ***
    document.querySelector(".nav-tabs").addEventListener("click", (event) => {
      if (event.target.classList.contains("fichaUsuarios")) {
        // Si click en Usuarios cambiamos pestaña activa
        document.querySelector(".fichaUsuarios").classList.add("active");
        document.querySelector(".fichaProyectos").classList.remove("active");
        selectUsuarios = true;
        console.log("tabusuarios");
        document.querySelector("#tabUsuarios").classList.add("d-block");
        document.querySelector("#tabUsuarios").classList.remove("d-none");
        document.querySelector("#tabProyectos").classList.add("d-none");
      } else {
        // Si click en Proyectos cambiamos pestaña activa
        document.querySelector(".fichaProyectos").classList.add("active");
        document.querySelector(".fichaUsuarios").classList.remove("active");
        selectUsuarios = false;
        console.log("tabProyectos");
        document.querySelector("#tabProyectos").classList.add("d-block");
        document.querySelector("#tabProyectos").classList.remove("d-none");
        document.querySelector("#tabUsuarios").classList.add("d-none");
      }
      // Actualizamos los datos en el panel central
      pintaUsuarios(datosUsuarios);
      pintaProyectos(datosProyectos);
    });

    // *** FUNCIÓN PARA PINTAR TABLA PROYECTOS A PARTIR DE ARRAY datos ***
    const pintaProyectos = (proyectosFiltrados) => {
      let tablaProyectos =
        // html
        `
    <!-- Tabla de proyectos -->
    <table
      class="table table-hover align-middle mt-3"
      style="min-width: 1000px"
    >
      <thead>
        <tr>
          <!-- Encabezados de la tabla -->
          <th></th>
            <th>
              Nombre <span><i class="bi bi-caret-down"></i></span>
            </th>
            <th>
              Descripción <span><i class="bi bi-caret-up"></i></span>
            </th>
            <th>
              Enlace <span><i class="bi bi-caret-up"></i></span>
            </th>
            <th>Repositorio</th>
            <th>
              Autor <span><i class="bi bi-caret-up"></i></span>
            </th>
            <th>
              Fecha <span><i class="bi bi-caret-up"></i></span>
            </th>
            <th>
              Estado <span><i class="bi bi-caret-up"></i></span>
            </th>
            <th></th>
            <th></th>   
        </tr>
      </thead>
      <tbody>
    `;

      // Para cada proyecto en el array 'proyectosFiltrados'
      proyectosFiltrados.forEach((proyecto) => {
        // Genera filas de datos de proyecto en la tabla
        let botones = "";
        botones = `
          <td><a
            data-id = ${proyecto.id}
            class="botonAdmin botonEditar d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
          ></a></td>
          <td><a
            data-id = ${proyecto.id}
            class="botonAdmin botonBorrar d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
          ></a></td>
          `;

        tablaProyectos +=
          // html
          `
      <tr data-id="${proyecto.id}" class="verDetalle">
        <td>
          <div class="containerImagen">
            <img 
              class="verDetalle"
              data-id="${proyecto.id}"
              width="200px" 
              src=${proyecto.imagen || "images/imagenVacia.png"} 
              alt="imagen proyecto" />
          </div>
        </td>
        <td>${proyecto.nombre}</td>
        <td>${proyecto.descripcion}</td>
        <td><a href="${
          proyecto.enlace
        }" target="_blank"><i class="bi bi-link fs-4"></i></a></td>
        <td><a href="${
          proyecto.repositorio
        }" target="_blank"><i class="bi bi-folder-symlink fs-4"></i></a></td>
        <td>${proyecto.nombre_usuario} ${proyecto.apellidos_usuario}</td>
        <td>${proyecto.created_at}</td>
        <td>${proyecto.estado}</td>
        <td>
          <!-- Botones de edición y borrado -->
          ${botones}
        </td>
      </tr>`;
      });
      tablaProyectos +=
        // html
        `
      </tbody>
    </table>
    `;
      // Inyecta el resultado en el contenedor con el id 'tabProyectos'
      document.querySelector("#tabProyectos").innerHTML = tablaProyectos;
    };

    // *** FUNCIÓN PARA PINTAR TABLA PROYECTOS A PARTIR DE ARRAY datos ***
    const pintaUsuarios = (usuariosFiltrados) => {
      let tablaUsuarios =
        // html
        `
        <form id="formAdminUsuarios" class="needs-validation" novalidate action="">
        <!-- Tabla de Usuarios -->
        <table
        class="table table-hover align-middle mt-3"
        style="min-width: 1000px"
        >
        <thead>
            <tr>
            <!-- Encabezados de la tabla -->
                <th></th>
                <th>URL imagen</th>
                <th>Email</th>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Fecha</th>
                <th>Rol</th>
                <th>Estado</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
        `;
      // Para cada proyecto en el array 'proyectosFiltrados'
      usuariosFiltrados.forEach((usuarios) => {
        // Genera filas de datos de proyecto en la tabla
        tablaUsuarios +=
          // html
          `
        <tr data-id=${usuarios.id}>
                      <td>
                        <div class="containerImagen">
                          <div
                            class="rounded-circle d-flex align-items-end justify-content-end mt-3 mb-3"
                            style="
                              background-image: url(${usuarios.avatar});
                              margin-top: -20px;
                              width: 100px;
                              height: 100px;
                              background-size: cover;
                              background-position: center;
                            "
                          >
                            <button
                            class="btn btn-success btn-sm rounded-circle bi bi-pencil botonEditarImagen"
                            data-urlavatar="${usuarios.avatar}"
                            data-id="${usuarios.id}"
                          ></button>
                          </div>
                        </div>
                      </td>
                      <td>
                        <input
                          type="url"
                          id="urlImagen_${usuarios.id}"
                          class="form-control form-control-sm"
                          value="${usuarios.avatar}"
                          required
                        />
                        <div class="invalid-feedback">La URL debe ser válida.</div>
                      </td>
                      <td>
                        <input
                          type="email"
                          id="email_${usuarios.id}"
                          class="form-control form-control-sm"
                          value="${usuarios.email}"
                          required
                        />
                        <div class="invalid-feedback">
                          Por favor ingresa un correo válido.
                        </div>
                      </td>
                      <td>
                        <input
                          type="text"
                          id="nombreUsuario_${usuarios.id}"
                          class="form-control form-control-sm"
                          value="${usuarios.nombre}"
                          required
                        />
                        <div class="invalid-feedback">El nombre es requerido.</div>
                      </td>
                      <td>
                        <input
                          type="text"
                          id="apellidosUsuario_${usuarios.id}"
                          class="form-control form-control-sm"
                          value="${usuarios.apellidos}"
                        />
                        <div class="invalid-feedback">
                          Los apellidos son requeridos.
                        </div>
                      </td>

                      <td>
                        <input
                          type="date"
                          id="fecha_${usuarios.id}"
                          class="form-control form-control-sm"
                          value="${usuarios.created_at}"
                          required
                        />
                        <div class="invalid-feedback">La fecha es requerida.</div>
                      </td>
                      <td>
                        <select
                          class="form-control form-control-sm"
                          name="rol"
                          id="rol"
                          required
                          value="${usuarios.rol}"
                        >
                          <option value="${usuarios.rol}">${usuarios.rol}</option>
                     
                        </select>
                        <div class="invalid-feedback">
                          Por favor selecciona un rol.
                        </div>
                      </td>
                      <td>
                        <select
                          class="form-control form-control-sm"
                          name="estado"
                          id="estado"
                          required
                          value="${usuarios.estado}"
                        >
                          <option value="${usuarios.estado}">${usuarios.estado}</option>
                    
                        </select>
                        <div class="invalid-feedback pt-2">
                          Por favor selecciona un estado.
                        </div>
                      </td>
                      <td>
                        <button type="submit" class="btn btn-sm btn-success botonActualizar" >
                          Actualizar
                        </button>
                      </td>
                      <td>
                        <i class="btn btn-sm btn-outline-danger bi bi-trash3 botonEliminar" data-id=${usuarios.id}></i>
                      </td>
                    </tr>
        `;
      });
      tablaUsuarios += `</tbody>
        </table>
        </form>`;

      // Inyecta el resultado en el contenedor con el id 'tabProyectos'
      document.querySelector("#tabUsuarios").innerHTML = tablaUsuarios;
    };

    // ####################################################################
    // BOTONES DE EDICIÓN, BORRADO y VISUALIZACIÓN DE DETALLE DE PROYECTOS
    // ####################################################################

    // Detectamos clic sobre main (Usamos delegación de eventos porque la tabla y tarjetas se actualizan constantemente en el DOM)
    document
      .querySelector(".tabProyectos")
      .addEventListener("click", (event) => {
        let id = "";
        // Si hemos pulsado sobre uno de los botones DE EDICIÓN O BORRADO
        if (event.target.classList.contains("botonAdmin")) {
          const boton = event.target;
          // Capturamos el id de su dataset
          const id = boton.dataset.id;
          if (boton.classList.contains("botonEditar")) {
            // Si se trata de editar
            console.log("Editar proyecto " + id);

            // Cargamos la vista para editar proyecto pasandole como parámetro el id
            window.location = `#/editarProyecto/${id}`;
          } else if (boton.classList.contains("botonBorrar")) {
            // Si se trata de borrar
            alert("Borrar proyecto " + id);

            // *** AQUÍ VA LA FUNCIÓN QUE BORRA DE LA BASE DE DATOS EL PROYECTO CORRESPONDIENTE AL ID ***
          }
        }
        // Visualizar detalle del proyecto si click sobre tr de vista tabla
        if (event.target.tagName === "TD") {
          console.log("clic en td");
          id = event.target.parentNode.dataset.id;
          window.location = `#/detalleProyecto/${id}`;
        }
        // Si hacemos clic sobre la imagen de tabla o de vista tarjetas
        if (event.target.classList.contains("verDetalle")) {
          id = event.target.dataset.id;
          window.location = `#/detalleProyecto/${id}`;
        }
      });

    // *** FILTRO PARA BUSCADOR ***
    // Capturamos el input de búsqueda
    const inputBusqueda = document.getElementById("inputBusqueda");
    // Agregamos un evento de escucha para el evento de entrada en el input de búsqueda
    inputBusqueda.addEventListener("input", () => {
      // Capturamos el texto de búsqueda del input, conviértelo a minúsculas y elimina espacios en blanco al principio y al final
      const textoBusqueda = inputBusqueda.value.toLowerCase().trim();
      // Filtramos los proyectos que coinciden con el texto de búsqueda en cualquier campo
      let informacion = [];
      if (selectUsuarios) {
        informacion = datosUsuarios;
      } else {
        informacion = datosProyectos;
      }
      const informacionFiltrada = informacion.filter((proyecto) => {
        // Itera sobre las propiedades (campos) de cada proyecto
        for (const key in proyecto) {
          // Obtenemos el valor del campo actual
          const valorCampo = proyecto[key];
          // Verificamos si el valor del campo es una cadena y si contiene el texto de búsqueda
          if (
            typeof valorCampo === "string" &&
            valorCampo.toLowerCase().includes(textoBusqueda)
          ) {
            // Si hay coincidencia, devuelve true para incluir el proyecto en la lista filtrada
            return true;
          }
        }
        // Si no se encontró coincidencia en ningún campo, devuelve false para excluir el proyecto
        return false;
      });
      // Volvemos a pintar los datos con los proyectos o usuarios filtrados por el buscador
      if (selectUsuarios) {
        pintaUsuarios(informacionFiltrada);
      } else {
        pintaProyectos(informacionFiltrada);
      }
    });
    // Borrar datos del input del buscador
    document.querySelector("#borrarBuscador").addEventListener("click", () => {
      // Borramos contenido del buscador
      document.getElementById("inputBusqueda").value = "";
      // Actualizamos array con todos los proyectos
      // const proyectosFiltrados = datos
      // Actualizamos los datos en el panel central
      pintaProyectos(datosProyectos);
      pintaUsuarios(datosUsuarios);
    });

    // *** VALIDACION DE FORMULARIOS CON BOOTSTRAP ***
    formulario.addEventListener("change", (e) => {
      // Comprobamos si el formulario no valida
      if (!formulario.checkValidity()) {
        console.log("No valida");
        // Y añadimos la clase 'was-validate' para que se muestren los mensajes
        formulario.classList.add("was-validated");
      } else {
        event.preventDefault();
        enviarDatos(id);
      }
    });

    // Función para enviar datos a la base de datos
    function enviaDatos(id) {
      // capturamos los datos del tr correspondiente al botón pulsado
      const proyectoEditado = {
        imagen: document.querySelector("#urlImagen_" + id).value,
        nombre: document.querySelector("#nombreUsuario_" + id).value,
        apellidos: document.querySelector("#apellidosUsuario_" + id).value,
        estado: document.querySelector("#estado_" + id).value,
        email: document.querySelector("#email_" + id).value,
      };
      alert(
        `Enviando a la base de datos el objeto con id = ${usuario.user_id}`
      );
      console.log(
        `Enviando a la base de datos el objeto con id = ${usuario.user_id}`,
        proyectoEditado
      );
    }

    // Función para borrar registro de la base de datos
    function borrarUsuario(id) {
      alert("Borrando usuario " + id);
    }

    // *************** PARA EL TAB DE USUARIOS ********

    // Capturamos el formulario para edición de usuarios
    const formulario = document.querySelector("#formAdminUsuarios");
    // Gestión de click sobre botones dentro del formulario
    formulario.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      // Si hacemos click sobre el botonActualizar
      if (
        e.target.classList.contains("botonActualizar") &&
        formulario.checkValidity()
      ) {
        const id = e.target.dataset.id;
      } else {
        formulario.classList.add("was-validated");
        enviaDatos(id);
      }

      // Si hacemos click sobre Borrar registro
      if (e.target.classList.contains("botonEliminar")) {
        const tr = e.target.parentNode.parentNode;
        // ocultar tr
        tr.classList.add("d-none");
        const id = e.target.dataset.id;
        borrarUsuario(id);
      }

      // Si hacemos click sobre Editar imagen avatar
      if (e.target.classList.contains("botonEditarImagen")) {
        // Capturamos datos para enviar al modal
        const urlAvatar = e.target.dataset.urlavatar;
        const urlInputAvatar = e.target.dataset.urlinputavatar;
        const id = e.target.dataset.id;
        // Abrimos ventana de edición de perfil (del componente editarImagenPerfil)
        editarImagenPerfil.script(urlAvatar, urlInputAvatar, id);
      }
    });
  },
};
