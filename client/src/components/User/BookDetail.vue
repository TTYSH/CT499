<template>
    <div class="book-detail-container">
        <!-- Breadcrumbs -->
        <nav class="breadcrumbs">
            <a class="breadcrumb-link" href="#">Registry</a>
            <span class="material-symbols-outlined breadcrumb-separator">chevron_right</span>
            <span class="breadcrumb-current">The Midnight Library</span>
        </nav>

        <!-- Book Record Container -->
        <div class="book-layout">
            <!-- Left: Book Cover & Quick Actions -->
            <div class="book-sidebar">
                <div class="library-card book-cover-card">
                    <img alt="Book Cover" class="book-cover" 
                    src="/images/Sach/204_7_thoi_quen_cua_ban_tre_thanh_dat.png">
                </div>
                <div>
                    <button class="btn-primary">
                        <span class="material-symbols-outlined">shopping_cart</span>
                        Thêm vào giỏ hàng
                    </button>
                </div>
            </div>

            <!-- Right: Detailed Metadata & Synopsis -->
            <div class="library-card book-details">
                <header style="margin-bottom: 40px;">
                    <p class="record-no">mã sách: 9842-XL</p>
                    <h1 class="book-title">The Midnight Library</h1>
                    <p class="book-author">Matt Haig</p>
                </header>
                
                <div class="meta-grid">
                    <div class="meta-item">
                        <span class="meta-label">Đơn Giá</span>
                        <span class="meta-value">978-0525559474</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Năm Sản Xuất</span>
                        <span class="meta-value">2020</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Thể Loại</span>
                        <span class="meta-value">Fantasy / Phil.</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Nhà Xuất Bản</span>
                        <span class="meta-value">304 pp.</span>
                    </div>
                </div>

                <div>
                    <h3 class="synopsis-title">Tóm tắt nội dung</h3>
                    <div class="synopsis-content">
                        <p>Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices . . . Would you have done anything different, if you had the chance to undo your regrets?</p>
                        <p>A dazzling novel about all the choices that go into a life well lived, from the internationally bestselling author of Reasons to Stay Alive and How To Stop Time. Somewhere out beyond the edge of the universe there is a library that contains an infinite number of books, each one the story of another reality. One tells the story of your life as it is, along with another book for the other life you could have lived if you had made a different choice at any point in your life.</p>
                        <p>While we all wonder how our lives might have been, what if you had the chance to go to the library and see for yourself? Would any of these other lives truly be better? In The Midnight Library, Matt Haig’s enchanting blockbuster novel, Nora Seed finds herself faced with this decision.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Related Acquisitions -->
        <section class="related-section">
            <div class="related-header">
                <h2 class="related-title">Các tác phẩm liên quan</h2>
                <div class="related-divider"></div>
                <a class="view-all-link" href="#">
                    Xem Tất Cả
                    <span class="material-symbols-outlined view-all-icon">arrow_right_alt</span>
                </a>
            </div>
            <div class="related-grid">
                <!-- Related Book 1 -->
                <div class="related-item">
                    <div class="library-card related-cover-card">
                        <img alt="The Great Gatsby" class="related-cover" 
                        src="/images/Sach/204_7_thoi_quen_cua_ban_tre_thanh_dat.png">
                        <h3 class="related-book-title">The Great Gatsby</h3>
                        <p class="related-book-author">F. Scott Fitzgerald</p>
                        <p class="related-book-price">105.000đ</p>
                    </div>
                </div>
                <!-- Related Book 2 -->
                <div class="related-item">
                    <div class="library-card related-cover-card">
                        <img alt="Beyond Good &amp; Evil" class="related-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3BOvhUXQsrjfwVybmK5ztoUntpBldAIn-YIVpLc5H48-JQMzhwnB7HXyOpVg7LiwTvrDamSch5jI0WFXbI5NTBaGRzwmgnmCjhvLcsNiW_ortehel6qxQOuXCMf9_e3ZbFDt2Qk74ylaIbpGfZr5bPpMNFPjR7ks__-sTMBNIAKm7K9BvTl4w0U12AoM0jNgX-5E1g3_Ii1EdyuGGh1gDskK9XeKCE4AE1CgwX_T0_VnKeSpCrU4ZON_hxrUXQdgkLhGdGc8D7bU">
                        <h3 class="related-book-title">Beyond Good &amp; Evil</h3>
                        <p class="related-book-author">Friedrich Nietzsche</p>
                        <p class="related-book-price">105.000đ</p>
                    </div>
                </div>
                <!-- Related Book 3 -->
                <div class="related-item">
                    <div class="library-card related-cover-card">
                        <img alt="The Alchemist" class="related-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8wNVpzOfhsxC38z57wWJbepw5wkLH_4JgMuoSU6EzPztbV62ZTwb3EvyqZkHMnMzmuQWLT_Tg-VvNLc1rPhhMWMFkgWJ5WZ3rRDlJBQl0T6-IVNsWe-QiBNDdcjb3YyVdXG2ITeX2NS5D2WqZnrO6wNI49k181FSSiIkb03GIs14ihyhF8CrjrDFuTc0mt7x1XpCa8lEv68-4eiOiJ1K3Cd8aVWEPROHVLQ6vcG906d-3OVoktpcmVEvcbux9Q1Ike8L5MRL42hM">
                        <h3 class="related-book-title">The Alchemist</h3>
                        <p class="related-book-author">Paulo Coelho</p>
                        <p class="related-book-price">105.000đ</p>
                    </div>
                </div>
                <!-- Related Book 4 -->
                <div class="related-item">
                    <div class="library-card related-cover-card">
                        <img alt="The Starless Sea" class="related-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBROpJmJIXWE_yFg0iif1lyIjIHyxphCHf_LObFbjbq2ljN0cb8ddew3csd4RmUaWWGv35WBdWWeKfzr8kSH0r5durgtXP3vPJG4px5A0LETDpWOUvSNEQxSkQGLBNsVbbqTHz9lKuWXaTBVjUDL48RoUcANF4CTEmKBnPlgqR2IkZmEeB0DIeYMqVN3b2v1bB4NNFuqdeJ_-4kgT6oFdgFlxZri1R2O7ce15ja10mE7qgZmfkEOpDrcPGcAq_FL3EbL4ozdmvR3To">
                        <h3 class="related-book-title">The Alchemist</h3>
                        <p class="related-book-author">Paulo Coelho</p>
                        <p class="related-book-price">105.000đ</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
</script>

<style scoped>
.book-detail-container {
    font-family: var(--font-merriweather);
    color: var(--color-on-surface);
}

a { text-decoration: none; color: inherit; }
button { border: none; background: none; font-family: inherit; cursor: pointer; outline: none; }


.library-card {
    position: relative;
    border: 1px solid rgba(130, 116, 114, 0.2);
    box-shadow: 2px 2px 0px 0px rgba(62,39,35,0.15);
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
.breadcrumb-link { transition: color 0.2s; }
.breadcrumb-link:hover { color: var(--color-primary); }
.breadcrumb-separator { font-size: 16px; }
.breadcrumb-current { color: var(--color-primary); }

/* Book Layout */
.book-layout {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--gutter);
    align-items: start;
}
@media (min-width: 768px) {
    .book-layout { grid-template-columns: repeat(12, 1fr); }
}

/* Left Side */
.book-sidebar {
    display: flex;
    flex-direction: column;
    gap: var(--gutter);
}
@media (min-width: 768px) { .book-sidebar { grid-column: span 4; } }

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

.btn-primary {
    width: 100%;
    padding: 14px;
    background-color: var(--color-primary);
    color: var(--color-on-primary);
    border-radius: 5px;
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
}

.btn-primary:hover {
    background-color: var(--color-primary-container);
}
/* Right Side */
.book-details {
    padding: 32px;
}
@media (min-width: 768px) {
    .book-details { grid-column: span 8; padding: 48px; }
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
@media (min-width: 768px) { .book-title { font-size: 48px; line-height: 56px; } }

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
@media (min-width: 768px) { .meta-grid { grid-template-columns: repeat(4, 1fr); } }

.meta-item { display: flex; flex-direction: column; gap: 4px; }
.meta-label {
    font-size: 14px;
    font-weight: 700;
    color: var(--color-on-surface-variant);
    text-transform: uppercase;
    letter-spacing: 0.05em;
}
.meta-value { font-size: 16px; font-weight: 700; }

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
.related-section { margin-top: 90px; }
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
.related-link:hover { text-decoration: underline; }

.related-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--gutter);
}
@media (min-width: 640px) { .related-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 768px) { .related-grid { grid-template-columns: repeat(4, 1fr); } }

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
.related-item:hover .related-cover-card { transform: translateY(-4px); }
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
