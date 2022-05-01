const f = document.getElementById("form");
const q = document.getElementById("query");
const search = "https://search.brave.com/search?q=";

function submitted(event) {
  event.preventDefault();
  const url = search + q.value ;
  window.open(url, "_self");
}

f.addEventListener("submit", submitted);