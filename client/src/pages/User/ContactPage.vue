<template>
    <div class="contact-page">
        <h1 class="page-title">Liên hệ & Góp ý</h1>
        
        <div class="contact-layout">
            <!-- Cột trái: Thông tin và Bản đồ -->
            <div class="contact-info-section">
                <div class="info-card">
                    <h2 class="section-title">Thông tin liên lạc</h2>
                    <p class="section-desc">Chúng tôi luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của bạn.</p>
                    
                    <ul class="info-list">
                        <li>
                            <span class="material-symbols-outlined icon">location_on</span>
                            <div>
                                <strong>Địa chỉ:</strong>
                                <p>123 Đường Sách, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh</p>
                            </div>
                        </li>
                        <li>
                            <span class="material-symbols-outlined icon">call</span>
                            <div>
                                <strong>Điện thoại:</strong>
                                <p>(0123) 456 789 - (0987) 654 321</p>
                            </div>
                        </li>
                        <li>
                            <span class="material-symbols-outlined icon">mail</span>
                            <div>
                                <strong>Email:</strong>
                                <p>contact@bookworm.com</p>
                            </div>
                        </li>
                        <li>
                            <span class="material-symbols-outlined icon">schedule</span>
                            <div>
                                <strong>Giờ làm việc:</strong>
                                <p>Thứ 2 - Chủ Nhật: 8:00 - 22:00</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="map-card">
                    <h2 class="section-title">Bản đồ</h2>
                    <div class="map-container">
                        <!-- Nhúng Google Map -->
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3919.3175402636253!2d106.69758091533405!3d10.779269392318712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f48a3b04c83%3A0x705c742c0587271!2zRHXhu51uZyBTw6FjaCBUUC5IQ00!5e0!3m2!1svi!2s!4v1689564875631!5m2!1svi!2s" 
                            width="100%" 
                            height="100%" 
                            style="border:0;" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>

            <!-- Cột phải: Form đánh giá -->
            <div class="feedback-section">
                <h2 class="section-title">Gửi đánh giá / Góp ý</h2>
                <p class="section-desc">Ý kiến của bạn giúp BookWorm ngày càng hoàn thiện hơn.</p>
                
                <form class="feedback-form" @submit.prevent="submitFeedback">
                    <div class="form-group">
                        <label for="name">Họ và tên *</label>
                        <input type="text" id="name" v-model="form.name" required placeholder="Nhập họ và tên của bạn">
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email *</label>
                        <input type="email" id="email" v-model="form.email" required placeholder="Nhập địa chỉ email">
                    </div>
                    
                    <div class="form-group">
                        <label for="subject">Chủ đề</label>
                        <select id="subject" v-model="form.subject">
                            <option value="feedback">Góp ý dịch vụ</option>
                            <option value="support">Hỗ trợ kỹ thuật</option>
                            <option value="book_request">Yêu cầu sách mới</option>
                            <option value="other">Khác</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="message">Nội dung *</label>
                        <textarea id="message" v-model="form.message" rows="6" required placeholder="Nhập nội dung chi tiết..."></textarea>
                    </div>
                    
                    <button type="submit" class="submit-btn" :disabled="isSubmitting">
                        <span class="material-symbols-outlined" v-if="!isSubmitting">send</span>
                        <span class="material-symbols-outlined" v-else>hourglass_empty</span>
                        {{ isSubmitting ? 'Đang gửi...' : 'Gửi thông điệp' }}
                    </button>
                    
                    <div v-if="successMsg" class="success-msg">
                        <span class="material-symbols-outlined">check_circle</span>
                        {{ successMsg }}
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
    name: '',
    email: '',
    subject: 'feedback',
    message: ''
});

const successMsg = ref('');
const isSubmitting = ref(false);

const submitFeedback = () => {
    isSubmitting.value = true;
    successMsg.value = '';
    // Giả lập gửi form
    setTimeout(() => {
        isSubmitting.value = false;
        successMsg.value = 'Cảm ơn bạn đã gửi đánh giá! Chúng tôi sẽ ghi nhận và phản hồi sớm nhất có thể.';
        form.value = {
            name: '',
            email: '',
            subject: 'feedback',
            message: ''
        };
        setTimeout(() => {
            successMsg.value = '';
        }, 5000);
    }, 1000);
};
</script>

<style scoped>
.contact-page {
    padding: 24px 0;
    animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

.page-title {
    font-family: var(--font-playfair);
    font-size: 36px;
    color: var(--color-primary);
    margin-bottom: 32px;
    border-bottom: 2px solid var(--color-surface-container);
    padding-bottom: 12px;
    text-align: center;
}

.contact-layout {
    display: flex;
    flex-direction: column;
    gap: 32px;
}

@media (min-width: 992px) {
    .contact-layout {
        flex-direction: row;
        align-items: flex-start;
        gap: 40px;
    }
    .contact-info-section {
        flex: 1;
        position: sticky;
        top: 100px;
    }
    .feedback-section {
        flex: 1.2;
    }
}

.section-title {
    font-family: var(--font-playfair);
    font-size: 24px;
    color: var(--color-primary);
    margin-bottom: 8px;
}

.section-desc {
    color: var(--color-on-surface-variant);
    margin-bottom: 24px;
    font-size: 15px;
}

/* Cột thông tin */
.info-card, .map-card, .feedback-section {
    background-color: var(--color-surface);
    border: 1px solid rgba(211, 195, 192, 0.4);
    border-radius: 12px;
    padding: 24px;
    box-shadow: 4px 4px 0px 0px rgba(62, 39, 35, 0.05);
    margin-bottom: 24px;
}

.map-card {
    padding: 16px;
}

.info-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.info-list li {
    display: flex;
    gap: 16px;
    align-items: flex-start;
}

.info-list .icon {
    color: var(--color-secondary);
    font-size: 28px;
    background-color: var(--color-surface-container-low);
    padding: 10px;
    border-radius: 50%;
    transition: transform 0.3s ease;
}

.info-list li:hover .icon {
    transform: scale(1.1);
    background-color: var(--color-secondary);
    color: white;
}

.info-list strong {
    display: block;
    color: var(--color-on-surface);
    margin-bottom: 4px;
    font-size: 15px;
}

.info-list p {
    margin: 0;
    color: var(--color-on-surface-variant);
    font-size: 14px;
    line-height: 1.5;
}

/* Bản đồ */
.map-container {
    width: 100%;
    height: 320px;
    border-radius: 8px;
    overflow: hidden;
    background-color: #f0f0f0;
}

/* Form phản hồi */
.feedback-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.form-group label {
    font-weight: 600;
    font-size: 14px;
    color: var(--color-on-surface);
}

.form-group input, 
.form-group select, 
.form-group textarea {
    padding: 12px 16px;
    border: 1px solid var(--color-outline);
    border-radius: 8px;
    font-size: 15px;
    font-family: inherit;
    background-color: var(--color-surface);
    color: var(--color-on-surface);
    transition: all 0.2s ease;
}

.form-group input:focus, 
.form-group select:focus, 
.form-group textarea:focus {
    outline: none;
    border-color: var(--color-secondary);
    box-shadow: 0 0 0 3px rgba(161, 102, 94, 0.1);
}

.submit-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: var(--color-primary);
    color: white;
    border: none;
    padding: 14px 24px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s, transform 0.1s;
    margin-top: 8px;
}

.submit-btn:hover:not(:disabled) {
    background-color: var(--color-secondary);
}

.submit-btn:active:not(:disabled) {
    transform: scale(0.98);
}

.submit-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

.success-msg {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 16px;
    padding: 12px 16px;
    background-color: #e8f5e9;
    color: #2e7d32;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    animation: fadeIn 0.3s ease-out;
}
</style>
