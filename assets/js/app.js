/**
 * AEROX SPORTS OFFICIAL - CORE APPLICATION LOGIC
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.AEROX_DATA;
  if (!data) return;

  // App State
  const state = {
    currency: localStorage.getItem('aerox_currency') || 'TWD',
    lang: localStorage.getItem('aerox_lang') || 'zh',
    activeCategory: 'all',
    searchQuery: '',
    sortBy: 'featured',
    cart: JSON.parse(localStorage.getItem('aerox_cart') || '[]'),
    wishlist: JSON.parse(localStorage.getItem('aerox_wishlist') || '[]'),
    appliedCoupon: null,
    quizAnswers: {},
    activeProductSelections: {} // productId -> { colorIndex: 0, size: 'US 9' }
  };

  // Helper: Format Price
  function formatPrice(twdAmount) {
    const cur = data.currencies[state.currency] || data.currencies.TWD;
    const converted = twdAmount * cur.rate;
    if (cur.decimals === 0) {
      return `${cur.symbol} ${Math.round(converted).toLocaleString()}`;
    }
    return `${cur.symbol} ${converted.toFixed(cur.decimals)}`;
  }

  // Toast Notification
  function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `flex items-center gap-3 px-5 py-3.5 rounded-lg shadow-2xl transition-all duration-300 transform translate-y-4 opacity-0 border ${
      type === 'success' 
        ? 'bg-[#12141A] text-white border-[#CCFF00]/40' 
        : 'bg-[#1C1418] text-white border-red-500/40'
    }`;
    
    const icon = type === 'success' 
      ? `<svg class="w-5 h-5 text-[#CCFF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`
      : `<svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;

    toast.innerHTML = `
      ${icon}
      <span class="text-sm font-medium tracking-wide">${message}</span>
    `;

    container.appendChild(toast);
    
    // Animate in
    requestAnimationFrame(() => {
      toast.classList.remove('translate-y-4', 'opacity-0');
    });

    // Auto remove
    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-2');
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // Save State
  function saveState() {
    localStorage.setItem('aerox_cart', JSON.stringify(state.cart));
    localStorage.setItem('aerox_wishlist', JSON.stringify(state.wishlist));
    localStorage.setItem('aerox_currency', state.currency);
    localStorage.setItem('aerox_lang', state.lang);
    updateCartUI();
    updateWishlistUI();
  }

  // Initialize Default Selections for Products
  data.products.forEach(p => {
    state.activeProductSelections[p.id] = {
      colorIndex: 0,
      size: p.sizes[0] || 'M'
    };
  });

  // Render Product Catalog
  function renderProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    let filtered = data.products.filter(p => {
      const matchCat = state.activeCategory === 'all' || p.category === state.activeCategory;
      const matchSearch = !state.searchQuery || 
        p.name.toLowerCase().includes(state.searchQuery.toLowerCase()) || 
        p.subname.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(state.searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });

    // Sorting
    if (state.sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (state.sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (state.sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full py-16 text-center text-slate-400">
          <svg class="w-16 h-16 mx-auto mb-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <p class="text-xl font-bold text-white mb-2">未找到符合條件的商品</p>
          <p class="text-sm">請嘗試更換分類或清除搜尋關鍵字</p>
          <button id="reset-filter-btn" class="mt-4 px-5 py-2.5 bg-[#CCFF00] text-black font-bold text-xs uppercase tracking-wider rounded">查看全部商品</button>
        </div>
      `;
      document.getElementById('reset-filter-btn')?.addEventListener('click', () => {
        state.activeCategory = 'all';
        state.searchQuery = '';
        renderCategories();
        renderProducts();
      });
      return;
    }

    grid.innerHTML = filtered.map(p => {
      const sel = state.activeProductSelections[p.id];
      const activeColor = p.colors[sel.colorIndex] || p.colors[0];
      const isWishlisted = state.wishlist.includes(p.id);

      return `
        <div class="product-card group relative bg-[#101217] rounded-xl border border-white/5 hover:border-[#CCFF00]/40 overflow-hidden flex flex-col transition-all duration-300" data-id="${p.id}">
          <!-- Badges & Wishlist -->
          <div class="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
            <span class="pointer-events-auto px-2.5 py-1 text-[11px] font-black uppercase tracking-wider ${p.isNew ? 'bg-[#CCFF00] text-black' : 'bg-white/10 text-white backdrop-blur-md'} rounded">
              ${p.badge}
            </span>
            <button class="wishlist-btn pointer-events-auto w-9 h-9 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white hover:text-[#FF3366] transition-colors" data-id="${p.id}" title="加入願望清單">
              <svg class="w-5 h-5 ${isWishlisted ? 'text-[#FF3366] fill-[#FF3366]' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </button>
          </div>

          <!-- Product Image Area -->
          <div class="relative w-full aspect-[4/3] bg-gradient-to-b from-[#181B22] to-[#101217] overflow-hidden cursor-pointer quick-view-trigger" data-id="${p.id}">
            <img src="${activeColor.image}" alt="${p.name}" class="product-img w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy">
            <div class="absolute inset-0 bg-gradient-to-t from-[#101217] via-transparent to-transparent opacity-60"></div>
            
            <!-- Quick View Overlay Button -->
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 backdrop-blur-[2px]">
              <span class="px-4 py-2 bg-white/90 text-black text-xs font-bold uppercase tracking-wider rounded-md shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-1.5">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                快速預覽規格
              </span>
            </div>
          </div>

          <!-- Product Details Area -->
          <div class="p-5 flex-1 flex flex-col justify-between">
            <div>
              <!-- Category / Subname -->
              <div class="flex items-center justify-between text-xs text-slate-400 mb-1.5 font-medium">
                <span>${p.subname}</span>
                <span class="flex items-center text-amber-400 font-bold gap-1">
                  ★ ${p.rating} <span class="text-slate-500 font-normal">(${p.reviewsCount})</span>
                </span>
              </div>

              <!-- Title -->
              <h3 class="text-white font-bold text-base tracking-wide group-hover:text-[#CCFF00] transition-colors mb-2.5 cursor-pointer quick-view-trigger" data-id="${p.id}">
                ${p.name}
              </h3>

              <!-- Colorway Selector Swatches -->
              <div class="flex items-center gap-2 mb-3">
                <span class="text-[11px] text-slate-400 uppercase font-semibold">色系:</span>
                <div class="flex items-center gap-1.5">
                  ${p.colors.map((c, idx) => `
                    <button class="color-swatch w-4 h-4 rounded-full border ${sel.colorIndex === idx ? 'border-white ring-2 ring-[#CCFF00]/60 scale-110' : 'border-transparent'} transition-all" style="background-color: ${c.code}" data-pid="${p.id}" data-cidx="${idx}" title="${c.nameZh}">
                    </button>
                  `).join('')}
                </div>
                <span class="text-[11px] text-slate-400 ml-1 truncate max-w-[120px]">${activeColor.nameZh}</span>
              </div>

              <!-- Sizes Pills -->
              <div class="flex items-center gap-1.5 flex-wrap mb-4">
                <span class="text-[11px] text-slate-400 uppercase font-semibold mr-1">尺寸:</span>
                ${p.sizes.slice(0, 4).map(sz => `
                  <button class="size-pill text-[11px] font-bold px-2 py-0.5 rounded border ${sel.size === sz ? 'bg-white text-black border-white' : 'border-slate-800 text-slate-300 hover:border-slate-600'} transition-colors" data-pid="${p.id}" data-size="${sz}">
                    ${sz}
                  </button>
                `).join('')}
                ${p.sizes.length > 4 ? `<span class="text-[10px] text-slate-500 cursor-pointer quick-view-trigger" data-id="${p.id}">+${p.sizes.length - 4} 碼</span>` : ''}
              </div>
            </div>

            <!-- Price & Add to Cart -->
            <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3">
              <div>
                <div class="text-lg font-black text-white tracking-tight">
                  ${formatPrice(p.price)}
                </div>
                ${p.originalPrice ? `
                  <div class="text-xs text-slate-500 line-through">
                    ${formatPrice(p.originalPrice)}
                  </div>
                ` : ''}
              </div>

              <button class="add-to-cart-btn px-4 py-2.5 bg-[#CCFF00] hover:bg-[#b8e600] active:scale-95 text-black font-extrabold text-xs uppercase tracking-wider rounded-lg transition-all flex items-center gap-1.5 shadow-lg shadow-[#CCFF00]/10" data-id="${p.id}">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                加入購物車
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    attachProductCardEvents();
  }

  // Attach dynamic events for cards
  function attachProductCardEvents() {
    // Quick View Triggers
    document.querySelectorAll('.quick-view-trigger').forEach(el => {
      el.addEventListener('click', () => {
        const pid = el.getAttribute('data-id');
        openQuickView(pid);
      });
    });

    // Color Swatches
    document.querySelectorAll('.color-swatch').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const pid = btn.getAttribute('data-pid');
        const cidx = parseInt(btn.getAttribute('data-cidx'), 10);
        state.activeProductSelections[pid].colorIndex = cidx;
        renderProducts();
      });
    });

    // Size Pills
    document.querySelectorAll('.size-pill').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const pid = btn.getAttribute('data-pid');
        const size = btn.getAttribute('data-size');
        state.activeProductSelections[pid].size = size;
        renderProducts();
      });
    });

    // Add to Cart Buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const pid = btn.getAttribute('data-id');
        addToCart(pid);
      });
    });

    // Wishlist Buttons
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const pid = btn.getAttribute('data-id');
        toggleWishlist(pid);
      });
    });
  }

  // Render Categories Filter Tabs
  function renderCategories() {
    const nav = document.getElementById('category-tabs');
    if (!nav) return;

    nav.innerHTML = data.categories.map(c => {
      const active = state.activeCategory === c.id;
      return `
        <button class="cat-tab px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 whitespace-nowrap ${
          active 
            ? 'bg-[#CCFF00] text-black shadow-lg shadow-[#CCFF00]/20' 
            : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
        }" data-cat="${c.id}">
          ${state.lang === 'zh' ? c.nameZh : c.nameEn}
        </button>
      `;
    }).join('');

    nav.querySelectorAll('.cat-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        state.activeCategory = btn.getAttribute('data-cat');
        renderCategories();
        renderProducts();
      });
    });
  }

  // Add to Cart
  function addToCart(productId, customColorIdx, customSize, quantity = 1) {
    const product = data.products.find(p => p.id === productId);
    if (!product) return;

    const sel = state.activeProductSelections[productId];
    const colorIndex = customColorIdx !== undefined ? customColorIdx : sel.colorIndex;
    const size = customSize || sel.size;

    const existingIndex = state.cart.findIndex(item => 
      item.productId === productId && item.colorIndex === colorIndex && item.size === size
    );

    if (existingIndex >= 0) {
      state.cart[existingIndex].quantity += quantity;
    } else {
      state.cart.push({
        productId,
        colorIndex,
        size,
        quantity
      });
    }

    saveState();
    showToast(`已將 ${product.name} (${size}) 加入購物車！`);
    openCartDrawer();
  }

  // Toggle Wishlist
  function toggleWishlist(productId) {
    const idx = state.wishlist.indexOf(productId);
    const product = data.products.find(p => p.id === productId);
    if (idx >= 0) {
      state.wishlist.splice(idx, 1);
      showToast(`已從願望清單移除 ${product.name}`);
    } else {
      state.wishlist.push(productId);
      showToast(`已將 ${product.name} 收藏至願望清單！`);
    }
    saveState();
    renderProducts();
  }

  // Update Cart UI
  function updateCartUI() {
    const badge = document.getElementById('cart-badge');
    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    if (badge) {
      badge.textContent = totalItems;
      badge.classList.toggle('hidden', totalItems === 0);
    }

    const cartItemsList = document.getElementById('cart-items-list');
    const cartSubtotalEl = document.getElementById('cart-subtotal');
    const cartDiscountEl = document.getElementById('cart-discount');
    const cartShippingEl = document.getElementById('cart-shipping');
    const cartTotalEl = document.getElementById('cart-total');
    const cartShippingNotice = document.getElementById('cart-shipping-notice');
    const cartCheckoutBtn = document.getElementById('cart-checkout-btn');

    if (!cartItemsList) return;

    if (state.cart.length === 0) {
      cartItemsList.innerHTML = `
        <div class="py-20 text-center text-slate-400">
          <svg class="w-16 h-16 mx-auto mb-3 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
          <p class="text-base font-bold text-white mb-1">購物車目前是空的</p>
          <p class="text-xs text-slate-500 mb-4">快去選購屬於你的頂級運動裝備吧！</p>
          <button id="close-empty-cart-btn" class="px-5 py-2.5 bg-[#CCFF00] text-black font-extrabold text-xs uppercase tracking-wider rounded-lg">探索新品專區</button>
        </div>
      `;
      document.getElementById('close-empty-cart-btn')?.addEventListener('click', closeCartDrawer);
      if (cartCheckoutBtn) cartCheckoutBtn.disabled = true;
      if (cartSubtotalEl) cartSubtotalEl.textContent = formatPrice(0);
      if (cartDiscountEl) cartDiscountEl.textContent = formatPrice(0);
      if (cartShippingEl) cartShippingEl.textContent = formatPrice(0);
      if (cartTotalEl) cartTotalEl.textContent = formatPrice(0);
      return;
    }

    if (cartCheckoutBtn) cartCheckoutBtn.disabled = false;

    // Calculate Totals
    let subtotal = 0;
    cartItemsList.innerHTML = state.cart.map((item, index) => {
      const product = data.products.find(p => p.id === item.productId);
      if (!product) return '';
      const color = product.colors[item.colorIndex] || product.colors[0];
      const itemTotal = product.price * item.quantity;
      subtotal += itemTotal;

      return `
        <div class="flex items-center gap-3.5 py-4 border-b border-slate-800/80">
          <img src="${color.image}" alt="${product.name}" class="w-20 h-20 rounded-lg object-cover bg-slate-800 flex-shrink-0">
          <div class="flex-1 min-w-0">
            <h4 class="text-xs font-bold text-white truncate tracking-wide">${product.name}</h4>
            <p class="text-[11px] text-slate-400 mt-0.5">規格: <span class="text-white">${item.size}</span> | <span class="text-white">${color.nameZh}</span></p>
            <div class="text-xs font-black text-[#CCFF00] mt-1">${formatPrice(product.price)}</div>
            
            <div class="flex items-center justify-between mt-2">
              <div class="flex items-center border border-slate-700 rounded bg-slate-900">
                <button class="cart-qty-btn px-2 py-0.5 text-slate-300 hover:text-white" data-action="dec" data-index="${index}">-</button>
                <span class="px-2 text-xs font-bold text-white">${item.quantity}</span>
                <button class="cart-qty-btn px-2 py-0.5 text-slate-300 hover:text-white" data-action="inc" data-index="${index}">+</button>
              </div>
              <button class="cart-remove-btn text-xs text-slate-500 hover:text-red-400 transition-colors" data-index="${index}">
                刪除
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Attach cart item actions
    cartItemsList.querySelectorAll('.cart-qty-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.getAttribute('data-action');
        const index = parseInt(btn.getAttribute('data-index'), 10);
        if (action === 'inc') {
          state.cart[index].quantity += 1;
        } else if (action === 'dec') {
          state.cart[index].quantity -= 1;
          if (state.cart[index].quantity <= 0) {
            state.cart.splice(index, 1);
          }
        }
        saveState();
      });
    });

    cartItemsList.querySelectorAll('.cart-remove-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.getAttribute('data-index'), 10);
        state.cart.splice(index, 1);
        saveState();
      });
    });

    // Discount & Shipping
    let discount = 0;
    let freeShippingThreshold = 2500;
    let shippingFee = subtotal >= freeShippingThreshold || (state.appliedCoupon && state.appliedCoupon.freeShipping) ? 0 : 150;

    if (state.appliedCoupon && state.appliedCoupon.discount > 0) {
      discount = subtotal * state.appliedCoupon.discount;
    }

    const finalTotal = Math.max(0, subtotal - discount + shippingFee);

    if (cartSubtotalEl) cartSubtotalEl.textContent = formatPrice(subtotal);
    if (cartDiscountEl) cartDiscountEl.textContent = `-${formatPrice(discount)}`;
    if (cartShippingEl) cartShippingEl.textContent = shippingFee === 0 ? '免運費' : formatPrice(shippingFee);
    if (cartTotalEl) cartTotalEl.textContent = formatPrice(finalTotal);

    if (cartShippingNotice) {
      if (shippingFee === 0) {
        cartShippingNotice.innerHTML = `
          <div class="p-2.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-2">
            <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            恭喜！您已享有全館免運費優惠！
          </div>
        `;
      } else {
        const diff = freeShippingThreshold - subtotal;
        cartShippingNotice.innerHTML = `
          <div class="p-2.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold flex items-center justify-between">
            <span>還差 <strong class="text-white">${formatPrice(diff)}</strong> 即可享免運！</span>
            <a href="#products-section" onclick="window.aeroxApp.closeCartDrawer()" class="underline text-[#CCFF00] hover:text-white">繼續挑選</a>
          </div>
        `;
      }
    }
  }

  // Update Wishlist UI
  function updateWishlistUI() {
    const badge = document.getElementById('wishlist-badge');
    if (badge) {
      badge.textContent = state.wishlist.length;
      badge.classList.toggle('hidden', state.wishlist.length === 0);
    }

    const wishlistItemsList = document.getElementById('wishlist-items-list');
    if (!wishlistItemsList) return;

    if (state.wishlist.length === 0) {
      wishlistItemsList.innerHTML = `
        <div class="py-20 text-center text-slate-400">
          <svg class="w-16 h-16 mx-auto mb-3 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
          <p class="text-base font-bold text-white mb-1">願望清單是空的</p>
          <p class="text-xs text-slate-500">點擊商品卡片上的愛心圖示即可加入收藏</p>
        </div>
      `;
      return;
    }

    wishlistItemsList.innerHTML = state.wishlist.map(pid => {
      const product = data.products.find(p => p.id === pid);
      if (!product) return '';
      const color = product.colors[0];

      return `
        <div class="flex items-center gap-3.5 py-4 border-b border-slate-800/80">
          <img src="${color.image}" alt="${product.name}" class="w-16 h-16 rounded-lg object-cover bg-slate-800 flex-shrink-0 cursor-pointer quick-view-trigger" data-id="${product.id}">
          <div class="flex-1 min-w-0">
            <h4 class="text-xs font-bold text-white truncate">${product.name}</h4>
            <div class="text-xs font-black text-[#CCFF00] mt-1">${formatPrice(product.price)}</div>
            <div class="flex items-center gap-2 mt-2">
              <button class="wishlist-to-cart-btn px-2.5 py-1 bg-[#CCFF00] text-black font-bold text-[10px] uppercase rounded" data-id="${product.id}">
                移至購物車
              </button>
              <button class="wishlist-remove-btn text-[11px] text-slate-400 hover:text-red-400" data-id="${product.id}">
                移除
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    wishlistItemsList.querySelectorAll('.wishlist-to-cart-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const pid = btn.getAttribute('data-id');
        addToCart(pid);
        toggleWishlist(pid);
      });
    });

    wishlistItemsList.querySelectorAll('.wishlist-remove-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const pid = btn.getAttribute('data-id');
        toggleWishlist(pid);
      });
    });
  }

  // Drawers Open / Close
  function openCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer && overlay) {
      drawer.classList.remove('translate-x-full');
      overlay.classList.remove('hidden');
    }
  }

  function closeCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer && overlay) {
      drawer.classList.add('translate-x-full');
      overlay.classList.add('hidden');
    }
  }

  function openWishlistDrawer() {
    const drawer = document.getElementById('wishlist-drawer');
    const overlay = document.getElementById('wishlist-overlay');
    if (drawer && overlay) {
      drawer.classList.remove('translate-x-full');
      overlay.classList.remove('hidden');
    }
  }

  function closeWishlistDrawer() {
    const drawer = document.getElementById('wishlist-drawer');
    const overlay = document.getElementById('wishlist-overlay');
    if (drawer && overlay) {
      drawer.classList.add('translate-x-full');
      overlay.classList.add('hidden');
    }
  }

  // Quick View Modal
  function openQuickView(productId) {
    const product = data.products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('quickview-modal');
    const content = document.getElementById('quickview-content');
    if (!modal || !content) return;

    let selectedColorIdx = 0;
    let selectedSize = product.sizes[0] || 'M';

    function renderModalContent() {
      const activeColor = product.colors[selectedColorIdx] || product.colors[0];

      content.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
          <!-- Image Gallery -->
          <div>
            <div class="relative w-full aspect-square rounded-xl overflow-hidden bg-slate-900 border border-white/10 mb-3">
              <img id="qv-main-img" src="${activeColor.image}" alt="${product.name}" class="w-full h-full object-cover">
              <span class="absolute top-3 left-3 px-2.5 py-1 text-xs font-black bg-[#CCFF00] text-black rounded uppercase">
                ${product.badge}
              </span>
            </div>
            <!-- Secondary Image Thumbnail -->
            <div class="flex items-center gap-3">
              <img src="${activeColor.image}" class="w-16 h-16 rounded-lg object-cover cursor-pointer border-2 border-[#CCFF00]" onclick="document.getElementById('qv-main-img').src='${activeColor.image}'">
              ${activeColor.secondaryImage ? `
                <img src="${activeColor.secondaryImage}" class="w-16 h-16 rounded-lg object-cover cursor-pointer border border-slate-700 hover:border-white" onclick="document.getElementById('qv-main-img').src='${activeColor.secondaryImage}'">
              ` : ''}
            </div>
          </div>

          <!-- Product Details -->
          <div class="flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span>${product.subname}</span>
                <span class="text-amber-400 font-bold">★ ${product.rating} (${product.reviewsCount} 評價)</span>
              </div>
              <h2 class="text-2xl font-black text-white tracking-wide mb-3">${product.name}</h2>
              
              <!-- Price -->
              <div class="flex items-baseline gap-3 mb-4">
                <span class="text-2xl font-black text-[#CCFF00]">${formatPrice(product.price)}</span>
                ${product.originalPrice ? `<span class="text-sm text-slate-500 line-through">${formatPrice(product.originalPrice)}</span>` : ''}
                <span class="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded font-bold">新品特惠</span>
              </div>

              <!-- Tech Highlights -->
              <div class="mb-4">
                <div class="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">搭載黑科技規格:</div>
                <div class="flex flex-wrap gap-2">
                  ${product.tech.map(t => `
                    <span class="text-xs px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-200">
                      ⚡ ${t}
                    </span>
                  `).join('')}
                </div>
              </div>

              <!-- Specs Box -->
              <div class="p-3 bg-white/5 rounded-lg border border-white/5 grid grid-cols-2 gap-2 text-xs text-slate-300 mb-5">
                <div>單腳重量: <strong class="text-white">${product.weight}</strong></div>
                <div>前後掌落差: <strong class="text-white">${product.drop}</strong></div>
                <div class="col-span-2">厚度堆疊: <strong class="text-white">${product.stack}</strong></div>
              </div>

              <!-- Color Selection -->
              <div class="mb-4">
                <div class="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  配色選擇: <span class="text-white font-normal">${activeColor.nameZh}</span>
                </div>
                <div class="flex items-center gap-2">
                  ${product.colors.map((c, i) => `
                    <button class="w-6 h-6 rounded-full border-2 ${selectedColorIdx === i ? 'border-[#CCFF00] ring-2 ring-[#CCFF00]/40 scale-110' : 'border-transparent'} transition-all" style="background-color: ${c.code}" data-idx="${i}">
                    </button>
                  `).join('')}
                </div>
              </div>

              <!-- Size Selection -->
              <div class="mb-6">
                <div class="flex items-center justify-between text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  <span>選擇尺寸:</span>
                  <a href="#size-guide" class="text-[#CCFF00] underline normal-case">尺寸對照表</a>
                </div>
                <div class="flex flex-wrap gap-2">
                  ${product.sizes.map(sz => `
                    <button class="qv-size-btn px-3 py-1.5 rounded border text-xs font-bold ${selectedSize === sz ? 'bg-white text-black border-white' : 'border-slate-700 text-slate-300 hover:border-slate-500'}" data-size="${sz}">
                      ${sz}
                    </button>
                  `).join('')}
                </div>
              </div>
            </div>

            <!-- Actions -->
            <div class="flex items-center gap-3 pt-4 border-t border-slate-800">
              <button id="qv-add-cart-btn" class="flex-1 py-3.5 bg-[#CCFF00] hover:bg-[#b8e600] text-black font-black uppercase text-sm tracking-wider rounded-xl transition-all shadow-lg shadow-[#CCFF00]/15 flex items-center justify-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                立即加入購物車
              </button>
              <button id="qv-wishlist-btn" class="p-3.5 rounded-xl border border-slate-700 hover:border-white text-white transition-colors">
                <svg class="w-5 h-5 ${state.wishlist.includes(product.id) ? 'text-[#FF3366] fill-[#FF3366]' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </button>
            </div>
          </div>
        </div>
      `;

      // Event Listeners inside modal
      content.querySelectorAll('button[data-idx]').forEach(btn => {
        btn.addEventListener('click', () => {
          selectedColorIdx = parseInt(btn.getAttribute('data-idx'), 10);
          renderModalContent();
        });
      });

      content.querySelectorAll('.qv-size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          selectedSize = btn.getAttribute('data-size');
          renderModalContent();
        });
      });

      content.getElementById('qv-add-cart-btn')?.addEventListener('click', () => {
        addToCart(product.id, selectedColorIdx, selectedSize, 1);
        closeQuickView();
      });

      content.getElementById('qv-wishlist-btn')?.addEventListener('click', () => {
        toggleWishlist(product.id);
        renderModalContent();
      });
    }

    renderModalContent();
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeQuickView() {
    const modal = document.getElementById('quickview-modal');
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
  }

  // Live Search Modal
  function setupSearch() {
    const searchModal = document.getElementById('search-modal');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const searchTriggers = document.querySelectorAll('.search-trigger');
    const searchClose = document.getElementById('search-close');

    if (!searchModal) return;

    function openSearch() {
      searchModal.classList.remove('hidden');
      searchInput?.focus();
      document.body.style.overflow = 'hidden';
    }

    function closeSearch() {
      searchModal.classList.add('hidden');
      document.body.style.overflow = 'auto';
      if (searchInput) searchInput.value = '';
      if (searchResults) searchResults.innerHTML = '';
    }

    searchTriggers.forEach(btn => btn.addEventListener('click', openSearch));
    searchClose?.addEventListener('click', closeSearch);

    // Keyboard shortcut Ctrl/Cmd + K
    window.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openSearch();
      }
      if (e.key === 'Escape') {
        closeSearch();
        closeQuickView();
        closeCartDrawer();
        closeWishlistDrawer();
      }
    });

    searchInput?.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      if (!q) {
        searchResults.innerHTML = `
          <div class="py-8 text-center text-slate-500 text-xs">
            輸入商品名稱、技術或運動關鍵字（例如：碳板、GTX、跑鞋、訓練衣）
          </div>
        `;
        return;
      }

      const matches = data.products.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.subname.toLowerCase().includes(q) ||
        p.tech.some(t => t.toLowerCase().includes(q))
      );

      if (matches.length === 0) {
        searchResults.innerHTML = `
          <div class="py-10 text-center text-slate-400">
            <p class="font-bold text-white text-sm mb-1">找不到與「${q}」相關的裝備</p>
            <p class="text-xs text-slate-500">嘗試搜尋：SPEED-X、CARBON、水壺、後背包</p>
          </div>
        `;
        return;
      }

      searchResults.innerHTML = matches.map(p => `
        <div class="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer search-item-match" data-id="${p.id}">
          <img src="${p.colors[0].image}" class="w-12 h-12 rounded object-cover bg-slate-800">
          <div class="flex-1 min-w-0">
            <div class="text-xs font-bold text-white truncate">${p.name}</div>
            <div class="text-[11px] text-slate-400">${p.subname}</div>
          </div>
          <div class="text-xs font-black text-[#CCFF00]">${formatPrice(p.price)}</div>
        </div>
      `).join('');

      searchResults.querySelectorAll('.search-item-match').forEach(item => {
        item.addEventListener('click', () => {
          const pid = item.getAttribute('data-id');
          closeSearch();
          openQuickView(pid);
        });
      });
    });
  }

  // Gear Finder Quiz
  function setupQuiz() {
    const quizContainer = document.getElementById('gear-quiz-container');
    if (!quizContainer) return;

    let currentStep = 0;
    const userChoices = {};

    function renderQuizStep() {
      const q = data.quizQuestions[currentStep];
      if (!q) {
        // Quiz completed, show match!
        showQuizResult();
        return;
      }

      quizContainer.innerHTML = `
        <div class="max-w-2xl mx-auto">
          <div class="flex items-center justify-between text-xs text-slate-400 font-bold uppercase tracking-wider mb-4">
            <span>問題 ${currentStep + 1} / ${data.quizQuestions.length}</span>
            <span class="text-[#CCFF00]">AEROX LAB 智能匹配</span>
          </div>

          <h3 class="text-xl md:text-2xl font-black text-white mb-6">${q.title}</h3>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            ${q.options.map((opt, i) => `
              <button class="quiz-opt-btn p-4 rounded-xl border border-white/10 hover:border-[#CCFF00] bg-white/5 hover:bg-white/10 text-left transition-all flex items-center justify-between group" data-idx="${i}">
                <span class="text-sm font-bold text-white group-hover:text-[#CCFF00] transition-colors">${opt.label}</span>
                <span class="w-6 h-6 rounded-full border border-slate-600 flex items-center justify-center text-xs group-hover:border-[#CCFF00] group-hover:bg-[#CCFF00] group-hover:text-black transition-all">→</span>
              </button>
            `).join('')}
          </div>

          <div class="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div class="bg-[#CCFF00] h-full transition-all duration-300" style="width: ${((currentStep + 1) / data.quizQuestions.length) * 100}%"></div>
          </div>
        </div>
      `;

      quizContainer.querySelectorAll('.quiz-opt-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-idx'), 10);
          userChoices[q.id] = q.options[idx];
          currentStep++;
          renderQuizStep();
        });
      });
    }

    function showQuizResult() {
      // Pick matching product
      let matchedProduct = data.products[0];
      const goal = userChoices['goal'];
      if (goal) {
        if (goal.category === 'training') matchedProduct = data.products[2]; // Core-Force
        else if (goal.category === 'outdoor') matchedProduct = data.products[5]; // Terra-Claw
        else if (userChoices['feel'] && userChoices['feel'].pref === 'cushion') matchedProduct = data.products[1]; // Stride-Flow
        else matchedProduct = data.products[0]; // Speed-X
      }

      quizContainer.innerHTML = `
        <div class="max-w-xl mx-auto p-6 md:p-8 bg-[#12141A] rounded-2xl border border-[#CCFF00]/40 text-center animate-fade-in shadow-2xl">
          <div class="w-12 h-12 mx-auto rounded-full bg-[#CCFF00]/10 text-[#CCFF00] flex items-center justify-center mb-4">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>

          <span class="text-xs font-black tracking-widest text-[#CCFF00] uppercase">智能顧問推薦結果</span>
          <h4 class="text-2xl font-black text-white mt-1 mb-2">${matchedProduct.name}</h4>
          <p class="text-xs text-slate-300 mb-6">${matchedProduct.description}</p>

          <img src="${matchedProduct.colors[0].image}" class="w-full max-h-56 object-cover rounded-xl mb-6 border border-white/10 shadow-lg">

          <div class="flex items-center justify-center gap-4">
            <button id="quiz-add-btn" class="px-6 py-3 bg-[#CCFF00] hover:bg-[#b8e600] text-black font-black text-xs uppercase tracking-wider rounded-lg transition-transform active:scale-95 shadow-lg shadow-[#CCFF00]/20">
              立即將推薦裝備加入購物車 (${formatPrice(matchedProduct.price)})
            </button>
            <button id="quiz-restart-btn" class="px-4 py-3 border border-slate-700 hover:border-white text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors">
              重新測驗
            </button>
          </div>
        </div>
      `;

      document.getElementById('quiz-add-btn')?.addEventListener('click', () => {
        addToCart(matchedProduct.id);
      });

      document.getElementById('quiz-restart-btn')?.addEventListener('click', () => {
        currentStep = 0;
        renderQuizStep();
      });
    }

    renderQuizStep();
  }

  // Coupon Code application
  function setupCoupons() {
    const couponInput = document.getElementById('coupon-input');
    const couponBtn = document.getElementById('apply-coupon-btn');
    if (!couponBtn || !couponInput) return;

    couponBtn.addEventListener('click', () => {
      const code = couponInput.value.trim().toUpperCase();
      if (!code) {
        showToast('請輸入折扣代碼', 'error');
        return;
      }

      if (data.coupons[code]) {
        state.appliedCoupon = data.coupons[code];
        showToast(`已成功套用優惠碼【${code}】: ${data.coupons[code].desc}`);
        couponInput.value = '';
        updateCartUI();
      } else {
        showToast('無效的折扣碼，請確認後重試 (提示：試試 AEROX2026)', 'error');
      }
    });
  }

  // Simulated Checkout Modal & Confetti
  function setupCheckout() {
    const checkoutBtn = document.getElementById('cart-checkout-btn');
    const checkoutModal = document.getElementById('checkout-modal');
    const closeCheckoutBtn = document.getElementById('close-checkout-btn');
    const confirmOrderBtn = document.getElementById('confirm-order-btn');

    if (!checkoutBtn || !checkoutModal) return;

    checkoutBtn.addEventListener('click', () => {
      closeCartDrawer();
      checkoutModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });

    closeCheckoutBtn?.addEventListener('click', () => {
      checkoutModal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    });

    confirmOrderBtn?.addEventListener('click', () => {
      // Trigger Order Success View
      triggerConfetti();
      const modalBody = document.getElementById('checkout-modal-body');
      if (modalBody) {
        const orderNumber = 'AX-' + Math.floor(100000 + Math.random() * 900000);
        modalBody.innerHTML = `
          <div class="p-8 text-center">
            <div class="w-16 h-16 mx-auto rounded-full bg-[#CCFF00]/10 text-[#CCFF00] flex items-center justify-center mb-4">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h3 class="text-2xl font-black text-white mb-2">訂單已成功建立！</h3>
            <p class="text-sm text-slate-300 mb-4">感謝您支持 AEROX 極限運動品牌。官方專屬戰靴正整裝待發。</p>
            <div class="p-4 bg-white/5 rounded-xl border border-white/10 text-left text-xs text-slate-300 mb-6 space-y-1.5">
              <div>訂單編號: <strong class="text-white">${orderNumber}</strong></div>
              <div>配送方式: <strong class="text-white">黑貓黑標極速宅急便 (預計 24 小時內送達)</strong></div>
              <div>付款方式: <strong class="text-white">線上信用卡 / Apple Pay 授權成功</strong></div>
              <div>售後保障: <strong class="text-[#CCFF00]">30 天免費退換貨 & 原廠結構保固</strong></div>
            </div>
            <button id="finish-order-btn" class="w-full py-3.5 bg-[#CCFF00] hover:bg-[#b8e600] text-black font-extrabold uppercase text-xs tracking-wider rounded-xl transition-all shadow-lg shadow-[#CCFF00]/20">
              返回官網首頁繼續探索
            </button>
          </div>
        `;

        document.getElementById('finish-order-btn')?.addEventListener('click', () => {
          state.cart = [];
          state.appliedCoupon = null;
          saveState();
          checkoutModal.classList.add('hidden');
          document.body.style.overflow = 'auto';
        });
      }
    });
  }

  // Simple Confetti effect
  function triggerConfetti() {
    const colors = ['#CCFF00', '#00F0FF', '#FF3366', '#FFFFFF'];
    for (let i = 0; i < 40; i++) {
      const c = document.createElement('div');
      c.className = 'confetti';
      c.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      c.style.left = Math.random() * 100 + 'vw';
      c.style.animation = `fall ${2 + Math.random() * 2}s linear forwards`;
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 4000);
    }
  }

  // Currency & Language switchers
  function setupCurrencyAndLang() {
    const curSelect = document.getElementById('currency-select');
    if (curSelect) {
      curSelect.value = state.currency;
      curSelect.addEventListener('change', (e) => {
        state.currency = e.target.value;
        saveState();
        renderProducts();
        updateCartUI();
        updateWishlistUI();
      });
    }

    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        renderProducts();
      });
    }
  }

  // Newsletter Subscription
  function setupNewsletter() {
    const form = document.getElementById('newsletter-form');
    const input = document.getElementById('newsletter-email');
    if (!form || !input) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = input.value.trim();
      if (!email || !email.includes('@')) {
        showToast('請輸入有效的 Email 地址', 'error');
        return;
      }
      showToast('恭喜訂閱成功！專屬 85 折折扣碼【AEROX2026】已發送至您的信箱！');
      input.value = '';
    });
  }

  // Global Navigation & UI Bindings
  document.getElementById('cart-open-btn')?.addEventListener('click', openCartDrawer);
  document.getElementById('cart-close-btn')?.addEventListener('click', closeCartDrawer);
  document.getElementById('cart-overlay')?.addEventListener('click', closeCartDrawer);

  document.getElementById('wishlist-open-btn')?.addEventListener('click', openWishlistDrawer);
  document.getElementById('wishlist-close-btn')?.addEventListener('click', closeWishlistDrawer);
  document.getElementById('wishlist-overlay')?.addEventListener('click', closeWishlistDrawer);

  document.getElementById('quickview-close')?.addEventListener('click', closeQuickView);
  document.getElementById('quickview-overlay')?.addEventListener('click', closeQuickView);

  // Expose global methods for inline HTML calls
  window.aeroxApp = {
    openCartDrawer,
    closeCartDrawer,
    openWishlistDrawer,
    closeWishlistDrawer,
    openQuickView,
    closeQuickView,
    addToCart,
    toggleWishlist
  };

  // Run initial renders
  renderCategories();
  renderProducts();
  updateCartUI();
  updateWishlistUI();
  setupSearch();
  setupQuiz();
  setupCoupons();
  setupCheckout();
  setupCurrencyAndLang();
  setupNewsletter();
});
