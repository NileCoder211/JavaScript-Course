const API_KEY = "74aa7dd6";

const movieInput = document.getElementById("movie-input");
const searchBtn = document.getElementById("search-btn");
const loading = document.getElementById("loading");
const result = document.getElementById("result");
const details = document.getElementById("movie-details");

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
    showError(error.message);
  } finally {
    hideLoading();
  }
}

function displayMovies(data) {
  let html = "";

  data.Search.forEach((movie) => {
    html += `
      <div class="movie-card" onclick="getMovieDetails('${movie.imdbID}')">
        <img src="${movie.Poster}" alt="${movie.Title}">
        <h3>${movie.Title}</h3>
        <p>${movie.Year}</p>
      </div>
    `;
  });

  result.innerHTML = html;
}

async function getMovieDetails(id) {
  try {
    showLoading();

    const res = await fetch(
      `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`,
    );

    const movie = await res.json();
details.innerHTML = `
  <div class="details-card">
    <h2>${movie.Title}</h2>

    <img src="${movie.Poster}" width="200">

    <p><strong>Year:</strong> ${movie.Year}</p>
    <p>${movie.Plot}</p>

    <a href="https://www.youtube.com/results?search_query=${movie.Title}+trailer" 
       target="_blank">
       ▶ Watch Trailer
    </a>
  </div>
`;
  } catch (error) {
    showError(error.message);
  } finally {
    hideLoading();
  }
}

searchBtn.addEventListener("click", () => {
  const movie = movieInput.value.trim();
  if (movie) queryMovies(movie);
});

movieInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const movie = movieInput.value.trim();
    if (movie) queryMovies(movie);
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
