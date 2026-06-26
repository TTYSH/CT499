<template>
    <div class="modal-overlay" :class="{ active: isOpen }" @click="close">
        <div class="modal-backdrop"></div>
        <div class="modal-content modal-md" @click.stop>
            <div class="modal-header">
                <h3 class="modal-title">Thông tin tác giả</h3>
                <button class="modal-close material-symbols-outlined" @click="close">close</button>
            </div>
            <div class="modal-body custom-scrollbar view-author-content">
                <div class="view-avatar-wrapper">
                    <img alt="Author Avatar" class="view-avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeGpCfL0bkb0TsC9fJfNGp7yL3RO1k9gVJkjEzU1NO93AYCvDfLe1O9DiFsWZ7hMG8bfSGTCWR6guKXKQSDntCD4r-OVh29Dsvu93WJZgYT9X9LsJsMzFXoxudge2WyOrlvpxTfUpR_MJicYfTyxz2MxMwAaXqj1uE2v3wTsHmuKgO8mx0vfDN-7wNsP3WzY1RMR8jkHcfGnrZdddii8x_ZKAOWachwlWazfqCYt9rZG9oHCEwmZt8zsRgSeBEnHXctv9GNxsWffg">
                </div>
                
                <div class="detail-item" style="align-items: center;">
                    <span class="detail-label">Họ và tên</span>
                    <h4 class="view-name">Victor Hugo</h4>
                </div>
                
                <div class="detail-item" style="align-items: center; width: 100%;">
                    <span class="detail-label">Tiểu sử</span>
                    <div class="view-bio-box">
                        French poet, novelist, and dramatist of the Romantic movement. Known for Les Misérables and The Hunchback of Notre-Dame.
                    </div>
                </div>

                <button class="btn-primary sticker-shadow pressed-state" @click="close" style="margin-top: 16px;">Đóng</button>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    isOpen: Boolean
});

const emit = defineEmits(['close']);

function close() {
    emit('close');
}
</script>

<style scoped>
/* Modal base CSS + view CSS */
.modal-overlay { position: fixed; inset: 0; background-color: rgba(39, 19, 16, 0.4); backdrop-filter: blur(4px); z-index: 50; display: none; align-items: center; justify-content: center; padding: 16px; }
@media (min-width: 640px) { .modal-overlay { padding: 24px; } }
.modal-overlay.active { display: flex; }
.modal-backdrop { position: absolute; inset: 0; }
.modal-content { position: relative; background-color: var(--color-surface); background-image: url("https://www.transparenttextures.com/patterns/p6.png"); border: 1px solid var(--color-outline-variant); box-shadow: 8px 8px 0px 0px rgba(62, 39, 35, 0.1); width: 100%; max-height: 90vh; display: flex; flex-direction: column; overflow: hidden; }
.modal-md { max-width: 448px; }
.modal-header { padding: 24px; border-bottom: 1px solid rgba(211, 195, 192, 0.3); background-color: var(--color-surface-container-low); display: flex; justify-content: space-between; align-items: center; }
.modal-title { font-family: var(--font-playfair); font-size: 24px; font-weight: 600; color: var(--color-primary); font-style: italic; margin: 0; }
.modal-close { color: var(--color-on-surface-variant); transition: color 0.2s; border: none; background: transparent; cursor: pointer; }
.modal-close:hover { color: var(--color-primary); }
.modal-body { padding: 24px; overflow-y: auto; flex: 1; }
.custom-scrollbar::-webkit-scrollbar { width: 6px; }
.custom-scrollbar::-webkit-scrollbar-track { background: #f5f3ef; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: #d3c3c0; border-radius: 10px; }
.btn-primary { background-color: var(--color-primary); color: var(--color-on-primary); padding: 12px 32px; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; display: flex; align-items: center; gap: 8px; transition: background-color 0.2s; white-space: nowrap; border: none; cursor: pointer;}
.btn-primary:hover { background-color: var(--color-primary-container); }
.sticker-shadow { box-shadow: 2px 2px 0px 0px rgba(62, 39, 35, 0.1); }
.pressed-state { transition: transform 0.1s, box-shadow 0.1s; }
.pressed-state:active { transform: translate(1px, 1px); box-shadow: 0px 0px 0px 0px rgba(62, 39, 35, 0.1); }

/* View CSS */
.view-author-content { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 24px; padding: 32px; }
.view-avatar-wrapper { position: relative; padding: 4px; border: 2px solid var(--color-outline-variant); border-radius: 50%; }
.view-avatar { width: 128px; height: 128px; border-radius: 50%; border: 4px solid var(--color-surface-container-high); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); object-fit: cover; }
.view-name { font-family: var(--font-playfair); font-size: 48px; color: var(--color-primary); margin: 0; }
.view-bio-box { background-color: var(--color-surface-container-low); padding: 16px; border: 1px solid rgba(211, 195, 192, 0.3); border-radius: 8px; font-style: italic; color: var(--color-on-surface-variant); width: 100%; box-sizing: border-box; }
.detail-item { display: flex; flex-direction: column; gap: 4px; }
.detail-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-on-surface-variant); }
</style>
