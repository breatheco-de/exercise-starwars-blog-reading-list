<!--hide-->
# Star Wars Blog Reading List
<!--endhide-->

*The force is strong with this exercise...*

We are going to be building a minimalist version of the [Star Wars Databank](https://www.starwars.com/databank) with a "Read Later" or "Favorites" list functionality.

### Here is a Demo!

![Starwars Demo](https://github.com/breatheco-de/exercise-starwars-blog-reading-list/blob/master/preview.gif?raw=true)

## 🌱 How to start this project

Do not clone this repository because we are going to be using a different template.

We recommend opening the `react flux boilerplate` using a provisioning tool like [Codespaces](https://4geeks.com/lesson/what-is-github-codespaces) (recommended) or [Gitpod](https://4geeks.com/lesson/how-to-use-gitpod). Alternatively, you can clone it on your local computer using the `git clone` command.

This is the repository you need to open or clone:

```text
https://github.com/4GeeksAcademy/react-hello-webapp
```

**👉 Please follow these steps on** [how to start a coding project](https://4geeks.com/lesson/how-to-start-a-project).

> 💡 Important: Remember to save and upload your code to GitHub by creating a new repository, updating the remote (`git remote set-url origin <your new url>`), and uploading the code to your new repository using the `add`, `commit` and `push` commands from the git terminal.

## 📝 Instructions

1. Use Bootstrap components, you need **almost** no custom CSS.
2. Take some time to understand the [SWAPI.tech](https://www.swapi.tech/documentation) API, this will be our source of information, we will be consuming this API.
3. Fetch the SWAPI's people, vehicles, and planets to display them on your application.
4. Declare a `favorites` array in your central store and allow the user to add or remove favorites.

### Building the grid

- Create a React webapp that lists the *people*, *vehicles* and *planets* entities provided by the [SWAPI](https://www.swapi.tech/documentation).

> Note: Please use https://www.swapi.tech/ instead of https://swapi.dev/ because the second one is causing problems.

<p align="center">
   <img height="400" src="https://raw.githubusercontent.com/nachovz/projects/master/p/javascript/semi-senior/startwars-blog-reading-list/sw_data.png" />
</p>

### Building a "Details" view

- Each entity should have a short description (Bootstrap Card) and a "Details" view (Bootstrap components):

<p align="center">
   <img height="400" src="https://raw.githubusercontent.com/nachovz/projects/master/p/javascript/semi-senior/startwars-blog-reading-list/sw_data_details.png" />
</p>

***Important***: The SWAPI doesn't provide the images, you can use https://starwars-visualguide.com to get the images easily. The focus of this exercise is to practice *fetch*, *router*, and *context*. Also, you can focus on the color theme and a simple layout to make it look good.

***Important 2***: Don't worry if the data you get from the SWAPI doesn't match the data you see in starwars.com.

Use all the information provided by the SWAPI (check the docs and/or the JSON responses).

### Read Later or Favorites functionality

Implement a "Read Later" functionality, i.e., a button that allows the user to "save" the item (character, vehicle or planet) into a special list. The location of this list is your choice, as long as it works correctly (in our demo, it's a button on the navbar); this list resembles the main list but only shows the "saved" elements.

### Use the Context

To ensure that the user can "save" the item, you must implement an action that can be accessible from anywhere within the app.

## 😎 Feeling Confident?

The following features are not needed for the final solution, but you can develop them if you feel confident enough:

- `+1` Prevent the website from fetching the Star Wars API again if refreshed (you can use the `localStorage` to save the store on the local browser).
- `+3` Implement a search bar with autocomplete for characters, planets, and vehicles. When the autocomplete is clicked it should take you to the detailed page of the element.

This and many other projects are built by students as part of the 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) by [Alejandro Sanchez](https://twitter.com/alesanchezr) and many other contributors. Find out more about our [Full Stack Developer Course](https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer), and [Data Science Bootcamp](https://4geeksacademy.com/us/coding-bootcamps/datascience-machine-learning).
