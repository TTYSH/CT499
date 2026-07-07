<template>
    <div class="contact-page">
        <h1 class="page-title">Liên hệ</h1>
        
        <div class="contact-layout">
            <!-- LeftSide: Infomation and Map-->
            <div class="contact-info-section">
                <div class="info-card">
                    <h2 class="section-title">Thông tin liên hệ</h2>
                    
                    <ul class="info-list">
                        <li>
                            <span class="material-symbols-outlined icon">location_on</span>
                            <div>
                                <strong>Địa chỉ:</strong>
                                <p>Khu II, Đại học Cần Thơ, Đường 3/2, Ninh Kiều, Cần Thơ</p>
                            </div>
                        </li>
                        <li>
                            <span class="material-symbols-outlined icon">call</span>
                            <div>
                                <strong>Điện thoại:</strong>
                                <p>(0292) 3453467</p>
                            </div>
                        </li>
                        <li>
                            <span class="material-symbols-outlined icon">mail</span>
                            <div>
                                <strong>Email:</strong>
                                <p>bookworm@gmail.com</p>
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
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3928.8473407875617!2d105.767587!3d10.0294536!
                            3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0895a51d60719%3A0x9d76b0035f6d53d0!2zxJDhuqFpIGjhu41jIEPhuqduIFRoxqE!5e0!3m2!1
                            svi!2s!4v1783178041817!5m2!1svi!2s" 
                            width="600"
                            height="450" 
                            style="border:0;" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="strict-origin-when-cross-origin">
                        </iframe>
                    </div>
                </div>
            </div>

            <!-- RightSide: Feedback Form-->
            <div class="feedback-section">
                <h2 class="section-title">Ý kiến phản hồi</h2>
                
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
}

.page-title {
    font-family: var(--font-playfair);
    font-size: 40px;
    color: var(--color-primary);
    margin-bottom: 32px;
    border-bottom: 2px solid var(--color-surface-container);
    padding-bottom: 12px;
    text-align: left;
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

/* Information Section */
.info-card, .map-card, .feedback-section {
    background-color: var(--color-surface);
    border: 2px solid rgba(211, 195, 192, 0.4);
    border-radius: 5px;
    padding: 24px;
    /* box-shadow: 2px 2px 0px 0px rgba(62,39,35,0.15); */
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
    border-radius: 5px;
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
    border-radius: 5px;
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
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s, transform 0.1s;
    margin-top: 8px;
}

.submit-btn:hover:not(:disabled) {
    background-color: var(--color-primary-container);
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
