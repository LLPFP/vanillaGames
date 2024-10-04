
# PLANIFICACIÓN DEL PROYECTO


## Planificación del proyecto

¡Estamos listos y hemos comenzado a desarrollar la versión 1.0 de nuestro proyecto!

En el apartado anterior hemos definido qué funcionalidades debe tener. Además, hemos analizado las diferentes arquitecturas y tecnologías y hemos optado por utilizar una CSR (Client Side Rendering basada en una SPA programada en Javascript y conectada a Supabase como servicio backend).

Por lo tanto estamos en condiciones de definir cada una de las tareas que necesitaremos realizar para llevar a cabo esta primera versión del proyecto.

Para poder planificar el trabajo, vamos a crear el 'backlog de proyecto', es decir, vamos a desglosar el trabajo en historias para, a continuación, crear el backlog de sprint (donde agruparemos las historias por entregas). Finalmente vamos a planificar su temporización, es decir, vamos a asignar un tiempo determinado a cada historia.

## Backlog de producto y de sprint




Estas serían las historias a planificar en la entrega de la versión 1 de nuestro proyecto agrupadas por sprints:

### SPRINT 0: Definición del proyecto


- **Historia**: Requisitos, casos de uso y diagrama de casos de uso
  - Como desarrollador, quiero definir de manera genérica las especificaciones de la aplicación.

- **Historia**: Versiones y planificación
  - Como desarrollador, quiero agrupar las especificaciones en versiones, definir las tareas necesarias y realizar la planificación de todo el proceso de desarrollo del proyecto.


- **Historia**: Casos de uso específicos y diagramas de flujo
  - Como desarrollador quiero definir las especificaciones y casos de uso para la versión 1.0.

**Historia**: Versiones y planificación Como desarrollador, quiero agrupar las especificaciones en versiones, definir las tareas necesarias y realizar la planificación de todo el proceso de desarrollo del proyecto.

**Historia**: Casos de uso especificos y diagramas de flujo Como desarrollador quiero definir las especificaciones y casos de uso para la versión 1.0.

(Esta historia ya hemos comenzado a trabajarla en apartados anteriores. No obstante, es importante que quede constancia de ello para poder hacer una valoración del tiempo total invertido.)

### SPRINT 1: Diseño de la interfaz

- **Historia**: Bocetos
  - Como diseñador quiero dibujar los bocetos de todas las posibles pantallas del proyecto y testear su funcionamiento.

**Historia**: Wireframes, Mockup y guía de estilos: Como diseñador quiero dibujar los mockups y crear la guía de estilos a partir de los colores, tipografías, etc seleccionadas.


### SPRINT 2: Prototipos


- **Historia**: Entorno de desarrollo
  - Como diseñador/programador quiero instalar y configurar las herramientas necesarias para programar la aplicación, trabajar con repositorios y crear un entorno integración continua y despliegue continuo.


- **Historia**: Prototipos html
  - Como maquetador web quiero crear las páginas html del proyecto a partir de los wireframes aplicando la guía de estilos y utilizando Bootstrap 5.

- **Historia**: Validaciones de formularios
  - Como programador quiero definir e implementar las validaciones de los formularios del proyecto



### Sprint 3: Implementación de la SPA


- **Historia**: Entorno de desarrollo basado en NodeJS
  - Como programador quiero instalar y configurar todas las herramientas necesarias (NodeJS, Vite, etc.) para el desarrollo de una app tipo SPA basada en Javascript

- **Historia**: Creación de proyecto basado en SPA y organización de archivos para las vistas basadas en módulos js
  - Como programador quiero configurar el sistema de carpetas para las vistas y crear los archivos a partir de componentes html basados en los prototipos.


- **Historia**: Creación de componentes
  - Como programador quiero crear los componentes para el encabezado, el enrutado de las páginas y los menús.


- **Historia**: Diseño del aspecto de las vistas
  - Como usuario quiero poder navegar por todas las vistas de la aplicación (independientemente del del rol).


- **Historia**: Implementación de la lógica para la validación de los formularios
  - Como usuario quiero recibir feedback de validación en las vistas con formularios.

- **Historia**: Lógica para la autenticación de usuarios
  - Como usuario registrado quiero poder recordar los datos de sesión al loguearme (Uso de localStorage)

- **Historia**: Actualización de componentes header y menús en función del rol de usuario logueado
  - Como usuario logueado quiero poder navegar por las vistas de la aplicación. (Podrán verse solo las opciones que corresponden a mi rol).

- **Historia**: Diseño de las vistas a partir de los datos de un archivo JSON
  - Como programador quiero simular el registro, login y visualización de las tablas de usuarios y proyectos a partir de datos ficticios obtenidos de una archivo json de prueba.


- **Historia**: Lógica para la administración de usuarios y proyectos (ver, editar, borrar, etc.)
  - Como administrador quiero poder gestionar los usuarios y proyectos (CRUD)



### Sprint 4: Backend


- **Historia**: Diseño de la base de datos
  - Como programador quiero diseñar la base de datos en base a diagrama UML (diagrama entidad-relación)


- **Historia**: Implementación de las tablas y funciones en supabase
  - Como programador quiero implementar las bases de datos en Supabase, diseñar las consultas e implementar las funciones postgree multitabla


- **Historia**: API javascript de Supabase
  - Como programador quiero probar las apis de javascript para el acceso a la base de datos


- **Historia**: Implementación de un ORM para mapping de la base de datos
  - Como programador quiero diseñar el diagrama de clases e implementarlo en javascript para tener un mapping de la bd.




### Sprint 5: Integración del frontend y el backend


- **Historia**: Login y registro
  - Como usuario quiero poder registrarme e iniciar sesión.


- **Historia**: Gestión de sesiones
  - Como usuario registrado quiero ver la web en base al rol que tengo asignado.


- **Historia**: Editar perfil
  - Como usuario registrado quiero poder ver y modificar mi perfil.


- **Historia**: Gestión de Proyectos (Vista proyectos, detalle proyecto, etc)
  - Como usuario registrado 'desarrollador' quiero poder ver los proyectos, ver mis proyectos, crear proyectos, ver detalle de los proyectos y editar y borrar mis proyectos.

- **Historia**: Gestión de usuarios
  - Como usuario registrado 'administrador' quiero poder ver, editar y borrar los usuarios del sistema.



### Sprint 6: Revisión y despliegue en producción de la versión 1.0

- **Historia**: Test de usuarios
  - Como diseñador quiero realizar tests de usuarios a un grupo de usuarios focales.


- **Historia**: Revisión de la aplicación
  - Como programador quiero revisar y corregir los posibles problemas detectados en el test de usuarios.

- **Historia**: Despliegue en producción
  - Como programador quiero despleguar la aplicación en producción.







































Ahora que tenemos las historias definidas es el momento de planificar el trabajo. Para ello necesitamos una herramienta que nos permita gestionar y temporizar cada una de las tareas. Nosotros utilizaremos GitHub Projects.