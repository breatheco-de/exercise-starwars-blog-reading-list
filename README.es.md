<!--hide-->
# Lista de Lectura del Blog de Starwars
<!--endhide-->

_La fuerza es fuerte en este ejercicio...._

Vamos a construir una versión minimalista del [Banco de datos de Star Wars](https://www.starwars.com/databank) con una función React o lista de favoritos.

### !Aquí hay un Demo!

![Starwars Demo](https://github.com/breatheco-de/exercise-starwars-blog-reading-list/blob/master/preview.gif?raw=true)

## 🌱 Cómo comenzar este proyecto

No clones este repositorio porque vamos a usar una plantilla diferente.

Recomendamos abrir el `react flux boilerplate` usando una herramienta de aprovisionamiento como [Codespaces](https://4geeks.com/es/lesson/tutorial-de-github-codespaces) (recomendado) o [Gitpod](https://4geeks.com/es/lesson/como-utilizar-gitpod). Alternativamente, puedes clonarlo en tu computadora local usando el comando `git clone`.

Este es el repositorio que necesitas abrir o clonar:

```
https://github.com/4GeeksAcademy/react-hello-webapp
```

**👉 Por favor sigue estos pasos** [cómo comenzar un proyecto de codificación](https://4geeks.com/es/lesson/como-comenzar-un-proyecto-de-codificacion).

💡 Importante: Recuerda guardar y subir tu código a GitHub creando un nuevo repositorio, actualizando el remoto (`git remote set-url origin <your new url>`) y subiendo el código a tu nuevo repositorio usando los comandos `add`, `commit` y `push` desde la terminal de git.

## 📝 Instrucciones

1. Usa componentes de Bootstrap, no necesitas **casi** CSS personalizado.
2. Tómate un tiempo para comprender la API SWAPI.tech, esta será nuestra fuente de información, estaremos consumiendo esta API.
3. Busca personas, vehículos y planetas SWAPI y muéstralos en tu aplicación.
4. Declara un array de `favoritos` en tu tienda central y permite que el usuario agregue o elimine favoritos.

#### Construyendo la red de personajes y planetas.

- Crear una aplicación web React que enumera _personas_, _vehiculos_ y _planetas_ **entidades** proporcionado por el [SWAPI](https://www.swapi.tech/documentation).

Nota: por favor utiliza swapi.tech y no swapi.dev porque la segunda esta dando problemas útimamente.

<p align="center">
   <img height="100" src="https://raw.githubusercontent.com/nachovz/projects/master/p/javascript/semi-senior/startwars-blog-reading-list/sw_data.png" />
</p>

#### Construyendo una vista de detalles para el personaje o el planeta

- Cada entidad debe tener una breve descripción (Tarjeta Bootstrap) y una vista de detalles (Componentes Bootstrap):

<p align="center">
   <img height="100" src="https://raw.githubusercontent.com/nachovz/projects/master/p/javascript/semi-senior/startwars-blog-reading-list/sw_data_details.png" />
</p>

***Importante***: El SWAPI no proporciona las imágenes, puedes usar marcadores de posición o evitar las imágenes por completo. El enfoque de este ejercicio es practicar *fetch*, *router* y *context*; puedes enfocarte en un tema del color y diseño simple para que se vea bien.

***Importante 2***: no te preocupes si los datos que obtienes de la SWAPI no coinciden con los datos que ves en starwars.com.

Usa toda la información que entrega la SWAPI (verifica los documentos y / o las respuestas de json).

## Leer más tarde o la funcionalidad de favoritos

Implementa una funcionalidad de lectura posterior, es decir, un botón que permita al usuario "guardar" el elemento (personaje, vehículo o planeta) en una lista especial. Esta lista se mostrará en la parte inferior de la página de inicio, se asemeja a la lista principal, pero solo muestra los elementos "guardados".

#### Uso de Context

Para asegurarse de que el usuario pueda "guardar" el elemento, debe implementar una acción a la que se pueda acceder desde cualquier lugar dentro de la aplicación.

## 😎 ¿Te sientes seguro?

Las siguientes funciones no son necesarias para la solución final, pero puede desarrollarlas si te sientes lo suficientemente seguro:

- `+ 1` Evita que el sitio web haga Fetch a la API de Startwars nuevamente si se actualiza (puedes usar el almacenamiento local para guardar la tienda en el navegador local).
- `+ 3` Implementa una barra de búsqueda con "autocompletar" para Personajes y Planetas. Cuando haces clic en autocompletar, debería llevarte a la página Personaje o Planeta.

Este y otros proyectos son usados para [aprender a programar](https://4geeksacademy.com/es/aprender-a-programar/aprender-a-programar-desde-cero) por parte de los alumnos de 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) realizado por [Alejandro Sánchez](https://twitter.com/alesanchezr) y muchos otros contribuyentes. Conoce más sobre nuestros [Curso de Programación](https://4geeksacademy.com/es/curso-de-programacion-desde-cero?lang=es) para convertirte en [Full Stack Developer](https://4geeksacademy.com/es/coding-bootcamps/desarrollador-full-stack/?lang=es), o nuestro [Data Science Bootcamp](https://4geeksacademy.com/es/coding-bootcamps/curso-datascience-machine-learning).


