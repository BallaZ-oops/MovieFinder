$(document).ready(function() {
const params = new URLSearchParams(window.location.search);
const title = params.get("title");
const API_KEY = "a3f722d5";


fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${API_KEY}&plot=full`)
.then(response => response.json())
.then(data => {
if (data.Response === "False") {
$(".container").html("<h2>Фильм не найден</h2>");
return;
}


$("#title").text(data.Title);
$("#rating").text(`IMDb: ${data.imdbRating}`);
$("#year").text(`Год выпуска: ${data.Year}`);
$("#genre").text(`Жанр: ${data.Genre}`);
$("#plot").text(data.Plot);


if (data.Poster && data.Poster !== "N/A") {
$("#poster").attr("src", data.Poster);
} else {
$("#poster").hide();
}


const youtubeSearch = `https://www.youtube.com/results?search_query=${encodeURIComponent(data.Title + " trailer")}`;
$("#trailerLink").attr("href", youtubeSearch);
})
.catch(() => $(".container").html("<h2>Ошибка при загрузке данных</h2>"));
});