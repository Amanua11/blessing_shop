// Product Catalog with 100% reliable Unsplash links
const products = [
    { name: "Sapphire Evening Dress", category: "Dresses", img: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=600&q=80" },
    { name: "Premium Graphic T-Shirt", category: "T-Shirts", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80" },
    { name: "Classic White V-Neck", category: "T-Shirts", img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=600&q=80" },
    { name: "Hand-woven Habesha Kemis", category: "Local Merchandise", img: "https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&w=600&q=80" },
    { name: "Luxury Matte Lipstick", category: "Cosmetics", img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80" },
    // Fixed Necklace Image Link
    { name: "24k Gold Plated Necklace", category: "Jewelry", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80" }
];

const reviews = [
    { name: "Sara M.", text: "The Turkish dresses are absolutely stunning. I wore one to a wedding and received compliments all night.", rating: 5 },
    { name: "Beti T.", text: "Love the local merchandise selection. It's hard to find high-quality T-shirts and traditional clothes in one spot.", rating: 5 },
    { name: "Hanna D.", text: "I placed a custom order for a specific jewelry piece and they delivered perfectly. Great concierge service.", rating: 4 }
];

function renderShop() {
    const grid = document.getElementById('product-grid');
    products.forEach(p => {
        const div = document.createElement('div');
        div.className = 'item-card';
        div.innerHTML = `
            <img src="${p.img}" alt="${p.name}" class="product-img">
            <div class="card-content">
                <div class="item-category">${p.category}</div>
                <h3>${p.name}</h3>
                <a href="tel:0944268337" class="inquire-link">Inquire Availability</a>
            </div>
        `;
        grid.appendChild(div);
    });
}

function renderReviews() {
    const grid = document.getElementById('reviews-grid');
    reviews.forEach(r => {
        const div = document.createElement('div');
        div.className = 'review-card';
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
