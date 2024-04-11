function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form");
  let cityElement = document.querySelector("#weather-app-city");
  cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-input");
searchFormElement.addEventListener("submit", handleSearchSubmit);
