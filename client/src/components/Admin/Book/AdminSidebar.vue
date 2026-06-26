<template>
    <div>
        <!-- Side Navigation Bar -->
        <aside class="sidebar">
            <div class="sidebar-header">
                <h1 class="sidebar-title">The Archive</h1>
                <p class="sidebar-subtitle">Est. 1924</p>
            </div>
            <nav class="nav-list">
                <router-link to="/admin" class="nav-item" active-class="active" exact-active-class="active">
                    <span class="material-symbols-outlined">dashboard</span>
                    <span>Tổng quan</span>
                </router-link>
                <router-link to="/admin/books" class="nav-item" active-class="active">
                    <span class="material-symbols-outlined">menu_book</span>
                    <span>Thư viện sách</span>
                </router-link>
                <router-link to="/admin/requests" class="nav-item" active-class="active">
                    <span class="material-symbols-outlined">pending_actions</span>
                    <span>Yêu cầu</span>
                </router-link>
                <router-link to="/admin/ledger" class="nav-item" active-class="active">
                    <span class="material-symbols-outlined">history_edu</span>
                    <span>Mượn - Trả</span>
                </router-link>
                <router-link to="/admin/readers" class="nav-item" active-class="active">
                    <span class="material-symbols-outlined">group</span>
                    <span>Độc giả</span>
                </router-link>
                <router-link to="/admin/authors" class="nav-item" active-class="active">
                    <span class="material-symbols-outlined">person</span>
                    <span>Tác giả</span>
                </router-link>
            </nav>
        </aside>

        <!-- Mobile Bottom Navigation -->
        <nav class="mobile-nav custom-scrollbar">
            <router-link to="/admin" class="mobile-nav-item" active-class="active" exact-active-class="active">
                <span class="material-symbols-outlined">dashboard</span>
                <span class="mobile-nav-label">Tổng quan</span>
            </router-link>
            <router-link to="/admin/books" class="mobile-nav-item" active-class="active">
                <span class="material-symbols-outlined">menu_book</span>
                <span class="mobile-nav-label">Sách</span>
            </router-link>
            <router-link to="/admin/requests" class="mobile-nav-item" active-class="active">
                <span class="material-symbols-outlined">pending_actions</span>
                <span class="mobile-nav-label">Yêu cầu</span>
            </router-link>
            <router-link to="/admin/ledger" class="mobile-nav-item" active-class="active">
                <span class="material-symbols-outlined">history_edu</span>
                <span class="mobile-nav-label">Mượn-Trả</span>
            </router-link>
            <router-link to="/admin/readers" class="mobile-nav-item" active-class="active">
                <span class="material-symbols-outlined">group</span>
                <span class="mobile-nav-label">Độc giả</span>
            </router-link>
            <router-link to="/admin/authors" class="mobile-nav-item" active-class="active">
                <span class="material-symbols-outlined">person</span>
                <span class="mobile-nav-label">Tác giả</span>
            </router-link>
        </nav>
    </div>
</template>

<style scoped>
/* Sidebar Layout */
.sidebar {
    display: none;
    flex-direction: column;
    width: 256px;
    height: 100vh;
    position: sticky;
    top: 0;
    background-color: var(--color-surface);
    border-right: 1px solid rgba(211, 195, 192, 0.5);
    box-shadow: 2px 0px 0px 0px rgba(62, 39, 35, 0.05);
    z-index: 20;
}
@media (min-width: 768px) { .sidebar { display: flex; } }

.sidebar-header {
    padding: 24px;
}
.sidebar-title {
    font-family: var(--font-playfair);
    font-size: 24px;
    font-weight: 600;
    color: var(--color-primary);
    font-style: italic;
}
.sidebar-subtitle {
    font-size: 14px;
    font-weight: 700;
    color: var(--color-on-surface-variant);
    opacity: 0.7;
}

.nav-list {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 8px 16px;
    gap: 8px;
}

.nav-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    color: var(--color-on-surface-variant);
    font-size: 14px;
    font-weight: 700;
    border-radius: 4px;
    transition: all 0.2s;
}
.nav-item:hover {
    background-color: var(--color-surface-container-high);
    transform: translateX(4px);
}
.nav-item.active {
    background-color: var(--color-secondary-container);
    color: var(--color-on-secondary-container);
    border-left: 4px solid var(--color-secondary);
}

.sidebar-footer {
    margin-top: auto;
    padding: 24px 16px;
}
.btn-new-entry {
    width: 100%;
    background-color: var(--color-secondary);
    color: var(--color-on-secondary);
    padding: 12px;
    font-size: 14px;
    font-weight: 700;
    transition: transform 0.2s;
}
.btn-new-entry:hover { transform: translate(-1px, -1px); }
.btn-new-entry:active { transform: scale(0.95); }

/* Mobile Bottom Nav */
.mobile-nav {
    display: flex;
    position: fixed;
    bottom: 0; left: 0; right: 0;
    background-color: var(--color-surface);
    border-top: 1px solid rgba(211, 195, 192, 0.3);
    box-shadow: 0px -2px 8px rgba(0,0,0,0.05);
    justify-content: space-around;
    padding: 12px 8px;
    z-index: 40;
}
@media (min-width: 768px) { .mobile-nav { display: none; } }
.mobile-nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    color: var(--color-on-surface-variant);
}
.mobile-nav-item.active { color: var(--color-primary); }
.mobile-nav-label { font-size: 10px; font-weight: 700; text-transform: uppercase; }

.sticker-shadow { box-shadow: 2px 2px 0px 0px rgba(62, 39, 35, 0.15); }
</style>
