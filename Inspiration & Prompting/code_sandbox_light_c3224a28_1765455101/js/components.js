/* ==================== UI COMPONENTS ==================== */

// Toast notification system
const Toast = {
    container: null,
    
    init() {
        this.container = document.getElementById('toastContainer');
    },
    
    show(type, title, message, duration = 4000) {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <svg class="toast-icon"><use href="#icon-${type === 'success' ? 'check-circle' : type === 'error' ? 'x-circle' : type === 'warning' ? 'alert-triangle' : 'info'}"></use></svg>
            <div class="toast-content">
                <div class="toast-title">${title}</div>
                ${message ? `<div class="toast-message">${message}</div>` : ''}
            </div>
            <button class="toast-close" onclick="this.parentElement.remove()">
                <svg width="14" height="14"><use href="#icon-x"></use></svg>
            </button>
        `;
        
        // Use Lucide icons
        toast.querySelector('.toast-icon').innerHTML = '';
        const iconName = type === 'success' ? 'check-circle' : type === 'error' ? 'x-circle' : type === 'warning' ? 'alert-triangle' : 'info';
        toast.querySelector('.toast-icon').setAttribute('data-lucide', iconName);
        toast.querySelector('.toast-close svg').setAttribute('data-lucide', 'x');
        
        this.container.appendChild(toast);
        lucide.createIcons({ icons: { [iconName]: lucide.icons[iconName], x: lucide.icons.x }, attrs: {} });
        
        // Auto remove
        setTimeout(() => {
            toast.classList.add('exiting');
            setTimeout(() => toast.remove(), 300);
        }, duration);
        
        return toast;
    },
    
    success(title, message) {
        return this.show('success', title, message);
    },
    
    error(title, message) {
        return this.show('error', title, message);
    },
    
    warning(title, message) {
        return this.show('warning', title, message);
    },
    
    info(title, message) {
        return this.show('info', title, message);
    }
};

// Modal system
const Modal = {
    activeModals: [],
    
    open(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            this.activeModals.push(modal);
            
            // Close on overlay click
            const overlay = modal.querySelector('.modal-overlay');
            if (overlay) {
                overlay.onclick = () => this.close(modalId);
            }
            
            // Close on close buttons
            modal.querySelectorAll('[data-close-modal]').forEach(btn => {
                btn.onclick = () => this.close(modalId);
            });
        }
    },
    
    close(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('active');
            this.activeModals = this.activeModals.filter(m => m !== modal);
            
            if (this.activeModals.length === 0) {
                document.body.style.overflow = '';
            }
        }
    },
    
    closeAll() {
        this.activeModals.forEach(modal => {
            modal.classList.remove('active');
        });
        this.activeModals = [];
        document.body.style.overflow = '';
    }
};

// Render KPI cards
function renderKPICards() {
    const stats = getDashboardStats();
    const kpiGrid = document.getElementById('kpiGrid');
    
    const kpis = [
        { 
            icon: 'folder-open', 
            iconColor: 'blue', 
            value: stats.totalCases, 
            label: 'Totalt Ärenden',
            trend: '+12%',
            trendUp: true
        },
        { 
            icon: 'banknote', 
            iconColor: 'green', 
            value: formatCompactCurrency(stats.totalDebt), 
            label: 'Aktiv Inkasso',
            trend: '-5%',
            trendUp: false
        },
        { 
            icon: 'percent', 
            iconColor: 'purple', 
            value: formatPercent(stats.collectionRate), 
            label: 'Återvinningsgrad',
            trend: '+8%',
            trendUp: true
        },
        { 
            icon: 'calendar-days', 
            iconColor: 'amber', 
            value: stats.avgDaysOverdue + ' dagar', 
            label: 'Genomsnitt Dagar',
            trend: '-3%',
            trendUp: true
        },
        { 
            icon: 'sparkles', 
            iconColor: 'blue', 
            value: stats.aiEfficiency + 'x', 
            label: 'AI-Effektivitet',
            trend: '+24%',
            trendUp: true
        },
        { 
            icon: 'shield-check', 
            iconColor: 'green', 
            value: formatPercent(stats.compliance), 
            label: 'Regelefterlevnad',
            trend: '+0.2%',
            trendUp: true
        }
    ];
    
    kpiGrid.innerHTML = kpis.map((kpi, index) => `
        <div class="kpi-card animate-slideInUp stagger-${index + 1}">
            <div class="kpi-header">
                <div class="kpi-icon ${kpi.iconColor}">
                    <i data-lucide="${kpi.icon}"></i>
                </div>
                <div class="kpi-trend ${kpi.trendUp ? 'up' : 'down'}">
                    <i data-lucide="${kpi.trendUp ? 'trending-up' : 'trending-down'}"></i>
                    ${kpi.trend}
                </div>
            </div>
            <div class="kpi-value">${kpi.value}</div>
            <div class="kpi-label">${kpi.label}</div>
        </div>
    `).join('');
    
    lucide.createIcons();
}

// Render system status
function renderSystemStatus() {
    const statusGrid = document.getElementById('systemStatus');
    
    const systems = [
        { name: 'API-gateway', value: '99.9% uptime', status: 'active' },
        { name: 'AI-motor', value: 'Aktiv', status: 'active' },
        { name: 'Databas', value: 'Synkad', status: 'active' },
        { name: 'Kronofogden-länk', value: 'Ansluten', status: 'active' }
    ];
    
    statusGrid.innerHTML = systems.map(system => `
        <div class="system-status-item">
            <div class="status-pulse ${system.status}"></div>
            <div class="system-status-info">
                <div class="system-status-name">${system.name}</div>
                <div class="system-status-value">${system.value}</div>
            </div>
        </div>
    `).join('');
}

// Render recent cases
function renderRecentCases() {
    const recentCases = getRecentCases(5);
    const container = document.getElementById('recentCases');
    
    container.innerHTML = recentCases.map(c => `
        <div class="recent-case-item" data-case-id="${c.id}">
            <div class="recent-case-info">
                <div class="recent-case-id">${c.id}</div>
                <div class="recent-case-debtor">${c.debtor.name}</div>
            </div>
            <span class="case-status ${c.status}">${getStatusText(c.status)}</span>
            <div class="recent-case-amount">${formatCurrency(c.invoice.amount)}</div>
        </div>
    `).join('');
    
    // Add click handlers
    container.querySelectorAll('.recent-case-item').forEach(item => {
        item.addEventListener('click', () => {
            openCaseDetail(item.dataset.caseId);
        });
    });
}

// Render cases table
function renderCasesTable() {
    const cases = getPaginatedCases();
    const tbody = document.getElementById('casesTableBody');
    const state = getState();
    
    tbody.innerHTML = cases.map(c => `
        <tr data-case-id="${c.id}">
            <td class="col-checkbox">
                <label class="checkbox">
                    <input type="checkbox" ${state.selectedCases.has(c.id) ? 'checked' : ''} onchange="toggleCaseSelection('${c.id}'); renderBulkActions();">
                    <span class="checkmark"></span>
                </label>
            </td>
            <td>
                <a href="#" class="text-primary font-medium" onclick="openCaseDetail('${c.id}'); return false;">${c.id}</a>
            </td>
            <td>
                <div class="flex flex-col">
                    <span class="font-medium">${c.debtor.name}</span>
                    <span class="text-xs text-tertiary">${c.debtor.type === 'company' ? c.debtor.organizationNumber : c.debtor.personalNumber || ''}</span>
                </div>
            </td>
            <td class="col-hide-mobile">${c.invoice.invoiceNumber}</td>
            <td class="font-medium">${formatCurrency(c.invoice.amount)}</td>
            <td class="col-hide-tablet">${c.daysOverdue} dagar</td>
            <td><span class="case-status ${c.status}">${getStatusText(c.status)}</span></td>
            <td class="col-hide-mobile"><span class="priority-badge ${c.priority}">${getPriorityText(c.priority)}</span></td>
            <td class="col-actions">
                <div class="row-actions">
                    <button class="icon-btn" title="Visa" onclick="openCaseDetail('${c.id}')">
                        <i data-lucide="eye"></i>
                    </button>
                    <button class="icon-btn" title="Redigera" onclick="editCase('${c.id}')">
                        <i data-lucide="edit-3"></i>
                    </button>
                    <button class="icon-btn text-danger" title="Ta bort" onclick="confirmDeleteCase('${c.id}')">
                        <i data-lucide="trash-2"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
    
    lucide.createIcons();
    updatePaginationUI();
    updateResultsCount();
}

// Update pagination UI
function updatePaginationUI() {
    const state = getState();
    const { currentPage, perPage, totalPages } = state.pagination;
    const totalResults = state.filteredCases.length;
    
    const from = totalResults > 0 ? (currentPage - 1) * perPage + 1 : 0;
    const to = Math.min(currentPage * perPage, totalResults);
    
    document.getElementById('showingFrom').textContent = from;
    document.getElementById('showingTo').textContent = to;
    document.getElementById('totalResults').textContent = totalResults;
    document.getElementById('currentPageInfo').textContent = `Sida ${currentPage} av ${totalPages || 1}`;
    
    document.getElementById('prevPageBtn').disabled = currentPage <= 1;
    document.getElementById('nextPageBtn').disabled = currentPage >= totalPages;
}

// Update results count
function updateResultsCount() {
    const count = getState().filteredCases.length;
    document.getElementById('resultsCount').textContent = `${count} ärenden`;
    document.getElementById('casesCount').textContent = count;
}

// Render bulk actions
function renderBulkActions() {
    const selectedCount = getState().selectedCases.size;
    const bulkBar = document.getElementById('bulkActionsBar');
    
    if (selectedCount > 0) {
        bulkBar.classList.remove('hidden');
        document.getElementById('selectedCount').textContent = selectedCount;
    } else {
        bulkBar.classList.add('hidden');
    }
}

// Render payment plans
function renderPaymentPlans() {
    const plans = getState().paymentPlans;
    const grid = document.getElementById('paymentPlansGrid');
    
    grid.innerHTML = plans.map(plan => `
        <div class="payment-plan-card ${plan.active ? 'active' : ''}">
            <div class="payment-plan-header">
                <span class="payment-plan-name">${plan.name}</span>
                <label class="toggle-switch">
                    <input type="checkbox" ${plan.active ? 'checked' : ''} onchange="togglePaymentPlan('${plan.id}'); renderPaymentPlans();">
                    <span class="toggle-slider"></span>
                </label>
            </div>
            <div class="payment-plan-body">
                <div class="payment-plan-details">
                    <div class="plan-detail">
                        <span class="plan-detail-label">Löptid</span>
                        <span class="plan-detail-value">${plan.months > 0 ? plan.months + ' månader' : 'Flexibel'}</span>
                    </div>
                    <div class="plan-detail">
                        <span class="plan-detail-label">Belopp</span>
                        <span class="plan-detail-value">${formatCurrency(plan.minAmount)} - ${formatCurrency(plan.maxAmount)}</span>
                    </div>
                    <div class="plan-detail">
                        <span class="plan-detail-label">Uppläggning</span>
                        <span class="plan-detail-value">${formatCurrency(plan.setupFee)}</span>
                    </div>
                    <div class="plan-detail">
                        <span class="plan-detail-label">Ränta</span>
                        <span class="plan-detail-value">${plan.interestRate > 0 ? plan.interestRate + '%' : 'Ingen'}</span>
                    </div>
                </div>
            </div>
            <div class="payment-plan-footer">
                <span class="text-xs text-tertiary">${plan.autogiroEnabled ? 'Autogiro aktiverat' : 'Manuell betalning'}</span>
                <button class="btn btn-ghost btn-sm">
                    <i data-lucide="edit-3"></i>
                </button>
            </div>
        </div>
    `).join('');
    
    lucide.createIcons();
}

// Render dispens levels
function renderDispensLevels() {
    const levels = getState().dispensLevels;
    const container = document.getElementById('dispensLevelsList');
    
    container.innerHTML = levels.map(level => `
        <div class="dispens-level-card">
            <div class="dispens-level-header">
                <span class="dispens-level-title">${level.name}</span>
                <span class="status-badge ${level.autoApprove ? 'success' : 'neutral'}">
                    ${level.autoApprove ? 'Auto-godkänn' : 'Manuell'}
                </span>
            </div>
            <div class="dispens-level-content">
                <div class="dispens-field">
                    <span class="dispens-field-label">Beloppsspann</span>
                    <span class="dispens-field-value">${formatCurrency(level.minAmount)} - ${formatCurrency(level.maxAmount)}</span>
                </div>
                <div class="dispens-field">
                    <span class="dispens-field-label">Rabatt</span>
                    <span class="dispens-field-value">${level.discountPercent}%</span>
                </div>
                <div class="dispens-field">
                    <span class="dispens-field-label">Beskrivning</span>
                    <span class="dispens-field-value">${level.description}</span>
                </div>
                <div class="dispens-field">
                    <span class="dispens-field-label">Auto-godkänn</span>
                    <label class="toggle-switch">
                        <input type="checkbox" ${level.autoApprove ? 'checked' : ''}>
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>
        </div>
    `).join('');
}

// Render dementi list
function renderDementiList() {
    const cases = getKronofogdenCases();
    const container = document.getElementById('dementiList');
    
    if (cases.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i data-lucide="check-circle" class="empty-state-icon"></i>
                <h3 class="empty-state-title">Inga ärenden hos Kronofogden</h3>
                <p class="empty-state-description">Det finns inga ärenden som kan dementeras just nu.</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }
    
    container.innerHTML = cases.map(c => `
        <div class="dementi-item">
            <div class="dementi-info">
                <span class="dementi-case-id">${c.id}</span>
                <span class="dementi-details">${c.debtor.name} • ${formatCurrency(c.invoice.amount)}</span>
            </div>
            <div class="dementi-actions">
                <button class="btn btn-ghost btn-sm" onclick="downloadDocument('${c.id}')">
                    <i data-lucide="download"></i>
                    PDF
                </button>
                <button class="btn btn-primary btn-sm" onclick="dementiCase('${c.id}')">
                    <i data-lucide="undo-2"></i>
                    Dementera
                </button>
            </div>
        </div>
    `).join('');
    
    lucide.createIcons();
}

// Render autogiro stats
function renderAutogiroStats() {
    const cases = getState().cases;
    const autogiroCases = cases.filter(c => c.status === 'payment_plan');
    
    document.getElementById('activeAutogiro').textContent = autogiroCases.length;
    document.getElementById('pendingAutogiro').textContent = randomBetween(2, 8);
    document.getElementById('nextDrawDate').textContent = formatDate(addDays(new Date(), randomBetween(5, 25)));
}

// Render chat messages
function renderChatMessages() {
    const messages = getState().chatHistory;
    const container = document.getElementById('chatMessages');
    
    container.innerHTML = messages.map(msg => `
        <div class="chat-message ${msg.role}">
            <div class="chat-avatar">
                ${msg.role === 'assistant' ? '<i data-lucide="sparkles"></i>' : 'DU'}
            </div>
            <div>
                <div class="chat-bubble">${formatChatContent(msg.content)}</div>
                <div class="chat-timestamp">${formatRelativeTime(msg.timestamp)}</div>
            </div>
        </div>
    `).join('');
    
    lucide.createIcons();
    
    // Scroll to bottom
    container.scrollTop = container.scrollHeight;
}

// Format chat content (markdown-like)
function formatChatContent(content) {
    return content
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/##\s(.+)/g, '<h4>$1</h4>')
        .replace(/✅/g, '<span style="color: var(--color-success)">✅</span>')
        .replace(/⚠️/g, '<span style="color: var(--color-warning)">⚠️</span>')
        .replace(/\n/g, '<br>');
}

// Render process flow
function renderProcessFlow() {
    const container = document.getElementById('processFlow');
    
    const steps = [
        { icon: 'upload-cloud', label: 'Uppladdning/Synk', status: 'completed', statusText: 'Slutförd' },
        { icon: 'brain', label: 'AI-Analys', status: 'completed', statusText: 'Slutförd' },
        { icon: 'zap', label: 'Automatisering', status: 'active', statusText: 'Pågår' },
        { icon: 'scale', label: 'Legal Integration', status: 'pending', statusText: 'Väntar' },
        { icon: 'activity', label: 'Övervakning', status: 'pending', statusText: 'Väntar' }
    ];
    
    container.innerHTML = steps.map(step => `
        <div class="process-step ${step.status}">
            <div class="step-icon">
                <i data-lucide="${step.icon}"></i>
            </div>
            <div class="step-info">
                <span class="step-label">${step.label}</span>
                <span class="step-status">${step.statusText}</span>
            </div>
        </div>
    `).join('');
    
    lucide.createIcons();
}

// Render automations list
function renderAutomationsList() {
    const automations = getState().automations;
    const container = document.getElementById('automationsList');
    
    container.innerHTML = automations.map(auto => `
        <div class="automation-item">
            <div class="automation-info">
                <div class="automation-icon">
                    <i data-lucide="${auto.action === 'send_reminder' ? 'mail' : auto.action === 'increase_priority' ? 'flag' : auto.action === 'send_kronofogden' ? 'scale' : auto.action === 'ai_analysis' ? 'sparkles' : 'lightbulb'}"></i>
                </div>
                <div>
                    <div class="automation-name">${auto.name}</div>
                    <div class="automation-description">${auto.description}</div>
                </div>
            </div>
            <div class="automation-stats">
                <div class="automation-stat">
                    <span class="automation-stat-value">${auto.executedCount}</span>
                    <span class="automation-stat-label">Körningar</span>
                </div>
                <div class="automation-stat">
                    <span class="automation-stat-value">${auto.successRate}%</span>
                    <span class="automation-stat-label">Framgång</span>
                </div>
                <label class="toggle-switch">
                    <input type="checkbox" ${auto.enabled ? 'checked' : ''} onchange="toggleAutomation('${auto.id}')">
                    <span class="toggle-slider"></span>
                </label>
            </div>
        </div>
    `).join('');
    
    lucide.createIcons();
}

// Render efficiency comparison
function renderEfficiencyComparison() {
    const container = document.getElementById('efficiencyComparison');
    
    const data = [
        { days: '30 dagar', bink: 92, traditional: 65 },
        { days: '60 dagar', bink: 85, traditional: 52 },
        { days: '90 dagar', bink: 76, traditional: 38 },
        { days: '120+ dagar', bink: 58, traditional: 22 }
    ];
    
    container.innerHTML = data.map(row => `
        <div class="efficiency-row">
            <span class="efficiency-label">${row.days}</span>
            <div class="efficiency-bars">
                <div class="efficiency-bar">
                    <span class="efficiency-bar-label">BINK!</span>
                    <div class="efficiency-bar-track">
                        <div class="efficiency-bar-fill bink" style="width: ${row.bink}%"></div>
                    </div>
                    <span class="efficiency-bar-value">${row.bink}%</span>
                </div>
                <div class="efficiency-bar">
                    <span class="efficiency-bar-label">Traditionell</span>
                    <div class="efficiency-bar-track">
                        <div class="efficiency-bar-fill traditional" style="width: ${row.traditional}%"></div>
                    </div>
                    <span class="efficiency-bar-value">${row.traditional}%</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Render monthly chart
function renderMonthlyChart() {
    const container = document.getElementById('monthlyChart');
    
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];
    const values = [45, 52, 61, 58, 72, 85, 78, 92, 88, 95, 102, 118];
    const maxValue = Math.max(...values);
    
    container.innerHTML = months.map((month, i) => `
        <div class="monthly-bar">
            <span class="bar-value">${values[i]}%</span>
            <div class="bar-track">
                <div class="bar-fill" style="height: ${(values[i] / maxValue) * 100}%"></div>
            </div>
            <span class="bar-label">${month}</span>
        </div>
    `).join('');
}

// Render integrations grid
function renderIntegrationsGrid() {
    const integrations = getState().integrations;
    const container = document.getElementById('integrationsGrid');
    
    container.innerHTML = integrations.map(int => `
        <div class="integration-card" onclick="handleIntegrationClick('${int.id}')">
            <div class="integration-logo ${int.logoClass}">
                <i data-lucide="${int.type === 'file' ? 'file-spreadsheet' : int.type === 'api' ? 'code-2' : 'building-2'}"></i>
            </div>
            <span class="integration-name">${int.name}</span>
            <span class="integration-status">
                ${int.connected ? 'Ansluten' : 'Inte ansluten'}
            </span>
        </div>
    `).join('');
    
    lucide.createIcons();
}

// Render notifications
function renderNotifications() {
    const notifications = getState().notifications;
    const container = document.getElementById('notificationList');
    
    container.innerHTML = notifications.map(notif => `
        <div class="notification-item ${notif.read ? '' : 'unread'}" onclick="markNotificationRead('${notif.id}')">
            <div class="notification-icon ${notif.type}">
                <i data-lucide="${notif.type === 'success' ? 'check-circle' : notif.type === 'warning' ? 'alert-triangle' : notif.type === 'error' ? 'x-circle' : 'info'}"></i>
            </div>
            <div class="notification-content">
                <div class="notification-title">${notif.title}</div>
                <div class="notification-message">${notif.message}</div>
                <div class="notification-time">${formatRelativeTime(notif.timestamp)}</div>
            </div>
        </div>
    `).join('');
    
    lucide.createIcons();
    
    // Update badge count
    const unreadCount = getUnreadNotificationCount();
    document.getElementById('notifBadge').textContent = unreadCount;
    document.getElementById('mobileNotifBadge').textContent = unreadCount;
}
