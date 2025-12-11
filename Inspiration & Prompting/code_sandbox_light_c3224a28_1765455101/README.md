# BINK! AI-Driven Inkasso Platform

<div align="center">
  <h3>🚀 AI-driven inkassoplattform för svenska företag</h3>
  <p>Modern, mobil-first inkassohantering med AI-automation</p>
</div>

---

## 📋 Översikt

BINK! är en fullständig MVP för AI-driven inkassohantering. Plattformen erbjuder moderna UX-patterns, realtidsvisualisering och intelligent automation för svenska företag.

### ✨ Huvudfunktioner

1. **Dashboard** - KPI-översikt, systemstatus, snabbåtgärder
2. **Ärendehantering** - CRUD, filtrering, import/export
3. **Dispens & Betalplaner** - Flexibla betalningsalternativ
4. **AI-Assistent** - Intelligent inkassopartner
5. **Processautomatisering** - 5-stegs visualisering
6. **Rapporter & Analys** - Statistik och marknadsinsikter

---

## 🛠️ Teknisk Stack

| Teknologi | Användning |
|-----------|------------|
| HTML5 | Semantisk struktur |
| CSS3 | Design system med CSS-variabler |
| Vanilla JavaScript | State management, komponenter |
| Lucide Icons | Ikonbibliotek |
| Google Fonts (Inter) | Typografi |

---

## 📁 Projektstruktur

```
bink-inkasso/
├── index.html              # Huvudfil med all HTML
├── css/
│   ├── design-system.css   # CSS-variabler, reset, utilities
│   ├── components.css      # UI-komponenter (buttons, forms, etc)
│   ├── pages.css           # Sidspecifika stilar
│   └── responsive.css      # Media queries, touch-optimering
├── js/
│   ├── utils.js            # Hjälpfunktioner
│   ├── data.js             # Mock data generation
│   ├── state.js            # State management
│   ├── components.js       # UI-komponenter (render functions)
│   ├── pages.js            # Sidlogik
│   └── app.js              # Huvudapplikation
└── README.md               # Dokumentation
```

---

## 🎨 Design System

### Färgpalett

| Färg | Hex | Användning |
|------|-----|------------|
| Deep Blue | `#0a1128` | Bakgrunder |
| Electric Blue | `#3b82f6` | Primära actions |
| Purple Accent | `#8b5cf6` | Highlights |
| Success | `#10b981` | Framgång |
| Warning | `#f59e0b` | Varningar |
| Error | `#ef4444` | Fel |

### Typografi

- **Font:** Inter (Google Fonts)
- **Headings:** 700-800 weight
- **Body:** 400-500 weight
- **Scale:** 12px, 14px, 16px, 18px, 24px, 32px, 48px

### Spacing

4px base unit med skala: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128

---

## 📱 Responsiva Breakpoints

| Enhet | Bredd |
|-------|-------|
| Mobile | 320px - 767px |
| Tablet | 768px - 1023px |
| Desktop | 1024px - 1439px |
| Large | 1440px+ |

---

## 🚀 Funktioner i Detalj

### Dashboard
- 6 KPI-kort med animerade värden
- Live systemstatus med pulse-animation
- Senaste 5 ärenden
- 6 snabbåtgärder

### Ärendehantering
- Full CRUD-funktionalitet
- Avancerad filtrering (status, prioritet, sök)
- Sortering per kolumn
- Pagination (25, 50, 100 per sida)
- Bulk-actions för flera ärenden
- Export till CSV
- 6 integrationer för import

### Dispens & Betalplaner
- 4 betalplansmallar
- 3 dispensnivåer med auto-godkännande
- Dementihantering för Kronofogden-ärenden
- Autogiro-dashboard med BGC-integration

### AI-Assistent
- Chat-gränssnitt med historik
- 6 snabbkommandon
- Simulerade AI-svar för:
  - Portföljanalys
  - Betalplansförslag
  - Compliance-kontroll
  - Prioritering
  - Bedrägeridetektering
  - Skuldreglering

### Processautomatisering
- 5-stegs visualisering
- 4 prestationsmått
- 5 automationsregler med toggle

### Rapporter
- Marknadsandels-diagram
- Inkassoeffektivitet (BINK vs Traditionell)
- 12-månaders utveckling
- 3 marknadsstorlek-kort

---

## 📊 Datamodell

### Ärende (Case)
```javascript
{
  id: string,              // INK-2024-0001
  debtor: {
    name: string,
    personalNumber?: string,
    organizationNumber?: string,
    email: string,
    phone: string,
    address: Address,
    type: 'person' | 'company'
  },
  invoice: {
    invoiceNumber: string,
    amount: number,
    currency: 'SEK',
    invoiceDate: Date,
    dueDate: Date
  },
  status: 'active' | 'payment_plan' | 'dispensation' | 'kronofogden' | 'paid',
  priority: 'low' | 'medium' | 'high' | 'critical',
  daysOverdue: number,
  history: CaseEvent[],
  assignedTo?: string,
  notes?: string
}
```

---

## 🔗 Funktionella Endpoints

| Sida | Sökväg | Beskrivning |
|------|--------|-------------|
| Dashboard | `/index.html` | Startvy |
| Ärenden | `#cases` | Ärendehantering |
| Dispens | `#dispens` | Betalplaner & dispens |
| AI | `#ai` | AI-assistent |
| Automation | `#automation` | Processautomatisering |
| Rapporter | `#reports` | Statistik & analys |

---

## ⌨️ Tangentbordsgenvägar

| Kommando | Funktion |
|----------|----------|
| `Cmd/Ctrl + K` | Öppna global sökning |
| `Escape` | Stäng modaler/paneler |

---

## 🎯 Implementerade Features

### ✅ Slutförda
- [x] 6 huvudsidor
- [x] 55+ mock-ärenden med svensk data
- [x] Komplett design system
- [x] Mobil-first responsivitet
- [x] Touch-optimering
- [x] Animationer och transitions
- [x] Toast-notifikationer
- [x] Modal-system
- [x] State management
- [x] localStorage-persistens
- [x] Filtrering och sökning
- [x] Sortering
- [x] Pagination
- [x] Bulk-actions
- [x] CSV-export
- [x] AI-chat med historik
- [x] Realtids-simulering

### ❌ Ej Implementerade (Roadmap)
- [ ] Backend API-integration
- [ ] Användarautentisering
- [ ] Riktiga betalnings-integrationer
- [ ] E-postutskick
- [ ] PDF-generering
- [ ] Dark/Light mode toggle
- [ ] Flerspråksstöd (EN)
- [ ] Push-notifikationer
- [ ] Offline-stöd (Service Worker)

---

## 🚦 Installation

1. Klona eller ladda ner projektet
2. Öppna `index.html` i en webbläsare
3. Ingen build-process krävs!

### Lokal utveckling
```bash
# Med Python
python -m http.server 8000

# Med Node
npx serve .
```

---

## 📱 Testning

### Manuell Checklista
- [x] Alla routes fungerar
- [x] Mobil responsivitet (320px - 1920px)
- [x] Touch gestures fungerar
- [x] Forms validering
- [x] Error states visas
- [x] Loading states
- [x] Navigation fungerar
- [x] Data persistence

---

## 🔐 Säkerhet

**OBS:** Detta är en MVP/demo utan riktig autentisering.

För produktion krävs:
- Säker API med JWT/OAuth
- HTTPS
- Input-validering på server
- Rate limiting
- GDPR-compliance åtgärder

---

## 📞 Support

För frågor eller feedback, kontakta utvecklingsteamet.

---

## 📄 Licens

© 2024 BINK! - Alla rättigheter förbehållna.

---

<div align="center">
  <p>Byggd med ❤️ för svenska företag</p>
  <p><strong>BINK!</strong> - Framtidens inkasso</p>
</div>
