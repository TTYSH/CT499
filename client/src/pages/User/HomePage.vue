<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-bg">
            <img alt="Vintage Library" class="hero-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv5BklQSm9W9fdsvxG_l-mdkBmf5ugaPz5fkYz8ufmsQF_G-5_WhU1KFMsXvuqfNmtwkKsb2KfBKUUroaKgd4K_lKzuyyPjEgLO0TpgbyRiEViz-DHymynfoR8zO7gV60Ud9_wxOMiecT59thFSp-fBmmkhMOzhMCcxZBkR9sO8QtXuikBh35LHPvrYGTML0hHNMpsvHtQXQPkM26CP1HsmNtWrfJbBc5GhiVUWaV9mxaJjcN-CZHAIYzCZuLrJUIH_aMDgn5Yng8">
            <div class="hero-overlay"></div>
        </div>
        <div class="container hero-content">
            <div class="hero-inner">
                <h1 class="hero-title">Bảo Tồn Kho Tàng Tri Thức</h1>
                <p class="hero-desc">
                   Tiếp cận kho lưu trữ được biên soạn công phu bậc nhất thế giới. Một thiên đường kỹ thuật số dành cho các bản thảo lịch sử, những ấn phẩm học thuật và cả những bí mật thầm kín từ những kệ sách đã bị lãng quên.
                </p>
                <!-- Search Bar -->
                <!-- <div class="search-form">
                    <div class="search-input-wrapper">
                        <span class="material-symbols-outlined search-icon">search</span>
                        <input class="search-input" placeholder="Search the Collection..." type="text">
                    </div>
                    <button class="search-btn">Explore Archive</button>
                </div> -->
            </div>
        </div>
    </section>

    <!-- Archivist's Note / Divider -->
    <div class="container divider-section">
        <div class="divider-inner">
            <!-- <div class="divider-line"></div>
            <span class="divider-text">Established 1954</span>
            <div class="divider-line"></div> -->
        </div>
    </div>

    <!-- Newly Added Books (Horizontal Scroll) -->
    <section class="books-section">
        <div class="container">
            <div class="section-header">
                <div>
                    <h2 class="section-title">Các Sách Mới Thêm Vào</h2>
                    <p class="section-subtitle">Các tác phẩm mới được thêm vào tủ sách</p>
                </div>
                <a class="view-all-link" href="#">
                    Xem Tất Cả
                    <span class="material-symbols-outlined view-all-icon">arrow_right_alt</span>
                </a>
            </div>
            
            <div class="horizontal-scroll custom-scrollbar" @wheel.prevent="handleHorizontalScroll">
                <!-- Book Card 1 -->
                <div class="book-card-container">
                    <div class="paper-card">
                        <img alt="The Theory of Everything" class="book-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWAdw_8fmsZYxMFFN6M3dRxhPUGhjp35vNUmZ--NX6CN2q76bxewRGbd_Wd6yzSf-qKOVcpsxh8xg_OKfxXn7E0__iR_hKrnaBLHGJCtKASfSU4_aqk60MVxR55FxtAH4H1Je60-hcH5W0RlEdDCSsT5abHHfgU6Sucp8Mze29oji_ibKFgNst9xKy56UpnEfVGszViR_ym_GxMH2Kj5tZVuWqJCXjKYuXxc5w9KdzeGQmgYN5fritD1qvdZm2ZlwhZ2NSETho1yQ">
                    </div>
                    <div class="book-info">
                        <div class="book-meta">
                            <span class="book-ref">Ref: ARCH-102</span>
                            <span class="book-status">Available</span>
                        </div>
                        <h3 class="book-title">The Theory of Everything</h3>
                        <p class="book-author">by S. Hawking</p>
                    </div>
                </div>
                
                <!-- Book Card 2 -->
                <div class="book-card-container">
                    <div class="paper-card">
                        <img alt="Cartography of Dreams" class="book-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN8ZXljofEy_88ytQD-Z_Dq4QO9AeaBEuR4WAM4FnCD5JQmuy2VS3Ol3T6z0fjxOmQf-hovPythAOSzgbLqCk-i78rY4D4C8YjA5svUlHzV4G_WNif083hjLPELG_tvGDZKB1-1BrpS26l-wwIxAa-Ftgr8xDPnhmiCcQtQjMZVoHN67P6sYyqD1mbTtSEmSJPqZq66hSMpsDXvI79ikUPlz5DkeQTjqIUanVMtXMxYbzF5U9NpXsJT_G_8u3yazW0UpzgpX0Pies">
                    </div>
                    <div class="book-info">
                        <div class="book-meta">
                            <span class="book-ref">Ref: ARCH-449</span>
                            <span class="book-status reserved">Reserved</span>
                        </div>
                        <h3 class="book-title">Cartography of Dreams</h3>
                        <p class="book-author">by Helena Vance</p>
                    </div>
                </div>
                
                <!-- Book Card 3 -->
                <div class="book-card-container">
                    <div class="paper-card">
                        <img alt="Botanical Spirits" class="book-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwJx2xa9WAUFAFFVCju7Cy0nwYS-g0E61Mwj21PfnUlzdASNqv8jo_nzc2SEDcd-NV_XR5mxbE-s1Cu6VN0t7_5SqpPXn8VaAzQcnLOUws726iuJvqQTFEALVZunqXwFJypse5Oo27zNEd-L77gvWOVg6Bea_dAdDVusfn6DI0wBBfDPTw3GuAiYsUCKdGVj0RSGCCUIwerre92uJ8w1leWvLdBdLw0aPPnDpwqC5pyquxs_cuoMN8sVBuAKGXIU9RYscY-VEIdgE">
                    </div>
                    <div class="book-info">
                        <div class="book-meta">
                            <span class="book-ref">Ref: ARCH-882</span>
                            <span class="book-status">Available</span>
                        </div>
                        <h3 class="book-title">Botanical Spirits</h3>
                        <p class="book-author">by Julian Thorne</p>
                    </div>
                </div>
                
                <!-- Book Card 4 -->
                <div class="book-card-container">
                    <div class="paper-card">
                        <img alt="The Silent Archive" class="book-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkKXzqYWWArt_ozwecvp5R_ExoUwME207p0gyV7yOrIiXEEEm7BFc4dxS4cpeDvHXmcA5J1ynOPU0PEZt3y6EwKilEH_H1nIceCpKA84ExgGwAzGOyeds85WZSd13gL9LB0AaAV36nG63piNjPSrTlW0ZkFGARxzHJVsKCFrAh12kkXKivBEg35X00Kv361b_TCeVIHohl3fn1b5d23OMuhUO_T5OPt5BsUbh65s-AFP3_m_TxR18L1A4h99sTM3Y8tc5uuEptFOI">
                    </div>
                    <div class="book-info">
                        <div class="book-meta">
                            <span class="book-ref">Ref: ARCH-201</span>
                            <span class="book-status">Available</span>
                        </div>
                        <h3 class="book-title">The Silent Archive</h3>
                        <p class="book-author">by Miriam Gray</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Bento Featured Section -->
    <!-- <section class="bento-section">
        <div class="container">
            <div class="bento-grid">
    
                <div class="bento-large paper-card">
                    <img alt="Archival Process" class="bento-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb0PR5bqFtPbsdbzhcmvrrQYo7PrVNOKmTaQ6ciw-Bd80Cni3xis-DsuAQoJ4FtFZ7Si1dIhHBslyL9-nS5dELSJ5Iaaw7PPL6coYE_1trdATp7Na7FoHCTY_FRdoEpK_qT8ZGkErQE-ZMbzCyBVzBHIumtY9WUvpne5k0X2VXrJQWfFnhlXj8hfTpfLm-hm-bd8UUhQJ2UWaN0KJPoLMijxu9a4kebzfz8QN4R3jSnczcvYomxHVPFGyV5k7DuX8kDBGigYrH9to">
                    <div class="bento-content">
                        <h3 class="bento-title">Preservation is an Art of Patience</h3>
                        <p class="bento-desc">
                            Our curators spend thousands of hours ensuring every leaf of parchment is treated with historical accuracy. Learn about our meticulous restoration processes.
                        </p>
                        <button class="btn-solid">The Archival Ledger</button>
                    </div>
                </div>
   
                <div class="bento-side">
      
                    <div class="bento-mini top paper-card">
                        <div class="icon-circle">
                            <span class="material-symbols-outlined">history_edu</span>
                        </div>
                        <div>
                            <h4 class="mini-title">Membership Registry</h4>
                            <p class="mini-desc">Apply for your archival credentials.</p>
                        </div>
                    </div>
                    
        
                    <div class="bento-mini bottom paper-card">
                        <div class="icon-circle">
                            <span class="material-symbols-outlined">inventory_2</span>
                        </div>
                        <div>
                            <h4 class="mini-title">Special Collections</h4>
                            <p class="mini-desc">Restricted access manuscripts and artifacts.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> -->
  </div>
</template>

<script setup>
const handleHorizontalScroll = (evt) => {
    evt.currentTarget.scrollLeft += evt.deltaY;
};
</script>

<style scoped>
/* Scoped styles adapted from code.html */
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
    /* Break out of UserLayout padding/max-width */
    margin-top: -48px;
    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);
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
    font-size: 48px;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 56px;
    margin-bottom: 16px;
    color: var(--color-surface, #fbf9f5);
}
.hero-desc {
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 32px;
    color: var(--color-surface-variant, #f4dfdb);
    opacity: 0.9;
}

.search-form {
    display: flex;
    flex-direction: column;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
@media (min-width: 768px) { .search-form { flex-direction: row; gap: 0; } }

.search-input-wrapper {
    position: relative;
    flex-grow: 1;
}
.search-icon {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--color-primary);
}
.search-input {
    width: 100%;
    padding: 16px 16px 16px 48px;
    background-color: var(--color-surface);
    color: var(--color-primary);
    font-size: 16px;
    font-style: italic;
    transition: box-shadow 0.2s;
    border: none;
    outline: none;
}
.search-input::placeholder { color: var(--color-outline); }
.search-input:focus { box-shadow: inset 0 0 0 2px var(--color-secondary); }

.search-btn {
    background-color: var(--color-secondary);
    color: #ffffff;
    padding: 16px 32px;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: all 0.15s;
    border: none;
    cursor: pointer;
}
.search-btn:hover { background-color: var(--color-primary); }
.search-btn:active { transform: scale(0.95); }

/* Divider */
.divider-section { padding: 48px 0; }
.divider-inner {
    display: flex;
    align-items: center;
    gap: 16px;
}
.divider-line {
    height: 1px;
    background-color: rgba(131, 84, 37, 0.3);
    flex-grow: 1;
}
.divider-text {
    font-size: 14px;
    font-weight: 700;
    color: var(--color-secondary);
    text-transform: uppercase;
    letter-spacing: 0.2em;
}

/* Books Section */
.books-section { padding-bottom: 96px; }
.section-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 32px;
}
.section-title {
    font-family: var(--font-playfair);
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    color: var(--color-primary);
}
.section-subtitle {
    font-size: 16px;
    color: var(--color-on-surface-variant);
    font-style: italic;
    margin-top: 8px;
}
.view-all-link {
    font-size: 14px;
    font-weight: 700;
    color: var(--color-secondary);
    display: flex;
    align-items: center;
    gap: 8px;
    transition: color 0.2s;
}
.view-all-link:hover { color: var(--color-primary); text-decoration: underline; }
.view-all-icon { font-size: 18px; transition: transform 0.2s; }
.view-all-link:hover .view-all-icon { transform: translateX(4px); }

.horizontal-scroll {
    display: flex;
    overflow-x: auto;
    gap: var(--gutter);
    padding-bottom: 32px;
    scroll-behavior: smooth;
}
.custom-scrollbar::-webkit-scrollbar { height: 4px; }
.custom-scrollbar::-webkit-scrollbar-track { background: rgba(131, 84, 37, 0.1); }
.custom-scrollbar::-webkit-scrollbar-thumb { background: #835425; }

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
    border: 1px solid rgba(39, 19, 16, 0.1);
    box-shadow: 2px 2px 0px 0px rgba(62,39,35,0.1);
    border-radius: 12px;
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
.book-card-container:hover .book-cover { filter: grayscale(0%); }

.punched-hole {
    width: 12px; height: 12px;
    background-color: var(--color-surface);
    border-radius: 50%;
    border: 1px solid rgba(130, 116, 114, 0.3);
    position: absolute;
    bottom: 12px; left: 50%;
    transform: translateX(-50%);
}

.book-info { margin-top: 16px; }
.book-meta {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 4px;
}
.book-ref {
    background-color: var(--color-primary-container);
    color: var(--color-on-primary-container);
    font-size: 10px;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 2px;
    text-transform: uppercase;
    letter-spacing: -0.05em;
}
.book-status {
    font-size: 12px;
    font-weight: 700;
    color: var(--color-secondary);
}
.book-status.reserved { color: var(--color-error); }
.book-title {
    font-family: var(--font-playfair);
    font-size: 20px;
    font-weight: 600;
    color: var(--color-primary);
    transition: color 0.2s;
}
.book-card-container:hover .book-title { color: var(--color-secondary); }
.book-author {
    font-size: 16px;
    color: var(--color-on-surface-variant);
    font-style: italic;
}

/* Bento Section */
.bento-section {
    background-color: var(--color-surface-container);
    padding: 96px 0;
    border-top: 1px solid rgba(211, 195, 192, 0.3);
    border-bottom: 1px solid rgba(211, 195, 192, 0.3);
    /* Break out of UserLayout padding/max-width */
    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);
}
.bento-section .container {
    padding: 0 var(--margin-mobile);
}
@media (min-width: 768px) {
    .bento-section .container {
        padding: 0 var(--margin-desktop);
    }
}
.bento-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--gutter);
}
@media (min-width: 768px) {
    .bento-grid { grid-template-columns: repeat(12, 1fr); height: 600px; }
}

.bento-large {
    background-color: #ffffff;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(39, 19, 16, 0.05);
}
@media (min-width: 768px) { .bento-large { grid-column: span 7; } }

.bento-img {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    object-fit: cover;
    opacity: 0.1;
    transition: transform 1s;
}
.bento-large:hover .bento-img { transform: scale(1.05); }
.bento-content { position: relative; z-index: 10; }

.bento-title {
    font-family: var(--font-playfair);
    font-size: 32px;
    font-weight: 700;
    line-height: 1.2;
    color: var(--color-primary);
    margin-bottom: 16px;
}
.bento-desc {
    font-size: 16px;
    color: var(--color-on-surface-variant);
    max-width: 32rem;
    margin-bottom: 24px;
    line-height: 1.6;
}
.btn-solid {
    background-color: var(--color-primary);
    color: #ffffff;
    padding: 12px 24px;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: background-color 0.2s;
    display: inline-block;
    border: none;
    cursor: pointer;
}
.btn-solid:hover { background-color: var(--color-secondary); }

.bento-side {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    gap: var(--gutter);
}
@media (min-width: 768px) { .bento-side { grid-column: span 5; } }

.bento-mini {
    padding: 32px;
    display: flex;
    align-items: center;
    gap: 24px;
    border: 1px solid rgba(39, 19, 16, 0.05);
}
.bento-mini.top { background-color: var(--color-secondary-container); }
.bento-mini.bottom { background-color: var(--color-surface-container-highest); }

.icon-circle {
    width: 80px; height: 80px;
    background-color: rgba(39, 19, 16, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    flex-shrink: 0;
}
.icon-circle .material-symbols-outlined { font-size: 40px; color: var(--color-primary); }

.mini-title {
    font-family: var(--font-playfair);
    font-size: 24px;
    font-weight: 600;
    color: var(--color-primary);
    margin-bottom: 4px;
}
.mini-desc {
    font-size: 16px;
}
.bento-mini.top .mini-desc { color: var(--color-on-secondary-container); }
.bento-mini.bottom .mini-desc { color: var(--color-on-surface-variant); }
</style>
