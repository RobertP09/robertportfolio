// Elements
const navLinks = document.querySelectorAll(".header__link");
const mobileMenu = document.querySelector(".hamburger");
const linkMenu = document.querySelector(".mHeader__menu");
const mNavLinks = document.querySelectorAll(".mHeader__link");

// Created a default highlight
const highlight = navLinks[0].classList.toggle("header__link--active");

// Functions
 const addActive = (element) => {
    element.addEventListener('mouseover',() => {
        element.classList.add("header__link--active");
    });
    element.addEventListener('mouseout',() => {
        element.classList.remove("header__link--active");
    });
};

const closeMobileMenu = (element) => {
    element.addEventListener('click', () => {
        linkMenu.classList.add("mHeader__menu--closed");
        mobileMenu.classList.remove("is-active");
    })
};

/* Events */
navLinks.forEach(nav => {
    addActive(nav);
});
mNavLinks.forEach(nav => {
    closeMobileMenu(nav);
});

mobileMenu.addEventListener('click', function() {
    let active = mobileMenu.classList.contains("is-active");
    if(!active){
        mobileMenu.classList.add("is-active");
        linkMenu.classList.remove("mHeader__menu--closed");
    } else {
        mobileMenu.classList.remove("is-active");
        linkMenu.classList.add("mHeader__menu--closed");
    }
});