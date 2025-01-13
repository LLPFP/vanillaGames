// Gestión del localstorage
export const ls = {
  // Captuar datos de localStorage
  getUsuario: () => {
    // Definimos usuario anónimo por si no hay datos en localstorage
    let usuario = {
      email: "anónimo",
      rol: "no logueado",
      avatar: "",
    };
    // Capturamos datos de localstorage
    const usuarioJSON = localStorage.getItem("usuarioVanilla");
    // Si hay un usuario logueado actualizamos usuario, sino devolvemos usuario anónimo
    if (usuarioJSON) {
      // Parseamos datos de localstorage
      usuario = JSON.parse(usuarioJSON);
    }
    return usuario;
  },
  setUsuario: (usuario) => {
    // Convertir el objeto a una cadena JSON
    const usuarioJSON = JSON.stringify(usuario);
    // Guardar en localStorage
    localStorage.setItem("usuarioVanilla", usuarioJSON);
  },
};
// Simulamos el inicio de sesión de un usuario
ls.setUsuario({ email: "chafardera@gmial.com", rol: "registrado" });
