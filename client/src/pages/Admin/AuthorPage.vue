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
                            <th>Ảnh</th>
                            <th>Tên</th>
                            <th>Mô tả</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Author 1 -->
                        <tr @click="openViewModal">
                            <td class="col-id">01</td>
                            <td class="col-avatar">
                                <img alt="Victor Hugo" class="author-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeGpCfL0bkb0TsC9fJfNGp7yL3RO1k9gVJkjEzU1NO93AYCvDfLe1O9DiFsWZ7hMG8bfSGTCWR6guKXKQSDntCD4r-OVh29Dsvu93WJZgYT9X9LsJsMzFXoxudge2WyOrlvpxTfUpR_MJicYfTyxz2MxMwAaXqj1uE2v3wTsHmuKgO8mx0vfDN-7wNsP3WzY1RMR8jkHcfGnrZdddii8x_ZKAOWachwlWazfqCYt9rZG9oHCEwmZt8zsRgSeBEnHXctv9GNxsWffg">
                            </td>
                            <td class="author-name">Victor Hugo</td>
                            <td class="author-desc">French poet, novelist, and dramatist of the Romantic movement.</td>
                            <td>
                                <div class="action-btns">
                                    <button class="action-btn material-symbols-outlined" @click.stop="openViewModal" style="font-size: 20px;">visibility</button>
                                    <button class="action-btn material-symbols-outlined" @click.stop style="font-size: 20px;">edit</button>
                                    <button class="action-btn delete material-symbols-outlined" @click.stop style="font-size: 20px;">delete</button>
                                </div>
                            </td>
                        </tr>
                        <!-- Author 2 -->
                        <tr @click="openViewModal">
                            <td class="col-id">02</td>
                            <td class="col-avatar">
                                <div class="author-img-placeholder">
                                    <span class="material-symbols-outlined">person</span>
                                </div>
                            </td>
                            <td class="author-name">Mary Shelley</td>
                            <td class="author-desc">English novelist who wrote the Gothic novel Frankenstein.</td>
                            <td>
                                <div class="action-btns">
                                    <button class="action-btn material-symbols-outlined" @click.stop="openViewModal" style="font-size: 20px;">visibility</button>
                                    <button class="action-btn material-symbols-outlined" @click.stop style="font-size: 20px;">edit</button>
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
.table-container { background-color: var(--color-surface); border: 1px solid rgba(211, 195, 192, 0.8); box-shadow: 4px 4px 0px 0px rgba(62, 39, 35, 0.05); overflow: hidden; width: 100%; }
.data-table { width: 100%; border-collapse: collapse; text-align: left; }
.data-table th { background-color: var(--color-surface-container); color: var(--color-primary); font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; padding: 16px 24px; border-bottom: 1px solid var(--color-outline); border-right: 1px solid rgba(211, 195, 192, 0.3); }
.data-table th:last-child { border-right: none; text-align: center; }
.data-table td { padding: 20px 24px; border-bottom: 1px solid rgba(211, 195, 192, 0.3); border-right: 1px solid rgba(211, 195, 192, 0.2); transition: background-color 0.2s; }
.data-table td:last-child { border-right: none; text-align: center; }
.data-table tr { transition: background-color 0.2s; }
.data-table tr:hover { background-color: var(--color-surface-container-low); cursor: pointer; }
.col-id { color: var(--color-on-surface-variant); width: 64px; }
.col-avatar { width: 96px; }
.author-img { width: 48px; height: 48px; border-radius: 50%; border: 1px solid rgba(211, 195, 192, 0.5); object-fit: cover; }
.author-img-placeholder { width: 48px; height: 48px; border-radius: 50%; background-color: var(--color-surface-container-high); border: 1px solid rgba(211, 195, 192, 0.5); display: flex; align-items: center; justify-content: center; color: var(--color-on-surface-variant); }
.author-name { font-weight: 700; }
.author-desc { font-style: italic; color: var(--color-on-surface-variant); }
.action-btns { display: flex; justify-content: center; gap: 12px; }
.action-btn { color: var(--color-secondary); transition: color 0.2s; background: none; border: none; cursor: pointer; }
.action-btn:hover { color: var(--color-primary); }
.action-btn.delete { color: var(--color-error); }
.action-btn.delete:hover { color: var(--color-on-error-container); }

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
