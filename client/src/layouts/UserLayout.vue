<template>
    <div class="user-layout">
        <TopNavBar @open-cart="isCartOpen = true" />
        <main class="main-content">
            <RouterView />
        </main>
        <Footer />
        <Cart :isOpen="isCartOpen" @close="isCartOpen = false" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import TopNavBar from '../components/TopNavBar.vue';
import Footer from '../components/Footer.vue';
import Cart from '../components/User/Cart.vue';

const isCartOpen = ref(false);
</script>

<style scoped>
.user-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.main-content {
    flex: 1;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 48px var(--margin-mobile);
    width: 100%;
}
@media (min-width: 768px) { .main-content { padding: 40px var(--margin-desktop); } }
</style>