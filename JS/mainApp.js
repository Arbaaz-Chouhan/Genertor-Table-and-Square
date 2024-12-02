// mainApp.js
const table = document.getElementsByClassName("table")[0];
const square = document.getElementsByClassName("square")[0];

table.addEventListener("click", () => {
    setTimeout(() => {
        window.location.href = "./table.html";
    }, 3000);
});

square.addEventListener("click", () => {
    setTimeout(() => {
        window.location.href = "./squares.html";
    }, 3000);
});
