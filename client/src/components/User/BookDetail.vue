<template>
    <div class="book-detail-container" v-if="book">
        <!-- Breadcrumbs -->
        <nav class="breadcrumbs">
            <router-link class="breadcrumb-link" :to="{ name: 'collection' }">Tủ sách</router-link>
            <span class="material-symbols-outlined breadcrumb-separator">chevron_right</span>
            <span class="breadcrumb-current">{{ book.TenSach }}</span>
        </nav>

        <!-- Book Record Container -->
        <div class="book-layout">
            <!-- Left: Book Cover & Quick Actions -->
            <div class="book-sidebar">
                <div class="library-card book-cover-card">
                    <img alt="Book Cover" class="book-cover" :src="`/images/Sach/${book.BiaSach}`">
                </div>
                <div class="action-buttons">
                    <button class="btn-primary buy-now" @click="handleBuyNow">
                        Mượn ngay
                    </button>
                    <button class="btn-primary add-cart" @click="handleRequest" title="Thêm vào giỏ hàng">
                        <span class="material-symbols-outlined">shopping_cart</span>
                    </button>
                </div>
            </div>

            <!-- Right: Detailed Metadata & Synopsis -->
            <div class="library-card book-details">
                <header style="margin-bottom: 40px;">
                    <p class="record-no">mã sách: SP-{{ book._id }}</p>
                    <h1 class="book-title">{{ book.TenSach }}</h1>
                    <p class="book-author">{{ book.TenTG || 'Chưa rõ tác giả' }}</p>
                </header>

                <div class="meta-grid">
                    <div class="meta-item">
                        <span class="meta-label">Đơn Giá</span>
                        <span class="meta-value">{{ formatPrice(book.DonGia) }}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Năm Sản Xuất</span>
                        <span class="meta-value">{{ book.NamSanXuat || 'N/A' }}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Thể Loại</span>
                        <span class="meta-value">{{ book.TheLoai || 'N/A' }}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Nhà Xuất Bản</span>
                        <span class="meta-value">{{ book.NXB || 'N/A' }}</span>
                    </div>
                </div>

                <div>
                    <h3 class="synopsis-title">Tóm tắt nội dung</h3>
                    <div class="synopsis-content">
                        <p v-if="book.MoTa">{{ book.MoTa }}</p>
                        <p v-else>Đang cập nhật tóm tắt cho sách này...</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Related Acquisitions -->
        <section class="related-section">
            <div class="related-header">
                <h2 class="related-title">Các tác phẩm liên quan</h2>
                <div class="related-divider"></div>
            </div>
            <div class="related-grid" v-if="relatedBooks.length > 0">
                <div class="related-item" v-for="relatedBook in relatedBooks" :key="relatedBook._id"
                    @click="$router.push({ name: 'book-detail', params: { id: relatedBook._id } })">
                    <div class="library-card related-cover-card">
                        <img :alt="relatedBook.TenSach" class="related-cover"
                            :src="`/images/Sach/${relatedBook.BiaSach}`">
                        <h3 class="related-book-title">{{ relatedBook.TenSach }}</h3>
                        <p class="related-book-author">{{ relatedBook.TenTG || 'Chưa rõ' }}</p>
                        <p class="related-book-price">{{ formatPrice(relatedBook.DonGia) }}</p>
                    </div>
                </div>
            </div>
            <div v-else style="margin-top: 16px; font-style: italic; color: var(--color-on-surface-variant);">
                Không có sách cùng thể loại.
            </div>
        </section>
    </div>
    <BuyNowModal :is-open="isBuyModalOpen" :book="selectedBookForBuy" @close="closeBuyModal" @confirm="confirmBuy" />
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import BuyNowModal from './BuyNowModal.vue';
import bookService from '@/services/book.service';
import CartService from '@/services/cart.service';

const route = useRoute();
const router = useRouter();
const book = ref(null);
const relatedBooks = ref([]);
const isBuyModalOpen = ref(false);
const selectedBookForBuy = ref(null);

const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
};

const fetchBook = async () => {
    try {
        const id = route.params.id;
        book.value = await bookService.get(id);

        if (book.value && book.value.TheLoai) {
            const allRelated = await bookService.getRelatedBooks({ TheLoai: book.value.TheLoai });
            relatedBooks.value = allRelated.filter(b => b._id !== book.value._id).slice(0, 4);
        }
    } catch (error) {
        console.error("Lỗi tải chi tiết sách:", error);
    }
};

watch(() => route.params.id, (newId) => {
    if (newId) {
        fetchBook();
        window.scrollTo(0, 0);
    }
});

onMounted(() => {
    fetchBook();
});

const handleBuyNow = () => {
    if (book.value) {
        selectedBookForBuy.value = {
            title: book.value.TenSach,
            author: book.value.TenTG || 'Chưa rõ',
            price: formatPrice(book.value.DonGia),
            image: `/images/Sach/${book.value.BiaSach}`,
            code: 'SP-' + book.value._id,
            year: book.value.NamSanXuat || 'N/A',
            category: book.value.TheLoai || 'N/A',
            publisher: book.value.NXB || 'N/A'
        };
        isBuyModalOpen.value = true;
    }
};

const closeBuyModal = () => {
    isBuyModalOpen.value = false;
};

const handleRequest = async (event) => {
    event.stopPropagation();
    const button = event.currentTarget;
    
    const userStr = localStorage.getItem('user');
    if (!userStr) {
        alert("Vui lòng đăng nhập để thêm vào giỏ hàng!");
        router.push({ name: 'login' });
        return;
    }
    const user = JSON.parse(userStr);

    try {
        await CartService.add({ userId: user._id, bookId: book.value._id, quantity: 1 });
        
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
    } catch (error) {
        console.error("Lỗi khi thêm giỏ hàng:", error);
        alert("Thêm vào giỏ hàng thất bại.");
    }
};

const confirmBuy = (b) => {
    alert(`Đã đặt mượn sách: ${b.title}`);
    isBuyModalOpen.value = false;
};
</script>

<style scoped>
.book-detail-container {
    font-family: var(--font-merriweather);
    color: var(--color-on-surface);
}

a {
    text-decoration: none;
    color: inherit;
}

button {
    border: none;
    background: none;
    font-family: inherit;
    cursor: pointer;
    outline: none;
}


.library-card {
    position: relative;
    border: 1px solid rgba(130, 116, 114, 0.2);
    box-shadow: 2px 2px 0px 0px rgba(62, 39, 35, 0.15);
    border-radius: 5px;
    background: #ffffff;
}

/* Breadcrumbs */
.breadcrumbs {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 32px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.05em;
    color: var(--color-on-surface-variant);
}

.breadcrumb-link {
    transition: color 0.2s;
}

.breadcrumb-link:hover {
    color: var(--color-primary);
}

.breadcrumb-separator {
    font-size: 16px;
}

.breadcrumb-current {
    color: var(--color-primary);
}

/* Book Layout */
.book-layout {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--gutter);
    align-items: start;
}

@media (min-width: 768px) {
    .book-layout {
        grid-template-columns: repeat(12, 1fr);
    }
}

/* Left Side */
.book-sidebar {
    display: flex;
    flex-direction: column;
    gap: var(--gutter);
}

@media (min-width: 768px) {
    .book-sidebar {
        grid-column: span 4;
    }
}

.book-cover-card {
    padding: 16px;
}

.book-cover {
    width: 100%;
    aspect-ratio: 3 / 4;
    border: 1px solid rgba(130, 116, 114, 0.3);
    object-fit: cover;
    filter: grayscale(20%) sepia(10%);
}

.action-buttons {
    display: flex;
    gap: 12px;
}

.btn-primary {
    flex: 1;
    padding: 12px 6px;
    background-color: var(--color-primary);
    color: var(--color-on-primary);
    border-radius: 5px;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    border: 1px solid var(--color-primary);
    transition: all 0.2s;
    cursor: pointer;
}

.btn-primary.buy-now {
    background-color: var(--color-secondary);
    color: var(--color-on-secondary);
    border-color: var(--color-secondary);
}

.btn-primary.buy-now:hover {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
}

.btn-primary.add-cart {
    flex: 0 0 100px;
    padding: 0;
    background-color: transparent;
    color: var(--color-primary);
}

.btn-primary.add-cart:hover {
    background-color: var(--color-primary);
    color: var(--color-on-primary);
}

/* Right Side */
.book-details {
    padding: 32px;
}

@media (min-width: 768px) {
    .book-details {
        grid-column: span 8;
        padding: 48px;
    }
}

.record-no {
    font-size: 14px;
    font-weight: 700;
    color: var(--color-secondary);
    text-transform: uppercase;
    letter-spacing: 0.2em;
    margin-bottom: 8px;
}

.book-title {
    font-family: var(--font-merriweather);
    font-size: 32px;
    font-weight: 700;
    color: var(--color-primary);
    margin-bottom: 8px;
    line-height: 1.2;
}

@media (min-width: 768px) {
    .book-title {
        font-size: 48px;
        line-height: 56px;
    }
}

.book-author {
    font-family: var(--font-playfair);
    font-size: 24px;
    color: var(--color-on-surface-variant);
    margin-bottom: 40px;
}

.meta-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    padding: 24px 0;
    margin-bottom: 48px;
    border-top: 1px solid var(--color-outline-variant);
    border-bottom: 1px solid var(--color-outline-variant);
}

@media (min-width: 768px) {
    .meta-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}

.meta-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.meta-label {
    font-size: 14px;
    font-weight: 700;
    color: var(--color-on-surface-variant);
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.meta-value {
    font-size: 16px;
    font-weight: 700;
}

.synopsis-title {
    font-family: var(--font-merriweather);
    font-size: 22px;
    font-weight: 600;
    color: var(--color-primary);
    margin-bottom: 14px;
}

.synopsis-content {
    font-size: 16px;
    line-height: 1.6;
    color: var(--color-on-surface);
    display: flex;
    flex-direction: column;
    gap: 24px;
}

/* Related Acquisitions */
.related-section {
    margin-top: 90px;
}

.related-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
}

.related-title {
    font-family: var(--font-playfair);
    font-size: 32px;
    font-weight: 700;
    color: var(--color-primary);
}

.related-divider {
    flex-grow: 1;
    height: 1px;
    background-color: var(--color-outline-variant);
}

.related-link:hover {
    text-decoration: underline;
}

.related-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--gutter);
}

@media (min-width: 640px) {
    .related-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 768px) {
    .related-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}

.related-item {
    cursor: pointer;
    display: flex;
    flex-direction: column;
}

.related-cover-card {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 12px;
    transition: transform 0.2s;
}

.related-item:hover .related-cover-card {
    transform: translateY(-4px);
}

.related-cover {
    width: 100%;
    aspect-ratio: 3/5;
    object-fit: cover;
    filter: grayscale(10%);
}

.related-book-title {
    font-size: 19px;
    font-weight: 700;
    color: var(--color-primary);
}

.related-book-author {
    font-size: 15px;
    color: var(--color-on-surface-variant);
    border-left: 3px solid rgba(131, 84, 37, 0.3);
    padding-left: 10px;
}

.related-book-price {
    width: 6rem;
    font-size: 16px;
    padding: 2px;
    border-radius: 8px;
    background-color: var(--color-error-container);
    color: crimson;
    text-align: center;
}
</style>
