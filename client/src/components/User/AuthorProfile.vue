<template>
    <div class="author-profile">
        <div style="margin-bottom: 32px;">
            <button @click="$emit('back')" class="back-btn">
                <span class="material-symbols-outlined">arrow_back</span>
            </button>
        </div>

        <!-- Header Section: Prestigious Profile -->
        <section class="profile-section">
            <div class="profile-grid">
                <!-- Left Column: Portrait -->
                <div class="portrait-wrapper">
                    <div class="portrait-frame">
                        <img alt="Friedrich Nietzsche" class="portrait-img" src="/images/TacGia/10_charles_duhigg.png"> 
                    </div>
                </div>
                
                <!-- Right Column: Biography -->
                <div class="bio-wrapper">
                    <div class="bio-header">
                        <h1 class="profile-name">Friedrich Nietzsche</h1>
                        <div class="divider"></div>
                    </div>
                    <div class="bio-content">
                        <strong>Friedrich Wilhelm Nietzsche</strong> là một triết gia, nhà phê bình văn hóa, nhà soạn nhạc, nhà thơ, học
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
                <h2 class="collection-title">Các tác phẩm tiêu biểu</h2>
            </div>
            
            <div class="books-grid">
                <!-- Card 1 -->
                <div class="book-card">
                    <div class="book-cover-wrapper">
                        <img alt="Zarathustra đã nói như thế" class="book-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUYXbwXEw9hb0CTm0HKyFpciCl53mGOqDxHJ29xlak27WcMFPRD2GNhHl5SdHQESOSKLz3NqAT7vpGyj_j5OJURYFM_VOFX9dGtB2O5gdu4368XNvR45XQzgytctAZCGfYtGQz4BwFgwHMMrBmg1ZHLCKvHq8rUwiId3tXNwbUGWBXTXTOtpwh49z52vd745bK0uUTonNQJ2-1mXvaVkovzKD6lfdbRpRm8hQl1mIC7v9OvxLWIHn0NbEcXjYMI9bqpW76i7zOqWk">
                    </div>
                    <div class="book-info">
                        <h3 class="book-title">Zarathustra đã nói như thế</h3>
                        <p class="book-price">105.000đ</p>
                        <button class="add-btn" @click="handleRequest">Thêm vào giỏ hàng</button>
                    </div>
                </div>
                
                <!-- Card 2 -->
                <div class="book-card">
                    <div class="book-cover-wrapper">
                        <img alt="Bên kia thiện ác" class="book-cover borrowed" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhGR05EHrSNsElpiyMgdEnJFuDU_S3Bg2T6S6GI20fZxRwzRooHlLpYwHZSFGcUYa9yyB7_cR--9jxn7sUjII5mtX8UZtBn8beg6WFu3O57pfls_IbMxGFn27WxZI5jKq2-xjUdA0ekNyMB1IJzGqY33S1bYLF-PaCkSOCeUQatMq3g_vxFeGmRq7234JoYIqFoLzSpP0Hb0KKAJcsURVLlHLNid65wu5JzJyCC7UjKP00kq7XN-wIj5eA6C_6cNdk3dSIhQG1ZPA">
                    </div>
                    <div class="book-info">
                        <h3 class="book-title">Bên kia thiện ác</h3>
                        <p class="book-price">105.000đ</p>
                        <button class="add-btn" @click="handleRequest">Thêm vào giỏ hàng</button>
                    </div>
                </div>
                
                <!-- Card 3 -->
                <div class="book-card">
                    <div class="book-cover-wrapper">
                        <img alt="Phả hệ đạo đức" class="book-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAglrhRzyq9yU4JxDKNHV02Qsmv4bvXyjXlk2K1m7hFddESlgfKem6avHlb8oWP_JWq2FHaa3I9FBOANqEjkFP4FwO-0_tkYosmndKqp7lB6Bw_y8c68_m8v33epK5-2NA2mt27z9xls4nMuwdFH57OqGGoOvXHXCkYnjEC-6TKSCwS6yKiy1mY_gbk-umT8WL4ly1CO0w5DJ_6l-pU0zJd4GTn3pVdsxfhs5B_Ld68VPY13B8h0xzDqkptxUplskQ5a3PvCaF6Ym8">
                    </div>
                    <div class="book-info">
                        <h3 class="book-title">Phả hệ đạo đức</h3>
                        <p class="book-price">105.000đ</p>
                        <button class="add-btn" @click="handleRequest">Thêm vào giỏ hàng</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
defineEmits(['back'])

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
.back-btn {
    color: var(--color-on-surface-variant);
    font-size: 20px;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 20px;
    transition: all 0.2s;
}
.back-btn:hover {
    transform: translateY(-2px) scale(1.02); 
}

.profile-section {
    margin-bottom: 64px;
    padding-bottom: 48px;
    border-bottom: 1px solid rgba(130, 116, 114, 0.1);
}

.profile-grid {
    display: flex;
    flex-direction: column;
    gap: 48px;
    width: 100%;
}
@media (min-width: 768px) {
    .profile-grid {
        display: grid;
        grid-template-columns: minmax(240px, 1fr) 2fr;
        gap: 30px;
        align-items: flex-start;
    }
}

/* Portrait */
.portrait-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}
@media (min-width: 768px) { 
    .portrait-wrapper { 
        justify-content: flex-end; 
    } 
}

.portrait-frame {
    width: 300px; 
    height: 300px;
    border-radius: 2px;
    overflow: hidden;
    border: 8px solid var(--color-surface-container-low, #f5f3ef);
    box-shadow: 0 4px 24px rgba(39, 19, 16, 0.12), 0 0 0 1px rgba(39, 19, 16, 0.05);
    background-color: var(--color-surface-container-low, #f5f3ef);
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
}
@media (min-width: 768px) {
    .portrait-frame { width: 500px; height: 400px; }
}
/* .portrait-frame:hover { 
    
} */

.portrait-img {
    width: 100%; height: 100%;
    object-fit: cover;
    border-radius: 2px;
    filter: grayscale(80%) sepia(20%) contrast(110%);
    transition: filter 0.5s ease;
}

/* Biography Header */
.bio-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 24px;
}
@media (min-width: 768px) {
    .bio-header {
        align-items: flex-start;
        margin-bottom: 32px;
    }
}

.profile-name {
    font-family: var(--font-merriweather);
    font-size: 40px;
    font-weight: 700;
    color: var(--color-primary);
    line-height: 1.1;
    text-align: center;
    letter-spacing: -0.01em;
    margin-bottom: 16px;
}
@media (min-width: 768px) { 
    .profile-name { 
        font-size: 40px;
        text-align: left; 
    } 
}

.divider {
    width: 100%;
    height: 4px;
    background-color: var(--color-secondary);
    border-radius: 2px;
}

/* Biography Content */
.bio-wrapper {
    display: flex;
    flex-direction: column;
}

.bio-content {
    font-size: 16px;
    color: var(--color-on-surface);
    line-height: 1.8;
    text-align: justify;
    padding: 0 16px;
    position: relative;
}
@media (min-width: 768px) {
    .bio-content {
        font-size: 17px;
        padding: 0;
    }
}

/* Collection Section */
.collection-section { 
    margin-bottom: 80px; 
}

.collection-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(39, 19, 16, 0.2);
    padding-bottom: 10px;
}
.collection-title {
    font-family: var(--font-playfair);
    font-size: 30px;
    font-weight: 700;
    color: var(--color-primary);
}

/* Book Card */
.books-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--gutter, 24px);
}

@media (min-width: 768px) { .books-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .books-grid { grid-template-columns: repeat(3, 1fr); } }

.book-card {
    background-color: #f5f3ef;
    border: 1px solid rgba(130, 116, 114, 0.2);
    border-radius: 5px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    box-shadow: 2px 2px 0px 0px rgba(62,39,35,0.15);
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
    width: 100%; 
    height: 100%;
    object-fit: cover;
}
.book-cover.borrowed {
    filter: grayscale(100%);
    opacity: 0.8;
}

.book-info { 
    flex-grow: 1; 
    display: flex; 
    flex-direction: column; 
    gap: 8px; 
}
.book-title {
    font-family: var(--font-merriweather);
    font-size: 22px;
    font-weight: 600;
    color: var(--color-primary);
    line-height: 1.3;
    min-height: 64px;
}
.book-title:hover {
    color: var(--color-secondary);
}
.book-price {
    width: 6rem;
    font-size: 16px;
    padding: 2px;
    border-radius: 8px;
    background-color: var(--color-error-container);
    color: crimson;
    text-align: center;
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
</style>
