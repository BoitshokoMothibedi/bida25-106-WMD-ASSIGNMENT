// ====================================
// Shopping Cart
// ====================================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ================================
// Add Product
// ================================

function addToCart(product, price) {

    cart.push({

        product: product,
        price: price

    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(product + " has been added to your cart!");

}

// ================================
// Display Cart
// ================================

function displayCart() {

    const cartItems = document.getElementById("cartItems");

    const totalPrice = document.getElementById("totalPrice");

    if (!cartItems) return;

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        cartItems.innerHTML += `

        <tr>

            <td>${item.product}</td>

            <td>P${item.price.toLocaleString()}</td>

            <td>

                <button class="btn btn-danger btn-sm"

                onclick="removeItem(${index})">

                Remove

                </button>

            </td>

        </tr>

        `;

    });

    totalPrice.innerHTML = "P" + total.toLocaleString();

}

// ================================
// Remove Product
// ================================

function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}

// ================================
// Clear Cart
// ================================

function clearCart() {

    if (confirm("Are you sure you want to clear the cart?")) {

        cart = [];

        localStorage.removeItem("cart");

        displayCart();

    }

}

// ================================
// Load Cart
// ================================

displayCart();