// --- Mock Database ---
const RESTAURANT_DATA = [
  // 1. 치킨 (Chicken)
  {
    id: 'rest-chicken-1',
    name: '치킨월드',
    category: 'chicken',
    description: '바삭바삭한 튀김옷과 육즙 가득한 오리지널 크리스피 치킨전문점',
    emoji: '🍗',
    menus: [
      { id: 'menu-c1-1', name: '후라이드 치킨', price: 18000, description: '겉은 바삭하고 속은 촉촉한 오리지널 크리스피 후라이드 치킨', emoji: '🍗' },
      { id: 'menu-c1-2', name: '양념 치킨', price: 20000, description: '달콤 매콤한 비법 양념 소스를 골고루 버무린 중독성 강한 치킨', emoji: '🌶️' },
      { id: 'menu-c1-3', name: '마늘간장 치킨', price: 21000, description: '짭조름한 특제 간장소스와 은은한 국산 마늘의 환상적인 하모니', emoji: '🧄' },
      { id: 'menu-c1-4', name: '눈꽃치즈 치킨', price: 22000, description: '입안 가득 눈꽃처럼 사르르 녹아내리는 짭조름한 마법 치즈 가루 치킨', emoji: '🧀' },
      { id: 'menu-c1-5', name: '반반 치킨 (후라이드/양념)', price: 20000, description: '후라이드 반, 양념 반! 고민할 필요 없는 최고의 스테디셀러', emoji: '☯️' },
      { id: 'menu-c1-6', name: '매콤 무뼈 닭발', price: 15000, description: '화끈한 불맛과 매운 양념으로 볶아낸 야식 최고봉 무뼈 닭발', emoji: '🔥' }
    ]
  },
  {
    id: 'rest-chicken-2',
    name: '계림당 옛날통닭',
    category: 'chicken',
    description: '전통 가마솥에서 튀겨내 담백하고 고소한 추억의 가마솥 통닭',
    emoji: '🐔',
    menus: [
      { id: 'menu-c2-1', name: '가마솥 옛날통닭', price: 14000, description: '통째로 두 번 튀겨 껍질은 바삭하고 속살은 쫄깃한 오리지널 옛날통닭', emoji: '🐔' },
      { id: 'menu-c2-2', name: '마늘 똥집 튀김', price: 11000, description: '쫄깃한 닭똥집을 고소하게 튀겨 알싸한 통마늘과 함께 즐기는 별미', emoji: '🧄' }
    ]
  },

  // 2. 피자 (Pizza)
  {
    id: 'rest-pizza-1',
    name: '피자팩토리',
    category: 'pizza',
    description: '자체 개발 저온 숙성 도우와 신선한 자연산 모짜렐라 치즈 피자',
    emoji: '🍕',
    menus: [
      { id: 'menu-p1-1', name: '슈퍼 슈프림 피자', price: 19900, description: '신선한 야채와 고기 토핑, 진한 모짜렐라 치즈가 어우러진 클래식 피자', emoji: '🍕' },
      { id: 'menu-p1-2', name: '리얼 페퍼로니 피자', price: 18900, description: '짭조름한 페퍼로니 햄이 도우 가득 촘촘하게 올라간 맥주 안주 취향 저격 피자', emoji: '🍕' },
      { id: 'menu-p1-3', name: '고구마 골드 피자', price: 21900, description: '부드럽고 달콤한 고구마 무스와 리치골드 테두리의 달콤 고소함 끝판왕', emoji: '🍠' },
      { id: 'menu-p1-4', name: '베이컨 포테이토 피자', price: 21900, description: '담백한 웨지 감자와 짭조름한 베이컨, 부드러운 마요 소스의 환상의 케미', emoji: '🥔' },
      { id: 'menu-p1-5', name: '콰트로 치즈 피자', price: 20900, description: '체다, 모짜렐라, 크림치즈, 고르곤졸라 4가지 치즈의 고소하고 진한 맛', emoji: '🧀' }
    ]
  },

  // 3. 햄버거 (Burger)
  {
    id: 'rest-burger-1',
    name: '버거랩 (Burger Lab)',
    category: 'burger',
    description: '매일 직접 굽는 수제 브리오슈 번과 100% 소고기 수제 패티전문점',
    emoji: '🍔',
    menus: [
      { id: 'menu-b1-1', name: '더블 비프 클래식 버거', price: 8900, description: '육즙 가득 순소고기 패티 2장, 체다 치즈, 싱싱한 토마토와 특제 소스 버거', emoji: '🍔' },
      { id: 'menu-b1-2', name: '크리스피 슈림프 버거', price: 7900, description: '두툼하고 바삭한 통새우 패티와 상큼한 와사비 타르타르 소스의 버거', emoji: '🍤' },
      { id: 'menu-b1-3', name: '갈릭 아보카도 버거', price: 9500, description: '부드러운 생 아보카도 슬라이스와 알싸한 갈릭 칩이 더해진 프리미엄 수제버거', emoji: '🥑' },
      { id: 'menu-b1-4', name: '스파이시 치킨 버거', price: 8200, description: '화끈한 스파이시 시즈닝을 가미한 겉바속촉 통닭다리살 패티 버거', emoji: '🌶️' },
      { id: 'menu-b1-5', name: '치즈 갈릭 감자튀김', price: 4500, description: '바삭하게 튀긴 크링클컷 감자 위에 진한 치즈 소스와 갈릭 파우더 듬뿍', emoji: '🍟' }
    ]
  },

  // 4. 중국집 (Chinese)
  {
    id: 'rest-chinese-1',
    name: '마라식당',
    category: 'chinese',
    description: '전통 사천 마라의 알싸한 향과 불맛 가득 짜장 짬뽕 전문점',
    emoji: '🐼',
    menus: [
      { id: 'menu-ch1-1', name: '명가 짜장면', price: 6500, description: '춘장 본연의 고소한 맛을 살려 볶아낸 수제 옛날식 짜장면', emoji: '🍜' },
      { id: 'menu-ch1-2', name: '얼큰 삼선 짬뽕', price: 8500, description: '꽃게, 오징어, 홍합 등 푸짐한 해물로 시원하고 얼큰하게 끓여낸 짬뽕', emoji: '🌶️' },
      { id: 'menu-ch1-3', name: '겉바속촉 찹쌀탕수육', price: 16000, description: '국산 돼지고기 등심에 쫄깃한 찹쌀 튀김옷을 입혀 새콤달콤 탕수 소스를 부은 별미', emoji: '🐷' },
      { id: 'menu-ch1-4', name: '사천식 마라탕 (기본)', price: 12000, description: '옥수수면, 청경채, 목이버섯, 소고기 등 인기 재료만 쏙쏙 골라 담아낸 얼큰 마라탕', emoji: '🍲' },
      { id: 'menu-ch1-5', name: '마라샹궈', price: 18000, description: '불맛 강하게 볶아내어 밥반찬으로도, 술안주로도 일품인 사천식 마라 볶음', emoji: '🔥' },
      { id: 'menu-ch1-6', name: '쫄깃 바삭 꿔바로우', price: 18000, description: '넙적하게 튀겨 바삭함과 쫄깃함을 극대화하고 새콤함 소스로 무친 북경식 탕수육', emoji: '🥞' }
    ]
  },

  // 5. 분식 (Bunsik)
  {
    id: 'rest-bunsik-1',
    name: '김치하우스 분식',
    category: 'bunsik',
    description: '매일 아침 방앗간에서 뺀 쌀떡으로 정성스레 조리하는 추억의 분식집',
    emoji: '🍳',
    menus: [
      { id: 'menu-bu1-1', name: '매콤 가래떡 떡볶이', price: 5500, description: '말랑쫄깃한 통 가래떡에 매콤달콤 진한 소스가 자작하게 벤 시그니처 떡볶이', emoji: '🍢' },
      { id: 'menu-bu1-2', name: '수제 모둠 튀김', price: 5000, description: '김말이, 군만두, 통통오징어, 고구마 등 깨끗한 기름에 직접 튀긴 수제 튀김', emoji: '🍤' },
      { id: 'menu-bu1-3', name: '참치마요 대왕 꼬마김밥', price: 4500, description: '고소한 참치마요와 깻잎이 가득 들어가 든든한 꼬마김밥(5줄)', emoji: '🍙' },
      { id: 'menu-bu1-4', name: '치즈 라볶이', price: 7000, description: '꼬들하게 익은 라면 사리와 어묵, 떡에 모짜렐라와 체다 치즈를 듬뿍 올린 라볶이', emoji: '🍜' },
      { id: 'menu-bu1-5', name: '수제 등심 돈까스', price: 8500, description: '생등심을 두드려 부드럽게 만들고 바삭하게 튀겨낸 정통 분식 스타일 돈까스', emoji: '🥩' }
    ]
  },
  {
    id: 'rest-bunsik-2',
    name: '덮밥스튜디오',
    category: 'bunsik',
    description: '고슬고슬 잘 지은 밥에 비법 양념장과 프리미엄 토핑을 듬뿍 올린 덮밥',
    emoji: '🍚',
    menus: [
      { id: 'menu-bu2-1', name: '직화 소불고기 덮밥', price: 9000, description: '달콤 짭조름한 비법 간장 소스에 직화로 구워 불맛을 낸 소불고기 덮밥', emoji: '🍚' },
      { id: 'menu-bu2-2', name: '매콤 제육 덮밥', price: 8500, description: '강력한 화력으로 파기름을 내어 볶은 매콤달콤 중독성 가득한 제육 덮밥', emoji: '🐷' }
    ]
  }
];

// --- App State ---
let appState = {
  savedMoney: 0,
  resistCount: 0,
  healthPoint: 0
};

let cart = [];
let currentSelectedMenu = null;
let currentSelectedRestaurant = null;
let currentCategory = '';
let activeView = 'home';

// Fake Order variables
let deliveryInterval = null;
let deliveryTimeout = null;
const DELIVERY_DURATION = 30000; // 30 seconds
let deliveryStartTime = 0;
let lastOrderedCartTotal = 0;

// --- DOM elements cache ---
let views = {};

// --- Initialize App ---
document.addEventListener('DOMContentLoaded', () => {
  initDOM();
  loadStateFromLocalStorage();
  setupEventListeners();
  renderHome();
  showView('home');
});

// Cache DOM elements
function initDOM() {
  views = {
    home: document.getElementById('view-home'),
    restaurants: document.getElementById('view-restaurants'),
    'menu-detail': document.getElementById('view-menu-detail'),
    cart: document.getElementById('view-cart'),
    progress: document.getElementById('view-progress'),
    result: document.getElementById('view-result')
  };
}

// --- Local Storage Handling ---
function loadStateFromLocalStorage() {
  try {
    const saved = localStorage.getItem('delivery_detox_state');
    if (saved) {
      const parsed = JSON.parse(saved);
      appState.savedMoney = parsed.savedMoney || 0;
      appState.resistCount = parsed.resistCount || 0;
      appState.healthPoint = parsed.healthPoint || 0;
    } else {
      // Default initial values
      appState = {
        savedMoney: 0,
        resistCount: 0,
        healthPoint: 0
      };
      saveStateToLocalStorage();
    }
  } catch (e) {
    console.error('Error loading local storage state:', e);
  }
}

function saveStateToLocalStorage() {
  try {
    localStorage.setItem('delivery_detox_state', JSON.stringify(appState));
  } catch (e) {
    console.error('Error saving local storage state:', e);
  }
}

function resetStats() {
  if (confirm('모든 절약 통계를 초기화하시겠습니까?')) {
    appState = {
      savedMoney: 0,
      resistCount: 0,
      healthPoint: 0
    };
    saveStateToLocalStorage();
    renderHome();
    alert('통계가 초기화되었습니다.');
  }
}

// --- Routing & View Switcher ---
function showView(viewName) {
  // Hide all views, activate target
  Object.keys(views).forEach(key => {
    if (views[key]) {
      if (key === viewName) {
        views[key].classList.add('active');
      } else {
        views[key].classList.remove('active');
      }
    }
  });

  activeView = viewName;

  // Active states in Bottom Nav items
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    const action = item.getAttribute('data-action');
    if ((action === 'home' && (viewName === 'home' || viewName === 'restaurants' || viewName === 'menu-detail')) ||
        (action === 'cart' && viewName === 'cart')) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Hide bottom nav if in delivery progress or result screen
  const bottomNav = document.querySelector('.bottom-nav');
  if (viewName === 'progress' || viewName === 'result') {
    bottomNav.style.display = 'none';
  } else {
    bottomNav.style.display = 'flex';
  }

  // Scroll to top
  const activeEl = views[viewName];
  if (activeEl) {
    const scrollContainer = activeEl.querySelector('.content');
    if (scrollContainer) {
      scrollContainer.scrollTop = 0;
    }
  }
}

// --- Event Listeners ---
function setupEventListeners() {
  // Category Grid Clicks
  const categoryGrid = document.querySelector('.category-grid');
  if (categoryGrid) {
    categoryGrid.addEventListener('click', (e) => {
      const card = e.target.closest('.category-card');
      if (card) {
        const cat = card.getAttribute('data-category');
        const catName = card.querySelector('.category-name').textContent;
        openCategory(cat, catName);
      }
    });
  }

  // Bottom Nav Clicks
  const bottomNav = document.querySelector('.bottom-nav');
  if (bottomNav) {
    bottomNav.addEventListener('click', (e) => {
      const navItem = e.target.closest('.nav-item');
      if (navItem) {
        const action = navItem.getAttribute('data-action');
        if (action === 'home') {
          showView('home');
        } else if (action === 'cart') {
          renderCart();
          showView('cart');
        }
      }
    });
  }

  // Reset stats button
  const resetBtn = document.getElementById('reset-stats-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', resetStats);
  }

  // Back Button Actions
  const backButtons = document.querySelectorAll('.btn-back');
  backButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const parentView = btn.closest('.view').id;
      if (parentView === 'view-restaurants') {
        showView('home');
      } else if (parentView === 'view-menu-detail') {
        showView('restaurants');
      } else if (parentView === 'view-cart') {
        showView('home');
      }
    });
  });
}

// --- RENDER HOME ---
function renderHome() {
  const savedValEl = document.getElementById('home-saved-value');
  const countValEl = document.getElementById('home-count-value');
  const hpValEl = document.getElementById('home-hp-value');

  if (savedValEl) savedValEl.textContent = appState.savedMoney.toLocaleString() + '원';
  if (countValEl) countValEl.textContent = appState.resistCount.toLocaleString() + '회';
  if (hpValEl) hpValEl.textContent = appState.healthPoint.toLocaleString() + ' HP';

  updateCartBadge();
}

function updateCartBadge() {
  const badge = document.querySelector('.nav-cart-badge');
  if (badge) {
    const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
    if (totalQty > 0) {
      badge.textContent = totalQty;
      badge.style.display = 'flex';
    } else {
      badge.style.display = 'none';
    }
  }
}

// --- ROUTE: OPEN CATEGORY (RESTAURANT LIST) ---
function openCategory(category, categoryName) {
  currentCategory = category;
  
  // Set header title
  const headerTitle = document.querySelector('#view-restaurants .app-header h2');
  if (headerTitle) {
    headerTitle.textContent = categoryName;
  }

  const container = document.getElementById('restaurants-container');
  if (!container) return;

  // Filter restaurants
  const list = RESTAURANT_DATA.filter(r => r.category === category);
  
  if (list.length === 0) {
    container.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon">🏜️</div><div class="cart-empty-text">음식점이 준비 중입니다.</div></div>`;
  } else {
    // Generate beautiful restaurant cards
    let html = '';
    list.forEach(r => {
      html += `
        <div class="restaurant-item" onclick="openRestaurant('${r.id}')">
          <div class="restaurant-img-placeholder">${r.emoji}</div>
          <div class="restaurant-info">
            <div class="restaurant-title">${r.name}</div>
            <div class="restaurant-meta">${r.description}</div>
            <div class="restaurant-meta" style="color: var(--primary); font-weight:600; margin-top: 4px;">메뉴 ${r.menus.length}개</div>
          </div>
        </div>
      `;
    });
    container.innerHTML = `<div class="restaurant-list">${html}</div>`;
  }

  showView('restaurants');
}

// Make openRestaurant globally accessible
window.openRestaurant = function(restaurantId) {
  const restaurant = RESTAURANT_DATA.find(r => r.id === restaurantId);
  if (!restaurant) return;

  currentSelectedRestaurant = restaurant;

  // Change title & banner
  const headerTitle = document.querySelector('#view-restaurants .app-header h2');
  if (headerTitle) {
    headerTitle.textContent = restaurant.name;
  }

  const container = document.getElementById('restaurants-container');
  if (!container) return;

  // Render menus of this restaurant
  let menusHtml = `
    <div class="restaurant-banner">
      <div class="restaurant-name">${restaurant.emoji} ${restaurant.name}</div>
      <div class="restaurant-desc">${restaurant.description}</div>
    </div>
    <div class="menu-list">
  `;

  restaurant.menus.forEach(menu => {
    menusHtml += `
      <div class="menu-item" onclick="openMenuDetail('${restaurant.id}', '${menu.id}')">
        <div class="menu-img-placeholder">${menu.emoji || '🍽️'}</div>
        <div class="menu-info">
          <div class="menu-name">${menu.name}</div>
          <div class="menu-desc">${menu.description}</div>
          <div class="menu-price">${menu.price.toLocaleString()}원</div>
        </div>
      </div>
    `;
  });

  menusHtml += `</div>`;
  container.innerHTML = menusHtml;
};

// --- ROUTE: OPEN MENU DETAIL ---
window.openMenuDetail = function(restaurantId, menuId) {
  const restaurant = RESTAURANT_DATA.find(r => r.id === restaurantId);
  if (!restaurant) return;

  const menu = restaurant.menus.find(m => m.id === menuId);
  if (!menu) return;

  currentSelectedRestaurant = restaurant;
  currentSelectedMenu = menu;

  // Update Detail View Elements
  const imgPlaceholder = document.getElementById('menu-detail-img');
  const nameEl = document.getElementById('menu-detail-name');
  const descEl = document.getElementById('menu-detail-desc');
  const priceEl = document.getElementById('menu-detail-price');
  const qtyValEl = document.getElementById('menu-detail-qty-value');

  if (imgPlaceholder) imgPlaceholder.textContent = menu.emoji || '🍽️';
  if (nameEl) nameEl.textContent = menu.name;
  if (descEl) descEl.textContent = menu.description;
  if (priceEl) priceEl.textContent = menu.price.toLocaleString() + '원';
  if (qtyValEl) qtyValEl.textContent = '1';

  // Setup Add-to-cart button click
  const addToCartBtn = document.getElementById('btn-add-to-cart');
  if (addToCartBtn) {
    // Re-bind to prevent double bindings
    addToCartBtn.onclick = () => {
      const qty = parseInt(qtyValEl.textContent) || 1;
      addToCart(restaurant, menu, qty);
    };
  }

  // Setup detail quantity control click handlers
  const qtyMinusBtn = document.getElementById('btn-detail-qty-minus');
  const qtyPlusBtn = document.getElementById('btn-detail-qty-plus');

  if (qtyMinusBtn) {
    qtyMinusBtn.onclick = () => {
      let currentVal = parseInt(qtyValEl.textContent) || 1;
      if (currentVal > 1) {
        qtyValEl.textContent = currentVal - 1;
      }
    };
  }

  if (qtyPlusBtn) {
    qtyPlusBtn.onclick = () => {
      let currentVal = parseInt(qtyValEl.textContent) || 1;
      qtyValEl.textContent = currentVal + 1;
    };
  }

  showView('menu-detail');
};

// --- SHOPPING CART OPERATIONS ---
function addToCart(restaurant, menu, qty) {
  // Check if item already exists in cart
  const existingIndex = cart.findIndex(item => item.menuId === menu.id && item.restaurantId === restaurant.id);
  
  if (existingIndex > -1) {
    cart[existingIndex].qty += qty;
  } else {
    cart.push({
      menuId: menu.id,
      restaurantId: restaurant.id,
      restaurantName: restaurant.name,
      name: menu.name,
      price: menu.price,
      emoji: menu.emoji,
      qty: qty
    });
  }

  updateCartBadge();
  alert(`${menu.name} ${qty}개가 장바구니에 담겼습니다.`);
  
  // Go back to the Restaurant list
  window.openRestaurant(restaurant.id);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
  updateCartBadge();
}

function updateCartQty(index, delta) {
  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    removeFromCart(index);
  } else {
    renderCart();
    updateCartBadge();
  }
}

// --- RENDER CART ---
function renderCart() {
  const container = document.getElementById('cart-container');
  const checkoutBtn = document.getElementById('btn-cart-checkout');
  
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <div class="cart-empty-text">장바구니가 비어 있습니다.</div>
        <button class="btn-secondary" onclick="showView('home')">맛있는 음식 구경하러 가기</button>
      </div>
    `;
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  if (checkoutBtn) checkoutBtn.disabled = false;

  let itemsHtml = '<div class="cart-list">';
  let totalOrderAmount = 0;

  cart.forEach((item, index) => {
    const itemSubtotal = item.price * item.qty;
    totalOrderAmount += itemSubtotal;

    itemsHtml += `
      <div class="cart-item">
        <div class="cart-item-details">
          <div class="cart-item-name">${item.emoji} ${item.name}</div>
          <div class="cart-item-restaurant">${item.restaurantName}</div>
          <div class="cart-item-price">${item.price.toLocaleString()}원</div>
        </div>
        <div class="cart-item-actions">
          <div class="cart-item-qty-control">
            <button class="btn-cart-qty" onclick="updateCartQty(${index}, -1)">-</button>
            <div class="cart-qty-value">${item.qty}</div>
            <button class="btn-cart-qty" onclick="updateCartQty(${index}, 1)">+</button>
          </div>
          <button class="btn-remove" onclick="removeFromCart(${index})" aria-label="삭제">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      </div>
    `;
  });

  itemsHtml += '</div>';

  // Render totals summary card
  const summaryHtml = `
    <div class="payment-summary">
      <div class="payment-row">
        <span>총 주문금액</span>
        <span>${totalOrderAmount.toLocaleString()}원</span>
      </div>
      <div class="payment-row divider">
        <span>배달 억제료 (배달 참기 무료)</span>
        <span style="color: var(--success); font-weight: 600;">0원</span>
      </div>
      <div class="payment-row total">
        <span>총 결제금액</span>
        <span class="total-price">${totalOrderAmount.toLocaleString()}원</span>
      </div>
    </div>
  `;

  container.innerHTML = itemsHtml + summaryHtml;

  // Setup Order / Checkout click handler
  if (checkoutBtn) {
    checkoutBtn.onclick = () => {
      startFakeCheckout(totalOrderAmount);
    };
  }
}

// --- FAKE DELIVERY PROGRESS TIMERS ---
function startFakeCheckout(orderAmount) {
  lastOrderedCartTotal = orderAmount;
  showView('progress');

  // Initial UI resets
  const visualBar = document.getElementById('visual-progress');
  const asciiBar = document.getElementById('ascii-progress-bar');
  const asciiPercent = document.getElementById('ascii-progress-percent');
  
  if (visualBar) visualBar.style.width = '0%';
  
  // Reset stages UI
  const steps = {
    step1: document.getElementById('step-order-accept'),
    step2: document.getElementById('step-cooking'),
    step3: document.getElementById('step-delivery-start'),
    step4: document.getElementById('step-soon-arrive')
  };

  Object.values(steps).forEach(step => {
    if (step) {
      step.className = 'timeline-step';
      const indicator = step.querySelector('.step-indicator');
      if (indicator) indicator.textContent = '...';
    }
  });

  deliveryStartTime = Date.now();

  // Every 200ms, update the animation progress and state
  deliveryInterval = setInterval(() => {
    const elapsed = Date.now() - deliveryStartTime;
    const progressPercent = Math.min(100, Math.floor((elapsed / DELIVERY_DURATION) * 100));

    // Formulate ASCII progress bar: 10 chars block size
    // Example: █░░░░░░░ 10%
    const filledBlocks = Math.floor(progressPercent / 10);
    const emptyBlocks = 10 - filledBlocks;
    const asciiProgressBar = '█'.repeat(filledBlocks) + '░'.repeat(emptyBlocks);

    if (visualBar) visualBar.style.width = `${progressPercent}%`;
    if (asciiBar) asciiBar.textContent = asciiProgressBar;
    if (asciiPercent) asciiPercent.textContent = `${progressPercent}%`;

    // Process delivery milestones based on percentage
    if (progressPercent >= 0 && progressPercent < 25) {
      // Step 1 active, rest normal
      setStepState(steps.step1, 'active', '⏳ 접수 중');
    } else if (progressPercent >= 25 && progressPercent < 50) {
      // Step 1 completed, Step 2 active
      setStepState(steps.step1, 'completed', '✔');
      setStepState(steps.step2, 'active', '🍳 조리 중');
    } else if (progressPercent >= 50 && progressPercent < 75) {
      // Step 1, 2 completed, Step 3 active
      setStepState(steps.step1, 'completed', '✔');
      setStepState(steps.step2, 'completed', '✔');
      setStepState(steps.step3, 'active', '🛵 출발');
    } else if (progressPercent >= 75 && progressPercent < 100) {
      // Step 1, 2, 3 completed, Step 4 active
      setStepState(steps.step1, 'completed', '✔');
      setStepState(steps.step2, 'completed', '✔');
      setStepState(steps.step3, 'completed', '✔');
      setStepState(steps.step4, 'active', '🏠 곧 도착');
    } else if (progressPercent >= 100) {
      setStepState(steps.step1, 'completed', '✔');
      setStepState(steps.step2, 'completed', '✔');
      setStepState(steps.step3, 'completed', '✔');
      setStepState(steps.step4, 'completed', '✔');
    }

  }, 200);

  // Stop interval and complete flow at 30 seconds
  deliveryTimeout = setTimeout(() => {
    completeFakeOrder();
  }, DELIVERY_DURATION);
}

function setStepState(stepElement, state, indicatorText) {
  if (!stepElement) return;
  stepElement.className = `timeline-step ${state}`;
  const indicator = stepElement.querySelector('.step-indicator');
  if (indicator) {
    indicator.textContent = indicatorText;
  }
}

// Complete Order & Save to LocalStorage
function completeFakeOrder() {
  // Clear running timers
  clearInterval(deliveryInterval);
  clearTimeout(deliveryTimeout);

  // Update Statistics
  appState.savedMoney += lastOrderedCartTotal;
  appState.resistCount += 1;
  appState.healthPoint += 10;

  // Persist State
  saveStateToLocalStorage();
  
  // Render Result Screen elements
  const resMoneyEl = document.getElementById('result-saved-money');
  const resPointEl = document.getElementById('result-hp');
  const quoteEl = document.getElementById('result-quote');

  if (resMoneyEl) resMoneyEl.textContent = lastOrderedCartTotal.toLocaleString() + '원';
  if (resPointEl) resPointEl.textContent = '+10 HP';
  
  // Quote updates dynamically with the total amount of money they just saved
  if (quoteEl) {
    quoteEl.innerHTML = `
      <strong>"30초 전 당신은 ${lastOrderedCartTotal.toLocaleString()}원을 쓰려고 했습니다.<br>
      지금은 그 돈을 지켰습니다."</strong>
      <p style="margin-top: 8px; font-size:12px; color: var(--text-secondary);">현명한 절제는 더 나은 내일로 이끕니다.</p>
    `;
  }

  // Clear Cart
  cart = [];
  updateCartBadge();
  renderHome();

  // Show results view
  showView('result');
}

// Global functions exposed to window for inline onclicks in HTML
window.showView = showView;
window.resetStats = resetStats;
