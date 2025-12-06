$(function() {
$("#searchBtn").on("click", function() {
let name = $("#movieInput").val().trim();
if (!name) return;
window.location.href = "movie_extended.html?title=" + encodeURIComponent(name);
});


$("#movieInput").on("keypress", function(e) {
if(e.key === "Enter") $("#searchBtn").click();
});
});