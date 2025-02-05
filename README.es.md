<!--hide-->
# Lista de Lectura del Blog de Starwars
<!--endhide-->

*La fuerza es fuerte en este ejercicio...*

Vamos a construir una versión minimalista del [Banco de datos de Star Wars](https://www.starwars.com/databank) con una funcionalidad de "Read later" o "favoritos".

### ¡Aquí hay un Demo!

![Starwars Demo](https://github.com/breatheco-de/exercise-starwars-blog-reading-list/blob/master/preview.gif?raw=true)

<onlyfor saas="false" withBanner="false">
   
## 🌱 Cómo comenzar este proyecto

No clones este repositorio porque vamos a usar una plantilla diferente.

Recomendamos abrir el `react flux boilerplate` usando un entorno de desarrollo como [Codespaces](https://4geeks.com/es/lesson/tutorial-de-github-codespaces) (recomendado) o [Gitpod](https://4geeks.com/es/lesson/como-utilizar-gitpod). Alternativamente, puedes clonarlo en tu computadora local usando el comando `git clone`.

Este es el repositorio que necesitas abrir o clonar:

```text
https://github.com/4GeeksAcademy/react-hello-webapp
```

**👉 Por favor sigue estos pasos sobre** [cómo comenzar un proyecto de programación](https://4geeks.com/es/lesson/como-comenzar-un-proyecto-de-codificacion).

> 💡 Importante: Recuerda guardar y subir tu código a GitHub creando un nuevo repositorio, actualizando el remoto (`git remote set-url origin <your new url>`) y subiendo el código a tu nuevo repositorio usando los comandos `add`, `commit` y `push` desde la terminal de git.

</onlyfor>

## 📝 Instrucciones

1. Usa componentes de Bootstrap, **casi** no necesitas CSS personalizado.
2. Tómate un tiempo para comprender la API [SWAPI.tech](https://www.swapi.tech/documentation), esta será nuestra fuente de información, estaremos consumiendo esta API.
3. Haremos *fetch* de personas, vehículos y planetas de la SWAPI para mostrarlos en tu aplicación.
4. Declara un array de `favoritos` en tu *central store* y permite que el usuario agregue o elimine favoritos.

### Construyendo la vista principal

- Crear una aplicación web React que enumera entidades de *personas*, *vehículos* y *planetas* proporcionados por la [SWAPI](https://www.swapi.tech/documentation).

> Nota: por favor utiliza swapi.tech y no swapi.dev porque la segunda está dando problemas últimamente.

<p align="center">
   <img height="400" src="https://raw.githubusercontent.com/nachovz/projects/master/p/javascript/semi-senior/startwars-blog-reading-list/sw_data.png" />
</p>

### Construyendo la vista detallada

- Cada entidad debe tener una breve descripción (Tarjeta Bootstrap) y una vista de detalles (Componentes Bootstrap):

<p align="center">
   <img height="400" src="https://raw.githubusercontent.com/nachovz/projects/master/p/javascript/semi-senior/startwars-blog-reading-list/sw_data_details.png" />
</p>

***Importante***: La SWAPI no proporciona las imágenes, pero puedes usar https://starwars-visualguide.com para obtener las imágenes. El enfoque de este ejercicio es practicar *fetch*, *router* y *context*. También puedes enfocarte en una paleta de colores y diseño simple para que se vea bien.

***Importante 2***: no te preocupes si los datos que obtienes de la SWAPI no coinciden con los datos que ves en starwars.com.

Usa toda la información que proporciona la SWAPI (verifica la documentación y/o las respuestas JSON).

### Funcionalidad "Read later" o "Favoritos"

Implementa una funcionalidad de "Read later", es decir, un botón que permita al usuario "guardar" el elemento (personaje, vehículo o planeta) en una lista especial. La ubicación de esta lista es a elección, mientras se muestre correctamente (en nuestra demo es un botón en la navbar); esta lista se asemeja a la lista principal, pero solo muestra los elementos "guardados".

### Uso de Context

Para asegurarse que el usuario pueda "guardar" el elemento, debes implementar una acción a la que se pueda acceder desde cualquier lugar dentro de la aplicación.

## 😎 ¿Te sientes seguro?

Las siguientes funciones no son necesarias para la solución final, pero puedes desarrollarlas si te sientes lo suficientemente seguro:

- `+1` Evita que el sitio web haga Fetch a la API de Startwars nuevamente si se actualiza la página (puedes usar el almacenamiento local (`localStorage`) para guardar la *store* en el navegador local).
- `+3` Implementa una barra de búsqueda con "autocompletar" para los personajes, planetas y vehículos. Cuando haces clic en autocompletar, debería llevarte a la página detallada del elemento.

Este y otros proyectos son usados para [aprender a programar](https://4geeksacademy.com/es/aprender-a-programar/aprender-a-programar-desde-cero) por parte de los alumnos de 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) realizado por [Alejandro Sánchez](https://twitter.com/alesanchezr) y muchos otros contribuyentes. Conoce más sobre nuestros [Cursos de Programación](https://4geeksacademy.com/es/curso-de-programacion-desde-cero?lang=es) para convertirte en [Full Stack Developer](https://4geeksacademy.com/es/coding-bootcamps/desarrollador-full-stack/?lang=es), o nuestro [Data Science Bootcamp](https://4geeksacademy.com/es/coding-bootcamps/curso-datascience-machine-learning).


