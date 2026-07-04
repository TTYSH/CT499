<script setup>
import { ref, onMounted, nextTick } from 'vue'

const activeTab = ref('signin')
const tabSignInRef = ref(null)
const tabRegisterRef = ref(null)
const indicatorStyle = ref({
  left: '0px',
  width: '0px'
})

const updateIndicator = () => {
  if (activeTab.value === 'signin') {
    if (tabSignInRef.value) {
      indicatorStyle.value = {
        left: `${tabSignInRef.value.offsetLeft}px`,
        width: `${tabSignInRef.value.offsetWidth}px`
      }
    }
  } else {
    if (tabRegisterRef.value) {
      indicatorStyle.value = {
        left: `${tabRegisterRef.value.offsetLeft}px`,
        width: `${tabRegisterRef.value.offsetWidth}px`
      }
    }
  }
}

const switchTab = async (tab) => {
  activeTab.value = tab
  await nextTick()
  updateIndicator()
}

onMounted(() => {
  updateIndicator()
})
</script>

<template>
  <div class="login-wrapper">
    <!-- Main Container -->
    <main class="main-container">
        <!-- Left Side -->
        <div class="left-side">
            <div class="bg-image" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBxXaeAnEO6oWuAmoQYYUywwfHi0bqn6WS3SSXMB9gvjGch3c6mkPafYxeQ5gch9xZsHyVAu9lGQoHgfrJDwcqoeaMnF2EuDDDCKiTvnkAp5CH1KvQar9VK9n5UVSZ6tIw1OIwo2lxs8sfRtaBDXix1XvFR_xd3qVOz8ZsYpklccwAH3zb3mKHIDjuSlqsoBtaaIRV-YdOpb0ItxLDvdh23d_LmJcmS8z4Rw9bMiDjFRDMOCaP407AxkMKfc3Q7Bk4DAkVhZDrkuIWl');">
            </div>
            <!-- Overlay Text/Logo -->
            <div class="overlay-card">
                <span class="material-symbols-outlined overlay-icon">menu_book</span>
                <h1 class="font-display-lg overlay-title">BookWorm</h1>
                <p class="font-body-md text-on-surface-variant">Một bộ sưu tập tri thức được tuyển chọn, lưu giữ cho những tâm hồn thích suy ngẫm.</p>
            </div>
        </div>
        
        <!-- Right Side -->
        <div class="right-side">
            <!-- Mobile Header -->
            <div class="mobile-header">
                <span class="material-symbols-outlined mobile-icon">menu_book</span>
                <h1 class="font-display-lg-mobile text-primary">BookWorm</h1>
            </div>
            
            <!-- Tab Navigation -->
            <div class="tab-nav">
                <button ref="tabSignInRef" class="tab-btn font-headline-sm" :class="activeTab === 'signin' ? 'text-primary' : 'text-on-surface-variant'" @click="switchTab('signin')">
                  Đăng nhập
                </button>
                <button ref="tabRegisterRef" class="tab-btn font-headline-sm" :class="activeTab === 'register' ? 'text-primary' : 'text-on-surface-variant'" @click="switchTab('register')">
                  Đăng ký
                </button>
                <!-- Active Indicator Line -->
                <div class="tab-indicator" :style="indicatorStyle"></div>
            </div>
            
            <!-- Form Container -->
            <div class="form-container">
                <!-- Sign In Form -->
                <form class="form-panel" :class="activeTab === 'signin' ? 'form-active' : 'form-inactive-left'"@submit.prevent>
                    <div class="form-group-container">
                        <div>
                            <label class="form-label font-label-md text-on-surface-variant">Email</label>
                            <input class="ledger-input font-body-md text-primary" placeholder="Email" required type="email"/>
                        </div>
                        <div>
                            <label class="form-label font-label-md text-on-surface-variant">Mật khẩu</label>
                            <div class="password-wrapper">
                                <input class="ledger-input font-body-md text-primary pr-10" placeholder="Mật khẩu" required type="password"/>
                                <button type="button" class="eye-slash">
                                    <span class="material-symbols-outlined"> visibility_off </span>
                                </button>
                            </div>
                            <div class="forgot-link-container">
                                <a class="forgot-link font-label-sm" href="#">Quên mật khẩu?</a>
                            </div>
                        </div>
                        <button class="btn-primary font-label-md" type="submit">Vào thư viện</button>
                    </div>
                </form>
                
                <!-- Register Form -->
                <form class="form-panel" :class="activeTab === 'register' ? 'form-active' : 'form-inactive-right'" @submit.prevent>
                    <div class="form-group-container-register">
                        <div>
                            <label class="form-label font-label-md text-on-surface-variant">Họ và tên</label>
                            <input class="ledger-input font-body-md text-primary" placeholder="Họ và tên" required type="text"/>
                        </div>
                        <div>
                            <label class="form-label font-label-md text-on-surface-variant">Email</label>
                            <input class="ledger-input font-body-md text-primary" placeholder="Email" required type="email"/>
                        </div>
                        <div>
                            <label class="form-label font-label-md text-on-surface-variant">Mật khẩu</label>
                            <div class="password-wrapper">
                                <input class="ledger-input font-body-md text-primary pr-10" placeholder="Mật khẩu" required type="password"/>
                                <button type="button" class="eye-slash">
                                    <span class="material-symbols-outlined"> visibility_off </span>
                                </button>
                            </div>
                        </div>
                        <div>
                            <label class="form-label font-label-md text-on-surface-variant">Xác nhận mật khẩu</label>
                            <div class="password-wrapper">
                                <input class="ledger-input font-body-md text-primary pr-10" placeholder="Xác nhận mật khẩu" required type="password"/>
                                <button type="button" class="eye-slash">
                                    <span class="material-symbols-outlined"> visibility_off </span>
                                </button>
                            </div>
                        </div>
                        <button class="btn-secondary font-label-md" type="submit">Đăng ký thành viên</button>
                    </div>
                </form>
            </div>
            
            <!-- Footer Note -->
            <div class="footer-note">
                <p class="font-label-sm text-on-surface-variant">Bằng việc tiếp tục, bạn đồng ý với <a class="footer-link" href="#">Nội quy của thư viện</a>.</p>
            </div>
        </div>
    </main>
  </div>
</template>

<style scoped>
.login-wrapper {
    background-color: var(--color-surface);
    color: var(--color-primary);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    font-family: var(--font-merriweather);
    box-sizing: border-box;
}

.login-wrapper *, .login-wrapper *::before, .login-wrapper *::after {
    box-sizing: inherit;
}

.login-wrapper ::selection {
    background-color: var(--color-secondary-container);
    color: var(--color-on-secondary-container);
}

/* Typography */
.font-display-lg {
    font-family: var(--font-playfair);
    font-size: 48px;
    line-height: 1.1;
    letter-spacing: -0.02em;
    font-weight: 500;
}
.font-display-lg-mobile {
    font-family: var(--font-playfair);
    font-size: 36px;
    line-height: 1.2;
    font-style: italic;
    font-weight: bolder;
}
.font-headline-sm {
    font-family: var(--font-merriweather);
    font-size: 22px;
    line-height: 1.4;
    font-weight: 500;
}
.font-body-md {
    font-family: var(--font-merriweather);
    font-size: 16px;
    line-height: 1.6;
    font-weight: 400;
}
.font-label-md {
    font-family: var(--font-merriweather);
    font-size: 13px;
    line-height: 1.2;
    letter-spacing: 0.05em;
    font-weight: 600;
}
.font-label-sm {
    font-family: var(--font-merriweather);
    font-size: 12px;
    line-height: 1.2;
    letter-spacing: 0.03em;
    font-weight: 500;
}
.text-primary { 
    color: var(--color-primary);
}
.text-on-surface-variant { 
    color: var(--color-on-surface-variant); 
}

/* Layout */
.main-container {
    width: 100%;
    max-width: 1000px;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    background-color: var(--color-surface);
    border-radius: 10px;
}

/* Left Side */
.left-side {
    display: none;
}

/* Right Side */
.right-side {
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
}

/* Desktop Responsive */
@media (min-width: 768px) {
    .login-wrapper {
        padding: 0;
    }
    .main-container {
        flex-direction: row;
        border: 1px solid var(--color-outline-variant);
    }
    .left-side {
        display: flex;
        width: 50%;
        position: relative;
        background-color: var(--color-surface-variant);
        align-items: center;
        justify-content: center;
        border-right: 1px solid var(--color-outline-variant);
        overflow: hidden;
    }
    .right-side {
        width: 50%;
        padding: 4rem;
    }
    .mobile-header {
        display: none;
    }
    .footer-note {
        text-align: center;
    }
}

/* Components Left Side */
.bg-image {
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background-size: cover;
    background-position: center;
    opacity: 0.8;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    mix-blend-mode: multiply;
}
.overlay-card {
    position: relative;
    z-index: 10;
    padding: 3rem;
    text-align: center;
    color: var(--color-primary);
    background-color: rgba(251, 249, 244, 0.8);
    backdrop-filter: blur(4px);
    border: 1px solid var(--color-outline-variant);
    border-radius: 10px;
    margin: 2rem;
    max-width: 24rem;
}
.overlay-icon {
    font-size: 2.25rem;
    line-height: 2.5rem;
    margin-bottom: 1rem;
}
.overlay-title { 
    margin-bottom: 1rem; 
    font-weight: bolder;
    font-style: italic;
}

/* Mobile Header */
.mobile-header {
    text-align: center;
    margin-bottom: 2.5rem;
}
.mobile-icon {
    font-size: 1.875rem;
    line-height: 2.25rem;
    margin-bottom: 0.5rem;
    color: var(--color-primary);
}

/* Tabs */
.tab-nav {
    display: flex;
    gap: 2rem;
    justify-content: center;
    margin-bottom: 3rem;
    border-bottom: 1px solid var(--color-outline-variant);
    padding-bottom: 0.5rem;
    position: relative;
}
.tab-btn {
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.3s;
    padding: 0;
}
.tab-btn:focus { outline: none; }
.tab-indicator {
    position: absolute;
    bottom: -1px;
    left: 0;
    height: 2px;
    background-color: var(--color-primary);
    transition: all 0.3s;
    width: 70px;
}

/* Forms Area */
.form-container {
    position: relative;
    width: 100%;
    height: 350px;
    overflow: hidden;
}
.form-panel {
    position: absolute;
    top: 0; 
    left: 0; 
    width: 100%;
    transition: transform 0.5s, opacity 0.5s;
}
.form-active {
    transform: translateX(0);
    opacity: 1;
    pointer-events: auto;
}
.form-inactive-right {
    transform: translateX(100%);
    opacity: 0;
    pointer-events: none;
}
.form-inactive-left {
    transform: translateX(-100%);
    opacity: 0;
    pointer-events: none;
}

.form-group-container { 
    display: flex; 
    flex-direction: column; 
    gap: 2rem; 
}
.form-group-container-register { 
    display: flex; 
    flex-direction: column; 
    gap: 10px; 
}

.form-label {
    display: block;
    margin-bottom: 0.25rem;
    text-transform: uppercase;
}

/* Inputs */
.ledger-input {
    border: 1px solid var(--color-primary);
    border-radius: 4px;
    background: transparent;
    padding: 8px;
    width: 100%;
    transition: border-color 0.3s ease;
    font-family: inherit;
}
.ledger-input:focus {
    outline: none;
    box-shadow: none;
}
.ledger-input::placeholder {
    color: var(--color-outline-variant);
    font-size: 14px;
}

.forgot-link-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 0.5rem;
}
.forgot-link, .footer-link {
    font-weight: bold;
    text-underline-offset: 4px;
    text-decoration-thickness: 1px;
    color: var(--color-on-surface-variant);
    transition: color 0.3s;
}
.forgot-link:hover, .footer-link:hover {
    color: var(--color-primary);
    text-decoration: underline;
}

.password-wrapper {
    position: relative;
    width: 100%;
}

.eye-slash {
    padding-right: 2.5rem;
    position: absolute;
    right: 0.7rem;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.eye-slash > span {
    color: var(--color-on-surface-variant);
    font-size: 20px;
    transition: color 0.3s;
}

.eye-slash:hover > span {
    color: var(--color-primary);
}
/* Buttons */
.btn-primary {
    width: 100%;
    background-color: var(--color-primary);
    color: var(--color-on-primary);
    padding: 0.75rem 0;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-top: 1rem;
    transition: background-color 0.3s;
    border-radius: 4px;
    cursor: pointer;
}
.btn-primary:hover {
    background-color: var(--color-primary-container);
}
.btn-secondary {
    width: 100%;
    background-color: var(--color-primary);
    color: var(--color-on-primary);
    border-radius: 4px;
    padding: 0.75rem 0;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-top: 0.5rem;
    transition: background-color 0.3s;
    cursor: pointer;
}
.btn-secondary:hover {
    background-color: var(--color-primary-container);
}

/* Footer */
.footer-note {
    margin-top: 2rem;
    text-align: center;
}
@media (min-width: 768px) {
    .footer-note {
        text-align: center;
    }
}
</style>
