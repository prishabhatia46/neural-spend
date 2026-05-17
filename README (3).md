# NeuralSpend — AI Finance Intelligence Dashboard

An AI-powered personal finance dashboard built with HTML5, CSS3, and JavaScript.

## Features

- **AI Insight Engine** — Detects spending anomalies and provides actionable suggestions
- **KPI Cards** — Real-time tracking of balance, income, spend, and savings rate
- **Spending Trend Chart** — Animated monthly bar chart (Jan–Dec)
- **Category Donut Chart** — SVG-based breakdown of spending by category
- **Recent Transactions** — Live transaction feed with income/expense indicators
- **Budget Tracker** — Animated progress bars with overspend detection
- **Savings Goals** — Circular progress rings for each financial goal
- **Responsive Design** — Mobile-friendly layout using CSS Grid

## Tech Stack

| File | Purpose |
|------|---------|
| `index.html` | Page structure and semantic markup |
| `style.css` | All styling — CSS variables, layout, animations, responsive design |
| `script.js` | Data rendering, DOM manipulation, chart generation, AI interactions |

## How to Run

1. Download all three files into the same folder
2. Open `index.html` in any browser
3. No build tools or dependencies needed — runs entirely in the browser

## Project Structure

```
smart-finance/
├── index.html    ← Main HTML structure
├── style.css     ← Styling and animations
├── script.js     ← JavaScript logic and data
└── README.md     ← Project documentation
```

## Key JavaScript Functions

| Function | Description |
|----------|-------------|
| `renderBars()` | Builds animated monthly spending bar chart |
| `renderDonut()` | Draws SVG donut chart with category breakdown |
| `renderTxns()` | Renders recent transaction list dynamically |
| `renderBudgets()` | Creates animated budget progress bars |
| `renderGoals()` | Generates circular SVG progress rings for goals |
| `runAI()` | Cycles through AI-generated financial insights |
| `smartSuggest()` | Simulates AI suggestion generation with feedback |
| `refreshData()` | Triggers data refresh animation on KPI cards |

## Developer

**Prisha Bhatia** — B.Tech CSE (AI & ML), VIT Bhopal University
