<template>
    <div class="modal-overlay" :class="{ active: show }" @click="close">
        <div class="modal-content" @click.stop>
            <div class="modal-header">
                <h2>Chỉnh sửa Profile</h2>
                <button class="close-btn material-symbols-outlined" @click="close">close</button>
            </div>
            
            <div class="modal-body">
                <div class="avatar-section">
                    <span class="material-symbols-outlined avatar-icon">account_circle</span>
                    <button class="change-avatar-btn">Thay đổi ảnh đại diện</button>
                </div>
                
                <div class="form-group">
                    <label>Họ và tên</label>
                    <input type="text" v-model="profile.name" class="form-input" />
                </div>
                
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" v-model="profile.email" class="form-input" />
                </div>
                
                <div class="form-group">
                    <label>Mật khẩu mới</label>
                    <input type="password" placeholder="Bỏ trống nếu không đổi" class="form-input" />
                </div>
            </div>
            
            <div class="modal-footer">
                <button class="btn-cancel" @click="close">Hủy</button>
                <button class="btn-save" @click="save">Lưu thay đổi</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
    show: Boolean
});

const emit = defineEmits(['update:show', 'save']);

const profile = ref({
    name: 'Admin Name',
    email: 'admin@bookworm.com'
});

const close = () => {
    emit('update:show', false);
};

const save = () => {
    emit('save', profile.value);
    close();
};
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
}

.modal-overlay.active {
    opacity: 1;
    pointer-events: auto;
}

.modal-content {
    background-color: var(--color-surface, #fff);
    border-radius: 12px;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 24px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.modal-header h2 {
    margin: 0;
    font-size: 20px;
    color: var(--color-on-surface, #333);
}

.close-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 24px;
    color: var(--color-on-surface-variant, #666);
}

.modal-body {
    padding: 24px;
}

.avatar-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 24px;
}

.avatar-icon {
    font-size: 80px;
    color: var(--color-primary, #6200ee);
}

.change-avatar-btn {
    margin-top: 8px;
    background: none;
    border: none;
    color: var(--color-primary, #6200ee);
    font-weight: 600;
    cursor: pointer;
    font-size: 14px;
}

.form-group {
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.form-group label {
    font-size: 14px;
    font-weight: 600;
    color: var(--color-on-surface-variant, #555);
}

.form-input {
    padding: 10px 12px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    font-size: 15px;
    outline: none;
    transition: border-color 0.2s;
}

.form-input:focus {
    border-color: var(--color-primary, #6200ee);
}

.modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    padding: 16px 24px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.btn-cancel {
    padding: 8px 16px;
    background: none;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    color: var(--color-on-surface-variant, #555);
}

.btn-save {
    padding: 8px 16px;
    background-color: var(--color-primary, #6200ee);
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
}

.btn-save:hover {
    opacity: 0.9;
}
</style>
