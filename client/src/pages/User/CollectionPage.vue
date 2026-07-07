<template>
  <div class="collection-page">
    <!-- Sidebar: Filters -->
    <aside class="sidebar">
        <div class="sidebar-inner">
            <section class="filter-section" v-if="activeAuthor">
                <h3 style="margin-bottom: 16px;">Đang lọc theo</h3>
                <div class="active-filter">
                    <span class="material-symbols-outlined icon" style="color: var(--color-secondary);">person</span>
                    <span class="text" style="font-size: 16px; font-weight: 700; color: var(--color-primary);">{{ activeAuthor }}</span>
                    <button class="material-symbols-outlined close-btn" @click="clearAuthorFilter" style="margin-left: auto; color: var(--color-on-surface-variant); cursor: pointer; border: none; background: none;">close</button>
                </div>
            </section>
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
        <template v-if="activeAuthor">
            <AuthorCollection v-if="!showFullProfile" @show-profile="showFullProfile = true" />
            <AuthorProfile v-else @back="showFullProfile = false" />
        </template>

        <template v-else>
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
            <!-- Card 1 -->
            <div class="book-card" @click="goToBookDetail">
                <div class="card-image-wrapper">
                    <img class="card-image"
                        src="/images/Sach/204_7_thoi_quen_cua_ban_tre_thanh_dat.png">
        
                </div>
                <div class="card-content">
                    <h2 class="book-title">7 Thói Quen Của Bạn Trẻ Thành Đạt</h2>
                    <p class="book-author" @click.stop="filterByAuthor($event.target.textContent)" style="cursor: pointer;">Sean Covey</p>
                </div>
                 <p class="book-price">105.000đ</p>
                <button class="add-btn" @click="handleRequest">Thêm vào giỏ hàng</button>
            </div>

            <!-- Card 2 -->
            <div class="book-card" @click="goToBookDetail">
                <div class="card-image-wrapper">
                    <img class="card-image"
                        src="/images/Sach/402_ga_he_ma_quai.png">
            
                </div>
                <div class="card-content">
                    <h2 class="book-title">IT - Gã Hề Ma Quái</h2>
                    <p class="book-author" @click.stop="filterByAuthor($event.target.textContent)" style="cursor: pointer;">Stephen King</p>
                </div>                    
                <p class="book-price">280.000đ</p>
                <button class="add-btn" @click="handleRequest">Thêm vào giỏ hàng</button>
            </div>

            <!-- Card 3 -->
            <div class="book-card" @click="goToBookDetail">
                <div class="card-image-wrapper">
                    <img class="card-image"
                        data-alt="A classic literary masterpiece with a simple, cream-colored paper dust jacket featuring elegant serif typography for 'Crime and Punishment' by Fyodor Dostoevsky. The book is set against a backdrop of a parchment paper texture with subtle ink splatters. The mood is serious, scholarly, and deeply grounded in mid-century academic aesthetics."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuJqiHtE7arMrKqxX7UlPAnj3WFEYBmhkzVymDXb4IR91F01L0Qr5mzl130SrtyUdRpfFdxY_uj9qQgoVrpsFbhvO9RMRc85ns6wCMM-265eQ1XEd1mzgCzXN_efR5guYQT8-Zki-n5trHf4YhYcwXZEvvdnnLBLSyfZfBj-UOC7BqnFp_ZboIce1v_yBYeRj5QYp2CF0L8ryDWFIJlDR6udUGHQMTyyzpuKZ9DiJoI0MFtaPtPC2Zc45UUxockFdjkIy_93BO2NU">
                
                </div>
                <div class="card-content">
                    <h2 class="book-title">Tội Ác và Hình Phạt</h2>
                    <p class="book-author" @click.stop="filterByAuthor($event.target.textContent)" style="cursor: pointer;">Fyodor Dostoevsky</p>
                </div>
                <p class="book-price">250.000đ</p>
                <button class="add-btn" @click="handleRequest">Thêm vào giỏ hàng</button>
            </div>

            <!-- Card 4 -->
            <div class="book-card" @click="goToBookDetail">
                <div class="card-image-wrapper">
                    <img class="card-image"
                        data-alt="A scientific archival document or book cover featuring diagrams of celestial bodies and elegant calligraphy for 'Principia Mathematica' by Isaac Newton. The paper looks heavily aged, with sepia tones and tactile grain. It is resting on a linen surface under a soft lamp light that creates a focused, scholarly atmosphere."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNKi2v-iZ5P7NH34sEH2fBM2ZGoP6OFZwyjou2cT2rbkCEYQostyEYCcm0McvjBh5gJ2-E8hHbnNEkeKeiPiLHA8XpWS_itbpfA-ErITuOke8-SKFcC-vArSunld8ytQrloi5XkuKsqB80Gn_igw1vmzL_T94Tv_Fu98Mq3lB-Qhm_1AagUoV6wBPe1yoJcZRCgOiL99m_pxalvcTuSEFV9I8ltncHS0DPkynk9TvYXhpkziwbUemJxl7K8V92H6ErJaz9Z3ZIA2Q">
                 
                </div>
                <div class="card-content">
                    <h2 class="book-title">Principia Mathematica</h2>
                    <p class="book-author" @click.stop="filterByAuthor($event.target.textContent)" style="cursor: pointer;">Isaac Newton</p>
                </div>
                <p class="book-price">250.000đ</p>
                <button class="add-btn" @click="handleRequest">Thêm vào giỏ hàng</button>
            </div>
        </div>

        <!-- Pagination -->
        <nav class="pagination">
            <button class="page-item">
                <span class="material-symbols-outlined">chevron_left</span>
            </button>
            <button class="page-item active">1</button>
            <button class="page-item">2</button>
            <button class="page-item">3</button>
            <button class="page-item">
                <span class="material-symbols-outlined">chevron_right</span>
            </button>
        </nav>
        </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import AuthorCollection from '@/components/User/AuthorCollection.vue';
import AuthorProfile from '@/components/User/AuthorProfile.vue';

const router = useRouter();
const activeAuthor = ref(null);
const showFullProfile = ref(false);

const filterByAuthor = (authorName) => {
    activeAuthor.value = authorName;
    showFullProfile.value = false;
};

const clearAuthorFilter = () => {
    activeAuthor.value = null;
    showFullProfile.value = false;
};

const goToBookDetail = () => {
    router.push({ name: 'book-detail' });
};

const handleRequest = (event) => {
    event.stopPropagation();
    const button = event.currentTarget;
    if (button.textContent.trim() === 'Thêm vào giỏ hàng') {
        const originalText = button.textContent;
        button.textContent = 'Đã thêm vào giỏ hàng ✓';
        button.style.backgroundColor = '#223021';
        button.style.color = '#889885';
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '';
            button.style.color = '';
        }, 2000);
    }
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
.active-filter {
    display: flex; 
    align-items: center; 
    gap: 8px; 
    background-color: rgba(255, 191, 135, 0.3); 
    padding: 12px; 
    border: 1px solid rgba(131, 84, 37, 0.2);
    border-radius: 5px;
}
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
    box-shadow: 2px 2px 0px 0px rgba(62,39,35,0.15);
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

.book-title:hover, .book-author:hover  {
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

.add-btn {
    width: 100%;
    padding: 12px;
    background-color: var(--color-secondary);
    color: var(--color-on-secondary);
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    text-align: center;
    transition: all 0.2s;
    box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.2);
    margin-top: auto;
    position: relative;
    z-index: 2;
    border-radius: 5px;
}

.add-btn:hover {
    background-color: var(--color-primary);
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
