document.addEventListener('DOMContentLoaded', function(){
    const navLinks = document.querySelectorAll(".header__link");
    navLinks[0].classList.toggle("header__link--active");

    navLinks.forEach(nav => {
        addActive(nav);
    });

});

 const addActive = (element) => {
    element.addEventListener('mouseover', function() {
        element.classList.add("header__link--active");
    });
    element.addEventListener('mouseout', function() {
        this.classList.remove("header__link--active");
    });
};