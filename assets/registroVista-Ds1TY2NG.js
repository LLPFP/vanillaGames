import { U as User } from "./main-C9yVXgh-.js";
import { P as Perfil } from "./perfil-ClLmWtPE.js";
const registroVista = {
  template: `
    <div class="container">
        <h1 class="mt-5 text-center">Registro</h1>
        <div class="m-5 mx-auto" style="max-width: 400px">
          <form
            action="Home.html"
            class="form border shadow-sm p-3 needs-validation"
            novalidate
          >
            <div class="mb-3">
              <label for="nombre" class="form-label">Nombre:</label>
              <input required id="nombre" name="nombre" type="text" class="form-control" />
              <div class="invalid-feedback">Por favor, ingrese su nombre.</div>
            </div>
            <div class="mb-3">
              <label for="apellidos" class="form-label">Apellidos:</label>
              <input id="apellidos" name="apellidos" type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email:</label>
              <input required id="email" name="Email" type="email" class="form-control" />
              <div class="invalid-feedback">
                Por favor, ingrese un email válido.
              </div>
            </div>
            <div class="mb-3">
              <label for="pass" class="form-label">Contraseña:</label>
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
            <button type="submit" class="btn btn-primary w-100">Enviar</button>
          </form>
        </div>
      </div>`,
  script: () => {
    (function() {
      var forms = document.querySelectorAll(".needs-validation");
      Array.prototype.slice.call(forms).forEach(function(form) {
        form.addEventListener(
          "submit",
          async function(event) {
            event.preventDefault();
            if (!form.checkValidity()) {
              event.stopPropagation();
              form.classList.add("was-validated");
            } else {
              try {
                const usuario = {
                  email: form.email.value,
                  password: form.password.value
                };
                console.log("Formulario valido. Datos formulario: ", usuario);
                const user = await User.create(usuario);
                console.log("user creado", user);
                const perfil = {
                  user_id: user.id,
                  nombre: form.nombre.value,
                  apellidos: form.apellidos.value,
                  estado: "Activo",
                  rol: "registrado"
                };
                await Perfil.create(perfil);
                alert("Usuario creado correctamente. Revisa tu email...");
                window.location = "#/login";
              } catch (error) {
                alert("Error al crear usuario: " + error);
              }
            }
          },
          false
        );
      });
    })();
  }
};
export {
  registroVista as default
};
