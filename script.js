// Expanded Product Catalog
const products = [
    { name: "Sapphire Turkish Evening Dress", category: "Dresses" },
    { name: "Premium Graphic T-Shirt", category: "T-Shirts" },
    { name: "Classic White V-Neck", category: "T-Shirts" },
    { name: "Hand-woven Habesha Kemis", category: "Local Merchandise" },
    { name: "Luxury Matte Lipstick Palette", category: "Cosmetics" },
    { name: "24k Gold Plated Necklace", category: "Jewelry" }
];

// Customer Reviews Data
const reviews = [
    { name: "Sara M.", text: "The Turkish dresses are absolutely stunning. I wore one to a wedding and received compliments all night. Amazing quality!", rating: 5 },
    { name: "Beti T.", text: "Love the local merchandise selection. It's hard to find high-quality T-shirts and traditional clothes in one spot. Highly recommend.", rating: 5 },
    { name: "Hanna D.", text: "I placed a custom order for a specific jewelry piece and they delivered perfectly. Great concierge service.", rating: 4 }
];

function renderShop() {
    const grid = document.getElementById('product-grid');
    products.forEach(p => {
        const div = document.createElement('div');
        div.className = 'item-card';
        div.innerHTML = `
            <div class="image-placeholder"></div>
            <div class="item-category">${p.category}</div>
            <h3>${p.name}</h3>
            <a href="tel:0944268337" style="color: #007bff; text-decoration: none; font-weight: bold;">Inquire Availability</a>
        `;
        grid.appendChild(div);
    });
}

function renderReviews() {
    const grid = document.getElementById('reviews-grid');
    reviews.forEach(r => {
        const div = document.createElement('div');
        div.className = 'review-card';
        // Generate stars based on rating
        const starsHtml = '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating);
        div.innerHTML = `
            <div class="stars">${starsHtml}</div>
            <p class="review-text">"${r.text}"</p>
            <p class="reviewer">- ${r.name}</p>
        `;
        grid.appendChild(div);
    });
}

window.onload = () => {
    renderShop();
    renderReviews();
};
