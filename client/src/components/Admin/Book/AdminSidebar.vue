<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import AdminProfileEdit from '../AdminProfileEdit.vue';

const router = useRouter();
const showProfileEdit = ref(false);

const handleLogout = () => {
    // Thực hiện đăng xuất (xóa token, v.v...)
    router.push('/');
};

const handleSaveProfile = (profileData) => {
    console.log('Saved profile:', profileData);
};
</script>

<template>
    <div>
        <!-- Sidebar Navigation -->
        <aside class="sidebar">
            <div class="sidebar-header">
                <h1 class="sidebar-title">BookWorm</h1>
            </div>
            <nav class="nav-list">
                <router-link to="/admin" class="nav-item" active-class="active" exact-active-class="active">
                    <span class="material-symbols-outlined">dashboard</span>
                    <span>Tổng quan</span>
                </router-link>
                <router-link to="/admin/books" class="nav-item" active-class="active">
                    <span class="material-symbols-outlined">menu_book</span>
                    <span>Quản lý kho sách</span>
                </router-link>
                <router-link to="/admin/requests" class="nav-item" active-class="active">
                    <span class="material-symbols-outlined">pending_actions</span>
                    <span>Quản lý yêu cầu</span>
                </router-link>
                <router-link to="/admin/ledger" class="nav-item" active-class="active">
                    <span class="material-symbols-outlined">history_edu</span>
                    <span>Quản lý mượn - trả</span>
                </router-link>
                <router-link to="/admin/readers" class="nav-item" active-class="active">
                    <span class="material-symbols-outlined">group</span>
                    <span>Quản lý độc giả</span>
                </router-link>
                <router-link to="/admin/authors" class="nav-item" active-class="active">
                    <span class="material-symbols-outlined">person</span>
                    <span>Quản lý tác giả</span>
                </router-link>
            </nav>

            <div class="sidebar-footer">
                <div class="profile-section" @click="showProfileEdit = true">
                    <span class="material-symbols-outlined profile-icon">account_circle</span>
                    <div class="profile-info">
                        <span class="profile-name">Quản trị viên</span>
                        <span class="profile-role">Trần Minh Thư</span>
                    </div>
                    <button class="logout-btn material-symbols-outlined" @click.stop="handleLogout" title="Đăng xuất">logout</button>
                </div>
            </div>
        </aside>

        <!-- Mobile Navigation -->
        <nav class="mobile-nav custom-scrollbar">
            <router-link to="/admin" class="mobile-nav-item" active-class="active" exact-active-class="active">
                <span class="material-symbols-outlined">dashboard</span>
                <span class="mobile-nav-label">Tổng quan</span>
            </router-link>
            <router-link to="/admin/books" class="mobile-nav-item" active-class="active">
                <span class="material-symbols-outlined">menu_book</span>
                <span class="mobile-nav-label">Quản lý kho sách</span>
            </router-link>
            <router-link to="/admin/requests" class="mobile-nav-item" active-class="active">
                <span class="material-symbols-outlined">pending_actions</span>
                <span class="mobile-nav-label">Quản lý yêu cầu</span>
            </router-link>
            <router-link to="/admin/ledger" class="mobile-nav-item" active-class="active">
                <span class="material-symbols-outlined">history_edu</span>
                <span class="mobile-nav-label">Quản lý mượn - trả</span>
            </router-link>
            <router-link to="/admin/readers" class="mobile-nav-item" active-class="active">
                <span class="material-symbols-outlined">group</span>
                <span class="mobile-nav-label">Quản lý độc giả</span>
            </router-link>
            <router-link to="/admin/authors" class="mobile-nav-item" active-class="active">
                <span class="material-symbols-outlined">person</span>
                <span class="mobile-nav-label">Quản lý tác giả</span>
            </router-link>
            <div class="mobile-nav-item" @click="showProfileEdit = true" style="cursor: pointer;">
                <span class="material-symbols-outlined">account_circle</span>
                <span class="mobile-nav-label">Profile</span>
            </div>
            <div class="mobile-nav-item" @click="handleLogout" style="cursor: pointer;">
                <span class="material-symbols-outlined">logout</span>
                <span class="mobile-nav-label">Thoát</span>
            </div>
        </nav>

        <AdminProfileEdit 
            :show="showProfileEdit" 
            @update:show="showProfileEdit = $event"
            @save="handleSaveProfile" 
        />
    </div>
</template>

<style scoped>
/* Sidebar Layout */
.sidebar {
    display: none;
    flex-direction: column;
    width: 256px;
    height: 100vh;
    position: sticky;
    top: 0;
    background-color: var(--color-surface);
    border-right: 1px solid rgba(211, 195, 192, 0.5);
    box-shadow: 2px 0px 0px 0px rgba(62, 39, 35, 0.05);
    z-index: 20;
}

@media (min-width: 768px) { .sidebar { display: flex; } }

.sidebar-header {
    padding: 24px;
}
.sidebar-title {
    font-family: var(--font-playfair);
    font-size: 30px;
    font-weight: bolder;
    color: var(--color-primary);
    font-style: italic;
}

.nav-list {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 8px 16px;
    gap: 8px;
}

.nav-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    color: var(--color-on-surface-variant);
    font-size: 14px;
    font-weight: 700;
    border-radius: 4px;
    transition: all 0.2s;
}
.nav-item:hover {
    background-color: var(--color-surface-container-high);
    transform: translateX(4px);
}
.nav-item.active {
    background-color: var(--color-secondary-container);
    color: var(--color-on-secondary-container);
    border-left: 4px solid var(--color-secondary);
}

.sidebar-footer {
    margin-top: auto;
    padding: 16px;
    border-top: 1px solid rgba(211, 195, 192, 0.3);
}

.profile-section {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.profile-section:hover {
    background-color: var(--color-surface-container-high, #f0f0f0);
}

.profile-icon {
    font-size: 32px;
    color: var(--color-primary);
}

.profile-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.profile-name {
    font-size: 14px;
    font-weight: 700;
    color: var(--color-on-surface);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.profile-role {
    font-size: 12px;
    color: var(--color-on-surface-variant);
}

.logout-btn {
    background: none;
    border: none;
    color: var(--color-error, #B3261E);
    cursor: pointer;
    padding: 8px;
    border-radius: 50%;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
}

.logout-btn:hover {
    background-color: rgba(179, 38, 30, 0.1);
}

/* Mobile Bottom Nav */
.mobile-nav {
    display: flex;
    position: fixed;
    bottom: 0; left: 0; right: 0;
    background-color: var(--color-surface);
    border-top: 1px solid rgba(211, 195, 192, 0.3);
    box-shadow: 0px -2px 8px rgba(0,0,0,0.05);
    justify-content: space-around;
    padding: 12px 8px;
    z-index: 40;
}
@media (min-width: 768px) { .mobile-nav { display: none; } }
.mobile-nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    color: var(--color-on-surface-variant);
}
.mobile-nav-item.active { 
    color: var(--color-primary); 
}
.mobile-nav-label { 
    font-size: 10px; 
    font-weight: 700; 
    text-transform: uppercase; 
}

.sticker-shadow { 
    box-shadow: 2px 2px 0px 0px rgba(62, 39, 35, 0.15); 
}
</style>