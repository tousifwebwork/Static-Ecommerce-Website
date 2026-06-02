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
    img: "data:image/jpeg;base64,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",
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
    img: "https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/i/r/d/-original-imahfvuacucncbbn.jpeg?q=90",
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
    img: "data:image/jpeg;base64,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",
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
    img: "https://fdn2.gsmarena.com/vv/pics/realme/realme-14pro-plus-1.jpg",
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
    img: "https://m.media-amazon.com/images/I/71+Kj60CelL.jpg",
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
    img: "data:image/jpeg;base64,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",
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
    img: "data:image/jpeg;base64,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",
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
    img: "https://m.media-amazon.com/images/I/71IVvRp4JDL._AC_UF1000,1000_QL80_.jpg",
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
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnM_WZx_CE_q8fzVxY2Wik8S85quMGuOlkw&s",
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
    img: "https://www.oppo.com/content/dam/oppo/product-asset-library/reno/reno13-series/en/reno13-pro/purple-grey/v1/assets/images-kv-mo-phone-bottom-s1.png",
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
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLKyKkwp0hRt94lFquXNeQ5osWAJFE7Bb57Q&S",
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
    img: "https://m.media-amazon.com/images/I/41+Hx5EQIOL._AC_UF350,350_QL80_.jpg",
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
    img: "https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/product/1757907711766/zip/img/wap/vivo-v50-with-zeiss-professional-portrait-flagship.png",
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
    img: "https://m.media-amazon.com/images/I/41lTPTWnMjL._AC_UF894,1000_QL80_.jpg",
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
    img: "https://exstatic-in.vivo.com/Oz84QB3Wo0uns8j1/in/1716268597677/71aaf1bd94fe1353d08836f5d5995bb2.png_w860-h860.webp",
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
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8JAQYMweUXtKTqQ8XMYDdSfMmPrng8TAQpg&s",
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
    img: "https://www.oneplus.com/content/dam/oneplus/2025/product-station/13/images/images-kv-fps-1002-1-9ac28b.jpg.webp",
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
    img: "https://m.media-amazon.com/images/I/614obdQ0iYL._AC_UF1000,1000_QL80_.jpg",
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
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHrasicAgOc8_kO4ewgvD1IDk5DRZsPUjUSg&s",
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
    img: "https://m.media-amazon.com/images/I/61TFhTNYuhL._AC_UF1000,1000_QL80_.jpg",
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
    img: "https://m.media-amazon.com/images/I/61Io5-ojWUL._AC_UF1000,1000_QL80_.jpg",
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
    img: "https://m.media-amazon.com/images/I/61JOYUJbhcL._AC_UF1000,1000_QL80_.jpg",
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
    img: "https://m.media-amazon.com/images/I/61Io5-ojWUL._AC_UF1000,1000_QL80_.jpg",
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
