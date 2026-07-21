<script setup>
defineEmits(['open-cart']);
</script>
<template>
    <header class="top-nav-bar">
        <div class="nav-container">
            <div class="nav-brand">
                <RouterLink active-class="active" to="/">
                    <span class="material-symbols-outlined" style="color: var(--color-secondary);">menu_book</span>
                    BookWorm
                </RouterLink>
            </div>
            <nav class="nav-links">
                <RouterLink class="nav-link" exact-active-class="active" to="/">Trang chủ</RouterLink>
                <RouterLink class="nav-link" active-class="active" to="/collection">Tủ Sách</RouterLink>
                <RouterLink class="nav-link" active-class="active" to="/contact">Liên hệ</RouterLink>
                <RouterLink class="nav-link" active-class="active" to="/account">Tài khoản</RouterLink>
            </nav>
            <div class="nav-actions">
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

.nav-actions { 
    display: flex; 
    align-items: center; 
    gap: 16px; 
}

.cart-btn, .menu-btn {
    color: var(--color-on-surface-variant);
    transition: color 0.2s;
}
.cart-btn:hover, .menu-btn:hover { color: var(--color-primary); }
.menu-btn { display: block; }
@media (min-width: 768px) { .menu-btn { display: none; } }
</style>
