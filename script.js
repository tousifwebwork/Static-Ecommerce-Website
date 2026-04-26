/* ============================================================
   ShopSphere – script.js
   Full e-commerce logic: products, cart, filters, checkout
   ============================================================ */

// ─────────────────────────────────────────────
// PRODUCT DATA – 60+ products across 6 categories
// ─────────────────────────────────────────────
const products = [
  // STATIONERY (10)
  { id: 1,  name: "Premium Fountain Pen Set",         category: "Stationery", price: 699,  rating: 4.6, discount: 15, img: "https://picsum.photos/seed/pen1/400/400",     desc: "Elegant stainless steel fountain pen with ink cartridges. Smooth writing experience for professionals and students alike.", isNew: false },
  { id: 2,  name: "Hardcover Bullet Journal A5",      category: "Stationery", price: 349,  rating: 4.8, discount: 0,  img: "https://picsum.photos/seed/journal1/400/400", desc: "Dot-grid hardcover journal with 200 cream pages. Ideal for journaling, planning, and sketching.", isNew: true },
  { id: 3,  name: "Pastel Highlighter Set (6-Pack)",  category: "Stationery", price: 199,  rating: 4.5, discount: 10, img: "https://picsum.photos/seed/high1/400/400",    desc: "6 vibrant pastel highlighters in chisel tips. Perfect for notes and study sessions.", isNew: false },
  { id: 4,  name: "Geometric Pencil Case",            category: "Stationery", price: 299,  rating: 4.3, discount: 0,  img: "https://picsum.photos/seed/pcase1/400/400",   desc: "Spacious zippered pencil case with geometric pattern. Holds pens, pencils, and accessories.", isNew: false },
  { id: 5,  name: "Mechanical Pencil 0.5mm Pro",      category: "Stationery", price: 249,  rating: 4.7, discount: 5,  img: "https://picsum.photos/seed/mpencil1/400/400", desc: "Professional mechanical pencil with retractable tip. Anti-slip grip and built-in eraser.", isNew: true },
  { id: 6,  name: "Sticky Note Mega Pack (500 Pcs)",  category: "Stationery", price: 179,  rating: 4.4, discount: 0,  img: "https://picsum.photos/seed/sticky1/400/400",  desc: "500 assorted sticky notes in 5 bright colors. Strong adhesive, removes cleanly.", isNew: false },
  { id: 7,  name: "Canvas Art Sketchbook A4",         category: "Stationery", price: 449,  rating: 4.6, discount: 12, img: "https://picsum.photos/seed/sketch1/400/400",  desc: "100-page thick canvas sketchbook for pencil, ink, and watercolors.", isNew: false },
  { id: 8,  name: "Wooden Desk Organizer 5-Slot",     category: "Stationery", price: 599,  rating: 4.5, discount: 0,  img: "https://picsum.photos/seed/desk1/400/400",    desc: "Bamboo desk organizer with 5 compartments. Keeps your workspace neat and stylish.", isNew: false },
  { id: 9,  name: "Washi Tape Collection (12-Pack)",  category: "Stationery", price: 319,  rating: 4.8, discount: 8,  img: "https://picsum.photos/seed/washi1/400/400",   desc: "12 decorative washi tapes with floral and geometric patterns. Perfect for journaling.", isNew: true },
  { id: 10, name: "Ballpoint Pen Jar Set (20 Pcs)",   category: "Stationery", price: 149,  rating: 4.2, discount: 0,  img: "https://picsum.photos/seed/bpen1/400/400",    desc: "20 smooth-writing ballpoint pens in assorted colors. Great for office and home use.", isNew: false },

  // CLOTHES (10)
  { id: 11, name: "Classic Oxford Cotton Shirt",      category: "Clothes", price: 1299, rating: 4.5, discount: 20, img: "https://picsum.photos/seed/shirt1/400/400",  desc: "Crisp oxford cotton shirt with button-down collar. Versatile for formal and casual wear.", isNew: false },
  { id: 12, name: "Slim Fit Denim Jeans",             category: "Clothes", price: 1899, rating: 4.7, discount: 0,  img: "https://picsum.photos/seed/jeans1/400/400",  desc: "Slim fit stretch denim jeans with five-pocket design. Comfortable all-day wear.", isNew: true },
  { id: 13, name: "Premium Hoodie – Charcoal",        category: "Clothes", price: 1499, rating: 4.8, discount: 10, img: "https://picsum.photos/seed/hoodie1/400/400", desc: "Soft fleece-lined hoodie with kangaroo pocket. Perfect for casual and loungewear.", isNew: false },
  { id: 14, name: "Graphic Print Round Neck Tee",     category: "Clothes", price: 499,  rating: 4.3, discount: 0,  img: "https://picsum.photos/seed/tee1/400/400",    desc: "100% cotton round neck tee with unique graphic print. Comfortable and stylish.", isNew: false },
  { id: 15, name: "Cargo Shorts – Olive Green",       category: "Clothes", price: 799,  rating: 4.4, discount: 15, img: "https://picsum.photos/seed/cargo1/400/400",  desc: "Multi-pocket cargo shorts in olive green. Lightweight and breathable for summer.", isNew: true },
  { id: 16, name: "Linen Blend Kurta Set",            category: "Clothes", price: 1699, rating: 4.6, discount: 0,  img: "https://picsum.photos/seed/kurta1/400/400",  desc: "Elegant linen blend kurta with matching pants. Ideal for festivals and casual outings.", isNew: false },
  { id: 17, name: "Oversized Sweatshirt – Navy",      category: "Clothes", price: 1099, rating: 4.7, discount: 5,  img: "https://picsum.photos/seed/sweat1/400/400",  desc: "Cozy oversized sweatshirt in deep navy. Drop-shoulder design with ribbed hem.", isNew: false },
  { id: 18, name: "Chino Pants – Beige",              category: "Clothes", price: 1399, rating: 4.5, discount: 0,  img: "https://picsum.photos/seed/chino1/400/400",  desc: "Classic chino pants in beige with a straight-leg fit. Great for office and casual wear.", isNew: false },
  { id: 19, name: "Striped Polo T-Shirt",             category: "Clothes", price: 699,  rating: 4.4, discount: 10, img: "https://picsum.photos/seed/polo1/400/400",   desc: "Classic striped polo shirt with collar and buttoned placket. Soft pique cotton fabric.", isNew: true },
  { id: 20, name: "Windbreaker Jacket – Teal",        category: "Clothes", price: 2499, rating: 4.8, discount: 18, img: "https://picsum.photos/seed/jacket1/400/400", desc: "Lightweight windbreaker jacket with water-resistant coating. Ideal for outdoor activities.", isNew: false },

  // SHOES (10)
  { id: 21, name: "Air Cushion Running Sneakers",     category: "Shoes", price: 2999, rating: 4.7, discount: 20, img: "https://picsum.photos/seed/sneak1/400/400", desc: "Advanced air-cushion sole running sneakers with breathable mesh upper. Superior comfort for long runs.", isNew: true },
  { id: 22, name: "Classic White Leather Sneakers",   category: "Shoes", price: 1999, rating: 4.8, discount: 0,  img: "https://picsum.photos/seed/wsneak1/400/400",desc: "Timeless white leather sneakers with rubber sole. Pairs with almost everything in your wardrobe.", isNew: false },
  { id: 23, name: "Derby Formal Leather Shoes",       category: "Shoes", price: 3499, rating: 4.6, discount: 10, img: "https://picsum.photos/seed/derby1/400/400", desc: "Genuine leather derby shoes with cushioned insole. Perfect for formal occasions and office wear.", isNew: false },
  { id: 24, name: "Casual Slip-On Loafers",           category: "Shoes", price: 1499, rating: 4.5, discount: 0,  img: "https://picsum.photos/seed/loafer1/400/400",desc: "Comfortable slip-on loafers in soft suede finish. Easy to wear and stylish.", isNew: false },
  { id: 25, name: "High-Top Basketball Shoes",        category: "Shoes", price: 3999, rating: 4.7, discount: 15, img: "https://picsum.photos/seed/bball1/400/400", desc: "High-top basketball shoes with ankle support and non-slip sole. Designed for peak performance.", isNew: true },
  { id: 26, name: "Chunky Sole Boots – Brown",        category: "Shoes", price: 2799, rating: 4.6, discount: 0,  img: "https://picsum.photos/seed/boot1/400/400",  desc: "Trendy chunky-sole ankle boots in brown. Zipper closure with durable synthetic upper.", isNew: false },
  { id: 27, name: "Trail Hiking Shoes",               category: "Shoes", price: 2499, rating: 4.8, discount: 12, img: "https://picsum.photos/seed/hike1/400/400",   desc: "Rugged trail hiking shoes with anti-slip grip. Waterproof and breathable for outdoor adventures.", isNew: false },
  { id: 28, name: "Canvas Espadrilles – Multicolor",  category: "Shoes", price: 899,  rating: 4.3, discount: 0,  img: "https://picsum.photos/seed/espa1/400/400",  desc: "Lightweight canvas espadrilles with jute sole. Casual and colorful for summer days.", isNew: false },
  { id: 29, name: "Knit Sock Sneakers",               category: "Shoes", price: 1799, rating: 4.5, discount: 8,  img: "https://picsum.photos/seed/knit1/400/400",   desc: "Seamless knit upper sneakers with stretch fit. Ultra-lightweight and flexible for everyday wear.", isNew: true },
  { id: 30, name: "Boat Shoes – Dark Blue",           category: "Shoes", price: 1999, rating: 4.4, discount: 0,  img: "https://picsum.photos/seed/boat1/400/400",   desc: "Classic boat shoes in dark blue with non-marking sole. Great for nautical and casual looks.", isNew: false },

  // MEN (10)
  { id: 31, name: "Premium Leather Wallet",           category: "Men", price: 899,  rating: 4.7, discount: 0,  img: "https://picsum.photos/seed/wallet1/400/400", desc: "Slim bifold genuine leather wallet with RFID blocking. 6 card slots and a large bill compartment.", isNew: false },
  { id: 32, name: "Aviator Sunglasses – Gold",        category: "Men", price: 1299, rating: 4.6, discount: 15, img: "https://picsum.photos/seed/sunglass1/400/400",desc: "Classic aviator sunglasses with UV400 protection and gold metal frame. Timeless and stylish.", isNew: true },
  { id: 33, name: "Chronograph Watch – Silver",       category: "Men", price: 4999, rating: 4.8, discount: 10, img: "https://picsum.photos/seed/watch1/400/400",  desc: "Stainless steel chronograph watch with mineral crystal glass. Water resistant up to 30m.", isNew: false },
  { id: 34, name: "Men's Formal Belt – Black",        category: "Men", price: 599,  rating: 4.4, discount: 0,  img: "https://picsum.photos/seed/belt1/400/400",   desc: "Genuine leather formal belt with silver pin buckle. Ideal for office and formal events.", isNew: false },
  { id: 35, name: "Beaded Bracelet Stack Set",        category: "Men", price: 399,  rating: 4.5, discount: 5,  img: "https://picsum.photos/seed/brace1/400/400",  desc: "Set of 3 beaded bracelets in natural stone and wood. Adjustable sizing, great layering pieces.", isNew: true },
  { id: 36, name: "Canvas Backpack – Dark Olive",     category: "Men", price: 1699, rating: 4.7, discount: 20, img: "https://picsum.photos/seed/mpack1/400/400",  desc: "15L canvas backpack with laptop sleeve and multiple pockets. Durable and stylish for daily commute.", isNew: false },
  { id: 37, name: "Men's Grooming Kit",               category: "Men", price: 1099, rating: 4.6, discount: 0,  img: "https://picsum.photos/seed/groom1/400/400",  desc: "Complete grooming kit with beard trimmer, scissors, comb, and travel pouch.", isNew: false },
  { id: 38, name: "Muscle Fit Gym T-Shirt",           category: "Men", price: 499,  rating: 4.3, discount: 0,  img: "https://picsum.photos/seed/gym1/400/400",    desc: "Sweat-wicking muscle fit gym tee. Designed for performance with stretch fabric.", isNew: false },
  { id: 39, name: "Slim Fit Blazer – Navy",           category: "Men", price: 3499, rating: 4.8, discount: 25, img: "https://picsum.photos/seed/blazer1/400/400", desc: "Sharp slim-fit blazer in navy with notch lapels. Perfect for semi-formal and business events.", isNew: true },
  { id: 40, name: "Leather Card Holder Slim",         category: "Men", price: 499,  rating: 4.5, discount: 0,  img: "https://picsum.photos/seed/cardholder1/400/400", desc: "Ultra-slim genuine leather card holder. Holds up to 6 cards in a minimalist design.", isNew: false },

  // WOMEN (10)
  { id: 41, name: "Embroidered Anarkali Kurti",       category: "Women", price: 1899, rating: 4.8, discount: 15, img: "https://picsum.photos/seed/anarkali1/400/400",desc: "Beautifully embroidered anarkali kurti in cotton blend. Ideal for festive and casual occasions.", isNew: true },
  { id: 42, name: "Floral Wrap Midi Dress",           category: "Women", price: 1499, rating: 4.6, discount: 0,  img: "https://picsum.photos/seed/dress1/400/400",  desc: "Elegant floral print wrap midi dress with adjustable belt. Flattering silhouette for all body types.", isNew: false },
  { id: 43, name: "Gold Layered Necklace Set",        category: "Women", price: 799,  rating: 4.7, discount: 10, img: "https://picsum.photos/seed/necklace1/400/400",desc: "Delicate gold-tone layered necklace set with star and moon pendants.", isNew: false },
  { id: 44, name: "High-Waist Yoga Leggings",         category: "Women", price: 899,  rating: 4.8, discount: 0,  img: "https://picsum.photos/seed/legg1/400/400",   desc: "4-way stretch high-waist leggings with hidden pocket. Perfect for yoga, gym, and casual wear.", isNew: false },
  { id: 45, name: "Silk Saree – Royal Blue",          category: "Women", price: 3999, rating: 4.9, discount: 20, img: "https://picsum.photos/seed/saree1/400/400",   desc: "Stunning royal blue silk saree with zari border. Comes with a matching blouse piece.", isNew: true },
  { id: 46, name: "Women's Tote Bag – Beige",         category: "Women", price: 1299, rating: 4.5, discount: 0,  img: "https://picsum.photos/seed/tote1/400/400",   desc: "Spacious canvas tote bag with inner zip pocket and magnetic closure. Stylish and practical.", isNew: false },
  { id: 47, name: "Block Heel Sandals – Tan",         category: "Women", price: 1599, rating: 4.4, discount: 12, img: "https://picsum.photos/seed/sandal1/400/400",  desc: "Comfortable block heel sandals in tan with adjustable ankle strap. Elegant and supportive.", isNew: false },
  { id: 48, name: "Flared Palazzos – Ivory",          category: "Women", price: 799,  rating: 4.6, discount: 5,  img: "https://picsum.photos/seed/palazzo1/400/400", desc: "Breezy flared palazzo pants in ivory. Lightweight and comfortable for summer days.", isNew: true },
  { id: 49, name: "Studded Hoop Earrings",            category: "Women", price: 399,  rating: 4.5, discount: 0,  img: "https://picsum.photos/seed/earring1/400/400", desc: "Gold-plated studded hoop earrings. Lightweight and hypoallergenic for sensitive ears.", isNew: false },
  { id: 50, name: "Satin Slip Nightdress",            category: "Women", price: 1099, rating: 4.7, discount: 8,  img: "https://picsum.photos/seed/night1/400/400",   desc: "Soft satin slip nightdress with lace trim. Comfortable and luxurious sleepwear.", isNew: false },

  // KIDS (10)
  { id: 51, name: "Kids School Bag – Space Print",    category: "Kids", price: 799,  rating: 4.7, discount: 0,  img: "https://picsum.photos/seed/kidsbag1/400/400",  desc: "Spacious school bag with space-themed print. Multiple compartments and ergonomic straps.", isNew: true },
  { id: 52, name: "Building Blocks Set (200 Pcs)",    category: "Kids", price: 999,  rating: 4.8, discount: 10, img: "https://picsum.photos/seed/blocks1/400/400",   desc: "200-piece colorful building blocks set. Compatible with all major brick brands. Ages 3+.", isNew: false },
  { id: 53, name: "Children's Art Kit",               category: "Kids", price: 699,  rating: 4.6, discount: 0,  img: "https://picsum.photos/seed/artkit1/400/400",   desc: "Complete art kit with crayons, watercolors, brushes, and sketchbook. Sparks creativity in kids.", isNew: false },
  { id: 54, name: "Kids Denim Dungarees",             category: "Kids", price: 899,  rating: 4.5, discount: 15, img: "https://picsum.photos/seed/dungaree1/400/400", desc: "Adorable denim dungarees with adjustable straps. Durable and comfortable for active kids.", isNew: false },
  { id: 55, name: "Light-Up Sports Sneakers",         category: "Kids", price: 1299, rating: 4.7, discount: 0,  img: "https://picsum.photos/seed/ksneak1/400/400",   desc: "Fun light-up LED sneakers with velcro closure. Easy to wear and durable sole.", isNew: true },
  { id: 56, name: "Plush Teddy Bear – 40cm",         category: "Kids", price: 599,  rating: 4.9, discount: 5,  img: "https://picsum.photos/seed/teddy1/400/400",    desc: "Super-soft 40cm plush teddy bear. Safe for all ages. Machine washable cover.", isNew: false },
  { id: 57, name: "Kids Raincoat – Yellow",           category: "Kids", price: 699,  rating: 4.6, discount: 0,  img: "https://picsum.photos/seed/raincoat1/400/400", desc: "Bright yellow waterproof raincoat with hood. Keeps your child dry and cheerful.", isNew: false },
  { id: 58, name: "Wooden Puzzle Set – Animals",      category: "Kids", price: 449,  rating: 4.8, discount: 10, img: "https://picsum.photos/seed/puzzle1/400/400",   desc: "Colorful wooden animal puzzle set. Develops fine motor skills and problem-solving. Ages 2+.", isNew: false },
  { id: 59, name: "Kids Cycle Helmet",                category: "Kids", price: 849,  rating: 4.7, discount: 0,  img: "https://picsum.photos/seed/helmet1/400/400",   desc: "Certified kids cycle helmet with adjustable straps and ventilation. Safety-first design.", isNew: true },
  { id: 60, name: "Illustrated Story Books (Set of 5)",category:"Kids", price: 899,  rating: 4.9, discount: 8,  img: "https://picsum.photos/seed/books1/400/400",    desc: "Set of 5 beautifully illustrated story books. Age-appropriate stories that inspire imagination.", isNew: false },
];

// ─────────────────────────────────────────────
// COUPON DEFINITIONS  ← edit these anytime!
// type: 'flat'    → deducts a fixed ₹ amount
// type: 'percent' → deducts X% of subtotal (capped by maxDiscount if set)
// minOrder        → minimum cart subtotal required
// ─────────────────────────────────────────────
const COUPONS = {
  'SAVE100':   { type: 'flat',    value: 100,  minOrder: 500,  desc: '₹100 off on orders above ₹500' },
  'SAVE200':   { type: 'flat',    value: 200,  minOrder: 999,  desc: '₹200 off on orders above ₹999' },
  'SAVE500':   { type: 'flat',    value: 500,  minOrder: 2000, desc: '₹500 off on orders above ₹2000' },  'STYLE20':   { type: 'percent', value: 20,   minOrder: 1500, desc: '20% off on orders above ₹1500', maxDiscount: 800 },
  'FESTIVE25': { type: 'percent', value: 25,   minOrder: 2500, desc: '25% off on orders above ₹2500', maxDiscount: 1500 },  'BIGSALE':   { type: 'flat',    value: 300,  minOrder: 1200, desc: '₹300 off on orders above ₹1200' },
};

// ─────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem('shopsphere_cart')) || [];
let currentPage = 'home';
let activeCategory = 'All'; // used by category quick-filter from home

// Coupon state – persisted in localStorage
let appliedCoupon = JSON.parse(localStorage.getItem('shopsphere_coupon')) || null;
// appliedCoupon: { code, type, value, discount, desc } | null

function saveCoupon() {
  localStorage.setItem('shopsphere_coupon', JSON.stringify(appliedCoupon));
}

/** Calculate coupon discount given a subtotal */
function calcCouponDiscount(subtotal) {
  if (!appliedCoupon) return 0;
  const c = COUPONS[appliedCoupon.code];
  if (!c) return 0;
  if (c.type === 'flat') return Math.min(c.value, subtotal);
  if (c.type === 'percent') {
    const raw = Math.round(subtotal * c.value / 100);
    return c.maxDiscount ? Math.min(raw, c.maxDiscount) : raw;
  }
  return 0;
}

/** Apply coupon from the cart input field */
function applyCoupon() {
  const input = document.getElementById('couponInput');
  if (!input) return;
  const code = input.value.trim().toUpperCase();
  if (!code) { showToast('⚠️ Please enter a coupon code'); return; }

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const coupon   = COUPONS[code];

  if (!coupon) {
    showCouponMsg('error', '❌ Invalid coupon code. Please check and try again.');
    return;
  }
  if (subtotal < coupon.minOrder) {
    showCouponMsg('error', `❌ Minimum order of ₹${coupon.minOrder.toLocaleString('en-IN')} required for this coupon.`);
    return;
  }

  const discount = calcCouponDiscount_raw(code, subtotal);
  appliedCoupon  = { code, type: coupon.type, value: coupon.value, discount, desc: coupon.desc };
  saveCoupon();
  renderCart();
  showCouponMsg('success', `✅ Coupon <strong>${code}</strong> applied! You save ₹${discount.toLocaleString('en-IN')}`);
  showToast(`🎉 Coupon applied! ₹${discount} saved`);
}

function calcCouponDiscount_raw(code, subtotal) {
  const c = COUPONS[code];
  if (!c) return 0;
  if (c.type === 'flat') return Math.min(c.value, subtotal);
  if (c.type === 'percent') {
    const raw = Math.round(subtotal * c.value / 100);
    return c.maxDiscount ? Math.min(raw, c.maxDiscount) : raw;
  }
  return 0;
}

function removeCoupon() {
  appliedCoupon = null;
  saveCoupon();
  renderCart();
  showCouponMsg('', '');
  showToast('🗑️ Coupon removed');
}

function showCouponMsg(type, html) {
  const el = document.getElementById('couponMsg');
  if (!el) return;
  el.className = 'coupon-msg' + (type ? ' ' + type : '');
  el.innerHTML = html;
  el.style.display = html ? 'block' : 'none';
}

/** Show available coupons panel */
function toggleCouponList() {
  const panel = document.getElementById('couponListPanel');
  if (!panel) return;
  panel.classList.toggle('open');
}

function useThisCoupon(code) {
  const input = document.getElementById('couponInput');
  if (input) { input.value = code; applyCoupon(); }
  const panel = document.getElementById('couponListPanel');
  if (panel) panel.classList.remove('open');
}

// ─────────────────────────────────────────────
// PAGE NAVIGATION
// ─────────────────────────────────────────────
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  currentPage = page;

  // Update nav active state
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const map = { home: 0, products: 1, about: 2, cart: 3 };
  const links = document.querySelectorAll('.nav-link');
  if (map[page] !== undefined) links[map[page]]?.classList.add('active');

  // Close mobile nav
  document.getElementById('nav').classList.remove('open');

  // Render dynamic content
  if (page === 'products') renderProducts();
  if (page === 'cart')     renderCart();
  if (page === 'checkout') renderCheckoutSummary();

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleNav() {
  document.getElementById('nav').classList.toggle('open');
}

// ─────────────────────────────────────────────
// SCROLL HEADER SHADOW
// ─────────────────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('header').classList.toggle('scrolled', window.scrollY > 10);
});

// ─────────────────────────────────────────────
// SCROLL TO CATEGORIES (Home Page)
// ─────────────────────────────────────────────
function scrollToCategories() {
  document.getElementById('categoriesSection')?.scrollIntoView({ behavior: 'smooth' });
}

// ─────────────────────────────────────────────
// FEATURED PRODUCTS (Home Page – show 8)
// ─────────────────────────────────────────────
function renderFeatured() {
  const featured = products.filter(p => p.rating >= 4.7).slice(0, 8);
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  grid.innerHTML = featured.map(p => productCardHTML(p)).join('');
}

// ─────────────────────────────────────────────
// PRODUCTS PAGE – FILTER / SORT / RENDER
// ─────────────────────────────────────────────
function renderProducts() {
  applyFilters();
}

function applyFilters() {
  let filtered = [...products];

  // --- Category filter ---
  const checkedCats = [...document.querySelectorAll('.filter-check input:checked')]
    .map(cb => cb.value)
    .filter(v => v !== 'All');

  // If "All" is the only checked or nothing else checked → show all
  const allChecked = document.getElementById('catAll')?.checked;
  if (!allChecked && checkedCats.length > 0) {
    filtered = filtered.filter(p => checkedCats.includes(p.category));
  }
  // If activeCategory is set (from home page navigation), apply it
  if (activeCategory !== 'All') {
    filtered = filtered.filter(p => p.category === activeCategory);
    // sync checkbox
    uncheckAll();
    const cb = [...document.querySelectorAll('.filter-check input')].find(c => c.value === activeCategory);
    if (cb) {
      cb.checked = true;
      document.getElementById('catAll').checked = false;
    }
    activeCategory = 'All'; // reset after applying
  }

  // --- Price filter ---
  const priceVal = document.getElementById('priceFilter')?.value || 'all';
  if (priceVal === 'under500')   filtered = filtered.filter(p => p.price < 500);
  if (priceVal === '500-1000')   filtered = filtered.filter(p => p.price >= 500 && p.price <= 1000);
  if (priceVal === '1000-2000')  filtered = filtered.filter(p => p.price >= 1000 && p.price <= 2000);
  if (priceVal === 'above2000')  filtered = filtered.filter(p => p.price > 2000);

  // --- Sort ---
  const sortVal = document.getElementById('sortFilter')?.value || 'default';
  if (sortVal === 'price-asc')  filtered.sort((a, b) => a.price - b.price);
  if (sortVal === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  if (sortVal === 'rating')     filtered.sort((a, b) => b.rating - a.rating);
  if (sortVal === 'newest')     filtered = filtered.filter(p => p.isNew).concat(filtered.filter(p => !p.isNew));

  // --- Render ---
  const grid = document.getElementById('productsGrid');
  const count = document.getElementById('productCount');
  if (!grid) return;

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="cart-empty" style="grid-column:1/-1"><div class="empty-icon">🔍</div><h3>No products found</h3><p>Try adjusting your filters</p></div>`;
  } else {
    grid.innerHTML = filtered.map(p => productCardHTML(p)).join('');
  }
  if (count) count.textContent = `Showing ${filtered.length} product${filtered.length !== 1 ? 's' : ''}`;
}

function clearFilters() {
  // Reset checkboxes
  document.querySelectorAll('.filter-check input').forEach(cb => cb.checked = false);
  document.getElementById('catAll').checked = true;
  document.getElementById('priceFilter').value = 'all';
  document.getElementById('sortFilter').value = 'default';
  applyFilters();
}

function uncheckAll() {
  document.querySelectorAll('.filter-check input').forEach(cb => cb.checked = false);
  document.getElementById('catAll').checked = false;
}

function toggleFilterSidebar() {
  document.getElementById('filterSidebar').classList.toggle('open');
}

// ─────────────────────────────────────────────
// SEARCH FUNCTIONALITY
// ─────────────────────────────────────────────
function handleSearch() {
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  if (!query) return;

  activeCategory = 'All';
  showPage('products');

  // Wait for products page to render, then filter by search
  setTimeout(() => {
    let filtered = products.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.desc.toLowerCase().includes(query)
    );
    const grid = document.getElementById('productsGrid');
    const count = document.getElementById('productCount');
    if (!grid) return;
    if (filtered.length === 0) {
      grid.innerHTML = `<div class="cart-empty" style="grid-column:1/-1"><div class="empty-icon">🔍</div><h3>No results for "${query}"</h3><p>Try a different search term</p></div>`;
    } else {
      grid.innerHTML = filtered.map(p => productCardHTML(p)).join('');
    }
    if (count) count.textContent = `${filtered.length} result${filtered.length !== 1 ? 's' : ''} for "${query}"`;
  }, 50);
}

// Search on Enter key
document.getElementById('searchInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') handleSearch();
});

// ─────────────────────────────────────────────
// CATEGORY QUICK FILTER (from home/footer)
// ─────────────────────────────────────────────
function filterAndGo(cat) {
  activeCategory = cat;
  showPage('products');
}

// ─────────────────────────────────────────────
// PRODUCT CARD HTML
// ─────────────────────────────────────────────
function productCardHTML(p) {
  const stars = renderStars(p.rating);
  const discountBadge = p.discount > 0 ? `<span class="discount-badge">-${p.discount}%</span>` : '';
  const originalPrice = p.discount > 0 ? `<small style="text-decoration:line-through;color:#9ca3af;font-size:.75rem;display:block">₹${Math.round(p.price / (1 - p.discount/100))}</small>` : '';
  return `
    <div class="product-card" data-id="${p.id}">
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy"/>
        ${discountBadge}
        <button class="quick-view-btn" onclick="openQuickView(${p.id})">Quick View</button>
      </div>
      <div class="product-info">
        <div class="product-category">${p.category}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-rating">
          <span class="stars">${stars}</span>
          <span class="rating-num">${p.rating}</span>
        </div>
        <div class="product-price-row">
          <div>
            ${originalPrice}
            <span class="product-price">₹${p.price.toLocaleString('en-IN')}</span>
          </div>
          <button class="add-cart-btn" onclick="addToCart(${p.id})">+ Cart</button>
        </div>
      </div>
    </div>`;
}

function renderStars(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

// ─────────────────────────────────────────────
// QUICK VIEW MODAL
// ─────────────────────────────────────────────
function openQuickView(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  const stars = renderStars(p.rating);
  document.getElementById('modalContent').innerHTML = `
    <img class="modal-img" src="${p.img}" alt="${p.name}"/>
    <div class="modal-info">
      <div class="modal-cat">${p.category}</div>
      <div class="modal-name">${p.name}</div>
      <div class="modal-price">₹${p.price.toLocaleString('en-IN')}</div>
      <div class="modal-rating product-rating">
        <span class="stars">${stars}</span>
        <span class="rating-num">${p.rating} / 5</span>
      </div>
      <p class="modal-desc">${p.desc}</p>
      <button class="btn btn-primary btn-full" onclick="addToCart(${p.id}); closeModal();">Add to Cart</button>
    </div>`;
  document.getElementById('quickViewModal').classList.add('open');
}

function closeModal() {
  document.getElementById('quickViewModal').classList.remove('open');
}

// ─────────────────────────────────────────────
// CART LOGIC
// ─────────────────────────────────────────────

/** Save cart to localStorage */
function saveCart() {
  localStorage.setItem('shopsphere_cart', JSON.stringify(cart));
}

/** Add a product to cart */
function addToCart(id) {
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty++;
  } else {
    const p = products.find(x => x.id === id);
    if (p) cart.push({ id: p.id, name: p.name, category: p.category, price: p.price, img: p.img, qty: 1 });
  }
  saveCart();
  updateCartBadge();
  showToast('🛒 Added to cart!');
}

/** Remove from cart */
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCartBadge();
  renderCart();
}

/** Change quantity */
function changeQty(id, delta) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }
  saveCart();
  renderCart();
}

/** Update the cart badge in header */
function updateCartBadge() {
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  const badge = document.getElementById('cartBadge');
  badge.textContent = total;
  badge.classList.add('bump');
  setTimeout(() => badge.classList.remove('bump'), 300);
}

/** Render cart page */
function renderCart() {
  const wrap    = document.getElementById('cartItemsWrap');
  const summary = document.getElementById('cartSummary');
  if (!wrap || !summary) return;

  if (cart.length === 0) {
    // Reset coupon when cart is empty
    appliedCoupon = null; saveCoupon();
    wrap.innerHTML = `
      <div class="cart-empty">
        <div class="empty-icon">🛒</div>
        <h3>Your cart is empty</h3>
        <p>Browse our products and add something you love!</p>
        <button class="btn btn-primary" style="margin-top:20px" onclick="showPage('products')">Shop Now</button>
      </div>`;
    summary.innerHTML = '';
    summary.style.display = 'none';
    return;
  }

  // Show cart summary when items exist
  summary.style.display = 'block';

  wrap.innerHTML = cart.map(item => `
    <div class="cart-item" id="cartItem-${item.id}">
      <img class="cart-item-img" src="${item.img}" alt="${item.name}"/>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-cat">${item.category}</div>
        <div class="cart-item-price">₹${item.price.toLocaleString('en-IN')} each</div>
      </div>
      <div class="cart-item-actions">
        <div class="qty-control">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
        </div>
        <div class="cart-subtotal">₹${(item.price * item.qty).toLocaleString('en-IN')}</div>
        <button class="remove-btn" onclick="removeFromCart(${item.id})">✕ Remove</button>
      </div>
    </div>`).join('');

  const subtotal       = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const couponDiscount = calcCouponDiscount(subtotal);
  const delivery       = subtotal >= 999 ? 0 : 50;
  const grandTotal     = subtotal - couponDiscount + delivery;






    
  // ── Coupon input or applied badge ──
  const couponHTML = appliedCoupon
    ? `<div class="coupon-applied">
         <span class="coupon-applied-tag">🏷️ <strong>${appliedCoupon.code}</strong> – ${appliedCoupon.desc}</span>
         <button class="coupon-remove-btn" onclick="removeCoupon()">✕ Remove</button>
       </div>
       <div id="couponMsg" class="coupon-msg success" style="display:block">
         ✅ You saved <strong>₹${couponDiscount.toLocaleString('en-IN')}</strong> with this coupon!
       </div>`
    : `<!-- Coupon Box -->
       <div class="coupon-box">
         <div class="coupon-box-header">
           <span class="coupon-label">🏷️ Have a coupon?</span>
           <button class="coupon-see-all" onclick="toggleCouponList()">See available coupons ▾</button>
         </div>

         <div class="coupon-input-row">
           <input type="text" id="couponInput" placeholder="coupon?" autocomplete="off"
             onkeypress="if(event.key==='Enter') applyCoupon()"
             oninput="this.value=this.value.toUpperCase()"/>
           <button class="btn btn-primary btn-sm coupon-apply-btn" onclick="applyCoupon()">Apply</button>
         </div>

         <div id="couponMsg" class="coupon-msg" style="display:none"></div>
         <!-- Available Coupons Panel -->
         <div class="coupon-list-panel" id="couponListPanel">
           <p class="coupon-list-title">Available Coupons</p>
           ${Object.entries(COUPONS).map(([code, c]) => `
             <div class="coupon-list-item">
               <div class="coupon-list-left">
                 <span class="coupon-code-chip">${code}</span>
                 <span class="coupon-list-desc">${c.desc}${c.minOrder > 0 ? '' : ''}</span>
               </div>
               <button class="coupon-use-btn" onclick="useThisCoupon('${code}')">Use</button>
             </div>`).join('')}
         </div>
       </div>`;

  summary.innerHTML = `
    <h3>Order Summary</h3>
    <div class="summary-row"><span>Subtotal (${cart.length} item${cart.length !== 1 ? 's' : ''})</span><span>₹${subtotal.toLocaleString('en-IN')}</span></div>
    ${couponDiscount > 0 ? `<div class="summary-row coupon-saving"><span>🏷️ Coupon Discount</span><span style="color:#16a34a">− ₹${couponDiscount.toLocaleString('en-IN')}</span></div>` : ''}
    <div class="summary-row"><span>Delivery Charges</span><span>${delivery === 0 ? '<span style="color:#16a34a">FREE</span>' : '₹' + delivery}</span></div>
    <div class="summary-row total"><span>Grand Total</span><span>₹${grandTotal.toLocaleString('en-IN')}</span></div>
    ${delivery > 0 ? `<p style="font-size:.75rem;color:var(--text-muted);margin-top:6px">Add ₹${(999 - subtotal).toLocaleString('en-IN')} more for FREE delivery</p>` : ''}
    <div class="coupon-section">${couponHTML}</div>
    <button class="btn btn-primary btn-full" onclick="proceedToCheckout()">Proceed to Checkout →</button>
    <button class="btn btn-ghost btn-full" style="margin-top:10px" onclick="showPage('products')">Continue Shopping</button>`;
}

function proceedToCheckout() {
  if (cart.length === 0) { showToast('Your cart is empty!'); return; }
  showPage('checkout');
}

// ─────────────────────────────────────────────
// CHECKOUT PAGE
// ─────────────────────────────────────────────
function renderCheckoutSummary() {
  const el = document.getElementById('checkoutSummary');
  if (!el) return;
  const subtotal       = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const couponDiscount = calcCouponDiscount(subtotal);
  const delivery       = subtotal >= 999 ? 0 : 50;
  const grandTotal     = subtotal - couponDiscount + delivery;

  el.innerHTML = `
    <h3>Your Order (${cart.length} item${cart.length !== 1 ? 's' : ''})</h3>
    ${cart.map(item => `
      <div class="checkout-item">
        <img src="${item.img}" alt="${item.name}"/>
        <div class="checkout-item-info">
          <strong>${item.name}</strong>
          <span>Qty: ${item.qty} &nbsp;•&nbsp; ₹${(item.price * item.qty).toLocaleString('en-IN')}</span>
        </div>
      </div>`).join('')}
    <div class="summary-row" style="margin-top:16px;"><span>Subtotal</span><span>₹${subtotal.toLocaleString('en-IN')}</span></div>
    ${couponDiscount > 0 ? `<div class="summary-row coupon-saving"><span>🏷️ Coupon (${appliedCoupon.code})</span><span style="color:#16a34a">− ₹${couponDiscount.toLocaleString('en-IN')}</span></div>` : ''}
    <div class="summary-row"><span>Delivery</span><span>${delivery === 0 ? 'FREE' : '₹' + delivery}</span></div>
    <div class="summary-row total"><span>Total</span><span>₹${grandTotal.toLocaleString('en-IN')}</span></div>`;
}

/** Place Order */
function placeOrder(e) {
  e.preventDefault();

  const name    = document.getElementById('cName').value.trim();
  const phone   = document.getElementById('cPhone').value.trim();
  const address = document.getElementById('cAddress').value.trim();
  const city    = document.getElementById('cCity').value.trim();
  const pin     = document.getElementById('cPin').value.trim();

  // Validate
  let valid = true;
  [['cName', name], ['cPhone', phone], ['cAddress', address], ['cCity', city], ['cPin', pin]].forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (!val) { el.classList.add('error'); valid = false; }
    else el.classList.remove('error');
  });
  if (!valid) { showToast('⚠️ Please fill all required fields'); return; }
  if (!/^\d{10}$/.test(phone)) { document.getElementById('cPhone').classList.add('error'); showToast('⚠️ Enter a valid 10-digit phone number'); return; }
  if (!/^\d{6}$/.test(pin))    { document.getElementById('cPin').classList.add('error'); showToast('⚠️ Enter a valid 6-digit pincode'); return; }

  const orderId        = 'SS' + Date.now().toString().slice(-8).toUpperCase();
  const subtotal       = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const couponDiscount = calcCouponDiscount(subtotal);
  const delivery       = subtotal >= 999 ? 0 : 50;
  const grandTotal     = subtotal - couponDiscount + delivery;

  // Show success modal
  const orderDetails = document.getElementById('orderDetails');
  const orderModal = document.getElementById('orderModal');
  
  if (orderDetails && orderModal) {
    orderDetails.innerHTML = `
      <div class="order-detail">
        <p>🆔 <strong>Order ID:</strong> ${orderId}</p>
        <p>🛒 <strong>Subtotal:</strong> ₹${subtotal.toLocaleString('en-IN')}</p>
        ${couponDiscount > 0 ? `<p>🏷️ <strong>Coupon Savings:</strong> <span style="color:#16a34a">− ₹${couponDiscount.toLocaleString('en-IN')}</span></p>` : ''}
        <p>💰 <strong>Total Pay:</strong> ₹${grandTotal.toLocaleString('en-IN')}</p>
        <p>💵 <strong>Payment:</strong> Cash on Delivery</p>
        <p>📦 <strong>Delivery to:</strong> ${address}, ${city} – ${pin}</p>
        <p style="margin-top:10px;color:#16a34a;font-weight:600">🚚 Your order will arrive in 3–5 business days</p>
      </div>`;
    orderModal.classList.add('open');
    
    // Clear cart and coupon after a brief delay to ensure modal displays
    setTimeout(() => {
      cart = [];
      appliedCoupon = null;
      saveCart();
      saveCoupon();
      updateCartBadge();
      document.getElementById('checkoutForm').reset();
    }, 100);
  } else {
    showToast('⚠️ Error displaying order confirmation. Please try again.');
  }
}

function closeOrderModal() {
  const orderModal = document.getElementById('orderModal');
  if (orderModal) {
    orderModal.classList.remove('open');
  }
  showPage('home');
}

// ─────────────────────────────────────────────
// TOAST NOTIFICATION
// ─────────────────────────────────────────────
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

// ─────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────
function init() {
  updateCartBadge();
  renderFeatured();
  showPage('home');
}

init();
