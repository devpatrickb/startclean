const searchBtn = document.querySelector("button#searchBtn");
const searchInput = document.querySelector("input#searchInput");

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();

  if (!query) return;

  window.location.href = `https://google.com/search?q=${encodeURIComponent(query)}`;
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const query = searchInput.value.trim();

    if (!query) return;
    searchInput.value = "";

    window.location.href = `https://google.com/search?q=${encodeURIComponent(query)}`;
  }
});
