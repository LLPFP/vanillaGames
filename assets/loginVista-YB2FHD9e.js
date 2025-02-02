import { a as perfiles } from "./datosPrueba-BtcYjQH3.js";
import { l as ls } from "./main-CsaVwWP-.js";
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
              <label for="pass" class="form-label">Contraseña:</label>
              <input
                required
                id="pass"
                name="pass"
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
    function enviarDatos(formulario) {
      const email = formulario.email.value;
      const pass = formulario.pass.value;
      const indexUser = perfiles.findIndex((user) => user.email === email);
      if (indexUser > 0) {
        if (perfiles[indexUser].contraseña === pass) {
          console.log("¡login correcto!");
          const usuario = {
            nombre: perfiles[indexUser].nombre,
            apellidos: perfiles[indexUser].apellidos,
            email: perfiles[indexUser].email,
            rol: perfiles[indexUser].rol,
            avatar: perfiles[indexUser].avatar,
            user_id: perfiles[indexUser].user_id
          };
          ls.setUsuario(usuario);
          window.location = "#/proyectos";
          header.script();
        } else {
          alert("El usuario no existe o la contraseña no es correcta");
        }
      } else {
        alert("El usuario no existe o la contraseña no es correcta");
      }
    }
  }
};
export {
  loginVista as default
};
