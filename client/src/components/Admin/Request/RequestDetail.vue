<template>
    <div class="modal-overlay" @click.self="$emit('close')">
        <div class="detail-wrapper modal-content">
            <div class="detail-header">
                <div>
                    <span class="detail-header-title">Chi tiết yêu cầu</span>
                </div>
                <button class="material-symbols-outlined btn-close-modal" @click="$emit('close')"
                    title="Đóng">close</button>
            </div>

            <div class="detail-body">
                <!-- Thông tin người mượn -->
                <div class="info-section">
                    <!-- <h3 class="section-title">Thông tin người mượn</h3> -->
                    <div class="info-list">
                        <div class="info-row">
                            <span class="detail-label">Mã độc giả:</span>
                            <span class="detail-value">#RDR-1029</span>
                        </div>
                        <div class="info-row">
                            <span class="detail-label">Tên độc giả:</span>
                            <span class="detail-value">Nguyễn Thành An</span>
                        </div>
                        <div class="info-row">
                            <span class="detail-label">Email:</span>
                            <span class="detail-value italic">thanh.nguyen@edu.vn</span>
                        </div>
                        <div class="info-row">
                            <span class="detail-label">Thời gian mượn:</span>
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <span class="detail-value date-badge">12/10/2023</span>
                                <span class="material-symbols-outlined"
                                    style="font-size: 16px; color: var(--color-on-surface-variant);">arrow_forward</span>
                                <span class="detail-value date-badge">26/10/2023</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Danh sách sách -->
                <div class="books-section">
                    <div class="section-header">
                        <h3 class="section-title no-border">Danh sách sách yêu cầu</h3>
                        <div class="total-books-highlight">
                            <span class="detail-label">Tổng số sách: </span>
                            <span class="highlight-value">03 quyển</span>
                        </div>
                    </div>
                    <div class="table-container">
                        <table class="vintage-table">
                            <thead>
                                <tr>
                                    <th>Tên sách</th>
                                    <th>Tác giả</th>
                                    <th>Tình trạng</th>
                                    <th class="text-center">Số lượng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Book 1 -->
                                <tr>
                                    <td>
                                        <div class="book-cell">
                                            <div class="book-cover-mini">
                                                <img alt="Số Đỏ" src="/images/Sach/101_SoDo.png">
                                            </div>
                                            <span class="book-title">Số Đỏ</span>
                                        </div>
                                    </td>
                                    <td><span class="book-author">Vũ Trọng Phụng</span></td>
                                    <td><span class="ink-stamp-moss">Sẵn Có</span></td>
                                    <td class="text-center"><span class="book-qty">01</span></td>
                                </tr>
                                <!-- Book 2 -->
                                <tr>
                                    <td>
                                        <div class="book-cell">
                                            <div class="book-cover-mini">
                                                <img alt="Nhà Giả Kim" src="/images/Sach/203_nha_gia_kim.png">
                                            </div>
                                            <span class="book-title">Nhà Giả Kim</span>
                                        </div>
                                    </td>
                                    <td><span class="book-author">Paulo Coelho</span></td>
                                    <td><span class="ink-stamp-moss">Sẵn Có</span></td>
                                    <td class="text-center"><span class="book-qty">01</span></td>
                                </tr>
                                <!-- Book 3 -->
                                <tr>
                                    <td>
                                        <div class="book-cell">
                                            <div class="book-cover-mini">
                                                <img alt="Đắc Nhân Tâm" src="/images/Sach/201_dac_nhan_tam.png">
                                            </div>
                                            <span class="book-title">Đắc Nhân Tâm</span>
                                        </div>
                                    </td>
                                    <td><span class="book-author">Dale Carnegie</span></td>
                                    <td><span class="ink-stamp-burgundy">Hết Sách</span></td>
                                    <td class="text-center"><span class="book-qty">01</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="detail-footer">
                <button class="btn-large btn-outline-action">Từ Chối</button>
                <button class="btn-large btn-primary-action">Phê Duyệt</button>
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
    max-width: 850px;
    max-height: 90vh;
    border-radius: 8px;
}

.btn-close-modal {
    background: none;
    border: none;
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
    height: 100%;
    overflow: hidden;
    position: relative;
}

.detail-header {
    padding: 16px 24px;
    border-bottom: 1px solid rgba(211, 195, 192, 0.3);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.detail-header-title {
    font-family: var(--font-playfair);
    font-size: 16px;
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
    overflow: hidden;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.info-section {
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex-shrink: 0;
}

.books-section {
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex: 1;
    min-height: 0;
}

.section-title {
    font-family: var(--font-playfair);
    font-size: 18px;
    font-weight: 700;
    color: var(--color-primary);
    border-bottom: 1px dashed rgba(211, 195, 192, 0.6);
    padding-bottom: 8px;
    margin: 0;
}

.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px dashed rgba(211, 195, 192, 0.6);
    padding-bottom: 8px;
}

.section-title.no-border {
    border-bottom: none;
    padding-bottom: 0;
}



.total-books-highlight .highlight-value {
    font-family: var(--font-merriweather, serif);
    font-size: 16px;
    font-weight: 700;
    color: var(--color-secondary);
}

.info-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 12px 0;
}

.info-row {
    display: grid;
    grid-template-columns: 180px 1fr;
    align-items: center;
    gap: 16px;
    padding-bottom: 12px;
    border-bottom: 1px dashed rgba(211, 195, 192, 0.3);
}

.info-row:last-child {
    padding-bottom: 0;
    border-bottom: none;
}

.detail-label {
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-on-surface-variant);
    font-weight: 600;
    font-style: bold;
}

.detail-value {
    font-family: var(--font-merriweather, serif);
    font-size: 16px;
    font-weight: 700;
    color: var(--color-primary);
}

.detail-value.italic {
    font-style: italic;
    font-weight: 400;
}

.date-badge {
    border: 1px solid rgba(211, 195, 192, 0.5);
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 14px;
    background-color: transparent;
}

.duration-badge {
    font-size: 12px;
    padding: 2px 8px;
    background-color: var(--color-surface-variant);
    color: var(--color-on-surface-variant);
    border-radius: 4px;
    font-weight: 600;
}

.table-container {
    width: 100%;
    flex: 1;
    overflow-y: auto;
    overflow-x: auto;
    border: 1px solid rgba(211, 195, 192, 0.5);
    border-radius: 4px;
}

.table-container::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}

.table-container::-webkit-scrollbar-track {
    background: var(--color-surface-container-lowest, #f5f3ef);
    border-radius: 4px;
}

.table-container::-webkit-scrollbar-thumb {
    background: rgba(211, 195, 192, 0.8);
    border-radius: 10px;
}

.vintage-table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
}

.vintage-table th {
    font-family: var(--font-playfair);
    font-size: 14px;
    font-weight: 700;
    color: var(--color-primary);
    background-color: var(--color-surface-container-high);
    padding: 12px 16px;
    border-bottom: 1px solid rgba(211, 195, 192, 0.5);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    position: sticky;
    top: 0;
    z-index: 1;
}

.vintage-table td {
    padding: 12px 16px;
    border-bottom: 1px solid rgba(211, 195, 192, 0.3);
    vertical-align: middle;
}

.vintage-table tr:last-child td {
    border-bottom: none;
}

.book-cell {
    display: flex;
    align-items: center;
    gap: 12px;
}

.book-cover-mini {
    width: 48px;
    height: 64px;
    background-color: #ffffff;
    border: 1px solid rgba(39, 19, 16, 0.2);
    padding: 2px;
    flex-shrink: 0;
}

.book-cover-mini img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
}

.book-title {
    font-family: var(--font-playfair);
    font-size: 16px;
    font-weight: 600;
    color: var(--color-primary);
    line-height: 1.2;
}

.book-author {
    font-size: 13px;
    color: var(--color-on-surface-variant);
    font-style: italic;
}

.book-qty {
    font-family: var(--font-merriweather, serif);
    font-size: 14px;
    font-weight: 700;
    color: var(--color-primary);
}

.text-center {
    text-align: center;
}

.detail-footer {
    padding: 4px 24px;
    background-color: var(--color-surface-container-high);
    border-top: 1px solid rgba(211, 195, 192, 0.3);
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    margin-top: auto;
}

.btn-large {
    width: 25%;
    height: 40px;
    padding: 10px 24px;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    transition: transform 0.2s;
    text-align: center;
    border: none;
    cursor: pointer;
    border-radius: 4px;
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
