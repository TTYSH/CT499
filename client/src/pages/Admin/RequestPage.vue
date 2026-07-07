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
            <div class="table-container">
                <div class="table-wrapper">
                    <table class="data-table" id="request-table">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã yêu cầu</th>
                                <th>Tên người yêu cầu</th>
                                <th>Email</th>
                                <th>SĐT</th>
                                <th>Thời gian yêu cầu</th>
                                <th>Số quyển</th>
                                <th>Trạng thái</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr :class="{ selected: selectedRow === 1 }" @click="openDetail(1)">
                                <td>1</td>
                                <td>#REQ-8842</td>
                                <td class="name-text">Nguyễn Thành An</td>
                                <td class="email-text" style="font-style: italic;">thanh.nguyen@edu.vn</td>
                                <td class="phone-text">090 123 4567</td>
                                <td class="date-text">12/10/2023</td>
                                <td class="book-quantity">52</td>
                                <td><span class="status-badge status-reject">Đã từ chối</span></td>
                                <td>
                                    <div class="action-btns">
                                        <button class="material-symbols-outlined action-btn" title="Xem chi tiết">visibility</button>
                                    </div>
                                </td>
                            </tr>
                            <tr class="alt-row" :class="{ selected: selectedRow === 2 }" @click="openDetail(2)">
                                <td>2</td>
                                <td>#REQ-7721</td>
                                <td class="name-text">Lê Tuấn</td>
                                <td class="email-text" style="font-style: italic;">an.le@edu.vn</td>
                                <td class="phone-text">091 234 5678</td>
                                <td class="date-text">14/10/2023</td>
                                <td class="book-quantity">52</td>
                                <td><span class="status-badge status-approve">Đã xác nhận</span></td>
                                <td>
                                    <div class="action-btns">
                                        <button class="material-symbols-outlined action-btn" title="Xem chi tiết">visibility</button>
                                    </div>
                                </td>
                            </tr>
                            <tr class="alt-row" :class="{ selected: selectedRow === 2 }" @click="openDetail(2)">
                                <td>2</td>
                                <td>#REQ-7721</td>
                                <td class="name-text">Lê Tuấn</td>
                                <td class="email-text" style="font-style: italic;">an.le@edu.vn</td>
                                <td class="phone-text">091 234 5678</td>
                                <td class="date-text">14/10/2023</td>
                                <td class="book-quantity">52</td>
                                <td><span class="status-badge status-wait">Chờ xác nhận</span></td>
                                <td>
                                    <div class="action-btns">
                                        <button class="material-symbols-outlined action-btn" title="Xem chi tiết">visibility</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- Pagination -->
            <div class="pagination-container">
                <div class="pagination-controls">
                    <button class="page-btn"><span class="material-symbols-outlined">chevron_left</span></button>
                    <button class="page-btn active">1</button>
                    <button class="page-btn">2</button>
                    <button class="page-btn">3</button>
                    <button class="page-btn"><span class="material-symbols-outlined">chevron_right</span></button>
                </div>
            </div>
        </div>

        <RequestDetail v-if="showDetail" @close="showDetail = false" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import RequestDetail from '@/components/Admin/Book/RequestDetail.vue'

const selectedRow = ref(null)
const showDetail = ref(false)

const openDetail = (id) => {
    selectedRow.value = id
    showDetail.value = true
}
</script>

<style scoped>
.paper-card {
    background-color: var(--color-surface-container-lowest);
    border: 1px solid rgba(211, 195, 192, 0.5);
    box-shadow: 2px 2px 0px 0px rgba(62, 39, 35, 0.15);
}

.status-badge {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 2px;
    font-size: 14px;
    letter-spacing: -0.05em;
}

.status-approve { 
    background-color: var(--secondary-fixed); 
    color: rgb(9, 170, 9);
}
.status-reject { 
    color: var(--color-error); 
}
.status-wait {
    color: var(--color-secondary);
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
    display: block;
}

/* Ledger Section */
.table-container {
    background-color: var(--color-surface-container-lowest);
    border: 1px solid rgba(211, 195, 192, 0.3);
    border-radius: 5px;
    overflow: hidden;
    width: 100%;
}

.table-wrapper {
    overflow-x: auto;
}

.data-table {
    width: 100%; 
    border-collapse: separate; 
    text-align: center; 
    font-size: 14px;
}

.data-table th {
    background-color: var(--color-surface-container-high);
    color: rgba(39, 19, 16, 0.8);
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 9px;
    text-align: center;
    border-bottom: 1px solid rgba(62, 39, 35, 0.1);
}

.data-table td {
    padding: 8px;
    border-bottom: 1px solid rgba(211, 195, 192, 0.3);
    border-right: 1px solid rgba(211, 195, 192, 0.2);
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

.email-text, .name-text {
    text-align: left;
}

.action-btns {
    display: flex; 
    justify-content: center; 
    gap: 4px;
}

.action-btn {
    color: var(--color-secondary); 
    transition: color 0.2s; 
    font-size: 21px;
}
.action-btn:hover { color: var(--color-primary); }

/* Pagination */
.pagination-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
}

.pagination-controls { 
    display: flex; 
    gap: 8px; 
}
.page-btn {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(211, 195, 192, 0.5);
    transition: all 0.2s;
}
.page-btn:hover { background-color: var(--color-surface-container-high); }
.page-btn.active {
    background-color: var(--color-secondary);
    color: var(--color-on-secondary);
    font-weight: 700;
    box-shadow: 2px 2px 0px 0px rgba(62, 39, 35, 0.15);
    border-color: transparent;
}

</style>
