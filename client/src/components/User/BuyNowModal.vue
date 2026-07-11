<template>
    <div class="modal-overlay" v-if="isOpen" @click.self="closeModal">
        <div class="modal-content">
            <header class="modal-header">
                <h2>Xác nhận mượn sách</h2>
                <button class="close-btn" @click="closeModal">
                    <span class="material-symbols-outlined">close</span>
                </button>
            </header>
            <div class="modal-body" v-if="book">
                <div class="book-summary">
                    <img :src="book.image || '/images/Sach/204_7_thoi_quen_cua_ban_tre_thanh_dat.png'" class="book-cover" alt="Book Cover" />
                    <div class="book-info">
                        <h3 class="book-title">{{ book.title || 'Tên sách' }}</h3>
                        <p class="book-author">{{ book.author || 'Tác giả' }}</p>
                        <div class="info-grid">
                            <div class="info-item">
                                <span class="label">Mã sách:</span>
                                <span class="value">{{ book.code || 'B001-XL' }}</span>
                            </div>
                            <div class="info-item">
                                <span class="label">Đơn giá:</span>
                                <span class="value price">{{ book.price || '100.000đ' }}</span>
                            </div>
                            <div class="info-item">
                                <span class="label">Năm xuất bản:</span>
                                <span class="value">{{ book.year || '2023' }}</span>
                            </div>
                            <div class="info-item">
                                <span class="label">Thể loại:</span>
                                <span class="value">{{ book.category || 'Văn học' }}</span>
                            </div>
                            <div class="info-item">
                                <span class="label">Nhà sản xuất:</span>
                                <span class="value">{{ book.publisher || 'NXB Tổng Hợp' }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="modal-footer">
                <button class="btn-cancel" @click="closeModal">Hủy</button>
                <button class="btn-confirm" @click="confirmPurchase">Xác nhận mượn</button>
            </footer>
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
        default: () => ({})
    }
});

const emit = defineEmits(['close', 'confirm']);

const closeModal = () => {
    emit('close');
};

const confirmPurchase = () => {
    emit('confirm', props.book);
};
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    backdrop-filter: blur(4px);
}

.modal-content {
    background-color: var(--color-surface, #fff);
    border: 1px solid var(--color-outline-variant, #ccc);
    border-radius: 12px;
    width: 90%;
    max-width: 600px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    border-bottom: 1px solid var(--color-outline-variant, #eee);
    background-color: var(--color-surface-container-lowest, #f9f9f9);
}

.modal-header h2 {
    font-family: var(--font-playfair, serif);
    font-size: 20px;
    color: var(--color-primary, #3e2723);
    margin: 0;
}

.close-btn {
    background: none;
    border: none;
    color: var(--color-on-surface-variant, #666);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    border-radius: 50%;
    transition: background-color 0.2s;
}

.close-btn:hover {
    background-color: var(--color-surface-container, #eee);
}

.modal-body {
    padding: 24px;
}

.book-summary {
    display: flex;
    gap: 24px;
}

@media (max-width: 480px) {
    .book-summary {
        flex-direction: column;
        align-items: center;
    }
}

.book-cover {
    width: 140px;
    aspect-ratio: 3 / 4;
    object-fit: cover;
    border: 1px solid rgba(131, 84, 37, 0.2);
    border-radius: 4px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
}

.book-info {
    flex: 1;
}

.book-title {
    font-family: var(--font-merriweather, serif);
    font-size: 20px;
    color: var(--color-primary, #3e2723);
    margin: 0 0 8px 0;
    line-height: 1.3;
}

.book-author {
    font-size: 14px;
    color: var(--color-on-surface-variant, #666);
    margin-bottom: 16px;
    font-style: italic;
}

.info-grid {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.info-item {
    display: flex;
    align-items: baseline;
    gap: 8px;
}

.info-item .label {
    font-size: 13px;
    color: var(--color-on-surface-variant, #666);
    width: 110px;
    flex-shrink: 0;
}

.info-item .value {
    font-size: 14px;
    font-weight: 600;
    color: var(--color-on-surface, #333);
}

.info-item .value.price {
    color: crimson;
    font-size: 18px;
}

.modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    padding: 16px 24px;
    border-top: 1px solid var(--color-outline-variant, #eee);
    background-color: var(--color-surface-container-lowest, #f9f9f9);
}

.btn-cancel, .btn-confirm {
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;
}

.btn-cancel {
    background-color: transparent;
    border: 1px solid var(--color-outline, #ccc);
    color: var(--color-on-surface, #333);
}

.btn-cancel:hover {
    background-color: var(--color-surface-container, #eee);
}

.btn-confirm {
    background-color: var(--color-secondary, #835425);
    color: var(--color-on-secondary, #fff);
    border: 1px solid var(--color-secondary, #835425);
    box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.1);
}

.btn-confirm:hover {
    background-color: var(--color-primary, #3e2723);
    border-color: var(--color-primary, #3e2723);
}
</style>
