/* ==================== APPLICATION STATE MANAGEMENT ==================== */

// Application State
const AppState = {
    // Core data
    cases: [],
    filteredCases: [],
    selectedCases: new Set(),
    
    // UI State
    currentPage: 'dashboard',
    sidebarOpen: false,
    notificationPanelOpen: false,
    
    // Pagination
    pagination: {
        currentPage: 1,
        perPage: 25,
        totalPages: 1
    },
    
    // Filters
    filters: {
        search: '',
        status: '',
        priority: '',
        sortBy: 'createdAt',
        sortOrder: 'desc'
    },
    
    // Settings
    settings: {
        autoImport: false,
        lastSync: null,
        notifications: true,
        language: 'sv'
    },
    
    // Payment Plans
    paymentPlans: [],
    
    // Dispens Levels
    dispensLevels: [],
    
    // Integrations
    integrations: [],
    
    // Automations
    automations: [],
    
    // Notifications
    notifications: [],
    
    // Chat History
    chatHistory: [],
    
    // Loading states
    loading: {
        cases: false,
        dashboard: false,
        import: false
    }
};

// State subscribers
const stateSubscribers = new Map();

// Subscribe to state changes
function subscribe(key, callback) {
    if (!stateSubscribers.has(key)) {
        stateSubscribers.set(key, new Set());
    }
    stateSubscribers.get(key).add(callback);
    
    return () => {
        stateSubscribers.get(key).delete(callback);
    };
}

// Notify subscribers of state changes
function notifySubscribers(key) {
    if (stateSubscribers.has(key)) {
        stateSubscribers.get(key).forEach(callback => callback(AppState[key]));
    }
}

// Update state
function setState(key, value) {
    if (typeof key === 'object') {
        Object.assign(AppState, key);
        Object.keys(key).forEach(k => notifySubscribers(k));
    } else {
        AppState[key] = value;
        notifySubscribers(key);
    }
    
    // Persist certain state to localStorage
    persistState();
}

// Get state
function getState(key) {
    return key ? AppState[key] : AppState;
}

// Persist state to localStorage
function persistState() {
    const persistKeys = ['settings', 'chatHistory', 'filters'];
    const stateToPersist = {};
    
    persistKeys.forEach(key => {
        stateToPersist[key] = AppState[key];
    });
    
    storage.set('bink_state', stateToPersist);
}

// Load persisted state
function loadPersistedState() {
    const persisted = storage.get('bink_state', {});
    
    if (persisted.settings) {
        AppState.settings = { ...AppState.settings, ...persisted.settings };
    }
    if (persisted.chatHistory) {
        AppState.chatHistory = persisted.chatHistory;
    }
    if (persisted.filters) {
        AppState.filters = { ...AppState.filters, ...persisted.filters };
    }
}

// Initialize state with data
function initializeState() {
    // Load persisted state first
    loadPersistedState();
    
    // Generate mock data
    AppState.cases = generateMockCases(55);
    AppState.filteredCases = [...AppState.cases];
    AppState.paymentPlans = [...paymentPlanTemplates];
    AppState.dispensLevels = [...dispensLevels];
    AppState.integrations = [...integrations];
    AppState.automations = [...automationRules];
    AppState.notifications = generateNotifications();
    
    // Initialize chat with welcome message
    if (AppState.chatHistory.length === 0) {
        AppState.chatHistory = [{
            id: generateId(),
            role: 'assistant',
            content: 'Hej! Jag är din AI-inkassoassistent. Hur kan jag hjälpa dig idag? Du kan använda snabbkommandona till vänster eller ställa egna frågor.',
            timestamp: new Date()
        }];
    }
    
    // Calculate pagination
    updatePagination();
    
    // Update last sync time
    AppState.settings.lastSync = new Date();
}

// Filter cases
function filterCases() {
    let filtered = [...AppState.cases];
    
    // Search filter
    if (AppState.filters.search) {
        const search = AppState.filters.search.toLowerCase();
        filtered = filtered.filter(c => 
            c.id.toLowerCase().includes(search) ||
            c.debtor.name.toLowerCase().includes(search) ||
            c.invoice.invoiceNumber.toLowerCase().includes(search) ||
            (c.debtor.email && c.debtor.email.toLowerCase().includes(search))
        );
    }
    
    // Status filter
    if (AppState.filters.status) {
        filtered = filtered.filter(c => c.status === AppState.filters.status);
    }
    
    // Priority filter
    if (AppState.filters.priority) {
        filtered = filtered.filter(c => c.priority === AppState.filters.priority);
    }
    
    // Sort
    filtered.sort((a, b) => {
        let aVal = a[AppState.filters.sortBy];
        let bVal = b[AppState.filters.sortBy];
        
        // Handle nested properties
        if (AppState.filters.sortBy === 'amount') {
            aVal = a.invoice.amount;
            bVal = b.invoice.amount;
        } else if (AppState.filters.sortBy === 'debtor') {
            aVal = a.debtor.name;
            bVal = b.debtor.name;
        } else if (AppState.filters.sortBy === 'invoice') {
            aVal = a.invoice.invoiceNumber;
            bVal = b.invoice.invoiceNumber;
        }
        
        // Handle dates
        if (aVal instanceof Date) aVal = aVal.getTime();
        if (bVal instanceof Date) bVal = bVal.getTime();
        
        // String comparison
        if (typeof aVal === 'string') {
            aVal = aVal.toLowerCase();
            bVal = bVal.toLowerCase();
        }
        
        if (AppState.filters.sortOrder === 'asc') {
            return aVal > bVal ? 1 : -1;
        }
        return aVal < bVal ? 1 : -1;
    });
    
    AppState.filteredCases = filtered;
    AppState.pagination.currentPage = 1;
    updatePagination();
}

// Update pagination
function updatePagination() {
    const total = AppState.filteredCases.length;
    AppState.pagination.totalPages = Math.ceil(total / AppState.pagination.perPage);
}

// Get paginated cases
function getPaginatedCases() {
    const start = (AppState.pagination.currentPage - 1) * AppState.pagination.perPage;
    const end = start + AppState.pagination.perPage;
    return AppState.filteredCases.slice(start, end);
}

// Add case
function addCase(caseData) {
    const newCase = {
        id: generateCaseId(AppState.cases.length + 1),
        ...caseData,
        createdAt: new Date(),
        history: [{
            id: generateId(),
            type: 'created',
            text: 'Ärende skapat manuellt',
            timestamp: new Date(),
            user: 'Admin Hansson'
        }]
    };
    
    AppState.cases.unshift(newCase);
    filterCases();
    
    return newCase;
}

// Update case
function updateCase(caseId, updates) {
    const index = AppState.cases.findIndex(c => c.id === caseId);
    if (index !== -1) {
        AppState.cases[index] = { ...AppState.cases[index], ...updates };
        filterCases();
        return AppState.cases[index];
    }
    return null;
}

// Delete case
function deleteCase(caseId) {
    const index = AppState.cases.findIndex(c => c.id === caseId);
    if (index !== -1) {
        AppState.cases.splice(index, 1);
        AppState.selectedCases.delete(caseId);
        filterCases();
        return true;
    }
    return false;
}

// Toggle case selection
function toggleCaseSelection(caseId) {
    if (AppState.selectedCases.has(caseId)) {
        AppState.selectedCases.delete(caseId);
    } else {
        AppState.selectedCases.add(caseId);
    }
    notifySubscribers('selectedCases');
}

// Select all visible cases
function selectAllCases(select) {
    if (select) {
        getPaginatedCases().forEach(c => AppState.selectedCases.add(c.id));
    } else {
        AppState.selectedCases.clear();
    }
    notifySubscribers('selectedCases');
}

// Clear selection
function clearSelection() {
    AppState.selectedCases.clear();
    notifySubscribers('selectedCases');
}

// Get dashboard stats
function getDashboardStats() {
    const cases = AppState.cases;
    const activeCases = cases.filter(c => c.status !== 'paid' && c.status !== 'cancelled');
    const totalDebt = activeCases.reduce((sum, c) => sum + c.invoice.amount, 0);
    const avgDays = activeCases.length > 0 
        ? Math.round(activeCases.reduce((sum, c) => sum + c.daysOverdue, 0) / activeCases.length)
        : 0;
    const paidCases = cases.filter(c => c.status === 'paid').length;
    const collectionRate = cases.length > 0 ? (paidCases / cases.length * 100) : 0;
    
    return {
        totalCases: activeCases.length,
        totalDebt: totalDebt,
        avgDaysOverdue: avgDays,
        collectionRate: collectionRate,
        aiEfficiency: 2.4,
        compliance: 99.8,
        byStatus: {
            active: cases.filter(c => c.status === 'active').length,
            payment_plan: cases.filter(c => c.status === 'payment_plan').length,
            dispensation: cases.filter(c => c.status === 'dispensation').length,
            kronofogden: cases.filter(c => c.status === 'kronofogden').length,
            paid: paidCases
        },
        byPriority: {
            critical: cases.filter(c => c.priority === 'critical').length,
            high: cases.filter(c => c.priority === 'high').length,
            medium: cases.filter(c => c.priority === 'medium').length,
            low: cases.filter(c => c.priority === 'low').length
        }
    };
}

// Get recent cases
function getRecentCases(limit = 5) {
    return [...AppState.cases]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, limit);
}

// Get Kronofogden cases (for dementi)
function getKronofogdenCases() {
    return AppState.cases.filter(c => c.status === 'kronofogden');
}

// Add chat message
function addChatMessage(role, content) {
    const message = {
        id: generateId(),
        role: role,
        content: content,
        timestamp: new Date()
    };
    
    AppState.chatHistory.push(message);
    persistState();
    
    return message;
}

// Get AI response
function getAIResponse(prompt) {
    const promptKey = prompt.toLowerCase().replace(/[^a-z-]/g, '');
    return aiResponses[promptKey] || aiResponses['default'];
}

// Mark notification as read
function markNotificationRead(notificationId) {
    const notification = AppState.notifications.find(n => n.id === notificationId);
    if (notification) {
        notification.read = true;
        notifySubscribers('notifications');
    }
}

// Mark all notifications as read
function markAllNotificationsRead() {
    AppState.notifications.forEach(n => n.read = true);
    notifySubscribers('notifications');
}

// Get unread notification count
function getUnreadNotificationCount() {
    return AppState.notifications.filter(n => !n.read).length;
}

// Toggle automation rule
function toggleAutomation(automationId) {
    const automation = AppState.automations.find(a => a.id === automationId);
    if (automation) {
        automation.enabled = !automation.enabled;
        notifySubscribers('automations');
    }
}

// Toggle payment plan
function togglePaymentPlan(planId) {
    const plan = AppState.paymentPlans.find(p => p.id === planId);
    if (plan) {
        plan.active = !plan.active;
        notifySubscribers('paymentPlans');
    }
}
