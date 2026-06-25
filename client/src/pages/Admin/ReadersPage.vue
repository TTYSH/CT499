<template>
    <div class="container">
        <!-- View Header -->
        <div class="page-header">
            <div>
                <h2 class="page-title">Danh mục Độc giả</h2>
                <p class="page-subtitle">Quản lý hồ sơ và quyền truy cập thư viện toàn cầu.</p>
            </div>
            <div>
                <button class="btn-filter">
                    <span class="material-symbols-outlined" style="font-size: 18px;">filter_list</span>
                    Lọc
                </button>
            </div>
        </div>

        <!-- Main Registry Table -->
        <div class="table-container">
            <div class="table-wrapper">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã độc giả</th>
                            <th>Tên độc giả</th>
                            <th>Email</th>
                            <th>Loại TK</th>
                            <th>Địa chỉ</th>
                            <th>SDT</th>
                            <th style="text-align: right;">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr @click="openProfile('N-0142', 'Nguyễn Văn An', 'nguyen.an@archive.org', 'Nghiên cứu viên', 'Đại học Quốc gia Hà Nội', '0912 345 678')">
                            <td class="col-id">01</td>
                            <td class="col-id">N-0142</td>
                            <td class="col-name">Nguyễn Văn An</td>
                            <td class="col-email">nguyen.an@archive.org</td>
                            <td><span class="type-badge">Nghiên cứu viên</span></td>
                            <td class="col-id">Đại học Quốc gia Hà Nội</td>
                            <td class="col-phone">0912 345 678</td>
                            <td>
                                <div class="action-btns">
                                    <button class="action-btn material-symbols-outlined" title="Xem chi tiết" @click.stop="openProfile('N-0142', 'Nguyễn Văn An', 'nguyen.an@archive.org', 'Nghiên cứu viên', 'Đại học Quốc gia Hà Nội', '0912 345 678')">visibility</button>
                                    <button class="action-btn delete material-symbols-outlined" title="Xóa hồ sơ" @click.stop>delete</button>
                                </div>
                            </td>
                        </tr>
                        <tr @click="openProfile('N-0143', 'Lê Thị Bình', 'le.thi.binh@archive.org', 'Quản trị viên', 'Thư viện Trung ương', '0988 777 666')">
                            <td class="col-id">02</td>
                            <td class="col-id">N-0143</td>
                            <td class="col-name">Lê Thị Bình</td>
                            <td class="col-email">le.thi.binh@archive.org</td>
                            <td><span class="type-badge">Quản trị viên</span></td>
                            <td class="col-id">Thư viện Trung ương</td>
                            <td class="col-phone">0988 777 666</td>
                            <td>
                                <div class="action-btns">
                                    <button class="action-btn material-symbols-outlined" title="Xem chi tiết" @click.stop="openProfile('N-0143', 'Lê Thị Bình', 'le.thi.binh@archive.org', 'Quản trị viên', 'Thư viện Trung ương', '0988 777 666')">visibility</button>
                                    <button class="action-btn delete material-symbols-outlined" title="Xóa hồ sơ" @click.stop>delete</button>
                                </div>
                            </td>
                        </tr>
                        <tr @click="openProfile('N-0144', 'Trần Minh Đức', 'tran.minh.duc@archive.org', 'Độc giả Phổ thông', 'Học viện Khoa học Xã hội', '0905 111 222')">
                            <td class="col-id">03</td>
                            <td class="col-id">N-0144</td>
                            <td class="col-name">Trần Minh Đức</td>
                            <td class="col-email">tran.minh.duc@archive.org</td>
                            <td><span class="type-badge">Độc giả Phổ thông</span></td>
                            <td class="col-id">Học viện Khoa học Xã hội</td>
                            <td class="col-phone">0905 111 222</td>
                            <td>
                                <div class="action-btns">
                                    <button class="action-btn material-symbols-outlined" title="Xem chi tiết" @click.stop="openProfile('N-0144', 'Trần Minh Đức', 'tran.minh.duc@archive.org', 'Độc giả Phổ thông', 'Học viện Khoa học Xã hội', '0905 111 222')">visibility</button>
                                    <button class="action-btn delete material-symbols-outlined" title="Xóa hồ sơ" @click.stop>delete</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="table-footer">
                <span class="pagination-info">Hiển thị 1-3 trong số 142 hồ sơ</span>
                <div class="pagination-controls">
                    <button class="page-arrow material-symbols-outlined" disabled>chevron_left</button>
                    <button class="page-arrow material-symbols-outlined">chevron_right</button>
                </div>
            </div>
        </div>

        <!-- Profile Detail Modal -->
        <div class="modal-overlay" :class="{ active: isModalOpen }" @click="closeProfile">
            <div class="modal-backdrop"></div>
            <div class="modal-content" @click.stop v-if="selectedProfile">
                <div class="modal-header">
                    <h3 class="modal-title">Hồ sơ chi tiết Độc giả</h3>
                    <button class="modal-close material-symbols-outlined" @click="closeProfile">close</button>
                </div>
                <div class="modal-body no-scrollbar">
                    <div class="profile-layout">
                        <div class="profile-avatar-wrapper">
                            <img class="profile-avatar" alt="Reader Avatar" :src="selectedProfile.avatar" />
                        </div>
                        <div class="profile-grid">
                            <div class="profile-item">
                                <span class="profile-label">MaND</span>
                                <span class="profile-val-id">{{ selectedProfile.id }}</span>
                            </div>
                            <div class="profile-item">
                                <span class="profile-label">Họ Tên</span>
                                <span class="profile-val-name">{{ selectedProfile.name }}</span>
                            </div>
                            <div class="profile-item">
                                <span class="profile-label">Email</span>
                                <span class="profile-val-email">{{ selectedProfile.email }}</span>
                            </div>
                            <div class="profile-item">
                                <span class="profile-label">Số điện thoại</span>
                                <span class="profile-val-text">{{ selectedProfile.phone }}</span>
                            </div>
                            <div class="profile-item full-width">
                                <span class="profile-label">Địa chỉ</span>
                                <span class="profile-val-text">{{ selectedProfile.address }}</span>
                            </div>
                            <div class="profile-item">
                                <span class="profile-label">Loại tài khoản</span>
                                <span class="profile-type-badge">{{ selectedProfile.type }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn-modal-close" @click="closeProfile">Quay lại Danh mục</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isModalOpen = ref(false);
const selectedProfile = ref(null);

const avatars = [
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&h=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&h=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?q=80&w=300&h=400&auto=format&fit=crop'
];

function openProfile(id, name, email, type, address, phone) {
    selectedProfile.value = {
        id, name, email, type, address, phone,
        avatar: avatars[Math.floor(Math.random() * avatars.length)]
    };
    isModalOpen.value = true;
    document.body.style.overflow = 'hidden';
}

function closeProfile() {
    isModalOpen.value = false;
    document.body.style.overflow = 'auto';
}
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

.container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding-bottom: 80px;
}
@media (min-width: 768px) { .container { padding-bottom: 0; } }

/* Page Header */
.page-header {
    display: flex;
    flex-direction: column;
    gap: 24px;
    border-bottom: 2px solid rgba(39, 19, 16, 0.1);
    padding-bottom: 24px;
    margin-bottom: 32px;
}
@media (min-width: 768px) {
    .page-header { flex-direction: row; align-items: flex-end; justify-content: space-between; }
}

.page-title {
    font-family: var(--font-playfair);
    font-size: 48px;
    font-weight: 700;
    color: var(--color-primary);
    letter-spacing: -0.02em;
    margin-bottom: 4px;
}
.page-subtitle {
    font-size: 18px;
    color: var(--color-on-surface-variant);
    font-style: italic;
}

.btn-filter {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 24px;
    border: 1px solid var(--color-outline);
    font-size: 14px;
    font-weight: 700;
    color: var(--color-on-surface);
    transition: all 0.1s;
}
.btn-filter:hover { background-color: var(--color-surface-container-high); }
.btn-filter:active { transform: translateY(1px); }

/* Table Area */
.table-container {
    background-color: var(--color-surface-container-lowest);
    border: 1px solid rgba(211, 195, 192, 0.3);
    box-shadow: 2px 2px 0px 0px rgba(62, 39, 35, 0.1);
    overflow: hidden;
    width: 100%;
}

.table-wrapper { overflow-x: auto; }

.data-table { width: 100%; border-collapse: collapse; text-align: left; }
.data-table th {
    background-color: var(--color-surface-container-high);
    color: var(--color-on-surface-variant);
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 16px;
    border-bottom: 1px solid var(--color-outline-variant);
}

.data-table td {
    padding: 24px 16px;
    border-bottom: 1px solid rgba(211, 195, 192, 0.2);
    font-size: 16px;
}
.data-table tr { transition: background-color 0.2s; cursor: pointer; }
.data-table tr:hover { background-color: rgba(239, 238, 234, 0.5); }

.col-id, .col-phone { color: var(--color-on-surface); }
.col-name { font-weight: 700; color: var(--color-primary); font-size: 14px; }
.col-email { font-size: 12px; font-style: italic; }

.type-badge {
    font-size: 12px;
    text-transform: uppercase;
    border-bottom: 1px solid rgba(131, 84, 37, 0.4);
    color: var(--color-secondary);
}

.action-btns { display: flex; justify-content: flex-end; gap: 16px; }
.action-btn { color: var(--color-on-surface-variant); transition: color 0.2s; }
.action-btn:hover { color: var(--color-primary); }
.action-btn.delete:hover { color: var(--color-error); }

.table-footer {
    padding: 16px;
    background-color: var(--color-surface-container-low);
    border-top: 1px solid rgba(211, 195, 192, 0.3);
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.pagination-info { font-size: 12px; color: var(--color-on-surface-variant); }
.pagination-controls { display: flex; gap: 8px; }
.page-arrow {
    padding: 8px;
    border: 1px solid rgba(211, 195, 192, 0.5);
    transition: background-color 0.2s;
}
.page-arrow:hover:not(:disabled) { background-color: #ffffff; }
.page-arrow:disabled { opacity: 0.3; cursor: not-allowed; }

/* Detail Modal */
.modal-overlay {
    position: fixed; inset: 0;
    background-color: rgba(39, 19, 16, 0.4);
    backdrop-filter: blur(4px);
    z-index: 50;
    display: none;
    align-items: center;
    justify-content: center;
    padding: 16px;
}
@media (min-width: 640px) { .modal-overlay { padding: 24px; } }
.modal-overlay.active { display: flex; }
.modal-backdrop { position: absolute; inset: 0; }

.modal-content {
    position: relative;
    background-color: var(--color-surface);
    background-image: url("https://www.transparenttextures.com/patterns/p6.png");
    border: 1px solid var(--color-outline-variant);
    box-shadow: 8px 8px 0px 0px rgba(62, 39, 35, 0.1);
    width: 100%;
    max-width: 672px;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.modal-header {
    padding: 24px;
    border-bottom: 1px solid rgba(211, 195, 192, 0.3);
    background-color: var(--color-surface-container-low);
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.modal-title { font-family: var(--font-playfair); font-size: 24px; font-weight: 600; color: var(--color-primary); font-style: italic; }
.modal-close { color: var(--color-on-surface-variant); transition: color 0.2s; }
.modal-close:hover { color: var(--color-primary); }

.modal-body { padding: 32px; overflow-y: auto; flex: 1; }

.profile-layout {
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-bottom: 32px;
}
@media (min-width: 768px) { .profile-layout { flex-direction: row; align-items: flex-start; } }

.profile-avatar-wrapper {
    width: 128px; height: 160px;
    flex-shrink: 0;
    border: 2px solid rgba(39, 19, 16, 0.2);
    padding: 4px;
    background-color: #ffffff;
    box-shadow: 2px 2px 0px 0px rgba(62, 39, 35, 0.1);
}
.profile-avatar { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%); }

.profile-grid {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 24px;
    column-gap: 16px;
}
@media (min-width: 640px) { .profile-grid { grid-template-columns: 1fr 1fr; } }

.profile-item { display: flex; flex-direction: column; gap: 4px; }
.profile-item.full-width { grid-column: 1 / -1; }

.profile-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-on-surface-variant); font-weight: 700; }

.profile-val-id { font-size: 18px; font-weight: 700; color: var(--color-primary); }
.profile-val-name { font-family: var(--font-playfair); font-size: 24px; color: var(--color-primary); font-style: italic; }
.profile-val-email { font-size: 16px; font-style: italic; color: var(--color-secondary); }
.profile-val-text { font-size: 16px; color: var(--color-on-surface); }

.profile-type-badge {
    display: inline-block;
    width: fit-content;
    padding: 4px 12px;
    background-color: var(--tertiary-fixed);
    color: var(--on-tertiary-fixed);
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: -0.05em;
    border: 1px solid rgba(60, 75, 58, 0.2);
}

.modal-footer {
    padding: 24px;
    border-top: 1px solid rgba(211, 195, 192, 0.3);
    background-color: var(--color-surface-container-low);
    display: flex;
    justify-content: flex-end;
}

.btn-modal-close {
    padding: 8px 32px;
    background-color: var(--color-primary);
    color: var(--color-on-primary);
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    box-shadow: 2px 2px 0px 0px rgba(62, 39, 35, 0.1);
    transition: all 0.1s;
}
.btn-modal-close:hover { background-color: var(--color-primary-container); }
.btn-modal-close:active { transform: translateY(1px); box-shadow: none; }
</style>
