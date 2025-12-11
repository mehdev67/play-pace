/* ==================== PAGE-SPECIFIC FUNCTIONALITY ==================== */

// Open case detail modal
function openCaseDetail(caseId) {
    const caseData = getState().cases.find(c => c.id === caseId);
    if (!caseData) return;
    
    document.getElementById('caseDetailTitle').textContent = `Ärende ${caseData.id}`;
    
    const body = document.getElementById('caseDetailBody');
    body.innerHTML = `
        <div class="case-form">
            <div class="form-section">
                <h3 class="form-section-title">Gäldenärinformation</h3>
                <div class="form-grid">
                    <div class="form-group">
                        <label class="form-label">Namn</label>
                        <div class="text-primary font-medium">${caseData.debtor.name}</div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">${caseData.debtor.type === 'company' ? 'Organisationsnummer' : 'Personnummer'}</label>
                        <div class="text-primary">${caseData.debtor.type === 'company' ? caseData.debtor.organizationNumber : caseData.debtor.personalNumber || '-'}</div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">E-post</label>
                        <div class="text-primary">${caseData.debtor.email || '-'}</div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Telefon</label>
                        <div class="text-primary">${caseData.debtor.phone}</div>
                    </div>
                    <div class="form-group" style="grid-column: span 2;">
                        <label class="form-label">Adress</label>
                        <div class="text-primary">${caseData.debtor.address ? `${caseData.debtor.address.street}, ${caseData.debtor.address.postalCode} ${caseData.debtor.address.city}` : '-'}</div>
                    </div>
                </div>
            </div>
            
            <div class="form-section">
                <h3 class="form-section-title">Fakturainformation</h3>
                <div class="form-grid">
                    <div class="form-group">
                        <label class="form-label">Fakturanummer</label>
                        <div class="text-primary font-medium">${caseData.invoice.invoiceNumber}</div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Belopp</label>
                        <div class="text-primary font-medium text-lg">${formatCurrency(caseData.invoice.amount)}</div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Fakturadatum</label>
                        <div class="text-primary">${formatDate(caseData.invoice.invoiceDate)}</div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Förfallodatum</label>
                        <div class="text-primary">${formatDate(caseData.invoice.dueDate)}</div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Förfallna dagar</label>
                        <div class="text-primary">${caseData.daysOverdue} dagar</div>
                    </div>
                </div>
            </div>
            
            <div class="form-section">
                <h3 class="form-section-title">Ärendestatus</h3>
                <div class="form-grid">
                    <div class="form-group">
                        <label class="form-label">Status</label>
                        <select class="form-select" id="editCaseStatus">
                            <option value="active" ${caseData.status === 'active' ? 'selected' : ''}>Aktiv</option>
                            <option value="payment_plan" ${caseData.status === 'payment_plan' ? 'selected' : ''}>Betalningsplan</option>
                            <option value="dispensation" ${caseData.status === 'dispensation' ? 'selected' : ''}>Dispens</option>
                            <option value="kronofogden" ${caseData.status === 'kronofogden' ? 'selected' : ''}>Kronofogden</option>
                            <option value="paid" ${caseData.status === 'paid' ? 'selected' : ''}>Betald</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Prioritet</label>
                        <select class="form-select" id="editCasePriority">
                            <option value="low" ${caseData.priority === 'low' ? 'selected' : ''}>Låg</option>
                            <option value="medium" ${caseData.priority === 'medium' ? 'selected' : ''}>Medium</option>
                            <option value="high" ${caseData.priority === 'high' ? 'selected' : ''}>Hög</option>
                            <option value="critical" ${caseData.priority === 'critical' ? 'selected' : ''}>Kritisk</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Tilldelad</label>
                        <div class="text-primary">${caseData.assignedTo || 'Ej tilldelad'}</div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Skapad</label>
                        <div class="text-primary">${formatDate(caseData.createdAt)}</div>
                    </div>
                </div>
            </div>
            
            <div class="form-section">
                <h3 class="form-section-title">Ärendehistorik</h3>
                <div class="case-history">
                    ${caseData.history.map(event => `
                        <div class="history-item">
                            <div class="history-icon">
                                <i data-lucide="${getHistoryIcon(event.type)}"></i>
                            </div>
                            <div class="history-content">
                                <div class="history-text">${event.text}</div>
                                <div class="history-meta">${event.user} • ${formatRelativeTime(event.timestamp)}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    // Store current case ID for save button
    document.getElementById('saveCaseChanges').dataset.caseId = caseId;
    
    lucide.createIcons();
    Modal.open('caseDetailModal');
}

// Get history icon
function getHistoryIcon(type) {
    const icons = {
        'created': 'plus-circle',
        'reminder_sent': 'mail',
        'email_sent': 'mail',
        'sms_sent': 'message-square',
        'call_made': 'phone',
        'payment_received': 'banknote',
        'plan_created': 'calendar',
        'dispens_granted': 'percent',
        'kronofogden_sent': 'scale',
        'ai_analysis': 'sparkles'
    };
    return icons[type] || 'activity';
}

// Edit case
function editCase(caseId) {
    openCaseDetail(caseId);
}

// Save case changes
function saveCaseChanges() {
    const caseId = document.getElementById('saveCaseChanges').dataset.caseId;
    const status = document.getElementById('editCaseStatus').value;
    const priority = document.getElementById('editCasePriority').value;
    
    updateCase(caseId, { status, priority });
    
    Modal.close('caseDetailModal');
    renderCasesTable();
    renderRecentCases();
    renderKPICards();
    
    Toast.success('Ärende uppdaterat', `${caseId} har uppdaterats`);
}

// Confirm delete case
function confirmDeleteCase(caseId) {
    if (confirm(`Är du säker på att du vill ta bort ärende ${caseId}?`)) {
        deleteCase(caseId);
        renderCasesTable();
        renderRecentCases();
        renderKPICards();
        Toast.success('Ärende borttaget', `${caseId} har tagits bort`);
    }
}

// Handle quick actions
function handleQuickAction(action) {
    switch (action) {
        case 'new-case':
            Modal.open('newCaseModal');
            break;
        case 'import':
            Modal.open('importModal');
            break;
        case 'send-reminders':
            simulateSendReminders();
            break;
        case 'ai-analyze':
            navigateTo('ai');
            handlePromptClick('analyze-portfolio');
            break;
        case 'export':
            exportCases();
            break;
        case 'kronofogden':
            navigateTo('dispens');
            switchTab('dementi');
            break;
    }
}

// Simulate sending reminders
function simulateSendReminders() {
    const activeCases = getState().cases.filter(c => c.status === 'active' && c.daysOverdue > 14);
    Toast.info('Skickar påminnelser', `Skickar till ${activeCases.length} gäldenärer...`);
    
    setTimeout(() => {
        Toast.success('Påminnelser skickade', `${activeCases.length} påminnelser skickades framgångsrikt`);
    }, 2000);
}

// Export cases to CSV
function exportCases() {
    const cases = getState().filteredCases;
    const data = cases.map(c => ({
        'Ärende-ID': c.id,
        'Gäldenär': c.debtor.name,
        'Personnummer/Orgnr': c.debtor.personalNumber || c.debtor.organizationNumber || '',
        'E-post': c.debtor.email || '',
        'Telefon': c.debtor.phone,
        'Fakturanummer': c.invoice.invoiceNumber,
        'Belopp': c.invoice.amount,
        'Status': getStatusText(c.status),
        'Prioritet': getPriorityText(c.priority),
        'Förfallna dagar': c.daysOverdue,
        'Skapad': formatDate(c.createdAt)
    }));
    
    exportToCSV(data, `bink_export_${formatDate(new Date()).replace(/\s/g, '_')}.csv`);
    Toast.success('Export slutförd', `${data.length} ärenden exporterade`);
}

// Handle integration click
function handleIntegrationClick(integrationId) {
    const integration = getState().integrations.find(i => i.id === integrationId);
    
    if (integration.type === 'file') {
        // Simulate file upload
        Toast.info('CSV-import', 'Välj en CSV-fil att importera');
        setTimeout(() => {
            const count = randomBetween(5, 15);
            Toast.success('Import slutförd', `${count} ärenden importerade från CSV`);
            Modal.close('importModal');
        }, 2000);
    } else if (integration.connected) {
        Toast.info('Synkroniserar', `Hämtar data från ${integration.name}...`);
        setTimeout(() => {
            const count = randomBetween(3, 12);
            Toast.success('Synk slutförd', `${count} nya ärenden från ${integration.name}`);
            Modal.close('importModal');
        }, 2500);
    } else {
        Toast.info('Ansluter', `Startar OAuth-flöde för ${integration.name}...`);
        setTimeout(() => {
            Toast.success('Ansluten', `${integration.name} är nu ansluten`);
        }, 2000);
    }
}

// Submit new case
function submitNewCase() {
    const form = document.getElementById('newCaseForm');
    const formData = new FormData(form);
    
    const caseData = {
        debtor: {
            name: formData.get('debtorName'),
            personalNumber: formData.get('personalNumber'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            type: 'person',
            address: null
        },
        invoice: {
            invoiceNumber: formData.get('invoiceNumber'),
            amount: parseInt(formData.get('amount')),
            currency: 'SEK',
            invoiceDate: new Date(formData.get('invoiceDate')),
            dueDate: new Date(formData.get('dueDate'))
        },
        status: 'active',
        priority: formData.get('priority'),
        daysOverdue: daysBetween(new Date(), new Date(formData.get('dueDate'))),
        notes: formData.get('notes')
    };
    
    const newCase = addCase(caseData);
    
    form.reset();
    Modal.close('newCaseModal');
    renderCasesTable();
    renderRecentCases();
    renderKPICards();
    
    Toast.success('Ärende skapat', `${newCase.id} har skapats`);
}

// Handle chat send
function handleChatSend() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    addChatMessage('user', message);
    input.value = '';
    
    renderChatMessages();
    
    // Show typing indicator
    const chatContainer = document.getElementById('chatMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-message assistant';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = `
        <div class="chat-avatar"><i data-lucide="sparkles"></i></div>
        <div class="chat-bubble">
            <div class="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;
    chatContainer.appendChild(typingDiv);
    lucide.createIcons();
    chatContainer.scrollTop = chatContainer.scrollHeight;
    
    // Simulate AI response
    setTimeout(() => {
        document.getElementById('typingIndicator')?.remove();
        
        const response = getAIResponse(message);
        addChatMessage('assistant', response);
        renderChatMessages();
    }, 1500 + Math.random() * 1000);
}

// Handle prompt click
function handlePromptClick(promptKey) {
    const prompts = {
        'analyze-portfolio': 'Analysera min nuvarande inkassoportfölj och ge rekommendationer',
        'suggest-plan': 'Föreslå betalplaner för mina aktiva ärenden',
        'compliance-check': 'Genomför en compliance-kontroll av alla ärenden',
        'prioritize': 'Prioritera mina ärenden baserat på sannolikhet för betalning',
        'fraud-detection': 'Analysera ärenden för potentiellt bedrägeri',
        'settlement': 'Föreslå skuldregleringar för gäldenärer med betalningssvårigheter'
    };
    
    const message = prompts[promptKey] || promptKey;
    
    // Add user message
    addChatMessage('user', message);
    renderChatMessages();
    
    // Show typing and respond
    const chatContainer = document.getElementById('chatMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-message assistant';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = `
        <div class="chat-avatar"><i data-lucide="sparkles"></i></div>
        <div class="chat-bubble">
            <div class="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;
    chatContainer.appendChild(typingDiv);
    lucide.createIcons();
    chatContainer.scrollTop = chatContainer.scrollHeight;
    
    setTimeout(() => {
        document.getElementById('typingIndicator')?.remove();
        const response = aiResponses[promptKey] || aiResponses['default'];
        addChatMessage('assistant', response);
        renderChatMessages();
    }, 2000 + Math.random() * 1000);
}

// Dementi case (recall from Kronofogden)
function dementiCase(caseId) {
    if (confirm(`Vill du dementera ärende ${caseId} från Kronofogden?`)) {
        updateCase(caseId, { status: 'active' });
        renderDementiList();
        Toast.success('Ärende dementerat', `${caseId} har återkallats från Kronofogden`);
    }
}

// Download document (simulated)
function downloadDocument(caseId) {
    Toast.info('Genererar dokument', 'PDF skapas...');
    setTimeout(() => {
        Toast.success('Dokument klart', 'PDF har laddats ner');
    }, 1500);
}

// Toggle auto import
function toggleAutoImport() {
    const toggle = document.getElementById('autoImportToggle');
    const status = toggle.checked;
    
    setState('settings', { ...getState().settings, autoImport: status });
    document.getElementById('autoImportStatus').textContent = status ? 'Aktiv' : 'Av';
    
    if (status) {
        Toast.success('Auto-import aktiverad', 'Ärenden synkas automatiskt');
    } else {
        Toast.info('Auto-import inaktiverad', 'Manuell synk krävs');
    }
}

// Manual sync
function manualSync() {
    Toast.info('Synkroniserar', 'Hämtar nya ärenden...');
    
    setTimeout(() => {
        const count = randomBetween(0, 5);
        setState('settings', { ...getState().settings, lastSync: new Date() });
        document.getElementById('syncTimestamp').textContent = `Senast synkad: ${formatRelativeTime(new Date())}`;
        
        if (count > 0) {
            Toast.success('Synk slutförd', `${count} nya ärenden importerade`);
        } else {
            Toast.info('Synk slutförd', 'Inga nya ärenden hittades');
        }
    }, 2000);
}

// Switch tab
function switchTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.toggle('active', content.id === tabId);
    });
}

// Navigate to page
function navigateTo(pageName) {
    // Update state
    setState('currentPage', pageName);
    
    // Update nav
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.page === pageName);
    });
    
    // Update pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.toggle('active', page.id === `${pageName}Page`);
    });
    
    // Close sidebar on mobile
    closeSidebar();
    
    // Render page-specific content
    switch (pageName) {
        case 'dashboard':
            renderKPICards();
            renderSystemStatus();
            renderRecentCases();
            break;
        case 'cases':
            renderCasesTable();
            break;
        case 'dispens':
            renderPaymentPlans();
            renderDispensLevels();
            renderDementiList();
            renderAutogiroStats();
            break;
        case 'ai':
            renderChatMessages();
            break;
        case 'automation':
            renderProcessFlow();
            renderAutomationsList();
            break;
        case 'reports':
            renderEfficiencyComparison();
            renderMonthlyChart();
            break;
    }
}

// Toggle sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
}

// Close sidebar
function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
}

// Toggle notification panel
function toggleNotificationPanel() {
    const panel = document.getElementById('notificationPanel');
    panel.classList.toggle('active');
    
    if (panel.classList.contains('active')) {
        renderNotifications();
    }
}

// Handle sorting
function handleSort(column) {
    const state = getState();
    
    if (state.filters.sortBy === column) {
        state.filters.sortOrder = state.filters.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
        state.filters.sortBy = column;
        state.filters.sortOrder = 'desc';
    }
    
    filterCases();
    renderCasesTable();
}

// Clear filters
function clearFilters() {
    document.getElementById('caseSearchInput').value = '';
    document.getElementById('statusFilter').value = '';
    document.getElementById('priorityFilter').value = '';
    
    const state = getState();
    state.filters.search = '';
    state.filters.status = '';
    state.filters.priority = '';
    
    filterCases();
    renderCasesTable();
}
