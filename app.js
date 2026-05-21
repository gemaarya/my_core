// ============================================================
//  app.js  —  Website Logic
//  You do NOT need to edit this file.
//  All your content lives in data.js
// ============================================================


// ── NAV: shrink on scroll ──────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});


// ── MOBILE MENU toggle ────────────────────────────────────
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('open');
  const isOpen = document.getElementById('mobileMenu').classList.contains('open');
  document.body.style.overflow = isOpen ? 'hidden' : '';
}


// ── HERO: morphing word animation ────────────────────────
const MORPH_WORDS = ['Remember', 'Inspire', 'Cherish', 'Surprise', 'Celebrate', 'Delight'];
let morphIdx = 0;
function cycleMorph() {
  morphIdx = (morphIdx + 1) % MORPH_WORDS.length;
  const el = document.getElementById('morphWord');
  el.style.animation = 'none';
  el.textContent = MORPH_WORDS[morphIdx];
  void el.offsetWidth; // force reflow to restart animation
  el.style.animation = 'morphWord 2s ease-in-out infinite';
}
setInterval(cycleMorph, 2000);


// ── SCROLL FADE-IN (Intersection Observer) ────────────────
function observeFadeIns() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => observer.observe(el));
}


// ── PRODUCTS: render tab buttons ─────────────────────────
let currentCategory = CATEGORIES[0].id;

function renderTabs() {
  const container = document.getElementById('tabPills');
  container.innerHTML = CATEGORIES.map(cat => `
    <div
      class="tab-pill ${cat.id === currentCategory ? 'active' : ''}"
      onclick="switchTab('${cat.id}')"
    >${cat.label}</div>
  `).join('');
}

function switchTab(id) {
  currentCategory = id;
  renderTabs();
  renderProducts();
}


// ── PRODUCTS: render product cards ───────────────────────
// Background colors for emoji thumbnails
const THUMB_BG = {
  '🎂':'#1a0a2e','💑':'#1a0a1a','🎊':'#0a1a2e','🤝':'#0a1a0a','🥳':'#1a1a0a',
  '🎓':'#0a0a1a','🏫':'#1a0a0a','💍':'#1a0a1a','🪔':'#1a0a00','✨':'#0a0a1a',
  '⛪':'#0a1a1a','🕌':'#0a1a0a','🙏':'#1a1a00','💛':'#1a1400','🌸':'#1a0a10',
  '🎶':'#0a0a1a','🥂':'#1a0a0a','👶':'#0a1018','🍼':'#0a1018','🌟':'#0a0a1a',
  '📿':'#0a0a1a','☮️':'#0a1a0a','🌿':'#0a1a0a','💔':'#1a0000','🥀':'#1a0005',
  '💝':'#1a000a','🎁':'#0a1a1a','💃':'#1a0a0a','🌙':'#0a0a18','🎄':'#001a00',
  '🎆':'#0a0a18','❤️':'#1a0000','🧡':'#1a0800',
};

function renderProducts() {
  const cat = CATEGORIES.find(c => c.id === currentCategory);
  const container = document.getElementById('productsGrid');

  container.innerHTML = cat.products.map(p => {
    // Thumbnail: image if provided, otherwise emoji
    const thumbContent = p.thumb
      ? `<img src="${p.thumb}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;position:relative;z-index:1">`
      : `<span style="position:relative;z-index:1;font-size:56px">${p.emoji}</span>`;

    const bg = THUMB_BG[p.emoji] || '#0d0a1a';

    // View Demo button: active if demo link exists, disabled if not
    const demoBtn = p.demo
      ? `<button class="btn-sm-outline" onclick="window.open('${p.demo}','_blank')">View Demo</button>`
      : `<button class="btn-sm-outline" disabled title="Demo coming soon">View Demo</button>`;

    // Price display: show original crossed out + discount %
    let priceHTML = '';
    if (p.origPrice) {
      const origNum = parseInt(p.origPrice.replace(/[^\d]/g,''));
      const newNum  = parseInt(p.price.replace(/[^\d]/g,''));
      const offPct  = origNum > 0 ? Math.round((1 - newNum/origNum)*100) : 0;
      priceHTML = `
        <div class="product-price-wrap">
          <span class="product-price-new">${p.price}</span>
          <span class="product-price-orig">${p.origPrice}</span>
          ${offPct > 0 ? `<span class="product-price-badge">${offPct}% OFF</span>` : ''}
        </div>`;
    } else {
      priceHTML = `<div class="product-price-wrap"><span class="product-price-new">${p.price}</span></div>`;
    }

    const enquiryPrice = p.price + (p.origPrice ? ' (was ' + p.origPrice + ')' : '');

    return `
      <div class="product-card fade-in">
        <div class="product-thumb" style="background:${bg}">
          ${thumbContent}
        </div>
        <div class="product-info">
          <div class="product-name">${p.name}</div>
          <div class="product-desc">${p.desc}</div>
          ${priceHTML}
          <div class="product-btns">
            ${demoBtn}
            <button class="btn-sm-gold" onclick="openEnquiry('${p.name.replace(/'/g,"\\'")}', '${enquiryPrice.replace(/'/g,"\\'")}')">Enquire Now</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  observeFadeIns();
}


// ── REVIEWS: render review cards ──────────────────────────
function renderReviews() {
  const container = document.getElementById('reviewsGrid');
  container.innerHTML = REVIEWS.map(r => `
    <div class="review-card fade-in">
      <div class="stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</div>
      <p class="review-quote">"${r.quote}"</p>
      <div class="reviewer">
        <div class="avatar">${r.initials}</div>
        <div>
          <div class="reviewer-name">${r.name}</div>
          <div class="reviewer-event">${r.event}</div>
        </div>
      </div>
    </div>
  `).join('');
}


// ── FAQ: render accordion ────────────────────────────────
function renderFAQ() {
  const container = document.getElementById('faqList');
  container.innerHTML = FAQS.map((f, i) => `
    <div class="faq-item" id="faq-${i}">
      <div class="faq-q" onclick="toggleFAQ(${i})">
        <span>${f.q}</span>
        <span class="faq-icon">+</span>
      </div>
      <div class="faq-a">
        <div class="faq-a-inner">${f.a}</div>
      </div>
    </div>
  `).join('');
}

function toggleFAQ(i) {
  document.getElementById('faq-' + i).classList.toggle('open');
}


// ── ENQUIRY MODAL ─────────────────────────────────────────
let currentProduct = null;

function openEnquiry(name, price) {
  currentProduct = { name, price };
  document.getElementById('enquiryProductName').textContent = name + ' — ' + price;
  document.getElementById('enquiryName').value = '';
  document.getElementById('enquiryDate').value = '';
  document.getElementById('enquiryNote').value = '';
  document.getElementById('enquiryModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeEnquiry() {
  document.getElementById('enquiryModal').classList.remove('open');
  document.body.style.overflow = '';
}

function sendEnquiryWhatsApp() {
  const name  = document.getElementById('enquiryName').value.trim();
  const date  = document.getElementById('enquiryDate').value;
  const note  = document.getElementById('enquiryNote').value.trim();

  if (!name) { alert('Please enter your name.'); return; }

  const product = currentProduct ? currentProduct.name  : 'a product';
  const price   = currentProduct ? currentProduct.price : '';

  let msg = `Hi geminvite! 🎉\n\nI'm interested in: *${product}* (${price})\n\nMy Name: ${name}`;
  if (date) msg += `\nEvent Date: ${date}`;
  if (note) msg += `\n\nSpecial Requirements:\n${note}`;
  msg += `\n\nPlease share more details. Thank you!`;

  window.open(CONTACT.whatsapp + '?text=' + encodeURIComponent(msg), '_blank');
  closeEnquiry();
}

document.getElementById('enquiryModal').addEventListener('click', function(e) {
  if (e.target === this) closeEnquiry();
});


// ── REVIEW MODAL ──────────────────────────────────────────
let selectedRating = 0;

function openReviewModal() {
  selectedRating = 0;
  document.getElementById('reviewName').value  = '';
  document.getElementById('reviewEvent').value = '';
  document.getElementById('reviewText').value  = '';
  updateStarDisplay(0);
  document.getElementById('reviewModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeReviewModal() {
  document.getElementById('reviewModal').classList.remove('open');
  document.body.style.overflow = '';
}

function setRating(val) {
  selectedRating = val;
  updateStarDisplay(val);
}

function updateStarDisplay(val) {
  document.querySelectorAll('.star-btn').forEach(s => {
    s.classList.toggle('lit', parseInt(s.dataset.val) <= val);
  });
}


function submitReview() {
  const name  = document.getElementById('reviewName').value.trim();
  const event = document.getElementById('reviewEvent').value.trim();
  const text  = document.getElementById('reviewText').value.trim();

  if (!name)           { alert('Please enter your name.'); return; }
  if (!text)           { alert('Please write your review.'); return; }
  if (!selectedRating) { alert('Please select a star rating.'); return; }

  // Add to REVIEWS array
  REVIEWS.unshift({
    stars:    selectedRating,
    quote:    text,
    initials: name.substring(0,2).toUpperCase(),
    name:     name,
    event:    event || 'Happy Customer',
  });

  renderReviews();       // re-render the grid
  observeFadeIns();
  closeReviewModal();
  alert('Thank you! Your review is now live ⭐');
}

document.getElementById('reviewModal').addEventListener('click', function(e) {
  if (e.target === this) closeReviewModal();
});


// ── POLICY MODAL ──────────────────────────────────────────
function openPolicy(key) {
  const policy = POLICIES[key];
  document.getElementById('policyTitle').textContent  = policy.title;
  document.getElementById('policyContent').innerHTML  = policy.content;
  document.getElementById('policyModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePolicy() {
  document.getElementById('policyModal').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('policyModal').addEventListener('click', function(e) {
  if (e.target === this) closePolicy();
});


// ── INITIALISE EVERYTHING ────────────────────────────────
renderTabs();
renderProducts();
renderReviews();
renderFAQ();
observeFadeIns();