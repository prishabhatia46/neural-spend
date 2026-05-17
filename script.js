// ===== DATA =====
const transactions = [
  { emoji: '🏢', name: 'Cognizant Salary', cat: 'Salary', date: '01 May', amount: 72000, type: 'credit' },
  { emoji: '🍕', name: 'Zomato', cat: 'Food', date: '02 May', amount: 840, type: 'debit' },
  { emoji: '🛍️', name: 'Amazon', cat: 'Shopping', date: '03 May', amount: 2340, type: 'debit' },
  { emoji: '⛽', name: 'BPCL Fuel', cat: 'Transport', date: '04 May', amount: 1200, type: 'debit' },
  { emoji: '🎬', name: 'Netflix', cat: 'Entertainment', date: '05 May', amount: 649, type: 'debit' },
  { emoji: '🍔', name: 'Swiggy', cat: 'Food', date: '06 May', amount: 560, type: 'debit' },
  { emoji: '💊', name: 'Apollo Pharmacy', cat: 'Health', date: '07 May', amount: 1200, type: 'debit' },
  { emoji: '🚕', name: 'Ola Cab', cat: 'Transport', date: '08 May', amount: 340, type: 'debit' },
  { emoji: '☕', name: 'Starbucks', cat: 'Food', date: '09 May', amount: 480, type: 'debit' },
  { emoji: '📱', name: 'Jio Recharge', cat: 'Shopping', date: '10 May', amount: 299, type: 'debit' },
  { emoji: '🏋️', name: 'Cult.fit Gym', cat: 'Health', date: '11 May', amount: 999, type: 'debit' },
  { emoji: '🎵', name: 'Spotify Premium', cat: 'Entertainment', date: '12 May', amount: 119, type: 'debit' },
  { emoji: '🛒', name: 'DMart Groceries', cat: 'Shopping', date: '13 May', amount: 3200, type: 'debit' },
  { emoji: '🍜', name: 'Barbeque Nation', cat: 'Food', date: '14 May', amount: 1840, type: 'debit' },
  { emoji: '🚇', name: 'Metro Card', cat: 'Transport', date: '15 May', amount: 500, type: 'debit' },
];

const budgets = [
  { name: 'Food & Dining', spent: 12400, total: 15000, color: '#ef4444' },
  { name: 'Shopping', spent: 8200, total: 10000, color: '#f59e0b' },
  { name: 'Transport', spent: 3800, total: 5000, color: '#3b82f6' },
  { name: 'Entertainment', spent: 2100, total: 3000, color: '#8b5cf6' },
  { name: 'Health', spent: 4200, total: 5000, color: '#22c55e' },
  { name: 'Shopping (Online)', spent: 7540, total: 8000, color: '#f97316' },
];

const goals = [
  { name: 'Emergency Fund', current: 45000, target: 60000, color: '#3b82f6', icon: '🛡️', detail: 'You are 75% towards your Emergency Fund goal of ₹60,000. Keep going — just ₹15,000 more!' },
  { name: 'New Laptop', current: 28000, target: 80000, color: '#8b5cf6', icon: '💻', detail: 'You\'ve saved ₹28,000 towards your new laptop. At current savings rate, you\'ll reach the goal in ~4 months.' },
  { name: 'Vacation 2025', current: 18500, target: 50000, color: '#f59e0b', icon: '✈️', detail: 'Trip planning underway! ₹18,500 saved so far. ₹31,500 remaining to hit your vacation budget.' },
  { name: 'Home Down Payment', current: 120000, target: 500000, color: '#ef4444', icon: '🏠', detail: '₹1,20,000 of ₹5,00,000 saved. This is a long-term goal — set up an automated SIP to accelerate it.' },
];

const suggestions = [
  { icon: '🍽️', bg: 'rgba(239,68,68,0.1)', title: 'Cut dining spend by ₹1,500/week', desc: 'Food & Dining is 34% above your 3-month average', tag: 'High Impact', tagClass: '' },
  { icon: '📺', bg: 'rgba(139,92,246,0.1)', title: 'Review streaming subscriptions', desc: 'You have 3 active subscriptions — consider pausing one', tag: 'Easy Win', tagClass: 'low' },
  { icon: '📈', bg: 'rgba(59,130,246,0.1)', title: 'Increase SIP by ₹2,000/month', desc: 'Your income rose 5% but SIP amount stayed same', tag: 'Medium', tagClass: 'med' },
];

// ===== CHARTS =====
let spendChartInstance = null;
let categoryChartInstance = null;
let budgetPieInstance = null;
let investChartInstance = null;
let analyticsBarInstance = null;
let analyticsLineInstance = null;

const chartDefaults = {
  font: { family: 'Sora' },
  color: '#64748b',
};

function getGridColor() {
  return document.body.classList.contains('dark') ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)';
}

function initSpendChart(type = 'line') {
  const ctx = document.getElementById('spendChart');
  if (!ctx) return;
  if (spendChartInstance) spendChartInstance.destroy();
  const data = [32000, 35500, 29000, 41000, 38240, 0, 0, 0, 0, 0, 0, 0];
  const labels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  spendChartInstance = new Chart(ctx, {
    type,
    data: {
      labels,
      datasets: [{
        label: 'Monthly Spend',
        data,
        backgroundColor: type === 'bar' ? 'rgba(59,130,246,0.6)' : 'rgba(59,130,246,0.1)',
        borderColor: '#3b82f6',
        borderWidth: 2,
        fill: type === 'line',
        tension: 0.4,
        pointBackgroundColor: '#3b82f6',
        pointRadius: 4,
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { color: getGridColor() }, ticks: { color: '#64748b', font: { size: 11 } } },
        y: { grid: { color: getGridColor() }, ticks: { color: '#64748b', font: { size: 11 }, callback: v => '₹' + (v/1000) + 'k' } }
      }
    }
  });
}

function initCategoryChart() {
  const ctx = document.getElementById('categoryChart');
  if (!ctx) return;
  if (categoryChartInstance) categoryChartInstance.destroy();
  categoryChartInstance = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Food', 'Shopping', 'Transport', 'Entertainment', 'Health'],
      datasets: [{
        data: [12400, 8200, 3800, 2100, 4200],
        backgroundColor: ['#ef4444','#f59e0b','#3b82f6','#8b5cf6','#22c55e'],
        borderWidth: 0,
        hoverOffset: 6,
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom', labels: { color: '#64748b', font: { size: 11 }, padding: 12, boxWidth: 12 } }
      }
    }
  });
}

function initBudgetPie() {
  const ctx = document.getElementById('budgetPieChart');
  if (!ctx) return;
  if (budgetPieInstance) budgetPieInstance.destroy();
  budgetPieInstance = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: budgets.map(b => b.name),
      datasets: [{
        data: budgets.map(b => b.total),
        backgroundColor: budgets.map(b => b.color),
        borderWidth: 2,
        borderColor: document.body.classList.contains('dark') ? '#1e293b' : '#fff',
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom', labels: { color: '#64748b', font: { size: 11 }, padding: 10, boxWidth: 12 } }
      }
    }
  });
}

function initInvestChart() {
  const ctx = document.getElementById('investChart');
  if (!ctx) return;
  if (investChartInstance) investChartInstance.destroy();
  investChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan','Feb','Mar','Apr','May'],
      datasets: [
        { label: 'Cognizant (CTSH)', data: [95000, 100000, 108000, 112000, 118400], borderColor: '#22c55e', tension: 0.4, pointRadius: 4, pointBackgroundColor: '#22c55e', borderWidth: 2, fill: false },
        { label: 'TCS', data: [99000, 97000, 95000, 96000, 94200], borderColor: '#ef4444', tension: 0.4, pointRadius: 4, pointBackgroundColor: '#ef4444', borderWidth: 2, fill: false },
        { label: 'Mutual Funds', data: [100000, 108000, 115000, 122000, 129400], borderColor: '#3b82f6', tension: 0.4, pointRadius: 4, pointBackgroundColor: '#3b82f6', borderWidth: 2, fill: false },
      ]
    },
    options: {
      responsive: true,
      plugins: { legend: { position: 'bottom', labels: { color: '#64748b', font: { size: 11 }, padding: 12, boxWidth: 12 } } },
      scales: {
        x: { grid: { color: getGridColor() }, ticks: { color: '#64748b', font: { size: 11 } } },
        y: { grid: { color: getGridColor() }, ticks: { color: '#64748b', font: { size: 11 }, callback: v => '₹' + (v/1000) + 'k' } }
      }
    }
  });
}

function initAnalyticsCharts() {
  const ctx1 = document.getElementById('analyticsBar');
  const ctx2 = document.getElementById('analyticsLine');
  if (!ctx1 || !ctx2) return;
  if (analyticsBarInstance) analyticsBarInstance.destroy();
  if (analyticsLineInstance) analyticsLineInstance.destroy();

  analyticsBarInstance = new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: ['Jan','Feb','Mar','Apr','May'],
      datasets: [
        { label: 'Income', data: [68000,68000,72000,72000,72000], backgroundColor: 'rgba(34,197,94,0.7)' },
        { label: 'Spend', data: [32000,35500,29000,41000,38240], backgroundColor: 'rgba(239,68,68,0.7)' },
      ]
    },
    options: {
      responsive: true,
      plugins: { legend: { position: 'bottom', labels: { color: '#64748b', font: { size: 11 }, padding: 12, boxWidth: 12 } } },
      scales: {
        x: { grid: { color: getGridColor() }, ticks: { color: '#64748b', font: { size: 11 } } },
        y: { grid: { color: getGridColor() }, ticks: { color: '#64748b', font: { size: 11 }, callback: v => '₹' + (v/1000) + 'k' } }
      }
    }
  });

  analyticsLineInstance = new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ['Jan','Feb','Mar','Apr','May'],
      datasets: [
        { label: 'Income', data: [68000,68000,72000,72000,72000], borderColor: '#22c55e', tension: 0.4, fill: false, pointRadius: 4, borderWidth: 2, pointBackgroundColor: '#22c55e' },
        { label: 'Savings', data: [36000,32500,43000,31000,33760], borderColor: '#3b82f6', tension: 0.4, fill: false, pointRadius: 4, borderWidth: 2, pointBackgroundColor: '#3b82f6' },
      ]
    },
    options: {
      responsive: true,
      plugins: { legend: { position: 'bottom', labels: { color: '#64748b', font: { size: 11 }, padding: 12, boxWidth: 12 } } },
      scales: {
        x: { grid: { color: getGridColor() }, ticks: { color: '#64748b', font: { size: 11 } } },
        y: { grid: { color: getGridColor() }, ticks: { color: '#64748b', font: { size: 11 }, callback: v => '₹' + (v/1000) + 'k' } }
      }
    }
  });
}

// ===== RENDER FUNCTIONS =====
function renderRecentTxns() {
  const el = document.getElementById('recent-txns');
  if (!el) return;
  el.innerHTML = transactions.slice(0, 6).map(t => txnHTML(t)).join('');
}

function renderAllTxns(list) {
  const el = document.getElementById('all-txns-list');
  if (!el) return;
  if (list.length === 0) {
    el.innerHTML = '<p style="text-align:center;color:#64748b;padding:2rem">No transactions found.</p>';
    return;
  }
  el.innerHTML = list.map(t => txnHTML(t)).join('');
}

function txnHTML(t) {
  const bg = t.type === 'credit' ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.06)';
  const amtStr = (t.type === 'credit' ? '+' : '-') + '₹' + t.amount.toLocaleString('en-IN');
  return `
    <div class="txn-row" onclick="openModal('${t.name}','<strong>Category:</strong> ${t.cat}<br><strong>Date:</strong> ${t.date} 2025<br><strong>Amount:</strong> ${amtStr}<br><strong>Type:</strong> ${t.type === 'credit' ? '✅ Credit' : '🔴 Debit'}<br><strong>Status:</strong> Completed')">
      <div class="txn-emoji" style="background:${bg}">${t.emoji}</div>
      <div class="txn-info">
        <div class="txn-name">${t.name}</div>
        <div class="txn-cat">${t.cat}</div>
      </div>
      <div>
        <div class="txn-amount ${t.type}">${amtStr}</div>
        <div class="txn-date">${t.date}</div>
      </div>
    </div>`;
}

function filterTxns() {
  const search = document.getElementById('txn-search').value.toLowerCase();
  const cat = document.getElementById('txn-filter').value;
  const filtered = transactions.filter(t => {
    const matchCat = cat === 'all' || t.cat === cat;
    const matchSearch = t.name.toLowerCase().includes(search) || t.cat.toLowerCase().includes(search);
    return matchCat && matchSearch;
  });
  renderAllTxns(filtered);
}

function renderBudgetPreview() {
  const el = document.getElementById('budget-preview');
  if (!el) return;
  el.innerHTML = budgets.slice(0, 4).map(b => budgetHTML(b, true)).join('');
}

function renderBudgetFull() {
  const el = document.getElementById('budget-full');
  if (!el) return;
  el.innerHTML = budgets.map(b => budgetHTML(b, false)).join('');
}

function budgetHTML(b, compact) {
  const pct = Math.round((b.spent / b.total) * 100);
  const spentColor = pct >= 90 ? '#ef4444' : pct >= 75 ? '#f59e0b' : '#22c55e';
  return `
    <div class="budget-item" onclick="openModal('${b.name} Budget','<strong>Spent:</strong> ₹${b.spent.toLocaleString('en-IN')}<br><strong>Budget:</strong> ₹${b.total.toLocaleString('en-IN')}<br><strong>Remaining:</strong> ₹${(b.total-b.spent).toLocaleString('en-IN')}<br><strong>Used:</strong> ${pct}%<br><br>${pct >= 90 ? '🔴 Critical — almost at limit!' : pct >= 75 ? '🟡 Caution — spending fast' : '🟢 On track'}')">
      <div class="budget-top">
        <span>${b.name}</span>
        <span style="color:${spentColor}">₹${b.spent.toLocaleString('en-IN')} / ₹${b.total.toLocaleString('en-IN')}</span>
      </div>
      <div class="budget-bar">
        <div class="budget-fill" style="width:${pct}%;background:${b.color}"></div>
      </div>
      ${!compact ? `<div style="font-size:11px;color:#64748b;margin-top:4px;text-align:right">${pct}% used</div>` : ''}
    </div>`;
}

function renderGoals() {
  const el = document.getElementById('goals-grid');
  if (!el) return;
  el.innerHTML = goals.map(g => {
    const pct = Math.round((g.current / g.target) * 100);
    return `
      <div class="goal-card" onclick="openModal('${g.name}','${g.detail}<br><br><strong>Progress:</strong> ${pct}%<br><strong>Saved:</strong> ₹${g.current.toLocaleString(\'en-IN\')}<br><strong>Target:</strong> ₹${g.target.toLocaleString(\'en-IN\')}')">
        <div class="goal-header">
          <span class="goal-name">${g.icon} ${g.name}</span>
          <span class="goal-pct">${pct}%</span>
        </div>
        <div class="goal-bar">
          <div class="goal-fill" style="width:${pct}%;background:${g.color}"></div>
        </div>
        <div class="goal-amounts">
          <span><strong>₹${g.current.toLocaleString('en-IN')}</strong> saved</span>
          <span>Goal: <strong>₹${g.target.toLocaleString('en-IN')}</strong></span>
        </div>
      </div>`;
  }).join('');
}

function renderSuggestions() {
  const el = document.getElementById('suggestions-list');
  if (!el) return;
  el.innerHTML = suggestions.map(s => `
    <div class="suggestion-item" onclick="showToast('💡 Tip applied to your plan!')">
      <div class="suggestion-icon" style="background:${s.bg}">${s.icon}</div>
      <div class="suggestion-text">
        <strong>${s.title}</strong>
        <span>${s.desc}</span>
      </div>
      <span class="suggestion-tag ${s.tagClass}">${s.tag}</span>
    </div>`).join('');
}

// ===== NAVIGATION =====
const tabTitles = {
  dashboard: 'Financial Overview',
  transactions: 'All Transactions',
  budget: 'Budget Tracker',
  investments: 'Investments',
  goals: 'Savings Goals',
  analytics: 'Analytics',
  settings: 'Settings',
};

function showTab(name) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const tab = document.getElementById('tab-' + name);
  if (tab) tab.classList.add('active');

  const navItem = document.querySelector(`.nav-item[data-tab="${name}"]`);
  if (navItem) navItem.classList.add('active');

  const titleEl = document.getElementById('page-title');
  if (titleEl) titleEl.textContent = tabTitles[name] || name;

  // Init charts on demand
  if (name === 'dashboard') { initSpendChart(currentChartType); initCategoryChart(); }
  if (name === 'transactions') { renderAllTxns(transactions); }
  if (name === 'budget') { renderBudgetFull(); setTimeout(initBudgetPie, 100); }
  if (name === 'investments') { setTimeout(initInvestChart, 100); }
  if (name === 'goals') { renderGoals(); }
  if (name === 'analytics') { setTimeout(initAnalyticsCharts, 100); renderSuggestions(); }

  // Close sidebar on mobile
  if (window.innerWidth <= 768) {
    document.getElementById('sidebar').classList.remove('open');
  }
}

// ===== SIDEBAR TOGGLE =====
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

// ===== NOTIFICATIONS =====
function toggleNotif() {
  document.getElementById('notif-panel').classList.toggle('open');
}

function notifClick(el, title, detail) {
  el.classList.remove('unread');
  updateNotifDot();
  openModal(title, detail);
}

function updateNotifDot() {
  const unread = document.querySelectorAll('.notif-item.unread').length;
  const dot = document.getElementById('notif-dot');
  if (dot) dot.style.display = unread > 0 ? 'block' : 'none';
}

// ===== MODAL =====
function openModal(title, body) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').innerHTML = body;
  document.getElementById('modal').classList.add('open');
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
}

// ===== TOAST =====
let toastTimer = null;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}

// ===== AI BANNER =====
function dismissBanner() {
  const b = document.getElementById('ai-banner');
  if (b) { b.style.opacity = '0'; b.style.transform = 'scale(0.97)'; setTimeout(() => b.remove(), 300); }
  showToast('✅ AI suggestion dismissed');
}

function runAIAnalysis() {
  showToast('⬡ AI Analysis running... 3 new insights found!');
  setTimeout(() => showToast('📊 Analysis complete: Reduce dining by ₹1,500/week'), 2000);
}

// ===== REFRESH =====
function refreshData() {
  const icon = document.querySelector('.btn-icon i.fa-rotate-right');
  if (icon) { icon.style.animation = 'spin 0.8s linear'; setTimeout(() => icon.style.animation = '', 800); }
  showToast('🔄 Data refreshed successfully!');
}

// ===== CHART TOGGLE =====
let currentChartType = 'line';
function chartToggle(type) {
  currentChartType = type;
  document.getElementById('btn-bar').classList.toggle('active', type === 'bar');
  document.getElementById('btn-line').classList.toggle('active', type === 'line');
  initSpendChart(type);
}

// ===== DARK MODE =====
function toggleDark(checkbox) {
  document.body.classList.toggle('dark', checkbox.checked);
  showToast(checkbox.checked ? '🌙 Dark mode enabled' : '☀️ Light mode enabled');
  // Re-init visible charts
  setTimeout(() => {
    initSpendChart(currentChartType);
    initCategoryChart();
  }, 100);
}

// ===== ADD GOAL PROMPT =====
function addGoalPrompt() {
  openModal('Add New Goal',
    `<div style="display:flex;flex-direction:column;gap:12px">
      <div>
        <label style="font-size:11px;color:#64748b;display:block;margin-bottom:4px">Goal Name</label>
        <input id="new-goal-name" placeholder="e.g. New Car" style="width:100%;padding:8px 12px;border-radius:8px;border:1px solid #e2e8f0;background:var(--bg,#f4f6fb);font-size:13px;color:var(--text,#0f172a);outline:none" />
      </div>
      <div>
        <label style="font-size:11px;color:#64748b;display:block;margin-bottom:4px">Target Amount (₹)</label>
        <input id="new-goal-target" type="number" placeholder="e.g. 200000" style="width:100%;padding:8px 12px;border-radius:8px;border:1px solid #e2e8f0;background:var(--bg,#f4f6fb);font-size:13px;color:var(--text,#0f172a);outline:none" />
      </div>
      <button onclick="saveNewGoal()" style="background:#3b82f6;color:#fff;border:none;padding:10px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;margin-top:4px">+ Add Goal</button>
    </div>`
  );
}

function saveNewGoal() {
  const name = document.getElementById('new-goal-name').value.trim();
  const target = parseInt(document.getElementById('new-goal-target').value);
  if (!name || !target) { showToast('⚠️ Please fill in all fields'); return; }
  goals.push({ name, current: 0, target, color: '#3b82f6', icon: '🎯', detail: `New goal created: ${name}. Start saving towards ₹${target.toLocaleString('en-IN')}!` });
  closeModal();
  renderGoals();
  showToast('🎯 New goal "' + name + '" added!');
}

// ===== CSS SPIN ANIMATION =====
const style = document.createElement('style');
style.textContent = '@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }';
document.head.appendChild(style);

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderRecentTxns();
  renderBudgetPreview();
  updateNotifDot();
  setTimeout(() => {
    initSpendChart('line');
    initCategoryChart();
  }, 200);
});
