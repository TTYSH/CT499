<template>
    <div class="modal-overlay" :class="{ active: isOpen }" @click="closeModal">
        <div class="modal-backdrop"></div>
        <div class="modal-content custom-scrollbar" @click.stop>
            <div class="modal-header">
                <h3 class="modal-title">Chi tiết đơn mượn</h3>
                <button class="modal-close material-symbols-outlined" @click="closeModal">close</button>
            </div>
            <div class="modal-body custom-scrollbar">
                <div class="reader-info-container">
                    <div class="info-list">
                        <div class="info-row">
                            <span class="detail-label">Mã độc giả:</span>
                            <span class="detail-value">LIB-4492</span>
                        </div>
                        <div class="info-row">
                            <span class="detail-label">Họ tên:</span>
                            <span class="detail-value">Victor Hugo</span>
                        </div>
                        <div class="info-row">
                            <span class="detail-label">Email:</span>
                            <span class="detail-value italic">v.hugo@archive.edu</span>
                        </div>
                        <div class="info-row">
                            <span class="detail-label">Trạng thái:</span>
                            <span class="status-badge status-returned">Đã trả</span>
                        </div>
                        <div class="info-row">
                            <span class="detail-label">Thời gian:</span>
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <span class="detail-value date-badge">12/10/2024</span>
                                <span class="material-symbols-outlined"
                                    style="font-size: 16px; color: var(--color-on-surface-variant);">arrow_forward</span>
                                <span class="detail-value date-badge">19/10/2024</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 class="section-title">Danh sách sách mượn</h4>
                    <div class="mini-table-wrapper">
                        <table class="mini-table">
                            <thead>
                                <tr>
                                    <th class="center" style="width: 80px;">Bìa sách</th>
                                    <th>Tên sách</th>
                                    <th>Tác giả</th>
                                    <th class="center">SL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="center">
                                        <div class="mini-book-cover-wrapper">
                                            <img src="/images/Sach/101_SoDo.png" alt="Les Misérables"
                                                class="mini-book-cover">
                                        </div>
                                    </td>
                                    <td class="bold">Les Misérables</td>
                                    <td class="italic">Victor Hugo</td>
                                    <td class="center">01</td>
                                </tr>
                                <tr>
                                    <td class="center">
                                        <div class="mini-book-cover-wrapper">
                                            <img src="/images/Sach/104_dai_gia_gatsby.png"
                                                alt="The Hunchback of Notre-Dame" class="mini-book-cover">
                                        </div>
                                    </td>
                                    <td class="bold">The Hunchback of Notre-Dame</td>
                                    <td class="italic">Victor Hugo</td>
                                    <td class="center">01</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn-primary sticker-shadow pressed-state" @click="closeModal">Đóng</button>
            </div>
        </div>
    </div>
</template>

<script setup>


const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['close']);

function closeModal() {
    emit('close');
}
</script>

<style scoped>
/* Detail Modal */
.modal-overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(39, 19, 16, 0.4);
    backdrop-filter: blur(4px);
    z-index: 50;
    display: none;
    align-items: center;
    justify-content: center;
    padding: 16px;
}

@media (min-width: 640px) {
    .modal-overlay {
        padding: 24px;
    }
}

.modal-overlay.active {
    display: flex;
}

.modal-backdrop {
    position: absolute;
    inset: 0;
}

.modal-content {
    position: relative;
    background-color: var(--color-surface);
    background-image: url("https://www.transparenttextures.com/patterns/p6.png");
    border: 1px solid var(--color-outline-variant);
    width: 100%;
    max-width: 672px;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 5px;
}

.modal-header {
    padding: 24px;
    border-bottom: 1px solid rgba(211, 195, 192, 0.3);
    background-color: var(--color-surface-container-low);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal-title {
    font-family: var(--font-playfair);
    font-size: 24px;
    font-weight: 600;
    color: var(--color-primary);
    margin: 0;
}

.modal-close {
    color: var(--color-on-surface-variant);
    transition: color 0.2s;
    border: none;
    background: transparent;
    cursor: pointer;
}

.modal-close:hover {
    color: var(--color-primary);
}

.modal-body {
    padding: 12px 24px;
    overflow-y: auto;
    flex: 1;
}

.modal-footer {
    padding: 24px;
    border-top: 1px solid rgba(211, 195, 192, 0.3);
    background-color: var(--color-surface-container-low);
    display: flex;
    justify-content: flex-end;
}

.reader-info-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 32px;
}

@media (min-width: 768px) {
    .reader-info-container {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
    }
}

.info-list {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 12px 16px;
    align-items: center;
}

.info-row {
    display: contents;
}

.detail-label {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-on-surface-variant);
    font-weight: 600;
}

.detail-value {
    font-family: var(--font-merriweather, serif);
    font-size: 16px;
    font-weight: 700;
    color: var(--color-primary);
}

.date-badge {
    border: 1px solid rgba(211, 195, 192, 0.5);
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 14px;
}

.detail-value.italic {
    font-style: italic;
    font-weight: 400;
}

.section-title {
    font-size: 16px;
    font-weight: 700;
    color: var(--color-primary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-bottom: 2px solid rgba(211, 195, 192, 0.3);
    padding-bottom: 12px;
    margin-bottom: 20px;
    margin-top: 0;
    display: flex;
    align-items: center;
    gap: 8px;
}

.mini-table-wrapper {
    border: 1px solid rgba(211, 195, 192, 0.5);
    border-radius: 8px;
    overflow: hidden;
    background-color: var(--color-surface-container-lowest);
}

.mini-table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
}

.mini-table th {
    background-color: var(--color-surface-container-low);
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-primary);
    border-bottom: 1px solid rgba(211, 195, 192, 0.4);
    padding: 12px 16px;
    text-align: left;
    font-weight: 700;
}

.mini-table th.center {
    text-align: center;
    width: 80px;
}

.mini-table td {
    font-size: 15px;
    padding: 14px 16px;
    border-bottom: 1px solid rgba(211, 195, 192, 0.2);
    color: var(--color-on-surface);
}

.mini-table tr:last-child td {
    border-bottom: none;
}

.mini-table td.center {
    text-align: center;
}

.mini-book-cover-wrapper {
    width: 44px;
    height: 60px;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 2px 2px 0px 0px rgba(62, 39, 35, 0.1);
    border: 1px solid rgba(211, 195, 192, 0.5);
    margin: 0 auto;
}

.mini-book-cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}


.btn-primary {
    border-radius: 8px;
    background-color: var(--color-primary);
    color: var(--color-on-primary);
    padding: 12px 32px;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: background-color 0.2s;
    white-space: nowrap;
    border: none;
    cursor: pointer;
}

.btn-primary:hover {
    background-color: var(--color-primary-container);
}

/* Utilities */
.sticker-shadow {
    box-shadow: 2px 2px 0px 0px rgba(62, 39, 35, 0.1);
}

.pressed-state {
    transition: transform 0.1s, box-shadow 0.1s;
}

.pressed-state:active {
    transform: translate(1px, 1px);
    box-shadow: 0px 0px 0px 0px rgba(62, 39, 35, 0.1);
}

.italic {
    font-style: italic;
}

.left {
    text-align: left;
}

.custom-scrollbar::-webkit-scrollbar {
    width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: #f5f3ef;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #d3c3c0;
    border-radius: 10px;
}

.status-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 6px 14px;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    max-width: 120px;
}

.status-returned {
    background-color: rgba(234, 154, 114, 0.15);
    color: var(--color-secondary);
    border: 1px solid rgba(234, 154, 114, 0.3);
}

.status-borrowed {
    background-color: rgba(9, 170, 9, 0.1);
    color: rgb(9, 170, 9);
    border: 1px solid rgba(9, 170, 9, 0.2);
}

.status-overdue {
    background-color: rgba(220, 53, 69, 0.1);
    color: var(--color-error);
    border: 1px solid rgba(220, 53, 69, 0.2);
}
</style>
