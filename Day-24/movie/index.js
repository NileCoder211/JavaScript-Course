/*\
 Let's Build a “Movie Explorer” App
Build an app that lets users search movies using the OMDB API: http://www.omdbapi.com/?apikey=yourkey&s=movieName

Hints:

Input box for search term
Display movie title, poster, and year
Show “No results found” if search fails
Use async/await, DOM manipulation, and try/catch
 */ console.log("Movie App");

const API_KEY = "74aa7dd6";
const movieInput = document.getElementById("movie-input");
const searchBtn = document.getElementById("search-btn");
const loading = document.getElementById("loading");
const result = document.getElementById("result");

async function queryMovies(movieName) {
  try {
    showLoading();

    const res = await fetch(
      `https://www.omdbapi.com/?s=${movieName}&apikey=${API_KEY}`,
    );

    const data = await res.json();

    if (data.Response === "False") {
      throw new Error("No results found");
    }

    displayMovies(data);
  } catch (error) {
    console.log(error);
    showError(error.message);
  } finally {
    hideLoading();
  }
}

function displayMovies(data) {
  let html = "";

  data.Search.forEach((movie) => {
    html += `
      <div class="movie">
        <h2>${movie.Title}</h2>
        <p>📅 Year: ${movie.Year}</p>
        <p>🎬 Type: ${movie.Type}</p>
        <img src="${movie.Poster}" alt="${movie.Title}" width="150">
      </div>
      <hr>
    `;
  });

  result.innerHTML = html;
}

searchBtn.addEventListener("click", () => {
  const movie = movieInput.value.trim();

  if (movie) {
    queryMovies(movie);
  }
});

function showLoading() {
  loading.innerHTML = "⏳ Loading...";
}

function hideLoading() {
  loading.innerHTML = "";
}

function showError(message) {
  result.innerHTML = `<p style="color:red;">❌ ${message}</p>`;
}