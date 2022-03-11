//copiar email al tocar el icono
let copyText = document.querySelector(".copyText");
let button = document.querySelector('#copyEmail');
const email = "rodrigo.rivera.b@hotmail.com";
button.addEventListener("click", function () {
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', email);
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    alert("Email copiado");
})

//Elimina o agrega clase intercaladamente al hacer click para crear un navbar en responsive
let togglebtn = document.querySelector(".toggle");
let menuactive = document.querySelector(".menu-item");

togglebtn.addEventListener("click", function () {
    if (menuactive.className == "menu-item") {
        menuactive.classList.remove("menu-item");
        menuactive.classList.add("menu-item-active");
    } else {
        if (menuactive.className == "menu-item-active") {
            menuactive.classList.remove("menu-item-active");
            menuactive.classList.add("menu-item");
        }
    }
});

//si la pantalla se mueve se elimina la ventana nav
window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
        menuactive.classList.remove("menu-item-active");
        menuactive.classList.add("menu-item");
    }
});
