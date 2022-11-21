const btn = document.getElementById("btn");
const alert = document.getElementById("alert");
const close = document.getElementById("close");


btn.addEventListener("click", () => {
    alert.classList.add("show")
});
close.addEventListener("click", () => {
    alert.classList.remove("show")
})
