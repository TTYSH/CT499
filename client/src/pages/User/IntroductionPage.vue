<template>
        <div class="introduction-page">
            <!-- Hero Section -->
            <div class="hero-section">
                <div class="ornament-hr">
                    <span class="material-symbols-outlined ornament-icon">auto_stories</span>
                </div>
                <h1 class="hero-title">Bảo Tồn Tinh Hoa Văn Hóa</h1>

            </div>

            <!-- Main Narrative -->
            <div class="narrative-grid">
                <!-- Side Metadata (Journal Style) -->
                <aside class="metadata-aside">
                    <div class="meta-block">
                        <h3 class="meta-title">HỒ SƠ LƯU TRỮ</h3>
                        <p class="meta-text">Kỷ Yếu Thư Viện Tập I<br>Chủ đề: Lịch sử Văn hóa Việt Nam</p>
                    </div>
                    <div class="quote-card library-punch">
                        <p class="quote-text">"Sách là ngọn đèn sáng bất diệt của trí tuệ con người, soi đường cho những thế hệ mai sau."</p>
                    </div>
                </aside>
                
                <!-- Main Journal Text -->
                <article class="journal-column">
                    <p class="drop-cap journal-text-lead">
                        Ra đời vào những năm 2000, BookWSorm bắt đầu từ một bộ sưu tập nhỏ những mộc bản và thư tịch cổ quý hiếm. Từ những ngày đầu đầy gian khó, chúng tôi đã vươn lên trở thành một biểu tượng của sự kiên trì bảo tồn di sản văn hóa và trí tuệ của dân tộc Việt Nam qua nhiều thế hệ.
                    </p>
                    <p class="journal-text">
                        Thư viện được xây dựng trên niềm tin rằng mỗi trang sách, mỗi nét chữ không chỉ là nơi lưu giữ thông tin, mà còn là linh hồn và nhịp đập của lịch sử. Sứ mệnh của chúng tôi rất rõ ràng: gìn giữ mọi luồng tư tưởng, mọi giá trị văn học nghệ thuật từ ca dao tục ngữ, thi ca cổ điển cho đến những công trình nghiên cứu hiện đại, để không một thành tựu nào bị mai một bởi thời gian.
                    </p>
                    
                    <blockquote class="block-quote">
                        <span class="material-symbols-outlined quote-icon">format_quote</span>
                        <p class="block-quote-text">
                            "Chúng tôi không chỉ xếp những cuốn sách lên kệ; chúng tôi nâng niu những mảnh ghép của hồn cốt dân tộc, dệt nên một bức tranh toàn cảnh về quá trình phát triển của văn hóa Việt Nam."
                        </p>
                    </blockquote>
                    
                    <p class="journal-text">
                        Cùng với sự phát triển của đất nước, BookWorm cũng không ngừng đổi mới. Từ những bản sao chép tay trên giấy dó, đến những danh mục thẻ phân loại, và nay là hệ thống lưu trữ kỹ thuật số hiện đại. Dù công nghệ có thay đổi, chúng tôi vẫn giữ nguyên sự trân trọng đối với từng con chữ, đảm bảo rằng mỗi độc giả khi đến đây đều cảm nhận được không gian học thuật sâu lắng và tinh thần hiếu học truyền thống của người Việt.
                    </p>
              
                </article>
            </div>

            <!-- Mission Grid -->
            <section class="mission-section">
               
            </section>
            <section class="footer-quote-section">
        <div class="footer-quote-container">
            <h2 class="footer-quote-title">Literary Reflections</h2>
            <div class="footer-quotes">
                <div class="quote-item">
                    <p class="quote-text">“Sách là kho tàng trí tuệ của nhân loại, là chìa khóa mở ra cánh cửa tri thức.”</p>
                    <div class="quote-divider"></div>
                </div>
                <div class="quote-item">
                    <p class="quote-text">“Việc đọc rất quan trọng. Nếu bạn biết cách đọc, cả thế giới sẽ mở ra cho bạn.”</p>
                    <div class="quote-divider"></div>
                </div>
                <div class="quote-item">
                    <p class="quote-text">“Một cuốn sách hay trên giá là một người bạn dù quay lưng lại vẫn là người bạn tốt.”</p>
                </div>
            </div>
        </div>
    </section>
        </div>
</template>


<style scoped>
/* Hero Section */
.hero-section { text-align: center; margin-bottom: 64px; }

.ornament-hr {
    display: flex;
    align-items: center;
    text-align: center;
    margin-bottom: 32px;
}
.ornament-hr::before, .ornament-hr::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid var(--color-outline);
    opacity: 0.3;
}
.ornament-hr:not(:empty)::before { margin-right: 24px; }
.ornament-hr:not(:empty)::after { margin-left: 24px; }
.ornament-icon { transform: scale(1.5); color: var(--color-secondary); }

.hero-title {
    font-family: var(--font-playfair);
    font-size: 48px;
    font-weight: 700;
    color: var(--color-primary);
    letter-spacing: -0.02em;
    margin-bottom: 16px;
    line-height: 1.1;
}
.hero-subtitle {
    font-size: 14px;
    font-weight: 700;
    color: var(--color-secondary);
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

/* Narrative Layout */
.narrative-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--gutter);
    align-items: start;
}
@media (min-width: 1024px) { .narrative-grid { grid-template-columns: repeat(12, 1fr); } }

/* Aside Metadata */
.metadata-aside {
    display: none;
    border-right: 1px solid rgba(211, 195, 192, 0.3);
    padding-right: var(--gutter);
}
@media (min-width: 1024px) {
    .metadata-aside { display: block; grid-column: span 3; }
}

.meta-block { margin-bottom: 48px; }
.meta-title {
    font-size: 14px;
    font-weight: 700;
    color: var(--color-primary);
    margin-bottom: 8px;
    letter-spacing: 0.05em;
}
.meta-text {
    font-size: 12px;
    color: var(--color-on-surface-variant);
    line-height: 1.5;
}

.status-badge {
    display: inline-block;
    padding: 4px 12px;
    background-color: rgba(136, 152, 133, 0.2); /* on-tertiary-container / 20 */
    color: var(--tertiary-container);
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    border: 1px solid rgba(34, 48, 33, 0.3);
    border-radius: 2px;
    letter-spacing: 0.05em;
}

.quote-card {
    padding: 24px;
    background-color: var(--color-surface-container-low);
    border: 1px solid rgba(211, 195, 192, 0.5);
    box-shadow: 4px 4px 0px 0px rgba(39, 19, 16, 0.1);
}
.quote-text {
    font-size: 12px;
    font-style: italic;
    color: var(--color-secondary);
    margin-bottom: 16px;
    text-align: center;
}
.quote-author {
    font-size: 14px;
    font-weight: 700;
    color: var(--color-primary);
    text-align: center;
}

.library-punch { position: relative; }

/* Journal Column */
.journal-column { grid-column: span 1; }
@media (min-width: 1024px) {
    .journal-column {
        grid-column: span 9;
        column-count: 2;
        column-gap: 48px;
        column-rule: 1px solid var(--color-outline-variant);
    }
}

.drop-cap::first-letter {
    float: left;
    font-family: var(--font-playfair);
    font-size: 72px;
    line-height: 1;
    padding-right: 8px;
    padding-top: 4px;
    color: var(--color-primary);
    font-weight: 700;
}

.journal-text-lead {
    font-size: 18px;
    color: var(--color-on-surface);
    line-height: 1.6;
    margin-bottom: 24px;
}

.journal-text {
    font-size: 16px;
    color: var(--color-on-surface-variant);
    margin-bottom: 24px;
    line-height: 1.5;
}

.block-quote {
    margin: 40px 0;
    padding: 32px;
    border-top: 1px solid rgba(211, 195, 192, 0.5);
    border-bottom: 1px solid rgba(211, 195, 192, 0.5);
    position: relative;
    break-inside: avoid;
}
.quote-icon {
    position: absolute;
    top: -16px;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--color-surface);
    padding: 0 16px;
    color: var(--color-secondary);
}
.block-quote-text {
    font-family: var(--font-playfair);
    font-size: 24px;
    font-style: italic;
    color: var(--color-primary);
    text-align: center;
    font-weight: 600;
    line-height: 1.4;
}


.image-wrapper {
    margin: 32px 0;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid rgba(211, 195, 192, 0.3);
    box-shadow: 4px 4px 0px 0px rgba(39, 19, 16, 0.1);
    break-inside: avoid;
}
.journal-img {
    width: 100%;
    height: 256px;
    object-fit: cover;
    opacity: 0.9;
    filter: grayscale(30%);
    transition: filter 0.7s;
}
.journal-img:hover { filter: grayscale(0%); }

.end-mark {
    margin-top: 48px;
    padding-top: 32px;
    border-top: 1px solid rgba(211, 195, 192, 0.3);
    text-align: center;
    column-span: all;
}
.end-icon { color: var(--color-outline-variant); }
.end-text {
    font-size: 12px;
    font-style: italic;
    color: var(--color-outline);
    margin-top: 8px;
}

/* Mission Grid */
.mission-section {
    margin-top: 96px;
    border-top: 1px solid rgba(211, 195, 192, 0.3);
    padding-top: 64px;
}
.mission-title {
    font-family: var(--font-playfair);
    font-size: 32px;
    font-weight: 700;
    color: var(--color-primary);
    text-align: center;
    margin-bottom: 48px;
    font-style: italic;
}

.pillars-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
}


/* Footer Quotes */
.footer-quote-section {
    /* background-color: var(--color-surface-container); */
    padding: 96px 0;
    border-top: 1px solid var(--color-outline-variant);
}
.footer-quote-container {
    max-width: var(--max-width, 1200px);
    margin: 0 auto;
    padding: 0 var(--margin-mobile);
    text-align: center;
}
@media (min-width: 768px) {
    .footer-quote-container {
        padding: 0 var(--margin-desktop);
    }
}
.footer-quote-title {
    font-family: var(--font-playfair);
    font-size: 32px;
    color: var(--color-primary);
    margin-bottom: 48px;
    letter-spacing: -0.02em;
}
.footer-quotes {
    display: flex;
    flex-direction: column;
    gap: 64px;
}
.quote-item {
    max-width: 42rem;
    margin: 0 auto;
}
.quote-text {
    font-family: var(--font-playfair);
    font-size: 24px;
    font-style: italic;
    color: var(--color-primary);
    line-height: 1.6;
}
.quote-divider {
    width: 48px;
    height: 1px;
    background-color: var(--color-outline-variant);
    margin: 24px auto 0;
}

@media (min-width: 768px) { .pillars-grid { grid-template-columns: repeat(3, 1fr); } }

.pillar-card {
    padding: 32px;
    background-color: var(--color-surface-container-low);
    border: 1px solid rgba(211, 195, 192, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: transform 0.3s, border-color 0.3s;
}
.pillar-card:hover { transform: translateY(-4px); border-color: rgba(131, 84, 37, 0.4); }

.pillar-card.highlight {
    background-color: var(--color-surface-container);
    border: 2px solid rgba(62, 39, 35, 0.1);
    box-shadow: 4px 4px 0px 0px rgba(39, 19, 16, 0.1);
}

.pillar-icon { font-size: 36px; color: var(--color-secondary); margin-bottom: 16px; }
.pillar-title {
    font-family: var(--font-playfair);
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 8px;
    color: var(--color-on-surface);
}
.pillar-desc { font-size: 16px; color: var(--color-on-surface-variant); line-height: 1.5; }
</style>
