const createBtn = document.getElementById("createBtn");

const container = document.getElementById("tableContainer");


createBtn.addEventListener("click", function () {

    
    const data = [
        ["1", "Ahmed", "Developer"],
        ["2", "Ali", "Designer"],
        ["3", "Sara", "Manager"]
    ];

    
    const table = document.createElement("table");

    table.border = "1";

    
    data.forEach(function(rowData) {

        const row = document.createElement("tr");

        rowData.forEach(function(cellData) {

            const cell = document.createElement("td");

            cell.textContent = cellData;

            row.appendChild(cell);

        });

        table.appendChild(row);

    });

    container.innerHTML = "";

    container.appendChild(table);

});