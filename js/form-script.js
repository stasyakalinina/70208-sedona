var button = document.querySelector(".btn-search-hotels");
var form = document.querySelector(".search-form");
var checkIn = form.querySelector("[name=check-in]");
var checkOut = form.querySelector("[name=check-out]");

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    form.classList.toggle("search-form-show");
    form.classList.remove("search-form-error");
    checkIn.focus();
});

form.addEventListener("submit", function (evt) {
    if (!checkIn.value || !checkOut) {
        evt.preventDefault();
        form.classList.add("search-form-error");
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (form.classList.contains("search-form-show")) {
            evt.preventDefault();
            form.classList.remove("search-form-show");
        }   
    }
});