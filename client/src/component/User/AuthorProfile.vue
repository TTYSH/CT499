<template>
    <div class="author-profile">
        <div style="margin-bottom: 32px;">
            <button @click="$emit('back')" class="back-btn">
                <span class="material-symbols-outlined">arrow_back</span>
                Quay lại thư viện
            </button>
        </div>

        <!-- Header Section: Prestigious Profile -->
        <section class="profile-section">
            <div class="profile-grid">
                <!-- Left Column: Portrait and Name -->
                <div class="portrait-wrapper">
                    <div class="portrait-frame">
                        <img alt="Friedrich Nietzsche" class="portrait-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlH7uZOQWfxoGJzxMjaCg2ZFk-7pVIihAtJUnxQdnnOcOnF12aR6F3eWwLTYMQicmpIm64ulkEsF0JLVDFq8N4iQCF4ydD5xw60SymN2HRPLFsdRleo0xM0Azmf_KmApNvpH9pBSlQWyiwK3p-g8aWuPSYf6pebvB7MIBHdwV3HZ4ODLas0opPRp1gfit1Tfwgz7QCfxBfiM2TW3-qG7stMLYOMCqOtdXABff06ZoRYgbNd1vtdhV9W2sMM2g0__FRXtKvAgHkZhM">
                    </div>
                    <h1 class="profile-name">Friedrich Nietzsche</h1>
                </div>
                
                <!-- Right Column: Biography -->
                <div class="bio-wrapper">
                    <div class="bio-header">
                        <h2 class="bio-title">Mô tả</h2>
                        <div class="bio-divider"></div>
                    </div>
                    <div class="bio-content ledger-line">
                        Friedrich Wilhelm Nietzsche là một triết gia, nhà phê bình văn hóa, nhà soạn nhạc, nhà thơ, học
                        giả ngữ văn người Đức. Tác phẩm của ông mang tính đột phá, thách thức các nền tảng tôn giáo, đạo
                        đức truyền thống và triết học đương thời. Nietzsche nổi tiếng với các khái niệm "Siêu nhân"
                        (Übermensch), "Ý chí hùng lực" (Will to Power) và tuyên bố gây tranh cãi "Thượng đế đã chết". Di
                        sản của ông để lại là một kho tàng tri thức đồ sộ, ảnh hưởng sâu sắc đến triết học hiện đại, tâm
                        lý học và nghệ thuật thế kỷ 20. Librarian's Registry vinh dự lưu trữ các bản dịch hiếm nhất của
                        ông để phục vụ giới học thuật.
                    </div>
                </div>
            </div>
        </section>

        <!-- Book List Section -->
        <section class="collection-section">
            <div class="collection-header">
                <h2 class="collection-title">Tác phẩm hiện có</h2>
                <span class="collection-count">3 ĐẦU SÁCH LƯU TRỮ</span>
            </div>
            
            <div class="books-grid">
                <!-- Card 1 -->
                <div class="book-card">
                    <div class="book-cover-wrapper">
                        <img alt="Zarathustra đã nói như thế" class="book-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUYXbwXEw9hb0CTm0HKyFpciCl53mGOqDxHJ29xlak27WcMFPRD2GNhHl5SdHQESOSKLz3NqAT7vpGyj_j5OJURYFM_VOFX9dGtB2O5gdu4368XNvR45XQzgytctAZCGfYtGQz4BwFgwHMMrBmg1ZHLCKvHq8rUwiId3tXNwbUGWBXTXTOtpwh49z52vd745bK0uUTonNQJ2-1mXvaVkovzKD6lfdbRpRm8hQl1mIC7v9OvxLWIHn0NbEcXjYMI9bqpW76i7zOqWk">
                        <span class="status-badge available">Sẵn có</span>
                    </div>
                    <div class="book-info">
                        <h3 class="book-title">Zarathustra đã nói như thế</h3>
                        <p class="book-id">Mã số: ARCH-ZN-1883</p>
                    </div>
                    <div class="book-actions">
                        <button class="btn-action primary">Yêu cầu mượn</button>
                        <div class="card-ornament"><div class="card-ornament-inner"></div></div>
                    </div>
                </div>
                
                <!-- Card 2 -->
                <div class="book-card">
                    <div class="book-cover-wrapper">
                        <img alt="Bên kia thiện ác" class="book-cover borrowed" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhGR05EHrSNsElpiyMgdEnJFuDU_S3Bg2T6S6GI20fZxRwzRooHlLpYwHZSFGcUYa9yyB7_cR--9jxn7sUjII5mtX8UZtBn8beg6WFu3O57pfls_IbMxGFn27WxZI5jKq2-xjUdA0ekNyMB1IJzGqY33S1bYLF-PaCkSOCeUQatMq3g_vxFeGmRq7234JoYIqFoLzSpP0Hb0KKAJcsURVLlHLNid65wu5JzJyCC7UjKP00kq7XN-wIj5eA6C_6cNdk3dSIhQG1ZPA">
                        <span class="status-badge borrowed">Đang mượn</span>
                    </div>
                    <div class="book-info">
                        <h3 class="book-title">Bên kia thiện ác</h3>
                        <p class="book-id">Mã số: ARCH-ZN-1886</p>
                    </div>
                    <div class="book-actions">
                        <button class="btn-action disabled" disabled>Hết lượt</button>
                        <div class="card-ornament"><div class="card-ornament-inner"></div></div>
                    </div>
                </div>
                
                <!-- Card 3 -->
                <div class="book-card">
                    <div class="book-cover-wrapper">
                        <img alt="Phả hệ đạo đức" class="book-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAglrhRzyq9yU4JxDKNHV02Qsmv4bvXyjXlk2K1m7hFddESlgfKem6avHlb8oWP_JWq2FHaa3I9FBOANqEjkFP4FwO-0_tkYosmndKqp7lB6Bw_y8c68_m8v33epK5-2NA2mt27z9xls4nMuwdFH57OqGGoOvXHXCkYnjEC-6TKSCwS6yKiy1mY_gbk-umT8WL4ly1CO0w5DJ_6l-pU0zJd4GTn3pVdsxfhs5B_Ld68VPY13B8h0xzDqkptxUplskQ5a3PvCaF6Ym8">
                        <span class="status-badge available">Sẵn có</span>
                    </div>
                    <div class="book-info">
                        <h3 class="book-title">Phả hệ đạo đức</h3>
                        <p class="book-id">Mã số: ARCH-ZN-1887</p>
                    </div>
                    <div class="book-actions">
                        <button class="btn-action primary">Yêu cầu mượn</button>
                        <div class="card-ornament"><div class="card-ornament-inner"></div></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
defineEmits(['back'])
</script>

<style scoped>
.back-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--color-on-surface-variant);
    background: none;
    border: none;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    padding: 8px 16px;
    border-radius: 20px;
    transition: all 0.2s;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}
.back-btn:hover {
    background-color: rgba(131, 84, 37, 0.1);
    color: var(--color-secondary);
}

.profile-section {
    display: flex;
    flex-direction: column;
    gap: 48px;
    margin-bottom: 64px;
    padding-bottom: 48px;
    border-bottom: 1px solid rgba(130, 116, 114, 0.1);
}
@media (min-width: 768px) {
    .profile-section {
        flex-direction: row;
        align-items: flex-end;
    }
}

.profile-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 48px;
    width: 100%;
}
@media (min-width: 768px) {
    .profile-grid {
        grid-template-columns: auto 1fr;
        align-items: flex-start;
    }
}

/* Portrait */
.portrait-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
}
@media (min-width: 768px) { .portrait-wrapper { align-items: flex-start; } }

.portrait-frame {
    width: 192px; height: 192px;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid rgba(39, 19, 16, 0.1);
    padding: 8px;
    background-color: var(--color-surface-container-low);
    box-shadow: 4px 4px 0px 0px rgba(39, 19, 16, 0.15);
    transition: transform 0.3s;
    position: relative;
}
@media (min-width: 768px) {
    .portrait-frame { width: 256px; height: 256px; }
}
.portrait-frame:hover { transform: scale(1.02); }

.portrait-img {
    width: 100%; height: 100%;
    object-fit: cover;
    border-radius: 50%;
    filter: grayscale(100%) sepia(20%);
}

.profile-name {
    font-family: var(--font-playfair);
    font-size: 48px;
    font-weight: 700;
    color: var(--color-primary);
    line-height: 1.1;
    text-align: center;
    letter-spacing: -0.02em;
}
@media (min-width: 768px) { .profile-name { text-align: left; } }

/* Biography */
.bio-wrapper {
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.bio-header {
    display: flex;
    align-items: center;
    gap: 16px;
}
.bio-title {
    font-family: var(--font-playfair);
    font-size: 24px;
    font-weight: 600;
    color: var(--color-primary);
    white-space: nowrap;
}
.bio-divider {
    height: 1px;
    width: 100%;
    background-color: rgba(130, 116, 114, 0.2);
}

.ledger-line {
    background-image: linear-gradient(to bottom, transparent 95%, rgba(131, 84, 37, 0.2) 95%);
    background-size: 100% 32px;
}

.bio-content {
    font-size: 18px;
    color: var(--color-on-surface-variant);
    line-height: 32px;
    text-align: justify;
    padding-bottom: 16px;
}

.bio-content::first-letter {
    font-family: var(--font-playfair);
    font-size: 48px;
    color: var(--color-primary);
    float: left;
    margin-right: 12px;
    margin-top: 8px;
    line-height: 1;
    font-weight: 700;
}

/* Collection Section */
.collection-section { margin-bottom: 80px; }

.collection-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 40px;
    border-bottom: 1px solid rgba(39, 19, 16, 0.2);
    padding-bottom: 16px;
}
.collection-title {
    font-family: var(--font-playfair);
    font-size: 32px;
    font-weight: 700;
    color: var(--color-primary);
    font-style: italic;
}
.collection-count {
    font-size: 14px;
    font-weight: 700;
    color: var(--color-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.books-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--gutter, 24px);
}
@media (min-width: 768px) { .books-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .books-grid { grid-template-columns: repeat(3, 1fr); } }

/* Book Card */
.book-card {
    background-color: #f5f3ef;
    border: 1px solid rgba(130, 116, 114, 0.2);
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    box-shadow: 4px 4px 0px 0px rgba(39, 19, 16, 0.15);
    transition: transform 0.3s;
    position: relative;
}
.book-card:hover { transform: translateY(-4px); }

.book-cover-wrapper {
    aspect-ratio: 3 / 5;
    width: 100%;
    background-color: #efeeea;
    border: 1px solid rgba(130, 116, 114, 0.3);
    position: relative;
    overflow: hidden;
}
.book-cover {
    width: 100%; height: 100%;
    object-fit: cover;
}
.book-cover.borrowed {
    filter: grayscale(100%);
    opacity: 0.8;
}

.status-badge {
    position: absolute;
    top: 8px; right: 8px;
    padding: 4px 12px;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    box-shadow: 4px 4px 0px 0px rgba(39, 19, 16, 0.15);
}
.status-badge.available {
    background-color: #223021;
    color: #889885;
}
.status-badge.borrowed {
    background-color: #ffdad6;
    color: #93000a;
}

.book-info { flex-grow: 1; display: flex; flex-direction: column; gap: 8px; }
.book-title {
    font-family: var(--font-playfair);
    font-size: 24px;
    font-weight: 600;
    color: var(--color-primary);
    line-height: 1.3;
    min-height: 64px;
}
.book-id {
    font-size: 12px;
    color: var(--color-on-surface-variant);
    font-style: italic;
}

.book-actions {
    padding-top: 16px;
    border-top: 1px solid rgba(130, 116, 114, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.btn-action {
    padding: 8px 24px;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: all 0.2s;
    border: none;
    cursor: pointer;
}
.btn-action.primary {
    background-color: var(--color-secondary);
    color: var(--color-on-secondary);
    box-shadow: 4px 4px 0px 0px rgba(39, 19, 16, 0.15);
}
.btn-action.primary:hover { transform: translateY(-1px); }
.btn-action.primary:active { transform: translate(2px, 2px); box-shadow: none; }

.btn-action.disabled {
    background-color: rgba(39, 19, 16, 0.1);
    color: rgba(39, 19, 16, 0.4);
    border: 1px solid rgba(130, 116, 114, 0.1);
    cursor: not-allowed;
    box-shadow: none;
}

.card-ornament {
    width: 32px; height: 32px;
    border-radius: 50%;
    border: 1px solid rgba(39, 19, 16, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
}
.card-ornament-inner {
    width: 8px; height: 8px;
    border-radius: 50%;
    background-color: rgba(39, 19, 16, 0.2);
}
</style>
