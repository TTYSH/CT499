<template>
  <div v-if="isOpen" class="cart-modal-wrapper">
    <!-- Overlay -->
    <div class="backdrop-overlay" @click="$emit('close')"></div>
    
    <!-- Drawer / Modal -->
    <div class="drawer-container">
        <!-- Header -->
        <div class="drawer-header">
            <div>
                <h2 class="drawer-title">Borrowing Request</h2>
                <p class="drawer-subtitle">Review the items selected for your reading room session.</p>
            </div>
            <button class="btn-close" aria-label="Close drawer" @click="$emit('close')">
                <span class="material-symbols-outlined">close</span>
            </button>
        </div>

        <!-- Cart Items List -->
        <div class="drawer-body">
            <div class="items-grid">
                <!-- Item 1 -->
                <div class="cart-item">
                    <div class="item-spine">
                        <div class="spine-shadow"></div>
                        <span class="spine-text">Vol I</span>
                    </div>
                    <div class="item-details">
                        <h3 class="item-title">The Architecture of Happiness</h3>
                        <p class="item-author">Alain de Botton</p>
                        <div class="item-badge">Available in Reading Room A</div>
                    </div>
                    <button class="btn-remove" aria-label="Remove item">
                        <span class="material-symbols-outlined" style="font-size: 14px;">remove</span>
                    </button>
                </div>
                <!-- Item 2 -->
                <div class="cart-item">
                    <div class="item-spine">
                        <div class="spine-shadow"></div>
                        <span class="spine-text">Vol II</span>
                    </div>
                    <div class="item-details">
                        <h3 class="item-title">In Praise of Shadows</h3>
                        <p class="item-author">Jun'ichirō Tanizaki</p>
                        <div class="item-badge">Available in Reading Room B</div>
                    </div>
                    <button class="btn-remove" aria-label="Remove item">
                        <span class="material-symbols-outlined" style="font-size: 14px;">remove</span>
                    </button>
                </div>
                <!-- Item 3 -->
                <div class="cart-item">
                    <div class="item-spine">
                        <div class="spine-shadow"></div>
                        <span class="spine-text">Atlas</span>
                    </div>
                    <div class="item-details">
                        <h3 class="item-title">A Pattern Language</h3>
                        <p class="item-author">Christopher Alexander</p>
                        <div class="item-badge">Restricted Access</div>
                    </div>
                    <button class="btn-remove" aria-label="Remove item">
                        <span class="material-symbols-outlined" style="font-size: 14px;">remove</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Footer / CTA -->
        <div class="drawer-footer">
            <div class="footer-total">
                <span class="total-label">Total Volumes</span>
                <span class="total-value">3</span>
            </div>
            <div class="footer-input-group">
                <label class="input-label" for="date-input">Session Date</label>
                <input class="input-date" id="date-input" placeholder="Proposed Date of Visit" type="text">
            </div>
            <button class="btn-submit" @click="submitRequest">
                Submit Request
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
    position: relative;
    width: 90%;
    max-width: 896px; /* max-w-4xl */
    max-height: 90vh;
    background-color: #fbf9f4;
    border: 1px solid #e8e2d6;
    border-radius: 8px;
    box-shadow: -2px 0 0 0 rgba(44, 46, 53, 0.05);
    z-index: 50;
    display: flex;
    flex-direction: column;
    font-family: 'Manrope', sans-serif;
    
    /* Texture */
    background-image: 
        linear-gradient(to right, rgba(232, 226, 214, 0.1), rgba(232, 226, 214, 0.05)),
        repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(209, 201, 186, 0.02) 2px, rgba(209, 201, 186, 0.02) 4px);
}

/* Header */
.drawer-header {
    padding: 24px;
    border-bottom: 1px solid #e8e2d6;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-shrink: 0;
}
.drawer-title {
    font-family: 'EB Garamond', serif;
    font-size: 32px;
    font-weight: 500;
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
.btn-close .material-symbols-outlined { font-variation-settings: 'wght' 300; }

/* Cart Items */
.drawer-body {
    flex: 1;
    overflow-y: auto;
    padding: 32px 24px;
}

.items-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
}
@media (min-width: 768px) {
    .items-grid {
        grid-template-columns: 1fr 1fr;
        column-gap: 48px;
    }
}

.cart-item {
    display: flex;
    gap: 24px;
    align-items: flex-start;
    padding-bottom: 24px;
    border-bottom: 1px solid #e8e2d6;
    position: relative;
}
.cart-item:hover .btn-remove { opacity: 1; color: #ba1a1a; }

.item-spine {
    width: 64px;
    height: 96px;
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
    font-size: 24px;
    font-weight: 500;
    color: rgba(70, 70, 75, 0.3);
    font-style: italic;
    transform: rotate(-90deg);
    transform-origin: center;
    white-space: nowrap;
}

.item-details { flex: 1; min-width: 0; padding-top: 4px; }
.item-title {
    font-family: 'Manrope', sans-serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.05em;
    color: #171920;
    margin: 0 0 4px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.item-author {
    font-size: 16px;
    color: #46464b;
    margin: 0 0 12px 0;
}
.item-badge {
    display: inline-flex;
    align-items: center;
    padding: 4px 8px;
    border: 1px solid #6e5c37;
    color: #6e5c37;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.03em;
}

.btn-remove {
    position: absolute;
    top: 0; right: 0;
    color: #46464b;
    opacity: 0.5;
    padding: 8px;
    transition: all 0.2s;
    background: none;
    border: none;
    cursor: pointer;
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
        gap: 48px;
    }
}

.footer-total {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.total-label {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.05em;
    color: #46464b;
}
.total-value {
    font-family: 'EB Garamond', serif;
    font-size: 24px;
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
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.05em;
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    transition: background-color 0.2s;
    border: none;
    cursor: pointer;
}
.btn-submit:hover { background-color: #1b1a12; }
</style>
