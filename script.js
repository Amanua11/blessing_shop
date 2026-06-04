// ---- PRODUCT CATALOG ----
const products = [
    { name: "Sapphire Evening Dress", category: "Clothing", img: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=600&q=80" },
    { name: "Floral Summer Dress", category: "Clothing", img: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?auto=format&fit=crop&w=600&q=80" },
    { name: "Premium Graphic T-Shirt", category: "Clothing", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80" },
    { name: "Classic White V-Neck", category: "Clothing", img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=600&q=80" },
    { name: "Luxury Matte Lipstick Set", category: "Cosmetics", img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80" },
    { name: "Turkish Rose Perfume", category: "Cosmetics", img: "https://images.unsplash.com/photo-1541643600914-78b084683702?auto=format&fit=crop&w=600&q=80" },
    { name: "Premium Skincare Set", category: "Cosmetics", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80" },
    { name: "24k Gold Plated Necklace", category: "Jewellery", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80" },
    { name: "Crystal Drop Earrings", category: "Jewellery", img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=600&q=80" },
    { name: "Silver Bangle Bracelet", category: "Jewellery", img: "https://images.unsplash.com/photo-1573408301185-9519f94815b9?auto=format&fit=crop&w=600&q=80" },
];

const reviews = [
    { name: "Sara M.", text: "The Turkish dresses are absolutely stunning. I wore one to a wedding and received compliments all night. Will definitely order again.", rating: 5 },
    { name: "Beti T.", text: "Love the cosmetics selection. The lipstick set is high quality and long-lasting. You can really tell these are genuine Turkish imports.", rating: 5 },
    { name: "Hanna D.", text: "I placed a custom order for a specific jewellery piece and they delivered perfectly. Fast, professional, and exactly what I wanted.", rating: 5 },
    { name: "Meron A.", text: "The skincare set I got is incredible. My skin has never looked better. I trust Blessing Collection completely for quality cosmetics.", rating: 4 },
    { name: "Tigist B.", text: "Ordered two dresses and they both fit perfectly. The quality of the fabric is so much better than what you find locally. Highly recommend.", rating: 5 },
    { name: "Rahel K.", text: "The gold necklace I ordered is beautiful and has not tarnished at all. Very happy with the quality. I will be back for more jewellery.", rating: 4 },
];

// ---- RENDER SHOP ----
function renderShop() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    products.forEach(p => {
        const div = document.createElement('div');
        div.className = 'item-card animate-on-scroll';
        div.dataset.category = p.category;
        div.innerHTML = `
            <img src="${p.img}" alt="${p.name}" class="product-img">
            <div class="card-content">
                <div class="item-category">${p.category}</div>
                <h3>${p.name}</h3>
                <a href="tel:0944268337" class="inquire-link">Inquire Availability &rarr;</a>
            </div>
        `;
        grid.appendChild(div);
    });
    observeNewElements();
}

// ---- FILTER PRODUCTS ----
function filterProducts(category, btn) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Show/hide cards
    document.querySelectorAll('.item-card').forEach(card => {
        if (category === 'All' || card.dataset.category === category) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// ---- RENDER REVIEWS ----
function renderReviews() {
    const grid = document.getElementById('reviews-grid');
    if (!grid) return;
    reviews.forEach((r, i) => {
        const div = document.createElement('div');
        div.className = 'review-card animate-on-scroll';
        div.style.transitionDelay = (i * 0.08) + 's';
        const starsHtml = '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating);
        div.innerHTML = `
            <div class="stars">${starsHtml}</div>
            <p class="review-text">"${r.text}"</p>
            <p class="reviewer">— ${r.name}</p>
        `;
        grid.appendChild(div);
    });
    observeNewElements();
}

// ---- FAQ ACCORDION ----
function toggleFaq(btn) {
    const item = btn.parentElement;
    const answer = item.querySelector('.faq-answer');
    const isOpen = btn.classList.contains('open');

    document.querySelectorAll('.faq-question.open').forEach(openBtn => {
        openBtn.classList.remove('open');
        openBtn.parentElement.querySelector('.faq-answer').classList.remove('open');
    });

    if (!isOpen) {
        btn.classList.add('open');
        answer.classList.add('open');
    }
}

// ---- ORDER FORM ----
function handleOrder() {
    const name = document.getElementById('order-name').value.trim();
    const desc = document.getElementById('order-desc').value.trim();
    if (!name || !desc) {
        alert('Please fill in your name and item description before submitting.');
        return;
    }
    alert('Thank you, ' + name + '! We have received your request and will contact you shortly on WhatsApp or by phone.');
    document.getElementById('order-name').value = '';
    document.getElementById('order-phone').value = '';
    document.getElementById('order-category').value = '';
    document.getElementById('order-desc').value = '';
}

// ---- MOBILE MENU ----
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('nav-menu');
    if (btn && menu) {
        btn.addEventListener('click', () => menu.classList.toggle('active'));
    }
}

// ---- SCROLL ANIMATIONS ----
function observeNewElements() {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.animate-on-scroll:not(.visible)').forEach(el => observer.observe(el));
}

// ---- INIT ----
window.onload = () => {
    renderShop();
    renderReviews();
    initMobileMenu();
    observeNewElements();
};
