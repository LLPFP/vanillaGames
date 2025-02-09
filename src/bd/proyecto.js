// Importa el objeto 'supabase' desde un archivo 'supabase.js'
import { supabase } from "./supabase.js";

// Definición de la clase Proyecto
export class Proyecto {
  // Constructor que inicializa las propiedades del proyecto
  constructor({
    id = null, // ID único del proyecto
    created_at = null, // Fecha de creación del proyecto
    user_id = null, // ID del usuario propietario del proyecto
    nombre = null, // Nombre del proyecto
    descripcion = null, // Descripción del proyecto
    imagen = null, // URL de la imagen del proyecto
    enlace = null, // URL del enlace del proyecto
    repositorio = null, // URL del repositorio del proyecto
    autor = null, // Nombre del autor del proyecto
    estado = "activo", // Estado del proyecto (activo/inactivo)
  }) {
    // Asignación de valores a las propiedades del proyecto
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
    // Realiza una consulta a la base de datos para obtener todos los proyectos
    const { data: proyectos, error } = await supabase
      .from("proyectos")
      .select("*") // Selecciona todas las columnas
      .order("created_at", { ascending: false }); // Ordena por fecha de creación descendente

    // Manejo de errores: lanza una excepción si ocurre algún error
    if (error) {
      throw new Error(error.message);
    }

    // Mapea los proyectos obtenidos a instancias de la clase Proyecto y los devuelve
    return proyectos.map((proyecto) => new Proyecto(proyecto));
  }

  // Método estático para obtener un proyecto por su ID
  static async getById(id) {
    // Realiza una consulta para obtener un proyecto por su ID
    const { data: proyecto, error } = await supabase
      .from("proyectos")
      .select("*")
      .eq("id", id)
      .single();

    // Manejo de errores
    if (error) {
      throw new Error(error.message);
    }

    // Devuelve una nueva instancia de Proyecto
    return new Proyecto(proyecto);
  }

  // Método estático para obtener proyectos por el ID del usuario propietario
  static async getByUserId(userId) {
    // Realiza una consulta para obtener proyectos por el ID de usuario
    const { data: proyectos, error } = await supabase
      .from("proyectos")
      .select("*")
      .eq("user_id", userId); // Filtra por el ID de usuario especificado

    // Manejo de errores
    if (error) {
      throw new Error(error.message);
    }

    // Devuelve un array de instancias de Proyecto
    return proyectos.map((proyecto) => new Proyecto(proyecto));
  }

  // Método estático para crear un nuevo proyecto
  static async create(proyectoData) {
    // Inserta un nuevo proyecto en la base de datos con los datos proporcionados
    const { data, error } = await supabase
      .from("proyectos")
      .insert(proyectoData) // Inserta los datos del nuevo proyecto
      .select(); // Devuelve los datos insertados

    // Manejo de errores
    if (error) {
      throw new Error(`Error creando proyecto: ${error.message}`);
    }

    // Si se insertaron datos, devuelve una nueva instancia de Proyecto con los datos insertados
    return data ? new Proyecto(data[0]) : null;
  }

  // Método estático para actualizar un proyecto existente por su ID
  static async update(id, newData) {
    // Actualiza un proyecto existente en la base de datos con los nuevos datos
    const { error } = await supabase
      .from("proyectos")
      .update(newData) // Actualiza con los nuevos datos proporcionados
      .eq("id", id); // Filtra por el ID del proyecto a actualizar

    // Manejo de errores
    if (error) {
      throw new Error(`Error actualizando proyecto: ${error.message}`);
    }

    // Si la actualización fue exitosa, devuelve true
    return true;
  }
}
