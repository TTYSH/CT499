<template>
    <div class="modal-overlay" :class="{ active: isOpen }">
        <div class="modal-backdrop" @click="closeModal"></div>
        <div class="modal-content modal-md" style="padding: 32px;">
            <button class="modal-close material-symbols-outlined" @click="closeModal">close</button>
            <div class="add-book-header">
                <h2 class="add-book-title">Thêm Sách Mới</h2>
                <p class="add-book-subtitle">Ghi chép vào sổ lưu trữ</p>
            </div>
            
            <form @submit.prevent="submitForm" style="overflow-y: auto;">
                <div class="form-grid">
                    <div class="form-group col-span-2">
                        <label class="form-label">Tên sách</label>
                        <input class="form-control" placeholder="Nhập tên sách..." type="text">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Tác giả</label>
                        <input class="form-control" placeholder="Tên tác giả..." type="text">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Thể loại</label>
                        <select class="form-control">
                            <option>Lịch sử</option>
                            <option>Triết học</option>
                            <option>Văn học</option>
                            <option>Khoa học</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Đơn giá (VNĐ)</label>
                        <input class="form-control" type="number">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Số lượng</label>
                        <input class="form-control" type="number">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Năm sản xuất</label>
                        <input class="form-control" type="number">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Nhà xuất bản</label>
                        <input class="form-control" type="text">
                    </div>
                    <div class="form-group col-span-2">
                        <label class="form-label">Mô tả</label>
                        <textarea class="form-control" placeholder="Tóm tắt nội dung..."></textarea>
                    </div>
                    <div class="form-group col-span-2">
                        <label class="form-label">Chọn ảnh bìa</label>
                        <div class="upload-area">
                            <span class="material-symbols-outlined upload-icon">upload_file</span>
                            <span class="upload-text">Nhấp để tải lên hoặc kéo thả ảnh bìa</span>
                        </div>
                    </div>
                </div>
                <div class="form-actions">
                    <button class="btn-save sticker-shadow" type="button" @click="closeModal">Lưu vào sổ cái</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['close'])

const closeModal = () => {
    emit('close')
}

const submitForm = () => {
    // Handle form submission logic here
    closeModal()
}
</script>

<style scoped>
/* Modals */
.modal-overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(39, 19, 16, 0.4);
    backdrop-filter: blur(2px);
    z-index: 50;
    display: none;
    align-items: center;
    justify-content: center;
    padding: 16px;
}
.modal-overlay.active { display: flex; }
.modal-backdrop { position: absolute; inset: 0; }

.modal-content {
    position: relative;
    background-color: var(--color-surface);
    background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
    border: 1px solid rgba(39, 19, 16, 0.3);
    box-shadow: 2px 2px 0px 0px rgba(62, 39, 35, 0.15);
    width: 100%;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    z-index: 10;
}
.modal-md { max-width: 672px; }

.modal-close {
    position: absolute;
    top: 16px; right: 16px;
    z-index: 20;
    color: var(--color-on-surface-variant);
    transition: color 0.2s;
    padding: 8px;
}
.modal-close:hover { color: var(--color-primary); }

/* Add Book Modal Styles */
.add-book-header {
    margin-bottom: 24px;
    border-bottom: 1px solid rgba(39, 19, 16, 0.2);
    padding-bottom: 8px;
}
.add-book-title {
    font-family: var(--font-playfair);
    font-size: 32px;
    font-weight: 700;
    color: var(--color-primary);
}
.add-book-subtitle {
    font-size: 14px;
    font-weight: 700;
    color: var(--color-secondary);
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

.form-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
}
@media (min-width: 768px) { .form-grid { grid-template-columns: 1fr 1fr; } }
.col-span-2 { grid-column: 1 / -1; }

.form-group { display: flex; flex-direction: column; gap: 4px; }
.form-label {
    font-size: 12px;
    font-weight: 700;
    color: rgba(80, 68, 66, 0.7);
    text-transform: uppercase;
}
.form-control {
    background-color: var(--color-surface-container-lowest);
    border: 1px solid rgba(211, 195, 192, 0.5);
    padding: 8px 16px;
    font-size: 16px;
    transition: border-color 0.2s;
    width: 100%;
}
.form-control:focus { border-color: var(--color-secondary); }
textarea.form-control { min-height: 100px; resize: vertical; }

.upload-area {
    border: 2px dashed rgba(211, 195, 192, 0.5);
    padding: 16px;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.2s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
}
.upload-area:hover { background-color: var(--color-surface-container-high); }
.upload-icon { color: var(--color-outline); }
.upload-text { color: rgba(80, 68, 66, 0.5); }

.form-actions {
    margin-top: 24px;
    padding-top: 16px;
    display: flex;
    justify-content: flex-end;
}
.btn-save {
    background-color: var(--color-primary);
    color: var(--color-on-primary);
    padding: 12px 32px;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: transform 0.2s;
}
.btn-save:hover { transform: translateY(-2px); }
.sticker-shadow { box-shadow: 2px 2px 0px 0px rgba(62, 39, 35, 0.15); }
</style>
