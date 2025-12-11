/* ==================== MAIN APPLICATION ==================== */

// Initialize application
function initApp() {
    // Initialize state
    initializeState();
    
    // Initialize components
    Toast.init();
    
    // Setup event listeners
    setupEventListeners();
    
    // Initial render
    renderInitialContent();
    
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Hide loading screen
    setTimeout(() => {
        document.getElementById('loadingScreen').classList.add('hidden');
    }, 1500);
    
    console.log('BINK! Application initialized');
}

// Setup event listeners
function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo(item.dataset.page);
        });
    });
    
    // Mobile menu toggle
    document.getElementById('menuToggle').addEventListener('click', toggleSidebar);
    document.getElementById('sidebarClose').addEventListener('click', closeSidebar);
    document.getElementById('sidebarOverlay').addEventListener('click', closeSidebar);
    
    // Notification buttons
    document.getElementById('notificationsBtn').addEventListener('click', toggleNotificationPanel);
    document.getElementById('mobileNotifications').addEventListener('click', toggleNotificationPanel);
    document.getElementById('markAllRead').addEventListener('click', () => {
        markAllNotificationsRead();
        renderNotifications();
        Toast.success('Notifikationer', 'Alla markerade som lästa');
    });
    
    // Import buttons
    document.getElementById('quickImportBtn').addEventListener('click', () => Modal.open('importModal'));
    document.getElementById('importCasesBtn').addEventListener('click', () => Modal.open('importModal'));
    
    // Export button
    document.getElementById('exportCasesBtn').addEventListener('click', exportCases);
    document.getElementById('exportReportBtn')?.addEventListener('click', exportCases);
    
    // Dashboard refresh
    document.getElementById('refreshDashboard').addEventListener('click', () => {
        renderKPICards();
        renderSystemStatus();
        renderRecentCases();
        Toast.info('Dashboard uppdaterad', 'Data har uppdaterats');
    });
    
    // Quick actions
    document.querySelectorAll('.quick-action-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            handleQuickAction(btn.dataset.action);
        });
    });
    
    // View all links
    document.querySelectorAll('.link-btn[data-page]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo(link.dataset.page);
        });
    });
    
    // Cases filters
    const searchInput = document.getElementById('caseSearchInput');
    searchInput.addEventListener('input', debounce((e) => {
        getState().filters.search = e.target.value;
        filterCases();
        renderCasesTable();
    }, 300));
    
    document.getElementById('statusFilter').addEventListener('change', (e) => {
        getState().filters.status = e.target.value;
        filterCases();
        renderCasesTable();
    });
    
    document.getElementById('priorityFilter').addEventListener('change', (e) => {
        getState().filters.priority = e.target.value;
        filterCases();
        renderCasesTable();
    });
    
    document.getElementById('clearFilters').addEventListener('click', clearFilters);
    
    // Select all checkbox
    document.getElementById('selectAllCases').addEventListener('change', (e) => {
        selectAllCases(e.target.checked);
        renderCasesTable();
        renderBulkActions();
    });
    
    // Cancel bulk selection
    document.getElementById('cancelBulk').addEventListener('click', () => {
        clearSelection();
        document.getElementById('selectAllCases').checked = false;
        renderCasesTable();
        renderBulkActions();
    });
    
    // Pagination
    document.getElementById('perPageSelect').addEventListener('change', (e) => {
        getState().pagination.perPage = parseInt(e.target.value);
        getState().pagination.currentPage = 1;
        updatePagination();
        renderCasesTable();
    });
    
    document.getElementById('prevPageBtn').addEventListener('click', () => {
        if (getState().pagination.currentPage > 1) {
            getState().pagination.currentPage--;
            renderCasesTable();
        }
    });
    
    document.getElementById('nextPageBtn').addEventListener('click', () => {
        if (getState().pagination.currentPage < getState().pagination.totalPages) {
            getState().pagination.currentPage++;
            renderCasesTable();
        }
    });
    
    // Table sorting
    document.querySelectorAll('.col-sortable').forEach(col => {
        col.addEventListener('click', () => {
            handleSort(col.dataset.sort);
        });
    });
    
    // Auto import toggle
    document.getElementById('autoImportToggle').addEventListener('change', toggleAutoImport);
    document.getElementById('manualSyncBtn').addEventListener('click', manualSync);
    
    // Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            switchTab(btn.dataset.tab);
        });
    });
    
    // New case form
    document.getElementById('submitNewCase').addEventListener('click', submitNewCase);
    
    // Save case changes
    document.getElementById('saveCaseChanges').addEventListener('click', saveCaseChanges);
    
    // Chat input
    const chatInput = document.getElementById('chatInput');
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleChatSend();
        }
    });
    
    // Auto-resize chat input
    chatInput.addEventListener('input', () => {
        chatInput.style.height = 'auto';
        chatInput.style.height = Math.min(chatInput.scrollHeight, 120) + 'px';
    });
    
    document.getElementById('sendChatBtn').addEventListener('click', handleChatSend);
    
    // Quick prompts
    document.querySelectorAll('.prompt-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            handlePromptClick(btn.dataset.prompt);
        });
    });
    
    // Global search
    const globalSearch = document.getElementById('globalSearch');
    globalSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            navigateTo('cases');
            document.getElementById('caseSearchInput').value = globalSearch.value;
            getState().filters.search = globalSearch.value;
            filterCases();
            renderCasesTable();
        }
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Escape closes modals
        if (e.key === 'Escape') {
            Modal.closeAll();
            const notifPanel = document.getElementById('notificationPanel');
            notifPanel.classList.remove('active');
        }
        
        // Cmd/Ctrl + K opens search
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            globalSearch.focus();
        }
    });
    
    // Close notification panel on outside click
    document.addEventListener('click', (e) => {
        const panel = document.getElementById('notificationPanel');
        const notifBtn = document.getElementById('notificationsBtn');
        const mobileNotifBtn = document.getElementById('mobileNotifications');
        
        if (panel.classList.contains('active') && 
            !panel.contains(e.target) && 
            e.target !== notifBtn && 
            !notifBtn.contains(e.target) &&
            e.target !== mobileNotifBtn &&
            !mobileNotifBtn.contains(e.target)) {
            panel.classList.remove('active');
        }
    });
    
    // Add payment plan button
    document.getElementById('addPaymentPlan')?.addEventListener('click', () => {
        Toast.info('Kommer snart', 'Funktion för att skapa betalplansmallar');
    });
    
    // Add automation button
    document.getElementById('addAutomation')?.addEventListener('click', () => {
        Toast.info('Kommer snart', 'Funktion för att skapa automationsregler');
    });
}

// Render initial content
function renderInitialContent() {
    // Dashboard
    renderKPICards();
    renderSystemStatus();
    renderRecentCases();
    
    // Update results count
    updateResultsCount();
    
    // Update sync time
    document.getElementById('syncTimestamp').textContent = `Senast synkad: ${formatRelativeTime(getState().settings.lastSync)}`;
    document.getElementById('lastSyncTime').textContent = formatRelativeTime(getState().settings.lastSync);
    
    // Update auto import toggle
    document.getElementById('autoImportToggle').checked = getState().settings.autoImport;
    document.getElementById('autoImportStatus').textContent = getState().settings.autoImport ? 'Aktiv' : 'Av';
    
    // Render integrations
    renderIntegrationsGrid();
    
    // Render notifications badge
    const unreadCount = getUnreadNotificationCount();
    document.getElementById('notifBadge').textContent = unreadCount;
    document.getElementById('mobileNotifBadge').textContent = unreadCount;
}

// Simulate real-time updates
function startRealtimeSimulation() {
    // Update sync indicator pulse
    setInterval(() => {
        const indicator = document.querySelector('.sync-indicator');
        if (indicator) {
            indicator.classList.toggle('active');
            setTimeout(() => indicator.classList.add('active'), 100);
        }
    }, 30000);
    
    // Occasionally add notifications
    setInterval(() => {
        if (Math.random() > 0.7) {
            const types = ['info', 'success'];
            const messages = [
                { title: 'Betalning mottagen', message: 'Nytt ärende har betalats' },
                { title: 'AI-analys klar', message: 'Analys av nya ärenden slutförd' },
                { title: 'Synk slutförd', message: 'Data synkad med integrationer' }
            ];
            
            const msg = randomFromArray(messages);
            const notification = {
                id: generateId(),
                type: randomFromArray(types),
                title: msg.title,
                message: msg.message,
                timestamp: new Date(),
                read: false
            };
            
            getState().notifications.unshift(notification);
            
            // Update badge
            const unreadCount = getUnreadNotificationCount();
            document.getElementById('notifBadge').textContent = unreadCount;
            document.getElementById('mobileNotifBadge').textContent = unreadCount;
        }
    }, 60000);
}

// Add CSS for history items
function addDynamicStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .case-history {
            display: flex;
            flex-direction: column;
            gap: var(--space-3);
        }
        
        .history-item {
            display: flex;
            gap: var(--space-3);
            padding: var(--space-3);
            background: var(--bg-secondary);
            border-radius: var(--radius-md);
        }
        
        .history-icon {
            width: 32px;
            height: 32px;
            border-radius: var(--radius-md);
            background: var(--bg-card);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }
        
        .history-icon svg {
            width: 16px;
            height: 16px;
            color: var(--color-electric-blue);
        }
        
        .history-content {
            flex: 1;
        }
        
        .history-text {
            font-size: var(--font-size-sm);
            margin-bottom: var(--space-1);
        }
        
        .history-meta {
            font-size: var(--font-size-xs);
            color: var(--text-tertiary);
        }
    `;
    document.head.appendChild(style);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    addDynamicStyles();
    initApp();
    startRealtimeSimulation();
});
