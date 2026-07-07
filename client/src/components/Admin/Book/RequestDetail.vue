<template>
    <div class="modal-overlay" @click.self="$emit('close')">
        <div class="detail-wrapper modal-content">
            <div class="detail-header">
                <div>
                    <span class="detail-header-title">Chi tiết yêu cầu</span>
                    <span class="detail-header-id">#REQ-8842</span>
                </div>
                <button class="material-symbols-outlined btn-close-modal" @click="$emit('close')" title="Đóng">close</button>
            </div>
            
            <div class="detail-body">
                <!-- Book 1 -->
                <div class="book-item">
                    <div class="book-cover-mini">
                        <img alt="Cover" src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg">
                    </div>
                    <div class="book-details">
                        <h4 class="book-title">Những Kẻ Khốn Khổ - Tập 1</h4>
                        <p class="book-author">Victor Hugo</p>
                        <div class="book-status-row">
                            <span class="ink-stamp-moss" style="font-size: 8px;">Sẵn Có</span>
                            <span class="book-qty">SL: 01</span>
                        </div>
                    </div>
                </div>
                
                <!-- Book 2 -->
                <div class="book-item">
                    <div class="book-cover-mini">
                        <img alt="Cover" src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg">
                    </div>
                    <div class="book-details">
                        <h4 class="book-title">Lịch Sử Triết Học Tây Phương</h4>
                        <p class="book-author">Bertrand Russell</p>
                        <div class="book-status-row">
                            <span class="ink-stamp-moss" style="font-size: 8px;">Sẵn Có</span>
                            <span class="book-qty">SL: 01</span>
                        </div>
                    </div>
                </div>

                <!-- Book 3 -->
                <div class="book-item">
                    <div class="book-cover-mini">
                        <img alt="Cover" src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg">
                    </div>
                    <div class="book-details">
                        <h4 class="book-title">Thiên Văn Học Nhập Môn</h4>
                        <p class="book-author">John Doe</p>
                        <div class="book-status-row">
                            <span class="ink-stamp-burgundy" style="font-size: 8px;">Hết Sách</span>
                            <span class="book-qty">SL: 01</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="detail-footer">
                <button class="btn-large btn-primary-action">Phê Duyệt</button>
                <button class="btn-large btn-outline-action">Từ Chối</button>
            </div>
        </div>
    </div>
</template>

<script setup>
defineEmits(['close'])
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(62, 39, 35, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 24px;
}

.modal-content {
    width: 100%;
    max-width: 600px;
    max-height: 90vh;
    border-radius: 8px;
}

.btn-close-modal {
    background: none;
    border: none;
    color: var(--color-on-primary-container);
    cursor: pointer;
    font-size: 24px;
    padding: 4px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;
}

.btn-close-modal:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

.detail-wrapper {
    display: flex;
    flex-direction: column;
    background-color: var(--color-surface-container);
    border: 1px solid var(--color-outline-variant);
    box-shadow: 2px 2px 0px 0px rgba(62, 39, 35, 0.15);
    height: 100%;
    overflow: hidden;
    position: relative;
}

.detail-header {
    background-color: var(--color-primary-container);
    color: var(--color-on-primary-container);
    padding: 16px 24px;
    border-bottom: 1px solid rgba(211, 195, 192, 0.3);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.detail-header-title {
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    display: block;
}

.detail-header-id {
    font-size: 16px;
}

.detail-body {
    flex: 1;
    overflow-y: auto;
    max-height: 500px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.book-item {
    display: flex;
    gap: 16px;
    align-items: center;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(211, 195, 192, 0.4);
}

.book-item:last-child {
    border-bottom: none;
    padding-bottom: 0;
}

.book-cover-mini {
    width: 64px;
    height: 80px;
    background-color: #ffffff;
    border: 1px solid rgba(39, 19, 16, 0.2);
    padding: 4px;
    flex-shrink: 0;
}

.book-cover-mini img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
}

.book-details {
    flex: 1;
}

.book-title {
    font-family: var(--font-playfair);
    font-size: 18px;
    font-weight: 600;
    color: var(--color-primary);
    line-height: 1.2;
    margin-bottom: 4px;
}

.book-author {
    font-size: 12px;
    color: var(--color-on-surface-variant);
    font-style: italic;
}

.book-status-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 8px;
}

.book-qty {
    font-size: 12px;
    font-weight: 700;
}

.detail-footer {
    padding: 24px;
    background-color: var(--color-surface-container-high);
    border-top: 1px solid rgba(211, 195, 192, 0.3);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-top: auto;
}

.btn-large {
    padding: 12px;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    box-shadow: 2px 2px 0px 0px rgba(62, 39, 35, 0.15);
    transition: transform 0.2s;
    text-align: center;
    border: none;
    cursor: pointer;
}

.btn-large:hover {
    transform: translateY(-2px);
}

.btn-large:active {
    transform: translateY(0);
}

.btn-primary-action {
    background-color: var(--color-primary);
    color: var(--color-on-primary);
}

.btn-outline-action {
    background-color: var(--color-surface);
    color: var(--color-error);
    border: 1px solid var(--color-error);
}

.ink-stamp-burgundy {
    border: 1.5px solid #3E2723;
    color: #3E2723;
    transform: rotate(-2deg);
    display: inline-block;
    padding: 2px 8px;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: 0.05em;
}

.ink-stamp-moss {
    border: 1.5px solid #3c4b3a;
    color: #3c4b3a;
    transform: rotate(1deg);
    display: inline-block;
    padding: 2px 8px;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: 0.05em;
}
</style>
