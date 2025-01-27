import { proyectos, perfiles } from "../bd/datosPrueba";
import { ls } from "../componentes/funciones";

export default {
  template: `
    <div class="container-fluid d-flex justify-content-center">
        <div class="col-12 col-lg-10">
            <h1 class="mt-5">Panel de administración</h1>
            <div class="row mt-5">
              <div class="col-12">
                <ul class="nav nav-tabs">
                  <li class="nav-item w-50">
                    <button class="nav-link router-link active w-100 fichaUsuarios" aria-current="page" 
                      >Usuarios</button
                    >
                  </li>
                  <li class="nav-item w-50">
                    <button class="nav-link w-100 router-link fichaProyectos">Proyectos</button>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Panel de usuarios -->
            <div class="border border-top-0 p-3" id="tabUsuarios">
              <div class="row">
                <div class="d-flex col-12 col-md-6 mb-3">
                  <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping"
                      ><i class="bi bi-search"></i
                    ></span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Buscador"
                      id="inputBusqueda"
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                    />
                    <span class="input-group-text" id="borrarBuscador"
                      ><i class="bi bi-x"></i
                    ></span>
                  </div>
                </div>
              </div>

              <div class="col-12" style="overflow-x: auto">
                <form id="formAdminUsuarios" class="needs-validation" novalidate action="">
                  <table
                    class="table table-hover align-middle mt-3"
                    style="min-width: 1200px"
                  >
                    <thead>
                      <tr>
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

                    <tr>
                      <td>
                        <div class="containerImagen">
                          <div
                            class="rounded-circle d-flex align-items-end justify-content-end"
                            style="
                              background-image: url(.images/avatar.svg);
                              margin-top: -20px;
                              width: 50px;
                              height: 50px;
                              background-size: cover;
                              background-position: center;
                            "
                          >
                            <i
                              class="btn btn-success btn-sm rounded-circle bi bi-pencil botonEditarImagen"
                            ></i>
                          </div>
                        </div>
                      </td>
                      <td>
                        <input
                          type="url"
                          id="urlImagen_1"
                          class="form-control form-control-sm"
                          value="http://imagen.com"
                          required
                        />
                        <div class="invalid-feedback">La URL debe ser válida.</div>
                      </td>
                      <td>
                        <input
                          type="email"
                          id="email_1"
                          class="form-control form-control-sm"
                          value="email@email.com"
                          required
                        />
                        <div class="invalid-feedback">
                          Por favor ingresa un correo válido.
                        </div>
                      </td>
                      <td>
                        <input
                          type="text"
                          id="nombreUsuario_1"
                          class="form-control form-control-sm"
                          value="Nombre usuario"
                          required
                        />
                        <div class="invalid-feedback">El nombre es requerido.</div>
                      </td>
                      <td>
                        <input
                          type="text"
                          id="apellidosUsuario_1"
                          class="form-control form-control-sm"
                          value="Apellidos usuario"
                        />
                        <div class="invalid-feedback">
                          Los apellidos son requeridos.
                        </div>
                      </td>

                      <td>
                        <input
                          type="date"
                          class="form-control form-control-sm"
                          value="2023-12-12"
                          required
                        />
                        <div class="invalid-feedback">La fecha es requerida.</div>
                      </td>
                      <td>
                        <select
                          class="form-control form-control-sm"
                          name="rol"
                          id="rol_1"
                          required
                        >
                          <option value="">Selecciona una opción</option>
                          <option value="1">opción</option>
                          <option value="2">opción2</option>
                        </select>
                        <div class="invalid-feedback">
                          Por favor selecciona un rol.
                        </div>
                      </td>
                      <td>
                        <select
                          class="form-control form-control-sm"
                          name="estado"
                          id="estado_1"
                          required
                        >
                          <option value="">Selecciona un estado</option>
                          <option value="1">opción</option>
                          <option value="2">opción2</option>
                        </select>
                        <div class="invalid-feedback pt-2">
                          Por favor selecciona un estado.
                        </div>
                      </td>
                      <td>
                        <button type="submit" class="btn btn-sm btn-success botonActualizar" data-id="1">
                          Actualizar
                        </button>
                      </td>
                      <td>
                        <i class="btn btn-sm btn-outline-danger bi bi-trash3 botonEliminar" data-id="1"></i>
                      </td>
                    </tr>
                  </table>
                </form>
              </div>
            </div>

            <!-- Panel de proyectos -->
            <div class="border border-top-0 p-3 d-none" id="tabProyectos">
              <!-- buscador -->
              <div class="row">
                <div class="d-flex col-12 col-md-6 mb-3">
                  <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping"
                      ><i class="bi bi-search"></i
                    ></span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Buscador"
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                    />
                    <span class="input-group-text" id="addon-wrapping"
                      ><i class="bi bi-x"></i
                    ></span>
                  </div>
                </div>
              </div>

              <!-- tabla proyectos -->
              <div class="col-12" style="overflow-x: auto">
                <table
                  class="table table-hover align-middle mt-3"
                  style="min-width: 1000px"
                >
                  <thead>
                    <tr>
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

                  <tr>
                    <td>
                      <div class="containerImagen">
                        <img width="200px" src=".images/juego.jpg" alt="" />
                      </div>
                    </td>
                    <td>Proyecto ejemplo 1</td>
                    <td>Ejemplo de web para centro fp</td>
                    <td>
                      <a href="http://www.fpllefia.con">http://www.fpllefia.con</a>
                    </td>
                    <td><a href="#">carrebola.github.com/juego1</a></td>
                    <td>carlos</td>
                    <td>13/12/2021</td>
                    <td>?</td>
                    <td><a class="router-link" href="#/editarProyecto" aria-current="page" ><i class="btn btn-outline-primary bi bi-pencil botonAdmin botonEditar" data-id="1"></i></a></td>
                    <td><i class="btn btn-outline-danger bi bi-trash3 botonAdmin botonBorrar" data-id="1"></i></td>
                  </tr>
                </table>
              </div>
            </div>
        </div>
    </div>
    `,
  script: () => {
    // Capturamos los datos del usuario logueado
    const usuario = ls.getUsuario();

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
      } else if (event.target.classList.contains("fichaProyectos")) {
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
      pintaProyectos(datosProyectos);
      pintaUsuarios(datosUsuarios);
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
      </tr>
    </thead>
    <tbody>
  `;
      // Para cada proyecto en el array 'proyectosFiltrados'
      proyectosFiltrados.forEach((proyecto) => {
        // Genera filas de datos de proyecto en la tabla
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
  },
};
