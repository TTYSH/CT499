<template>
    <div class="book-detail-container container">
        <!-- Breadcrumbs -->
        <nav class="breadcrumbs">
            <a class="breadcrumb-link" href="#">Registry</a>
            <span class="material-symbols-outlined breadcrumb-separator">chevron_right</span>
            <a class="breadcrumb-link" href="#">Classic Literature</a>
            <span class="material-symbols-outlined breadcrumb-separator">chevron_right</span>
            <span class="breadcrumb-current">The Midnight Library</span>
        </nav>

        <!-- Book Record Container -->
        <div class="book-layout">
            <!-- Left: Book Cover & Quick Actions -->
            <div class="book-sidebar">
                <div class="library-card book-cover-card sticker-shadow">
                    <img alt="Book Cover" class="book-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpU7ufK_tDiQtr0MlvO2BaqlmFQHV3_AL4I_7oerHcV_QZbTuC7WnX_LfjX5BwPrGRorK3bOxkZe9-V-KoQnOO1P3YrHKy8FPbS-7UAPqgjFXNzCasRcSHDsQ0_oyr_Bk3oFw9Iv2g4I_Ms8uvHSYgj9VqPPH1MZmsPfNh0bhO6KVtwMzO_ysXOgbgrmod9B5iaTo9qy9GKdko_oRUMH8rFqa_ToPooxOVKeGDlv30Qwl0PANYtDQN8XCOqIqSKLP42ATrVDsP9yM">
                </div>
                <div>
                    <button class="btn-primary sticker-shadow">
                        <span class="material-symbols-outlined">bookmark_add</span>
                        Yêu cầu mượn
                    </button>
                </div>
                <div class="status-section">
                    <h4 class="status-title">Registry Status</h4>
                    <div class="status-row">
                        <div class="ink-stamp status-stamp">Sẵn có</div>
                        <span class="status-text">Shelf 42-B / Central Archive</span>
                    </div>
                </div>
            </div>

            <!-- Right: Detailed Metadata & Synopsis -->
            <div class="library-card book-details sticker-shadow">
                <header style="margin-bottom: 40px;">
                    <p class="record-no">Record No. 9842-XL</p>
                    <h1 class="book-title">The Midnight Library</h1>
                    <p class="book-author">by Matt Haig</p>
                </header>
                
                <div class="meta-grid">
                    <div class="meta-item">
                        <span class="meta-label">ISBN</span>
                        <span class="meta-value">978-0525559474</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Year</span>
                        <span class="meta-value">2020</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Category</span>
                        <span class="meta-value">Fantasy / Phil.</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Pages</span>
                        <span class="meta-value">304 pp.</span>
                    </div>
                </div>

                <div>
                    <h3 class="synopsis-title">Archival Synopsis</h3>
                    <div class="synopsis-content">
                        <p>Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices . . . Would you have done anything different, if you had the chance to undo your regrets?</p>
                        <p>A dazzling novel about all the choices that go into a life well lived, from the internationally bestselling author of Reasons to Stay Alive and How To Stop Time. Somewhere out beyond the edge of the universe there is a library that contains an infinite number of books, each one the story of another reality. One tells the story of your life as it is, along with another book for the other life you could have lived if you had made a different choice at any point in your life.</p>
                        <p>While we all wonder how our lives might have been, what if you had the chance to go to the library and see for yourself? Would any of these other lives truly be better? In The Midnight Library, Matt Haig’s enchanting blockbuster novel, Nora Seed finds herself faced with this decision.</p>
                    </div>
                </div>

                <div class="provenance-grid">
                    <div>
                        <h4 class="provenance-title">Publisher Details</h4>
                        <p class="provenance-text">Viking Books, New York City<br>Original Hardcover Edition<br>Language: English (UK/US)</p>
                    </div>
                    <div>
                        <h4 class="provenance-title">Donor / Acquisition</h4>
                        <p class="provenance-text">Donated by The Estate of L. Miller<br>Entered into Registry: Oct 14, 2021<br>Condition: Mint</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Related Acquisitions -->
        <section class="related-section">
            <div class="related-header">
                <h2 class="related-title">Related Acquisitions</h2>
                <div class="related-divider"></div>
                <a class="related-link" href="#">View All</a>
            </div>
            <div class="related-grid">
                <!-- Related Book 1 -->
                <div class="related-item">
                    <div class="library-card related-cover-card sticker-shadow">
                        <img alt="The Great Gatsby" class="related-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOj23gXXEn4zRFZ703lt3j4Orb3tpqDJ3f6AiTGUBZenX3WMX1-SHmUU9R4pAfYwSODDxZIV1PuVouowtDN8PLGeq2ReGBxOY_1JhKkBk-pMi1KouMU3fNaXbiTLE3rCn1s9krUpshVDQRvr86YFxXwXaLUGQNdssxSMlrvEO1UVoGJR1EhAAbtqmBYyy33MihL6bSU-U-BHn-No1jJ_s2l9ndGCVqegt909oanDs878fzoffxWH8cRxExDn42LFzizcIs_HLqKMk">
                    </div>
                    <h3 class="related-book-title">The Great Gatsby</h3>
                    <p class="related-book-author">F. Scott Fitzgerald</p>
                </div>
                <!-- Related Book 2 -->
                <div class="related-item">
                    <div class="library-card related-cover-card sticker-shadow">
                        <img alt="Beyond Good &amp; Evil" class="related-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3BOvhUXQsrjfwVybmK5ztoUntpBldAIn-YIVpLc5H48-JQMzhwnB7HXyOpVg7LiwTvrDamSch5jI0WFXbI5NTBaGRzwmgnmCjhvLcsNiW_ortehel6qxQOuXCMf9_e3ZbFDt2Qk74ylaIbpGfZr5bPpMNFPjR7ks__-sTMBNIAKm7K9BvTl4w0U12AoM0jNgX-5E1g3_Ii1EdyuGGh1gDskK9XeKCE4AE1CgwX_T0_VnKeSpCrU4ZON_hxrUXQdgkLhGdGc8D7bU">
                    </div>
                    <h3 class="related-book-title">Beyond Good &amp; Evil</h3>
                    <p class="related-book-author">Friedrich Nietzsche</p>
                </div>
                <!-- Related Book 3 -->
                <div class="related-item">
                    <div class="library-card related-cover-card sticker-shadow">
                        <img alt="The Alchemist" class="related-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8wNVpzOfhsxC38z57wWJbepw5wkLH_4JgMuoSU6EzPztbV62ZTwb3EvyqZkHMnMzmuQWLT_Tg-VvNLc1rPhhMWMFkgWJ5WZ3rRDlJBQl0T6-IVNsWe-QiBNDdcjb3YyVdXG2ITeX2NS5D2WqZnrO6wNI49k181FSSiIkb03GIs14ihyhF8CrjrDFuTc0mt7x1XpCa8lEv68-4eiOiJ1K3Cd8aVWEPROHVLQ6vcG906d-3OVoktpcmVEvcbux9Q1Ike8L5MRL42hM">
                    </div>
                    <h3 class="related-book-title">The Alchemist</h3>
                    <p class="related-book-author">Paulo Coelho</p>
                </div>
                <!-- Related Book 4 -->
                <div class="related-item">
                    <div class="library-card related-cover-card sticker-shadow">
                        <img alt="The Starless Sea" class="related-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBROpJmJIXWE_yFg0iif1lyIjIHyxphCHf_LObFbjbq2ljN0cb8ddew3csd4RmUaWWGv35WBdWWeKfzr8kSH0r5durgtXP3vPJG4px5A0LETDpWOUvSNEQxSkQGLBNsVbbqTHz9lKuWXaTBVjUDL48RoUcANF4CTEmKBnPlgqR2IkZmEeB0DIeYMqVN3b2v1bB4NNFuqdeJ_-4kgT6oFdgFlxZri1R2O7ce15ja10mE7qgZmfkEOpDrcPGcAq_FL3EbL4ozdmvR3To">
                    </div>
                    <h3 class="related-book-title">The Starless Sea</h3>
                    <p class="related-book-author">Erin Morgenstern</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
</script>

<style scoped>
.book-detail-container {
    --color-surface: #fbf9f5;
    --color-surface-bright: #ffffff;
    --color-surface-container-low: #f5f3ef;
    --color-on-surface: #1b1c1a;
    --color-on-surface-variant: #504442;
    
    --color-primary: #271310;
    --color-on-primary: #ffffff;
    --color-primary-container: #3e2723;
    
    --color-secondary: #835425;
    --color-on-secondary: #ffffff;
    
    --color-tertiary-container: #223021;
    --color-on-tertiary-container: #889885;
    
    --color-outline: #827472;
    --color-outline-variant: #d3c3c0;

    --font-playfair: 'Playfair Display', serif;
    --font-merriweather: 'Merriweather', serif;

    --max-width: 1200px;
    --gutter: 24px;

    font-family: var(--font-merriweather);
    color: var(--color-on-surface);
}

a { text-decoration: none; color: inherit; }
button { border: none; background: none; font-family: inherit; cursor: pointer; outline: none; }

.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    vertical-align: middle;
}

/* Common Styles */
.sticker-shadow {
    box-shadow: 4px 4px 0px 0px rgba(39, 19, 16, 0.2);
    transition: all 0.2s;
}
.sticker-shadow:hover {
    transform: translate(-1px, -1px);
    box-shadow: 6px 6px 0px 0px rgba(39, 19, 16, 0.3);
}
.sticker-shadow:active {
    transform: translate(2px, 2px);
    box-shadow: 1px 1px 0px 0px rgba(39, 19, 16, 0.2);
}

.library-card {
    position: relative;
    border: 1px solid rgba(39, 19, 16, 0.15);
    background: #ffffff;
}
.library-card::after {
    content: "";
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: var(--color-surface);
    border: 1px solid rgba(39, 19, 16, 0.1);
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
}

.ink-stamp {
    display: inline-block;
    padding: 2px 12px;
    border: 2px solid currentColor;
    transform: rotate(-2deg);
    font-family: var(--font-merriweather);
    font-weight: 700;
    text-transform: uppercase;
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

.book-cover-card { padding: 16px; padding-bottom: 48px; }
.book-cover {
    width: 100%;
    aspect-ratio: 3 / 4;
    object-fit: cover;
    filter: grayscale(20%) sepia(10%);
}

.btn-primary {
    width: 100%;
    padding: 16px;
    background-color: var(--color-primary);
    color: var(--color-on-primary);
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
}

.status-section {
    padding-top: 24px;
    border-top: 1px solid var(--color-outline-variant);
}
.status-title {
    font-size: 14px;
    font-weight: 700;
    color: var(--color-secondary);
    text-transform: uppercase;
    margin-bottom: 16px;
    letter-spacing: 0.05em;
}
.status-row { display: flex; align-items: center; gap: 16px; }
.status-stamp {
    color: var(--color-tertiary-container);
    font-size: 14px;
}
.status-text { font-size: 16px; color: var(--color-on-surface-variant); }

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
    font-family: var(--font-playfair);
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
    font-style: italic;
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
    font-family: var(--font-playfair);
    font-size: 24px;
    font-weight: 600;
    color: var(--color-primary);
    font-style: italic;
    margin-bottom: 16px;
}
.synopsis-content {
    font-size: 18px;
    line-height: 1.6;
    color: var(--color-on-surface);
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.provenance-grid {
    margin-top: 48px;
    padding-top: 32px;
    border-top: 1px solid var(--color-outline-variant);
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
}
@media (min-width: 768px) { .provenance-grid { grid-template-columns: repeat(2, 1fr); } }

.provenance-title {
    font-size: 14px;
    font-weight: 700;
    color: var(--color-secondary);
    text-transform: uppercase;
    margin-bottom: 12px;
    letter-spacing: 0.05em;
}
.provenance-text { font-size: 16px; color: var(--color-on-surface); line-height: 1.5; }

/* Related Acquisitions */
.related-section { margin-top: 96px; }
.related-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 32px;
}
.related-title {
    font-family: var(--font-playfair);
    font-size: 32px;
    font-weight: 700;
    color: var(--color-primary);
}
.related-divider { flex-grow: 1; height: 1px; background-color: var(--color-outline-variant); }
.related-link {
    font-size: 14px;
    font-weight: 700;
    color: var(--color-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
}
.related-link:hover { text-decoration: underline; }

.related-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--gutter);
}
@media (min-width: 640px) { .related-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 768px) { .related-grid { grid-template-columns: repeat(4, 1fr); } }

.related-item { cursor: pointer; display: flex; flex-direction: column; }
.related-cover-card {
    padding: 12px; padding-bottom: 32px;
    margin-bottom: 16px;
    transition: transform 0.2s;
}
.related-item:hover .related-cover-card { transform: translateY(-4px); }
.related-cover {
    width: 100%; aspect-ratio: 3/4; object-fit: cover;
    filter: grayscale(10%);
}
.related-book-title {
    font-size: 16px; font-weight: 700; color: var(--color-primary); margin-bottom: 4px;
}
.related-book-author {
    font-size: 12px; color: var(--color-on-surface-variant); font-style: italic;
}
</style>
