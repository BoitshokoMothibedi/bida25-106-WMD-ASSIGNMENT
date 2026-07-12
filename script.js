// ================================
// iConnect Mobile JavaScript
// ================================

// Welcome Message
document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to iConnect Mobile!");
});

// ================================
// Product Search
// ================================

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const searchValue = this.value.toLowerCase();

        const products = document.querySelectorAll(".product");

        products.forEach(product => {

            const productName = product.innerText.toLowerCase();

            if (productName.includes(searchValue)) {

                product.style.display = "block";

            } else {

                product.style.display = "none";

            }

        });

    });

}

// ================================
// Contact Form
// ================================

const forms = document.querySelectorAll("form");

forms.forEach(form => {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        alert("Thank you! Your submission has been received.");

        form.reset();

    });

});

// ================================
// Smooth Scroll
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});