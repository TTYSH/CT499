<template>
    <div class="container custom-scrollbar">
        <div class="page-header">
            <h1 class="page-title">Quản Lý Mượn - Trả</h1>
            <div class="header-actions">
                <div class="search-section">
                    <span>Tìm kiếm sách</span>
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
                <div class="filter-section">
                    <span>Thời gian</span>
                    <div class="search-wrapper">
                        <input class="search-input" type="date">
                    </div>
                </div>
            </div>
        </div>

        <!-- Ledger Table -->
        <div class="table-container">
            <div style="overflow-x: auto;">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã độc giả</th>
                            <th>Tên độc giả</th>
                            <th>Email</th>
                            <th>Mượn</th>
                            <th>Trả</th>
                            <th>Trạng thái</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Entry 1 -->
                        <tr>
                            <td class="col-id">1</td>
                            <td>N-0140</td>
                            <td class="left">Victor Hugo</td>
                            <td class="italic left">v.hugo@archive.edu</td>
                            <td>12/10/2024</td>
                            <td>19/10/2024</td>
                            <td><span class="status-badge status-returned">Đã trả</span></td>
                            <td class="td-center">
                                <a class="action-link" href="#" @click.prevent="openModal">
                                    <span class="material-symbols-outlined" style="font-size: 20px;">visibility</span>
                                </a>
                            </td>
                        </tr>
                        <!-- Entry 2 -->
                        <tr>
                            <td class="col-id">2</td>
                            <td>N-0141</td>
                            <td class="left">Mary Shelley</td>
                            <td class="italic left">m.shelley@archive.edu</td>
                            <td>15/10/2024</td>
                            <td>22/10/2024</td>
                            <td><span class="status-badge status-borrowed">Đang mượn</span></td>
                            <td class="td-center">
                                <a class="action-link" href="#" @click.prevent="openModal">
                                    <span class="material-symbols-outlined" style="font-size: 20px;">visibility</span>
                                </a>
                            </td>
                        </tr>
                        <!-- Entry 3 -->
                        <tr>
                            <td class="col-id">3</td>
                            <td>N-0142</td>
                            <td class="left">Edgar Allan Poe</td>
                            <td class="italic left">e.poe@archive.edu</td>
                            <td>05/10/2024</td>
                            <td>12/10/2024</td>
                            <td><span class="status-badge status-overdue">Quá hạn</span></td>
                            <td class="td-center">
                                <a class="action-link" href="#" @click.prevent="openModal">
                                    <span class="material-symbols-outlined" style="font-size: 20px;">visibility</span>
                                </a>
                            </td>
                        </tr>
                        <!-- Entry 4 -->
                        <tr>
                            <td class="col-id">4</td>
                            <td>N-0143</td>
                            <td class="left">Jane Austen</td>
                            <td class="italic left">j.austen@archive.edu</td>
                            <td>18/10/2024</td>
                            <td>25/10/2024</td>
                            <td><span class="status-badge status-borrowed">Đang mượn</span></td>
                            <td class="td-center">
                                <a class="action-link" href="#" @click.prevent="openModal">
                                    <span class="material-symbols-outlined" style="font-size: 20px;">visibility</span>
                                </a>
                            </td>
                        </tr>
                        <!-- Entry 5 -->
                        <tr>
                            <td class="col-id">5</td>
                            <td>N-0144</td>
                            <td class="left">Charles Dickens</td>
                            <td class="italic left">c.dickens@archive.edu</td>
                            <td>20/10/2024</td>
                            <td>27/10/2024</td>
                            <td><span class="status-badge status-borrowed">Đang mượn</span></td>
                            <td class="td-center">
                                <a class="action-link" href="#" @click.prevent="openModal">
                                    <span class="material-symbols-outlined" style="font-size: 20px;">visibility</span>
                                </a>
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

        <!-- Detail Modal -->
        <div class="modal-overlay" :class="{ active: isModalOpen }" @click="closeModal">
            <div class="modal-backdrop"></div>
            <div class="modal-content custom-scrollbar" @click.stop>
                <div class="modal-header">
                    <h3 class="modal-title">Chi tiết hồ sơ mượn sách</h3>
                    <button class="modal-close material-symbols-outlined" @click="closeModal">close</button>
                </div>
                <div class="modal-body custom-scrollbar">
                    <div class="detail-grid">
                        <div class="detail-item">
                            <span class="detail-label">Mã độc giả</span>
                            <span class="detail-value">LIB-4492</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Họ tên</span>
                            <span class="detail-value">Victor Hugo</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Email</span>
                            <span class="detail-value italic">v.hugo@archive.edu</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Trạng thái</span>
                            <span class="status-badge status-returned">Đã trả</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Ngày mượn</span>
                            <span class="detail-value">12/10/2024</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Ngày trả</span>
                            <span class="detail-value">19/10/2024</span>
                        </div>
                    </div>

                    <div>
                        <h4 class="section-title">Danh sách sách mượn</h4>
                        <div class="mini-table-wrapper">
                            <table class="mini-table">
                                <thead>
                                    <tr>
                                        <th>Tên sách</th>
                                        <th>Tác giả</th>
                                        <th class="center">SL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="bold">Les Misérables</td>
                                        <td class="italic">Victor Hugo</td>
                                        <td class="center">01</td>
                                    </tr>
                                    <tr>
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
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isModalOpen = ref(false);

function openModal() {
    isModalOpen.value = true;
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    isModalOpen.value = false;
    document.body.style.overflow = 'auto';
}
</script>

<style scoped>
.container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding-bottom: 80px;
}
@media (min-width: 768px) { .container { padding-bottom: 0; } }

/* Page Header */
.page-header {
    display: flex;
    gap: 22px;
    border-bottom: 2px solid rgba(39, 19, 16, 0.2);
    padding-bottom: 16px;
    margin-bottom: var(--gutter);
}

.page-title {
    font-family: var(--font-playfair);
    font-size: 32px;
    font-weight: 700;
    color: var(--color-primary);
    margin-top: 4px;
}

.search-section, .filter-section {
    display: flex;
    align-items: center;
    gap: 10px;
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

.search-input[type="date"] {
    font-size: 14px;
    color: var(--color-on-surface-variant);
}

.search-icon { 
    color: var(--color-outline); 
}

@media (min-width: 768px) {
    .page-header { 
        flex-direction: column; 
        justify-content: space-between; 
        /* align-items: flex-end;  */
    }
}

.header-actions {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    flex-direction: row;
    font-size: 15px;
    font-weight: 600;
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

/* Table Area */
.table-container {
    background-color: var(--color-surface-container-lowest);
    border: 1px solid rgba(211, 195, 192, 0.3);
    border-radius: 5px;
    overflow: hidden;
    width: 100%;
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
.data-table tr { 
    transition: background-color 0.2s; 
}
.data-table tr:hover { 
    background-color: var(--color-surface-container-low); 
}

.col-id { 
    color: var(--color-on-surface-variant); 
}

.status-badge {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 2px;
    font-size: 14px;
    letter-spacing: -0.05em;
}
.status-returned { 
    color: var(--color-secondary); 
}
.status-borrowed { 
    color: rgb(9, 170, 9); 
}
.status-overdue { 
    color: var(--color-error); 
}

.action-link {
    color: var(--color-secondary);
    transition: color 0.2s;
    text-decoration: none;
    display: inline-flex;
}
.action-link:hover {
    color: var(--color-primary);
}

.table-footer {
    padding: 16px 24px;
    background-color: var(--color-surface-container);
    border-top: 1px solid var(--color-outline);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

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

/* Detail Modal */
.modal-overlay {
    position: fixed; inset: 0;
    background-color: rgba(39, 19, 16, 0.4);
    backdrop-filter: blur(4px);
    z-index: 50;
    display: none;
    align-items: center;
    justify-content: center;
    padding: 16px;
}
@media (min-width: 640px) { .modal-overlay { padding: 24px; } }
.modal-overlay.active { display: flex; }
.modal-backdrop { position: absolute; inset: 0; }

.modal-content {
    position: relative;
    background-color: var(--color-surface);
    background-image: url("https://www.transparenttextures.com/patterns/p6.png");
    border: 1px solid var(--color-outline-variant);
    box-shadow: 8px 8px 0px 0px rgba(62, 39, 35, 0.1);
    width: 100%;
    max-width: 672px;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.modal-header {
    padding: 24px;
    border-bottom: 1px solid rgba(211, 195, 192, 0.3);
    background-color: var(--color-surface-container-low);
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.modal-title { font-family: var(--font-playfair); font-size: 24px; font-weight: 600; color: var(--color-primary); font-style: italic; margin: 0; }
.modal-close { color: var(--color-on-surface-variant); transition: color 0.2s; border: none; background: transparent; cursor: pointer; }
.modal-close:hover { color: var(--color-primary); }

.modal-body { padding: 24px; overflow-y: auto; flex: 1; }
.modal-footer {
    padding: 24px;
    border-top: 1px solid rgba(211, 195, 192, 0.3);
    background-color: var(--color-surface-container-low);
    display: flex;
    justify-content: flex-end;
}

.detail-grid { display: grid; grid-template-columns: 1fr; gap: 24px; margin-bottom: 32px; }
@media (min-width: 768px) { .detail-grid { grid-template-columns: 1fr 1fr; } }

.detail-item { display: flex; flex-direction: column; gap: 4px; }
.detail-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-on-surface-variant); }
.detail-value { font-weight: 700; color: var(--color-primary); }
.detail-value.italic { font-style: italic; font-weight: 400; }

.section-title {
    font-size: 14px; font-weight: 700; color: var(--color-primary);
    text-transform: uppercase; letter-spacing: 0.1em;
    border-bottom: 1px solid rgba(211, 195, 192, 0.3);
    padding-bottom: 8px; margin-bottom: 16px;
    margin-top: 0;
}

.mini-table-wrapper { border: 1px solid rgba(211, 195, 192, 0.5); overflow: hidden; }
.mini-table { width: 100%; border-collapse: collapse; text-align: left;}
.mini-table th {
    background-color: var(--color-surface-container-low);
    font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;
    color: var(--color-primary);
    border-bottom: 1px solid rgba(211, 195, 192, 0.3);
    padding: 8px 16px; text-align: left;
}
.mini-table th.center { text-align: center; width: 80px; }
.mini-table td { font-size: 14px; padding: 12px 16px; border-bottom: 1px solid rgba(211, 195, 192, 0.2); }
.mini-table tr:last-child td { border-bottom: none; }
.mini-table td.center { text-align: center; }

/* Utilities */
.sticker-shadow { box-shadow: 2px 2px 0px 0px rgba(62, 39, 35, 0.1); }
.pressed-state { transition: transform 0.1s, box-shadow 0.1s; }
.pressed-state:active {
    transform: translate(1px, 1px);
    box-shadow: 0px 0px 0px 0px rgba(62, 39, 35, 0.1);
}
.italic { font-style: italic; }
.left { text-align: left;}

.custom-scrollbar::-webkit-scrollbar { width: 6px; }
.custom-scrollbar::-webkit-scrollbar-track { background: #f5f3ef; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: #d3c3c0; border-radius: 10px; }
</style>
