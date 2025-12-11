/* ==================== UTILITY FUNCTIONS ==================== */

// Format currency (SEK)
function formatCurrency(amount) {
    return new Intl.NumberFormat('sv-SE', {
        style: 'currency',
        currency: 'SEK',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

// Format compact currency (e.g., 1.2M)
function formatCompactCurrency(amount) {
    if (amount >= 1000000) {
        return (amount / 1000000).toFixed(1) + ' M kr';
    } else if (amount >= 1000) {
        return (amount / 1000).toFixed(0) + ' k kr';
    }
    return formatCurrency(amount);
}

// Format number with Swedish locale
function formatNumber(num) {
    return new Intl.NumberFormat('sv-SE').format(num);
}

// Format percentage
function formatPercent(num, decimals = 1) {
    return num.toFixed(decimals) + '%';
}

// Format date
function formatDate(date) {
    return new Intl.DateTimeFormat('sv-SE', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }).format(new Date(date));
}

// Format time
function formatTime(date) {
    return new Intl.DateTimeFormat('sv-SE', {
        hour: '2-digit',
        minute: '2-digit'
    }).format(new Date(date));
}

// Format relative time
function formatRelativeTime(date) {
    const now = new Date();
    const diff = now - new Date(date);
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) return 'Just nu';
    if (minutes < 60) return `${minutes} min sedan`;
    if (hours < 24) return `${hours} tim sedan`;
    if (days < 7) return `${days} dagar sedan`;
    return formatDate(date);
}

// Generate unique ID
function generateId() {
    return 'id_' + Math.random().toString(36).substring(2, 11);
}

// Generate case ID
function generateCaseId(index) {
    return `INK-${new Date().getFullYear()}-${String(index).padStart(4, '0')}`;
}

// Generate invoice number
function generateInvoiceNumber() {
    const year = new Date().getFullYear();
    const num = Math.floor(Math.random() * 9999) + 1000;
    return `FAK-${year}-${num}`;
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Deep clone object
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// Random number between min and max
function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Random item from array
function randomFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Shuffle array
function shuffleArray(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Calculate days between dates
function daysBetween(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.round(Math.abs((new Date(date1) - new Date(date2)) / oneDay));
}

// Add days to date
function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Animate number counting
function animateNumber(element, target, duration = 1000) {
    const start = parseInt(element.textContent) || 0;
    const increment = (target - start) / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= target) || (increment < 0 && current <= target)) {
            element.textContent = formatNumber(Math.round(target));
            clearInterval(timer);
        } else {
            element.textContent = formatNumber(Math.round(current));
        }
    }, 16);
}

// Local storage helpers
const storage = {
    get(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (e) {
            console.error('Storage get error:', e);
            return defaultValue;
        }
    },
    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error('Storage set error:', e);
        }
    },
    remove(key) {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            console.error('Storage remove error:', e);
        }
    }
};

// Status translations
const statusTranslations = {
    'active': 'Aktiv',
    'payment_plan': 'Betalplan',
    'dispensation': 'Dispens',
    'kronofogden': 'Kronofogden',
    'paid': 'Betald',
    'cancelled': 'Avbruten'
};

// Priority translations
const priorityTranslations = {
    'low': 'Låg',
    'medium': 'Medium',
    'high': 'Hög',
    'critical': 'Kritisk'
};

// Get status translation
function getStatusText(status) {
    return statusTranslations[status] || status;
}

// Get priority translation
function getPriorityText(priority) {
    return priorityTranslations[priority] || priority;
}

// Validate Swedish personal number (simple check)
function validatePersonalNumber(pnr) {
    const regex = /^\d{6,8}[-]?\d{4}$/;
    return regex.test(pnr);
}

// Validate Swedish organization number
function validateOrgNumber(orgNr) {
    const regex = /^\d{6}[-]?\d{4}$/;
    return regex.test(orgNr);
}

// Validate email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Validate phone (Swedish format)
function validatePhone(phone) {
    const cleaned = phone.replace(/[\s-]/g, '');
    return /^(07|\\+467)\d{8}$/.test(cleaned);
}

// Export to CSV
function exportToCSV(data, filename) {
    if (!data.length) return;
    
    const headers = Object.keys(data[0]);
    const csvContent = [
        headers.join(';'),
        ...data.map(row => headers.map(h => {
            const cell = row[h];
            if (typeof cell === 'string' && cell.includes(';')) {
                return `"${cell}"`;
            }
            return cell;
        }).join(';'))
    ].join('\n');
    
    const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}

// Parse CSV
function parseCSV(csv) {
    const lines = csv.split('\n');
    const headers = lines[0].split(';').map(h => h.trim());
    const data = [];
    
    for (let i = 1; i < lines.length; i++) {
        if (!lines[i].trim()) continue;
        const values = lines[i].split(';');
        const row = {};
        headers.forEach((h, index) => {
            row[h] = values[index]?.trim() || '';
        });
        data.push(row);
    }
    
    return data;
}

// Copy to clipboard
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (e) {
        console.error('Copy failed:', e);
        return false;
    }
}
