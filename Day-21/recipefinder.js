/* # Assignment: Recipe Finder App

Build a Recipe Finder web app using JavaScript DOM skills to display recipes based on a search keyword.

This project will NOT use any external API — we’ll use dummy data.

## TODO

Use JavaScript DOM to:

- Display a list of recipes dynamically.
- Filter recipes by title based on user’s search input.
- No frameworks (no React, Vue, etc.)
- Use only HTML, CSS, and Vanilla JavaScript.
- Dummy Data is provided — store it inside your JavaScript file.

### Dummy Data

```js
const recipes = [
  {
    title: "Spaghetti Carbonari",
    ingredients: ["Spaghetti", "Eggs", "Parmesan Cheese", "Bacon"],
    instructions: "Cook pasta. Mix with eggs and cheese. Add bacon."
  },
  {
    title: "Chicken Curry",
    ingredients: ["Chicken", "Curry Powder", "Onions", "Tomatoes"],
    instructions: "Cook onions, add chicken, spices, and tomatoes."
  },
  {
    title: "Grilled Cheese Sandwich",
    ingredients: ["Bread", "Cheddar Cheese", "Butter"],
    instructions: "Butter bread, place cheese between slices, and grill."
  },
  {
    title: "Veggie Stir Fry",
    ingredients: ["Broccoli", "Carrots", "Bell Peppers", "Soy Sauce"],
    instructions: "Stir fry vegetables and add soy sauce."
  }
];

## Expectations

- A search bar at the top.
- As the user types, filter recipes by title (case insensitive).
- If no recipe found, show a “No recipes found” message.
- Clicking on a recipe title should expand/collapse to show ingredients and instructions.
- Add a clear button to reset the search.
- Add smooth slide animation when expanding/collapsing recipe details.
- Save last search term in localStorage and prefill the input when the page reloads.

## Deliverables

- A project on GitHub with all code and clear readme.
- Post the project link on discord's task-assignments channel of 40 days of JavaScript. */

const recipes = [
  {
    title: "Spaghetti Carbonari",
    ingredients: ["Spaghetti", "Eggs", "Parmesan Cheese", "Bacon"],
    instructions: "Cook pasta. Mix with eggs and cheese. Add bacon.",
  },
  {
    title: "Chicken Curry",
    ingredients: ["Chicken", "Curry Powder", "Onions", "Tomatoes"],
    instructions: "Cook onions, add chicken, spices, and tomatoes.",
  },
  {
    title: "Grilled Cheese Sandwich",
    ingredients: ["Bread", "Cheddar Cheese", "Butter"],
    instructions: "Butter bread, place cheese between slices, and grill.",
  },
  {
    title: "Veggie Stir Fry",
    ingredients: ["Broccoli", "Carrots", "Bell Peppers", "Soy Sauce"],
    instructions: "Stir fry vegetables and add soy sauce.",
  },
];

const recipesData = [...recipes];

const recipeList = document.getElementById("recipe-List");
const searchInput = document.getElementById("search-input");

// Function to display recipes
function displayRecipes(filteredRecipes) {
  recipeList.innerHTML = "";

  // Show message if no recipes match
  if (filteredRecipes.length === 0) {
    const message = document.createElement("p");
    message.textContent = "Recipe not found";
    message.style.fontStyle = "italic";
    message.style.color = "red";
    recipeList.appendChild(message);
    return;
  }

  filteredRecipes.forEach((recipe) => {
    const li = document.createElement("li");

    const title = document.createElement("h3");
    title.textContent = recipe.title;
    title.style.cursor = "pointer";

    const details = document.createElement("div");
    details.style.display = "none"; // hidden initially

    details.innerHTML = `
      <p><strong>Ingredients:</strong></p>
      <ul>
        ${recipe.ingredients.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <p><strong>Instructions:</strong> ${recipe.instructions}</p>
    `;

    // Toggle on click
    title.addEventListener("click", () => {
      details.style.display =
        details.style.display === "none" ? "block" : "none";
         details.classList.toggle("open");
    });

    li.appendChild(title);
    li.appendChild(details);
    recipeList.appendChild(li);
  });
}

// Initial display
displayRecipes(recipesData);

/* 
 // ===== HERE WE USE DETAILS AND SUMMARY ===
function displayRecipes(filteredRecipes) {
  recipeList.innerHTML = "";

  filteredRecipes.forEach((recipe) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <details>
        <summary><strong>${recipe.title}</strong></summary>
        <p><strong>Ingredients:</strong></p>
        <ul>
          ${recipe.ingredients.map(item => `<li>${item}</li>`).join("")}
        </ul>
        <p><strong>Instructions:</strong> ${recipe.instructions}</p>
      </details>
    `;

    recipeList.appendChild(li);
  });
}
 

displayRecipes(recipesData);

 */

// Search event
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
   console.log("Saving:", searchTerm);
   localStorage.setItem("searchTerm", searchTerm);

  
 if (searchTerm.trim() === ""){
  displayRecipes(recipesData);
    return;
 }

  const filtered = recipesData.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm),
  );

  displayRecipes(filtered);
  

  /* 
    Yes — when you use {} in an arrow function, you must use return if you want to return a value.

This is because {} creates a function body (block) instead of an implicit return expression.

1️⃣ Arrow function without {} (implicit return)

If there are no braces, JavaScript automatically returns the expression.
     */
});

const savedSearch = localStorage.getItem("searchTerm");

if (savedSearch) {
  searchInput.value = savedSearch;

  const filtered = recipesData.filter((recipe) =>
    recipe.title.toLowerCase().includes(savedSearch),
  );

  displayRecipes(filtered);
}

const clearBtn = document.getElementById("clear-btn");

// Clear button event
clearBtn.addEventListener("click", () => {
  searchInput.value = ""; //  Clear input
  localStorage.removeItem("searchTerm"); // 
  displayRecipes(recipesData); // Restore full list
  searchInput.focus(); //  focus back on input
});