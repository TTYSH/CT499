<template>
    <div class="author-collection">
        <header class="page-header">
            <div class="header-content">
                <div class="header-main">
                    <div class="header-image-wrapper" @click="$emit('show-profile')">
                        <img alt="Friedrich Nietzsche" class="header-image"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmYV_nfHLV_SBcRE96ZnlQPaStD-9Gy-05LQLYpOl4KxKtpgE4yXzsG2SkbG2ntG20ooMHRxoRQtYQzskMh3idpSM74Hn3pJgBB5rn4XH6wTnxeKsyV1syw_9Um3_hCPpVKKNLknPAZDt_BtdQC79o30v3PzsHDQfHm4OXiOUM0HidP5tyc2kHB-kV4gdkpZNv0zfWkIk6ABT7YEpHkU_egzLpLq7d3rXtQ78gmQm52FMpaphO-WaTZ8UPmacNa9aJsy2tlvps33I">
                    </div>
                    <h1 class="page-title" @click="$emit('show-profile')">Friedrich Nietzsche</h1>
                </div>
                <button class="header-btn" @click="$emit('show-profile')">Xem thêm</button>
            </div>
            <span class="material-symbols-outlined header-bg-icon">history_edu</span>
        </header>

        <div class="book-grid">
            <!-- Card 1 -->
            <div class="book-card">
                <div class="card-image-wrapper">
                    <img class="card-image" alt="Zarathustra đã nói như thế"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmYV_nfHLV_SBcRE96ZnlQPaStD-9Gy-05LQLYpOl4KxKtpgE4yXzsG2SkbG2ntG20ooMHRxoRQtYQzskMh3idpSM74Hn3pJgBB5rn4XH6wTnxeKsyV1syw_9Um3_hCPpVKKNLknPAZDt_BtdQC79o30v3PzsHDQfHm4OXiOUM0HidP5tyc2kHB-kV4gdkpZNv0zfWkIk6ABT7YEpHkU_egzLpLq7d3rXtQ78gmQm52FMpaphO-WaTZ8UPmacNa9aJsy2tlvps33I">
                
                </div>
                <div class="card-content">
                    <h2 class="book-title">Zarathustra đã nói như thế</h2>
                    <p class="book-author" @click="$emit('show-profile')">Friedrich Nietzsche</p>
                    <p class="book-description">Một tác phẩm triết học sâu sắc trình bày về khái niệm Siêu nhân và cái chết của Thượng đế.</p>
                </div>
                <button class="add-btn" @click="handleRequest">Add to Request</button>
            </div>

            <!-- Card 2 -->
            <div class="book-card">
                <div class="card-image-wrapper">
                    <img class="card-image" alt="Bên kia thiện ác"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG0WFk5zhDL5EgaXb8CZReXNEdua-3KwRhOMR09KmRSAYV4xRGbt7FYqnm32OOolUZmzMt-jqgC1DMMYVcBNeCUI8QnTgby831riDc56UNuO4GQq-ThkfAn9SGg5ySLPCL51cLvucy5Gw4f13t7IJGo3C57JNC1atdDRNWqJieKMUQWTo9LaGMXxODEpGcqCUmiL1t09FyKq3zexDsT-4Q6x4zma6j1GLbMbzoHhLeMkfzalGBPE07SBpnjV5rguKa-AO68yDgX9Q">
            
                </div>
                <div class="card-content">
                    <h2 class="book-title">Bên kia thiện ác</h2>
                    <p class="book-author" @click="$emit('show-profile')">Friedrich Nietzsche</p>
                    <p class="book-description">Phê phán các nhà triết học quá khứ và đề xuất một cách nhìn mới về đạo đức và ý chí quyền lực.</p>
                </div>
                <button class="add-btn" @click="handleRequest">Add to Request</button>
            </div>

            <!-- Card 3 -->
            <div class="book-card">
                <div class="card-image-wrapper">
                    <img class="card-image" alt="Phả hệ đạo đức"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBomS1sOx8wajXT05U8RMpnu_wRDAWU6zsZJXEiQ_KMR99jxnIDeNJ6CwY5XisS3K4PTH_GkHkjbGD5SVdZ_9Wfpsu2-9uZPcro8s7Pl7-DGZLkTMxOW74fWKgHXAwRFSb5eADzEON9IPN7Z_xKYQudJhdv9tnwV_VqRFqifqFmOFYUNT7EBpdSy3KnmokH4ZOY3JzrjWVYLk-Xf_vCG3GZDh6xOoRYA90v3azZt8EgcBXq-xMG9HpRTp5Ykla988xjhIsHs2c_AYg">
                   
                </div>
                <div class="card-content">
                    <h2 class="book-title">Phả hệ đạo đức</h2>
                    <p class="book-author" @click="$emit('show-profile')">Friedrich Nietzsche</p>
                    <p class="book-description">Một cuộc điều tra về nguồn gốc của các định kiến đạo đức và sự phát triển của lương tâm.</p>
                </div>
                <button class="add-btn" @click="handleRequest">Add to Request</button>
            </div>
        </div>

        <!-- Pagination -->
        <nav class="pagination">
            <button class="page-item"><span class="material-symbols-outlined">chevron_left</span></button>
            <button class="page-item active">1</button>
            <button class="page-item">2</button>
            <button class="page-item">3</button>
            <span class="page-dots">...</span>
            <button class="page-item">12</button>
            <button class="page-item"><span class="material-symbols-outlined">chevron_right</span></button>
        </nav>
    </div>
</template>

<script setup>
defineEmits(['show-profile'])

const handleRequest = (event) => {
    event.stopPropagation();
    const button = event.currentTarget;
    if (button.textContent.trim() === 'Add to Request') {
        const originalText = button.textContent;
        button.textContent = 'Requested ✓';
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
/* Page Header */
.page-header {
    margin-bottom: 40px;
    background-color: var(--color-surface-container);
    padding: 32px;
    border: 1px solid rgba(211, 195, 192, 0.3);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 32px;
}

@media (min-width: 768px) {
    .page-header {
        flex-direction: row;
        align-items: center;
    }
}

.header-content {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
}

@media (min-width: 768px) {
    .header-content {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
}

.header-main {
    display: flex;
    align-items: center;
    gap: 32px;
}

.header-image-wrapper {
    width: 128px;
    height: 128px;
    border-radius: 50%;
    border: 4px solid var(--color-secondary);
    overflow: hidden;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    flex-shrink: 0;
    cursor: pointer;
}

.header-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.page-title {
    font-family: var(--font-playfair);
    font-size: 48px;
    font-weight: 700;
    color: var(--color-primary);
    letter-spacing: -0.02em;
    cursor: pointer;
    transition: color 0.2s;
}
.page-title:hover {
    color: var(--color-secondary);
}

.header-btn {
    padding: 8px 24px;
    border: 1px solid var(--color-secondary);
    color: var(--color-secondary);
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    border-radius: 10px;
    transition: all 0.2s;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    background: none;
}
.header-btn:hover {
    background-color: var(--color-secondary-container);
}

.header-bg-icon {
    position: absolute;
    right: -32px;
    bottom: -32px;
    font-size: 200px;
    color: rgba(211, 195, 192, 0.1);
    transform: rotate(12deg);
    pointer-events: none;
}

/* Book Grid */
.book-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 32px;
}

@media (min-width: 640px) {
    .book-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .book-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

.book-card {
    display: flex;
    flex-direction: column;
    background-color: var(--color-surface);
    border: 1px solid rgba(211, 195, 192, 0.4);
    padding: 20px;
    box-shadow: 4px 4px 0px 0px rgba(131, 84, 37, 0.1);
    transition: all 0.3s;
    min-height: 500px;
    position: relative;
    cursor: pointer;
}

.book-card:hover {
    transform: translateY(-4px);
    box-shadow: 6px 6px 0px 0px rgba(131, 84, 37, 0.15);
}


.card-image-wrapper {
    height: 256px;
    margin-bottom: 24px;
    overflow: hidden;
    position: relative;
    background-color: var(--color-surface-container-high);
    border: 1px solid rgba(211, 195, 192, 0.2);
}

.card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(20%);
    transition: filter 0.5s;
}

.book-card:hover .card-image {
    filter: grayscale(0%);
}

.status-badge {
    position: absolute;
    top: 8px;
    right: 8px;
    font-size: 10px;
    font-weight: 700;
    padding: 4px 8px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.status-reserved {
    background-color: var(--color-primary);
    color: var(--color-on-primary);
}

.status-available {
    background-color: #223021;
    color: #889885;
}

.card-content {
    flex-grow: 1;
    padding-bottom: 32px;
}

.book-title {
    font-family: var(--font-playfair);
    font-size: 24px;
    font-weight: 600;
    color: var(--color-primary);
    margin-bottom: 8px;
    transition: color 0.2s;
}

.book-card:hover .book-title {
    color: var(--color-secondary);
}

.book-author {
    font-style: italic;
    color: var(--color-on-surface-variant);
    margin-bottom: 16px;
    border-left: 2px solid rgba(131, 84, 37, 0.3);
    padding-left: 12px;
    cursor: pointer;
    transition: color 0.2s;
}
.book-author:hover {
    color: var(--color-primary);
    text-decoration: underline;
}

.book-description {
    font-size: 12px;
    color: var(--color-on-surface-variant);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
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
    cursor: pointer;
    border: none;
}

.add-btn:hover {
    background-color: var(--color-primary);
}

.add-btn:active {
    transform: scale(0.98);
}

/* Pagination */
.pagination {
    margin-top: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
}

.page-item {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--color-outline-variant);
    color: var(--color-on-surface-variant);
    font-size: 14px;
    font-weight: 700;
    transition: all 0.2s;
    background: transparent;
    cursor: pointer;
}

.page-item:hover {
    border-color: var(--color-secondary);
    color: var(--color-secondary);
}

.page-item.active {
    background-color: var(--color-secondary);
    color: var(--color-on-secondary);
    border-color: var(--color-secondary);
    box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.1);
}

.page-dots {
    color: var(--color-on-surface-variant);
}
</style>
