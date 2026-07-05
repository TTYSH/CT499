<template>
    <div class="account-page">
        <!-- Page Header -->
        <div class="page-header">
            <h1 class="page-title">Thông tin tài khoản</h1>
        </div>

        <!-- Account Section -->
        <div class="layout-container">
            <!-- Sidebar Navigation -->
            <aside class="tab-nav">
                <button class="tab-btn" :class="{ active: activeTab === 'profile' }" @click="switchTab('profile')">
                    <span class="material-symbols-outlined">person</span>
                    <span>Thông tin cá nhân</span>
                </button>
                <button class="tab-btn" :class="{ active: activeTab === 'history' }" @click="switchTab('history')">
                    <span class="material-symbols-outlined">menu_book</span>
                    <span>Lịch sử đơn mượn</span>
                </button>
                <button class="tab-btn logout">
                    <span class="material-symbols-outlined">logout</span>
                    <span>Đăng xuất</span>
                </button>
            </aside>

            <!-- Content Section -->
            <div class="tab-content">
                <!-- Tab 1: Profile -->
                <section class="paper-card tab-pane" :class="{ active: activeTab === 'profile' }">
                    <div class="tab-header">
                        <div>
                            <h2 class="tab-title">Thông tin cá nhân</h2>
                        </div>
                    </div>
                    
                    <form class="form-container">
                        <div class="avatar-section">
                            <div class="avatar-wrapper">
                                <div class="avatar-img-container">
                                    <img src="/images/user_icon.jpg" class="avatar-img" alt="Profile Avatar">
                                </div>
                                <button type="button" class="avatar-btn">
                                    <span class="material-symbols-outlined" style="font-size: 16px;">photo_camera</span>
                                </button>
                            </div>
                        </div>

                        <div class="form-grid">
                            <div class="form-group">
                                <label class="form-label">Họ tên</label>
                                <input class="form-input" type="text" value="">
                            </div>
                            <div class="form-group">
                                <label class="form-label">Số điện thoại</label>
                                <input class="form-input" type="tel" value="">
                            </div>
                            <div class="form-group full-width">
                                <label class="form-label">Email</label>
                                <input class="form-input" type="email" value="">
                            </div>
                            <div class="form-group full-width">
                                <label class="form-label">Địa chỉ</label>
                                <input class="form-input" type="text" value="">
                            </div>
                        </div>

                        <div class="form-actions">
                            <button class="btn-submit" type="button">Cập nhật</button>
                        </div>
                    </form>
                </section>

                <!-- Tab 2: History -->
                <section class="paper-card tab-pane" :class="{ active: activeTab === 'history' }">
                    <div class="tab-header history-header">
                        <div>
                            <h2 class="tab-title">Lịch sử đơn mượn</h2>
                        </div>
                        <div class="history-stats">
                            <span>Tổng đơn mượn: 2</span>
                        </div>
                    </div>
                    
                    <div class="history-table-wrapper">
                        <table class="history-table">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên Sách</th>
                                    <th>Ngày Mượn</th>
                                    <th>Ngày Trả</th>
                                    <th>Số Lượng</th>
                                    <th>Trạng Thái</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="ledger-row">
                                    <td>1</td>
                                    <td class="left">The Great Gatsby (First Edition Ref)</td>
                                    <td>05/11/1954</td>
                                    <td>19/11/1954</td>
                                    <td>34</td>
                                    <td class="center"><span class="ink-stamp text-secondary">Borrowed</span></td>
                                </tr>
                                <tr class="ledger-row">
                                    <td>2</td>
                                    <td class="left">Principles of Political Economy</td>
                                    <td>02/11/1954</td>
                                    <td>16/11/1954</td>
                                    <td>24</td>
                                    <td class="center"><span class="ink-stamp text-tertiary-container">Returned</span></td>
                                </tr>
                                <tr class="ledger-row">
                                    <td>3</td>
                                    <td class="left">The Odyssey - Manuscript Study</td>
                                    <td>25/10/1954</td>
                                    <td>08/11/1954</td>
                                    <td>0</td>
                                    <td class="center"><span class="ink-stamp text-error">Overdue</span></td>
                                </tr>
                                <tr class="ledger-row">
                                    <td>4</td>
                                    <td class="left">Introduction to Archival Science</td>
                                    <td>10/10/1954</td>
                                    <td>24/10/1954</td>
                                    <td>3</td>
                                    <td class="center"><span class="ink-stamp text-tertiary-container">Returned</span></td>
                                </tr>
                            </tbody>
                        </table>
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
                </section>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('profile')

function switchTab(tab) {
    activeTab.value = tab
}
</script>

<style scoped>

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

button, input {
    border: none;
    background: none;
    font-family: inherit;
}

button { cursor: pointer; }
input { cursor: text; }

.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    vertical-align: middle;
}

.paper-card {
    box-shadow: 2px 2px 0px 0px rgba(62,39,35,0.15);
    border: 1px solid rgba(130, 116, 114, 0.2);
    border-radius: 5px;
    position: relative;
}


.page-header {
    margin-bottom: 48px;
    text-align: center;
}
@media (min-width: 768px) {
    .page-header { text-align: left; }
}

.page-title {
    font-family: var(--font-playfair);
    font-size: 40px;
    font-weight: 700;
    color: var(--color-primary);
    margin-bottom: 8px;
    line-height: 1.1;
}

/* Tab Layout */
.layout-container {
    display: flex;
    flex-direction: column;
    gap: 32px;
}
@media (min-width: 768px) {
    .layout-container { flex-direction: row; }
}

.tab-nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
}
@media (min-width: 768px) {
    .tab-nav { width: 256px; flex-shrink: 0; }
}

.tab-btn {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    border-radius: 8px;
    color: var(--color-on-surface-variant);
    font-size: 14px;
    font-weight: 700;
    transition: all 0.2s;
    text-align: left;
}

.tab-btn:hover {
    background-color: var(--color-surface-container);
}

.tab-btn.active {
    background-color: var(--color-surface-container-high);
    color: var(--color-primary);
    border-left: 4px solid var(--color-secondary);
    border-radius: 0 8px 8px 0;
}

.tab-btn.logout {
    margin-top: 32px;
}

.tab-content {
    flex-grow: 1;
}

.tab-pane {
    display: none;
    background-color: #ffffff;
    padding: 32px;
    margin-bottom: 48px;
}
@media (min-width: 768px) {
    .tab-pane { padding: 48px; }
}

.tab-pane.active {
    display: block;
}

/* Profile Tab */
.tab-header {
    margin-bottom: 32px;
    border-bottom: 1px solid rgba(211, 195, 192, 0.3);
    padding-bottom: 16px;
}

.tab-title {
    font-family: var(--font-playfair);
    font-size: 24px;
    font-weight: 600;
    color: var(--color-primary);
}

.form-container {
    max-width: 672px;
    margin-left: 2rem;
}

.avatar-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 32px;
}
@media (min-width: 768px) {
    .avatar-section { align-items: flex-start; }
}

.avatar-wrapper {
    position: relative;
}

.avatar-img-container {
    width: 96px;
    height: 96px;
    border-radius: 50%;
    border: 2px solid var(--color-secondary);
    padding: 3px;
    background-color: var(--color-surface-container-low);
    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    overflow: hidden;
}

.avatar-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    transition: filter 0.3s;
}

.avatar-wrapper:hover .avatar-img {
    filter: grayscale(0%);
}

.avatar-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: var(--color-secondary);
    color: var(--color-on-secondary);
    border-radius: 50%;
    padding: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--color-surface-container);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.form-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px 32px;
}
@media (min-width: 768px) {
    .form-grid { grid-template-columns: 1fr 1fr; }
}

.form-group {
    display: flex;
    flex-direction: column;
}

.form-group.full-width {
    grid-column: 1 / -1;
}

.form-label {
    font-size: 14px;
    font-weight: 700;
    color: var(--color-on-surface-variant);
    margin-bottom: 4px;
}

.form-input {
    background-color: var(--color-surface-container-low);
    border: 1px solid var(--color-secondary);
    border-radius: 5px;
    padding: 6px 8px;
    font-family: var(--font-merriweather);
    font-size: 16px;
    width: 100%;
    transition: border-color 0.2s;
}

.form-input:focus {
    outline: none;
    border-bottom-color: var(--color-secondary);
}

.form-actions {
    display: flex;
    justify-content: flex-end;
    padding-top: 24px;
    margin-top: 24px;
}

.btn-submit {
    background-color: var(--color-secondary);
    color: var(--color-on-secondary);
    padding: 8px 32px;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    box-shadow: 2px 2px 0px 0px rgba(131, 84, 37, 0.3);
    border-radius: 5px;
    transition: transform 0.2s;
}

.btn-submit:hover {
    transform: translateY(-1px);
}

/* History Tab */
.history-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

.history-stats {
    text-align: right;
    font-size: 14px;
    font-weight: 700;
}

.history-table-wrapper {
    overflow-x: auto;
}

.history-table {
    width: 100%;
    text-align: left;
    border-collapse: collapse;
}

.history-table th {
    padding: 12px 11px;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--color-on-surface-variant);
    border-bottom: 2px solid var(--color-secondary);
    text-align: center;
}

.history-table td {
    padding: 12px 10px;
    border-bottom: 1px solid rgba(211, 195, 192, 0.2);
}

.history-table td.left {
    text-align: left;
    margin-left: 2rem;
}

.history-table td.center {
    text-align: center;
}

.ledger-row>td {
    text-align: center;
    font-size: 14px;
}

.text-secondary { color: var(--color-secondary); }
.text-tertiary-container { color: #889885; }
.text-error { color: #ba1a1a; }

/* Pagination */
.pagination-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 10px 0;
}

.pagination-controls { 
    display: flex; 
    gap: 8px; 
}
.page-btn {
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(211, 195, 192, 0.5);
    border-radius: 5px;
    transition: all 0.2s;
}
.page-btn:hover { 
    background-color: var(--color-surface-container-high); 
}
.page-btn.active {
    background-color: var(--color-secondary);
    color: var(--color-on-secondary);
    font-weight: 700;
    box-shadow: 2px 2px 0px 0px rgba(62, 39, 35, 0.15);
    border-color: transparent;
}
</style>
