<template>
    <header class="top-bar">
        <div class="top-brand">Librarian's Registry</div>
        <div class="top-actions">
            <div class="search-wrapper">
                <span class="material-symbols-outlined search-icon">search</span>
                <input class="search-input" placeholder="Tìm kiếm kho lưu trữ..." type="text">
            </div>
            <div class="icon-actions">
                <button class="icon-btn material-symbols-outlined">notifications</button>
                <button class="icon-btn material-symbols-outlined">account_circle</button>
            </div>
        </div>
    </header>
</template>

<style scoped>
/* Top Bar */
.top-bar {
    background-color: var(--color-surface-container-low);
    position: sticky;
    top: 0;
    z-index: 10;
    border-bottom: 1px solid rgba(211, 195, 192, 0.3);
    box-shadow: 2px 2px 0px 0px rgba(62, 39, 35, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px var(--margin-mobile);
}
@media (min-width: 768px) { .top-bar { padding: 16px var(--margin-desktop); } }

.top-brand {
    font-family: var(--font-playfair);
    font-size: 24px;
    font-weight: 700;
    color: var(--color-primary);
}

.top-actions {
    display: flex;
    align-items: center;
    gap: 24px;
}
.search-wrapper {
    display: none;
    align-items: center;
    background-color: var(--color-surface-container-lowest);
    border: 1px solid rgba(211, 195, 192, 0.5);
    border-radius: 2px;
    padding: 6px 12px;
}
@media (min-width: 768px) { .search-wrapper { display: flex; } }
.search-input {
    width: 256px;
    font-size: 16px;
    padding: 0 8px;
    color: var(--color-on-surface);
}
.search-icon { color: var(--color-outline); }

.icon-actions { display: flex; gap: 16px; }
.icon-btn {
    color: var(--color-primary);
    padding: 8px;
    transition: background-color 0.2s;
}
.icon-btn:hover { background-color: var(--color-surface-container-high); }
</style>
