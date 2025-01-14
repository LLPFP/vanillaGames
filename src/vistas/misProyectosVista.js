export default {
  template: `
         <div class="container">
          <h1 class="mt-5">Proyectos</h1>
          <div class="row mt-5">
            <div class="col-12">
              <ul class="nav nav-tabs">
                <li class="nav-item w-50">
                  <a class="nav-link router-link" aria-current="page" href="#/proyectos"
                    >Todos los proyectos</a
                  >
                </li>
                <li class="nav-item w-50">
                  <a class="nav-link active" href="#/misProyectos">Mis proyectos</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="border border-top-0 p-3">
            <div class="row">
              <div class="col-12 col-sm-4 mb-3">
                <a class="btn btn-primary w-100 router-link" href="#/nuevoProyecto">Subir proyecto</a>
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
                    <a class="router-link" href="#/detalleProyecto" aria-current="page">
                        <img width="90px" src="https://cdn.pixabay.com/photo/2016/10/28/11/57/tic-tac-toe-1777859_960_720.jpg" alt="" />
                    </a>
                  </div>
                </td>
            
                <td><a class="router-link text-decoration-none text-black" href="#/detalleProyecto" aria-current="page">Proyecto ejemplo 1</a></td>
                <td>Ejemplo de web para centro fp</td>
                <td>
                  <a href="http://www.fpllefia.con">http://www.fpllefia.con</a>
                </td>
                <td><a href="#">carrebola.github.com/juego1</a></td>
                <td>carlos</td>
                <td>13/12/2021</td>
                <td>?</td>
                <td><a class="router-link" href="#/editarProyecto" aria-current="page" ><i class="btn btn-outline-primary bi bi-pencil"></i></a></td>
                <td><i class="btn btn-outline-danger bi bi-trash3"></i></td>
              </tr>
              <tr>
                <td>
                  <div class="containerImagen">
                    <a class="router-link" href="#/detalleProyecto" aria-current="page">
                        <img width="90px" src="https://cdn.pixabay.com/photo/2016/10/28/11/57/tic-tac-toe-1777859_960_720.jpg" alt="" />
                    </a>
                    </div>
                </td>
                <td><a class="router-link text-decoration-none text-black" href="#/detalleProyecto" aria-current="page">Proyecto ejemplo 1</a></td>
                <td>Ejemplo de web para centro fp</td>
                <td>
                  <a href="http://www.fpllefia.con">http://www.fpllefia.con</a>
                </td>
                <td><a href="#">carrebola.github.com/juego1</a></td>
                <td>carlos</td>
                <td>13/12/2021</td>
                <td>?</td>
                <td><a class="router-link" href="#/editarProyecto" aria-current="page" ><i class="btn btn-outline-primary bi bi-pencil"></i></a></td>
                <td><i class="btn btn-outline-danger bi bi-trash3"></i></td>
              </tr>
              <tr>
                <td>
                  <div class="containerImagen">
                    <a class="router-link" href="#/detalleProyecto" aria-current="page">
                        <img width="90px" src="https://cdn.pixabay.com/photo/2016/10/28/11/57/tic-tac-toe-1777859_960_720.jpg" alt="" />
                    </a>
                    </div>
                </td>
                <td><a class="router-link text-decoration-none text-black" href="#/detalleProyecto" aria-current="page">Proyecto ejemplo 1</a></td>
                <td>Ejemplo de web para centro fp</td>
                <td>
                  <a href="http://www.fpllefia.con">http://www.fpllefia.con</a>
                </td>
                <td><a href="#">carrebola.github.com/juego1</a></td>
                <td>carlos</td>
                <td>13/12/2021</td>
                <td>?</td>
                <td><a class="router-link" href="#/editarProyecto" aria-current="page" ><i class="btn btn-outline-primary bi bi-pencil"></i></a></td>
                <td><i class="btn btn-outline-danger bi bi-trash3"></i></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      
            </div>
            </div>
          </div>
        </div>
      `,
};
