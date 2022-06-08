const open = document.getElementById("open")
const close = document.getElementById("close")
const container = document.querySelector(".container")

// what should happen when the opem button is clicked
open.addEventListener("click", () => container.classList.add("show-nav"))

close.addEventListener("click", () => container.classList.remove("show-nav"))
