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

//cambiar src de iconos de conocimientos
let iconos = document.querySelector(".one");
iconos.addEventListener("mouseover", function () {
    let item = document.querySelectorAll(".skills-item");
    item[0].setAttribute("src", "img/icon/react.png");
    item[1].setAttribute("src", "img/icon/javascript.png");
    item[2].setAttribute("src", "img/icon/php.png");
    item[3].setAttribute("src", "img/icon/java.png");
    item[4].setAttribute("src", "img/icon/sass.png");
    item[5].setAttribute("src", "img/icon/photoshop.png");
});

iconos.addEventListener("mouseout", function () {
    let item = document.querySelectorAll(".skills-item");
    item[0].setAttribute("src", "img/icon/reactoff.png");
    item[1].setAttribute("src", "img/icon/javascriptoff.png");
    item[2].setAttribute("src", "img/icon/phpoff.png");
    item[3].setAttribute("src", "img/icon/javaoff.png");
    item[4].setAttribute("src", "img/icon/sassoff.png");
    item[5].setAttribute("src", "img/icon/photoshopoff.png");
});
