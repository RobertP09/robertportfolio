document.addEventListener('DOMContentLoaded', function(){
    const navLinks = document.querySelectorAll(".header__link");

    navLinks.forEach(nav => {
        addActive(nav);
    });
});

const addActive = (element) => {
    element.addEventListener('mouseover', function() {
        this.classList.toggle("header__link--active");
    })
    element.addEventListener('mouseout', function() {
        this.classList.toggle("header__link--active");
    })
};