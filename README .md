# ⬡ NeuralSpend — AI Finance Intelligence Dashboard

![Version](https://img.shields.io/badge/version-2.4-blue?style=flat-square)
![Status](https://img.shields.io/badge/status-live-brightgreen?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-purple?style=flat-square)
![Made With](https://img.shields.io/badge/made%20with-HTML%20%7C%20CSS%20%7C%20JS-orange?style=flat-square)

> A fully interactive, AI-powered personal finance dashboard — built with vanilla HTML, CSS, and JavaScript. No frameworks, no build tools. Just open and go.

---

## 🔗 Live Demo

👉 **[prishabhatia46.github.io/neural-spend](https://prishabhatia46.github.io/neural-spend/)**

---

## 📸 Preview

```
┌─────────────────────────────────────────────────────────┐
│  ⬡ NeuralSpend v2.4          🔔  PS                    │
├──────────┬──────────────────────────────────────────────┤
│ Dashboard│  💳 ₹1,24,580   📤 ₹38,240   📥 ₹72,000    │
│ Txns     │  ──────────────────────────────────────────  │
│ Budget   │  [Spending Trend Chart] [Category Donut]     │
│ Invest   │  ──────────────────────────────────────────  │
│ Goals    │  [Recent Transactions] [Budget Bars]         │
│ Analytics│                                              │
│ Settings │                                              │
└──────────┴──────────────────────────────────────────────┘
```

---

## ✨ Features

### 📊 Dashboard
- **4 KPI Cards** — Total Balance, Monthly Spend, Income, Savings Rate — each clickable with a detailed breakdown modal
- **Spending Trend Chart** — toggle between Bar and Line view (Jan–May 2025)
- **Category Donut Chart** — visual split of spending across Food, Shopping, Transport, etc.
- **Recent Transactions** — last 6 entries with quick-view on click
- **Budget Preview** — top 4 budget bars with color-coded overspend alerts
- **AI Anomaly Banner** — dismissible alert with AI-detected spending anomaly

### 💸 Transactions
- Full transaction history (15+ entries)
- **Live search** — filter by name or category as you type
- **Dropdown filter** — by category (Food, Salary, Transport, Shopping, Health, Entertainment)
- Clickable rows showing amount, date, category, and status

### 🎯 Budget
- Detailed budget bars for 6 categories
- Color-coded: 🟢 On track / 🟡 Caution / 🔴 Critical
- **Pie chart** showing budget distribution
- Click any bar to see spent vs remaining breakdown

### 📈 Investments
- Portfolio KPI cards: Total Portfolio, Cognizant (CTSH), TCS, Mutual Funds
- **Multi-line portfolio trend chart** (Jan–May 2025)
- Detailed modal on each holding with gain/loss info

### 🏁 Goals
- 4 savings goals with animated progress bars
- Click any goal for detailed progress info
- **Add New Goal** button — interactive form inside modal
- Goals: Emergency Fund, New Laptop, Vacation 2025, Home Down Payment

### 📉 Analytics
- **Grouped Bar Chart** — Income vs Spend comparison (Jan–May)
- **Line Chart** — Income vs Savings trend
- **AI Smart Suggestions** — 3 prioritized tips (High / Medium / Easy Win)

### ⚙️ Settings
- **Profile section** — Name, Company (Cognizant Technology Solutions), Role, Email, Phone, Currency
- **Save Changes** button with confirmation toast
- **Dark Mode toggle** — switches entire UI theme
- **AI Alerts, Weekly Report, Budget Alerts** — all toggleable with instant feedback

### 🔔 Notifications
- Slide-in notification panel from top-right
- 4 notifications: Overspend Alert, Salary Credit, Investment Update, AI Insight
- Unread indicators that clear on click

---

## 🗂️ File Structure

```
neural-spend/
│
├── index.html       ← Main HTML structure (all tabs, modals, panels)
├── style.css        ← Complete styling (light + dark mode, responsive)
├── script.js        ← All interactivity, chart rendering, data logic
└── README.md        ← You are here
```

---

## 🚀 Getting Started

### Option 1 — Open Locally
```bash
# Clone the repo
git clone https://github.com/prishabhatia46/neural-spend.git

# Enter folder
cd neural-spend

# Open in browser
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

No `npm install`. No build step. Just open `index.html`.

### Option 2 — GitHub Pages (Already Live)
The site is deployed via GitHub Pages at the link above. To re-deploy after changes:

```bash
git add .
git commit -m "update dashboard"
git push origin main
```

GitHub Pages auto-updates within ~30 seconds.

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Structure and semantic layout |
| CSS3 | Custom properties, animations, dark mode, responsive grid |
| Vanilla JavaScript (ES6+) | All interactivity, data rendering, chart logic |
| [Chart.js v4.4](https://www.chartjs.org/) | Line, Bar, Doughnut, Pie charts |
| [Font Awesome 6.5](https://fontawesome.com/) | Icons throughout the UI |
| [Sora](https://fonts.google.com/specimen/Sora) | Primary display font |
| [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) | Monospace for numbers |

**Zero dependencies to install.** All libraries loaded via CDN.

---

## 🎨 UI Highlights

- **Dark Mode** — full theme switch via Settings toggle, no flash
- **Responsive** — works on mobile, tablet, desktop; sidebar collapses on small screens
- **Animated charts** — Chart.js with smooth transitions on load and toggle
- **Modal system** — click anything to get a detailed breakdown popup
- **Toast notifications** — non-intrusive feedback for every action
- **Slide-in notification panel** — with unread dot indicator on bell icon
- **CSS custom properties** — easy to re-theme by changing `:root` variables

---

## 📱 Responsive Breakpoints

| Screen | Layout |
|---|---|
| > 768px | Sidebar visible, 2-column grid |
| ≤ 768px | Hamburger menu, single column, sidebar slides in |
| ≤ 480px | KPI cards stack to 1 column |

---

## 🧠 Data

All data is **static and local** — no API calls, no backend. Defined in `script.js`:

- `transactions[]` — 15 transactions with emoji, name, category, date, amount
- `budgets[]` — 6 budget categories with spent/total/color
- `goals[]` — 4 savings goals with current/target progress
- `suggestions[]` — 3 AI smart suggestions with priority tags

To customize, simply edit these arrays in `script.js`.

---

## 👩‍💻 Author

**Prisha Bhatia**
Senior Software Engineer at Cognizant Technology Solutions, Pune

- GitHub: [@prishabhatia46](https://github.com/prishabhatia46)

---

## 📄 License

MIT License — free to use, modify, and distribute.

---

*Built with ❤️ and vanilla JS — no frameworks were harmed in the making of this dashboard.*
