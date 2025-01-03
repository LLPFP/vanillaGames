export default {
  template: `
    <div class="container-fluid">
        <h1 class="mt-5">Panel de administración</h1>
        <div class="row mt-5">
          <div class="col-12">
            <ul class="nav nav-tabs">
              <li class="nav-item w-50">
                <a class="nav-link active" aria-current="page" href="#"
                  >Usuarios</a
                >
              </li>
              <li class="nav-item w-50">
                <a class="nav-link" href="#">Proyectos</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="border border-top-0 p-3">
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

          <div class="col-12" style="overflow-x: auto">
            <form class="needs-validation" novalidate action="">
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
                          class="btn btn-success btn-sm rounded-circle bi bi-pencil"
                        ></i>
                      </div>
                    </div>
                  </td>
                  <td>
                    <input
                      type="url"
                      id="url"
                      class="form-control form-control-sm"
                      value="http://imagen.com"
                      required
                    />
                    <div class="invalid-feedback">La URL debe ser válida.</div>
                  </td>
                  <td>
                    <input
                      type="email"
                      id="email"
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
                      id="nombre"
                      class="form-control form-control-sm"
                      value="Nombre usuario"
                      required
                    />
                    <div class="invalid-feedback">El nombre es requerido.</div>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="apellidos"
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
                      id="rol"
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
                      id="estado"
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
                    <button type="submit" class="btn btn-sm btn-success">
                      Actualizar
                    </button>
                  </td>
                  <td>
                    <i class="btn btn-sm btn-outline-danger bi bi-trash3"></i>
                  </td>
                </tr>
              </table>
            </form>
          </div>
        </div>
      </div>
    `,
  script: () => {
    // Script para la validación del formulario
    const formulario = document.querySelector("form");

    formulario.addEventListener("submit", (event) => {
      if (!formulario.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      formulario.classList.add("was-validated");
    });
  },
};
