import { ls } from "./funciones";

const menuRol = {
  // html
  templateAnonimo: `
  <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
    <li class="nav-item">
      <a class="ms-2 btn btn-success router-link" href="#/login" >
        Iniciar sesión
        <i class="bi bi-box-arrow-in-right"></i>
      </a>
    </li>
    <li class="nav-item">
      <a class="ms-2 btn btn-outline-light router-link" href="#/registro">
        Regístrate
        <i class="bi bi-box-arrow-in-right"></i>
      </a>
    </li>
  </ul>
  `,
  // html
  templateRegistrado: `
  <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
    <li class="nav-item">
      <a class="nav-link active router-link" aria-current="page" href="#/proyectos">PROYECTOS</a>
    </li>
    
  </ul>
  `,
  // html
  templateDesarrollador: ``,
  // html
  templateAdmin: ``,
};

const menuUsuario = {
  // html
  templateRegistrado: `
  <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img src="images/avatar.svg" alt="" width="25" />
      </a>
      <ul class="dropdown-menu me-0" style="left: -100px; width: 100px">
        <li class="text-light text-end p-2 small">
          ${ls.getUsuario().email}
        </li>
        <li class="text-light text-end pe-2 small fst-italic">
          ${ls.getUsuario().rol}
        </li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Mi perfil</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
      </ul>
    </li>
  </ul>
  `,
  // html
  templateDesarrollador: ``,
  // html
  templateAdmin: ``,
};

export { menuRol, menuUsuario };
