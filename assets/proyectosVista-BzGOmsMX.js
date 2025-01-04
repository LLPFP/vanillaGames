const proyectosVista = {
  template: `
       <div class="container">
        <h1 class="mt-5">Proyectos</h1>
        <div class="row mt-5">
          <div class="col-12">
            <ul class="nav nav-tabs">
              <li class="nav-item w-50">
                <a class="nav-link active" aria-current="page" href="#"
                  >Todos los proyectos</a
                >
              </li>
              <li class="nav-item w-50">
                <a class="nav-link" href="#">Mis proyectos</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="border border-top-0 p-3">
          <div class="row">
            <div class="col-12 col-sm-4 mb-3">
              <button class="btn btn-primary w-100">Subir proyecto</button>
            </div>
            <div class="d-flex col-12 col-sm-8 mb-3">
              <button class="btn btn-secondary me-2">
                <i class="bi bi-grid-3x3-gap"></i>
              </button>
              <button class="btn btn-secondary me-2">
                <i class="bi bi-list"></i>
              </button>
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
          <!-- tabla -->
          <div class="col-12 d-none d-xl-block" style="overflow-x: auto">
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
              </tr>
              <tr>
                <td>
                  <div class="containerImagen">
                    <img width="200px" src="./images/logo.svg" alt="" />
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
              </tr>
              <tr>
                <td>
                  <div class="containerImagen">
                    <img width="200px" src="./images/logo.svg" alt="" />
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
              </tr>
            </table>
          </div>
          <!-- tarjetas -->

          <div class="d-xl-none row">
            <!-- tarjeta  -->
            <div class="col-12 col-lg-6">
              <div class="card mb-3">
                <div class="row g-0">
                  <div
                    class="col-4"
                    style="
                      background-image: url(./images/logo.svg);
                      background-position: center;
                      background-size: cover;
                    "
                  ></div>
                  <div class="col-8">
                    <div class="card-body">
                      <h5 class="card-title">Tetris</h5>
                      <p class="card-text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Neque quos, quae atque rerum quibusdam
                      </p>
                      <p class="small m-0 text-end text-italic">
                        Autor: Carlos Arrebola
                      </p>
                      <p class="small text-end text-italic">
                        Fecha: 12/12/2023
                      </p>

                      <a class="btn btn-sm btn-outline-primary" href="#"
                        >Enlace</a
                      >
                      <a class="btn btn-sm btn-outline-primary" href="#"
                        >Repo</a
                      >
                      <a class="btn btn-sm btn-success" href="#">Estado</a>
                      <a
                        class="d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
                      ></a>
                      <a
                        class="d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- tarjeta  -->
            <div class="col-12 col-lg-6">
              <div class="card mb-3">
                <div class="row g-0">
                  <div
                    class="col-4"
                    style="
                      background-image: url(./images/logo.svg);
                      background-position: center;
                      background-size: cover;
                    "
                  ></div>
                  <div class="col-8">
                    <div class="card-body">
                      <h5 class="card-title">Tetris</h5>
                      <p class="card-text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Neque quos, quae atque rerum quibusdam
                      </p>
                      <p class="small m-0 text-end text-italic">
                        Autor: Carlos Arrebola
                      </p>
                      <p class="small text-end text-italic">
                        Fecha: 12/12/2023
                      </p>

                      <a class="btn btn-sm btn-outline-primary" href="#"
                        >Enlace</a
                      >
                      <a class="btn btn-sm btn-outline-primary" href="#"
                        >Repo</a
                      >
                      <a class="btn btn-sm btn-success" href="#">Estado</a>
                      <a
                        class="d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
                      ></a>
                      <a
                        class="d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- tarjeta  -->
            <div class="col-12 col-lg-6">
              <div class="card mb-3">
                <div class="row g-0">
                  <div
                    class="col-4"
                    style="
                      background-image: url(./images/logo.svg);
                      background-position: center;
                      background-size: cover;
                    "
                  ></div>
                  <div class="col-8">
                    <div class="card-body">
                      <h5 class="card-title">Tetris</h5>
                      <p class="card-text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Neque quos, quae atque rerum quibusdam
                      </p>
                      <p class="small m-0 text-end text-italic">
                        Autor: Carlos Arrebola
                      </p>
                      <p class="small text-end text-italic">
                        Fecha: 12/12/2023
                      </p>

                      <a class="btn btn-sm btn-outline-primary" href="#"
                        >Enlace</a
                      >
                      <a class="btn btn-sm btn-outline-primary" href="#"
                        >Repo</a
                      >
                      <a class="btn btn-sm btn-success" href="#">Estado</a>
                      <a
                        class="d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
                      ></a>
                      <a
                        class="d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- tarjeta  -->
            <div class="col-12 col-lg-6">
              <div class="card mb-3">
                <div class="row g-0">
                  <div
                    class="col-4"
                    style="
                      background-image: url(./images/logo.svg);
                      background-position: center;
                      background-size: cover;
                    "
                  ></div>
                  <div class="col-8">
                    <div class="card-body">
                      <h5 class="card-title">Tetris</h5>
                      <p class="card-text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Neque quos, quae atque rerum quibusdam
                      </p>
                      <p class="small m-0 text-end text-italic">
                        Autor: Carlos Arrebola
                      </p>
                      <p class="small text-end text-italic">
                        Fecha: 12/12/2023
                      </p>

                      <a class="btn btn-sm btn-outline-primary" href="#"
                        >Enlace</a
                      >
                      <a class="btn btn-sm btn-outline-primary" href="#"
                        >Repo</a
                      >
                      <a class="btn btn-sm btn-success" href="#">Estado</a>
                      <a
                        class="d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
                      ></a>
                      <a
                        class="d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- tarjeta  -->
            <div class="col-12 col-lg-6">
              <div class="card mb-3">
                <div class="row g-0">
                  <div
                    class="col-4"
                    style="
                      background-image: url(./images/logo.svg);
                      background-position: center;
                      background-size: cover;
                    "
                  ></div>
                  <div class="col-8">
                    <div class="card-body">
                      <h5 class="card-title">Tetris</h5>
                      <p class="card-text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Neque quos, quae atque rerum quibusdam
                      </p>
                      <p class="small m-0 text-end text-italic">
                        Autor: Carlos Arrebola
                      </p>
                      <p class="small text-end text-italic">
                        Fecha: 12/12/2023
                      </p>

                      <a class="btn btn-sm btn-outline-primary" href="#"
                        >Enlace</a
                      >
                      <a class="btn btn-sm btn-outline-primary" href="#"
                        >Repo</a
                      >
                      <a class="btn btn-sm btn-success" href="#">Estado</a>
                      <a
                        class="d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
                      ></a>
                      <a
                        class="d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- tarjeta  -->
            <div class="col-12 col-lg-6">
              <div class="card mb-3">
                <div class="row g-0">
                  <div
                    class="col-4"
                    style="
                      background-image: url(./images/logo.svg);
                      background-position: center;
                      background-size: cover;
                    "
                  ></div>
                  <div class="col-8">
                    <div class="card-body">
                      <h5 class="card-title">Tetris</h5>
                      <p class="card-text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Neque quos, quae atque rerum quibusdam
                      </p>
                      <p class="small m-0 text-end text-italic">
                        Autor: Carlos Arrebola
                      </p>
                      <p class="small text-end text-italic">
                        Fecha: 12/12/2023
                      </p>

                      <a class="btn btn-sm btn-outline-primary" href="#"
                        >Enlace</a
                      >
                      <a class="btn btn-sm btn-outline-primary" href="#"
                        >Repo</a
                      >
                      <a class="btn btn-sm btn-success" href="#">Estado</a>
                      <a
                        class="d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
                      ></a>
                      <a
                        class="d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
};
export {
  proyectosVista as default
};
