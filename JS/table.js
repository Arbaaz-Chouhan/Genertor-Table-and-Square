const form = document.getElementById("myForm");
const input = document.getElementById("mainInput");
const tableContainer = document.getElementById("tableContainer");

form.addEventListener("submit", generateTable);

function generateTable(e) {
    e.preventDefault();
    const num = input.value;

    if (num) {
        createTable(num);
        input.value = "";
    }
}

function createTable(num) {
    const tableDiv = document.createElement("div");
    tableDiv.classList.add("table-div");

    for (let i = 1; i <= 10; i++) {
        let result = `${num} * ${i} = ${num * i}`;
        let div = document.createElement("div");
        div.classList.add("table")
        div.innerText = result;
        tableDiv.append(div);
    }

    tableContainer.append(tableDiv);
}


