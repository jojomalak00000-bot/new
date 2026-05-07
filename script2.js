const generateBtn = document.getElementById("generateBtn");

const palette = document.getElementById("palette");



function randomColor() {

    const r = Math.floor(Math.random() * 256);

    const g = Math.floor(Math.random() * 256);

    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}


generateBtn.addEventListener("click", function () {


    palette.innerHTML = "";
    for(let i = 0; i < 5; i++) {

        const color = randomColor();

        const box = document.createElement("div");

        box.classList.add("box");

        box.style.backgroundColor = color;

        box.textContent = color;

        box.addEventListener("click", function () {

            navigator.clipboard.writeText(color);

            alert("Copied!");
        });

        palette.appendChild(box);
        }
});