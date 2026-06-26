<template>
    <footer class="site-footer">
        <div class="footer-container">
            <div class="footer-info">
                <div class="footer-brand">Librarian's Registry</div>
                <div class="footer-copy">© 1954 Librarian's Registry - Academic Archival System</div>
            </div>
            <nav class="footer-nav">
                <a class="footer-link" href="#">Catalog Rules</a>
                <a class="footer-link" href="#">Terms of Access</a>
                <a class="footer-link" href="#">Privacy Ledger</a>
            </nav>
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
    padding: 32px var(--margin-mobile);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
}
@media (min-width: 768px) {
    .footer-container {
        flex-direction: row;
        justify-content: space-between;
        padding: 32px var(--margin-desktop);
        gap: 0;
    }
}

.footer-info { text-align: center; }
@media (min-width: 768px) { .footer-info { text-align: left; } }

.footer-brand {
    font-family: var(--font-playfair);
    font-size: 24px;
    font-weight: 600;
    color: var(--color-primary);
    margin-bottom: 8px;
}
.footer-copy { font-size: 16px; color: var(--color-on-surface-variant); }

.footer-nav { display: flex; gap: 24px; align-items: center; }
.footer-link {
    font-size: 14px;
    font-weight: 700;
    color: var(--color-on-surface-variant);
    text-decoration: underline;
    transition: color 0.2s;
}
.footer-link:hover { color: var(--color-primary); }
</style>
