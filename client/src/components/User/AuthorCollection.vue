<template>
    <div class="author-collection">
        <header class="page-header">
            <div class="header-content">
                <div class="header-main">
                    <div class="header-image-wrapper" @click="$emit('show-profile')">
                        <img alt="Tác giả" class="header-image"
                            src="/images/TacGia/17_Stephen King.jpg">
                    </div>
                    <div class="header-info">
                        <h1 class="page-title" @click="$emit('show-profile')">Friedrich Nietzsche</h1>
                        <p class="author-description">Nhà triết học, nhà phê bình văn hóa và nhà ngữ văn học người Đức. Công trình của ông đã gây ra ảnh hưởng sâu sắc đến triết học phương Tây hiện đại và lịch sử trí thức học, đặc biệt qua các tác phẩm nổi tiếng như "Zarathustra đã nói như thế".</p>
                    </div>
                </div>
                <button class="header-btn" @click="$emit('show-profile')">Xem thêm</button>
            </div>
            <span class="material-symbols-outlined header-bg-icon">history_edu</span>
        </header>
    </div>
</template>

<script setup>
defineEmits(['show-profile'])
</script>

<style scoped>
/* Page Header */
.page-header {
    margin-bottom: 20px;
    background-color: var(--color-surface-container);
    padding: 16px;
    border: 1px solid rgba(211, 195, 192, 0.3);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 32px;
    border-radius: 10px;
}

@media (min-width: 768px) {
    .page-header {
        flex-direction: row;
        align-items: center;
    }
}

.header-content {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
}

@media (min-width: 768px) {
    .header-content {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
}

.header-main {
    display: flex;
    align-items: center;
    gap: 32px;
}

.header-image-wrapper {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    flex-shrink: 0;
    cursor: pointer;
}

.header-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.page-title {
    font-family: var(--font-playfair);
    font-size: 25px;
    font-weight: 700;
    color: var(--color-primary);
    letter-spacing: -0.02em;
    cursor: pointer;
    transition: color 0.2s;
    margin: 0;
}
.page-title:hover {
    color: var(--color-secondary);
}

.header-info {
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 600px;
}

.author-description {
    font-size: 14px;
    color: var(--color-on-surface-variant, #555);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.5;
    margin: 0;
}

.header-btn {
    width: 20%;
    padding: 8px 8px;
    border: 1px solid var(--color-secondary);
    color: var(--color-secondary);
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    border-radius: 10px;
    transition: all 0.2s;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    background: none;
}
.header-btn:hover {
    background-color: var(--color-secondary-container);
}

.header-bg-icon {
    position: absolute;
    right: -32px;
    bottom: -32px;
    font-size: 200px;
    color: rgba(211, 195, 192, 0.1);
    transform: rotate(12deg);
    pointer-events: none;
}
</style>
