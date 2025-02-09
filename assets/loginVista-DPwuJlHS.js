import { U as User, l as ls, h as header } from "./main-C9yVXgh-.js";
import { P as Perfil } from "./perfil-ClLmWtPE.js";
const loginVista = {
  template: `
    <div class="container">
        <h1 class="mt-5 text-center">Inicia sesión</h1>
        <div class="m-5 mx-auto" style="max-width: 400px">
          <form class="form border shadow-sm p-3 needs-validation formulario" action="" novalidate>
            <div class="mb-3">
              <label for="email" class="form-label">Email:</label>
              <input id="email" name="email" type="email" class="form-control" required />
              <div class="invalid-feedback">
                Por favor, introduce un email válido.
              </div>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Contraseña:</label>
              <input
                required
                id="password"
                name="password"
                type="password"
                minlength="6"
                class="form-control"
              />
              <div class="invalid-feedback">
                La contraseña debe tener al menos 6 caracteres.
              </div>
            </div>
            <div class="form-check mt-3">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked
              />
              <label class="form-check-label" for="flexCheckChecked">
                Recordar sesión
              </label>
            </div>
            <a class="d-block text-end" href="#"
              >¿Has olvidado tu contraseña?</a
            >
            <button type="submit" class="btn btn-primary w-100 mt-3" href="#/proyectos">
              Iniciar sesión
            </button>
          </form>
          <a class="d-block mt-5 btn btn-secondary mx-auto" href="#"
            >¿Eres nuevo? Regístrate</a
          >
        </div>
      </div>`,
  script: () => {
    (function() {
      var forms = document.querySelectorAll(".needs-validation");
      Array.prototype.slice.call(forms).forEach(function(form) {
        form.addEventListener(
          "submit",
          function(event) {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            } else {
              event.preventDefault();
              enviarDatos(form);
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    })();
    async function enviarDatos(formulario) {
      try {
        const user = {
          email: formulario.email.value,
          password: formulario.password.value
        };
        User.logout();
        const usuarioLogueado = await User.login(user);
        console.log("¡login correcto!", usuarioLogueado);
        console.log("usuarioLogueado", usuarioLogueado);
        const userId = usuarioLogueado.id;
        console.log("userId", userId);
        const perfilLogueado = await Perfil.getByUserId(userId);
        console.log("Perfil logueado", perfilLogueado);
        const usuario = {
          email: usuarioLogueado.email,
          rol: perfilLogueado.rol,
          avatar: perfilLogueado.avatar
        };
        console.log("perfil localstorage", usuario);
        ls.setUsuario(usuario);
        window.location = "#/proyectos";
        header.script();
      } catch (error) {
        console.log("Error al iniciar sesión", error);
        alert("El usuario no existe o la contraseña no es correcta", error);
      }
    }
  }
};
export {
  loginVista as default
};
