<template>
    <div class="container custom-scrollbar">
        <!-- Page Header -->
        <div class="page-header">
            <h1 class="page-title">Quản Lý Tác Giả</h1>
            <div class="header-actions">
                <div class="search-section">
                    <span>Tìm kiếm tác giả</span>
                    <div class="search-wrapper">
                        <span class="material-symbols-outlined search-icon">search</span>
                        <input class="search-input" placeholder="Tìm kiếm..." type="text">
                    </div>
                </div>
                <button class="btn-add sticker-shadow" @click="isAddModalOpen = true">
                    <span class="material-symbols-outlined" style="font-size: 18px;">add</span>
                    THÊM TÁC GIẢ
                </button>
            </div>
        </div>

        <!-- Authors Table -->
        <div class="table-container">
            <div style="overflow-x: auto;">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã Tác Giả</th>
                            <th>Ảnh Tác Giả</th>
                            <th>Tên Tác Giả</th>
                            <th>Quốc Gia</th>
                            <th>Số tác phẩm</th>
                            <th>Mô tả</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Author 1 -->
                        <tr @click="openViewModal">
                            <td class="col-id">1</td>
                            <td class="col-code">TG01</td>
                            <td class="col-avatar">
                                <img alt="Nguyen Nhat Anh" class="author-img" 
                                src="/images/TacGia/2_nguyen_nhat_anh.jpg">
                            </td>
                            <td class="author-name">Victor Hugo</td>
                            <td class="author-nation">Hàn Quốc</td>
                            <td class="book-quantity">56</td>
                            <td class="author-desc">Friedrich Wilhelm Nietzsche là một triết gia, nhà phê bình văn hóa, nhà 
                                soạn nhạc, nhà thơ, học giả ngữ văn người Đức. Tác phẩm của ông mang tính đột phá, thách 
                                thức các nền tảng tôn giáo, đạo đức truyền thống và triết học đương thời. Nietzsche nổi tiếng 
                                với các khái niệm "Siêu nhân" (Übermensch), "Ý chí hùng lực" (Will to Power) và 
                                tuyên bố gây tranh cãi "Thượng đế đã chết". Di sản của ông để lại là một kho tàng tri thức 
                                đồ sộ, ảnh hưởng sâu sắc đến triết học hiện đại, tâm lý học và nghệ thuật thế kỷ 20. Librarian's 
                                Registry vinh dự lưu trữ các bản dịch hiếm nhất của ông để phục vụ giới học thuật.</td>
                            <td>
                                <div class="action-btns">
                                    <button class="action-btn material-symbols-outlined" @click.stop="openViewModal" style="font-size: 20px;">visibility</button>
                                    <button class="action-btn edit material-symbols-outlined" @click.stop style="font-size: 20px;">edit</button>
                                    <button class="action-btn delete material-symbols-outlined" @click.stop style="font-size: 20px;">delete</button>
                                </div>
                            </td>
                        </tr>
                        <!-- Author 2 -->
                        <tr @click="openViewModal">
                            <td class="col-id">2</td>
                            <td class="col-code">TG01</td>
                            <td class="col-avatar">
                                <img alt="Victor Hugo" class="author-img" src="/images/TacGia/2_nguyen_nhat_anh.jpg">
                            </td>
                            <td class="author-name">Mary Shelley</td>
                            <td class="author-nation">Nhật Bản</td>
                            <td class="book-quantity">56</td>
                            <td class="author-desc">Friedrich Wilhelm Nietzsche là một triết gia, nhà phê bình văn hóa, nhà 
                                soạn nhạc, nhà thơ, học giả ngữ văn người Đức. Tác phẩm của ông mang tính đột phá, thách 
                                thức các nền tảng tôn giáo, đạo đức truyền thống và triết học đương thời. Nietzsche nổi tiếng 
                                với các khái niệm "Siêu nhân" (Übermensch), "Ý chí hùng lực" (Will to Power) và 
                                tuyên bố gây tranh cãi "Thượng đế đã chết". Di sản của ông để lại là một kho tàng tri thức 
                                đồ sộ, ảnh hưởng sâu sắc đến triết học hiện đại, tâm lý học và nghệ thuật thế kỷ 20. Librarian's 
                                Registry vinh dự lưu trữ các bản dịch hiếm nhất của ông để phục vụ giới học thuật.
                            </td>
                            <td>
                                <div class="action-btns">
                                    <button class="action-btn material-symbols-outlined" @click.stop="openViewModal" style="font-size: 20px;">visibility</button>
                                    <button class="action-btn edit material-symbols-outlined" @click.stop style="font-size: 20px;">edit</button>
                                    <button class="action-btn delete material-symbols-outlined" @click.stop style="font-size: 20px;">delete</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Pagination -->
        <div class="pagination-container">
            <div class="pagination-controls">
                <button class="page-btn"><span class="material-symbols-outlined">chevron_left</span></button>
                <button class="page-btn active">1</button>
                <button class="page-btn">2</button>
                <button class="page-btn">3</button>
                <button class="page-btn"><span class="material-symbols-outlined">chevron_right</span></button>
            </div>
        </div>

        <AddAuthorModal :isOpen="isAddModalOpen" @close="closeAddModal" />
        <ViewAuthorModal :isOpen="isViewModalOpen" @close="closeViewModal" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import AddAuthorModal from '../../components/Admin/Author/AddAuthorModal.vue';
import ViewAuthorModal from '../../components/Admin/Author/ViewAuthorModal.vue';

const isAddModalOpen = ref(false);
const isViewModalOpen = ref(false);

function openAddModal() {
    isAddModalOpen.value = true;
    document.body.style.overflow = 'hidden';
}

function closeAddModal() {
    isAddModalOpen.value = false;
    document.body.style.overflow = 'auto';
}

function openViewModal() {
    isViewModalOpen.value = true;
    document.body.style.overflow = 'hidden';
}

function closeViewModal() {
    isViewModalOpen.value = false;
    document.body.style.overflow = 'auto';
}
</script>

<style scoped>
.container { max-width: var(--max-width); margin: 0 auto; padding-bottom: 80px; }
@media (min-width: 768px) { .container { padding-bottom: 0; } }

/* Page Header */
.page-header {
    display: flex;
    gap: 22px;
    border-bottom: 2px solid rgba(39, 19, 16, 0.2);
    padding-bottom: 16px;
    margin-bottom: var(--gutter);
}

.page-title {
    font-family: var(--font-playfair);
    font-size: 32px;
    font-weight: 700;
    color: var(--color-primary);
    margin-top: 4px;
}

.search-section, .filter-section {
    display: flex;
    align-items: center;
    gap: 10px;
}

.search-wrapper {
    display: none;
    align-items: center;
    background-color: var(--color-surface-container-lowest);
    border: 1px solid rgba(211, 195, 192, 0.5);
    border-radius: 5px;
    padding: 6px 12px;
}

@media (min-width: 768px) { .search-wrapper { display: flex; } }

.search-input {
    width: 256px;
    font-size: 16px;
    padding: 0 8px;
    color: var(--color-on-surface);
}

.search-input::placeholder {
    font-size: 14px;
}

.search-icon { 
    color: var(--color-outline); 
}

@media (min-width: 768px) {
    .page-header { 
        flex-direction: column; 
        justify-content: space-between; 
        /* align-items: flex-end;  */
    }
}

.header-actions {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    font-size: 15px;
    font-weight: 600;
}

.btn-add {
    background-color: var(--color-primary);
    color: var(--color-on-primary);
    border-radius: 5px;
    padding: 8px 22px;
    font-size: 14px;
    font-weight: 700;
    transition: transform 0.2s;
    display: flex;
    gap: 5px;
    margin-left: 3.8rem;
}

.btn-add:hover { 
    transform: translateY(-2px); 
}

.page-subtitle { font-size: 16px; color: var(--color-on-surface-variant); margin-top: 4px; font-style: italic; }

/* Table Area */
.table-container { 
    background-color: var(--color-surface-container-lowest);
    border: 1px solid rgba(211, 195, 192, 0.3);
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    margin-bottom: 32px; 
}
.data-table { 
    width: 100%;
    border-collapse: separate;
    text-align: center; 
    font-size: 15px; 
}
.data-table th { 
    background-color: var(--color-surface-container-high);
    color: rgba(39, 19, 16, 0.8);
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 9px;
    text-align: center;
    border-bottom: 1px solid rgba(62, 39, 35, 0.1); 
}
.data-table td { 
    padding: 10px;
    border-bottom: 1px solid rgba(211, 195, 192, 0.3);
    border-right: 1px solid rgba(211, 195, 192, 0.2);
    transition: background-color 0.2s; 
}
.data-table tr { 
    transition: background-color 0.2s; 
}
.data-table tr:hover { 
    background-color: var(--color-surface-container-low); 
    cursor: pointer; 
}
/* .col-id { width: 60px; } */
/* .col-code { width: 120px; } */
/* .col-avatar { width: 200px; } */
/* .book-quantity { width: 120px;} */
.author-img { 
    width: 50px; 
    height: 50px; 
    border-radius: 50%; 
    border: 1px solid rgba(211, 195, 192, 0.5); 
    object-fit: cover; 
}

.author-desc {
    width: 350px;
    text-align: justify;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
.action-btns { 
    display: flex; 
    justify-content: center; 
    gap: 4px; 
}
.action-btn { 
    color: var(--color-secondary); 
    transition: color 0.2s; 
    background: none; 
    border: none; 
    cursor: pointer; 
}
.action-btn.delete { color: var(--color-error); }
.action-btn.edit { color: rgba(0, 0, 255, 0.668);}
.action-btn:hover { 
    color: var(--color-primary); 
}

/* Pagination */
.pagination-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
}

.pagination-controls { 
    display: flex; 
    gap: 8px; 
}
.page-btn {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(211, 195, 192, 0.5);
    transition: all 0.2s;
}
.page-btn:hover { background-color: var(--color-surface-container-high); }
.page-btn.active {
    background-color: var(--color-secondary);
    color: var(--color-on-secondary);
    font-weight: 700;
    box-shadow: 2px 2px 0px 0px rgba(62, 39, 35, 0.15);
    border-color: transparent;
}

.btn-primary { background-color: var(--color-primary); color: var(--color-on-primary); padding: 12px 32px; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; display: flex; align-items: center; gap: 8px; transition: background-color 0.2s; white-space: nowrap; border: none; cursor: pointer; }
.btn-primary:hover { background-color: var(--color-primary-container); }
.sticker-shadow { box-shadow: 2px 2px 0px 0px rgba(62, 39, 35, 0.1); }
.pressed-state { transition: transform 0.1s, box-shadow 0.1s; }
.pressed-state:active { transform: translate(1px, 1px); box-shadow: 0px 0px 0px 0px rgba(62, 39, 35, 0.1); }

.custom-scrollbar::-webkit-scrollbar { width: 6px; }
.custom-scrollbar::-webkit-scrollbar-track { background: #f5f3ef; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: #d3c3c0; border-radius: 10px; }
</style>
