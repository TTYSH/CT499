<template>
    <div>
        <!-- Page Header -->
        <div class="page-header">
            <div>
                <div class="page-subtitle">Danh mục lưu trữ</div>
                <h1 class="page-title">Quản lý kho sách</h1>
            </div>
            <div class="header-actions">
                <select class="filter-select">
                    <option>Trạng thái</option>
                    <option>Sẵn có</option>
                    <option>Đang mượn</option>
                    <option>Hết hàng</option>
                </select>
                <select class="filter-select">
                    <option>Tất cả thể loại</option>
                    <option>Triết học</option>
                    <option>Lịch sử</option>
                    <option>Văn học cổ điển</option>
                    <option>Khoa học tự nhiên</option>
                </select>
                <button class="btn-add sticker-shadow" @click="isAddModalOpen = true">THÊM SÁCH</button>
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
                            <th class="th-center">Số lượng</th>
                            <th>Trạng thái</th>
                            <th class="th-right">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(book, index) in books" :key="book.id">
                            <td class="bold">{{ index + 1 }}</td>
                            <td class="text-secondary bold">{{ book.code }}</td>
                            <td class="book-title">{{ book.title }}</td>
                            <td>{{ book.publisher }}</td>
                            <td class="italic text-on-surface-variant">{{ book.author }}</td>
                            <td><span class="badge" :class="book.genreBadgeClass">{{ book.genre }}</span></td>
                            <td class="td-center bold" :class="{'text-error': book.stock === 0}">{{ book.stock }}</td>
                            <td><span class="badge" :class="book.statusBadgeClass">{{ book.statusText }}</span></td>
                            <td class="td-right">
                                <div class="action-btns">
                                    <button class="action-btn material-symbols-outlined" @click="openBookDetail(book)">visibility</button>
                                    <button class="action-btn material-symbols-outlined">edit</button>
                                    <button class="action-btn delete material-symbols-outlined">delete</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="punched-hole-center punched-hole"></div>
        </div>

        <!-- Pagination -->
        <div class="pagination-container">
            <span class="pagination-info">Hiển thị 1-3 của 128 đầu sách</span>
            <div class="pagination-controls">
                <button class="page-btn"><span class="material-symbols-outlined">chevron_left</span></button>
                <button class="page-btn active">1</button>
                <button class="page-btn">2</button>
                <button class="page-btn">3</button>
                <button class="page-btn"><span class="material-symbols-outlined">chevron_right</span></button>
            </div>
        </div>

        <AddBookModal :isOpen="isAddModalOpen" @close="isAddModalOpen = false" />
        <ViewBookModal :isOpen="isViewModalOpen" :book="selectedBook" @close="isViewModalOpen = false" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import AddBookModal from '../../components/Admin/Book/AddBookModal.vue'
import ViewBookModal from '../../components/Admin/Book/ViewBookModal.vue'

const isAddModalOpen = ref(false)
const isViewModalOpen = ref(false)
const selectedBook = ref(null)

const books = ref([
    {
        id: 'book-1',
        code: 'VN-1234',
        title: 'Sử Việt: Những cuộc hành trình',
        publisher: 'NXB Trẻ',
        author: 'Trần Trọng Kim',
        genre: 'Lịch sử',
        genreBadgeClass: 'badge-history',
        stock: 12,
        stockText: '12 cuốn',
        statusText: 'Sẵn có',
        statusBadgeClass: 'badge-available',
        isbn: '978-604-12345-6',
        status: 'Đang có sẵn',
        bgColor: 'var(--tertiary-fixed)',
        color: 'var(--on-tertiary-fixed-variant)',
        img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1974&auto=format&fit=crop',
        desc: '"Một công trình khảo cứu công phu về dòng chảy lịch sử Việt Nam qua các thời kỳ, tập trung vào những biến động lớn lao và những cuộc di cư mang tính bước ngoặt của dân tộc. Cuốn sách không chỉ là những con số và sự kiện, mà là một câu chuyện kể sống động về bản sắc Việt qua thăng trầm thời gian."'
    },
    {
        id: 'book-2',
        code: 'VN-5432',
        title: 'Triết học Nhập môn',
        publisher: 'NXB Tri Thức',
        author: 'Phan Ngọc',
        genre: 'Triết học',
        genreBadgeClass: 'badge-philosophy',
        stock: 0,
        stockText: '0 cuốn (Hết hàng)',
        statusText: 'Hết hàng',
        statusBadgeClass: 'badge-outofstock',
        isbn: '978-604-54321-0',
        status: 'Đã hết sách',
        bgColor: 'var(--color-error-container)',
        color: 'var(--color-error)',
        img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1798&auto=format&fit=crop',
        desc: '"Tác phẩm dẫn dắt độc giả bước vào thế giới của tư duy trừu tượng, giải mã các khái niệm triết học căn bản thông qua lăng kính văn hóa Việt Nam. Một bộ công cụ tư duy sắc bén cho bất kỳ ai muốn khám phá bản chất của hiện tồn và tri thức."'
    },
    {
        id: 'book-3',
        code: 'VN-9876',
        title: 'Truyện Kiều (Bản hiệu đính)',
        publisher: 'NXB Văn Học',
        author: 'Nguyễn Du',
        genre: 'Văn học',
        genreBadgeClass: 'badge-literature',
        stock: 5,
        stockText: '5 cuốn',
        statusText: 'Đang mượn',
        statusBadgeClass: 'badge-borrowed',
        isbn: '978-604-98765-4',
        status: 'Sắp hết',
        bgColor: 'var(--color-secondary-container)',
        color: 'var(--color-on-secondary-container)',
        img: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1888&auto=format&fit=crop',
        desc: '"Ấn bản đặc biệt kỷ niệm, với các chú giải chi tiết về từ vựng Hán-Việt cổ và những điển tích ẩn sau 3254 câu thơ lục bát bất hủ. Đây là một hành trình đi tìm lại linh hồn của ngôn ngữ Việt qua thiên sử thi bi tráng của nàng Kiều."'
    }
])

const openBookDetail = (book) => {
    selectedBook.value = { ...book }
    // override stock to match original detailed view data if needed
    selectedBook.value.stock = book.stockText
    isViewModalOpen.value = true
}
</script>

<style scoped>
/* Page Layout */
.page-header {
    display: flex;
    flex-direction: column;
    gap: 24px;
    border-bottom: 2px solid rgba(39, 19, 16, 0.2);
    padding-bottom: 16px;
    margin-bottom: var(--gutter);
}
@media (min-width: 768px) {
    .page-header { flex-direction: row; justify-content: space-between; align-items: flex-end; }
}

.page-title {
    font-family: var(--font-playfair);
    font-size: 32px;
    font-weight: 700;
    color: var(--color-primary);
    margin-top: 4px;
}
.page-subtitle {
    font-size: 14px;
    font-weight: 700;
    color: var(--color-secondary);
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

.header-actions {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
}
.filter-select {
    background-color: var(--color-surface);
    border: 1px solid rgba(211, 195, 192, 0.5);
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 700;
    color: var(--color-on-surface-variant);
    transition: border-color 0.2s;
}
.filter-select:focus { border-color: var(--color-secondary); }

.btn-add {
    background-color: var(--color-primary);
    color: var(--color-on-primary);
    padding: 8px 24px;
    font-size: 14px;
    font-weight: 700;
    transition: transform 0.2s;
}
.btn-add:hover { transform: translateY(-2px); }

/* Books Table */
.table-container {
    background-color: var(--color-surface-container-lowest);
    border: 1px solid rgba(211, 195, 192, 0.3);
    position: relative;
    overflow: hidden;
    margin-bottom: 32px;
}
.table-wrapper { overflow-x: auto; }

.data-table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
}
.data-table th {
    background-color: var(--color-surface-container-high);
    color: rgba(39, 19, 16, 0.8);
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 16px;
    border-bottom: 1px solid rgba(62, 39, 35, 0.1);
}
.data-table td {
    padding: 16px;
    border-bottom: 1px solid rgba(211, 195, 192, 0.2);
    transition: background-color 0.2s;
}
.data-table tr { transition: background-color 0.2s; }
.data-table tr:hover td { background-color: var(--color-surface-container-low); }

.th-center, .td-center { text-align: center; }
.th-right, .td-right { text-align: right; }

.book-title {
    font-family: var(--font-playfair);
    font-size: 16px;
    font-weight: 600;
}

.badge {
    display: inline-block;
    padding: 2px 8px;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 2px;
}
.badge-history { background-color: var(--tertiary-fixed); color: var(--on-tertiary-fixed-variant); border: 1px solid rgba(14, 27, 14, 0.2); }
.badge-philosophy { background-color: var(--secondary-fixed); color: var(--on-secondary-fixed-variant); border: 1px solid rgba(131, 84, 37, 0.2); }
.badge-literature { background-color: var(--tertiary-fixed); color: var(--on-tertiary-fixed-variant); border: 1px solid rgba(14, 27, 14, 0.2); }

.badge-available { background-color: var(--tertiary-fixed); color: var(--on-tertiary-fixed-variant); border: 1px solid rgba(14, 27, 14, 0.2); }
.badge-borrowed { background-color: var(--secondary-container); color: var(--on-secondary-container); border: 1px solid rgba(131, 84, 37, 0.2); }
.badge-outofstock { background-color: var(--color-error-container); color: var(--color-on-error-container); border: 1px solid rgba(186, 26, 26, 0.2); }

.action-btns { display: flex; justify-content: flex-end; gap: 8px; }
.action-btn { color: var(--color-secondary); transition: color 0.2s; }
.action-btn:hover { color: var(--color-primary); }
.action-btn.delete { color: var(--color-error); }
.action-btn.delete:hover { color: #b91c1c; }

.punched-hole-center {
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
}
.punched-hole {
    width: 12px;
    height: 12px;
    background-color: var(--color-surface);
    border-radius: 50%;
    border: 1px solid rgba(62, 39, 35, 0.15);
    box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
}

/* Pagination */
.pagination-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
}
.pagination-info { color: var(--color-on-surface-variant); }
.pagination-controls { display: flex; gap: 8px; }
.page-btn {
    width: 40px;
    height: 40px;
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

.text-error { color: var(--color-error); }
.text-secondary { color: var(--color-secondary); }
.text-on-surface-variant { color: var(--color-on-surface-variant); }
.bold { font-weight: 700; }
.italic { font-style: italic; }
.sticker-shadow { box-shadow: 2px 2px 0px 0px rgba(62, 39, 35, 0.15); }
</style>
