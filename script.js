// ── Data ──────────────────────────────────────────────────────────────────
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const spendData = [28400, 31200, 29800, 33100, 38240, 0, 0, 0, 0, 0, 0, 0];
const maxSpend = 42000;

const categories = [
  { name:'Food & Dining',  val:12400, color:'#7c3aed', pct:32 },
  { name:'Housing',        val:10000, color:'#06b6d4', pct:26 },
  { name:'Transport',      val:5800,  color:'#f59e0b', pct:15 },
  { name:'Shopping',       val:5200,  color:'#10b981', pct:14 },
  { name:'Entertainment',  val:2900,  color:'#ef4444', pct:8  },
  { name:'Others',         val:1940,  color:'#64748b', pct:5  },
];

const transactions = [
  { icon:'🍕', name:'Swiggy Order',        date:'Today, 2:14 PM',    amount:'-₹480',   color:'#1e1b2e', neg:true  },
  { icon:'☕', name:'Starbucks',           date:'Today, 10:32 AM',   amount:'-₹360',   color:'#1b2020', neg:true  },
  { icon:'💼', name:'Salary — Cognizant',  date:'May 1, 9:00 AM',    amount:'+₹72,000',color:'#0f1f18', neg:false },
  { icon:'🛒', name:'Amazon Shopping',     date:'Apr 30, 6:45 PM',   amount:'-₹2,340', color:'#1e1b2e', neg:true  },
  { icon:'🚇', name:'Metro Card Recharge', date:'Apr 29, 8:12 AM',   amount:'-₹500',   color:'#1a1b2e', neg:true  },
  { icon:'📱', name:'Phone Recharge',      date:'Apr 28, 7:00 PM',   amount:'-₹399',   color:'#1e1b2e', neg:true  },
];

const budgets = [
  { cat:'Food & Dining', spent:12400, limit:10000, color:'#ef4444' },
  { cat:'Housing',       spent:10000, limit:10000, color:'#06b6d4' },
  { cat:'Transport',     spent:5800,  limit:7000,  color:'#7c3aed' },
  { cat:'Shopping',      spent:5200,  limit:8000,  color:'#10b981' },
];

const goals = [
  { name:'Emergency Fund', target:200000, saved:124580, color:'#7c3aed' },
  { name:'New MacBook',    target:150000, saved:67000,  color:'#06b6d4' },
  { name:'Goa Trip',       target:25000,  saved:18500,  color:'#f59e0b' },
];

// ── Render bar chart ──────────────────────────────────────────────────────
function renderBars() {
  const el = document.getElementById('trend-chart');
  el.innerHTML = '';
  spendData.forEach((v, i) => {
    const pct = v ? (v / maxSpend * 100) : 0;
    const isActive = i === 4;
    const wrap = document.createElement('div');
    wrap.className = 'bar-wrap';
    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.height = v ? '4px' : '0';
    bar.style.background = isActive ? '#7c3aed' : 'rgba(124,58,237,0.3)';
    bar.dataset.val = v ? '₹' + v.toLocaleString('en-IN') : '';
    if (isActive) bar.style.boxShadow = '0 0 12px rgba(124,58,237,0.6)';
    const label = document.createElement('div');
    label.className = 'bar-label';
    label.textContent = months[i];
    wrap.appendChild(bar);
    wrap.appendChild(label);
    el.appendChild(wrap);
    if (v) setTimeout(() => { bar.style.height = pct + '%'; }, 100 + i * 60);
  });
}

// ── Render Donut ──────────────────────────────────────────────────────────
function renderDonut() {
  const r = 40, cx = 55, cy = 55;
  const circumference = 2 * Math.PI * r;
  let offset = 0;
  const segs = document.getElementById('donut-segs');
  segs.innerHTML = '';
  categories.forEach(c => {
    const dash = (c.pct / 100) * circumference;
    const gap  = circumference - dash;
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', cx);
    circle.setAttribute('cy', cy);
    circle.setAttribute('r', r);
    circle.setAttribute('fill', 'none');
    circle.setAttribute('stroke', c.color);
    circle.setAttribute('stroke-width', '12');
    circle.setAttribute('stroke-dasharray', `${dash} ${gap}`);
    circle.setAttribute('stroke-dashoffset', -offset);
    circle.style.transition = 'stroke-dasharray 1s ease';
    segs.appendChild(circle);
    offset += dash;
  });

  const leg = document.getElementById('donut-legend');
  leg.innerHTML = '';
  categories.forEach(c => {
    leg.innerHTML += `
      <div class="legend-item">
        <div class="legend-dot" style="background:${c.color}"></div>
        <span class="legend-label">${c.name}</span>
        <span class="legend-val">${c.pct}%</span>
      </div>`;
  });
}

// ── Render Transactions ───────────────────────────────────────────────────
function renderTxns() {
  const el = document.getElementById('txn-list');
  el.innerHTML = transactions.map(t => `
    <div class="txn">
      <div class="txn-icon" style="background:${t.color}">${t.icon}</div>
      <div class="txn-info">
        <div class="txn-name">${t.name}</div>
        <div class="txn-date">${t.date}</div>
      </div>
      <div class="txn-amount ${t.neg ? 'down' : 'up'}">${t.amount}</div>
    </div>`).join('');
}

// ── Render Budgets ────────────────────────────────────────────────────────
function renderBudgets() {
  const el = document.getElementById('budget-list');
  el.innerHTML = budgets.map(b => {
    const pct = Math.min((b.spent / b.limit) * 100, 100);
    return `
      <div class="budget-item">
        <div class="budget-header">
          <span class="budget-cat">${b.cat}</span>
          <span class="budget-nums">₹${b.spent.toLocaleString('en-IN')} / ₹${b.limit.toLocaleString('en-IN')}</span>
        </div>
        <div class="budget-track">
          <div class="budget-fill" style="width:0%; background:${b.color}" data-pct="${pct}"></div>
        </div>
      </div>`;
  }).join('');
  setTimeout(() => {
    document.querySelectorAll('.budget-fill').forEach(el => {
      el.style.width = el.dataset.pct + '%';
    });
  }, 200);
}

// ── Render Goals ──────────────────────────────────────────────────────────
function renderGoals() {
  const el = document.getElementById('goals-list');
  el.innerHTML = goals.map(g => {
    const pct = Math.round((g.saved / g.target) * 100);
    const r = 17, circ = 2 * Math.PI * r;
    const dash = (pct / 100) * circ;
    return `
      <div class="goal">
        <div class="goal-ring">
          <svg width="42" height="42" viewBox="0 0 42 42">
            <circle cx="21" cy="21" r="${r}" fill="none" stroke="var(--surface2)" stroke-width="4"/>
            <circle cx="21" cy="21" r="${r}" fill="none" stroke="${g.color}" stroke-width="4"
              stroke-dasharray="${dash} ${circ}" stroke-dashoffset="${circ * 0.25}" stroke-linecap="round"/>
          </svg>
          <div class="goal-pct" style="color:${g.color}">${pct}%</div>
        </div>
        <div class="goal-info">
          <div class="goal-name">${g.name}</div>
          <div class="goal-sub">₹${g.saved.toLocaleString('en-IN')} of ₹${g.target.toLocaleString('en-IN')}</div>
        </div>
      </div>`;
  }).join('');
}

// ── AI Interactions ───────────────────────────────────────────────────────
const aiMessages = [
  'Your <strong>Food & Dining</strong> spend increased <strong>₹4,200 (34%)</strong> this month. Reducing dining by <strong>₹1,500/week</strong> for 3 weeks gets you back on track.',
  'AI detected <strong>3 recurring subscriptions</strong> you haven\'t used in 60+ days totaling <strong>₹1,890/month</strong>. Cancel them to save <strong>₹22,680/year</strong>.',
  'Based on your savings rate, you\'ll reach your <strong>Emergency Fund goal</strong> in <strong>4.1 months</strong>. Increasing SIP by ₹2,000 cuts it to 3.2 months.',
];
let aiIdx = 0;

function runAI() {
  aiIdx = (aiIdx + 1) % aiMessages.length;
  const el = document.getElementById('ai-msg');
  el.style.opacity = 0;
  setTimeout(() => {
    el.innerHTML = aiMessages[aiIdx];
    el.style.transition = 'opacity 0.4s';
    el.style.opacity = 1;
  }, 300);
}

function smartSuggest() {
  const btn = event.target;
  btn.textContent = '⬡ Analyzing...';
  setTimeout(() => {
    btn.textContent = '✓ 3 suggestions ready';
    btn.style.background = '#10b981';
  }, 1200);
  setTimeout(() => {
    btn.textContent = '⬡ Smart Suggestions';
    btn.style.background = 'var(--accent)';
  }, 3000);
}

function refreshData() {
  const btn = event.target;
  btn.textContent = '↻ Syncing...';
  setTimeout(() => { btn.textContent = '↻ Refresh'; }, 1500);
  const kpis = ['kv1','kv2','kv3','kv4'];
  kpis.forEach(id => {
    const el = document.getElementById(id);
    el.style.opacity = 0;
    setTimeout(() => {
      el.style.transition = 'opacity 0.3s';
      el.style.opacity = 1;
    }, 400);
  });
}

// ── Init ──────────────────────────────────────────────────────────────────
renderBars();
renderDonut();
renderTxns();
renderBudgets();
renderGoals();
