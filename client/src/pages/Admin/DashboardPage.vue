<template>
    <div class="dashboard-container">
        <section style="margin-bottom: 48px;">
            <div class="overview-header">
                <div>
                    <h3 class="overview-title">Báo Cáo Tổng Quan</h3>
                    <p class="overview-subtitle">Cập nhật lần cuối: 5 phút trước</p>
                </div>
                <div class="secondary-btn">
                    <span class="material-symbols-outlined">refresh</span>
                    <span>Làm mới</span>
                </div>
            </div>

            <!-- Stats Grid -->
            <div class="stats-grid">
                <!-- Stat Card 1 -->
                <div class="paper-card stat-card">
                    <div class="stat-header">
                        <span class="stat-title">Tổng số sách</span>
                        <span class="material-symbols-outlined stat-icon">auto_stories</span>
                    </div>
                    <div class="stat-body">
                        <p class="stat-value" style="color: var(--color-primary);">12,450</p>
                        <p class="stat-change" style="color: var(--color-tertiary);">+12 mục mới tuần này</p>
                    </div>
                </div>
                <!-- Stat Card 2 -->
                <div class="paper-card stat-card">
                    <div class="stat-header">
                        <span class="stat-title">Tổng số độc giả</span>
                        <span class="material-symbols-outlined stat-icon">person_search</span>
                    </div>
                    <div class="stat-body">
                        <p class="stat-value" style="color: var(--color-primary);">842</p>
                        <p class="stat-change" style="color: var(--color-secondary);">24 thẻ mới tháng này</p>
                    </div>
                </div>
                <!-- Stat Card 3 -->
                <div class="paper-card stat-card">
                    <div class="stat-header">
                        <span class="stat-title">Yêu cầu chờ duyệt</span>
                        <span class="material-symbols-outlined stat-icon">priority_high</span>
                    </div>
                    <div class="stat-body">
                        <p class="stat-value" style="color: var(--color-secondary);">56</p>
                        <div class="stat-change text-error" style="display: flex; align-items: center; gap: 4px;">
                            <span class="material-symbols-outlined" style="font-size: 12px;">warning</span>
                            <span>Cần xử lý ngay</span>
                        </div>
                    </div>
                </div>
                <!-- Stat Card 4 -->
                <div class="paper-card stat-card">
                    <div class="stat-header">
                        <span class="stat-title">Quá hạn trả</span>
                        <span class="material-symbols-outlined stat-icon">running_with_errors</span>
                    </div>
                    <div class="stat-body">
                        <p class="stat-value text-error">18</p>
                        <p class="stat-change" style="color: var(--color-on-surface-variant); font-weight: 400;">
                            Tổng tiền phạt: 450k VNĐ</p>
                    </div>
                </div>
            </div>

            <!-- Main Grid: Chart & Recent Activity -->
            <div class="activity-grid">
                <div class="paper-card activity-card">
                    <div class="stat-header">
                        <span class="stat-title">Lượt đăng ký mới</span>
                        <span class="material-symbols-outlined stat-icon">person_add</span>
                    </div>
                    <div class="stat-body" style="margin-top: 8px;">
                        <p class="activity-value">128</p>
                        <p class="activity-desc" style="color: var(--color-tertiary);">+15% so với tháng trước</p>
                    </div>
                </div>
                <div class="paper-card activity-card">
                    <div class="stat-header">
                        <span class="stat-title">Lượt mượn sách</span>
                        <span class="material-symbols-outlined stat-icon">book_2</span>
                    </div>
                    <div class="stat-body" style="margin-top: 8px;">
                        <p class="activity-value">3,240</p>
                        <p class="activity-desc" style="color: var(--color-secondary);">Trung bình 108 lượt/ngày</p>
                    </div>
                </div>
                <div class="paper-card activity-card">
                    <div class="stat-header">
                        <span class="stat-title">Tỷ lệ trả đúng hạn</span>
                        <span class="material-symbols-outlined stat-icon">verified</span>
                    </div>
                    <div class="stat-body" style="margin-top: 8px;">
                        <p class="activity-value" style="color: var(--color-tertiary);">94.2%</p>
                        <p class="activity-desc" style="color: var(--color-on-surface-variant); font-weight: 400;">
                            Mục tiêu: 95%</p>
                    </div>
                </div>
            </div>

            <div class="main-grid">
                <!-- Chart Section -->
                <div class="paper-card chart-section">
                    <div class="chart-header">
                        <h4 class="chart-title">Xu Hướng Mượn Sách</h4>
                        <div class="chart-legend">
                            <span class="legend-item">
                                <div class="legend-color" style="background-color: var(--color-secondary);"></div> Sách Văn Học
                            </span>
                            <span class="legend-item">
                                <div class="legend-color" style="background-color: var(--color-tertiary);"></div> Sách Khoa Học
                            </span>
                        </div>
                    </div>
                    <div class="chart-container">
                        <svg class="w-full h-full" style="overflow: visible; width: 100%; height: 100%;" preserveAspectRatio="none"
                            viewBox="0 0 1000 256">
                            <!-- Grid Lines -->
                            <line stroke="rgba(62,39,35,0.05)" stroke-width="1" x1="0" x2="1000" y1="0" y2="0">
                            </line>
                            <line stroke="rgba(62,39,35,0.05)" stroke-width="1" x1="0" x2="1000" y1="64" y2="64">
                            </line>
                            <line stroke="rgba(62,39,35,0.05)" stroke-width="1" x1="0" x2="1000" y1="128" y2="128">
                            </line>
                            <line stroke="rgba(62,39,35,0.05)" stroke-width="1" x1="0" x2="1000" y1="192" y2="192">
                            </line>
                            <!-- Line Chart 1 (Literature) -->
                            <path
                                d="M0,200 L100,180 L200,190 L300,140 L400,150 L500,80 L600,110 L700,60 L800,90 L900,40 L1000,50"
                                fill="none" stroke="#835425" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="3"></path>
                            <!-- Line Chart 2 (Science) -->
                            <path
                                d="M0,230 L100,210 L200,180 L300,190 L400,170 L500,160 L600,140 L700,150 L800,120 L900,130 L1000,100"
                                fill="none" stroke="#223021" stroke-dasharray="5,3" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="2"></path>
                            <!-- Points -->
                            <circle cx="500" cy="80" fill="#835425" r="5"></circle>
                            <circle cx="900" cy="40" fill="#835425" r="5"></circle>
                        </svg>
                        <div class="chart-x-axis">
                            <span>Th.1</span><span>Th.2</span><span>Th.3</span><span>Th.4</span><span>Th.5</span><span>Th.6</span><span>Th.7</span><span>Th.8</span><span>Th.9</span><span>Th.10</span><span>Th.11</span><span>Th.12</span>
                        </div>
                    </div>
                    <p class="chart-note">Lưu ý: Số liệu thống kê được tính dựa trên số lượt đăng ký tại quầy và cổng trực tuyến.</p>
                </div>

                <!-- Ledger Section -->
                <div class="paper-card ledger-section">
                    <div class="ledger-header">
                        <h4 class="ledger-title">Nhật Ký Hoạt Động</h4>
                    </div>
                    <div class="ledger-list-wrapper">
                        <ul class="ledger-list">
                            <li class="ledger-item">
                                <div class="ledger-item-header">
                                    <span class="ledger-item-name">Trần Lê Hoàng</span>
                                    <span class="ledger-item-time">09:45 AM</span>
                                </div>
                                <p class="ledger-item-desc">Mượn: <span class="italic">"Sống Mòn"</span> - Nam Cao</p>
                                <span class="status-badge status-success">Hoàn Tất</span>
                            </li>
                            <li class="ledger-item">
                                <div class="ledger-item-header">
                                    <span class="ledger-item-name">Lê Thị Mai</span>
                                    <span class="ledger-item-time">10:12 AM</span>
                                </div>
                                <p class="ledger-item-desc">Yêu cầu đặt chỗ: <span class="italic">"Muôn Kiếp Nhân Sinh"</span></p>
                                <span class="status-badge status-warning">Chờ Duyệt</span>
                            </li>
                            <li class="ledger-item">
                                <div class="ledger-item-header">
                                    <span class="ledger-item-name">Nguyễn Trung Dũng</span>
                                    <span class="ledger-item-time">11:05 AM</span>
                                </div>
                                <p class="ledger-item-desc">Trả: <span class="italic">"Lược Sử Thời Gian"</span></p>
                                <span class="status-badge status-error">Trễ Hạn</span>
                            </li>
                            <li class="ledger-item">
                                <div class="ledger-item-header">
                                    <span class="ledger-item-name">Bùi Xuân Phái</span>
                                    <span class="ledger-item-time">01:30 PM</span>
                                </div>
                                <p class="ledger-item-desc">Cập nhật thông tin độc giả #D-4522</p>
                                <span class="status-badge status-info">Hệ Thống</span>
                            </li>
                            <li class="ledger-item">
                                <div class="ledger-item-header">
                                    <span class="ledger-item-name">Hoàng Minh</span>
                                    <span class="ledger-item-time">02:15 PM</span>
                                </div>
                                <p class="ledger-item-desc">Mượn: <span class="italic">"Người Lái Đò Sông Đà"</span></p>
                                <span class="status-badge status-success">Hoàn Tất</span>
                            </li>
                        </ul>
                    </div>
                    <div class="ledger-footer">
                        <a class="ledger-link" href="#">Xem Thêm</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
</script>

<style scoped>
.dashboard-container { 
    padding: var(--margin-desktop); 
    max-width: var(--max-width); 
    margin: 0 auto; 
    width: 100%; 
}

.overview-header { 
    display: flex; 
    justify-content: space-between; 
    align-items: flex-end; 
    margin-bottom: 32px; 
    border-bottom: 1px solid color-mix(in srgb, var(--color-outline-variant) 50%, transparent); 
    padding-bottom: 8px; 
}

.overview-title { 
    font-size: 32px; 
    font-weight: 700; 
    color: var(--color-primary); 
    font-family: var(--font-playfair); 
    margin: 0; 
}

.overview-subtitle { 
    font-size: 12px; 
    color: var(--color-on-surface-variant); 
    margin-top: 4px; 
}

.secondary-btn { 
    background-color: var(--color-surface-container); 
    padding: 8px 12px; 
    font-size: 12px; 
    font-weight: 700; 
    letter-spacing: 0.05em; 
    transition: all 0.15s; 
    border: 1px solid rgba(62, 39, 35, 0.15); 
    border-radius: 5px;
    text-transform: uppercase; 
    cursor: pointer;
    display: flex;
    gap: 5px;
}

.secondary-btn:hover { 
    background-color: var(--color-surface-container-high); 
}

.secondary-btn:active { 
    transform: scale(0.95); 
}

.material-symbols-outlined {
    font-size: 1.1rem;
}

/* Cards Base */
.paper-card { 
    background-color: #ffffff; 
    padding: 24px; 
    border: 1px solid rgba(62, 39, 35, 0.15); 
    border-radius: 3px;
    box-shadow: 4px 4px 0px 0px rgba(62, 39, 35, 0.15); 
    position: relative; 
    overflow: hidden; 
    display: flex; 
    flex-direction: column; 
    justify-content: space-between; 
}

/* Stats Grid */
.stats-grid { 
    display: grid; 
    gap: var(--gutter); 
    margin-bottom: var(--gutter); 
}

@media (min-width: 640px) { .stats-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .stats-grid { grid-template-columns: repeat(4, 1fr); } }

.stat-card { 
    height: 160px; 
}

.stat-header { 
    display: flex; 
    justify-content: space-between; 
    align-items: flex-start; 
}
.stat-title { 
    font-size: 14px; 
    font-weight: 700; 
    color: var(--color-on-surface-variant); 
    text-transform: uppercase; 
}
.stat-icon { 
    color: var(--color-primary); 
    opacity: 0.3; 
}
.stat-body { 
    margin-top: 16px; 
}
.stat-value { 
    font-family: var(--font-merriweather); 
    font-size: 36px; 
    font-weight: 700; 
    line-height: 1; 
    letter-spacing: -0.02em; 
    margin: 0;
}
.stat-change { 
    font-size: 12px; 
    font-weight: 700; 
    margin-top: 10px; 
}
.text-error { 
    color: #8B0000; 
}

/* Activity Grid */
.activity-grid { 
    display: grid; 
    gap: var(--gutter); 
    margin-bottom: var(--gutter); 
}

@media (min-width: 640px) { 
    .activity-grid { 
        grid-template-columns: repeat(3, 1fr); 
    } 
}
.activity-card { height: 128px; }
.activity-value { 
    font-family: var(--font-merriweather); 
    font-size: 26px; 
    font-weight: 600; 
    line-height: 1; 
    color: var(--color-primary); 
    margin: 5px 0 10px 0;
}
.activity-desc { 
    font-size: 11px; 
    font-weight: 700; 
    margin-top: 10px; 
}

/* Main Grid */
.main-grid { display: grid; gap: var(--gutter); }
@media (min-width: 1024px) { .main-grid { grid-template-columns: repeat(3, 1fr); } }

/* Chart Section */
.chart-section { 
    padding: 32px; 
    display: flex; 
    flex-direction: column; 
}
@media (min-width: 1024px) { 
    .chart-section { 
        grid-column: span 2; 
    } 
}
.chart-header { 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    margin-bottom: 48px; 
}
.chart-title { 
    font-family: var(--font-playfair); 
    font-size: 24px; 
    font-weight: 600; 
    color: var(--color-primary); 
    margin: 0;
}
.chart-legend { 
    display: flex; 
    gap: 16px; 
}
.legend-item { 
    display: flex; 
    align-items: center; 
    gap: 8px; 
    font-size: 12px; 
    font-weight: 700; 
}
.legend-color { 
    width: 12px; 
    height: 12px; 
}
.chart-container { 
    flex: 1; 
    position: relative; 
    height: 256px; 
    border-left: 1px solid color-mix(in srgb, var(--color-primary) 20%, transparent); 
    border-bottom: 1px solid color-mix(in srgb, var(--color-primary) 20%, transparent); 
}
.chart-x-axis { 
    display: flex; 
    justify-content: space-between; 
    margin-top: 16px; 
    font-size: 10px; 
    font-weight: 700; 
    color: var(--color-on-surface-variant); 
    opacity: 0.6; 
    text-transform: uppercase; 
}
.chart-note { 
    font-size: 12px; 
    text-align: center; 
    color: var(--color-on-surface-variant); 
    margin-top: 40px; 
    font-style: italic; 
}

/* Ledger Section */
.ledger-section { 
    display: flex; 
    flex-direction: column; 
    padding: 0; 
}
.ledger-header { 
    padding: 24px; 
    border-bottom: 1px solid color-mix(in srgb, var(--color-primary) 10%, transparent); 
}
.ledger-title { 
    font-family: var(--font-playfair); 
    font-size: 24px; font-weight: 600; 
    color: var(--color-primary); 
    margin: 0 0 4px 0; 
}
.ledger-subtitle { 
    font-size: 12px; 
    font-weight: 700; 
    opacity: 0.5; 
    text-transform: uppercase; 
    margin: 0;
}
.ledger-list-wrapper { 
    flex: 1; 
    overflow-y: auto; 
    max-height: 450px; 
}
.ledger-list-wrapper::-webkit-scrollbar { width: 4px; }
.ledger-list-wrapper::-webkit-scrollbar-track { background: #f5f3ef; }
.ledger-list-wrapper::-webkit-scrollbar-thumb { background: #d3c3c0; border-radius: 10px; }

.ledger-list { display: flex; flex-direction: column; list-style: none; padding: 0; margin: 0; }
.ledger-item { padding: 16px; transition: background-color 0.15s; border-bottom: 1px solid color-mix(in srgb, var(--color-primary) 5%, transparent); }
.ledger-item:hover { background-color: rgba(139, 90, 43, 0.05); }
.ledger-item-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 4px; }
.ledger-item-name { font-size: 14px; font-weight: 700; }
.ledger-item-time { font-size: 10px; opacity: 0.6; }
.ledger-item-desc { font-size: 12px; color: var(--color-on-surface-variant); margin: 0;}
.ledger-item-desc .italic { font-style: italic; }

.status-badge { 
    display: inline-block; 
    margin-top: 8px; 
    padding: 2px 8px; 
    font-size: 10px; 
    font-weight: 700; 
    border-radius: 4px; 
    text-transform: uppercase; 
}
.status-success { 
    background-color: var(--color-on-tertiary-container); 
    color: var(--color-on-tertiary-fixed-variant); 
}
.status-warning { 
    background-color: var(--color-secondary-container); 
    color: var(--color-on-secondary-container); 
}
.status-error { 
    background-color: var(--color-error-container); 
    color: var(--color-on-error-container); 
}
.status-info { 
    background-color: var(--color-surface-container-highest); 
    color: var(--color-on-surface-variant); 
}
.ledger-footer { 
    padding: 16px; 
    border-top: 1px solid color-mix(in srgb, var(--color-primary) 10%, transparent); 
    text-align: center; 
}
.ledger-link { 
    font-size: 12px; 
    font-weight: 700; 
    color: var(--color-secondary); 
    text-decoration: underline; 
    text-underline-offset: 4px; 
    text-transform: uppercase; 
    }
</style>
