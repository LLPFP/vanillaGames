export const header = {
  // html
  template: `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container">
    <a class="navbar-brand router-link" href="#/home"
      ><img
        src="images/logo.svg"
        alt=""
        width="30"
        height="24"
        class="d-inline-block align-text-top"
      />

      Vanilla Games</a
    >
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link router-link" aria-current="page" href="#/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link router-link" aria-current="page" href="#/proyectos">TOP5 Proyectos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link router-link" aria-current="page" href="#/adminUsuarios">A cerca de</a>
        </li>
      </ul>
      <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="ms-2 btn btn-success router-link" aria-current="page" href="#/login">
            Iniciar sesión
            <i class="bi bi-box-arrow-in-right"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="ms-2 btn btn-outline-light router-link" aria-current="page" href="#/registro">
            Regístrate
            <i class="bi bi-box-arrow-in-right"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  `,
};
