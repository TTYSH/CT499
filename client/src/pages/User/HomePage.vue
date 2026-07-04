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
                <button class="search-btn">Khám phá ngay</button>
            </div>
        </div>
    </section>

    <!-- Newly Added Books -->
    <section class="books-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Sách Mới Thêm Vào</h2>
                <div class="divider"></div>
                <a class="view-all-link" href="#">
                    Xem Tất Cả
                    <span class="material-symbols-outlined view-all-icon">arrow_right_alt</span>
                </a>
            </div>
            
            <div class="horizontal-scroll custom-scrollbar" @wheel.prevent="handleHorizontalScroll">
                <!-- Book Card 1 -->
                <div class="book-card-container">
                    <div class="paper-card">
                        <img alt="So Do" class="book-cover" src="/images/Sach/101_SoDo.png">
                    </div>
                    <div class="book-info">
                        <h3 class="book-title">Số Đỏ</h3>
                        <p class="book-author">Vũ Trọng Phụng</p>
                    </div>
                </div>
                
                <!-- Book Card 2 -->
                <div class="book-card-container">
                    <div class="paper-card">
                        <img alt="Harry Potter va hon da phu thuy" class="book-cover" src="/images/Sach/502_harry_potter_va_hon_da_phu_thuy.png">
                    </div>
                    <div class="book-info">
                        <h3 class="book-title">Harry Potter Và Hòn Đá Phù Thủy</h3>
                        <p class="book-author">J.K.Rowling</p>
                    </div>
                </div>
                
                <!-- Book Card 3 -->
                <div class="book-card-container">
                    <div class="paper-card">
                        <img alt="Botanical Spirits" class="book-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwJx2xa9WAUFAFFVCju7Cy0nwYS-g0E61Mwj21PfnUlzdASNqv8jo_nzc2SEDcd-NV_XR5mxbE-s1Cu6VN0t7_5SqpPXn8VaAzQcnLOUws726iuJvqQTFEALVZunqXwFJypse5Oo27zNEd-L77gvWOVg6Bea_dAdDVusfn6DI0wBBfDPTw3GuAiYsUCKdGVj0RSGCCUIwerre92uJ8w1leWvLdBdLw0aPPnDpwqC5pyquxs_cuoMN8sVBuAKGXIU9RYscY-VEIdgE">
                    </div>
                    <div class="book-info">
                        <h3 class="book-title">Botanical Spirits</h3>
                        <p class="book-author">Julian Thorne</p>
                    </div>
                </div>
                
                <!-- Book Card 4 -->
                <div class="book-card-container">
                    <div class="paper-card">
                        <img alt="The Silent Archive" class="book-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkKXzqYWWArt_ozwecvp5R_ExoUwME207p0gyV7yOrIiXEEEm7BFc4dxS4cpeDvHXmcA5J1ynOPU0PEZt3y6EwKilEH_H1nIceCpKA84ExgGwAzGOyeds85WZSd13gL9LB0AaAV36nG63piNjPSrTlW0ZkFGARxzHJVsKCFrAh12kkXKivBEg35X00Kv361b_TCeVIHohl3fn1b5d23OMuhUO_T5OPt5BsUbh65s-AFP3_m_TxR18L1A4h99sTM3Y8tc5uuEptFOI">
                    </div>
                    <div class="book-info">
                        <h3 class="book-title">The Silent Archive</h3>
                        <p class="book-author">Miriam Gray</p>
                    </div>
                </div>
            </div>
        </div>
    </section>


  </div>
</template>

<script setup>
const handleHorizontalScroll = (evt) => {
    evt.currentTarget.scrollLeft += evt.deltaY;
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

.search-btn {
    background-color: var(--color-secondary);
    color: #ffffff;
    padding: 16px 32px;
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
}
.custom-scrollbar::-webkit-scrollbar { 
    height: 3px; 
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
</style>
