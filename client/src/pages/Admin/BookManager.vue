<template>
    <div>
        <!-- Page Header -->
        <div class="page-header">
            <h1 class="page-title">Quản Lý Kho Sách</h1>
            <div class="header-actions">
                <div class="search-section">
                    <span>Tìm kiếm sách</span>
                    <div class="search-wrapper">
                        <span class="material-symbols-outlined search-icon">search</span>
                        <input class="search-input" placeholder="Tìm kiếm..." type="text">
                    </div>
                </div>
                <div class="filter-section status-filter">
                    <span>Trạng thái</span>
                    <select class="filter-select">
                        <option>Sẵn có</option>
                        <option>Hết hàng</option>
                    </select>
                </div>
                <div class="filter-section categories-filter">
                    <span>Thể loại</span>
                    <select class="filter-select">
                        <option>Triết học</option>
                        <option>Lịch sử</option>
                        <option>Văn học cổ điển</option>
                        <option>Khoa học tự nhiên</option>
                    </select>
                </div>
                <button class="btn-add sticker-shadow" @click="isAddModalOpen = true">
                    <span class="material-symbols-outlined" style="font-size: 18px;">add</span>
                    THÊM SÁCH
                </button>
            </div>
        </div>

        <!-- Books Table -->
        <div class="table-container sticker-shadow">
            <div class="table-wrapper">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã sách</th>
                            <th>Tên sách</th>
                            <th>NXB</th>
                            <th>Tác giả</th>
                            <th>Thể loại</th>
                            <th>Số lượng</th>
                            <th>Trạng thái</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(book, index) in paginatedBooks" :key="book._id || index">
                            <td>{{ (currentPage - 1) * itemsPerPage + index + 1 }}</td>
                            <td>{{ book.MaTG }}</td>
                            <td class="book-title">{{ book.TenSach }}</td>
                            <td class="book-publisher">{{ book.NXB }}</td>
                            <td class="book-author"></td>
                            <td><span class="badge">{{ book.TheLoai }}</span></td>
                            <td>{{ book.SoQuyen }}</td>
                            <td><span class="badge"></span></td>
                            <td>
                                <div class="action-btns">
                                    <button class="action-btn material-symbols-outlined" @click="openBookDetail(book)">visibility</button>
                                    <button class="action-btn edit material-symbols-outlined">edit</button>
                                    <button class="action-btn delete material-symbols-outlined">delete</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Pagination -->
        <div class="pagination-container" v-if="totalPages > 1">
            <div class="pagination-controls">
                <button class="page-btn"
                    :disabled="currentPage === 1"
                    @click="changePage(currentPage - 1)"
                    :style="{ opacity: currentPage === 1 ? 0.5 : 1, cursor: currentPage === 1 ? 'not-allowed' : 'pointer'}">
                    <span class="material-symbols-outlined">chevron_left</span>
                </button>
                <button class="page-btn"
                    v-for="page in totalPages" 
                    :key="page" :class="{ active: currentPage === page}" 
                    @click="changePage(page)">
                    {{ page }}
                </button>
                <button class="page-btn"
                    :disabled="currentPage === totalPages"
                    @click="changePage(currentPage + 1)"
                    :style="{ opacity: currentPage === totalPages ? 0.5 : 1, cursor: currentPage === totalPages ? 'not-allowed' : 'pointer'}">
                    <span class="material-symbols-outlined">chevron_right</span>
                </button>
            </div>
        </div>

        <AddBookModal :isOpen="isAddModalOpen" @close="isAddModalOpen = false" />
        <ViewBookModal :isOpen="isViewModalOpen" :book="selectedBook" @close="isViewModalOpen = false" />
    </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import AddBookModal from '../../components/Admin/Book/AddBookModal.vue'
import ViewBookModal from '../../components/Admin/Book/ViewBookModal.vue'
import bookService from '../../services/book.service.js'

const isAddModalOpen = ref(false)
const isViewModalOpen = ref(false)
const selectedBook = ref(null)

const books = ref([]);
const currentPage = ref(1);
const itemsPerPage = 6;

const totalPages = computed(() => {
    return Math.ceil(books.value.length / itemsPerPage);
});

const paginatedBooks = computed(() => {
    const start = (currentPage.value - 1)*itemsPerPage;
    const end = start + itemsPerPage;
    return books.value.slice(start, end);
});

const changePage = (page) => {
    if (page >= 1 && page <= totalPages.value){
        currentPage.value = page;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

const fetchBooks = async () => {
    try {
        books.value = await bookService.getAll();
    } catch (error) {
        console.error("Đã xảy ra lỗi khi lấy danh sách sách: ", error);
    } 
};

onMounted(() => {
    fetchBooks();
});

const openBookDetail = (book) => {
    selectedBook.value = { ...book }
    selectedBook.value.stock = book.stockText
    isViewModalOpen.value = true
}
</script>

<style scoped>
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
    gap: 14px;
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

.btn-add {
    background-color: var(--color-primary);
    color: var(--color-on-primary);
    border-radius: 5px;
    padding: 8px 22px;
    font-size: 14px;
    font-weight: 700;
    transition: transform 0.2s;
    display: flex;
    gap: 5px;
    margin-left: 4.7rem;
}

.btn-add:hover { 
    transform: translateY(-2px); 
}

/* BookManager Table */
.table-container {
    background-color: var(--color-surface-container-lowest);
    border: 1px solid rgba(211, 195, 192, 0.3);
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    margin-bottom: 32px;
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
    white-space: nowrap;
}
.data-table td {
    padding: 10px;
    border-bottom: 1px solid rgba(211, 195, 192, 0.3);
    border-right: 1px solid rgba(211, 195, 192, 0.2);
    transition: background-color 0.2s;
}
.data-table tr { 
    transition: background-color 0.2s; 
}
.data-table tr:hover td { 
    background-color: var(--color-surface-container-low); 
}

.book-title, .book-author, .book-publisher {
    text-align: left;
}

.badge {
    display: inline-block;
    padding: 2px 8px;
    font-size: 14px;
    border-radius: 2px;
}

.text-error { 
    color: var(--color-error); 
}
.sticker-shadow { 
    box-shadow: 2px 2px 0px 0px rgba(62, 39, 35, 0.15); 
}

.badge-available { 
    color: rgb(9, 170, 9); 
}
.badge-outofstock { 
    color: var(--color-error); 
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
.action-btn.edit { color: rgba(0, 0, 255, 0.668);}
.action-btn.delete { color: var(--color-error); }

/* Pagination */
.pagination-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
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
