const modal = document.getElementById("modal");

const openBtn = document.getElementById("openBtn");

const closeBtn = document.getElementById("closeBtn");



openBtn.addEventListener("click", function () {

    modal.style.display = "block";

});


closeBtn.addEventListener("click", function () {

    modal.style.display = "none";

});