<template>
  <div class="collection-page">
    <!-- Sidebar: Filters -->
    <aside class="sidebar">
        <div class="sidebar-inner">
            <section class="filter-section" v-if="activeAuthor">
                <h3 style="margin-bottom: 16px;">Đang lọc theo</h3>
                <div class="active-filter" style="display: flex; align-items: center; gap: 8px; background-color: rgba(255, 191, 135, 0.3); padding: 12px; border: 1px solid rgba(131, 84, 37, 0.2);">
                    <span class="material-symbols-outlined icon" style="color: var(--color-secondary);">person</span>
                    <span class="text" style="font-size: 14px; font-weight: 700; color: var(--color-primary);">{{ activeAuthor }}</span>
                    <button class="material-symbols-outlined close-btn" @click="clearAuthorFilter" style="margin-left: auto; color: var(--color-on-surface-variant); cursor: pointer; border: none; background: none;">close</button>
                </div>
            </section>
            <section class="filter-section">
                <h3>Danh mục</h3>
                <ul class="category-list">
                    <li>
                        <label class="category-item">
                            <input class="category-checkbox" type="checkbox">
                            <span class="category-label">Lịch sử</span>
                        </label>
                    </li>
                    <li>
                        <label class="category-item">
                            <input class="category-checkbox" type="checkbox" checked>
                            <span class="category-label">Triết học</span>
                        </label>
                    </li>
                    <li>
                        <label class="category-item">
                            <input class="category-checkbox" type="checkbox">
                            <span class="category-label">Văn học</span>
                        </label>
                    </li>
                    <li>
                        <label class="category-item">
                            <input class="category-checkbox" type="checkbox">
                            <span class="category-label">Khoa học</span>
                        </label>
                    </li>
                </ul>
            </section>

            <section class="filter-section">
                <h3>Thể loại</h3>
                <div class="tags-container">
                    <button class="tag-btn">Kinh điển</button>
                    <button class="tag-btn active">Hiện đại</button>
                    <button class="tag-btn">Tiểu luận</button>
                    <button class="tag-btn">Thơ ca</button>
                    <button class="tag-btn">Hồi ký</button>
                </div>
            </section>

            <section class="quote-box">
                <div class="quote-content">
                    <p class="quote-text">"Mỗi cuốn sách là một thế giới đang chờ được khám phá."</p>
                    <p class="quote-author">— Thủ thư đời thứ IV</p>
                </div>
                <span class="material-symbols-outlined quote-icon">menu_book</span>
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
                <h1 class="page-title">Tủ sách Thư viện</h1>
                <p class="page-subtitle">Khám phá các bản thảo cổ và tác phẩm trí tuệ vượt thời gian.</p>
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
                        data-alt="A weathered vintage book cover for a philosophy text titled 'The Republic' by Plato. The book rests on an aged oak desk in a dusty, sun-drenched library. The aesthetic is academic and nostalgic with warm amber lighting and sharp detail of the paper texture. The atmosphere evokes a deep sense of historical intellectualism."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_Kg3vt96yw8n--nt_9T3Xlq58Qz9a0Rl5H-uuIP9H5PrMxh9H4M9MEBzkGPpJG97gDw_bOtxSNM3uDPFiDptbNsETLcIGjUdlHZvzYVrhjx9-YwO2ZeT77wXSp74LBjGsVb9tFW5GzObelyZBYcycFE2r4Uvgamo7GAWXXy-RpBcwiCYMbR4YeJ-BRS04CwuR3MQST-f4mFUsBU1odf-P0dqj8jRtYiPfTRHXWUtZFGzDvhfTZb636U64cbH2vH_-aUdNtlf9xiE">
                    <span class="status-badge status-reserved">Reserved</span>
                </div>
                <div class="card-content">
                    <h2 class="book-title">Cộng Hòa (The Republic)</h2>
                    <p class="book-author" @click.stop="filterByAuthor($event.target.textContent)" style="cursor: pointer; text-decoration: underline;">Plato</p>
                    <p class="book-description">Một tác phẩm kinh điển thảo luận về công lý, trật tự và nhân cách
                        của nhà nước lý tưởng và con người chính trực.</p>
                </div>
                <button class="add-btn" @click="handleRequest">Add to Request</button>
            </div>

            <!-- Card 2 -->
            <div class="book-card" @click="goToBookDetail">
                <div class="card-image-wrapper">
                    <img class="card-image"
                        data-alt="A beautiful leather-bound book with gold filigree on the spine titled 'Meditations' by Marcus Aurelius. The book is placed upright in a collection of other ancient volumes within a dark mahogany shelf. The lighting is low and moody, highlighting the rich textures of the leather and the dusty environment of an old-world archive."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9JmVW2MPRCD-doNKvbvMjrnBHbq9skRPHcwlEzX6jEZMRRqZyvSIm3aFlYkLpucooPqAxIaeX8E-B-8HuAIXNUKzVDsEQyZmQ3p_TqtIfdE3Tvgfg-aADCy8Px0lDhwVi7VsspygJ0kaB5R8dvah_PlEjLNxhfPAMVw5Wkumlu8tLavIy0gA8o2p2p9EGYTrc30F6WlS9Mt-XDaYJz-wF_dSlngfxUxh3lqVE0eG64loP9GxQp9mG6yGXChwbPO6P_gVfy0TEqL8">
                    <span class="status-badge status-available">Available</span>
                </div>
                <div class="card-content">
                    <h2 class="book-title">Suy Tưởng (Meditations)</h2>
                    <p class="book-author" @click.stop="filterByAuthor($event.target.textContent)" style="cursor: pointer; text-decoration: underline;">Marcus Aurelius</p>
                    <p class="book-description">Những ghi chép cá nhân của vị hoàng đế La Mã về chủ nghĩa khắc kỷ,
                        trách nhiệm và bản chất của con người.</p>
                </div>
                <button class="add-btn" @click="handleRequest">Add to Request</button>
            </div>

            <!-- Card 3 -->
            <div class="book-card" @click="goToBookDetail">
                <div class="card-image-wrapper">
                    <img class="card-image"
                        data-alt="A classic literary masterpiece with a simple, cream-colored paper dust jacket featuring elegant serif typography for 'Crime and Punishment' by Fyodor Dostoevsky. The book is set against a backdrop of a parchment paper texture with subtle ink splatters. The mood is serious, scholarly, and deeply grounded in mid-century academic aesthetics."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuJqiHtE7arMrKqxX7UlPAnj3WFEYBmhkzVymDXb4IR91F01L0Qr5mzl130SrtyUdRpfFdxY_uj9qQgoVrpsFbhvO9RMRc85ns6wCMM-265eQ1XEd1mzgCzXN_efR5guYQT8-Zki-n5trHf4YhYcwXZEvvdnnLBLSyfZfBj-UOC7BqnFp_ZboIce1v_yBYeRj5QYp2CF0L8ryDWFIJlDR6udUGHQMTyyzpuKZ9DiJoI0MFtaPtPC2Zc45UUxockFdjkIy_93BO2NU">
                    <span class="status-badge status-available">Available</span>
                </div>
                <div class="card-content">
                    <h2 class="book-title">Tội Ác và Hình Phạt</h2>
                    <p class="book-author" @click.stop="filterByAuthor($event.target.textContent)" style="cursor: pointer; text-decoration: underline;">Fyodor Dostoevsky</p>
                    <p class="book-description">Khám phá tâm lý tội phạm và sự chuộc lỗi qua hành trình của
                        Raskolnikov trong một xã hội đầy áp bức.</p>
                </div>
                <button class="add-btn" @click="handleRequest">Add to Request</button>
            </div>

            <!-- Card 4 -->
            <div class="book-card" @click="goToBookDetail">
                <div class="card-image-wrapper">
                    <img class="card-image"
                        data-alt="A scientific archival document or book cover featuring diagrams of celestial bodies and elegant calligraphy for 'Principia Mathematica' by Isaac Newton. The paper looks heavily aged, with sepia tones and tactile grain. It is resting on a linen surface under a soft lamp light that creates a focused, scholarly atmosphere."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNKi2v-iZ5P7NH34sEH2fBM2ZGoP6OFZwyjou2cT2rbkCEYQostyEYCcm0McvjBh5gJ2-E8hHbnNEkeKeiPiLHA8XpWS_itbpfA-ErITuOke8-SKFcC-vArSunld8ytQrloi5XkuKsqB80Gn_igw1vmzL_T94Tv_Fu98Mq3lB-Qhm_1AagUoV6wBPe1yoJcZRCgOiL99m_pxalvcTuSEFV9I8ltncHS0DPkynk9TvYXhpkziwbUemJxl7K8V92H6ErJaz9Z3ZIA2Q">
                    <span class="status-badge status-reserved">Reserved</span>
                </div>
                <div class="card-content">
                    <h2 class="book-title">Principia Mathematica</h2>
                    <p class="book-author" @click.stop="filterByAuthor($event.target.textContent)" style="cursor: pointer; text-decoration: underline;">Isaac Newton</p>
                    <p class="book-description">Nền tảng của cơ học cổ điển và quy luật vạn vật hấp dẫn, một trong
                        những công trình quan trọng nhất lịch sử khoa học.</p>
                </div>
                <button class="add-btn" @click="handleRequest">Add to Request</button>
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
            <span class="page-dots">...</span>
            <button class="page-item">12</button>
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
    if (button.textContent.trim() === 'Add to Request') {
        const originalText = button.textContent;
        button.textContent = 'Requested ✓';
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
.filter-section h3 {
    font-family: var(--font-playfair);
    font-size: 24px;
    font-weight: 600;
    color: var(--color-primary);
    margin-bottom: 24px;
    border-bottom: 1px solid rgba(131, 84, 37, 0.2);
    padding-bottom: 8px;
}

.category-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
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

.tags-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.tag-btn {
    padding: 4px 12px;
    background-color: var(--color-surface-container-high);
    border: 1px solid var(--color-outline-variant);
    font-size: 12px;
    font-weight: 700;
    border-radius: 999px;
    transition: background-color 0.2s;
    color: var(--color-on-surface);
}

.tag-btn:hover {
    background-color: var(--color-secondary-container);
}

.tag-btn.active {
    background-color: var(--color-secondary);
    color: var(--color-on-secondary);
    border-color: var(--color-secondary);
}

.quote-box {
    padding: 24px;
    background-color: #efeeea;
    border: 1px solid rgba(211, 195, 192, 0.5);
    position: relative;
    overflow: hidden;
    margin-top: 32px;
}

.quote-content {
    position: relative;
    z-index: 10;
}

.quote-text {
    color: var(--color-primary);
    font-style: italic;
    margin-bottom: 16px;
}

.quote-author {
    font-size: 14px;
    font-weight: 700;
    color: var(--color-secondary);
}

.quote-icon {
    position: absolute;
    bottom: -16px;
    right: -16px;
    font-size: 96px;
    color: rgba(130, 116, 114, 0.2);
}

/* Content Header */
.page-header {
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

.page-title {
    font-family: var(--font-playfair);
    font-size: 48px;
    font-weight: 700;
    color: var(--color-primary);
    margin-bottom: 8px;
    letter-spacing: -0.02em;
}

.page-subtitle {
    font-size: 18px;
    color: var(--color-on-surface-variant);
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
    border: none;
    border-bottom: 1px solid var(--color-outline-variant);
    padding: 4px 0;
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
    gap: 32px;
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
    background-color: var(--color-surface);
    border: 1px solid rgba(211, 195, 192, 0.4);
    padding: 20px;
    box-shadow: 4px 4px 0px 0px rgba(131, 84, 37, 0.1);
    transition: all 0.3s;
    min-height: 500px;
    position: relative;
}

.book-card:hover {
    transform: translateY(-4px);
    box-shadow: 6px 6px 0px 0px rgba(131, 84, 37, 0.15);
}

.book-card::after {
    content: "";
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
    width: 14px;
    height: 14px;
    background: #fbf9f5;
    border: 1px solid #d3c3c0;
    border-radius: 50%;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-image-wrapper {
    height: 256px;
    margin-bottom: 24px;
    overflow: hidden;
    position: relative;
    background-color: var(--color-surface-container-high);
    border: 1px solid rgba(211, 195, 192, 0.2);
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

.status-badge {
    position: absolute;
    top: 8px;
    right: 8px;
    font-size: 10px;
    font-weight: 700;
    padding: 4px 8px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.status-reserved {
    background-color: var(--color-primary);
    color: var(--color-on-primary);
}

.status-available {
    background-color: #223021;
    color: #889885;
}

.card-content {
    flex-grow: 1;
    padding-bottom: 32px;
}

.book-title {
    font-family: var(--font-playfair);
    font-size: 24px;
    font-weight: 600;
    color: var(--color-primary);
    margin-bottom: 8px;
    transition: color 0.2s;
}

.book-card:hover .book-title {
    color: var(--color-secondary);
}

.book-author {
    font-style: italic;
    color: var(--color-on-surface-variant);
    margin-bottom: 16px;
    border-left: 2px solid rgba(131, 84, 37, 0.3);
    padding-left: 12px;
}

.book-description {
    font-size: 12px;
    color: var(--color-on-surface-variant);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
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
    gap: 16px;
}

.page-item {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--color-outline-variant);
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
