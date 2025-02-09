import { s as supabase } from "./main-C9yVXgh-.js";
class Proyecto {
  // Constructor que inicializa las propiedades del proyecto
  constructor({
    id = null,
    // ID único del proyecto
    created_at = null,
    // Fecha de creación del proyecto
    user_id = null,
    // ID del usuario propietario del proyecto
    nombre = null,
    // Nombre del proyecto
    descripcion = null,
    // Descripción del proyecto
    imagen = null,
    // URL de la imagen del proyecto
    enlace = null,
    // URL del enlace del proyecto
    repositorio = null,
    // URL del repositorio del proyecto
    autor = null,
    // Nombre del autor del proyecto
    estado = "activo"
    // Estado del proyecto (activo/inactivo)
  }) {
    this.id = id;
    this.created_at = created_at;
    this.user_id = user_id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.enlace = enlace;
    this.repositorio = repositorio;
    this.autor = autor;
    this.estado = estado;
  }
  // Método estático para obtener todos los proyectos
  static async getAll() {
    const { data: proyectos, error } = await supabase.from("proyectos").select("*").order("created_at", { ascending: false });
    if (error) {
      throw new Error(error.message);
    }
    return proyectos.map((proyecto) => new Proyecto(proyecto));
  }
  // Método estático para obtener un proyecto por su ID
  static async getById(id) {
    const { data: proyecto, error } = await supabase.from("proyectos").select("*").eq("id", id).single();
    if (error) {
      throw new Error(error.message);
    }
    return new Proyecto(proyecto);
  }
  // Método estático para obtener proyectos por el ID del usuario propietario
  static async getByUserId(userId) {
    const { data: proyectos, error } = await supabase.from("proyectos").select("*").eq("user_id", userId);
    if (error) {
      throw new Error(error.message);
    }
    return proyectos.map((proyecto) => new Proyecto(proyecto));
  }
  // Método estático para crear un nuevo proyecto
  static async create(proyectoData) {
    const { data, error } = await supabase.from("proyectos").insert(proyectoData).select();
    if (error) {
      throw new Error(`Error creando proyecto: ${error.message}`);
    }
    return data ? new Proyecto(data[0]) : null;
  }
  // Método estático para actualizar un proyecto existente por su ID
  static async update(id, newData) {
    const { error } = await supabase.from("proyectos").update(newData).eq("id", id);
    if (error) {
      throw new Error(`Error actualizando proyecto: ${error.message}`);
    }
    return true;
  }
}
export {
  Proyecto as P
};
