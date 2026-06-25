<template>
    <div style="display: flex; min-height: 100vh; width: 100%;">
        <AdminSidebar />
        
        <div class="main-wrapper">
            <AdminHeader />
            
            <main class="page-content">
                <RouterView />
            </main>
        </div>
    </div>
</template>

<script setup>
import AdminSidebar from '../components/Admin/Book/AdminSidebar.vue'
import AdminHeader from '../components/Admin/Book/AdminHeader.vue'
</script>

<style scoped>
/* Main Content wrapper styles */
.main-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 0;
}

.page-content {
    padding: var(--margin-mobile);
    max-width: var(--max-width);
    margin: 0 auto;
    width: 100%;
    padding-bottom: 80px; /* Space for mobile nav */
}
@media (min-width: 768px) {
    .page-content { padding: var(--margin-desktop); padding-bottom: var(--margin-desktop); }
}
</style>
