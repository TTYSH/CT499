<template>
    <footer class="site-footer">
        <div class="footer-container">
            <div class="footer-brand-section">
                <div class="footer-brand">
                    <span class="material-symbols-outlined" style="color: var(--color-secondary);">menu_book</span>
                    BookWorm
                </div>
                <div class="footer-desc">Mỗi cuốn sách là một cánh cửa mở ra những miền ký ức và tri thức.
                    Đăng ký mượn sách trực tuyến thật dễ dàng, nhanh chóng và tiện lợi.
                    Bắt đầu hành trình đọc của bạn ngay hôm nay để mỗi trang sách
                    trở thành một hành trình đáng nhớ.
                </div>
            </div>
            
            <div class="footer-center-section">
                <div class="footer-center-content">
                    <h2 class="footer-center-title">Danh mục</h2>
                    <ul>
                        <li><RouterLink exact-active-class="active" to="/">Trang chủ</RouterLink></li>
                        <li><RouterLink active-class="active" to="/collection">Tủ Sách</RouterLink></li>
                        <li><RouterLink active-class="active" to="/contact">Liên hệ</RouterLink></li>
                        <li><RouterLink active-class="active" to="/account">Tài khoản</RouterLink></li>
                    </ul>
                </div>
                <div class="footer-center-content">
                    <h2 class="footer-center-title">Chính sách</h2>
                    <ul>
                        <li>Chính sách bảo mật</li>
                        <li>Điều khoản sử dụng</li>
                        <li>Chính sách mượn trả</li>
                    </ul>
                </div>
            </div>

            <div class="footer-contact-section">
                <a class="contact-item" title="Gửi Email">
                    <span class="material-symbols-outlined">mail</span>
                    <span>bookworm@gmail.com</span>
                </a>
                <a href="https://github.com/minhthu2404/BookWorm" target="_blank" class="contact-item" title="GitHub">
                    <span class="material-symbols-outlined">phone_enabled</span>
                    <span>(0292) 3453467</span>
                </a>
                <div class="contact-item">
                    <span class="material-symbols-outlined">location_on</span>
                    <span>Khu II, Đại học Cần Thơ, Đường 3/2, Ninh Kiều, Cần Thơ</span>
                </div>
                <div class="contact-item">
                    <span>© 2026 BookWorm. All Rights Reserved.</span>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
/* Footer */
.site-footer {
    background-color: var(--color-surface-container);
    border-top: 1px solid rgba(211, 195, 192, 0.3);
}
.footer-container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 20px var(--margin-mobile);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
}
@media (min-width: 768px) {
    .footer-container {
        flex-direction: row;
        padding: 30px var(--margin-desktop);
        gap: 6rem;
    }
}

/* Brand Section (Left) */
.footer-brand-section { 
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center; 
    flex: 1;
}
@media (min-width: 768px) { 
    .footer-brand-section { 
        text-align: left; 
    } 
}
.footer-brand {
    font-family: var(--font-playfair);
    font-size: 24px;
    font-weight: 600;
    color: var(--color-primary);
    font-style: italic;
    letter-spacing: -0.02em;
    display: flex;
    align-items: center;
    gap: 8px;
}
.footer-desc { 
    font-size: 15px; 
    color: var(--color-on-surface-variant); 
}

/* Center Section */
.footer-center-section {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex: 1;
    gap: 3rem;
}

.footer-center-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.footer-center-title {
    font-size: 18px;
    color: var(--color-secondary);
}

.footer-center-content>ul>li {
    list-style-type: none;
    text-align: center;
    font-size: 14px;
    line-height: 2rem;
    color: var(--color-on-surface-variant);
    cursor: pointer;
}

.footer-center-content>ul>li:hover {
    color: var(--color-secondary);
    text-decoration: underline;
}

/* Contact Section (Right) */
.footer-contact-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    flex: 1;
}
@media (min-width: 768px) {
    .footer-contact-section {
        align-items: flex-start;
    }
}
.contact-item {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    font-weight: 500;
    color: var(--color-on-surface-variant);
    text-decoration: none;
    transition: color 0.2s, transform 0.2s;
}

.material-symbols-outlined {
    font-size: 24px;
}
</style>
