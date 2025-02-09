// Importa el objeto 'supabase' desde un archivo 'supabase.js'
import { supabase } from "./supabase.js";

// Definición de la clase Perfil
export class Perfil {
  // Constructor que inicializa las propiedades del perfil
  constructor({
    id = null, // ID único del perfil
    created_at = null, // Fecha de creación del perfil
    user_id = null, // ID del usuario asociado al perfil
    nombre = null, // Nombre del usuario
    apellidos = null, // Apellidos del usuario
    avatar = "default_avatar.png", // URL del avatar por defecto
    estado = "activo", // Estado del perfil (activo/inactivo, por ejemplo)
    rol = "registrado", // Rol del usuario (registrado, administrador, etc.)
  }) {
    // Asignación de valores a las propiedades del perfil
    this.id = id;
    this.created_at = created_at;
    this.user_id = user_id;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.avatar = avatar;
    this.estado = estado;
    this.rol = rol;
  }

  // Método estático para obtener todos los perfiles
  static async getAll() {
    // Realiza una consulta a la base de datos para obtener todos los perfiles
    const { data: perfiles, error } = await supabase
      .from("perfiles")
      .select("*") // Selecciona todas las columnas
      .order("created_at", { ascending: false }); // Ordena por fecha de creación descendente

    // Manejo de errores: lanza una excepción si ocurre algún error
    if (error) {
      throw new Error(error.message);
    }

    // Mapea los perfiles obtenidos a instancias de la clase Perfil y los devuelve
    return perfiles ? perfiles.map((perfil) => new Perfil(perfil)) : [];
  }

  // Método estático para obtener un perfil por su ID
  static async getById(id) {
    // Realiza una consulta para obtener un perfil por su ID
    const { data: perfil, error } = await supabase
      .from("perfiles")
      .select("*")
      .eq("id", id); // Filtra por el ID especificado

    // Manejo de errores
    if (error) {
      throw new Error(error.message);
    }

    // Devuelve una instancia de Perfil con la información obtenida
    return perfil && perfil[0] ? new Perfil(perfil[0]) : null;
  }

  // Método estático para obtener un perfil por el ID del usuario asociado
  static async getByUserId(userId) {
    // Realiza una consulta para obtener un perfil por el ID de usuario asociado
    const { data: perfil, error } = await supabase
      .from("perfiles")
      .select("*")
      .eq("user_id", userId); // Filtra por el ID de usuario especificado

    // Manejo de errores
    if (error) {
      throw new Error(error.message);
    }

    // Devuelve una instancia de Perfil con la información obtenida
    return perfil && perfil[0] ? new Perfil(perfil[0]) : null;
  }

  // Método estático para crear un nuevo perfil
  static async create(perfilData) {
    // Inserta un nuevo perfil en la base de datos con los datos proporcionados
    const { data, error } = await supabase
      .from("perfiles")
      .insert(perfilData) // Inserta los datos del nuevo perfil
      .select(); // Devuelve los datos insertados

    // Manejo de errores
    if (error) {
      throw new Error(`Error creando perfil: ${error.message}`);
    }

    // Si se insertaron datos, devuelve una nueva instancia de Perfil con los datos insertados
    return data && data[0] ? new Perfil(data[0]) : null;
  }

  // Método estático para actualizar un perfil existente por su ID
  static async update(id, newData) {
    // Actualiza un perfil existente en la base de datos con los nuevos datos
    const { data, error } = await supabase
      .from("perfiles")
      .update(newData) // Actualiza con los nuevos datos proporcionados
      .eq("id", id) // Filtra por el ID del perfil a actualizar
      .select();

    // Manejo de errores
    if (error) {
      throw new Error(`Error actualizando perfil: ${error.message}`);
    }

    // Devuelve el perfil actualizado
    return data && data[0] ? new Perfil(data[0]) : null;
  }

  // Método estático para borrar un perfil por su ID
  static async delete(id) {
    const { error } = await supabase.from("perfiles").delete().eq("id", id);

    if (error) {
      throw new Error(`Error borrando perfil: ${error.message}`);
    }

    return true;
  }
}
