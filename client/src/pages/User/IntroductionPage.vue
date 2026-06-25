<template>
        <div class="introduction-page">
            <!-- Hero Section -->
            <div class="hero-section">
                <div class="ornament-hr">
                    <span class="material-symbols-outlined ornament-icon">auto_stories</span>
                </div>
                <h1 class="hero-title">The Custodians of Knowledge</h1>
                <p class="hero-subtitle">Founded Anno Domini 1924</p>
            </div>

            <!-- Main Narrative -->
            <div class="narrative-grid">
                <!-- Side Metadata (Journal Style) -->
                <aside class="metadata-aside">
                    <div class="meta-block">
                        <h3 class="meta-title">ARCHIVAL REFERENCE</h3>
                        <p class="meta-text">Registry Vol. LXIV<br>Series: Institutional Histories<br>Document: 001-ALPHA</p>
                    </div>
                    <div class="meta-block">
                        <h3 class="meta-title">PRESERVATION STATUS</h3>
                        <span class="status-badge">Permanent Record</span>
                    </div>
                    <div class="quote-card library-punch">
                        <p class="quote-text">"A library is not a luxury but one of the necessities of life."</p>
                        <p class="quote-author">— Henry Ward Beecher</p>
                    </div>
                </aside>
                
                <!-- Main Journal Text -->
                <article class="journal-column">
                    <p class="drop-cap journal-text-lead">
                        In the quiet autumn of 1924, amidst the echoing halls of the Old Academic Quarter, the first entry
                        was inked into what would become the Librarian's Registry. What began as a humble ledger for a
                        private collection has evolved into a global bastion of archival integrity, preserving the
                        intellectual legacy of nearly a century of scholarship and narrative.
                    </p>
                    <p class="journal-text">
                        The Registry was founded on the principle of *Lex Scientia*—the law of knowledge. In an era where
                        information was fragile and physical, the founders recognized that a book is more than paper and
                        binding; it is a vessel for human consciousness. Their mission was simple yet profound: to create a
                        system so robust that no thought, however small, would ever be lost to the ravages of time or
                        neglect.
                    </p>
                    
                    <blockquote class="block-quote">
                        <span class="material-symbols-outlined quote-icon">format_quote</span>
                        <p class="block-quote-text">
                            "We do not merely store books; we curate the very threads of the human conversation, weaving
                            them into a tapestry that spans generations."
                        </p>
                        <cite class="block-quote-cite">— Director Emerita Eleanor Vance (1954)</cite>
                    </blockquote>
                    
                    <p class="journal-text">
                        As decades passed, the Registry adapted. It weathered the transition from handwritten cards to the
                        rhythmic clack of typewriters, and eventually, the silent hum of the digital age. Yet, through every
                        technological shift, we have maintained our "Tactile Soul." Every digital record in our system is
                        treated with the same reverence as a vellum scroll, ensuring that the *feeling* of research remains
                        intimate and focused.
                    </p>
                    
                    <div class="image-wrapper">
                        <img alt="Historic Archives" class="journal-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLjPSMLfI-MF_8c4tt5EuM4uFhNRcWOZ0jYkL8dW7q_pmp1-HhhHcYs_bLoKnEcIBXGj7fpejPDBpr_TjBGBg_N5ggEhyFezv-AP_ytixo1ba2I7gj-fSQ07nEisGp79ofCr-069ue9usnLxBZodJmIGWMZzaOQnIX5av6bQ_gxd72zWuc-ENeyBbIuMYoUaJgsf9ucFqUnTJCjA3646vE7ao6cn3yvjEAZrR7fzSA2tnTinxESrbVuvIcwEw6QyNdqmY5wTc6diU">
                    </div>
                    
                    <p class="journal-text">
                        Today, the Librarian's Registry serves as a bridge. We connect the modern researcher with the
                        scholarly discipline of the past. Our mission remains steadfast: to organize the world's wisdom with
                        the precision of an accountant and the passion of a poet. Whether you are seeking a rare manuscript
                        or cataloging a new collection, you are participating in a tradition that is one hundred years in
                        the making.
                    </p>
                    
                    <div class="end-mark">
                        <span class="material-symbols-outlined end-icon">flare</span>
                        <p class="end-text">End of Official Statement</p>
                    </div>
                </article>
            </div>

            <!-- Mission Grid -->
            <section class="mission-section">
                <h2 class="mission-title">Our Foundational Pillars</h2>
                <div class="pillars-grid">
                    <!-- Pillar 1 -->
                    <div class="pillar-card">
                        <span class="material-symbols-outlined pillar-icon">verified_user</span>
                        <h4 class="pillar-title">Permanence</h4>
                        <p class="pillar-desc">Records designed to outlast the platforms they inhabit, ensuring access for the scholars of tomorrow.</p>
                    </div>
                    <!-- Pillar 2 -->
                    <div class="pillar-card highlight">
                        <span class="material-symbols-outlined pillar-icon">balance</span>
                        <h4 class="pillar-title">Precision</h4>
                        <p class="pillar-desc">The meticulous application of cataloging rules that have defined bibliographic science since 1924.</p>
                    </div>
                    <!-- Pillar 3 -->
                    <div class="pillar-card">
                        <span class="material-symbols-outlined pillar-icon">diversity_3</span>
                        <h4 class="pillar-title">Community</h4>
                        <p class="pillar-desc">A shared global ledger of knowledge, accessible to all who seek truth and academic rigor.</p>
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
.library-punch::after {
    content: '';
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
    width: 14px;
    height: 14px;
    background: var(--color-surface-container);
    border-radius: 50%;
    border: 1px solid var(--color-outline-variant);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
}

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
.block-quote-cite {
    display: block;
    text-align: center;
    margin-top: 16px;
    font-size: 14px;
    font-weight: 700;
    color: var(--color-secondary);
    font-style: normal;
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
