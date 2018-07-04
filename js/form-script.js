var button = document.querySelector(".btn-search-hotels");
var form = document.querySelector(".search-form");

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    form.classList.toggle("search-form-show");
});