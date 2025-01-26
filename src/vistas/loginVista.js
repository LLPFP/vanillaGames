import { perfiles } from "../bd/datosPrueba";

export default {
  template: `
    <div class="container">
        <h1 class="mt-5 text-center">Inicia sesión</h1>
        <div class="m-5 mx-auto" style="max-width: 400px">
          <form class="form border shadow-sm p-3 needs-validation" novalidate>
            <div class="mb-3">
              <label for="email" class="form-label">Email:</label>
              <input required id="email" type="email" class="form-control" />
              <div class="invalid-feedback">
                Por favor, introduce un email válido.
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
            <button type="submit" class="btn btn-primary w-100 mt-3">
              Iniciar sesión
            </button>
          </form>
          <a class="d-block mt-5 btn btn-secondary mx-auto" href="#"
            >¿Eres nuevo? Regístrate</a
          >
        </div>
      </div>`,

  script: () => {
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    // Script para la validación del formulario

    //Capturamos el formulario en una variable
    const formulario = document.querySelector("form");

    //Detectamos su evento submit (enviar)
    formulario.addEventListener("submit", (event) => {
      //Comprobamos si el formulario no valida
      if (!formulario.checkValidity()) {
        //Detenemos el evento enviar (submit)
        event.preventDefault();
        event.stopPropagation();
      }
      //Y añadimos la clase 'was-validate' para que se muestren los mensajes
      formulario.classList.add("was-validated");
    });

    // Función para enviar datos a la bd
    function enviarDatos(formulario) {
      const email = formulario.email.value;
      const pass = formulario.password.value;

      // buscamos el indice del email en el array perfiles
      const indexUser = perfiles.findIndex((user) => user.email === email); // 1
      // Si encuentra un usuario
      if (indexUser > 0) {
        // Si la contraseña es correcta
        if (perfiles[indexUser].contraseña === pass) {
          console.log("¡login correcto!");
          const usuario = {
            nombre: perfiles[indexUser].nombre,
            apellidos: perfiles[indexUser].apellidos,
            email: perfiles[indexUser].email,
            rol: perfiles[indexUser].rol,
            avatar: perfiles[indexUser].avatar,
            user_id: perfiles[indexUser].user_id,
          };
          // Guardamos datos de usaurio en localstorage
          ls.setUsuario(usuario);
          // Cargamos página home
          window.location = "#/proyectos";
          // Actualizamos el header para que se muestren los menús que corresponden al rol
          header.script();
        } else {
          // console.log('La contraseña no corresponde')
          alert("El usuario no existe o la contraseña no es correcta");
        }
      } else {
        // console.log('El usuario no existe')
        alert("El usuario no existe o la contraseña no es correcta");
      }
    }
  },
};
