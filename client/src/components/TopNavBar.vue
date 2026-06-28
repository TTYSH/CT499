<script setup>
defineEmits(['open-cart']);
</script>
<template>
    <header class="top-nav-bar">
        <div class="nav-container">
            <div class="nav-brand">
                <span class="material-symbols-outlined" style="color: var(--color-secondary);">menu_book</span>
                BookWorm
            </div>
            <nav class="nav-links">
                <RouterLink class="nav-link" exact-active-class="active" to="/">Trang chủ</RouterLink>      
                <RouterLink class="nav-link" active-class="active" to="/collection">Bộ sưu tập</RouterLink>
                <RouterLink class="nav-link" active-class="active" to="/introduction">Giới thiệu</RouterLink>
                <RouterLink class="nav-link" active-class="active" to="/account">Tài khoản</RouterLink>
            </nav>
            <div class="nav-actions">
                <div class="search-box">
                    <input class="search-input" placeholder="Tìm kiếm tài liệu..." type="text">
                    <span class="material-symbols-outlined search-icon">search</span>
                </div>
                <a href="#" class="cart-btn" @click.prevent="$emit('open-cart')"><span class="material-symbols-outlined">shopping_cart</span></a>
                <button class="menu-btn"><span class="material-symbols-outlined">menu</span></button>
            </div>
        </div>
    </header>
</template>

<style scoped>
/* Top Navigation */
.top-nav-bar {
    background-color: var(--color-surface);
    border-bottom: 1px solid rgba(211, 195, 192, 0.3);
    box-shadow: 2px 2px 0px 0px rgba(62, 39, 35, 0.1);
    position: sticky;
    top: 0;
    z-index: 50;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 16px var(--margin-mobile);
    max-width: var(--max-width);
    margin: 0 auto;
}
@media (min-width: 768px) { .nav-container { padding: 16px var(--margin-desktop); } }

.nav-brand {
    font-family: var(--font-playfair);
    font-size: 24px;
    font-weight: 600;
    color: var(--color-primary);
    font-style: italic;
    letter-spacing: -0.02em;
    display: flex;
    align-items: center;
    gap: 8px;
}

.nav-links {
    display: none;
    gap: 32px;
    align-items: center;
}
@media (min-width: 768px) { .nav-links { display: flex; } }

.nav-link {
    font-size: 14px;
    font-weight: 700;
    color: var(--color-on-surface-variant);
    transition: color 0.2s, transform 0.2s;
    letter-spacing: 0.05em;
}
.nav-link:hover { color: var(--color-primary); transform: translateY(-1px); }
.nav-link.active {
    color: var(--color-primary);
    border-bottom: 2px solid var(--color-secondary);
    padding-bottom: 4px;
}

.nav-actions { display: flex; align-items: center; gap: 16px; }

.search-box { display: none; position: relative; }
@media (min-width: 640px) { .search-box { display: block; } }

.search-input {
    background-color: var(--color-surface-container-low);
    border-bottom: 1px solid var(--color-outline-variant);
    padding: 4px 40px 4px 8px;
    font-size: 16px;
    color: var(--color-on-surface);
    transition: border-color 0.2s;
    width: 200px;
}
.search-input:focus { border-bottom-color: var(--color-secondary); }
.search-input::placeholder { font-style: italic; opacity: 0.7; }
.search-icon {
    position: absolute;
    right: 8px; top: 50%;
    transform: translateY(-50%);
    color: var(--color-outline);
    pointer-events: none;
}

.cart-btn, .menu-btn {
    color: var(--color-on-surface-variant);
    transition: color 0.2s;
}
.cart-btn:hover, .menu-btn:hover { color: var(--color-primary); }
.menu-btn { display: block; }
@media (min-width: 768px) { .menu-btn { display: none; } }
</style>
