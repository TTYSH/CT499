<template>
    <div class="modal-overlay" :class="{ active: isOpen }">
        <div class="modal-backdrop" @click="closeModal"></div>
        <div class="modal-content modal-lg">
            <button class="modal-close material-symbols-outlined" @click="closeModal">close</button>
            <div class="book-detail-layout" v-if="book">
                <!-- Visuals -->
                <div class="book-visual">
                    <div class="book-cover-frame">
                        <img alt="Detailed View" class="book-cover-img" :src="book.img">
                    </div>
                    <div style="text-align: center;">
                        <div class="book-status-chip" :style="{ backgroundColor: book.bgColor, color: book.color }">{{ book.status }}</div>
                        <p class="book-location">Vị trí: {{ book.location || 'Kệ A-12, Tầng 2' }}</p>
                    </div>
                </div>
                <!-- Content -->
                <div class="book-info">
                    <div class="stamp-archived">ARCHIVED</div>
                    
                    <span class="book-genre">{{ book.genre }}</span>
                    <h2 class="book-detail-title">{{ book.title }}</h2>
                    <p class="book-detail-author">{{ book.author }}</p>

                    <div class="book-meta-grid">
                        <div>
                            <p class="meta-item-label">ISBN-13</p>
                            <p class="meta-item-value">{{ book.isbn }}</p>
                        </div>
                        <div>
                            <p class="meta-item-label">Số lượng tồn kho</p>
                            <p class="meta-item-value">{{ book.stock }}</p>
                        </div>
                        <div>
                            <p class="meta-item-label">Ngày nhập kho</p>
                            <p class="meta-item-value">14 Tháng Ba, 1924</p>
                        </div>
                        <div>
                            <p class="meta-item-label">Người thẩm định</p>
                            <p class="meta-item-value">Lê Văn Hưu</p>
                        </div>
                    </div>

                    <div>
                        <p class="book-desc-label">Tóm tắt nội dung</p>
                        <p class="book-desc-text">
                            {{ book.desc }}
                        </p>
                    </div>

                    <div class="book-actions">
                        <button class="btn-borrow sticker-shadow">MƯỢN SÁCH</button>
                        <button class="btn-edit">SỬA ĐỔI</button>
                    </div>
                    
                    <div class="punched-hole-center punched-hole" style="display: none;"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    },
    book: {
        type: Object,
        default: null
    }
})

const emit = defineEmits(['close'])

const closeModal = () => {
    emit('close')
}
</script>

<style scoped>
/* Modals */
.modal-overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(39, 19, 16, 0.4);
    backdrop-filter: blur(2px);
    z-index: 50;
    display: none;
    align-items: center;
    justify-content: center;
    padding: 16px;
}
.modal-overlay.active { display: flex; }
.modal-backdrop { position: absolute; inset: 0; }

.modal-content {
    position: relative;
    background-color: var(--color-surface);
    background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
    border: 1px solid rgba(39, 19, 16, 0.3);
    box-shadow: 2px 2px 0px 0px rgba(62, 39, 35, 0.15);
    width: 100%;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    z-index: 10;
}
.modal-lg { max-width: 896px; }

.modal-close {
    position: absolute;
    top: 16px; right: 16px;
    z-index: 20;
    color: var(--color-on-surface-variant);
    transition: color 0.2s;
    padding: 8px;
}
.modal-close:hover { color: var(--color-primary); }

/* Book Detail Modal Styles */
.book-detail-layout {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
}
@media (min-width: 768px) {
    .book-detail-layout { flex-direction: row; overflow-y: hidden; }
}

.book-visual {
    background-color: var(--color-surface-container-high);
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid rgba(211, 195, 192, 0.5);
    width: 100%;
}
@media (min-width: 768px) {
    .book-visual { width: 33.333%; border-bottom: none; border-right: 1px solid rgba(211, 195, 192, 0.5); }
}

.book-cover-frame {
    width: 100%;
    aspect-ratio: 3/4;
    border: 2px solid #ffffff;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
    margin-bottom: 24px;
    overflow: hidden;
}
.book-cover-img {
    width: 100%; height: 100%;
    object-fit: cover;
}
.book-status-chip {
    padding: 4px 16px;
    background-color: var(--color-secondary-container);
    color: var(--color-on-secondary-container);
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 8px;
}
.book-location { font-size: 16px; color: var(--color-on-surface-variant); }

.book-info {
    padding: 40px;
    display: flex;
    flex-direction: column;
    position: relative;
    flex: 1;
    overflow-y: auto;
}

.stamp-archived {
    position: absolute;
    top: 32px; right: 64px;
    transform: rotate(12deg);
    opacity: 0.1;
    pointer-events: none;
    border: 4px solid var(--color-primary);
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 36px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-primary);
}

.book-genre {
    font-size: 14px;
    font-weight: 700;
    color: var(--color-secondary);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 4px;
}
.book-detail-title {
    font-family: var(--font-playfair);
    font-size: 32px;
    font-weight: 700;
    color: var(--color-primary);
    margin-bottom: 4px;
}
.book-detail-author {
    font-family: var(--font-playfair);
    font-size: 20px;
    font-style: italic;
    color: var(--color-on-surface-variant);
    margin-bottom: 24px;
}

.book-meta-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    padding: 24px 0;
    border-top: 1px solid rgba(211, 195, 192, 0.3);
    border-bottom: 1px solid rgba(211, 195, 192, 0.3);
    margin-bottom: 32px;
}
.meta-item-label {
    font-size: 12px;
    font-weight: 700;
    color: rgba(80, 68, 66, 0.7);
    text-transform: uppercase;
    margin-bottom: 4px;
}
.meta-item-value {
    font-size: 14px;
    font-weight: 700;
    color: var(--color-primary);
}

.book-desc-label {
    font-size: 12px;
    font-weight: 700;
    color: rgba(80, 68, 66, 0.7);
    text-transform: uppercase;
    margin-bottom: 8px;
}
.book-desc-text {
    font-size: 16px;
    line-height: 1.6;
    font-style: italic;
    color: rgba(39, 19, 16, 0.9);
    margin-bottom: 32px;
}

.book-actions {
    margin-top: auto;
    display: flex;
    gap: 16px;
}
.btn-borrow {
    flex: 1;
    background-color: var(--color-secondary);
    color: var(--color-on-secondary);
    padding: 12px;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-align: center;
    transition: transform 0.2s;
}
.btn-borrow:hover { transform: translateY(-2px); }
.btn-edit {
    padding: 12px 24px;
    border: 1px solid var(--color-outline);
    color: var(--color-on-surface-variant);
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    transition: background-color 0.2s;
}
.btn-edit:hover { background-color: var(--color-surface-container-high); }

.sticker-shadow { box-shadow: 2px 2px 0px 0px rgba(62, 39, 35, 0.15); }
.punched-hole {
    width: 12px;
    height: 12px;
    background-color: var(--color-surface);
    border-radius: 50%;
    border: 1px solid rgba(62, 39, 35, 0.15);
    box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
}
.punched-hole-center {
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
}
</style>
