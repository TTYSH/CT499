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
                                <input class="form-input" type="text" v-model="userInfo.HoTen" :disabled="!isEditing">
                            </div>
                            <div class="form-group">
                                <label class="form-label">Số điện thoại</label>
                                <input class="form-input" type="tel" v-model="userInfo.SoDienThoai"
                                    :disabled="!isEditing">
                            </div>
                            <div class="form-group full-width">
                                <label class="form-label">Email</label>
                                <input class="form-input" type="email" v-model="userInfo.Email" :disabled="!isEditing">
                            </div>
                            <div class="form-group full-width">
                                <label class="form-label">Địa chỉ</label>
                                <input class="form-input" type="text" v-model="userInfo.DiaChi" :disabled="!isEditing">
                            </div>
                        </div>

                        <div class="form-actions" style="gap: 12px;">
                            <button v-if="isEditing" class="btn-cancel" type="button" @click="cancelEdit">Hủy</button>
                            <button class="btn-submit" type="button" @click="toggleEdit">
                                {{ isEditing ? 'Lưu' : 'Chỉnh sửa' }}
                            </button>
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
                            <span>Tổng đơn mượn: {{ orders.length }}</span>
                        </div>
                    </div>

                    <div class="order-list">
                        <div v-for="order in orders" :key="order.id" class="order-card">
                            <div class="order-header" @click="toggleOrder(order.id)">
                                <div class="order-header-left">
                                    <span class="expand-icon" :class="{ 'expanded': expandedOrderId === order.id }">
                                        ▶
                                    </span>
                                    <div class="order-title-group">
                                        <h3 class="order-title">Đơn mượn</h3>
                                        <div class="order-meta-group">
                                            <span class="order-code">Mã: {{ order.code }}</span>
                                            <span class="order-total-books">Tổng: {{ getTotalBooks(order) }}
                                                quyển</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="order-header-right">
                                    <span :class="['status-badge', order.statusClass]">{{ order.status }}</span>
                                </div>
                            </div>

                            <div class="order-content" v-if="expandedOrderId === order.id">
                                <div class="order-meta">
                                    <div class="meta-item"><strong>Ngày mượn:</strong> {{ order.borrowDate }}</div>
                                    <span class="material-symbols-outlined date-arrow">arrow_right_alt</span>
                                    <div class="meta-item"><strong>Ngày trả:</strong> {{ order.returnDate }}</div>
                                </div>
                                <div class="book-list">
                                    <div v-for="book in order.books" :key="book.id" class="book-item">
                                        <img :src="book.image" alt="Book Cover" class="book-cover-mini" />
                                        <div class="book-info">
                                            <div class="book-name">{{ book.name }}</div>
                                            <div class="book-quantity">Số lượng: {{ book.quantity }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Pagination -->
                    <div class="pagination-container">
                        <div class="pagination-controls">
                            <button class="page-btn"><span
                                    class="material-symbols-outlined">chevron_left</span></button>
                            <button class="page-btn active">1</button>
                            <button class="page-btn">2</button>
                            <button class="page-btn">3</button>
                            <button class="page-btn"><span
                                    class="material-symbols-outlined">chevron_right</span></button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import UserService from '../../services/user.service'

const activeTab = ref('profile')
const isEditing = ref(false)
const userInfo = ref({})
const originalUserInfo = ref({})

onMounted(async () => {
    const userStr = localStorage.getItem('user')
    if (userStr) {
        const user = JSON.parse(userStr)
        try {
            const userData = await UserService.get(user._id)
            if (userData) {
                userInfo.value = {
                    HoTen: userData.HoTen || '',
                    SoDienThoai: userData.SoDienThoai || '',
                    Email: userData.Email || '',
                    DiaChi: userData.DiaChi || ''
                }
                originalUserInfo.value = { ...userInfo.value }
            }
        } catch (error) {
            console.error("Lỗi khi tải thông tin:", error)
        }
    }
})

async function toggleEdit() {
    if (isEditing.value) {
        try {
            const userStr = localStorage.getItem('user')
            if (userStr) {
                const user = JSON.parse(userStr)
                await UserService.update(user._id, userInfo.value)
                
                // Cập nhật localStorage
                const updatedUser = { ...user, ...userInfo.value }
                localStorage.setItem('user', JSON.stringify(updatedUser))
                originalUserInfo.value = { ...userInfo.value }
                alert('Cập nhật thông tin thành công!')
            }
        } catch (error) {
            console.error("Lỗi khi cập nhật:", error)
            alert('Cập nhật thất bại. Vui lòng thử lại.')
        }
        isEditing.value = false
    } else {
        isEditing.value = true
    }
}

function cancelEdit() {
    userInfo.value = { ...originalUserInfo.value }
    isEditing.value = false
}

function switchTab(tab) {
    activeTab.value = tab
}

function getTotalBooks(order) {
    return order.books.reduce((sum, book) => sum + book.quantity, 0)
}

const orders = ref([
    {
        id: 1,
        code: '692302bb28c90cdb80fe4187',
        borrowDate: '05/11/1954',
        returnDate: '19/11/1954',
        status: 'Đang mượn',
        statusClass: 'status-borrowed',
        books: [
            { id: 101, name: 'Đại gia Gatsby', quantity: 2, image: '/images/Sach/104_dai_gia_gatsby.png' }
        ]
    },
    {
        id: 2,
        code: '692302bb28c90cdb80fe4188',
        borrowDate: '02/11/1954',
        returnDate: '16/11/1954',
        status: 'Đã trả',
        statusClass: 'status-returned',
        books: [
            { id: 102, name: 'Số Đỏ', quantity: 1, image: '/images/Sach/101_SoDo.png' },
            { id: 105, name: 'Mắt Biếc', quantity: 1, image: '/images/Sach/102_mat_biec.png' }
        ]
    },
    {
        id: 3,
        code: '692302bb28c90cdb80fe4189',
        borrowDate: '25/10/1954',
        returnDate: '08/11/1954',
        status: 'Quá hạn',
        statusClass: 'status-overdue',
        books: [
            { id: 103, name: 'Đắc Nhân Tâm', quantity: 1, image: '/images/Sach/201_dac_nhan_tam.png' }
        ]
    },
    {
        id: 4,
        code: '692302bb28c90cdb80fe4190',
        borrowDate: '10/10/1954',
        returnDate: '24/10/1954',
        status: 'Đã trả',
        statusClass: 'status-returned',
        books: [
            { id: 104, name: 'Giết con chim nhại', quantity: 3, image: '/images/Sach/103_giet_con_chim_nhai.png' }
        ]
    }
])

const expandedOrderId = ref(null)

function toggleOrder(id) {
    if (expandedOrderId.value === id) {
        expandedOrderId.value = null
    } else {
        expandedOrderId.value = id
    }
}
</script>

<style scoped>
ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

button,
input {
    border: none;
    background: none;
    font-family: inherit;
}

button {
    cursor: pointer;
}

input {
    cursor: text;
}

.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    vertical-align: middle;
}

.paper-card {
    box-shadow: 2px 2px 0px 0px rgba(62, 39, 35, 0.15);
    border: 1px solid rgba(130, 116, 114, 0.2);
    border-radius: 5px;
    position: relative;
}


.page-header {
    margin-bottom: 48px;
    text-align: center;
}

@media (min-width: 768px) {
    .page-header {
        text-align: left;
    }
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
    .layout-container {
        flex-direction: row;
    }
}

.tab-nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

@media (min-width: 768px) {
    .tab-nav {
        width: 256px;
        flex-shrink: 0;
    }
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
    .tab-pane {
        padding: 48px;
    }
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
    .avatar-section {
        align-items: flex-start;
    }
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
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
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
    .form-grid {
        grid-template-columns: 1fr 1fr;
    }
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

.btn-cancel {
    background-color: var(--color-surface-container-high);
    color: var(--color-on-surface);
    padding: 8px 32px;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-radius: 5px;
    transition: transform 0.2s;
    border: 1px solid var(--color-outline-variant);
}

.btn-cancel:hover {
    transform: translateY(-1px);
    background-color: var(--color-surface-variant);
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

.order-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 16px;
}

.order-card {
    background: #fff;
    border: 1px solid rgba(211, 195, 192, 0.4);
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.order-header {
    background-color: var(--color-surface-container);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 16px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.order-header:hover {
    background-color: #f5eedc;
}

.order-header-left {
    display: flex;
    align-items: center;
    gap: 12px;
}

.expand-icon {
    transition: transform 0.3s ease;
    color: var(--color-on-surface-variant);
    font-size: 15px !important;
}

.expand-icon.expanded {
    transform: rotate(90deg);
}

.order-title-group {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.order-title {
    margin: 0;
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
    color: #8c5b35;
}

.order-code {
    font-size: 12px;
    color: var(--color-on-surface-variant);
}

.order-meta-group {
    display: flex;
    align-items: center;
    gap: 8px;
}

.order-total-books {
    font-size: 12px;
    font-weight: 700;
    color: #8c5b35;
    background-color: #fbf5ee;
    padding: 2px 8px;
    border-radius: 4px;
    border: 1px solid #e6d3c0;
}

.status-badge {
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 13px;
    font-weight: 700;
    border: 1px solid currentColor;
    background-color: #fff;
}

.status-borrowed {
    color: #1e8e3e;
}

.status-returned {
    color: #5f6368;
}

.status-overdue {
    color: #d93025;
}

.order-content {
    padding: 16px;
    border-top: 1px solid rgba(211, 195, 192, 0.2);
    background-color: var(--color-surface-container-low);
}

.order-meta {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
    font-size: 14px;
    color: var(--color-on-surface);
}

.date-arrow {
    color: var(--color-on-surface-variant);
    font-size: 20px !important;
}

.book-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
}

.book-item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 12px;
    background-color: #ffffff;
    border-radius: 8px;
    border: 1px solid rgba(211, 195, 192, 0.3);
}

.book-cover-mini {
    width: 96px;
    height: 144px;
    object-fit: cover;
    border-radius: 4px;
    border: 1px solid rgba(130, 116, 114, 0.2);
}

.book-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.book-name {
    font-weight: 700;
    font-size: 15px;
    color: var(--color-on-surface);
}

.book-quantity {
    font-size: 14px;
    color: var(--color-on-surface-variant);
}

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
