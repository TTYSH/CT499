<template>
    <div class="request-page">
        <!-- Header -->
        <div class="page-header">
            <div>
                <h2 class="page-title">Quản Lý Yêu Cầu</h2>
                <div class="header-section">
                    <div class="search-section">
                        <span>Tìm kiếm yêu cầu</span>
                        <div class="search-wrapper">
                            <span class="material-symbols-outlined search-icon">search</span>
                            <input class="search-input" placeholder="Tìm kiếm..." type="text">
                        </div>
                    </div>
                    <div class="filter-section">
                        <span>Trạng thái</span>
                        <select class="filter-select">
                            <option>Sẵn có</option>
                            <option>Đang mượn</option>
                            <option>Hết hàng</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="status-summary">
                <span class="status-label">TỔNG ĐANG CHỜ</span>
                <span class="status-value">14</span>
            </div>
        </div>

        <!-- Grid Layout -->
        <div class="dashboard-grid">
            <!-- Main Request Ledger -->
            <div class="ledger-card">
                <div class="ledger-header">
                    <span class="ledger-title">Sổ Cái Yêu Cầu Đang Chờ</span>
                </div>
                <div class="table-wrapper">
                    <table class="data-table" id="request-table">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã yêu cầu</th>
                                <th>Người yêu cầu</th>
                                <th>Email</th>
                                <th>SDT</th>
                                <th>Thời gian yêu cầu</th>
                                <th>Trạng thái</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr :class="{ selected: selectedRow === 1 }" @click="selectedRow = 1">
                                <td>01</td>
                                <td class="request-id">#REQ-8842</td>
                                <td>
                                    <div class="user-info">
                                        <div class="user-avatar bg-tertiary">NT</div>
                                        <span class="user-name">Nguyễn Thành</span>
                                    </div>
                                </td>
                                <td class="email-text">thanh.nguyen@edu.vn</td>
                                <td class="phone-text">090 123 4567</td>
                                <td class="date-text">12/10/2023</td>
                                <td><span class="ink-stamp-burgundy">Đang Chờ</span></td>
                                <td>
                                    <div class="action-btns">
                                        <button class="material-symbols-outlined action-btn btn-approve" title="Phê duyệt">check_circle</button>
                                        <button class="material-symbols-outlined action-btn btn-reject" title="Từ chối">cancel</button>
                                    </div>
                                </td>
                            </tr>
                            <tr class="alt-row" :class="{ selected: selectedRow === 2 }" @click="selectedRow = 2">
                                <td>02</td>
                                <td class="request-id">#REQ-7721</td>
                                <td>
                                    <div class="user-info">
                                        <div class="user-avatar bg-secondary">LA</div>
                                        <span class="user-name">Lê An</span>
                                    </div>
                                </td>
                                <td class="email-text">an.le@edu.vn</td>
                                <td class="phone-text">091 234 5678</td>
                                <td class="date-text">14/10/2023</td>
                                <td><span class="ink-stamp-burgundy">Đang Chờ</span></td>
                                <td>
                                    <div class="action-btns">
                                        <button class="material-symbols-outlined action-btn btn-approve">check_circle</button>
                                        <button class="material-symbols-outlined action-btn btn-reject">cancel</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="ledger-footer">
                    <span class="ledger-info">Hiển thị 4 trên 14 yêu cầu</span>
                    <div class="pagination">
                        <button class="page-btn"><span class="material-symbols-outlined">chevron_left</span></button>
                        <button class="page-btn"><span class="material-symbols-outlined">chevron_right</span></button>
                    </div>
                </div>
            </div>

            <!-- Detailed View Area (Multi-book Request) -->
            <div class="detail-wrapper">
                <div class="detail-header">
                    <span class="detail-header-title">Chi tiết yêu cầu</span>
                    <span class="detail-header-id">#REQ-8842</span>
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
    </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedRow = ref(1)
</script>

<style scoped>
.paper-card {
    background-color: var(--color-surface-container-lowest);
    border: 1px solid rgba(211, 195, 192, 0.5);
    box-shadow: 2px 2px 0px 0px rgba(62, 39, 35, 0.15);
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

.page-header {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 32px;
}

.page-header > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

@media (min-width: 768px) {
    .page-header {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
    }
}

.page-title {
    font-family: var(--font-playfair);
    font-size: 32px;
    font-weight: 700;
    color: var(--color-primary);
    line-height: 1.1;
}

/*Header Section*/ 
.header-section {
    display: flex;
    gap: 35px;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 0;
    font-size: 15px;
    font-weight: 600;
}

.search-section, .filter-section  {
    display: flex;
    gap: 10px;
    align-items: center;
}

.search-wrapper {
    display: none;
    align-items: center;
    background-color: var(--color-surface-container-lowest);
    border: 1px solid rgba(211, 195, 192, 0.5);
    border-radius: 5px;
    padding: 6px 12px;
}

@media (min-width: 768px) { .search-wrapper { display: flex; } }

.search-input {
    width: 256px;
    font-size: 16px;
    padding: 0 8px;
    color: var(--color-on-surface);
}

.search-input::placeholder {
    font-size: 14px;
}

.search-icon { 
    color: var(--color-outline); 
}

.filter-select {
    border: 1px solid rgba(211, 195, 192, 0.5);
    border-radius: 5px;
    padding: 8px 16px;
    font-family: var(--font-merriweather);
    font-size: 14px;
    color: var(--color-on-surface-variant);
    transition: border-color 0.2s;
}

.filter-select:focus { 
    border-color: var(--color-secondary); 
}

.status-summary {
    text-align: left;
}

@media (min-width: 768px) {
    .status-summary { 
        text-align: right; 
    }
}

.status-label {
    font-size: 15px;
    font-weight: 700;
    color: var(--color-secondary);
    display: block;
    margin: 0;
}

.status-value {
    font-family: var(--font-merriweather);
    font-size: 40px;
    font-weight: 700;
    color: var(--color-primary);
}

/* Grid Layout */
.dashboard-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--gutter);
}

@media (min-width: 1024px) {
    .dashboard-grid {
        grid-template-columns: 2fr 1fr;
    }
}

/* Ledger Section */
.ledger-card {
    background-color: var(--color-surface);
    border: 1px solid rgba(211, 195, 192, 0.3);
    box-shadow: 2px 2px 0px 0px rgba(62, 39, 35, 0.15);
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.ledger-header {
    background-color: var(--color-primary-container);
    color: var(--color-on-primary-container);
    padding: 16px 24px;
    border-bottom: 1px solid rgba(211, 195, 192, 0.3);
}

.ledger-title {
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

.table-wrapper {
    overflow-x: auto;
}

.data-table {
    width: 100%;
    text-align: left;
    border-collapse: collapse;
    font-size: 16px;
}

.data-table th {
    background-color: var(--color-surface-container-high);
    color: var(--color-on-surface-variant);
    padding: 16px;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    border-bottom: 1px solid rgba(211, 195, 192, 0.5);
    white-space: nowrap;
}

.data-table td {
    padding: 20px 16px;
    border-bottom: 1px solid rgba(211, 195, 192, 0.2);
    transition: background-color 0.2s;
}

.data-table tr:hover td {
    background-color: var(--color-surface-container-low);
    cursor: pointer;
}

.data-table tr.alt-row td {
    background-color: var(--color-surface-container-lowest);
}

.data-table tr.alt-row:hover td {
    background-color: var(--color-surface-container-low);
}

.data-table tr.selected td {
    background-color: rgba(255, 191, 135, 0.2);
}

.user-info {
    display: flex;
    align-items: center;
    gap: 12px;
}

.user-avatar {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 14px;
    border-radius: 4px;
    flex-shrink: 0;
}

.bg-tertiary { background-color: var(--tertiary-fixed); color: var(--on-tertiary-fixed); }
.bg-secondary { background-color: var(--secondary-fixed); color: var(--on-secondary-fixed); }

.user-name {
    color: var(--color-primary);
    font-weight: 700;
    white-space: nowrap;
}

.request-id {
    font-weight: 700;
}

.date-text, .email-text, .phone-text {
    color: var(--color-on-surface-variant);
    font-size: 14px;
}

.action-btns {
    display: flex;
    gap: 8px;
}

.action-btn {
    transition: transform 0.2s;
}

.action-btn:hover {
    transform: scale(1.1);
}

.btn-approve { color: var(--color-secondary); }
.btn-reject { color: var(--color-error); }

.ledger-footer {
    padding: 24px;
    border-top: 1px solid rgba(211, 195, 192, 0.3);
    background-color: var(--color-surface-container-low);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.ledger-info {
    font-size: 12px;
    color: var(--color-on-surface-variant);
    font-style: italic;
}

.pagination {
    display: flex;
    gap: 8px;
}

.page-btn {
    padding: 4px;
    border: 1px solid var(--color-outline-variant);
    background-color: transparent;
    transition: all 0.2s;
    border-radius: 2px;
}

.page-btn:hover {
    background-color: #ffffff;
}

/* Detailed View Layout for Multiple Items */
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
</style>
