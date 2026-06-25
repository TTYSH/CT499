<template>
    <div class="container custom-scrollbar">
        <!-- Page Header -->
        <div class="page-header">
            <div>
                <h2 class="page-title">Sổ Cái Mượn - Trả</h2>
                <p class="page-subtitle">Comprehensive ledger of all scholarly exchanges and literary loans.</p>
            </div>
            <div class="date-display">
                <span class="material-symbols-outlined" style="font-size: 14px;">calendar_today</span>
                <span>Ngày 24 tháng 10 năm 2024</span>
            </div>
        </div>

        <!-- Filtering Section -->
        <section class="filter-section">
            <div class="filter-grid">
                <div class="filter-group">
                    <label class="filter-label">Lọc theo trạng thái</label>
                    <div class="filter-input-wrapper">
                        <select class="filter-input">
                            <option>Tất cả trạng thái</option>
                            <option>Đang mượn</option>
                            <option>Đã trả</option>
                            <option>Quá hạn</option>
                        </select>
                        <span class="material-symbols-outlined select-icon">expand_more</span>
                    </div>
                </div>
                <div class="filter-group">
                    <label class="filter-label">Thời gian</label>
                    <div class="filter-input-wrapper">
                        <input class="filter-input" type="date">
                    </div>
                </div>
                <div class="filter-group">
                    <label class="filter-label">Tìm mã độc giả</label>
                    <input class="filter-input" placeholder="ID-0000" type="text">
                </div>
            </div>
            <button class="btn-primary sticker-shadow pressed-state">
                <span class="material-symbols-outlined" style="font-size: 18px;">filter_list</span>
                Áp dụng lọc
            </button>
        </section>

        <!-- Archival Table -->
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
                            <th class="th-center">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Entry 1 -->
                        <tr>
                            <td class="col-id">01</td>
                            <td class="bold">LIB-4492</td>
                            <td>Victor Hugo</td>
                            <td class="italic">v.hugo@archive.edu</td>
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
                            <td class="col-id">02</td>
                            <td class="bold">LIB-2104</td>
                            <td>Mary Shelley</td>
                            <td class="italic">m.shelley@archive.edu</td>
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
                        <tr class="row-error">
                            <td class="col-id">03</td>
                            <td class="bold">LIB-9912</td>
                            <td>Edgar Allan Poe</td>
                            <td class="italic">e.poe@archive.edu</td>
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
                            <td class="col-id">04</td>
                            <td class="bold">LIB-5521</td>
                            <td>Jane Austen</td>
                            <td class="italic">j.austen@archive.edu</td>
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
                            <td class="col-id">05</td>
                            <td class="bold">LIB-7703</td>
                            <td>Charles Dickens</td>
                            <td class="italic">c.dickens@archive.edu</td>
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
            <!-- Pagination / Footer of Table -->
            <div class="table-footer">
                <span class="pagination-info">Showing 5 of 1,248 entries</span>
                <div class="pagination-controls">
                    <button class="page-arrow material-symbols-outlined" disabled>chevron_left</button>
                    <span class="page-current">Page 1 of 250</span>
                    <button class="page-arrow material-symbols-outlined">chevron_right</button>
                </div>
            </div>
        </div>

        <!-- Footer Visual Element -->
        <div class="footer-ornament">
            <div class="ornament-circle">
                <div class="ornament-dot"></div>
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
    flex-direction: column;
    gap: 16px;
    margin-bottom: 32px;
}
@media (min-width: 768px) {
    .page-header { flex-direction: row; align-items: flex-end; justify-content: space-between; }
}

.page-title {
    font-family: var(--font-playfair);
    font-size: 32px;
    font-weight: 700;
    color: var(--color-primary);
    letter-spacing: -0.02em;
}
.page-subtitle {
    font-size: 16px;
    color: var(--color-on-surface-variant);
    margin-top: 4px;
    font-style: italic;
}

.date-display {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    color: var(--color-on-surface-variant);
}

/* Filter Section */
.filter-section {
    background-color: var(--color-surface);
    border: 1px solid rgba(211, 195, 192, 0.5);
    padding: 24px;
    margin-bottom: var(--gutter);
    box-shadow: 2px 2px 0px 0px rgba(62, 39, 35, 0.05);
    display: flex;
    flex-direction: column;
    gap: 24px;
}
@media (min-width: 768px) {
    .filter-section { flex-direction: row; align-items: flex-end; }
}

.filter-grid {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
}
@media (min-width: 640px) { .filter-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .filter-grid { grid-template-columns: repeat(3, 1fr); } }

.filter-group { display: flex; flex-direction: column; gap: 8px; }
.filter-label {
    font-size: 12px;
    font-weight: 700;
    color: var(--color-primary);
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

.filter-input-wrapper { position: relative; }
.filter-input {
    width: 100%;
    background-color: var(--color-surface-container-low);
    border: 1px solid var(--color-outline-variant);
    padding: 12px 16px;
    font-size: 16px;
    appearance: none;
    transition: border-color 0.2s, box-shadow 0.2s;
}
.filter-input:focus {
    border-color: var(--color-secondary);
    box-shadow: 0 0 0 1px var(--color-secondary);
}
.filter-input::placeholder { opacity: 0.4; }
.select-icon {
    position: absolute;
    right: 12px; top: 12px;
    color: var(--color-on-surface-variant);
    pointer-events: none;
}

.btn-primary {
    background-color: var(--color-primary);
    color: var(--color-on-primary);
    padding: 12px 32px;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: background-color 0.2s;
    white-space: nowrap;
}
.btn-primary:hover { background-color: var(--color-primary-container); }

/* Table Area */
.table-container {
    background-color: var(--color-surface);
    border: 1px solid rgba(211, 195, 192, 0.8);
    box-shadow: 4px 4px 0px 0px rgba(62, 39, 35, 0.05);
    overflow: hidden;
    width: 100%;
}

.data-table { width: 100%; border-collapse: collapse; text-align: left; }
.data-table th {
    background-color: var(--color-surface-container);
    color: var(--color-primary);
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 16px 24px;
    text-align: left;
    border-bottom: 1px solid var(--color-outline);
    border-right: 1px solid rgba(211, 195, 192, 0.3);
}
.data-table th:last-child { border-right: none; text-align: center; }

.data-table td {
    padding: 20px 24px;
    border-bottom: 1px solid rgba(211, 195, 192, 0.3);
    border-right: 1px solid rgba(211, 195, 192, 0.2);
    transition: background-color 0.2s;
}
.data-table td:last-child { border-right: none; text-align: center; }
.data-table tr { transition: background-color 0.2s; }
.data-table tr:hover { background-color: var(--color-surface-container-low); }
.data-table tr.row-error { background-color: rgba(186, 26, 26, 0.05); }

.col-id { color: var(--color-on-surface-variant); width: 64px; }

.status-badge {
    display: inline-block;
    padding: 4px 12px;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: -0.05em;
}
.status-returned { background-color: var(--tertiary-fixed); color: var(--on-tertiary-fixed); border: 1px solid rgba(60, 75, 58, 0.2); }
.status-borrowed { background-color: var(--secondary-fixed); color: var(--on-secondary-fixed); border: 1px solid rgba(104, 61, 15, 0.2); }
.status-overdue { background-color: var(--color-error-container); color: var(--color-on-error-container); border: 1px solid rgba(186, 26, 26, 0.2); }

.action-link {
    color: var(--color-secondary);
    transition: color 0.2s;
    text-decoration: none;
    display: inline-flex;
}
.action-link:hover {
    color: var(--color-primary);
    text-decoration: underline;
    text-underline-offset: 4px;
}

.table-footer {
    padding: 16px 24px;
    background-color: var(--color-surface-container);
    border-top: 1px solid var(--color-outline);
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.pagination-info { font-size: 12px; color: var(--color-on-surface-variant); }
.pagination-controls { display: flex; align-items: center; gap: 16px; }
.page-arrow { color: var(--color-on-surface-variant); padding: 4px; transition: color 0.2s; border: none; background: transparent; cursor: pointer;}
.page-arrow:hover:not(:disabled) { color: var(--color-primary); }
.page-arrow:disabled { opacity: 0.3; cursor: not-allowed; }
.page-current { font-size: 14px; font-weight: 700; }

.footer-ornament {
    margin-top: 48px;
    display: flex;
    justify-content: center;
    opacity: 0.3;
}
.ornament-circle {
    width: 48px; height: 48px;
    border: 2px solid var(--color-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.ornament-dot {
    width: 8px; height: 8px;
    background-color: var(--color-primary);
    border-radius: 50%;
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
.bold { font-weight: 700; }

.custom-scrollbar::-webkit-scrollbar { width: 6px; }
.custom-scrollbar::-webkit-scrollbar-track { background: #f5f3ef; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: #d3c3c0; border-radius: 10px; }
</style>
