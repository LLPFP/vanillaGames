export default {
  template: `<div class="container">
        <h1 class="mt-5">Nuevo proyecto</h1>
        <div class="d-flex justify-content-end">
          <bottom class="btn btn-outline-secondary mt-5">
            <i class="bi bi-arrow-bar-left" style="font-size: 1em"></i>
            Volver</bottom
          >
        </div>

        <div class="row mt-2">
          <div class="col-12 col-md-4 pt-2 mb-3">
            <img src="./images/logo.svg" alt="" class="img-fluid" />
          </div>
          <div class="col-12 col-md-8">
            <form action="" class="form needs-validation" novalidate>
              <div class="mb-3">
                <label class="form-label" for="nombre"
                  ><strong>Nombre: </strong></label
                >
                <input
                  required
                  id="nombre"
                  type="text"
                  value="Nombre Autor"
                  class="form-control"
                />
                <div class="invalid-feedback">
                  Por favor, introduce un nombre válido.
                </div>
              </div>

              <div class="mb-3">
                <label class="form-label" for="descripcion"
                  ><strong>Descripción: </strong></label
                >
                <textarea
                  id="descripcion"
                  class="form-control"
                  rows="4"
                  required
                >
Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sunt? Recusandae labore at voluptatem tempore incidunt distinctio eaque? Est aspernatur laudantium itaque ullam numquam autem dolor quia amet eum consectetur.</textarea
                >
                <div class="invalid-feedback">
                  Por favor, introduce una descripción.
                </div>
              </div>

              <div class="mb-3">
                <label class="form-label" for="estado"
                  ><strong>Estado: </strong></label
                >
                <select required id="estado" class="form-select">
                  <option value="">Selecciona un estado</option>
                  <option value="estado">estado</option>
                  <option value="otro estado">otro estado</option>
                </select>
                <div class="invalid-feedback">
                  Por favor, selecciona un estado.
                </div>
              </div>

              <div class="mb-3">
                <label class="form-label" for="fecha"
                  ><strong>Fecha: </strong></label
                >
                <input
                  id="fecha"
                  type="date"
                  class="form-control"
                  value="12/12/2023"
                  required
                />
                <div class="invalid-feedback">
                  Por favor, selecciona una fecha válida.
                </div>
              </div>

              <div class="mb-3">
                <label class="form-label" for="enlace"
                  ><strong>Enlace: </strong></label
                >
                <input
                  required
                  id="enlace"
                  type="url"
                  class="form-control"
                  value="http://enlace.com"
                />
                <div class="invalid-feedback">
                  Por favor, introduce una URL válida.
                </div>
              </div>

              <div class="mb-3">
                <label class="form-label" for="repositorio"
                  ><strong>Repositorio: </strong></label
                >
                <input
                  required
                  id="repositorio"
                  type="url"
                  class="form-control"
                  value="user.github.com/123456"
                />
                <div class="invalid-feedback">
                  Por favor, introduce una URL de repositorio válida.
                </div>
              </div>

              <a type="submit" class="btn btn-success mt-3 router-link" href="#/misProyectos">
                Subir proyecto
              </a>
            </form>
          </div>
        </div>
      </div>`,

  script: () => {
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (() => {
      "use strict";

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.querySelectorAll(".needs-validation");

      // Loop over them and prevent submission
      Array.from(forms).forEach((form) => {
        form.addEventListener(
          "submit",
          (event) => {
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
