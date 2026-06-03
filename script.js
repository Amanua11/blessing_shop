const products = [
    { name: "Premium Turkish Dress", cat: "imports", price: "Call for price" },
    { name: "Handcrafted Habesha Dress", cat: "local", price: "Call for price" },
    { name: "Luxury Cosmetics Set", cat: "accessories", price: "Call for price" }
];

function loadProducts() {
    products.forEach(p => {
        const div = document.createElement('div');
        div.className = 'item-card';
        div.innerHTML = `<h3>${p.name}</h3><p>${p.price}</p>`;
        document.getElementById(`${p.cat}-items`).appendChild(div);
    });
}
window.onload = loadProducts;