export default {
  template: `
   <div class="container">
        <h1 class="mt-5">Edición de proyecto</h1>
        <div class="d-flex justify-content-end">
          <bottom class="btn btn-outline-secondary mt-5">
            <i class="bi bi-arrow-bar-left" style="font-size: 1em"></i>
            Volver</bottom
          >
        </div>
        <form action="" class="needs-validation" novalidate>
          <div class="row mt-2">
            <div class="col-12 col-md-4 pt-2 mb-3">
              <img src=".images/juego.jpg" alt="" class="img-fluid" />
              <label class="form-label mt-2" for="urlImagen"
                ><strong>URL imagen: </strong></label
              >
              <input
                id="urlImagen"
                type="url"
                class="form-control"
                value="http://enlaceImagen.com"
                required
              />
              <div class="invalid-feedback">
                Por favor, introduce una URL válida para la imagen
              </div>
            </div>
            <div class="col-12 col-md-8">
              <!-- Formulario nuevo proyecto -->

              <!-- Nombre proyecto -->
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
                Por favor, introduce un nombre para el proyecto
              </div>

              <!-- Descripción -->
              <label class="form-label mt-2" for="descripcion"
                ><strong>Descripción: </strong></label
              >
              <textarea id="descripcion" class="form-control" rows="4" required>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sunt? Recusandae labore at voluptatem tempore incidunt distinctio eaque? Est aspernatur laudantium itaque ullam numquam autem dolor quia amet eum consectetur.</textarea
              >
              <div class="invalid-feedback">
                Por favor, añade una descripción del proyecto
              </div>

              <!-- Estado -->
              <label class="form-label mt-2" for="estado"
                ><strong>Estado: </strong></label
              >
              <select required id="estado" class="form-control">
                <option value="">Selecciona un estado</option>
                <option value="estado">estado</option>
                <option value="otro estado">otro estado</option>
              </select>
              <div class="invalid-feedback">
                Por favor, selecciona un estado para el proyecto
              </div>

              <!-- Fecha -->
              <label class="form-label mt-2" for="fecha"
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
                Por favor, selecciona una fecha
              </div>

              <!-- Enlace al proyecto -->
              <label class="form-label mt-2" for="enlace"
                ><strong>Enlace: </strong></label
              >
              <input
                id="enlace"
                type="url"
                class="form-control"
                value="http://enlace.com"
                required
              />
              <div class="invalid-feedback">
                Por favor, introduce una URL válida para el proyecto
              </div>

              <!-- Repositorio -->
              <label class="form-label mt-2" for="repositorio"
                ><strong>Repositorio: </strong></label
              >
              <input
                id="repositorio"
                type="url"
                class="form-control"
                value="user.github.com/123456"
                required
              />
              <div class="invalid-feedback">
                Por favor, introduce una URL válida para el repositorio
              </div>

              <!-- Submit -->
              <input
                type="submit"
                class="btn btn-success mt-3"
                value="Subir proyecto"
              />
            </div>
          </div>
        </form>
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
