/* ==================== MOCK DATA GENERATION ==================== */

// Swedish names for mock data
const swedishFirstNames = [
    'Erik', 'Maria', 'Johan', 'Anna', 'Peter', 'Lisa', 'Anders', 'Emma',
    'Lars', 'Karin', 'Mikael', 'Sara', 'Henrik', 'Sofia', 'Daniel', 'Ida',
    'Magnus', 'Elin', 'Fredrik', 'Hanna', 'Oscar', 'Julia', 'Karl', 'Maja',
    'Gustav', 'Alice', 'Viktor', 'Olivia', 'Alexander', 'Ebba', 'Filip', 'Wilma',
    'Lucas', 'Ella', 'William', 'Elsa', 'Hugo', 'Agnes', 'Liam', 'Freja'
];

const swedishLastNames = [
    'Andersson', 'Johansson', 'Karlsson', 'Nilsson', 'Eriksson', 'Larsson',
    'Olsson', 'Persson', 'Svensson', 'Gustafsson', 'Pettersson', 'Jonsson',
    'Jansson', 'Hansson', 'Bengtsson', 'Jönsson', 'Lindberg', 'Lindström',
    'Lindqvist', 'Lindgren', 'Berg', 'Bergström', 'Sandberg', 'Lundberg',
    'Lundgren', 'Lundqvist', 'Mattsson', 'Berglund', 'Fredriksson', 'Henriksson'
];

const swedishCities = [
    'Stockholm', 'Göteborg', 'Malmö', 'Uppsala', 'Västerås', 'Örebro',
    'Linköping', 'Helsingborg', 'Jönköping', 'Norrköping', 'Lund', 'Umeå',
    'Gävle', 'Borås', 'Södertälje', 'Eskilstuna', 'Karlstad', 'Täby',
    'Växjö', 'Halmstad'
];

const streetNames = [
    'Storgatan', 'Kungsgatan', 'Drottninggatan', 'Sveavägen', 'Vasagatan',
    'Birger Jarlsgatan', 'Götgatan', 'Hornsgatan', 'Odengatan', 'Karlavägen',
    'Fleminggatan', 'Ringvägen', 'Norrtullsgatan', 'Valhallavägen', 'Sturegatan'
];

const companyNames = [
    'AB Konstruktion', 'Teknik & Service AB', 'Bygg & Renovering Stockholm',
    'Malmö Transport AB', 'IT-Solutions Nordic', 'Fastighetsservice Sverige',
    'Göteborg Konsult AB', 'El & VVS Specialisten', 'Städservice i Norden',
    'Logistik Partner AB', 'Design Studio Stockholm', 'Marknad & Media AB'
];

// Generate random Swedish personal number
function generatePersonalNumber() {
    const year = randomBetween(1950, 2000);
    const month = String(randomBetween(1, 12)).padStart(2, '0');
    const day = String(randomBetween(1, 28)).padStart(2, '0');
    const last4 = String(randomBetween(1000, 9999));
    return `${year}${month}${day}-${last4}`;
}

// Generate random Swedish organization number
function generateOrgNumber() {
    const prefix = randomBetween(55, 59);
    const middle = String(randomBetween(1000, 9999));
    const suffix = String(randomBetween(1000, 9999));
    return `${prefix}${middle}-${suffix}`;
}

// Generate random Swedish phone number
function generatePhone() {
    const prefix = randomFromArray(['070', '072', '073', '076', '079']);
    const part1 = String(randomBetween(100, 999));
    const part2 = String(randomBetween(10, 99));
    const part3 = String(randomBetween(10, 99));
    return `${prefix}-${part1} ${part2} ${part3}`;
}

// Generate random email
function generateEmail(name) {
    const domains = ['gmail.com', 'outlook.com', 'hotmail.se', 'telia.com', 'spray.se'];
    const cleanName = name.toLowerCase()
        .replace(/å/g, 'a').replace(/ä/g, 'a').replace(/ö/g, 'o')
        .replace(/\s+/g, '.');
    return `${cleanName}@${randomFromArray(domains)}`;
}

// Generate random address
function generateAddress() {
    return {
        street: `${randomFromArray(streetNames)} ${randomBetween(1, 150)}`,
        postalCode: `${randomBetween(100, 999)} ${randomBetween(10, 99)}`,
        city: randomFromArray(swedishCities)
    };
}

// Generate debtor (person or company)
function generateDebtor() {
    const isCompany = Math.random() > 0.7;
    
    if (isCompany) {
        return {
            name: randomFromArray(companyNames),
            organizationNumber: generateOrgNumber(),
            email: `faktura@${randomFromArray(companyNames).toLowerCase().replace(/\s+/g, '').replace(/&/g, '').substring(0, 10)}.se`,
            phone: generatePhone(),
            address: generateAddress(),
            type: 'company'
        };
    }
    
    const firstName = randomFromArray(swedishFirstNames);
    const lastName = randomFromArray(swedishLastNames);
    const fullName = `${firstName} ${lastName}`;
    
    return {
        name: fullName,
        personalNumber: generatePersonalNumber(),
        email: generateEmail(fullName),
        phone: generatePhone(),
        address: generateAddress(),
        type: 'person'
    };
}

// Generate invoice
function generateInvoice() {
    const invoiceDate = addDays(new Date(), -randomBetween(30, 180));
    const dueDate = addDays(invoiceDate, 30);
    
    return {
        invoiceNumber: generateInvoiceNumber(),
        amount: randomBetween(1500, 75000),
        currency: 'SEK',
        invoiceDate: invoiceDate,
        dueDate: dueDate
    };
}

// Generate case history event
function generateCaseEvent(caseCreatedAt, status) {
    const events = [
        { type: 'created', text: 'Ärende skapat' },
        { type: 'reminder_sent', text: 'Påminnelse skickad' },
        { type: 'email_sent', text: 'E-post skickad till gäldenär' },
        { type: 'sms_sent', text: 'SMS skickat till gäldenär' },
        { type: 'call_made', text: 'Telefonsamtal genomfört' },
        { type: 'payment_received', text: 'Delbetalning mottagen' },
        { type: 'plan_created', text: 'Betalningsplan upprättad' },
        { type: 'dispens_granted', text: 'Dispens beviljad' },
        { type: 'kronofogden_sent', text: 'Skickat till Kronofogden' },
        { type: 'ai_analysis', text: 'AI-analys genomförd' }
    ];
    
    const history = [];
    const createdEvent = {
        id: generateId(),
        type: 'created',
        text: 'Ärende skapat',
        timestamp: caseCreatedAt,
        user: 'System'
    };
    history.push(createdEvent);
    
    // Add random events based on status
    const numEvents = randomBetween(1, 5);
    for (let i = 0; i < numEvents; i++) {
        const event = randomFromArray(events.slice(1));
        history.push({
            id: generateId(),
            type: event.type,
            text: event.text,
            timestamp: addDays(caseCreatedAt, randomBetween(1, 60)),
            user: randomFromArray(['Anna Lindberg', 'Erik Svensson', 'System', 'AI-Assistent'])
        });
    }
    
    return history.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
}

// Generate single case
function generateCase(index) {
    const statuses = ['active', 'payment_plan', 'dispensation', 'kronofogden', 'paid'];
    const priorities = ['low', 'medium', 'high', 'critical'];
    const statusWeights = [0.4, 0.2, 0.1, 0.15, 0.15];
    const priorityWeights = [0.2, 0.4, 0.25, 0.15];
    
    // Weighted random selection
    const selectWeighted = (items, weights) => {
        const random = Math.random();
        let sum = 0;
        for (let i = 0; i < items.length; i++) {
            sum += weights[i];
            if (random < sum) return items[i];
        }
        return items[items.length - 1];
    };
    
    const status = selectWeighted(statuses, statusWeights);
    const priority = selectWeighted(priorities, priorityWeights);
    const createdAt = addDays(new Date(), -randomBetween(5, 120));
    const invoice = generateInvoice();
    const daysOverdue = daysBetween(new Date(), invoice.dueDate);
    
    return {
        id: generateCaseId(index),
        debtor: generateDebtor(),
        invoice: invoice,
        status: status,
        priority: priority,
        daysOverdue: Math.max(0, daysOverdue),
        createdAt: createdAt,
        history: generateCaseEvent(createdAt, status),
        assignedTo: randomFromArray(['Anna Lindberg', 'Erik Svensson', 'Maria Karlsson', null]),
        notes: Math.random() > 0.7 ? 'Gäldenär har kontaktats och lovat återkomma.' : null,
        attachments: []
    };
}

// Generate all mock cases
function generateMockCases(count = 50) {
    const cases = [];
    for (let i = 1; i <= count; i++) {
        cases.push(generateCase(i));
    }
    return cases;
}

// Payment plan templates
const paymentPlanTemplates = [
    {
        id: 'plan_standard',
        name: 'Standard 3 månader',
        months: 3,
        minAmount: 5000,
        maxAmount: 25000,
        setupFee: 250,
        interestRate: 0,
        autogiroEnabled: true,
        active: true,
        terms: 'Delbetalning över 3 månader utan ränta'
    },
    {
        id: 'plan_extended',
        name: 'Utökad 6 månader',
        months: 6,
        minAmount: 10000,
        maxAmount: 50000,
        setupFee: 350,
        interestRate: 2.5,
        autogiroEnabled: true,
        active: true,
        terms: 'Delbetalning över 6 månader med 2.5% ränta'
    },
    {
        id: 'plan_long',
        name: 'Långsiktig 12 månader',
        months: 12,
        minAmount: 25000,
        maxAmount: 100000,
        setupFee: 500,
        interestRate: 4.0,
        autogiroEnabled: true,
        active: true,
        terms: 'Delbetalning över 12 månader med 4% ränta'
    },
    {
        id: 'plan_flex',
        name: 'Flexibel plan',
        months: 0,
        minAmount: 1000,
        maxAmount: 15000,
        setupFee: 150,
        interestRate: 0,
        autogiroEnabled: false,
        active: false,
        terms: 'Anpassad betalningsplan efter gäldenärens situation'
    }
];

// Dispens levels
const dispensLevels = [
    {
        id: 'level_1',
        name: 'Nivå 1',
        minAmount: 0,
        maxAmount: 5000,
        discountPercent: 5,
        autoApprove: true,
        description: 'Automatiskt godkänd för små belopp'
    },
    {
        id: 'level_2',
        name: 'Nivå 2',
        minAmount: 5001,
        maxAmount: 20000,
        discountPercent: 10,
        autoApprove: false,
        description: 'Kräver manuell granskning'
    },
    {
        id: 'level_3',
        name: 'Nivå 3',
        minAmount: 20001,
        maxAmount: 100000,
        discountPercent: 15,
        autoApprove: false,
        description: 'Kräver chefsgodk'
    }
];

// Integrations
const integrations = [
    {
        id: 'fortnox',
        name: 'Fortnox',
        type: 'fortnox',
        connected: true,
        lastSync: addDays(new Date(), -1),
        syncFrequency: 'daily',
        logoClass: 'fortnox'
    },
    {
        id: 'visma',
        name: 'Visma',
        type: 'visma',
        connected: false,
        lastSync: null,
        syncFrequency: 'realtime',
        logoClass: 'visma'
    },
    {
        id: 'bokio',
        name: 'Bokio',
        type: 'bokio',
        connected: false,
        lastSync: null,
        syncFrequency: 'hourly',
        logoClass: 'bokio'
    },
    {
        id: 'pe',
        name: 'PE Accounting',
        type: 'pe',
        connected: true,
        lastSync: addDays(new Date(), 0),
        syncFrequency: 'realtime',
        logoClass: 'pe'
    },
    {
        id: 'csv',
        name: 'CSV-import',
        type: 'file',
        connected: true,
        lastSync: null,
        syncFrequency: null,
        logoClass: 'csv'
    },
    {
        id: 'api',
        name: 'REST API',
        type: 'api',
        connected: true,
        lastSync: null,
        syncFrequency: 'realtime',
        logoClass: 'api'
    }
];

// Automation rules
const automationRules = [
    {
        id: 'auto_reminder',
        name: 'Automatisk påminnelse',
        description: 'Skicka påminnelse efter 14 dagar',
        trigger: '14_days_overdue',
        action: 'send_reminder',
        enabled: true,
        executedCount: 156,
        successRate: 94
    },
    {
        id: 'auto_priority',
        name: 'Prioritetseskalering',
        description: 'Höj prioritet efter 30 dagar',
        trigger: '30_days_overdue',
        action: 'increase_priority',
        enabled: true,
        executedCount: 89,
        successRate: 100
    },
    {
        id: 'auto_kronofogden',
        name: 'Kronofogden-överföring',
        description: 'Automatisk överföring efter 90 dagar',
        trigger: '90_days_overdue',
        action: 'send_kronofogden',
        enabled: false,
        executedCount: 23,
        successRate: 100
    },
    {
        id: 'auto_ai_analysis',
        name: 'AI-riskanalys',
        description: 'Automatisk riskbedömning vid import',
        trigger: 'case_created',
        action: 'ai_analysis',
        enabled: true,
        executedCount: 234,
        successRate: 99
    },
    {
        id: 'auto_payment_plan',
        name: 'Betalplansförslag',
        description: 'AI föreslår betalplan baserat på profil',
        trigger: 'payment_missed',
        action: 'suggest_plan',
        enabled: true,
        executedCount: 67,
        successRate: 87
    }
];

// Generate notifications
function generateNotifications() {
    const types = ['info', 'success', 'warning', 'error'];
    const notifications = [
        { type: 'success', title: 'Betalning mottagen', message: 'INK-2024-0023 har betalats i sin helhet', read: false },
        { type: 'info', title: 'Ny import slutförd', message: '15 nya ärenden importerade från Fortnox', read: false },
        { type: 'warning', title: 'Betalplan missad', message: 'INK-2024-0045 missade planerad betalning', read: false },
        { type: 'info', title: 'AI-analys klar', message: '5 ärenden rekommenderas för Kronofogden', read: true },
        { type: 'success', title: 'Påminnelser skickade', message: '23 påminnelser skickades framgångsrikt', read: true },
        { type: 'error', title: 'Synkfel', message: 'Kunde inte synka med Visma. Försök igen.', read: true }
    ];
    
    return notifications.map((n, i) => ({
        id: generateId(),
        ...n,
        timestamp: addDays(new Date(), -i)
    }));
}

// AI chat responses
const aiResponses = {
    'analyze-portfolio': `## Portföljanalys

Baserat på din nuvarande portfölj ser jag följande:

**Sammanfattning:**
- Totalt utestående: **${formatCurrency(randomBetween(2000000, 5000000))}**
- Genomsnittlig ålder: **${randomBetween(35, 55)} dagar**
- Riskprofil: **Medel**

**Rekommendationer:**
1. ${randomBetween(5, 15)} ärenden bör eskaleras till prioritet Hög
2. ${randomBetween(3, 8)} ärenden lämpliga för betalplan
3. ${randomBetween(2, 5)} ärenden redo för Kronofogden

Vill du att jag genererar en detaljerad rapport?`,

    'suggest-plan': `## Betalplansrekommendation

För de valda ärendena rekommenderar jag följande:

**Förslag 1 - Standard 3 mån:**
- Lämpligt för ${randomBetween(5, 12)} ärenden
- Uppskattad återvinning: **${randomBetween(85, 95)}%**

**Förslag 2 - Utökad 6 mån:**
- Lämpligt för ${randomBetween(3, 8)} ärenden
- Uppskattad återvinning: **${randomBetween(75, 88)}%**

Ska jag skapa betalplaner automatiskt för dessa ärenden?`,

    'compliance-check': `## Compliance-kontroll ✓

**Status: Godkänd**

Alla ärenden följer gällande regelverk:

✅ Inkassolagen (1974:182)
✅ GDPR-efterlevnad
✅ God inkassosed
✅ Konsumentkreditlagen

**Noteringar:**
- ${randomBetween(2, 5)} ärenden närmar sig preskriptionsgräns
- Alla påminnelser skickade inom lagstadgad tid
- Dokumentation komplett för alla ärenden`,

    'prioritize': `## Ärendeprioritering

Baserat på AI-analys rekommenderar jag följande prioritering:

**Kritisk (${randomBetween(3, 8)} ärenden):**
- Hög sannolikhet för betalning vid snabb åtgärd
- Belopp över 20 000 kr

**Hög (${randomBetween(8, 15)} ärenden):**
- Gäldenärer med tidigare betalningshistorik
- 30-60 dagar förfallna

**Medium/Låg (${randomBetween(15, 25)} ärenden):**
- Standardhantering rekommenderas

Vill du att jag uppdaterar prioriteterna automatiskt?`,

    'fraud-detection': `## Bedrägerianalys

**Resultat: ${randomBetween(1, 3)} potentiella varningar**

⚠️ **Varning 1:** INK-2024-00${randomBetween(10, 50)}
- Ovanligt betalningsmönster
- Rekommendation: Manuell granskning

⚠️ **Varning 2:** INK-2024-00${randomBetween(10, 50)}
- Adressändring nyligen
- Rekommendation: Verifiera identitet

Övriga ärenden visar inga tecken på bedrägligt beteende.`,

    'settlement': `## Skuldregleringsförslag

För gäldenärer med betalningssvårigheter föreslår jag:

**Förhandlingsalternativ:**
1. **Engångsbetalning**: ${randomBetween(60, 80)}% av skuld
2. **Avbetalning**: 100% över ${randomBetween(6, 12)} månader
3. **Delackord**: ${randomBetween(40, 60)}% med omedelbar betalning

**Lämpliga ärenden:** ${randomBetween(5, 12)} st
**Potentiell återvinning:** ${formatCurrency(randomBetween(150000, 400000))}

Vill du att jag kontaktar gäldenärerna med förslag?`,

    'default': `Jag förstår din fråga. Som AI-assistent kan jag hjälpa dig med:

- Portföljanalys och riskbedömning
- Betalplansrekommendationer
- Compliance-kontroller
- Ärendeprioritering
- Bedrägeridetektering
- Skuldregleringsförslag

Vad vill du veta mer om?`
};
