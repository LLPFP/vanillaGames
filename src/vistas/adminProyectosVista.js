export default {
  template: `
  <div class="container-fluid">
        <h1 class="mt-5">Panel de administración</h1>
        <!-- tabs -->
        <div class="row mt-5">
          <div class="col-12">
            <ul class="nav nav-tabs">
              <li class="nav-item w-50">
                <a class="nav-link router-link" aria-current="page" href="#/adminUsuarios">Usuarios</a>
              </li>
              <li class="nav-item w-50">
                <a class="nav-link router-link active" href="#/adminProyectos">Proyectos</a>
              </li>
            </ul>
          </div>
        </div>

        
      </div>
    `,

  script: () => {},
};
