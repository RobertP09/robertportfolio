
const navLinks = document.querySelectorAll(".header__link");
navLinks[0].classList.toggle("header__link--active");
const mobileMenu = document.querySelector(".hamburger");
const linkMenu = document.querySelector(".mHeader__menu");

 const addActive = (element) => {
    element.addEventListener('mouseover',() => {
        element.classList.add("header__link--active");
    });
    element.addEventListener('mouseout', () => {
        this.classList.remove("header__link--active");
    });
};

navLinks.forEach(nav => {
    addActive(nav);
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

//add on click for each element  -- foreach loop add event
//once clicked removed is-active