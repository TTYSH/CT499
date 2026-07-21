<template>
    <div class="collection-page">
        <!-- Sidebar: Filters -->
        <aside class="sidebar">
            <div class="sidebar-inner">
                <section class="filter-section">
                    <div class="search-wrapper">
                        <span class="material-symbols-outlined search-icon">search</span>
                        <input class="search-input" placeholder="Tìm kiếm..." type="text">
                    </div>
                    <h3>Thể loại</h3>
                    <ul class="category-list">
                        <li>
                            <label class="category-item">
                                <input class="category-checkbox" type="checkbox">
                                <span class="category-label">Văn học/Tiểu thuyết</span>
                            </label>
                        </li>
                        <li>
                            <label class="category-item">
                                <input class="category-checkbox" type="checkbox">
                                <span class="category-label">Kỹ năng sống/Phát triển bản thân</span>
                            </label>
                        </li>
                        <li>
                            <label class="category-item">
                                <input class="category-checkbox" type="checkbox">
                                <span class="category-label">Tâm lý học</span>
                            </label>
                        </li>
                        <li>
                            <label class="category-item">
                                <input class="category-checkbox" type="checkbox">
                                <span class="category-label">Kinh dị/Giật gân</span>
                            </label>
                        </li>
                        <li>
                            <label class="category-item">
                                <input class="category-checkbox" type="checkbox">
                                <span class="category-label">Khoa học viễn tưởng</span>
                            </label>
                        </li>
                        <li>
                            <label class="category-item">
                                <input class="category-checkbox" type="checkbox">
                                <span class="category-label">Lịch sử</span>
                            </label>
                        </li>
                        <li>
                            <label class="category-item">
                                <input class="category-checkbox" type="checkbox">
                                <span class="category-label">Kinh doanh/Tài chính</span>
                            </label>
                        </li>
                        <li>
                            <label class="category-item">
                                <input class="category-checkbox" type="checkbox">
                                <span class="category-label">Thiếu nhi</span>
                            </label>
                        </li>
                    </ul>
                </section>
            </div>
        </aside>

        <!-- Book Collection Grid -->
        <div class="content-area">
            <header class="page-header">
                <div>
                    <h1 class="page-title">Tủ sách thư viện</h1>
                </div>
                <div class="sort-control">
                    <span>Sắp xếp theo:</span>
                    <select class="sort-select">
                        <option>Mới nhất</option>
                        <option>Tác giả A-Z</option>
                        <option>Năm xuất bản</option>
                    </select>
                </div>
            </header>
                <div class="book-grid">
                    <div class="book-card" v-for="book in paginatedBooks" :key="book._id" @click="goToBookDetail(book)">
                        <div class="card-image-wrapper">
                            <img class="card-image" :src="`/images/Sach/${book.BiaSach}`" :alt="book.TenSach">
                        </div>
                        <div class="card-content">
                            <h2 class="book-title">{{ book.TenSach }}</h2>
                            <p class="book-author" style="cursor: pointer;">{{ book.TenTG || 'Tác giả' }}</p>
                        </div>
                        <p class="book-price">{{ formatPrice(book.DonGia) }}</p>
                        <div class="card-actions">
                            <button class="buy-now-btn" @click.stop="handleBuyNow(book)">Mượn ngay</button>
                            <button class="add-btn" @click.stop="handleRequest" title="Thêm vào giỏ hàng">
                                <span class="material-symbols-outlined">shopping_cart</span>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Pagination -->
                <nav class="pagination" v-if="totalPages > 1">
                    <button class="page-item" 
                        :disabled="currentPage === 1" 
                        @click="changePage(currentPage - 1)"
                        :style="{ opacity: currentPage === 1 ? 0.5 : 1, cursor: currentPage === 1 ? 'not-allowed' : 'pointer'}">
                        <span class="material-symbols-outlined">chevron_left</span>
                    </button>
                    <button class="page-item" 
                        v-for="page in totalPages" 
                        :key="page" :class="{ active: currentPage === page}" 
                        @click="changePage(page)"> 
                    {{ page }}
                    </button>
                    <button class="page-item" 
                            :disabled="currentPage === totalPages"
                            @click="changePage(currentPage + 1)"
                            :style="{ opacity: currentPage === totalPages ? 0.5 : 1, cursor: currentPage === totalPages ? 'not-allowed' : 'pointer'}">
                        <span class="material-symbols-outlined">chevron_right</span>
                    </button>
                </nav>
        </div>
        <BuyNowModal :is-open="isBuyModalOpen" :book="selectedBookForBuy" @close="closeBuyModal"
            @confirm="confirmBuy" />
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import BuyNowModal from '@/components/User/BuyNowModal.vue';
import bookService from '@/services/book.service';

const router = useRouter();
const isBuyModalOpen = ref(false);
const selectedBookForBuy = ref(null);
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
    if (page >=1 && page <= totalPages.value){
        currentPage.value = page;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

const fetchBooks = async () => {
    try {
        books.value = await bookService.getAll();
    } catch (error) {
        console.error("Lỗi khi tải dữ liệu sách:", error);
    }
};

onMounted(() => {
    fetchBooks();
});

const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
};

const goToBookDetail = (book) => {
    router.push({ name: 'book-detail', params: { id: book._id } });
};

const handleRequest = (event) => {
    event.stopPropagation();
    const button = event.currentTarget;
    const icon = button.querySelector('.material-symbols-outlined');
    if (icon && icon.textContent.trim() === 'shopping_cart') {
        button.innerHTML = '<span class="material-symbols-outlined" style="color: #4caf50;">shopping_cart</span> <span style="color: #4caf50; font-weight: bold; margin-left: 4px;">✓</span>';
        button.style.borderColor = '#4caf50';
        button.style.backgroundColor = '#e8f5e9';

        setTimeout(() => {
            button.innerHTML = '<span class="material-symbols-outlined">shopping_cart</span>';
            button.style.borderColor = '';
            button.style.backgroundColor = 'transparent';
        }, 2000);
    }
};

const handleBuyNow = (book) => {
    selectedBookForBuy.value = {
        title: book.TenSach,
        author: book.TenTG || 'Chưa rõ',
        price: formatPrice(book.DonGia),
        image: `/images/Sach/${book.BiaSach}`,
        code: 'SP-' + book._id,
        year: book.NamSanXuat || 'N/A',
        category: book.TheLoai || 'Văn học',
        publisher: book.NXB || 'N/A'
    };
    isBuyModalOpen.value = true;
};

const closeBuyModal = () => {
    isBuyModalOpen.value = false;
};

const confirmBuy = (book) => {
    alert(`Đã đặt Mượn sách: ${book.title}`);
    isBuyModalOpen.value = false;
};
</script>

<style scoped>
/* Layout */
.collection-page {
    display: flex;
    gap: var(--gutter);
    width: 100%;
}

.sidebar {
    width: 256px;
    flex-shrink: 0;
}

.sidebar-inner {
    position: sticky;
    top: 112px;
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.content-area {
    flex-grow: 1;
}

/* Sidebar Sections */

.filter-section h3 {
    font-family: var(--font-playfair);
    font-size: 22px;
    font-weight: 600;
    color: var(--color-primary);
    margin-bottom: 24px;
    border-bottom: 1px solid rgba(131, 84, 37, 0.2);
    padding-bottom: 8px;
}

/* Search Bar */
.search-wrapper {
    display: flex;
    align-items: center;
    background-color: var(--color-surface-container-lowest);
    border-bottom: 2px solid var(--color-secondary);
    padding: 4px 8px;
    margin-bottom: 2rem;
}

.search-input {
    width: 260px;
    font-size: 14px;
    padding: 0 8px;
    color: var(--color-on-surface);
}

.search-input::placeholder {
    font-size: 14px;
}

.search-icon {
    color: var(--color-secondary);
}

.category-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    list-style: none;
    padding: 0;
    margin: 0;
}

.category-item {
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
}

.category-checkbox {
    width: 16px;
    height: 16px;
    accent-color: var(--color-secondary);
}

.category-label {
    font-size: 14px;
    font-weight: 700;
    color: var(--color-on-surface-variant);
    transition: color 0.2s;
}

.category-item:hover .category-label {
    color: var(--color-primary);
}

.category-item input:checked+.category-label {
    color: var(--color-primary);
    font-weight: bold;
}

/* Content Header */
.page-header {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

.page-title {
    font-family: var(--font-playfair);
    font-size: 40px;
    font-weight: 700;
    color: var(--color-primary);
    margin-bottom: 8px;
    letter-spacing: -0.02em;
}

.sort-control {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 700;
    color: var(--color-on-surface-variant);
}

.sort-select {
    background: transparent;
    border: 1px solid var(--color-secondary);
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
    color: inherit;
}

.sort-select:focus {
    outline: none;
    border-bottom-color: var(--color-secondary);
}

/* Grid & Cards */
.book-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 15px;
}

@media (min-width: 640px) {
    .book-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .book-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

.book-card {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 5px;
    background-color: var(--color-surface);
    border: 1px solid rgba(130, 116, 114, 0.3);
    padding: 12px;
    box-shadow: 2px 2px 0px 0px rgba(62, 39, 35, 0.15);
    transition: all 0.3s;
    min-height: 500px;
    position: relative;
    border-radius: 5px;
}

.book-card:hover {
    transform: translateY(-4px);
}


.card-image-wrapper {
    aspect-ratio: 3 / 5;
    width: 100%;
    margin-bottom: 10px;
    overflow: hidden;
    position: relative;
    background-color: var(--color-surface-container-high);
    border: 1px solid rgba(130, 116, 114, 0.3);
}

.card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(20%);
    transition: filter 0.5s;
}

.book-card:hover .card-image {
    filter: grayscale(0%);
}

.card-content {
    flex-grow: 1;
}

.book-title {
    font-family: var(--font-merriweather);
    font-size: 20px;
    font-weight: 600;
    color: var(--color-primary);
    margin-bottom: 8px;
    transition: color 0.2s;
}

.book-author {
    color: var(--color-on-surface-variant);
    border-left: 3px solid rgba(131, 84, 37, 0.3);
    padding-left: 10px;
}

.book-title:hover,
.book-author:hover {
    color: var(--color-secondary);
}

.book-price {
    width: 6rem;
    font-size: 16px;
    margin: 8px 0;
    padding: 2px;
    border-radius: 8px;
    background-color: var(--color-error-container);
    color: crimson;
    text-align: center;
    overflow: hidden;
}

.book-price:hover {
    text-decoration: underline;
}

.card-actions {
    height: 40px;
    display: flex;
    gap: 8px;
    margin-top: auto;
    position: relative;
    z-index: 2;
}

.buy-now-btn {
    flex: 1;
    padding: 10px 4px;
    background-color: var(--color-secondary);
    color: var(--color-on-secondary);
    border: 1px solid var(--color-secondary);
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    transition: all 0.2s;
    box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    cursor: pointer;
}

.buy-now-btn:hover {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
    color: var(--color-on-primary);
}

.buy-now-btn:active {
    transform: scale(0.98);
}

.add-btn {
    flex: 0 0 23%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    background-color: transparent;
    color: var(--color-primary);
    border: 1px solid var(--color-primary);
    transition: all 0.2s;
    border-radius: 5px;
    cursor: pointer;
}

.add-btn:hover {
    background-color: var(--color-primary);
    color: var(--color-on-primary);
}

.add-btn:active {
    transform: scale(0.98);
}

/* Pagination */
.pagination {
    margin-top: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
}

.page-item {
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--color-outline-variant);
    border-radius: 5px;
    color: var(--color-on-surface-variant);
    font-size: 14px;
    font-weight: 700;
    transition: all 0.2s;
}

.page-item:hover {
    border-color: var(--color-secondary);
    color: var(--color-secondary);
}

.page-item.active {
    background-color: var(--color-secondary);
    color: var(--color-on-secondary);
    border-color: var(--color-secondary);
    box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.1);
}

.page-dots {
    color: var(--color-on-surface-variant);
}

/* Mobile layout adjustments */
@media (max-width: 768px) {
    .collection-page {
        flex-direction: column;
    }

    .sidebar {
        width: 100%;
    }

    .sidebar-inner {
        position: static;
    }

    .page-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
    }
}
</style>
