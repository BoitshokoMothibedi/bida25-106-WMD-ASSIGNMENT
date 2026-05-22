// Run cart display when page loads
document.addEventListener("DOMContentLoaded", function () {
    showCart();
});

// FUNCTIONS MUST BE OUTSIDE 👇

function addToCart(name, price) {
    let cart = getCart();

    cart.push({
        name: name,
        price: Number(price)
    });

    saveCart(cart);

    alert(name + " added to cart");
}

function getCart() {
    let data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function showCart() {
    let cart = getCart();
    let list = document.getElementById("cartItems");
    let totalBox = document.getElementById("totalPrice");

    if (!list) return;

    list.innerHTML = "";
    let total = 0;

    cart.forEach(function (item, i) {
        let li = document.createElement("li");

        li.textContent = item.name + " - P" + item.price;

        let btn = document.createElement("button");
        btn.textContent = "Remove";

        btn.onclick = function () {
            removeFromCart(i);
        };

        li.appendChild(btn);
        list.appendChild(li);

        total += item.price;
    });

    totalBox.textContent = "Total Price: P" + total;
}

function removeFromCart(index) {
    let cart = getCart();

    cart.splice(index, 1);

    saveCart(cart);
    showCart();
}

function clearCart() {
    localStorage.removeItem("cart");
    showCart();
}