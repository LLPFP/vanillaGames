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

# Requisitos y diagrama de casos de uso

En la introducción de esta documentación, en la sección El proyecto Vanilla Games, en concreto en el apartado Requisitos del proyecto y casos de uso general, hemos definido qué se espera de nuestra aplicación web, a partir de los 'Casos de uso general'.

También hemos dividido todo el trabajo de desarrollo en diferentes versiones, con la intención de que nuestro proyecto esté operativo desde el inicio de su implementación, de manera que conforme evolucione a posteriores versiones, aumentaremos su nivel de funcionalidad.

Por lo tanto, vamos a comenzar por la versión 1.0.

Lo primero es definir los casos de uso para esta versión. Una primera aproximación podría ser la siguiente:

> **Recuerda que...**
> Los casos de uso son una herramienta esencial para comprender y especificar los requisitos de un sistema, y para garantizar que el software desarrollado satisfaga las necesidades de los usuarios finales.

Casos de uso para la V1.0 - Definición básica

- Registrar usuario: Un usuario puede registrarse en la plataforma proporcionando su nombre, apellidos, email y contraseña.

- Recuperar contraseña: Un usuario registrado puede solicitar la recuperación de su contraseña en caso de que la haya olvidado. Para ello, se le enviará un correo electrónico con las instrucciones para restablecer su contraseña.

- Iniciar sesión: Un usuario registrado puede iniciar sesión en la plataforma proporcionando su email y contraseña.

- Cerrar sesión: Un usuario puede cerrar su sesión en la plataforma en cualquier momento.

- Editar perfil: Un usuario registrado puede editar su perfil, actualizando su nombre, apellidos, email o contraseña.

- Ver proyectos: Un usuario registrado puede ver un listado de proyectos publicados por los desarrolladores.

+Publicar proyecto: Un usuario con el perfil de desarrollador puede publicar un proyecto proporcionando información como nombre, descripción, imagen representativa, enlaces a
servidor de pruebas y repositorio de código, estado del proyecto, etc.

- Editar proyecto: Un usuario con el perfil de desarrollador puede editar un proyecto que haya publicado previamente, actualizando la información del proyecto.

- Eliminar proyecto: Un usuario con el perfil de desarrollador puede eliminar un proyecto que haya publicado previamente.

- Ver/Editar usuarios: Un adminsrador puede ver una tabla con todos los usuarios que hay registrados y editar la información, incluido el ROL de usuario.
  Eliminar usuario: Un administrador puede eliminar cualquier usuario registrado en la plataforma.

# Diagrma de casos de uso para la versión 1.0

![Diagrama de casos de uso](https://carrebola.github.io/vanillaPill/assets/images/diagramaCasosUso_1-3fc60e64208490df3bd2eb0f595cedbc.png)

Este diagrama refleja de forma resumida qué acciones se pueden llevar a cabo en nuestro aplicación dependiendo del rol del usuario.

Ahora que tenemos claro todo lo que debe hacer la versión 1.0, nuestra misión ahora es planificar el trabajo que se nos viene encima...

# Casos de uso específicos y diagramas de flujo.

En el primer apartado 'Requisitos y diagrama de casos de uso' para esta versión 1.0, hemos definido de manera general los casos de uso que se contemplan para cada actor y los hemos reflejado en un diagrama de casos de uso.

Es el momento de ser más concretos y detenernos a reflexionar en cada uno de los procesos que se realizarán para cada tarea, incluyendo los posibles errores cometidos por el usuario o el propio sistema.

## Casos de uso específicos

### 1. Registrar usuario

**Actores:** Usuario no registrado.

**Precondiciones:** El usuario no ha iniciado sesión.

**Flujo básico:**

1. El usuario navega a la página de registro.
2. El usuario introduce su nombre, apellidos, email y contraseña.
3. El sistema valida que los campos estén completos y que el email no esté registrado previamente.
4. El sistema crea un nuevo usuario con los datos proporcionados.
5. El sistema muestra un mensaje de confirmación y redirige al usuario a la página de inicio.

**Flujos alternativos:**

- El sistema detecta que el email ya está registrado: muestra un mensaje de error y no crea la cuenta.

### 2. Recuperar contraseña

**Actores**: Usuario registrado.

**Precondiciones**: El usuario no ha iniciado sesión.

**Flujo básico:**

1. El usuario navega a la página de registro.
2. El usuario selecciona la opción 'Recuperar contraseña'
3. El sistema valida que el campo 'email' esté completo y que el email esté registrado previamente.
4. El sistema muestra un mensaje de confirmación de envio del mail para la recuperación de contraseña y redirige al usuario a la página de inicio.

**Flujos alternativos:**

- 3a. El sistema detecta que el email no está registrado: muestra un mensaje de error y no envia el mail.

### 3. Iniciar sesión

**Actores**: Usuario registrado.

**Precondiciones**: El usuario no ha iniciado sesión.

**Flujo básico:**

1. El usuario navega a la página de inicio de sesión.
2. El usuario introduce su email y contraseña.
3. El sistema valida las credenciales y crea una sesión para el usuario.
4. El sistema redirige al usuario a la página principal de la aplicación.

**Flujos alternativos:**

- 3a. Las credenciales son incorrectas: el sistema muestra un mensaje de error y no crea la sesión.

### 4. Cerrar sesión

**Actores**: Usuario registrado.

**Precondiciones**: El usuario ha iniciado sesión.

**Flujo básico:**

1. El usuario hace clic en el botón de "cerrar sesión".
2. El sistema cierra la sesión del usuario.
3. El sistema redirige al usuario a la página de inicio.

### 5. Ver/Editar perfil

**Actores**: Usuario registrado.

**Precondiciones**: El usuario ha iniciado sesión.

**Flujo básico:**

1. El usuario navega a la página de edición de perfil.
2. El usuario edita su nombre, apellidos y contraseña.
3. El sistema valida los campos y actualiza el perfil del usuario.
4. El sistema muestra un mensaje de confirmación.

**Flujos alternativos:**

- 3a. El usuario intenta cambiar su email: el sistema valida que el email no esté registrado previamente.

### 6. Ver proyectos

**Actores**: Usuario registrado.

**Precondiciones**: El usuario ha iniciado sesión.

**Flujo básico:**

1. El usuario navega a la página de proyectos.
2. El sistema muestra una lista de proyectos publicados por desarrolladores.
3. El usuario puede hacer clic en un proyecto para ver más detalles.
4. El usuario puede mostrar/filtrar los proyectos a partir de un buscador.

### 7. Publicar proyecto

**Actores**: Usuario registrado con perfil de desarrollador.

**Precondiciones**: El usuario ha iniciado sesión y su perfil es de desarrollador.

**Flujo básico:**

1. El usuario navega a la página de publicación de proyecto.
2. El usuario introduce el nombre, descripción, imagen representativa, enlaces de servidor y repositorio, estado y otra información relevante del proyecto.
3. El sistema valida los campos y crea un nuevo proyecto.
4. El sistema muestra un mensaje de confirmación y redirige al usuario a la página de proyectos.

**Flujos alternativos:**

- 2a. El desarrollador decide no publicar el proyecto y selecciona la opción de cancelar.
  1. El sistema descarta la información ingresada en el formulario.
  2. El sistema muestra un mensaje de confirmación al desarrollador.

### 8. Editar proyecto

**Actor principal**: Desarrollador

**Objetivo**: Editar la información de un proyecto previamente creado.

**Precondiciones**: El usuario debe haber iniciado sesión como desarrollador y tener al menos un proyecto previamente creado.

**Flujo principal:**

1. El usuario selecciona la opción de "Editar proyecto".
2. El sistema muestra la lista de proyectos previamente creados por el usuario.
3. El usuario selecciona el proyecto que desea editar.
4. El sistema muestra el formulario de edición del proyecto con la información actual del mismo.
5. El usuario realiza los cambios necesarios en la información del proyecto y guarda los cambios.
6. El sistema valida la información ingresada por el usuario y actualiza la información del proyecto en la base de datos.
7. El sistema muestra una confirmación de que la información del proyecto ha sido actualizada correctamente.

### 9. Eliminar proyecto

**Actor principal**: Desarrollador

**Objetivo**: Eliminar un proyecto previamente creado.

**Precondiciones**: El usuario debe haber iniciado sesión como desarrollador y tener al menos un proyecto previamente creado.

**Flujo principal:**

1. El usuario selecciona la opción de "Eliminar proyecto" del proyecto que desea eliminar.
2. El sistema muestra una confirmación de que el usuario está seguro de eliminar el proyecto seleccionado.
3. El usuario confirma que desea eliminar el proyecto.
4. El sistema elimina el proyecto de la base de datos y muestra una confirmación de que el proyecto ha sido eliminado correctamente.
5. El sistema actualiza la información de proyectos.

### 10. Ver/Editar usuario

**Actor principal**: Usuario administrador

**Objetivo**: Editar la información de los usuarios registrados.

**Precondiciones**: El usuario debe haber iniciado sesión en la aplicación y tener rol administrador.

**Flujo principal:**

1. El usuario selecciona la opción de "Ver usuarios".
2. El sistema muestra una tabla con 'inputs' con los datos de los usuarios.
3. El administrador realiza los cambios necesarios en la información de los usuarios (incluido el rol y el estado) y guarda los cambios.
4. El sistema valida la información ingresada por el usuario y actualiza la información del usuario en la base de datos.
5. El sistema muestra una confirmación de que la información del perfil ha sido actualizada correctamente.

### 11. Eliminar usuario

**Actor principal**: Usuario administrador

**Objetivo**: Eliminar usuario del sistema.

**Precondiciones**: El usuario debe haber iniciado sesión en la aplicación y debe tener rol administrador.

**Flujo principal:**

1. El usuario selecciona la opción de "Ver usuarios".
2. El sistema muestra una tabla con 'inputs' con los datos de los usuarios.
3. El administrador hace clic sobre el icono de eliminar usuario de la fila correspondiente.
4. El sistema informa de que se eliminarán todos sus registros.
5. El sistema muestra una confirmación de que la información de que el usuario ha sido borrado correctamente.

## Errores

Vamos a repasar los diferentes casos de uso analizando el flujo principal y añadiendo los flujos alternativos para contemplar los posibles errores del sistema. Puedes considerar los siguientes mensajes:

- **Error de conexión:** El servidor no puede establecer una conexión con la base de datos, lo que impide que se puedan realizar operaciones en la plataforma. El sistema debería mostrar un mensaje de error indicando que no se pudo conectar con la base de datos y ofrecer la posibilidad de volver a intentarlo o contactar con el soporte técnico.

- **Error de validación:** Cuando el sistema recibe información del usuario, debe validarla para asegurarse de que cumple con los requisitos de formato y contenido necesarios. Si la información no es válida, el sistema debería mostrar un mensaje de error indicando el problema específico, como "El campo de correo electrónico debe ser una dirección de correo válida".

- **Error de autenticación:** Si un usuario intenta acceder a una página o realizar una acción que requiere autenticación, pero no ha iniciado sesión o sus credenciales son incorrectas, el sistema debería mostrar un mensaje de error indicando que la acción no está autorizada y ofrecer la posibilidad de iniciar sesión o recuperar la contraseña.

- **Error de autorización:** Si un usuario intenta realizar una acción que no está autorizada para realizar debido a su rol, el sistema debería mostrar un mensaje de error indicando que la acción no está autorizada y ofrecer la posibilidad de volver a la página anterior.

- **Error de servidor:** En caso de que se produzca un error interno en el servidor, como una excepción no controlada, el sistema debería mostrar un mensaje de error genérico indicando que se produjo un error y ofrecer la posibilidad de volver a intentarlo o contactar con el soporte técnico.

# Finalización del Sprint 0

Llegados a este punto ya hemos acabado con todas las historias del primer Sprint.

Este sprint ha sido un tanto especial ya que las primeras historias las hemos llevado a cabo cuando aún no habíamos planificado el proyecto.

Es por esto que, esta vez, no hemos podido ir desplazando las historias por los tableros kanban una vez finalizadas. Pero no hay problema, lo hacemos ahora y chin pum!

![image](https://carrebola.github.io/vanillaPill/assets/images/image-12-819c7b2abafcd82866b1f5be7f0f8985.png)

Pero sí que es momento de reflexionar sobre el proceso realizado hasta ahora y la metodología empleada.

# Hist3a - Diseño de la interfaz. Bocetos

Una vez tenemos claro las funcionalidades que debe realizar nuestra aplicación, comenzamos con el diseño de la interfaz.

Este proceso incluye diseñar los bocetos, los wireframes y los mockups, para acabar creando los prototipos con html.

Sin duda, el primer paso, debe ser dibujar los bocetos, así que, busca un lápiz, una goma de borrar y un puñado de papel, ¡y manos a la obra!

## Diseño de Bocetos

> **Info**: Recuerda que **los bocetos son dibujos a mano alzada** que representan ideas de diseño de manera rápida y no detallada. Los bocetos suelen ser utilizados al inicio del proceso de diseño para explorar diferentes ideas y soluciones de diseño de manera rápida y económica. Los bocetos son ideales para hacer borradores rápidos y para discutir ideas con colegas y clientes.

# Home y menús usuarios

![image](https://carrebola.github.io/vanillaPill/assets/images/1684861508218-79dad6473fd7d571d5f73e96f893af7f.jpg)

Hemos didivido la interficie en 3 zonas, el encabezado (header), el cuerpo principal (main) y el pie de página (footer).

- En el **header** vamos a alojar una barra superior fija con: el **logo** y nombre de la web (que hará las veces de link a la página principal), un **menú central genérico** (para acceder a páginas públicas), un **menú central específico** (que será diferente en función del rol de usuario logueado), y un icono (**avatar**) que permitirá ver la imagen del usuario logueado y que hará de botón para desplegar otro menú, el **menú de usuario** (que tendrá diferentes items dependiendo de si la sesió está abierta o no y del tipo de rol que tenga el usuario logueado).

- El **cuerpo** (main) albergará el contenido de las páginas. Será la sección que vaya cambiando dependiendo de la página que carguemos. En la página home simplemente aparece una imagen de fondo y el nombre de la web.

- El **header** será meramente informativo.

# Regitro de un usuario

![image](https://carrebola.github.io/vanillaPill/assets/images/1684861508212-88f1ed0a8c53df9f791872b3b03519d8.jpg)

>

# Iniciar sesión

![image](https://carrebola.github.io/vanillaPill/assets/images/1684861508205-edba4a097ae58ec58f1bb07dc4b7e5e1.jpg)

# Editar mi perfil

![image](https://carrebola.github.io/vanillaPill/assets/images/1684861508198-5b5eff368d5421682a834f3ed67af5bd.jpg)

Editar perfil será una ventana modal, es decir, se mostrará la ventana y el fondo se volverá oscuro.

Esta ventana de edición permitirá, además de modificar los datos del usuario, **añadir una imagen de avatar**. Por el momento, en esta primera versión, podremos añadir el link de una imagen que esté alojada en un servidor. En la siguiente versión (versión 1.1) actualizaremos esta ventana para que puedan **subirse archivos** (imágenes) al servidor.

# Listado de todos los proyectos

![image](https://carrebola.github.io/vanillaPill/assets/images/1684861508192-6b771260fe99faccc760b23f71f02406.jpg)

En esta página podemos ver, en la pestaña izquierda, todos los proyectos en forma de tabla. La pestaña derecha mostrará solo los proyectos que ha subido el usuario que ha iniciado la sesión.

Al hacer clic en cualquier parte de la fila se accede al detalle del proyecto.

También tenemos un buscador que permite buscar proyectos por palabras clave en el nombre o descripción.

Las celdas de encabezado de las tablas incluyen un icono (flecha hacia arriba o hacia abajo) que permitirá ordenar la tabla por la columna en concreto.

# Listado de Mis proyectos

![image](https://carrebola.github.io/vanillaPill/assets/images/1684861508186-f38d99164909a0783d2040ce646e928a.jpg)

En esta pestaña podemos ver los trabajos pertenecientes al usuario logueado. En cada fila aparece, además, un icono para editar y borrar el proyecto correspondiente. Por otro lado tenemos la opción de subir un nuevo proyecto.

Habría que valorar si es mejor crear un único buscador para el nombre y descripción del proyecto o dos barras de busqueda, una para cada sección, tal y como se muestra en el boceto anterior.

# Detalle de un proyecto

![image](https://carrebola.github.io/vanillaPill/assets/images/1684861508178-ed1f5e41681a1dcee1edac19f807c239.jpg)

Si el usuario que está viendo la información de un proyecto en concreto es el autor de dicho proyecto, aparecerá un icono para la edición del mismo.

# Nuevo proyecto / Editar un proyecto

![image](https://carrebola.github.io/vanillaPill/assets/images/1684861508170-9db2cd42ef7a339d517e3d0b38d4ae45.jpg)

Esta vista sirve tanto para crear un nuevo proyecto como para editarlo.

Si el proyecto es nuevo, el botón mostrará el texto ENVIAR, pero si estamos editándolo aparecerá el texto ACTUALIZAR. Al crear o actualizar el proyecto, la web nos reenvía a la vista 'Detalle de proyecto'.

# Panel administración de proyectos

![image](https://carrebola.github.io/vanillaPill/assets/images/1684861508161-c9cfd413730d67ea74b43e48fedea5ec.jpg)

Si tienes el rol '**administrador**' aparecerá el item '_Panel administración_' en el **menú superior específico**. Este item nos permite cargar la vista '**Panel administración de proyectos**'. Desde esta vista también podemos acceder al 'Panel administración de usuarios'.

Esta vista permite **editar o borrar cualquier proyecto** haciendo click en los iconos correspondientes. La opción editar nos llevará a la vista 'Editar proyecto'

# Panel administración de usuarios

![image](https://carrebola.github.io/vanillaPill/assets/images/1684861508152-04e98cfb1faeecf2a53ea921bdd63ebe.jpg)

Esta vista permite **editar los datos de los usuarios**. Por supuesto es solo accesible para los administradores.

En esta vista, el método para editar la información es diferentes. Aquí los datos **aparecen sobre 'inputs'**, de manera que al hacer clic sobre ellos, aparecerá el cursor de edición. Se pueden modificar todos los datos (en especial el 'estado' y el 'rol' del usuario) excepto el email.

---

## Comenzamos a maquetar con Bootstrap

### Frameworks como marco de trabajo en Javascript

No nos engañemos. En la mayoría de empresas de desarrollo web hacen trampas. Son pocas las que crean aplicaciones con html, css y javascript puro. La mayoría utilizar librerías que nos facilitan el trabajo. Es más, la casi todos os desarrolladores trabajan con lo que conocemos como frameworks.

Algunos ejemplos de frameworks frontend populares incluyen:

- React
- Angular
- Vue.js
- Svelte

Estos frameworks pueden ahorrar tiempo a los desarrolladores al proporcionar una base sólida sobre la cual construir, evitando la necesidad de comenzar desde cero y permitiendo enfocarse en la lógica y la experiencia del usuario en lugar de en detalles técnicos repetitivos.

> **Note**
> En este proyecto nosotros no vamos a utilizar ninguno de estros frameworks, ya que uno de los objetivos de esta documentación es poner en práctica los conocimientos adquiridos durante el ciclo, principalmente Javascript, que en definitiva es la base de todos estos marcos de trabajo.

### Frameworks para la maquetación html/css

Ahora bien, para la maquetación sí que vamos a utilizar un poco de ayuda 😅.

Los frameworks de diseño o bibliotecas proporcionan estilos predefinidos y componentes reutilizables para ayudarte a construir interfaces de usuario más rápidamente.

Los más populares en son:

- Bootstrap
- Tailwind CSS

### **Bootstrap:**

Bootstrap es uno de los frameworks de diseño más populares. Proporciona una amplia gama de componentes y estilos predefinidos basados en HTML, CSS y JavaScript. Es altamente personalizable y es ideal para crear sitios web responsivos y modernos.

### **Tailwind CSS:**

Tailwind CSS es un framework que se diferencia por su enfoque de "clases utilitarias". En lugar de proporcionar componentes predefinidos, Tailwind CSS ofrece una amplia gama de clases CSS que permiten construir diseños personalizados de manera eficiente.

Pero no son los únicos.

Estos frameworks de diseño y bibliotecas pueden ser muy útiles para agilizar el proceso de desarrollo frontend al proporcionar estilos coherentes y componentes reutilizables. La elección del framework dependerá de tus preferencias de diseño, las necesidades de tu proyecto y cómo se adapte a tu flujo de trabajo.

## ¡Maquetando prototipos!

Es el momento de ponernos manos a la obra. Ya tenemos preparado nuestro entorno de trabajo con VSCode instalado y algunos plugins como Prettier para formatear nuestro código. También hemos instalado Git y hemos creado una cuenta de github. Y hemos creado un proyecto el cual tenemos vinculado con nuestra cuenta de github.

Es el momento de volver al VSCode, situarnos en la rama **prototipos**... y ¡¡¡comenzar a picar código!!! 😎

## Home

### HOME Versíón escritorio

![ImagenHome](https://carrebola.github.io/vanillaPill/assets/images/home-732de8bdbed223e26933306f79645aac.png)

### HOME Versíón móvil

![ImagenHomeMovil](https://carrebola.github.io/vanillaPill/assets/images/home_movil-c4e10fff100eb8015f30b3596a4b1a3b.png)

## Entorno de desarrollo

Vamos a comenzar a maquetar los prototipos para nuestro proyecto.

En primer lugar abre el VSCode y arrastra tu carpeta del proyecto. Si no recuerdo mal, se llamaba vanillagames10

Ahora deberías ver en la parte inferior izquierda de vscode el nombre de la rama en la que estás situado. Deberías estar en la rama prototipos, si no es así, puedes cambiar de rama haciendo clic (con el botón izquierdo) sobre el nombre de la rama.

> ¡Cuidado!
> Un error muy habitual es olvidarnos de cambiar de rama cuando comenzamos a trabajar. Ten cuidado ya que esto se puede convertir en un problema grave de organización, y podría ¡¡¡generar muchos dolores de cabeza 🥴!!!

Si todo es correcto deberías ver en la columna izquierda la carpeta prototipos con un archivo `home.html` y un archivo `readme.md`.

Abre el archivo `home.html` y comencemos a trabajar...

## Procedimiento

Comenzamos a maquetar la página home. De manera resumida debemos seguir los siguientes pasos:

1. Creamos plantilla html
2. Modificamos lang y title
3. Vinculamos la libreria css para bootstrap y bootswatch
4. Vinculamos la librería de iconos de boostrap
5. Vinculamos el js de bootstrap.
6. Creamos la estructura de la web dentro del body con las etiquetas header, main y footer
7. Copiamos el componente menú de la documentación de bootstrap (navbar) y lo modificamos para que se ajuste a nuestro prototipo. Lo usamos tanto en el header como en el footer.
8. Creamos, en el main, un h1 y una imagen.

## ¡NO TE OLVIDES DEL COMMIT!

Recuerda que mientras vas trabajando en el proyecto debes ir guardando los cambios en Git y subirlos a github añadiendo cada vez un commit apropiado. Podrías empezar con algo así:

### Crea la estructura básica de la página HOME:

    Agrega el esqueleto HTML y los estilos iniciales para la página home.html

### Algunos consejos para escribir tus commits:

#### 👉Buenas prácticas creando mensajes 'commit'👈

Aquí puedes ver el código utilizado: 👁‍🗨 ...

home.html

<!DOCTYPE html>
<html lang="es">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <!-- Bootstrap CSS -->
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossorigin="anonymous"
        />
        <!-- Bootswatch CSS -->
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.0/dist/yeti/bootstrap.min.css"
        />
        <!-- Bootstrap icons -->
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        <!-- Mis estilos personales  -->
        <link rel="stylesheet" href="styles.css" />

        <title>Vanilla Games</title>
    </head>

    <body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="#"
                        ><img
                            src=".images/logo.svg"
                            alt=""
                            width="30"
                            height="24"
                            class="d-inline-block align-text-top"
                        />

                        Vanilla Games</a
                    >
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">TOP5 Proyectos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">A cerca de</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                            <li class="nav-item">
                                <button class="ms-2 btn btn-success">
                                    Iniciar sesión
                                    <i class="bi bi-box-arrow-in-right"></i>
                                </button>
                            </li>
                            <li class="nav-item">
                                <button class="ms-2 btn btn-outline-light">
                                    Regístrate
                                    <i class="bi bi-box-arrow-in-right"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <main>
            <div class="container">
                <h1 class="mt-5 text-center fw-bold" style="font-size: 100px;">Vanilla Games</h1>
                <div class="m-5 mx-auto" style="max-width: 400px">
                    <img
                            src=".images/logo.svg"
                            alt="fpllefia"
                            class="img-fluid"
                        />
                </div>
            </div>
        </main>
        <footer class="">
            <nav class="navbar bg-secondary fixed-bottom small">
                <div class="container">
                    <a class="navbar-brand fs-6" href="http://www.fpllefia.com">
                        <img
                            src=".images/logo.svg"
                            alt="fpllefia"
                            width="30"
                            height="24"
                            class="d-inline-block align-text-top"
                        />
                        FPLlefià
                    </a>
                    <span class="navbar-text">DAW - Asignatura de proyectos</span>
                    <a href="#" class="nav-link">carrebola GITHUB</a>
                </div>
            </nav>
        </footer>

        <!-- Option 1: Bootstrap Bundle with Popper -->
        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossorigin="anonymous"
        ></script>
    </body>

</html>

# Registro

## REGISTRO Versíón escritorio

![img](https://carrebola.github.io/vanillaPill/assets/images/registro-af1df95c0b6c67a510166a75095da0b2.png)
![img](https://carrebola.github.io/vanillaPill/assets/images/registro_movil-04819e8600714a05b9969b94eb9777d7.png)

## Procedimiento

Para maquetar la página registro.html podemos partir de la página home.html haciendo una copia y modificando la etiqueta main.

De manera resumida debemos seguir los siguientes pasos:

1. Modificamos la página home eliminando el botón registro del menú y el contenido de la etiqueta main excepto el h1 que modificaremos.
2. Cremos un div con una anchura máxima usando el atributo style y dentro creamos un formulario con los campos correspondientes.

Aquí puedes ver el código utilizado:

### registro.html

<!DOCTYPE html>
<html lang="es">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <!-- Bootstrap CSS -->
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossorigin="anonymous"
        />

        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.0/dist/yeti/bootstrap.min.css"
        />

        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        <link rel="stylesheet" href="styles.css" />

        <link rel="stylesheet" href="styles.css" />
        <title>Registro</title>
    </head>
    <body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="#"
                        ><img
                            src=".images/logo.svg"
                            alt=""
                            width="30"
                            height="24"
                            class="d-inline-block align-text-top"
                        />

                        Vanilla Games</a
                    >
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">TOP5 Proyectos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">A cerca de</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                            <li class="nav-item">
                                <button class="ms-2 btn btn-success">
                                    Iniciar sesión
                                    <i class="bi bi-box-arrow-in-right"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <main>
            <div class="container">
                <h1 class="mt-5 text-center">Registro</h1>
                <div class="m-5 mx-auto" style="max-width: 400px">
                    <form action="" class="form border shadow-sm p-3">
                        <label for="nombre" class="form-label">Nombre:</label>
                        <input id="nombre" type="text" class="form-control" />
                        <label for="apellidos" class="form-label">Apellidos:</label>
                        <input id="apellidos" type="text" class="form-control" />
                        <label for="email" class="form-label">Email:</label>
                        <input id="email" type="text" class="form-control" />
                        <label for="pass" class="form-label mt-3">Contraseña:</label>
                        <input id="pass" type="password" class="form-control" />
                        <a class="btn btn-primary w-100 mt-3" href="#">Enviar</a>
                    </form>
                </div>
            </div>
        </main>
        <footer class="">
            <nav class="navbar bg-secondary fixed-bottom small">
                <div class="container">
                    <a class="navbar-brand" href="http://www.fpllefia.com">
                        <img
                            src=".images/logo.svg"
                            alt="fpllefia"
                            width="30"
                            height="24"
                            class="d-inline-block align-text-top"
                        />
                        FPLlefià
                    </a>
                    <span class="navbar-text">@Texto de header</span>
                    <a href="#" class="nav-link">Vínculo header</a>
                </div>
            </nav>
        </footer>

        <!-- Option 1: Bootstrap Bundle with Popper -->
        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossorigin="anonymous"
        ></script>
    </body>

</html>

# Login

## LOGIN Versíón escritorio.

![img](https://carrebola.github.io/vanillaPill/assets/images/login-ae24c1e6e6ba658bf4f6511c2fdd4bf1.png)

## LOGIN Versíón móvil

![img](https://carrebola.github.io/vanillaPill/assets/images/login_movil-403fd04d68d934481de2e232c03569e0.png)

## Procedimiento

Para maquetar la página login.html podemos partir de la página registro.html haciendo una copia y modificando la etiqueta main.

De manera resumida debemos seguir los siguientes pasos:

1. Modificamos la página home eliminando el botón login del menú y el contenido de la etiqueta main excepto el h1 que modificaremos.
2. Creamos un div con una anchura máxima de 400px usando el atributo style y dentro creamos un formulario con los campos correspondientes.
3. Finalmente añadimos un enlace para actualizar la contraseña y un botón para registrarte si no lo estás.

Aquí puedes ver el código utilizado: 👁‍🗨 ...

### registro.html

<!DOCTYPE html>
<html lang="es">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <!-- Bootstrap CSS -->
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossorigin="anonymous"
        />

        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.0/dist/yeti/bootstrap.min.css"
        />

        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        <link rel="stylesheet" href="styles.css" />

        <link rel="stylesheet" href="styles.css" />
        <title>Login</title>
    </head>
    <body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="#"
                        ><img
                            src=".images/logo.svg"
                            alt=""
                            width="30"
                            height="24"
                            class="d-inline-block align-text-top"
                        />

                        Vanilla Games</a
                    >
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">TOP5 Proyectos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">A cerca de</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                            <li class="nav-item">
                                <button class="ms-2 btn btn-outline-light">
                                    Regístrate
                                    <i class="bi bi-box-arrow-in-right"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <main>
            <div class="container">
                <h1 class="mt-5 text-center">Inicia sesión</h1>
                <div class="m-5 mx-auto" style="max-width: 400px">
                    <form action="" class="form border shadow-sm p-3">
                        <label for="email" class="form-label">Email:</label>
                        <input type="text" class="form-control" />
                        <label for="pass" class="form-label mt-3">Contraseña:</label>
                        <input id="pass" type="password" class="form-control" />
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
                        <a class="d-block text-end" href="#">¿Has olvidado tu contraseña?</a>
                        <a class="btn btn-primary w-100 mt-3" href="#">Iniciar sesión</a>
                    </form>
                    <a class="d-block mt-5 btn btn-secondary mx-auto" href="#"
                        >¿Eres nuevo? Regístrate</a
                    >
                </div>
            </div>
        </main>
        <footer class="">
            <nav class="navbar bg-secondary fixed-bottom small">
                <div class="container">
                    <a class="navbar-brand" href="http://www.fpllefia.com">
                        <img
                            src=".images/logo.svg"
                            alt="fpllefia"
                            width="30"
                            height="24"
                            class="d-inline-block align-text-top"
                        />
                        FPLlefià
                    </a>
                    <span class="navbar-text">@Texto de header</span>
                    <a href="#" class="nav-link">Vínculo header</a>
                </div>
            </nav>
        </footer>

        <!-- Option 1: Bootstrap Bundle with Popper -->
        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossorigin="anonymous"
        ></script>
    </body>

</html>

# Editar perfil

## EDITAR PERFIL (MENÚ)

![img](https://carrebola.github.io/vanillaPill/assets/images/menu-82592045c99541f03def33d15b272294.png)

## EDITAR PERFIL (Ventana MODAL)

![img](https://carrebola.github.io/vanillaPill/assets/images/edit-9ef7dc3fca8f4da1001ae9c5c1aadd58.png)

## Procedimiento

Para maquetar la página editPerfil.html podemos partir de la página home.html.

En este caso lo que nos interesa es modificar el componente navbar del header. Fíjate que ahora el usuario ya está registrado, por lo que puede acceder a los datos de su perfil y modificarlos.

Por otro lado, cuando un usuario está registrado, aparece un nuevo menú en la parte superior derecha (con el item PROYECTOS), éste es el menú ROL. También debemos añadir el menú usuario, el cual desplegará las opciones para editar perfil, cerrar sesión, etc.

### De manera resumida debemos seguir los siguientes pasos:

1. Insertamos el componente modal al final del header.
2. Añadimos un botón para abrir ese modal (esto podemos hacerlo en el main, aunque es un código que después desecharemos)
3. En el componente navbar del header
   - Añadimos el menú ROL con el item PROYECTOS
   - Añadimos el menú USUARIO con el item Editar perfil(entre otros). Este item será una copia del botón que permite abrir el modal.

### Aquí puedes ver el código utilizado: 👁‍🗨 ...

<!DOCTYPE html>
<html lang="es">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <!-- Bootstrap CSS -->
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
            crossorigin="anonymous"
        />

        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.0/dist/yeti/bootstrap.min.css"
        />

        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />

        <link rel="stylesheet" href="styles.css" />

        <title>Prototipos vanilla games</title>
    </head>
    <body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="#"
                        ><img
                            src=".images/logo.svg"
                            alt=""
                            width="30"
                            height="24"
                            class="d-inline-block align-text-top"
                        />

                        Vanilla Games</a
                    >
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <!-- Menú general -->
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">TOP5 Proyectos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">A cerca de</a>
                            </li>
                        </ul>
                        <!-- Menú ROL -->
                        <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">PROYECTOS</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <img src=".images/avatar.svg" alt="" width="25" />
                                </a>
                                <!-- Menú usuario -->
                                <ul class="dropdown-menu me-0" style="left: -100px; width: 100px">
                                    <li class="text-light text-center p-2">
                                        <p>user@email.com</p>
                                    </li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li>
                                        <button
                                            type="button"
                                            class="dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                        >
                                            Editar perfil
                                        </button>
                                    </li>
                                    <li><a class="dropdown-item" href="#">Otra acción</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <!-- VEntana edición perfil -->

            <!-- Modal -->
            <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
            <!-- Formulario de edición de perfil -->
                <form action="">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">
                                    Edición de perfil
                                </h1>
                                <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div class="modal-body">
                                <div class="form border shadow-sm p-3">
                                    <div class="m-1" style="max-width: 400px">
                                        <div class="imgPerfil border shadow-sm p-3 mb-3">
                                            <div
                                                class="imagen mx-auto mb-1 rounded-circle"
                                                style="
                                                    background-image: url(.images/avatar.svg);
                                                    width: 200px;
                                                    height: 200px;
                                                    background-size: cover;
                                                    background-position: center;
                                                "
                                            ></div>

                                            <!-- Imagen de perfil -->
                                            <label for="imagen" class="form-label mt-3">URL imagen:</label>
                                            <input
                                                id="imagen"
                                                type="url"
                                                class="form-control"
                                                value="http://imagenavatar.png"
                                            />
                                        </div>

                                        <div class="">

                                            <!-- Nombre -->
                                            <label for="nombre" class="form-label">Nombre:</label>
                                            <input required id="nombre" type="text" class="form-control" />

                                            <!-- Apellidos -->
                                            <label for="apellidos" class="form-label">Apellidos:</label>
                                            <input id="apellidos" type="text" class="form-control" />

                                            <!-- Email -->
                                            <label for="email" class="form-label">Email:</label>
                                            <input required id="email" type="email" class="form-control" />

                                            <!-- Contraseña -->
                                            <label for="pass" class="form-label mt-3">Contraseña:</label>
                                            <input required id="pass" type="password" class="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                    Cancelar
                                </button>
                                <button type="button" class="btn btn-primary">Guardar cambios</button>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </header>
        <main>
            <div class="container">
                <h1 class="mt-5">Modal para editar perfil en header</h1>
                <!-- Button trigger modal -->
                <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                >
                    Launch demo modal
                </button>
            </div>
        </main>
        <footer class="">
            <nav class="navbar bg-secondary fixed-bottom small">
                <div class="container">
                    <a class="navbar-brand" href="http://www.fpllefia.com">
                        <img
                            src=".images/logo.svg"
                            alt="fpllefia"
                            width="30"
                            height="24"
                            class="d-inline-block align-text-top"
                        />
                        FPLlefià
                    </a>
                    <span class="navbar-text">@Texto de header</span>
                    <a href="#" class="nav-link">Vínculo header</a>
                </div>
            </nav>
        </footer>

        <!-- Option 1: Bootstrap Bundle with Popper -->

        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
            crossorigin="anonymous"
        ></script>
    </body>

</html>

# Proyectos

## PROYECTOS Versíón escritorio

![img](https://carrebola.github.io/vanillaPill/assets/images/proyectos-ddb8f57183c3d3b48cea380630424609.png)

## MIS PROYECTOS Versíón escritorio con tabla

![img](https://carrebola.github.io/vanillaPill/assets/images/misproyectos-6f042101b812ddeacd00f8d302c0fd7a.png)

## MIS PROYECTOS Versíón adaptable I con tarjetas

![img](https://carrebola.github.io/vanillaPill/assets/images/misproyectos_responsive1-a2d566c225d81e0714d1c03914bde9fd.png)

## MIS PROYECTOS Versíón adaptable II con tarjetas

![img](https://carrebola.github.io/vanillaPill/assets/images/misproyectos_responsive2-21f1f0d2f23e037a4f0412b5b2cb506d.png)

## PROYECTOS Versíón móvil

![img](https://carrebola.github.io/vanillaPill/assets/images/proyectos_movil-3be5fc5dfe93e4e71f20cc11e1b8a1cb.png)

## Procedimiento

Para maquetar la página proyectos.html podemos partir de la página registro. Esta vez habrá que modificar el menú y la etiqueta main.

De manera resumida debemos seguir los siguientes pasos:

1. Actualizamos el menu navbar
2. Creamos la estructura de filas y columnas (row y col) necesaria para poder utilizar el componente nav-taps.
3. Insertamos los componentes button y el input copiandolos de la documentación de bootstrap.
4. Creamos un div con una tabla con las columnas y filas correspondientes
5. Creamos un div con las tarjetas card correspondientes
6. Creamos las versiones responsive para la vista de tarjetas.

### Aquí puedes ver el código utilizado: 👁‍🗨 ...

#### proyectos.html

<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <!-- Bootstrap CSS -->
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossorigin="anonymous"
        />

        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.0/dist/yeti/bootstrap.min.css"
        />

        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        <link rel="stylesheet" href="styles.css" />

        <link rel="stylesheet" href="styles.css" />
        <title>Prototipos vanilla games</title>

        <style>
            /* Modificamos aspecto de nav-tabs y nav-links */
            .nav-tabs,
            .nav-link.active {
                border-bottom: 0;
                /* background-color: red; */
            }
        </style>
    </head>
    <body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="#"
                        ><img
                            src=".images/logo.svg"
                            alt=""
                            width="30"
                            height="24"
                            class="d-inline-block align-text-top"
                        />

                        Vanilla Games</a
                    >
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">TOP5 Proyectos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">A cerca de</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">PROYECTOS</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <img src=".images/avatar.svg" alt="" width="25" />
                                </a>
                                <ul class="dropdown-menu me-0" style="left: -100px; width: 100px">
                                    <li class="text-light text-center p-2">
                                        <p>user@email.com</p>
                                    </li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Acciónn</a></li>
                                    <li><a class="dropdown-item" href="#">Otra acción</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <main>
            <div class="container">
                <h1 class="mt-5">Proyectos</h1>
                <div class="row mt-5">
                    <div class="col-12">
                        <ul class="nav nav-tabs">
                            <li class="nav-item w-50">
                                <a class="nav-link active" aria-current="page" href="#"
                                    >Todos los proyectos</a
                                >
                            </li>
                            <li class="nav-item w-50">
                                <a class="nav-link" href="#">Mis proyectos</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="border border-top-0 p-3">
                    <div class="row">
                        <div class="col-12 col-sm-4 mb-3">
                            <button class="btn btn-primary w-100">Subir proyecto</button>
                        </div>
                        <div class="d-flex col-12 col-sm-8 mb-3">
                            <button class="btn btn-secondary me-2">
                                <i class="bi bi-grid-3x3-gap"></i>
                            </button>
                            <button class="btn btn-secondary me-2">
                                <i class="bi bi-list"></i>
                            </button>
                            <div class="input-group flex-nowrap">
                                <span class="input-group-text" id="addon-wrapping"
                                    ><i class="bi bi-search"></i
                                ></span>
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Buscador"
                                    aria-label="Username"
                                    aria-describedby="addon-wrapping"
                                />
                                <span class="input-group-text" id="addon-wrapping"
                                    ><i class="bi bi-x"></i
                                ></span>
                            </div>
                        </div>
                    </div>
                    <!-- tabla -->
                    <div class="col-12 d-none d-xl-block" style="overflow-x: auto">
                        <table
                            class="table table-hover align-middle mt-3"
                            style="min-width: 1000px"
                        >
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>
                                        Nombre <span><i class="bi bi-caret-down"></i></span>
                                    </th>
                                    <th>
                                        Descripción <span><i class="bi bi-caret-up"></i></span>
                                    </th>
                                    <th>
                                        Enlace <span><i class="bi bi-caret-up"></i></span>
                                    </th>
                                    <th>Repositorio</th>
                                    <th>
                                        Autor <span><i class="bi bi-caret-up"></i></span>
                                    </th>
                                    <th>
                                        Fecha <span><i class="bi bi-caret-up"></i></span>
                                    </th>
                                    <th>
                                        Estado <span><i class="bi bi-caret-up"></i></span>
                                    </th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tr>
                                <td>
                                    <div class="containerImagen">
                                        <img width="200px" src=".images/juego.jpg" alt="" />
                                    </div>
                                </td>
                                <td>Proyecto ejemplo 1</td>
                                <td>Ejemplo de web para centro fp</td>
                                <td><a href="http://www.fpllefia.con">http://www.fpllefia.con</a></td>
                                <td><a href="#">carrebola.github.com/juego1</a></td>
                                <td>carlos</td>
                                <td>13/12/2021</td>
                                <td>?</td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="containerImagen">
                                        <img width="200px" src=".images/juego.jpg" alt="" />
                                    </div>
                                </td>
                                <td>Proyecto ejemplo 1</td>
                                <td>Ejemplo de web para centro fp</td>
                                <td><a href="http://www.fpllefia.con">http://www.fpllefia.con</a></td>
                                <td><a href="#">carrebola.github.com/juego1</a></td>
                                <td>carlos</td>
                                <td>13/12/2021</td>
                                <td>?</td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="containerImagen">
                                        <img width="200px" src=".images/juego.jpg" alt="" />
                                    </div>
                                </td>
                                <td>Proyecto ejemplo 1</td>
                                <td>Ejemplo de web para centro fp</td>
                                <td><a href="http://www.fpllefia.con">http://www.fpllefia.con</a></td>
                                <td><a href="#">carrebola.github.com/juego1</a></td>
                                <td>carlos</td>
                                <td>13/12/2021</td>
                                <td>?</td>
                            </tr>
                        </table>
                    </div>
                    <!-- tarjetas -->

                    <div class="d-xl-none row">
                        <!-- tarjeta  -->
                        <div class="col-12 col-lg-6">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div
                                        class="col-4"
                                        style="
                                            background-image: url(.images/juego.jpg);
                                            background-position: center;
                                            background-size: cover;
                                        "
                                    ></div>
                                    <div class="col-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Tetris</h5>
                                            <p class="card-text">
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
                                                quos, quae atque rerum quibusdam
                                            </p>
                                            <p class="small m-0 text-end text-italic">Autor: Carlos Arrebola</p>
                                            <p class="small text-end text-italic">Fecha: 12/12/2023</p>

                                            <a class="btn btn-sm btn-outline-primary" href="#">Enlace</a>
                                            <a class="btn btn-sm btn-outline-primary" href="#">Repo</a>
                                            <a class="btn btn-sm btn-success" href="#">Estado</a>
                                            <a
                                                class="d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
                                            ></a>
                                            <a
                                                class="d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- tarjeta  -->
                        <div class="col-12 col-lg-6">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div
                                        class="col-4"
                                        style="
                                            background-image: url(.images/juego.jpg);
                                            background-position: center;
                                            background-size: cover;
                                        "
                                    ></div>
                                    <div class="col-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Tetris</h5>
                                            <p class="card-text">
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
                                                quos, quae atque rerum quibusdam
                                            </p>
                                            <p class="small m-0 text-end text-italic">Autor: Carlos Arrebola</p>
                                            <p class="small text-end text-italic">Fecha: 12/12/2023</p>

                                            <a class="btn btn-sm btn-outline-primary" href="#">Enlace</a>
                                            <a class="btn btn-sm btn-outline-primary" href="#">Repo</a>
                                            <a class="btn btn-sm btn-success" href="#">Estado</a>
                                            <a
                                                class="d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
                                            ></a>
                                            <a
                                                class="d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- tarjeta  -->
                        <div class="col-12 col-lg-6">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div
                                        class="col-4"
                                        style="
                                            background-image: url(.images/juego.jpg);
                                            background-position: center;
                                            background-size: cover;
                                        "
                                    ></div>
                                    <div class="col-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Tetris</h5>
                                            <p class="card-text">
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
                                                quos, quae atque rerum quibusdam
                                            </p>
                                            <p class="small m-0 text-end text-italic">Autor: Carlos Arrebola</p>
                                            <p class="small text-end text-italic">Fecha: 12/12/2023</p>

                                            <a class="btn btn-sm btn-outline-primary" href="#">Enlace</a>
                                            <a class="btn btn-sm btn-outline-primary" href="#">Repo</a>
                                            <a class="btn btn-sm btn-success" href="#">Estado</a>
                                            <a
                                                class="d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
                                            ></a>
                                            <a
                                                class="d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- tarjeta  -->
                        <div class="col-12 col-lg-6">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div
                                        class="col-4"
                                        style="
                                            background-image: url(.images/juego.jpg);
                                            background-position: center;
                                            background-size: cover;
                                        "
                                    ></div>
                                    <div class="col-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Tetris</h5>
                                            <p class="card-text">
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
                                                quos, quae atque rerum quibusdam
                                            </p>
                                            <p class="small m-0 text-end text-italic">Autor: Carlos Arrebola</p>
                                            <p class="small text-end text-italic">Fecha: 12/12/2023</p>

                                            <a class="btn btn-sm btn-outline-primary" href="#">Enlace</a>
                                            <a class="btn btn-sm btn-outline-primary" href="#">Repo</a>
                                            <a class="btn btn-sm btn-success" href="#">Estado</a>
                                            <a
                                                class="d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
                                            ></a>
                                            <a
                                                class="d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- tarjeta  -->
                        <div class="col-12 col-lg-6">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div
                                        class="col-4"
                                        style="
                                            background-image: url(.images/juego.jpg);
                                            background-position: center;
                                            background-size: cover;
                                        "
                                    ></div>
                                    <div class="col-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Tetris</h5>
                                            <p class="card-text">
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
                                                quos, quae atque rerum quibusdam
                                            </p>
                                            <p class="small m-0 text-end text-italic">Autor: Carlos Arrebola</p>
                                            <p class="small text-end text-italic">Fecha: 12/12/2023</p>

                                            <a class="btn btn-sm btn-outline-primary" href="#">Enlace</a>
                                            <a class="btn btn-sm btn-outline-primary" href="#">Repo</a>
                                            <a class="btn btn-sm btn-success" href="#">Estado</a>
                                            <a
                                                class="d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
                                            ></a>
                                            <a
                                                class="d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- tarjeta  -->
                        <div class="col-12 col-lg-6">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div
                                        class="col-4"
                                        style="
                                            background-image: url(.images/juego.jpg);
                                            background-position: center;
                                            background-size: cover;
                                        "
                                    ></div>
                                    <div class="col-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Tetris</h5>
                                            <p class="card-text">
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
                                                quos, quae atque rerum quibusdam
                                            </p>
                                            <p class="small m-0 text-end text-italic">Autor: Carlos Arrebola</p>
                                            <p class="small text-end text-italic">Fecha: 12/12/2023</p>

                                            <a class="btn btn-sm btn-outline-primary" href="#">Enlace</a>
                                            <a class="btn btn-sm btn-outline-primary" href="#">Repo</a>
                                            <a class="btn btn-sm btn-success" href="#">Estado</a>
                                            <a
                                                class="d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
                                            ></a>
                                            <a
                                                class="d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <footer class="">
            <nav class="navbar bg-secondary fixed-bottom small">
                <div class="container">
                    <a class="navbar-brand" href="http://www.fpllefia.com">
                        <img
                            src=".images/logo.svg"
                            alt="fpllefia"
                            width="30"
                            height="24"
                            class="d-inline-block align-text-top"
                        />
                        FPLlefià
                    </a>
                    <span class="navbar-text">@Texto de header</span>
                    <a href="#" class="nav-link">Vínculo header</a>
                </div>
            </nav>
        </footer>

        <!-- Option 1: Bootstrap Bundle with Popper -->
        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossorigin="anonymous"
        ></script>
    </body>

</html>

# Detalle proyecto

## DETALLE DEL PROYECTO Versíón escritorio

![img](https://carrebola.github.io/vanillaPill/assets/images/detalleProyecto-219d2c0c5c269ac061036bd0e5c7cd7a.png)

## DETALLE DEL PROYECTO Versíón móvil

![img](https://carrebola.github.io/vanillaPill/assets/images/detalleProyecto_movil-44019350470c358ab835a8229e943482.png)

## Procedimiento

Para maquetar la página detalleProyecto.html podemos partir de la página editPerfil.html.

De manera resumida debemos seguir los siguientes pasos:

1. Creamos la estructura de filas y columnas necearia.
2. Insertaremos el título y el botón Volver
3. Insertamos la imagen (que fluirá con la columna) en la columna izquierda
4. Insertamos el texto en la columna derecha
5. Haremos que el ancho de las columnas varíe según la versión escritorio o móvil.
6. Insertaremos un botón en la parte inferior derecha con posicionamiento absoluto

### Aquí puedes ver el código utilizado: 👁‍🗨 ...

#### detalleProyecto.html

<!DOCTYPE html>
<html lang="es">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <!-- Bootstrap CSS -->
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossorigin="anonymous"
        />

        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.0/dist/yeti/bootstrap.min.css"
        />

        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        <link rel="stylesheet" href="styles.css" />

        <link rel="stylesheet" href="styles.css" />
        <title>Prototipos vanilla games</title>

        <style>
            /* Modificamos aspecto de nav-tabs y nav-links */
            .nav-tabs,
            .nav-link.active {
                border-bottom: 0;
                /* background-color: red; */
            }
        </style>
    </head>
    <body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="#"
                        ><img
                            src=".images/logo.svg"
                            alt=""
                            width="30"
                            height="24"
                            class="d-inline-block align-text-top"
                        />

                        Vanilla Games</a
                    >
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">TOP5 Proyectos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">A cerca de</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">PROYECTOS</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src=".images/avatar.svg" alt="" width="25">
                                </a>
                                <ul class="dropdown-menu me-0" style="left: -100px; width: 100px;">
                                    <li class="text-light text-center p-2">
                                        <p>user@email.com</p>
                                    </li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="#">Acciónn</a></li>
                                    <li><a class="dropdown-item" href="#">Otra acción</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
                                </ul>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </header>
        <main>
            <div class="container">
                <h1 class="mt-5">Detalle del proyecto</h1>
                <div class="d-flex justify-content-end">
                    <bottom class="btn btn-outline-secondary mt-5">
                        <i class="bi bi-arrow-bar-left" style="font-size: 1em;"></i>
                        Volver</bottom>
                </div>

                <div class="row mt-2">
                    <div class="col-12 col-md-4 mb-3">
                        <img src=".images/juego.jpg" alt="" class="img-fluid">
                    </div>
                    <div class="col-12 col-md-8">
                        <p>
                            <p><strong>Nombre: </strong><span id="nombre">TETRIS</span></p>
                            <p><strong>Descripción: </strong><span id="nombre">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi dicta iste debitis recusandae perspiciatis quae. Eius impedit saepe autem velit voluptate, odio sequi expedita nisi est molestiae quo quisquam!</span></p>
                            <p><strong>Estado: </strong><span id="nombre">Estado</span></p>
                            <p><strong>Fecha: </strong><span id="nombre">12/12/2023</span></p>
                            <p><strong>Enlace: </strong><span id="nombre">http://www.enlaceapp.com</span></p>
                            <p><strong>Repositorio: </strong><span id="nombre">carrebola.github.com/123456</span></p>
                        </p>
                    </div>
                </div>
                <div
                    class="container fixed-bottom d-flex justify-content-end"
                    style="padding: 0px 0px 100px 0px"
                >
                    <button
                        class="btn btn-success rounded-circle fs-3 shadow"
                        style="width: 50px"
                    >
                        <i class="bi bi-pencil"></i>
                    </button>
                </div>

            </div>
        </main>
        <footer class="">
            <nav class="navbar bg-secondary fixed-bottom small">
                <div class="container">
                    <a class="navbar-brand" href="http://www.fpllefia.com">
                        <img
                            src=".images/logo.svg"
                            alt="fpllefia"
                            width="30"
                            height="24"
                            class="d-inline-block align-text-top"
                        />
                        FPLlefià
                    </a>
                    <span class="navbar-text">@Texto de header</span>
                    <a href="#" class="nav-link">Vínculo header</a>
                </div>
            </nav>
        </footer>

        <!-- Option 1: Bootstrap Bundle with Popper -->
        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossorigin="anonymous"
        ></script>
    </body>

</html>

# Nuevo proyecto y Editar proyecto

## NUEVO PROYECTO Versíón escritorio

![img](https://carrebola.github.io/vanillaPill/assets/images/nuevoProyecto-63d8db3d11e47214ce5c8ba9855deac2.png)

## EDITAR PROYECTO Versíón escritorio

![img](https://carrebola.github.io/vanillaPill/assets/images/editProyecto-1ad8de528168631518ed01d5ab20e6bc.png)

## NUEVO PROYECTO Versíón móvil

![img](https://carrebola.github.io/vanillaPill/assets/images/nuevoProyecto_movil-4a7e09d3f6537dafd459e92c209b1da0.png)

## EDITAR PROYECTO Versíón móvil

![img](https://carrebola.github.io/vanillaPill/assets/images/editProyecto_movil-aae5edd56bdcb4960dd1f2e63f355288.png)

## Procedimiento

Para maquetar la página nuevoProyecto.html podemos partir de la página detalleProyecto.html.

De manera resumida debemos seguir los siguientes pasos:

1. Creamos la estructura de filas y columnas necearia.
2. Insertaremos el título y el botón Volver
3. Insertamos la imagen (que fluirá con la columna) en la columna izquierda
4. Insertamos el formulario con sus campos en la columna derecha
5. Haremos que el ancho de las columnas varíe según la versión escritorio o móvil.

Para maquetar la página editProyecto.html partiremos de la página nuevoProyecto.html y tan solo añadiremos el campo de la url de la imagen y cambiaremos título y botón 'Atualizar'

### Aquí puedes ver el código utilizado en ambas páginas: 👁‍🗨 ...

#### nuevoProyecto.html

<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <!-- Bootstrap CSS -->
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossorigin="anonymous"
        />

        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.0/dist/yeti/bootstrap.min.css"
        />

        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        <link rel="stylesheet" href="styles.css" />

        <link rel="stylesheet" href="styles.css" />
        <title>Prototipos vanilla games</title>

        <style>
            /* Modificamos aspecto de nav-tabs y nav-links */
            .nav-tabs,
            .nav-link.active {
                border-bottom: 0;
                /* background-color: red; */
            }
        </style>
    </head>
    <body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="#"
                        ><img
                            src=".images/logo.svg"
                            alt=""
                            width="30"
                            height="24"
                            class="d-inline-block align-text-top"
                        />

                        Vanilla Games</a
                    >
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">TOP5 Proyectos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">A cerca de</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">PROYECTOS</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <img src=".images/avatar.svg" alt="" width="25" />
                                </a>
                                <ul class="dropdown-menu me-0" style="left: -100px; width: 100px">
                                    <li class="text-light text-center p-2">
                                        <p>user@email.com</p>
                                    </li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Acciónn</a></li>
                                    <li><a class="dropdown-item" href="#">Otra acción</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <main>
            <div class="container">
                <h1 class="mt-5">Nuevo proyecto</h1>
                <div class="d-flex justify-content-end">
                    <bottom class="btn btn-outline-secondary mt-5">
                        <i class="bi bi-arrow-bar-left" style="font-size: 1em"></i>
                        Volver</bottom
                    >
                </div>

                <div class="row mt-2">
                    <div class="col-12 col-md-4 pt-2 mb-3">
                        <img src=".images/juego.jpg" alt="" class="img-fluid" />
                    </div>
                    <div class="col-12 col-md-8">
                        <form action="" class="form">
                            <label class="form-label" for="nombre"><strong>Nombre: </strong></label>
                            <input id="nombre" type="text" value="Nombre Autor" class="form-control" />

                            <label class="form-label mt-2" for="descripcion"
                                ><strong>Descripción: </strong></label
                            >
                            <textarea id="descripcion" class="form-control" rows="4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sunt? Recusandae labore at voluptatem tempore incidunt distinctio eaque? Est aspernatur laudantium itaque ullam numquam autem dolor quia amet eum consectetur.</textarea>
                            <label class="form-label mt-2" for="estado"><strong>Estado: </strong></label>
                            <select id="estado" class="form-control">
                                <option value="estado">estado</option>
                                <option value="otro estado">otro estado</option>
                            </select>
                            <label class="form-label mt-2" for="fecha"><strong>Fecha: </strong></label>
                            <input id="fecha" type="date" class="form-control" value="12/12/2023"/>
                            <label class="form-label mt-2" for="nombre"><strong>Enlace: </strong></label>
                            <input id="enlace" type="text" class="form-control" value="http://enlace.com" />
                            <label class="form-label mt-2" for="nombre"
                                ><strong>Repositorio: </strong></label
                            >
                            <input id="repositorio" type="text" class="form-control" value="user.github.com/123456" />
                            <input type="submit" class="btn btn-success mt-3" value="Subir proyecto">
                        </form>
                    </div>
                </div>

            </div>
        </main>
        <footer class="">
            <nav class="navbar bg-secondary fixed-bottom small">
                <div class="container">
                    <a class="navbar-brand" href="http://www.fpllefia.com">
                        <img
                            src=".images/logo.svg"
                            alt="fpllefia"
                            width="30"
                            height="24"
                            class="d-inline-block align-text-top"
                        />
                        FPLlefià
                    </a>
                    <span class="navbar-text">@Texto de header</span>
                    <a href="#" class="nav-link">Vínculo header</a>
                </div>
            </nav>
        </footer>

        <!-- Option 1: Bootstrap Bundle with Popper -->
        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossorigin="anonymous"
        ></script>
    </body>

</html>

#### editProyecto.html

<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <!-- Bootstrap CSS -->
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossorigin="anonymous"
        />

        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.0/dist/yeti/bootstrap.min.css"
        />

        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        <link rel="stylesheet" href="styles.css" />

        <link rel="stylesheet" href="styles.css" />
        <title>Prototipos vanilla games</title>

        <style>
            /* Modificamos aspecto de nav-tabs y nav-links */
            .nav-tabs,
            .nav-link.active {
                border-bottom: 0;
                /* background-color: red; */
            }
        </style>
    </head>
    <body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="#"
                        ><img
                            src=".images/logo.svg"
                            alt=""
                            width="30"
                            height="24"
                            class="d-inline-block align-text-top"
                        />

                        Vanilla Games</a
                    >
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">TOP5 Proyectos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">A cerca de</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">PROYECTOS</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <img src=".images/avatar.svg" alt="" width="25" />
                                </a>
                                <ul class="dropdown-menu me-0" style="left: -100px; width: 100px">
                                    <li class="text-light text-center p-2">
                                        <p>user@email.com</p>
                                    </li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Acciónn</a></li>
                                    <li><a class="dropdown-item" href="#">Otra acción</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <main>
            <div class="container">
                <h1 class="mt-5">Edición de proyecto</h1>
                <div class="d-flex justify-content-end">
                    <bottom class="btn btn-outline-secondary mt-5">
                        <i class="bi bi-arrow-bar-left" style="font-size: 1em"></i>
                        Volver</bottom
                    >
                </div>
                <form action="" class="">
                    <div class="row mt-2">
                        <div class="col-12 col-md-4 pt-2 mb-3">
                            <img src=".images/juego.jpg" alt="" class="img-fluid" />
                            <label class="form-label mt-2" for="urlImagen"
                                ><strong>URL imagen: </strong></label
                            >
                            <input
                                id="urlImagen"
                                type="text"
                                class="form-control"
                                value="http://enlaceImagen.com"
                            />
                        </div>
                        <div class="col-12 col-md-8">
                            <!-- Formulario nuevo proyecto -->

                            <!-- Nombre proyecto -->
                            <label class="form-label" for="nombre"><strong>Nombre: </strong></label>
                            <input
                                required
                                id="nombre"
                                type="text"
                                value="Nombre Autor"
                                class="form-control"
                            />

                            <!-- Descripción -->
                            <label class="form-label mt-2" for="descripcion"
                                ><strong>Descripción: </strong></label
                            >
                            <textarea id="descripcion" class="form-control" rows="4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sunt? Recusandae labore at voluptatem tempore incidunt distinctio eaque? Est aspernatur laudantium itaque ullam numquam autem dolor quia amet eum consectetur.</textarea
                            >

                            <!-- Estado -->
                            <label class="form-label mt-2" for="estado"
                                ><strong>Estado: </strong></label
                            >
                            <select required id="estado" class="form-control">
                                <option value="estado">estado</option>
                                <option value="otro estado">otro estado</option>
                            </select>

                            <!-- Fecha -->
                            <label class="form-label mt-2" for="fecha"
                                ><strong>Fecha: </strong></label
                            >
                            <input id="fecha" type="date" class="form-control" value="12/12/2023" />

                            <!-- Enlace al proyecto -->
                            <label class="form-label mt-2" for="enlace"
                                ><strong>Enlace: </strong></label
                            >
                            <input
                                id="enlace"
                                type="url"
                                class="form-control"
                                value="http://enlace.com"
                            />

                            <!-- Repositorio -->
                            <label class="form-label mt-2" for="repositorio"
                                ><strong>Repositorio: </strong></label
                            >
                            <input
                                id="repositorio"
                                type="text"
                                class="form-control"
                                value="user.github.com/123456"
                            />

                            <!-- Submit -->
                            <input
                                type="submit"
                                class="btn btn-success mt-3"
                                value="Subir proyecto"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </main>
        <footer class="">
            <nav class="navbar bg-secondary fixed-bottom small">
                <div class="container">
                    <a class="navbar-brand" href="http://www.fpllefia.com">
                        <img
                            src=".images/logo.svg"
                            alt="fpllefia"
                            width="30"
                            height="24"
                            class="d-inline-block align-text-top"
                        />
                        FPLlefià
                    </a>
                    <span class="navbar-text">@Texto de header</span>
                    <a href="#" class="nav-link">Vínculo header</a>
                </div>
            </nav>
        </footer>

        <!-- Option 1: Bootstrap Bundle with Popper -->
        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossorigin="anonymous"
        ></script>
    </body>

</html>

## Admin Usuarios y Admin Proyectos

### ADMIN (Proyectos) Versíón escritorio

![img](https://carrebola.github.io/vanillaPill/assets/images/adminProyectos-c352545ec132f37bf81a4f36c67a9f68.png)

### ADMIN (Usuarios) Versíón escritorio

![img](https://carrebola.github.io/vanillaPill/assets/images/adminUsuarios-0896067d4ff0774f0dbee20f17adcefc.png)

### Procedimiento

Para maquetar la página adminProyectos.html podemos partir de la página Proyectos.html pero utilizando el menú superior de un usuario registrado.

Para maquetar la página adminUsuarios.html podemos partir de la página adminProyectos.html insertando en las celdas de la tabla los inputs necesarios.

Aquí puedes ver el código utilizado: 👁‍🗨 ...

#### adminProyectos.html

<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <!-- Bootstrap CSS -->
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossorigin="anonymous"
        />

        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.0/dist/yeti/bootstrap.min.css"
        />

        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        <link rel="stylesheet" href="styles.css" />

        <link rel="stylesheet" href="styles.css" />
        <title>Prototipos vanilla games</title>

        <style>
            /* Modificamos aspecto de nav-tabs y nav-links */
            .nav-tabs,
            .nav-link.active {
                border-bottom: 0;
                /* background-color: red; */
            }
        </style>
    </head>
    <body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="#"
                        ><img
                            src=".images/logo.svg"
                            alt=""
                            width="30"
                            height="24"
                            class="d-inline-block align-text-top"
                        />

                        Vanilla Games</a
                    >
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">TOP5 Proyectos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">A cerca de</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">PROYECTOS</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <img src=".images/avatar.svg" alt="" width="25" />
                                </a>
                                <ul class="dropdown-menu me-0" style="left: -100px; width: 100px">
                                    <li class="text-light text-center p-2">
                                        <p>user@email.com</p>
                                    </li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Acciónn</a></li>
                                    <li><a class="dropdown-item" href="#">Otra acción</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <main>
            <div class="container-fluid">
                <h1 class="mt-5">Panel de administración</h1>
                <!-- tabs -->
                <div class="row mt-5">
                    <div class="col-12">
                        <ul class="nav nav-tabs">
                            <li class="nav-item w-50">
                                <a class="nav-link" aria-current="page" href="#">Usuarios</a>
                            </li>
                            <li class="nav-item w-50">
                                <a class="nav-link active" href="#">Proyectos</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- tabla proyectos -->
                <div class="border border-top-0 p-3">
                    <!-- buscador -->
                    <div class="row">
                        <div class="d-flex col-12 col-md-6 mb-3">
                            <div class="input-group flex-nowrap">
                                <span class="input-group-text" id="addon-wrapping"
                                    ><i class="bi bi-search"></i
                                ></span>
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Buscador"
                                    aria-label="Username"
                                    aria-describedby="addon-wrapping"
                                />
                                <span class="input-group-text" id="addon-wrapping"
                                    ><i class="bi bi-x"></i
                                ></span>
                            </div>
                        </div>
                    </div>

                    <!-- tabla proyectos -->
                    <div class="col-12" style="overflow-x: auto">
                        <table
                            class="table table-hover align-middle mt-3"
                            style="min-width: 1000px"
                        >
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>
                                        Nombre <span><i class="bi bi-caret-down"></i></span>
                                    </th>
                                    <th>
                                        Descripción <span><i class="bi bi-caret-up"></i></span>
                                    </th>
                                    <th>
                                        Enlace <span><i class="bi bi-caret-up"></i></span>
                                    </th>
                                    <th>Repositorio</th>
                                    <th>
                                        Autor <span><i class="bi bi-caret-up"></i></span>
                                    </th>
                                    <th>
                                        Fecha <span><i class="bi bi-caret-up"></i></span>
                                    </th>
                                    <th>
                                        Estado <span><i class="bi bi-caret-up"></i></span>
                                    </th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tr>
                                <td>
                                    <div class="containerImagen">
                                        <img width="200px" src=".images/juego.jpg" alt="" />
                                    </div>
                                </td>
                                <td>Proyecto ejemplo 1</td>
                                <td>Ejemplo de web para centro fp</td>
                                <td><a href="http://www.fpllefia.con">http://www.fpllefia.con</a></td>
                                <td><a href="#">carrebola.github.com/juego1</a></td>
                                <td>carlos</td>
                                <td>13/12/2021</td>
                                <td>?</td>
                                <td><i class="btn btn-outline-primary bi bi-pencil"></i></td>
                                <td><i class="btn btn-outline-danger bi bi-trash3"></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="containerImagen">
                                        <img width="200px" src=".images/juego.jpg" alt="" />
                                    </div>
                                </td>
                                <td>Proyecto ejemplo 1</td>
                                <td>Ejemplo de web para centro fp</td>
                                <td><a href="http://www.fpllefia.con">http://www.fpllefia.con</a></td>
                                <td><a href="#">carrebola.github.com/juego1</a></td>
                                <td>carlos</td>
                                <td>13/12/2021</td>
                                <td>?</td>
                                <td><i class="btn btn-outline-primary bi bi-pencil"></i></td>
                                <td><i class="btn btn-outline-danger bi bi-trash3"></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="containerImagen">
                                        <img width="200px" src=".images/juego.jpg" alt="" />
                                    </div>
                                </td>
                                <td>Proyecto ejemplo 1</td>
                                <td>Ejemplo de web para centro fp</td>
                                <td><a href="http://www.fpllefia.con">http://www.fpllefia.con</a></td>
                                <td><a href="#">carrebola.github.com/juego1</a></td>
                                <td>carlos</td>
                                <td>13/12/2021</td>
                                <td>?</td>
                                <td><i class="btn btn-outline-primary bi bi-pencil"></i></td>
                                <td><i class="btn btn-outline-danger bi bi-trash3"></i></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </main>
        <footer class="">
            <nav class="navbar bg-secondary fixed-bottom small">
                <div class="container">
                    <a class="navbar-brand" href="http://www.fpllefia.com">
                        <img
                            src=".images/logo.svg"
                            alt="fpllefia"
                            width="30"
                            height="24"
                            class="d-inline-block align-text-top"
                        />
                        FPLlefià
                    </a>
                    <span class="navbar-text">@Texto de header</span>
                    <a href="#" class="nav-link">Vínculo header</a>
                </div>
            </nav>
        </footer>

        <!-- Option 1: Bootstrap Bundle with Popper -->
        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossorigin="anonymous"
        ></script>
    </body>

</html>

#### adminUsuarios.html

<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <!-- Bootstrap CSS -->
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossorigin="anonymous"
        />

        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.0/dist/yeti/bootstrap.min.css"
        />

        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        <link rel="stylesheet" href="styles.css" />

        <link rel="stylesheet" href="styles.css" />
        <title>Prototipos vanilla games</title>

        <style>
            /* Modificamos aspecto de nav-tabs y nav-links */
            .nav-tabs,
            .nav-link.active {
                border-bottom: 0;
                /* background-color: red; */
            }
        </style>
    </head>
    <body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="#"
                        ><img
                            src=".images/logo.svg"
                            alt=""
                            width="30"
                            height="24"
                            class="d-inline-block align-text-top"
                        />

                        Vanilla Games</a
                    >
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">TOP5 Proyectos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">A cerca de</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">PROYECTOS</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <img src=".images/avatar.svg" alt="" width="25" />
                                </a>
                                <ul class="dropdown-menu me-0" style="left: -100px; width: 100px">
                                    <li class="text-light text-center p-2">
                                        <p>user@email.com</p>
                                    </li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Acciónn</a></li>
                                    <li><a class="dropdown-item" href="#">Otra acción</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <main>
            <div class="container-fluid">
                <h1 class="mt-5">Panel de administración</h1>
                <!-- tabs -->
                <div class="row mt-5">
                    <div class="col-12">
                        <ul class="nav nav-tabs">
                            <li class="nav-item w-50">
                                <a class="nav-link active" aria-current="page" href="#">Usuarios</a>
                            </li>
                            <li class="nav-item w-50">
                                <a class="nav-link" href="#">Proyectos</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- tabla proyectos -->
                <div class="border border-top-0 p-3">
                    <!-- buscador -->
                    <div class="row">
                        <div class="d-flex col-12 col-md-6 mb-3">
                            <div class="input-group flex-nowrap">
                                <span class="input-group-text" id="addon-wrapping"
                                    ><i class="bi bi-search"></i
                                ></span>
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Buscador"
                                    aria-label="Username"
                                    aria-describedby="addon-wrapping"
                                />
                                <span class="input-group-text" id="addon-wrapping"
                                    ><i class="bi bi-x"></i
                                ></span>
                            </div>
                        </div>
                    </div>

                    <!-- tabla usuarios-->
                    <div class="col-12" style="overflow-x: auto">
                        <table
                            class="table table-hover align-middle mt-3"
                            style="min-width: 1200px"
                        >
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>
                                        URL imagen <span><i class="bi bi-caret-down"></i></span>
                                    </th>
                                    <th>
                                        Email <span><i class="bi bi-caret-down"></i></span>
                                    </th>
                                    <th>
                                        Nombre <span><i class="bi bi-caret-up"></i></span>
                                    </th>
                                    <th>
                                        Apellidos <span><i class="bi bi-caret-up"></i></span>
                                    </th>
                                    <th>
                                        Fecha <span><i class="bi bi-caret-up"></i></span>
                                    </th>
                                    <th>
                                        Rol <span><i class="bi bi-caret-up"></i></span>
                                    </th>
                                    <th>
                                        Estado <span><i class="bi bi-caret-up"></i></span>
                                    </th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tr>
                                <form action="">
                                    <td>
                                        <div class="containerImagen">
                                            <div
                                                class="rounded-circle d-flex align-items-end justify-content-end"
                                                style="
                                                    background-image: url(.images/avatar.svg);
                                                    width: 50px;
                                                    height: 50px;
                                                    background-size: cover;
                                                    background-position: center;
                                                "
                                            >
                                                <i class="btn btn-success btn-sm rounded-circle bi bi-pencil"></i>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            class="form-control form-control-sm"
                                            value="http://imagen.com"
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            class="form-control form-control-sm"
                                            value="email@email.com"
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            class="form-control form-control-sm"
                                            value="Nombre usuario"
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            class="form-control form-control-sm"
                                            value="Apellidos usuario"
                                        />
                                    </td>

                                    <td>
                                        <input
                                            type="date"
                                            class="form-control form-control-sm"
                                            value="12/12/2023 proyecto"
                                        />
                                    </td>
                                    <td>
                                        <select class="form-control form-control-sm" name="" id="">
                                            <option value="1">opción</option>
                                            <option value="2">opción2</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select class="form-control form-control-sm" name="" id="">
                                            <option value="1">opción</option>
                                            <option value="2">opción2</option>
                                        </select>
                                    </td>
                                    <td><button class="btn btn-sm btn-success">Actualizar</button></td>
                                    <td><i class="btn btn-sm btn-outline-danger bi bi-trash3"></i></td>
                                </form>
                            </tr>

                            <tr>
                                <form action="">
                                    <td>
                                        <div class="containerImagen">
                                            <div
                                                class="rounded-circle d-flex align-items-end justify-content-end"
                                                style="
                                                    background-image: url(.images/avatar.svg);
                                                    width: 50px;
                                                    height: 50px;
                                                    background-size: cover;
                                                    background-position: center;
                                                "
                                            >
                                                <i class="btn btn-success btn-sm rounded-circle bi bi-pencil"></i>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            class="form-control form-control-sm"
                                            value="http://imagen.com"
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            class="form-control form-control-sm"
                                            value="email@email.com"
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            class="form-control form-control-sm"
                                            value="Nombre usuario"
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            class="form-control form-control-sm"
                                            value="Apellidos usuario"
                                        />
                                    </td>

                                    <td>
                                        <input
                                            type="date"
                                            class="form-control form-control-sm"
                                            value="12/12/2023 proyecto"
                                        />
                                    </td>
                                    <td>
                                        <select class="form-control form-control-sm" name="" id="">
                                            <option value="1">opción</option>
                                            <option value="2">opción2</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select class="form-control form-control-sm" name="" id="">
                                            <option value="1">opción</option>
                                            <option value="2">opción2</option>
                                        </select>
                                    </td>
                                    <td><button class="btn btn-sm btn-success">Actualizar</button></td>
                                    <td><i class="btn btn-sm btn-outline-danger bi bi-trash3"></i></td>
                                </form>
                            </tr>

                            <tr>
                                <form action="">
                                    <td>
                                        <div class="containerImagen">
                                            <div
                                                class="rounded-circle d-flex align-items-end justify-content-end"
                                                style="
                                                    background-image: url(.images/avatar.svg);
                                                    width: 50px;
                                                    height: 50px;
                                                    background-size: cover;
                                                    background-position: center;
                                                "
                                            >
                                                <i class="btn btn-success btn-sm rounded-circle bi bi-pencil"></i>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            class="form-control form-control-sm"
                                            value="http://imagen.com"
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            class="form-control form-control-sm"
                                            value="email@email.com"
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            class="form-control form-control-sm"
                                            value="Nombre usuario"
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            class="form-control form-control-sm"
                                            value="Apellidos usuario"
                                        />
                                    </td>

                                    <td>
                                        <input
                                            type="date"
                                            class="form-control form-control-sm"
                                            value="12/12/2023 proyecto"
                                        />
                                    </td>
                                    <td>
                                        <select class="form-control form-control-sm" name="" id="">
                                            <option value="1">opción</option>
                                            <option value="2">opción2</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select class="form-control form-control-sm" name="" id="">
                                            <option value="1">opción</option>
                                            <option value="2">opción2</option>
                                        </select>
                                    </td>
                                    <td><button class="btn btn-sm btn-success">Actualizar</button></td>
                                    <td><i class="btn btn-sm btn-outline-danger bi bi-trash3"></i></td>
                                </form>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </main>
        <footer class="">
            <nav class="navbar bg-secondary fixed-bottom small">
                <div class="container">
                    <a class="navbar-brand" href="http://www.fpllefia.com">
                        <img
                            src=".images/logo.svg"
                            alt="fpllefia"
                            width="30"
                            height="24"
                            class="d-inline-block align-text-top"
                        />
                        FPLlefià
                    </a>
                    <span class="navbar-text">@Texto de header</span>
                    <a href="#" class="nav-link">Vínculo header</a>
                </div>
            </nav>
        </footer>

        <!-- Option 1: Bootstrap Bundle with Popper -->
        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossorigin="anonymous"
        ></script>
    </body>

</html>

## Validaciones Bootstrap

### Validaciones Formularios

- Formularios con atributo `novalidate`
- Clase `was-validated` para validación dinámica

### Clases Utilizadas

- `form-control`: Inputs y textareas
- `form-select`: Selects
- `valid-feedback`: Mensajes éxito
- `invalid-feedback`: Mensajes error

### Atributos Validación

- `required`
- `minlength`, `maxlength`
- `min`, `max`
- `type="email"`
- `type="number"`
- `type="date"`
- `type="tel"`
- `type="url"`
- `type="password"`
- `pattern`

## Iniciar Sesión

      <main>
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
      </div>
    </main>


    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"
    ></script>
    <script>
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
    </script>

## Registro

    <main>
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
      </div>
    </main>


    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"
    ></script>
    <script>
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
    </script>

## Editar Perfil

      <!-- VEntana edición perfil -->

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <!-- Formulario de edición de perfil -->
        <form class="needs-validation" novalidate>
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Edición de perfil
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="form border shadow-sm p-3">
                  <div class="m-1" style="max-width: 400px">
                    <div class="imgPerfil border shadow-sm p-3 mb-3">
                      <div
                        class="imagen mx-auto mb-1 rounded-circle"
                        style="
                          background-image: url(.images/avatar.svg);
                          width: 200px;
                          height: 200px;
                          background-size: cover;
                          background-position: center;
                        "
                      ></div>

                      <!-- Imagen de perfil -->
                      <label for="imagen" class="form-label mt-3"
                        >URL imagen:</label
                      >
                      <input
                        id="imagen"
                        type="url"
                        class="form-control"
                        value="http://imagenavatar.png"
                        pattern="https?://.+"
                      />
                      <div class="invalid-feedback">
                        Por favor, introduce una URL válida.
                      </div>
                    </div>

                    <div class="">
                      <!-- Nombre -->
                      <label for="nombre" class="form-label">Nombre:</label>
                      <input
                        required
                        id="nombre"
                        type="text"
                        class="form-control"
                      />
                      <div class="invalid-feedback">
                        Por favor, introduce tu nombre.
                      </div>

                      <!-- Apellidos -->
                      <label for="apellidos" class="form-label"
                        >Apellidos:</label
                      >
                      <input id="apellidos" type="text" class="form-control" />
                      <div class="invalid-feedback">
                        Por favor, introduce tus apellidos.
                      </div>

                      <!-- Email -->
                      <label for="email" class="form-label">Email:</label>
                      <input
                        required
                        id="email"
                        type="email"
                        class="form-control"
                      />
                      <div class="invalid-feedback">
                        Por favor, introduce un email válido.
                      </div>

                      <!-- Contraseña -->
                      <label for="pass" class="form-label mt-3"
                        >Contraseña:</label
                      >
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
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancelar
                </button>
                <button type="submit" class="btn btn-primary">
                  Guardar cambios
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </header>
    <main>
      <div class="container">
        <h1 class="mt-5">Modal para editar perfil en header</h1>
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>
      </div>
    </main>

    <!-- Option 1: Bootstrap Bundle with Popper -->

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
      crossorigin="anonymous"
    ></script>
    <script>
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
    </script>

## Admin Usuarios

    <main>
      <div class="container-fluid">
        <h1 class="mt-5">Panel de administración</h1>
        <div class="row mt-5">
          <div class="col-12">
            <ul class="nav nav-tabs">
              <li class="nav-item w-50">
                <a class="nav-link active" aria-current="page" href="#"
                  >Usuarios</a
                >
              </li>
              <li class="nav-item w-50">
                <a class="nav-link" href="#">Proyectos</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="border border-top-0 p-3">
          <div class="row">
            <div class="d-flex col-12 col-md-6 mb-3">
              <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping"
                  ><i class="bi bi-search"></i
                ></span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Buscador"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
                <span class="input-group-text" id="addon-wrapping"
                  ><i class="bi bi-x"></i
                ></span>
              </div>
            </div>
          </div>

          <div class="col-12" style="overflow-x: auto">
            <form class="needs-validation" novalidate action="">
              <table
                class="table table-hover align-middle mt-3"
                style="min-width: 1200px"
              >
                <thead>
                  <tr>
                    <th></th>
                    <th>URL imagen</th>
                    <th>Email</th>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>Fecha</th>
                    <th>Rol</th>
                    <th>Estado</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>

                <tr>
                  <td>
                    <div class="containerImagen">
                      <div
                        class="rounded-circle d-flex align-items-end justify-content-end"
                        style="
                          background-image: url(.images/avatar.svg);
                          margin-top: -20px;
                          width: 50px;
                          height: 50px;
                          background-size: cover;
                          background-position: center;
                        "
                      >
                        <i
                          class="btn btn-success btn-sm rounded-circle bi bi-pencil"
                        ></i>
                      </div>
                    </div>
                  </td>
                  <td>
                    <input
                      type="url"
                      id="url"
                      class="form-control form-control-sm"
                      value="http://imagen.com"
                      required
                    />
                    <div class="invalid-feedback">La URL debe ser válida.</div>
                  </td>
                  <td>
                    <input
                      type="email"
                      id="email"
                      class="form-control form-control-sm"
                      value="email@email.com"
                      required
                    />
                    <div class="invalid-feedback">
                      Por favor ingresa un correo válido.
                    </div>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="nombre"
                      class="form-control form-control-sm"
                      value="Nombre usuario"
                      required
                    />
                    <div class="invalid-feedback">El nombre es requerido.</div>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="apellidos"
                      class="form-control form-control-sm"
                      value="Apellidos usuario"
                    />
                    <div class="invalid-feedback">
                      Los apellidos son requeridos.
                    </div>
                  </td>

                  <td>
                    <input
                      type="date"
                      class="form-control form-control-sm"
                      value="2023-12-12"
                      required
                    />
                    <div class="invalid-feedback">La fecha es requerida.</div>
                  </td>
                  <td>
                    <select
                      class="form-control form-control-sm"
                      name="rol"
                      id="rol"
                      required
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="1">opción</option>
                      <option value="2">opción2</option>
                    </select>
                    <div class="invalid-feedback">
                      Por favor selecciona un rol.
                    </div>
                  </td>
                  <td>
                    <select
                      class="form-control form-control-sm"
                      name="estado"
                      id="estado"
                      required
                    >
                      <option value="">Selecciona un estado</option>
                      <option value="1">opción</option>
                      <option value="2">opción2</option>
                    </select>
                    <div class="invalid-feedback pt-2">
                      Por favor selecciona un estado.
                    </div>
                  </td>
                  <td>
                    <button type="submit" class="btn btn-sm btn-success">
                      Actualizar
                    </button>
                  </td>
                  <td>
                    <i class="btn btn-sm btn-outline-danger bi bi-trash3"></i>
                  </td>
                </tr>
              </table>
            </form>
          </div>
        </div>
      </div>
    </main>

    <!-- Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>

    <script>
      // Script para la validación del formulario
      const formulario = document.querySelector("form");

      formulario.addEventListener("submit", (event) => {
        if (!formulario.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        formulario.classList.add("was-validated");
      });
    </script>

  </body>
</html>

## Nuevo Proyecto

    <main>
      <div class="container">
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

              <button type="submit" class="btn btn-success mt-3">
                Subir proyecto
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"
    ></script>

    <script>
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
    </script>

## Editar Proyecto

    <main>
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
      </div>
    </main>

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"
    ></script>
    <script>
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
    </script>

Se ha dejado solo el código imprescindible para entender el funcionamiento de la validación bootstrap
