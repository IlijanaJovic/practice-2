//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
Array.from(document.querySelectorAll(".navigation-button")).forEach((item) => {
    item.onclick = () => {
        item.parentElement.parentElement.classList.toggle("change");
    };
});

// When the User scroll, navabr changes color

document.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");

    var top = window.scrollY;
    console.log(top);
    if (top >= 800) {
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
    }
});

// Hamburger nav
const navToggle = document.querySelector(".nav__toggle");

navToggle.addEventListener("click", () => {
    if (document.body.classList.contains("nav-open")) {
        document.body.classList.remove("nav-open");
        document.body.classList.add("nav-close");
    } else {
        document.body.classList.add("nav-open");
        document.body.classList.remove("nav-close");
    }
});