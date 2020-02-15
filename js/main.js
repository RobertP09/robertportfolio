document.addEventListener('DOMContentLoaded', function(){
    const navLinks = document.querySelectorAll(".header__link");
    navLinks[0].classList.toggle("header__link--active");

    navLinks.forEach(nav => {
        addActive(nav);
    });

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate the contact number value
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('contact_service', 'contact_template', this);
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

