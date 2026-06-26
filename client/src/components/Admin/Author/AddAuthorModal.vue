<template>
    <div class="modal-overlay" :class="{ active: isOpen }" @click="close">
        <div class="modal-backdrop"></div>
        <div class="modal-content modal-md" @click.stop>
            <div class="modal-header">
                <h3 class="modal-title">Thêm Tác Giả Mới</h3>
                <button class="modal-close material-symbols-outlined" @click="close">close</button>
            </div>
            <form class="modal-body custom-scrollbar" @submit.prevent="submit">
                <div class="form-group">
                    <label class="form-label">Ảnh đại diện</label>
                    <div class="image-upload">
                        <span class="material-symbols-outlined text-on-surface-variant">add_a_photo</span>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">Tên tác giả</label>
                    <input class="form-input" placeholder="Nhập tên..." type="text">
                </div>
                <div class="form-group">
                    <label class="form-label">Mô tả</label>
                    <textarea class="form-textarea" placeholder="Tiểu sử tóm tắt..."></textarea>
                </div>
            </form>
            <div class="modal-footer">
                <button class="btn-text" @click="close" type="button">Hủy</button>
                <button class="btn-primary sticker-shadow pressed-state" type="submit">Lưu hồ sơ</button>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    isOpen: Boolean
});

const emit = defineEmits(['close', 'submit']);

function close() {
    emit('close');
}

function submit() {
    emit('submit');
    close();
}
</script>

<style scoped>
/* Modal base CSS + form CSS */
.modal-overlay {
    position: fixed; inset: 0; background-color: rgba(39, 19, 16, 0.4);
    backdrop-filter: blur(4px); z-index: 50; display: none; align-items: center;
    justify-content: center; padding: 16px;
}
@media (min-width: 640px) { .modal-overlay { padding: 24px; } }
.modal-overlay.active { display: flex; }
.modal-backdrop { position: absolute; inset: 0; }
.modal-content {
    position: relative; background-color: var(--color-surface);
    background-image: url("https://www.transparenttextures.com/patterns/p6.png");
    border: 1px solid var(--color-outline-variant); box-shadow: 8px 8px 0px 0px rgba(62, 39, 35, 0.1);
    width: 100%; max-height: 90vh; display: flex; flex-direction: column; overflow: hidden;
}
.modal-md { max-width: 448px; }
.modal-header { padding: 24px; border-bottom: 1px solid rgba(211, 195, 192, 0.3); background-color: var(--color-surface-container-low); display: flex; justify-content: space-between; align-items: center; }
.modal-title { font-family: var(--font-playfair); font-size: 24px; font-weight: 600; color: var(--color-primary); font-style: italic; margin: 0; }
.modal-close { color: var(--color-on-surface-variant); transition: color 0.2s; border: none; background: transparent; cursor: pointer; }
.modal-close:hover { color: var(--color-primary); }
.modal-body { padding: 24px; overflow-y: auto; flex: 1; }
.modal-footer { padding: 24px; border-top: 1px solid rgba(211, 195, 192, 0.3); background-color: var(--color-surface-container-low); display: flex; justify-content: flex-end; gap: 16px; }
.custom-scrollbar::-webkit-scrollbar { width: 6px; }
.custom-scrollbar::-webkit-scrollbar-track { background: #f5f3ef; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: #d3c3c0; border-radius: 10px; }
.btn-primary { background-color: var(--color-primary); color: var(--color-on-primary); padding: 12px 32px; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; display: flex; align-items: center; gap: 8px; transition: background-color 0.2s; white-space: nowrap; border: none; cursor: pointer;}
.btn-primary:hover { background-color: var(--color-primary-container); }
.sticker-shadow { box-shadow: 2px 2px 0px 0px rgba(62, 39, 35, 0.1); }
.pressed-state { transition: transform 0.1s, box-shadow 0.1s; }
.pressed-state:active { transform: translate(1px, 1px); box-shadow: 0px 0px 0px 0px rgba(62, 39, 35, 0.1); }

/* Form CSS */
.form-group { display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; }
.form-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-on-surface-variant); font-weight: 700; }
.form-input { border-bottom: 1px solid var(--color-outline-variant); padding: 8px 0; font-size: 16px; outline: none; transition: border-color 0.2s; background: transparent; border-top: none; border-left: none; border-right: none;}
.form-input:focus { border-bottom-color: var(--color-primary); }
.form-textarea { border: 1px solid var(--color-outline-variant); padding: 8px; font-size: 16px; height: 96px; outline: none; transition: border-color 0.2s; background: transparent;}
.form-textarea:focus { border-color: var(--color-primary); }
.image-upload { width: 96px; height: 96px; border: 2px dashed var(--color-outline-variant); display: flex; align-items: center; justify-content: center; background-color: var(--color-surface-container-low); border-radius: 8px; cursor: pointer; transition: background-color 0.2s; }
.image-upload:hover { background-color: var(--color-surface-container-high); }
.btn-text { padding: 8px 24px; color: var(--color-on-surface-variant); font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; background: none; border: none; cursor: pointer;}
</style>
