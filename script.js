let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    updateCart();
    alert(product + " has been added to your cart!");
}

function updateCart() {
    document.getElementById("cart-count").innerText = cart.length;
    let cartItems = document.getElementById("cart-items");
    let total = 0;
    cartItems.innerHTML = "";
    cart.forEach(item => {
        total += item.price;
        let li = document.createElement("li");
        li.innerText = `${item.product} - ₹${item.price}`;
        cartItems.appendChild(li);
    });
    document.getElementById("cart-total").innerText = total;
}

function toggleCart() {
    let cartBox = document.getElementById("cart");
    cartBox.style.display = cartBox.style.display === "block" ? "none" : "block";
}
