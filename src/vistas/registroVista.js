export default {
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
              <input required id="nombre" type="text" class="form-control" />
              <div class="invalid-feedback">Por favor, ingrese su nombre.</div>
            </div>
            <div class="mb-3">
              <label for="apellidos" class="form-label">Apellidos:</label>
              <input id="apellidos" type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email:</label>
              <input required id="email" type="email" class="form-control" />
              <div class="invalid-feedback">
                Por favor, ingrese un email válido.
              </div>
            </div>
            <div class="mb-3">
              <label for="pass" class="form-label">Contraseña:</label>
              <input
                required
                id="pass"
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
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
      "use strict";

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.querySelectorAll(".needs-validation");

      // Loop over them and prevent submission
      Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }

            form.classList.add("was-validated");
          },
          false
        );
      });
    })();
  },
};
