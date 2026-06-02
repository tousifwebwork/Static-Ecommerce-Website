/* ============================================================
   ShopSphere – script.js
   Full e-commerce logic: products, cart, filters, checkout
   ============================================================ */

// ─────────────────────────────────────────────
// PRODUCT DATA – 60+ products across 6 categories
// ─────────────────────────────────────────────
  
const products = [
  {
    id: 1,
    name: "Apple iPhone 16",
    category: "Apple",
    price: 79999,
    rating: 4.8,
    discount: 10,
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16.jpg",
    desc: "Apple iPhone 16 with A18 chip, advanced camera system, and all-day battery life.",
    isNew: true
  },
  {
    id: 2,
    name: "Apple iPhone 16 Plus",
    category: "Apple",
    price: 89999,
    rating: 4.8,
    discount: 8,
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-plus.jpg",
    desc: "Large 6.7-inch Super Retina display with powerful A18 performance.",
    isNew: true
  },
  {
    id: 3,
    name: "Apple iPhone 16 Pro",
    category: "Apple",
    price: 119999,
    rating: 4.9,
    discount: 5,
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro.jpg",
    desc: "Titanium design with ProMotion display and professional camera system.",
    isNew: true
  },
  {
    id: 4,
    name: "Apple iPhone 16 Pro Max",
    category: "Apple",
    price: 144999,
    rating: 5.0,
    discount: 5,
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro-max.jpg",
    desc: "Apple flagship smartphone with premium camera and exceptional battery life.",
    isNew: true
  },
  {
    id: 5,
    name: "Apple iPhone 15",
    category: "Apple",
    price: 69999,
    rating: 4.7,
    discount: 12,
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15.jpg",
    desc: "Dynamic Island, A16 Bionic chip, and excellent dual-camera setup.",
    isNew: false
  },
  {
    id: 6,
    name: "Apple iPhone 15 Plus",
    category: "Apple",
    price: 79999,
    rating: 4.7,
    discount: 10,
    img: "https://i.pinimg.com/564x/14/7e/52/147e52bd313338ecfb911a0fbc758ad3.jpg",
    desc: "Large display iPhone with long-lasting battery and premium design.",
    isNew: false
  },
  {
    id: 7,
    name: "Apple iPhone 15 Pro",
    category: "Apple",
    price: 114999,
    rating: 4.9,
    discount: 8,
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro.jpg",
    desc: "Powerful A17 Pro chip and lightweight titanium construction.",
    isNew: false
  },
  {
    id: 8,
    name: "Apple iPhone 15 Pro Max",
    category: "Apple",
    price: 134999,
    rating: 4.9,
    discount: 7,
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg",
    desc: "Premium flagship with advanced zoom camera and stunning display.",
    isNew: false
  },
  {
    id: 9,
    name: "Apple iPhone 14",
    category: "Apple",
    price: 59999,
    rating: 4.6,
    discount: 15,
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14.jpg",
    desc: "Reliable iPhone with A15 Bionic processor and excellent performance.",
    isNew: false
  },
  {
    id: 10,
    name: "Apple iPhone SE 4",
    category: "Apple",
    price: 49999,
    rating: 4.5,
    discount: 10,
    img: "https://www.mobileana.com/wp-content/uploads/2024/10/Apple-iPhone-SE-2024.webp",
    desc: "Compact and affordable iPhone powered by Apple silicon.",
    isNew: true
  },
  {
    id: 11,
    name: "Samsung Galaxy S25",
    category: "Samsung",
    price: 84999,
    rating: 4.8,
    discount: 10,
    img: "https://suprememobiles.in/cdn/shop/files/5_492b6352-ad5e-422b-85a1-d66fe4fd2915.webp?v=1770380996",
    desc: "Premium Samsung flagship with Galaxy AI and Dynamic AMOLED display.",
    isNew: true
  },
  {
    id: 12,
    name: "Samsung Galaxy S25+",
    category: "Samsung",
    price: 99999,
    rating: 4.8,
    discount: 8,
    img: "https://suprememobiles.in/cdn/shop/files/5_492b6352-ad5e-422b-85a1-d66fe4fd2915.webp?v=1770380996",
    desc: "Large-screen flagship smartphone with premium build quality.",
    isNew: true
  },
  {
    id: 13,
    name: "Samsung Galaxy S25 Ultra",
    category: "Samsung",
    price: 139999,
    rating: 5.0,
    discount: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qMA58uDoFaHAuH_uk1lpPkiKt-TKfDmVnQ&s",
    desc: "Ultimate Samsung flagship with S-Pen and pro-grade cameras.",
    isNew: true
  },
  {
    id: 14,
    name: "Samsung Galaxy S24",
    category: "Samsung",
    price: 74999,
    rating: 4.7,
    discount: 12,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1wHCjPQBb4xlohIbJKn7G4sBUBesgflwTJg&s",
    desc: "Galaxy AI features combined with flagship-level performance.",
    isNew: false
  },
  {
    id: 15,
    name: "Samsung Galaxy S24+",
    category: "Samsung",
    price: 89999,
    rating: 4.8,
    discount: 10,
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-plus.jpg",
    desc: "Premium Samsung smartphone with immersive AMOLED display.",
    isNew: false
  },
  {
    id: 16,
    name: "Samsung Galaxy S24 Ultra",
    category: "Samsung",
    price: 129999,
    rating: 4.9,
    discount: 8,
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra.jpg",
    desc: "200MP camera, S-Pen support, and exceptional battery life.",
    isNew: false
  },
  {
    id: 17,
    name: "Samsung Galaxy A55",
    category: "Samsung",
    price: 39999,
    rating: 4.6,
    discount: 15,
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a55.jpg",
    desc: "Mid-range Samsung smartphone with premium design and cameras.",
    isNew: true
  },
  {
    id: 18,
    name: "Samsung Galaxy A35",
    category: "Samsung",
    price: 29999,
    rating: 4.5,
    discount: 12,
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a35.jpg",
    desc: "Affordable Samsung phone with AMOLED display and solid performance.",
    isNew: false
  },
  {
    id: 19,
    name: "Samsung Galaxy M55",
    category: "Samsung",
    price: 27999,
    rating: 4.5,
    discount: 10,
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m55.jpg",
    desc: "Powerful battery-focused smartphone with fast charging support.",
    isNew: true
  },
  {
    id: 20,
    name: "Samsung Galaxy F55",
    category: "Samsung",
    price: 25999,
    rating: 4.4,
    discount: 10,
    img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-f55.jpg",
    desc: "Stylish Samsung smartphone with vegan leather finish and 5G support.",
    isNew: true
  },
  {
    id: 21,
    name: "realme GT 7 Pro",
    category: "RealME",
    price: 54999,
    rating: 4.8,
    discount: 10,
    img: "https://fdn2.gsmarena.com/vv/bigpic/realme-gt7-pro.jpg",
    desc: "Flagship realme smartphone with Snapdragon processor and ultra-fast charging.",
    isNew: true
  },
  {
    id: 22,
    name: "realme GT 6",
    category: "RealME",
    price: 39999,
    rating: 4.7,
    discount: 12,
    img: "https://fdn2.gsmarena.com/vv/bigpic/realme-gt6.jpg",
    desc: "Powerful performance smartphone with premium AMOLED display.",
    isNew: true
  },
  {
    id: 23,
    name: "realme GT Neo 6",
    category: "RealME",
    price: 34999,
    rating: 4.7,
    discount: 10,
    img: "https://fdn2.gsmarena.com/vv/bigpic/realme-gt-neo6.jpg",
    desc: "Gaming-focused smartphone with smooth display and fast charging.",
    isNew: true
  },
  {
    id: 24,
    name: "realme 14 Pro+",
    category: "RealME",
    price: 32999,
    rating: 4.6,
    discount: 15,
    img: "https://fdn2.gsmarena.com/vv/bigpic/realme-14-pro-plus.jpg",
    desc: "Premium mid-range smartphone with advanced camera features.",
    isNew: true
  },
  {
    id: 25,
    name: "realme 14 Pro",
    category: "RealME",
    price: 28999,
    rating: 4.6,
    discount: 10,
    img: "https://fdn2.gsmarena.com/vv/bigpic/realme-14-pro.jpg",
    desc: "Elegant design with powerful processor and long-lasting battery.",
    isNew: true
  },
  {
    id: 26,
    name: "realme Narzo 80 Pro",
    category: "RealME",
    price: 24999,
    rating: 4.5,
    discount: 10,
    img: "https://fdn2.gsmarena.com/vv/bigpic/realme-narzo-80-pro.jpg",
    desc: "Performance-centric smartphone built for gaming and multitasking.",
    isNew: true
  },
  {
    id: 27,
    name: "realme Narzo 80x",
    category: "RealME",
    price: 18999,
    rating: 4.4,
    discount: 12,
    img: "https://fdn2.gsmarena.com/vv/bigpic/realme-narzo-80x.jpg",
    desc: "Affordable 5G smartphone with smooth display and reliable battery.",
    isNew: false
  },
  {
    id: 28,
    name: "realme 13+ 5G",
    category: "RealME",
    price: 21999,
    rating: 4.5,
    discount: 10,
    img: "https://fdn2.gsmarena.com/vv/bigpic/realme-13-plus.jpg",
    desc: "Stylish smartphone with strong camera performance and 5G support.",
    isNew: false
  },
  {
    id: 29,
    name: "realme C75",
    category: "RealME",
    price: 14999,
    rating: 4.3,
    discount: 8,
    img: "https://fdn2.gsmarena.com/vv/bigpic/realme-c75.jpg",
    desc: "Budget-friendly smartphone with large battery and modern design.",
    isNew: false
  },
  {
    id: 30,
    name: "realme C67 5G",
    category: "RealME",
    price: 12999,
    rating: 4.3,
    discount: 10,
    img: "https://fdn2.gsmarena.com/vv/bigpic/realme-c67-5g.jpg",
    desc: "Entry-level 5G smartphone offering great value for money.",
    isNew: false
  },
  {
    id: 31,
    name: "Oppo Find X8 Ultra",
    category: "Oppo",
    price: 99999,
    rating: 4.9,
    discount: 5,
    img: "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x8-ultra.jpg",
    desc: "Premium Oppo flagship with advanced camera technology and elegant design.",
    isNew: true
  },
  {
    id: 32,
    name: "Oppo Find X8 Pro",
    category: "Oppo",
    price: 84999,
    rating: 4.8,
    discount: 8,
    img: "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x8-pro.jpg",
    desc: "Flagship smartphone with exceptional cameras and AMOLED display.",
    isNew: true
  },
  {
    id: 33,
    name: "Oppo Find X8",
    category: "Oppo",
    price: 69999,
    rating: 4.8,
    discount: 10,
    img: "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x8.jpg",
    desc: "High-end smartphone with premium build quality and smooth performance.",
    isNew: true
  },
  {
    id: 34,
    name: "Oppo Reno 13 Pro",
    category: "Oppo",
    price: 49999,
    rating: 4.7,
    discount: 10,
    img: "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno13-pro.jpg",
    desc: "Camera-focused smartphone with AI photography features.",
    isNew: true
  },
  {
    id: 35,
    name: "Oppo Reno 13",
    category: "Oppo",
    price: 39999,
    rating: 4.6,
    discount: 12,
    img: "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno13.jpg",
    desc: "Premium mid-range smartphone with stylish design and strong cameras.",
    isNew: true
  },
  {
    id: 36,
    name: "Oppo Reno 12 Pro",
    category: "Oppo",
    price: 45999,
    rating: 4.7,
    discount: 10,
    img: "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno12-pro.jpg",
    desc: "Smooth performance smartphone with AI-powered photography.",
    isNew: false
  },
  {
    id: 37,
    name: "Oppo Reno 12",
    category: "Oppo",
    price: 34999,
    rating: 4.5,
    discount: 15,
    img: "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno12.jpg",
    desc: "Balanced smartphone with vibrant display and dependable battery.",
    isNew: false
  },
  {
    id: 38,
    name: "Oppo F29 Pro",
    category: "Oppo",
    price: 28999,
    rating: 4.5,
    discount: 10,
    img: "https://fdn2.gsmarena.com/vv/bigpic/oppo-f29-pro.jpg",
    desc: "Performance-oriented smartphone with sleek design and 5G support.",
    isNew: true
  },
  {
    id: 39,
    name: "Oppo A5 Pro",
    category: "Oppo",
    price: 19999,
    rating: 4.4,
    discount: 12,
    img: "https://fdn2.gsmarena.com/vv/bigpic/oppo-a5-pro.jpg",
    desc: "Affordable smartphone with large battery and reliable performance.",
    isNew: false
  },
  {
    id: 40,
    name: "Oppo A3x 5G",
    category: "Oppo",
    price: 14999,
    rating: 4.3,
    discount: 10,
    img: "https://fdn2.gsmarena.com/vv/bigpic/oppo-a3x.jpg",
    desc: "Entry-level 5G smartphone designed for everyday use.",
    isNew: false
  },
  {
    id: 41,
    name: "Vivo X200 Ultra",
    category: "Vivo",
    price: 99999,
    rating: 4.9,
    discount: 5,
    img: "https://fdn2.gsmarena.com/vv/bigpic/vivo-x200-ultra.jpg",
    desc: "Premium Vivo flagship with ZEISS cameras and cutting-edge performance.",
    isNew: true
  },
  {
    id: 42,
    name: "Vivo X200 Pro",
    category: "Vivo",
    price: 84999,
    rating: 4.8,
    discount: 8,
    img: "https://fdn2.gsmarena.com/vv/bigpic/vivo-x200-pro.jpg",
    desc: "Flagship smartphone featuring professional photography capabilities.",
    isNew: true
  },
  {
    id: 43,
    name: "Vivo X200",
    category: "Vivo",
    price: 69999,
    rating: 4.8,
    discount: 10,
    img: "https://fdn2.gsmarena.com/vv/bigpic/vivo-x200.jpg",
    desc: "Powerful flagship device with premium AMOLED display and 5G support.",
    isNew: true
  },
  {
    id: 44,
    name: "Vivo V50 Pro",
    category: "Vivo",
    price: 49999,
    rating: 4.7,
    discount: 10,
    img: "https://fdn2.gsmarena.com/vv/bigpic/vivo-v50-pro.jpg",
    desc: "Stylish smartphone with advanced camera features and fast charging.",
    isNew: true
  },
  {
    id: 45,
    name: "Vivo V50",
    category: "Vivo",
    price: 39999,
    rating: 4.6,
    discount: 12,
    img: "https://fdn2.gsmarena.com/vv/bigpic/vivo-v50.jpg",
    desc: "Premium mid-range smartphone with elegant design and strong performance.",
    isNew: true
  },
  {
    id: 46,
    name: "Vivo V40 Pro",
    category: "Vivo",
    price: 45999,
    rating: 4.7,
    discount: 10,
    img: "https://fdn2.gsmarena.com/vv/bigpic/vivo-v40-pro.jpg",
    desc: "ZEISS-powered camera smartphone with premium curved display.",
    isNew: false
  },
  {
    id: 47,
    name: "Vivo V40",
    category: "Vivo",
    price: 34999,
    rating: 4.5,
    discount: 15,
    img: "https://fdn2.gsmarena.com/vv/bigpic/vivo-v40.jpg",
    desc: "Balanced smartphone offering excellent camera quality and battery life.",
    isNew: false
  },
  {
    id: 48,
    name: "Vivo T4 Ultra",
    category: "Vivo",
    price: 29999,
    rating: 4.5,
    discount: 10,
    img: "https://fdn2.gsmarena.com/vv/bigpic/vivo-t4-ultra.jpg",
    desc: "Performance-focused smartphone with smooth display and gaming features.",
    isNew: true
  },
  {
    id: 49,
    name: "Vivo Y300 Pro",
    category: "Vivo",
    price: 21999,
    rating: 4.4,
    discount: 12,
    img: "https://fdn2.gsmarena.com/vv/bigpic/vivo-y300-pro.jpg",
    desc: "Affordable 5G smartphone with dependable performance and camera setup.",
    isNew: false
  },
  {
    id: 50,
    name: "Vivo Y200 5G",
    category: "Vivo",
    price: 17999,
    rating: 4.3,
    discount: 10,
    img: "https://fdn2.gsmarena.com/vv/bigpic/vivo-y200-5g.jpg",
    desc: "Budget-friendly 5G smartphone with sleek design and long battery life.",
    isNew: false
  },
  {
    id: 51,
    name: "OnePlus 14 Ultra",
    category: "OnePlus",
    price: 99999,
    rating: 5.0,
    discount: 5,
    img: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-13.jpg",
    desc: "Ultimate OnePlus flagship with premium cameras and top-tier performance.",
    isNew: true
  },
  {
    id: 52,
    name: "OnePlus 14 Pro",
    category: "OnePlus",
    price: 84999,
    rating: 4.9,
    discount: 8,
    img: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-13.jpg",
    desc: "Flagship smartphone featuring Snapdragon processor and AMOLED display.",
    isNew: true
  },
  {
    id: 53,
    name: "OnePlus 14",
    category: "OnePlus",
    price: 69999,
    rating: 4.8,
    discount: 10,
    img: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-14.jpg",
    desc: "Premium smartphone with OxygenOS and powerful hardware.",
    isNew: true
  },
  {
    id: 54,
    name: "OnePlus 13",
    category: "OnePlus",
    price: 64999,
    rating: 4.8,
    discount: 10,
    img: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-13.jpg",
    desc: "High-performance flagship with exceptional battery life and cameras.",
    isNew: true
  },
  {
    id: 55,
    name: "OnePlus 13R",
    category: "OnePlus",
    price: 42999,
    rating: 4.7,
    discount: 12,
    img: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-13r.jpg",
    desc: "Performance-focused smartphone offering flagship-level speed.",
    isNew: true
  },
  {
    id: 56,
    name: "OnePlus Nord 5",
    category: "OnePlus",
    price: 34999,
    rating: 4.6,
    discount: 10,
    img: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-4.jpg",
    desc: "Premium mid-range smartphone with smooth display and fast charging.",
    isNew: true
  },
  {
    id: 57,
    name: "OnePlus Nord CE 5",
    category: "OnePlus",
    price: 27999,
    rating: 4.5,
    discount: 12,
    img: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-ce-4.jpg",
    desc: "Feature-packed smartphone with clean software experience.",
    isNew: false
  },
  {
    id: 58,
    name: "OnePlus Nord CE 4",
    category: "OnePlus",
    price: 24999,
    rating: 4.5,
    discount: 15,
    img: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-ce-4.jpg",
    desc: "Fast and efficient smartphone with excellent battery backup.",
    isNew: false
  },
  {
    id: 59,
    name: "OnePlus Nord N40",
    category: "OnePlus",
    price: 19999,
    rating: 4.4,
    discount: 10,
    img: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-ce-4-lite.jpg",
    desc: "Affordable 5G smartphone offering great value and smooth performance.",
    isNew: false
  },
  {
    id: 60,
    name: "OnePlus Nord Lite 5G",
    category: "OnePlus",
    price: 15999,
    rating: 4.3,
    discount: 10,
    img: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-ce-4-lite.jpg",
    desc: "Entry-level 5G smartphone with modern design and reliable battery.",
    isNew: false
  }
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
  if (priceVal === 'under500')   filtered = filtered.filter(p => p.price < 20000);
  if (priceVal === '500-1000')   filtered = filtered.filter(p => p.price >= 20000 && p.price <= 40000);
  if (priceVal === '1000-2000')  filtered = filtered.filter(p => p.price >= 40000 && p.price <= 60000);
  if (priceVal === 'above2000')  filtered = filtered.filter(p => p.price > 100000);

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


(function(){
  emailjs.init("JTgC8cHha6j_jVukz"); // 🔥 put your real key here
})();

function FormFunction(e){
  e.preventDefault(); 
  const form = e.target;

  const spinner = document.getElementById("spinner");
  const btn = form.querySelector("button");
  const email = document.getElementById('feedback-email').value.trim();
  const message = document.getElementById('feedback-message').value.trim();
  

  if( !email || !message){
    showToast('⚠️ Please fill in all fields');
    return;
  }


  // 🔄 show spinner + disable button
  spinner.style.display = "inline-block";
  btn.disabled = true;
  btn.innerText = "Sending...";



  emailjs.sendForm(
    "service_0intr9d",   // from EmailJS
    "template_3v1nchm",  // from EmailJS 
    form
  )
  .then(() => {
    spinner.style.display = "none";
    btn.disabled = false;
    btn.innerText = "Subscribe";
    showToast("✅ Message sent!");
    form.reset();
  })
  .catch(() => {
    spinner.style.display = "none";
    btn.disabled = false;
    btn.innerText = "Subscribe";
    showToast("❌ Failed to send");
  });

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
