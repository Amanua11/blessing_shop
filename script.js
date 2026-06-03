const products = [
    { name: "Silk Evening Gown (Import)", cat: "imports" },
    { name: "Modern Turkish Blazer", cat: "imports" },
    { name: "Handcrafted Habesha Kemis", cat: "local" },
    { name: "Artisan Jewelry Set", cat: "local" }
];

function loadProducts() {
    products.forEach(p => {
        const div = document.createElement('div');
        div.className = 'item-card';
        div.innerHTML = `
            <div style="height:250px; background:#f0f0f0; margin-bottom:15px;"></div>
            <h3>${p.name}</h3>
            <a href="tel:0944268337" style="color: #b8860b;">Inquire Availability</a>
        `;
        document.getElementById(`${p.cat}-items`).appendChild(div);
    });
}
window.onload = loadProducts;
