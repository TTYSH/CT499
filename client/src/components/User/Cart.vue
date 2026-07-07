<template>
  <div v-if="isOpen" class="cart-modal-wrapper">
    <!-- Overlay -->
    <div class="backdrop-overlay" @click="$emit('close')"></div>
    
    <!-- Drawer / Modal -->
    <div class="drawer-container">
        <!-- Header -->
        <div class="drawer-header">
            <h2 class="drawer-title">Giỏ hàng</h2>
            <button class="btn-close" aria-label="Close drawer" @click="$emit('close')">
                <span class="material-symbols-outlined">close</span>
            </button>
        </div>

        <!-- Cart Items List -->
        <div class="drawer-body">
            <div class="items-list">
                <!-- Item 1 -->
                <div class="cart-item">
                    <div class="item-spine">
                        <div class="spine-shadow"></div>
                        <span class="spine-text">Vol I</span>
                    </div>
                    <div class="item-details">
                        <div class="item-info">
                            <h3 class="item-title">The Architecture of Happiness</h3>
                            <p class="item-author">Alain de Botton</p>
                            <div class="item-price">105.000đ</div>
                        </div>
                        
                        <div class="item-quantity">
                            <button class="qty-btn"><span class="material-symbols-outlined">remove</span></button>
                            <span class="qty-value">1</span>
                            <button class="qty-btn"><span class="material-symbols-outlined">add</span></button>
                        </div>
                        <div class="item-total">105.000đ</div>
                    </div>
                    <button class="btn-remove">
                        <span class="material-symbols-outlined" style="font-size: 18px;">delete</span>
                    </button>
                </div>
                <!-- Item 2 -->
                <div class="cart-item">
                    <div class="item-spine">
                        <div class="spine-shadow"></div>
                        <span class="spine-text">Vol II</span>
                    </div>
                    <div class="item-details">
                        <div class="item-info">
                            <h3 class="item-title">In Praise of Shadows</h3>
                            <p class="item-author">Jun'ichirō Tanizaki</p>
                            <div class="item-price">105.000đ</div>
                        </div>
                        <div class="item-quantity">
                            <button class="qty-btn"><span class="material-symbols-outlined">remove</span></button>
                            <span class="qty-value">1</span>
                            <button class="qty-btn"><span class="material-symbols-outlined">add</span></button>
                        </div>
                        <div class="item-total">105.000đ</div>
                    </div>
                    <button class="btn-remove">
                        <span class="material-symbols-outlined" style="font-size: 18px;">delete</span>
                    </button>
                </div>
                <!-- Item 3 -->
                <div class="cart-item">
                    <div class="item-spine">
                        <div class="spine-shadow"></div>
                        <span class="spine-text">Atlas</span>
                    </div>
                    <div class="item-details">
                        <div class="item-info">
                            <h3 class="item-title">A Pattern Language</h3>
                            <p class="item-author">Christopher Alexander</p>
                            <div class="item-price">105.000đ</div>
                        </div>
                        <div class="item-quantity">
                            <button class="qty-btn"><span class="material-symbols-outlined">remove</span></button>
                            <span class="qty-value">2</span>
                            <button class="qty-btn"><span class="material-symbols-outlined">add</span></button>
                        </div>
                        <div class="item-total">210.000đ</div>
                    </div>
                    <button class="btn-remove">
                        <span class="material-symbols-outlined" style="font-size: 18px;">delete</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="drawer-footer">
            <div class="footer-total">
                <span class="total-label">Tổng số lượng: <span class="total-value">3</span></span>
                <span class="total-label" style="margin-top: 4px;">Tổng tiền: <span class="total-value" style="color: crimson;">315.000đ</span></span>
            </div>
            <div class="footer-input-group">
    
            </div>
            <button class="btn-submit" @click="submitRequest">
                Yêu Cầu Mượn
                <span class="material-symbols-outlined" style="font-size: 18px;">arrow_forward</span>
            </button>
        </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['close']);

const submitRequest = () => {
    // You can handle submission logic here
    emit('close');
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Manrope:wght@200..800&display=swap');

.cart-modal-wrapper {
    position: fixed;
    inset: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Overlay & Background */
.backdrop-overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    z-index: 40;
    transition: opacity 0.3s;
}

/* Drawer / Modal */
.drawer-container {
    font-family: var(--font-merriweather);
    position: relative;
    width: 90%;
    max-width: 950px;
    max-height: 110vh;
    background-color: #fbf9f4;
    border: 1px solid #e8e2d6;
    border-radius: 5px;
    box-shadow: -2px 0 0 0 rgba(44, 46, 53, 0.05);
    z-index: 50;
    display: flex;
    flex-direction: column;
    background-image: 
        linear-gradient(to right, rgba(232, 226, 214, 0.1), rgba(232, 226, 214, 0.05)),
        repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(209, 201, 186, 0.02) 2px, rgba(209, 201, 186, 0.02) 4px);
}

/* Header */
.drawer-header {
    padding: 16px;
    border-bottom: 1px solid #e8e2d6;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-shrink: 0;
}
.drawer-title {
    font-family: var(--font-playfair);
    font-size: 32px;
    font-weight: 600;
    line-height: 1.3;
    color: #171920;
    margin-bottom: 8px;
}
.drawer-subtitle {
    font-size: 16px;
    color: #46464b;
    margin: 0;
}
.btn-close {
    color: #46464b;
    padding: 8px;
    transition: color 0.2s;
    background: none;
    border: none;
    cursor: pointer;
}
.btn-close:hover { color: #171920; }

/* Cart Items */
.drawer-body {
    flex: 1;
    overflow-y: auto;
    padding: 32px 24px;
}

.items-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.cart-item {
    display: flex;
    gap: 24px;
    align-items: center;
    padding: 16px;
    background: #ffffff;
    border: 1px solid #e8e2d6;
    border-radius: 5px;
    position: relative;
    box-shadow: 2px 2px 0px 0px rgba(62,39,35,0.05);
    transition: transform 0.2s;
}
.cart-item:hover { transform: translateY(-2px); }

.item-spine {
    width: 56px;
    height: 84px;
    background-color: #eae8e3;
    border: 1px solid #c7c6cb;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    box-shadow: inset 2px 0 4px rgba(0,0,0,0.05);
}
.spine-shadow {
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 4px;
    background: linear-gradient(to right, rgba(0,0,0,0.2), transparent);
}
.spine-text {
    font-family: 'EB Garamond', serif;
    font-size: 20px;
    font-weight: 500;
    color: rgba(70, 70, 75, 0.4);
    font-style: italic;
    transform: rotate(-90deg);
    white-space: nowrap;
}

.item-details { 
    flex: 1; 
    display: flex;
    flex-direction: column;
    gap: 12px;
}
@media (min-width: 768px) {
    .item-details {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
    }
}

.item-info { flex: 1; min-width: 0; }
.item-title {
    font-family: 'Manrope', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: #171920;
    margin: 0 0 4px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.item-author {
    font-size: 14px;
    color: #46464b;
    margin: 0;
}

.item-price, .item-total {
    font-size: 16px;
    font-weight: 600;
    color: crimson;
}
@media (max-width: 767px) {
    .item-price { display: none; }
}

.item-quantity {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #fbf9f4;
    padding: 4px;
    border-radius: 6px;
    border: 1px solid #e8e2d6;
}
.qty-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    background-color: #ffffff;
    border-radius: 4px;
    cursor: pointer;
    color: #46464b;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    transition: all 0.2s;
}
.qty-btn:hover {
    background-color: #f0f0f0;
    color: #171920;
}
.qty-btn .material-symbols-outlined {
    font-size: 16px;
}
.qty-value {
    font-size: 15px;
    font-weight: 600;
    color: #171920;
    min-width: 24px;
    text-align: center;
}

.btn-remove {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #46464b;
    padding: 8px;
    background: #fbf9f4;
    border: 1px solid #e8e2d6;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s;
    margin-left: 8px;
}
.btn-remove:hover { 
    background: #ffdad6;
    color: #93000a;
    border-color: #ffdad6;
}

/* Footer / CTA */
.drawer-footer {
    padding: 24px;
    border-top: 1px solid #e8e2d6;
    background-color: #fbf9f4;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 24px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}
@media (min-width: 768px) {
    .drawer-footer {
        flex-direction: row;
        align-items: flex-end;
        gap: 37px;
    }
}

.footer-total {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.total-label {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.05em;
    color: #46464b;
}
.total-value {
    font-size: 17px;
    font-weight: 500;
    color: #171920;
}

.footer-input-group {
    position: relative;
    width: 100%;
    max-width: 320px;
}
.input-date {
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid #171920;
    color: #171920;
    font-size: 16px;
    padding: 8px 0;
    transition: border-color 0.2s;
    outline: none;
}
.input-date:focus { border-bottom-color: #6e5c37; }
.input-date::placeholder { color: rgba(70, 70, 75, 0.5); }
.input-label {
    position: absolute;
    top: -16px; left: 0;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.03em;
    color: #46464b;
}

.btn-submit {
    width: 100%;
    max-width: 320px;
    background-color: #171920;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.05em;
    padding: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    transition: background-color 0.2s;
    border-radius: 5px;
    cursor: pointer;
}
.btn-submit:hover { background-color: #1b1a12; }
</style>
