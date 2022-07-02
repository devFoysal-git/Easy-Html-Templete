window.onscroll = function () {
    myNavbar();
    myActive();
};

// sticky navbar start

var sticky = 450;
var navbar = document.getElementById("navbar");

function myNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
}

// sticky navbar end

// nav highlight
var section = document.querySelectorAll("section");
var menu = document.querySelectorAll(".nav-menu > .menu-item > a ");

function myActive() {
    let current = "";
    section.forEach((section) => {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - (sectionHeight / 5)) {
            current = section.getAttribute("id");
        }
    });

    menu.forEach((menu) => {
        menu.classList.remove("active");
        if (menu.classList.contains(current)) {
            menu.classList.add("active");
        }
    });
}

//mobile-menu

function openNav() {
    document.getElementById("m-m").style.width = "70%"
}
function closeNav() {
    document.getElementById("m-m").style.width = "0%"
}