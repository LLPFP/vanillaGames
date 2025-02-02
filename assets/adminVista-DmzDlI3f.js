import { p as proyectos, a as perfiles } from "./datosPrueba-BtcYjQH3.js";
import { l as ls } from "./main-CsaVwWP-.js";
const editarImagenPerfil = {
  // html
  template: `
  <!-- Ventana modaledición perfil -->
  <div
    class="modal fade"
    id="modalEditarImagenPerfil"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <!-- Formulario de edición de perfil -->
    <form novalidate action="">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Edición de perfil
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="form border shadow-sm p-3">
              <div class="m-1" style="max-width: 400px">
                <div class="imgPerfil border shadow-sm p-3 mb-3">
                  <div
                    id="imagenUsuario"
                    class="imagen mx-auto mb-1 rounded-circle"
                    style="
                      background-image: url(.images/avatar.svg);
                      width: 200px;
                      height: 200px;
                      background-size: cover;
                      background-position: center;
                    "
                  ></div>

                  <!-- Imagen de perfil -->
                  <label for="imagen" class="form-label mt-3">URL imagen:</label>
                  <input
                    id="urlImagenUsuario"
                    type="url"
                    class="form-control"
                    value="http://imagenavatar.png"
                  />
                  <div class="invalid-feedback">La url no es correcta</div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Cancelar
            </button>
            <button 
              id="botonActualizarImagen"
              type="button" 
              class="btn btn-primary"
            >
              Guardar cambios
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
  `,
  script: (urlAvatar, urlInputAvatar, user_id) => {
    console.log("modal editar imagen perfil cargado:", urlAvatar);
    document.querySelector("#urlImagenUsuario").value = urlAvatar;
    const imagenUsuario = document.querySelector("#imagenUsuario");
    imagenUsuario.style.backgroundImage = `url(${urlAvatar})`;
    document.querySelector("#urlImagenUsuario").addEventListener("input", () => {
      urlAvatar = document.querySelector("#urlImagenUsuario").value;
      imagenUsuario.style.backgroundImage = `url(${urlAvatar})`;
    });
    document.querySelector("#botonActualizarImagen").addEventListener("click", () => {
      document.querySelector(`#${urlInputAvatar}`).value = urlAvatar;
      console.log("Actualizando base de datos: " + user_id);
      adminVista.script();
    });
  }
};
const adminVista = {
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
      <div class="d-flex col-12 col-sm-8 mb-3">
       
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
      <p class="d-none">No tienes proyectos.</p>
    </div>

     <!-- Panel de tarjetas -->
    <div id="tabTarjetas" class="d-xl-none row">
      <!-- Aqui van los datos generados por la lógica -->
      <p class="d-none" >No tienes proyectos.</p>
    </div>


  </div>
</div>
 ${editarImagenPerfil.template} 

  `,
  script: () => {
    const usuario = ls.getUsuario();
    const datosProyectos = proyectos;
    const datosUsuarios = perfiles;
    let selectUsuarios = true;
    selectUsuarios = true;
    document.querySelector(".nav-tabs").addEventListener("click", (event) => {
      if (event.target.classList.contains("fichaUsuarios")) {
        document.querySelector(".fichaUsuarios").classList.add("active");
        document.querySelector(".fichaProyectos").classList.remove("active");
        selectUsuarios = true;
        console.log("tabusuarios");
        document.querySelector("#tabUsuarios").classList.add("d-block");
        document.querySelector("#tabUsuarios").classList.remove("d-none");
        document.querySelector("#tabProyectos").classList.add("d-none");
      } else {
        document.querySelector(".fichaProyectos").classList.add("active");
        document.querySelector(".fichaUsuarios").classList.remove("active");
        selectUsuarios = false;
        console.log("tabProyectos");
        document.querySelector("#tabProyectos").classList.add("d-block");
        document.querySelector("#tabProyectos").classList.remove("d-none");
        document.querySelector("#tabUsuarios").classList.add("d-none");
      }
      pintaUsuarios(datosUsuarios);
      pintaProyectos(datosProyectos);
    });
    const pintaProyectos = (proyectosFiltrados) => {
      let tablaProyectos = (
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
`
      );
      proyectosFiltrados.forEach((proyecto) => {
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
        tablaProyectos += // html
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
    <td><a href="${proyecto.enlace}" target="_blank"><i class="bi bi-link fs-4"></i></a></td>
    <td><a href="${proyecto.repositorio}" target="_blank"><i class="bi bi-folder-symlink fs-4"></i></a></td>
    <td>${proyecto.nombre_usuario} ${proyecto.apellidos_usuario}</td>
    <td>${proyecto.created_at}</td>
    <td>${proyecto.estado}</td>
    <td>
      <!-- Botones de edición y borrado -->
      ${botones}
    </td>
  </tr>`;
      });
      tablaProyectos += // html
      `
  </tbody>
</table>
`;
      document.querySelector("#tabProyectos").innerHTML = tablaProyectos;
    };
    const pintaUsuarios = (usuariosFiltrados) => {
      let tablaUsuarios = (
        // html
        `
        <!-- tabla usuarios-->
        <form id="formAdminUsuarios" action="" class="form" novalidate>
          <table
          class="table table-hover align-middle mt-3"
          style="min-width: 1200px"
          >
          <thead>
            <tr>
              <th></th>
              <th>
                URL imagen <span><i class="bi bi-caret-down"></i></span>
              </th>
              <th>
                Email <span><i class="bi bi-caret-down"></i></span>
              </th>
              <th>
                Nombre <span><i class="bi bi-caret-up"></i></span>
              </th>
              <th>
                Apellidos <span><i class="bi bi-caret-up"></i></span>
              </th>
              <th>
                Fecha <span><i class="bi bi-caret-up"></i></span>
              </th>
              <th>
                Rol <span><i class="bi bi-caret-up"></i></span>
              </th>
              <th>
                Estado <span><i class="bi bi-caret-up"></i></span>
              </th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          `
      );
      usuariosFiltrados.forEach((usuario2) => {
        tablaUsuarios += // html
        `
              <tr>
                  <td>
                    <div class="containerImagen">
                      <div
                        class="rounded-circle d-flex align-items-end justify-content-end"
                        style="
                          background-image: url(${usuario2.avatar});
                          width: 50px;
                          height: 50px;
                          background-size: cover;
                          background-position: center;
                        "
                      >
                        <i
                          data-id = "${usuario2.user_id}" 
                          data-urlavatar="${usuario2.avatar}" 
                          data-urlinputavatar = "urlImagen_${usuario2.user_id}"
                          class="btn btn-success btn-sm rounded-circle bi bi-pencil botonEditarImagen"
                          data-bs-toggle="modal"
                          data-bs-target="#modalEditarImagenPerfil"></i
                        >
                      </div>
                    </div>
                  </td>
                  <td>
                    <!-- URL imagen -->
                    <input
                      id="urlImagen_${usuario2.user_id}"
                      type="url"
                      class="form-control form-control-sm"
                      value="${usuario2.avatar}"
                    />
                    <div class="invalid-feedback">
                      La url no es válida
                    </div>
                  </td>
                  <td>
                    <!-- email -->
                    <input
                      required
                      id="email_${usuario2.user_id}"
                      type="email"
                      class="form-control form-control-sm"
                      value="${usuario2.email}"
                    />
                    <div class="invalid-feedback">
                      Formato incorrecto
                    </div>
                  </td>
                  <td>
                    <input
                      required
                      id="nombreUsuario_${usuario2.user_id}"
                      type="text"
                      class="form-control form-control-sm"
                      value="${usuario2.nombre}"
                    />
                    <div class="invalid-feedback">
                      Nombre requerido
                    </div>
                  </td>
                  <td>
                    <input
                      id="apellidosUsuario_${usuario2.user_id}"
                      type="text"
                      class="form-control form-control-sm"
                      value="${usuario2.apellidos}"
                    />
                  </td>
  
                  <td>
                    <input
                      id="fecha_${usuario2.user_id}"
                      type="date"
                      class="form-control form-control-sm"
                      value="${usuario2.created_at}"
                    />
                    <div class="invalid-feedback">
                      Formato incorrecto
                    </div>
                  </td>
                  <td>
                    <select class="form-control form-control-sm" name="" id="rol_${usuario2.user_id}">
                      <option value="${usuario2.rol}">${usuario2.rol}</option>
                      <option value="registrado">registrado</option>
                      <option value="desarrollador">desarrollador</option>
                      <option value="admin">admin</option>
                    </select>
                  </td>
                  <td>
                    <select class="form-control form-control-sm" name="" id="estado_${usuario2.user_id}">
                      <option value="${usuario2.estado}">${usuario2.estado}</option>
                      <option value="Activo">Activo</option>
                      <option value="Inactivo">Inactivo</option>
                    </select>
                  </td>
                  <td>
                    <button data-id="${usuario2.user_id}" type="submit" class="btn btn-sm btn-success botonActualizar">
                      Actualizar
                    </button>
                  </td>
                  <td>
                    <button data-id="${usuario2.user_id}" class="btn btn-sm btn-outline-danger bi bi-trash3 botonEliminar"></button>
                  </td>
                  
              </tr>
          `;
      });
      tablaUsuarios += "</tbody></table></form>";
      document.querySelector("#tabUsuarios").innerHTML = tablaUsuarios;
    };
    pintaUsuarios(datosUsuarios);
    document.querySelector("#tabProyectos").addEventListener("click", (event) => {
      let id = "";
      if (event.target.classList.contains("botonAdmin")) {
        const boton = event.target;
        const id2 = boton.dataset.id;
        if (boton.classList.contains("botonEditar")) {
          console.log("Editar proyecto " + id2);
          window.location = `#/editarProyecto/${id2}`;
        } else if (boton.classList.contains("botonBorrar")) {
          alert("Borrar proyecto " + id2);
        }
      }
      if (event.target.tagName === "TD") {
        console.log("clic en td");
        id = event.target.parentNode.dataset.id;
        window.location = `#/detalleProyecto/${id}`;
      }
      if (event.target.classList.contains("verDetalle")) {
        id = event.target.dataset.id;
        window.location = `#/detalleProyecto/${id}`;
      }
    });
    const inputBusqueda = document.getElementById("inputBusqueda");
    inputBusqueda.addEventListener("input", () => {
      const textoBusqueda = inputBusqueda.value.toLowerCase().trim();
      let informacion = [];
      if (selectUsuarios) {
        informacion = datosUsuarios;
      } else {
        informacion = datosProyectos;
      }
      const informacionFiltrada = informacion.filter((proyecto) => {
        for (const key in proyecto) {
          const valorCampo = proyecto[key];
          if (typeof valorCampo === "string" && valorCampo.toLowerCase().includes(textoBusqueda)) {
            return true;
          }
        }
        return false;
      });
      if (selectUsuarios) {
        pintaUsuarios(informacionFiltrada);
      } else {
        pintaProyectos(informacionFiltrada);
      }
    });
    document.querySelector("#borrarBuscador").addEventListener("click", () => {
      document.getElementById("inputBusqueda").value = "";
      pintaProyectos(datosProyectos);
      pintaUsuarios(datosUsuarios);
    });
    document.querySelector("main").addEventListener("click", (event) => {
      if (event.target.classList.contains("botonAdmin")) {
        const boton = event.target;
        const id = boton.dataset.id;
        if (boton.classList.contains("botonEditar")) {
          console.log("Editar proyecto " + id);
          window.location = `#/proyectoEditar/${id}`;
        }
        if (boton.classList.contains("botonBorrar")) {
          console.log("Borrar proyecto " + id);
        }
      }
    });
    const formulario = document.querySelector("#formAdminUsuarios");
    formulario.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.target.classList.contains("botonActualizar") && formulario.checkValidity()) {
        const id = e.target.dataset.id;
        enviaDatos(id);
      } else {
        formulario.classList.add("was-validated");
      }
      if (e.target.classList.contains("botonEliminar")) {
        const tr = e.target.parentNode.parentNode;
        tr.classList.add("d-none");
        const id = e.target.dataset.id;
        borrarUsuario(id);
      }
      if (e.target.classList.contains("botonEditarImagen")) {
        const urlAvatar = e.target.dataset.urlavatar;
        const urlInputAvatar = e.target.dataset.urlinputavatar;
        const id = e.target.dataset.id;
        editarImagenPerfil.script(urlAvatar, urlInputAvatar, id);
      }
    });
    formulario.addEventListener("change", (e) => {
      if (!formulario.checkValidity()) {
        console.log("No valida");
        formulario.classList.add("was-validated");
      }
    });
    function enviaDatos(id) {
      const proyectoEditado = {
        imagen: document.querySelector("#urlImagen_" + id).value,
        nombre: document.querySelector("#nombreUsuario_" + id).value,
        apellidos: document.querySelector("#apellidosUsuario_" + id).value,
        estado: document.querySelector("#estado_" + id).value,
        email: document.querySelector("#email_" + id).value
      };
      alert(
        `Enviando a la base de datos el objeto con id = ${usuario.user_id}`
      );
      console.log(
        `Enviando a la base de datos el objeto con id = ${usuario.user_id}`,
        proyectoEditado
      );
    }
    function borrarUsuario(id) {
      alert("Borrando usuario " + id);
    }
  }
};
export {
  adminVista as default
};
