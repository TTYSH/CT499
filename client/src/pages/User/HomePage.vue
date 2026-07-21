<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-bg">
            <img alt="Vintage Library" class="hero-img" src="/images/background_homepage.jpg">
            <div class="hero-overlay"></div>
        </div>
        <div class="container hero-content">
            <div class="hero-inner">
                <h1 class="hero-title">Bảo Tồn Kho Tàng Tri Thức</h1>
                <p class="hero-info">
                   Giữa những giá sách gỗ và ánh đèn vàng dịu nhẹ, tri thức luôn chờ được khám phá. Mỗi cuốn 
                   sách là một ký ức, mỗi trang giấy là một chuyến phiêu lưu. Hãy dành chút thời gian để 
                   lắng nghe những câu chuyện được viết từ nhiều thế hệ. Đắm mình trong không 
                   gian đọc sách yên bình, nơi thời gian dường như trôi chậm lại.
                </p>
                <div class="search-section">
                    <div class="search-wrapper">
                        <span class="material-symbols-outlined search-icon">search</span>
                        <input class="search-input" placeholder="Bạn muốn tìm sách gì?" type="text">
                    </div>
                    <button class="search-btn">
                        <RouterLink active-class="active" to="/collection">Khám phá ngay</RouterLink>
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- Newly Added Books -->
    <section class="books-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Sách Mới Thêm Vào</h2>
                <div class="divider"></div>
                <RouterLink class="view-all-link" active-class="active" to="/collection">
                    Xem Tất Cả
                    <span class="material-symbols-outlined view-all-icon">arrow_right_alt</span>
                </RouterLink>
            </div>
            
            <div 
                class="horizontal-scroll custom-scrollbar" 
                ref="scrollContainer"
                @wheel.prevent="handleHorizontalScroll"
                @mousedown="startDrag"
                @mouseleave="stopDrag"
                @mouseup="stopDrag"
                @mousemove="doDrag"
            >
                <div class="book-card-container" v-for="book in books.slice(0, 6)" :key="book._id">
                    <div class="paper-card" @dragstart.prevent>
                        <img alt="Sách" class="book-cover" :src="`/images/Sach/${book.BiaSach}`" @dragstart.prevent>
                    </div>
                    <div class="book-info">
                        <h3 class="book-title">{{ book.TenSach}}</h3>
                        <p class="book-author">{{ book.TenTG || 'Chưa rõ' }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Quotes Section -->
    <section class="quotes-section">
        <div class="container">
            <div class="quotes-wrapper">
                <div class="quote-block">
                    <div class="quote-item">
                        
                        <span class="quote-mark open-mark">❝</span>
                        <p class="quote-text">Đọc sách là một cuộc trò chuyện. Tất cả các cuốn sách đều nói. 
                            Nhưng một cuốn sách hay cũng biết lắng nghe.</p>
                        <div class="quote-footer">
                            <span class="quote-mark close-mark">❞</span>
                        </div>
                         <p class="quote-author">Mark Haddon</p>
                    </div>
                </div>
                <div class="quote-block">
                    <div class="quote-item">
                       
                        <span class="quote-mark open-mark">❝</span>
                        <p class="quote-text">Sách vở đầy bốn vách, có mấy cũng không vừa.</p>
                        <div class="quote-footer">
                            <span class="quote-mark close-mark">❞</span>
                        </div>
                         <p class="quote-author">Nguyễn Du</p>
                    </div>
                </div>
                <div class="quote-block">
                    <div class="quote-item">
                        
                        <span class="quote-mark open-mark">❝</span>
                        <p class="quote-text">Một người biết đọc nhưng không đọc sách cũng chẳng hơn gì người không biết đọc.</p>
                        <div class="quote-footer">
                            <span class="quote-mark close-mark">❞</span>
                        </div>
                        <p class="quote-author">Mark Twain</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import bookService from '@/services/book.service';

const books = ref([]);

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

//Drag Horizontal Scroll
const handleHorizontalScroll = (evt) => {
    evt.currentTarget.scrollLeft += evt.deltaY;
};

const scrollContainer = ref(null);
let isDown = false;
let startX;
let scrollLeft;

const startDrag = (e) => {
    isDown = true;
    scrollContainer.value.classList.add('dragging');
    startX = e.pageX - scrollContainer.value.offsetLeft;
    scrollLeft = scrollContainer.value.scrollLeft;
};

const stopDrag = () => {
    isDown = false;
    if (scrollContainer.value) {
        scrollContainer.value.classList.remove('dragging');
    }
};

const doDrag = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.value.offsetLeft;
    const walk = (x - startX) * 2; // Tốc độ scroll bằng chuột
    scrollContainer.value.scrollLeft = scrollLeft - walk;
};
</script>

<style scoped>
.home-page {
    display: flex;
    flex-direction: column;
}

/* Container for sections */
.container {
    max-width: var(--max-width, 1200px);
    margin: 0 auto;
}

/* Hero Section */
.hero {
    position: relative;
    min-height: 716px;
    display: flex;
    align-items: center;
    overflow: hidden;
    margin-top: -48px;
    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);
    margin-bottom: 7rem;
}
@media (min-width: 768px) {
    .hero {
        margin-top: -80px;
    }
}
.hero-bg {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    z-index: 0;
}
.hero-img {
    width: 100%; height: 100%;
    object-fit: cover;
    filter: brightness(50%);
    opacity: 0.9;
}
.hero-overlay {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background-color: rgba(39, 19, 16, 0.2);
    mix-blend-mode: multiply;
}
.hero-content {
    position: relative;
    z-index: 10;
    width: 100%;
    color: #ffffff;
    text-align: center;
    padding: 0 var(--margin-mobile);
}
@media (min-width: 768px) { 
    .hero-content { 
        text-align: left; 
        padding: 0 var(--margin-desktop);
    } 
}

.hero-inner { max-width: 42rem; }

.hero-title {
    font-family: var(--font-playfair);
    font-size: 45px;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 56px;
    margin-bottom: 16px;
    color: var(--color-surface, #fbf9f5);
}
.hero-info {
    font-size: 16px;
    line-height: 28px;
    margin-bottom: 32px;
    color: var(--color-surface-variant, #f4dfdb);
    opacity: 0.9;
}

/* Search Section */
.search-section {
    display: flex;
    gap: 7px;
}
.search-wrapper {
    align-items: center;
    background-color: var(--color-surface-container-lowest);
    border: 2px solid var(--color-secondary);
    border-radius: 5px;
    padding: 5px 12px;
}
.search-input {
    width: 256px;
    font-size: 15px;
    padding: 0 8px;
    color: var(--color-on-surface);
}
.search-input::placeholder {
    font-size: 15px;
}
.search-icon {
    color: var(--color-outline); 
}
.search-btn {
    background-color: var(--color-secondary);
    color: #ffffff;
    padding: 8px 22px;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: all 0.15s;
    border-radius: 5px;
    cursor: pointer;
}
.search-btn:hover { 
    background-color: var(--color-primary); 
}
.search-btn:active { 
    transform: scale(0.95); 
}

/* Books Section */
.books-section { 
    padding-bottom: 96px; 
}
.section-header {
    display: flex;
    gap: 16px;
    align-items: center;
    flex-direction: row;
    margin-bottom: 32px;
}
.section-title {
    font-family: var(--font-playfair);
    font-size: 31px;
    font-weight: 700;
    line-height: 40px;
    color: var(--color-primary);
}
.divider {
    flex-grow: 1; 
    height: 1px; 
    background-color: var(--color-outline-variant); 
}
.view-all-link {
    font-size: 15px;
    font-weight: 700;
    color: var(--color-primary);
    display: flex;
    align-items: center;
    gap: 8px;
    transition: color 0.2s;
}
.view-all-link:hover { 
    color: var(--color-secondary); 
}
.view-all-icon { 
    font-size: 20px; 
    transition: transform 0.2s; 
}
.view-all-link:hover .view-all-icon { 
    color: var(--color-secondary);
    transform: translateX(4px); 
}

.horizontal-scroll {
    display: flex;
    overflow-x: auto;
    gap: var(--gutter);
    padding-bottom: 32px;
    scroll-behavior: smooth;
    cursor: grab;
}
.horizontal-scroll.dragging {
    cursor: grabbing;
    scroll-behavior: auto; /* Tắt mượt khi drag để phản hồi nhanh hơn */
    user-select: none;
}
.custom-scrollbar::-webkit-scrollbar { 
    height: 4px; 
}
.custom-scrollbar::-webkit-scrollbar-track { 
    background: rgba(131, 84, 37, 0.1); 
}
.custom-scrollbar::-webkit-scrollbar-thumb { 
    background: #835425; 
}

.book-card-container {
    min-width: 280px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
}
@media (min-width: 768px) { .book-card-container { min-width: 320px; } }

.paper-card {
    background-color: var(--color-surface-container-low);
    padding: 16px;
    position: relative;
    aspect-ratio: 3/4;
    display: flex;
    flex-direction: column;
    border: 2px solid rgba(39, 19, 16, 0.1);
    box-shadow: 2px 2px 0px 0px rgba(62,39,35,0.1);
    border-radius: 8px;
    transition: all 0.2s ease;
}
.book-card-container:hover .paper-card {
    transform: translate(-1px, -1px);
    box-shadow: 4px 4px 0px 0px rgba(62,39,35,0.15);
}
.book-cover {
    width: 100%; height: 100%;
    object-fit: cover;
    filter: grayscale(30%);
    transition: filter 0.3s;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    margin-bottom: 16px;
    border-radius: 8px;
}
.book-card-container:hover .book-cover { 
    filter: grayscale(0%); 
}

.book-info { 
    margin-top: 16px; 
}
.book-title {
    font-family: var(--font-merriweather);
    font-size: 18px;
    font-weight: 600;
    color: var(--color-primary);
    transition: color 0.2s;
}
.book-card-container:hover .book-title { 
    color: var(--color-secondary); 
}
.book-author {
    font-size: 14px;
    color: var(--color-on-surface-variant);
}

/* Quotes Section */
.quotes-section {
    padding-bottom: 96px;
}

.quotes-wrapper {
    display: flex;
    flex-direction: column;
    gap: 32px;
    max-width: 900px;
    margin: 0 auto;
}
.quote-block {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.quote-author {
    font-size: 16px;
    font-weight: 700;
    color: var(--color-primary);
    margin: 0;
    align-self: flex-end;
}
.quote-item {
    padding: 24px;
    background-color: var(--color-surface-container-low, #fcfaf8);
    border-radius: 10px;
    border-left: 5px solid var(--color-secondary, #835425);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: 100%;
    position: relative;
    overflow: hidden;
}
.quote-mark {
    font-size: 28px;
    color: var(--color-secondary, #835425);
    line-height: 1;
}
.open-mark {
    align-self: flex-start;
}
.close-mark {
    align-self: flex-end;
}
.quote-footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 5px;
}
.quote-text {
    font-family: var(--font-merriweather, serif);
    font-size: 20px;
    font-style: italic;
    color: var(--color-on-surface);
    line-height: 1.6;
    margin: 0;
    text-align: center;
}

/* 2nd Frame (Even) - Mirrored */
.quotes-wrapper .quote-block:nth-child(even) .quote-item {
    border-left: none;
    border-right: 5px solid var(--color-secondary, #835425);
}
</style>
