// ---- DATA ----
const EVENTS = [
  { artist: "SEVENTEEN", venue: "KSPO Dome", city: "Seoul", date: "Aug 15, 2026", genre: "K-POP", region: "Korea", price: "₱9,500", colors: ["#C9A84C", "#8B6A1E"] },
  { artist: "BLACKPINK", venue: "Mall of Asia Arena", city: "Manila", date: "Sep 3, 2026", genre: "K-POP", region: "PH", price: "₱5,800", colors: ["#E85D26", "#8B3510"] },
  { artist: "aespa", venue: "Singapore Indoor Stadium", city: "Singapore", date: "Sep 20, 2026", genre: "K-POP", region: "SG", price: "SGD 198", colors: ["#4A7FBF", "#1C3F6A"] },
  { artist: "BTS", venue: "Allegiant Stadium", city: "Las Vegas", date: "Oct 1, 2026", genre: "K-POP", region: "America", price: "USD 250", colors: ["#8B4BAA", "#4A2261"] },
  { artist: "NewJeans", venue: "Taipei Arena", city: "Taipei", date: "Oct 14, 2026", genre: "K-POP", region: "Taiwan", price: "TWD 5,500", colors: ["#3A6A40", "#1C3C20"] },
  { artist: "IVE", venue: "AsiaWorld-Expo", city: "Hong Kong", date: "Nov 2, 2026", genre: "K-POP", region: "HK", price: "HKD 1,200", colors: ["#C9A84C", "#7A6420"] },
  { artist: "aespa", venue: "AccorHotels Arena", city: "Paris", date: "Nov 18, 2026", genre: "K-POP", region: "Europe", price: "EUR 120", colors: ["#E85D26", "#8B3510"] },
  { artist: "STRAY KIDS", venue: "Cotai Arena", city: "Macau", date: "Dec 5, 2026", genre: "K-POP", region: "Macau", price: "MOP 980", colors: ["#4A7FBF", "#1C3F6A"] },
];
const SVCS = [
  { icon: "🎟", name: "Presale Queuing", desc: "We queue during limited presales so you don't have to. Our team goes live 30 minutes before the window opens, maximizing your chances of securing preferred seats.", duration: "1–3 hours", price: "₱800–₱1,500" },
  { icon: "💺", name: "Seat Selection", desc: "Tell us your preferred section, row, or specific seat numbers. We navigate interactive seat maps and secure the closest available match to your request.", duration: "30–60 min", price: "₱500–₱1,000" },
  { icon: "👥", name: "Group Booking", desc: "Coordinating concert groups of 4 or more? We lock in adjacent seats in a single transaction — no more splitting up or scrambling for nearby seats.", duration: "1–2 hours", price: "₱400/ticket" },
  { icon: "🌏", name: "International Access", desc: "Ticketing sites that block international IPs, require local accounts, or need local payment methods — we handle all of it. Available for KR, JP, FR, UK, US sites.", duration: "Varies", price: "₱1,000–₱2,000" },
  { icon: "🔄", name: "Ticket Transfer", desc: "Already have a ticket but need to send it to someone else? We handle the safe transfer or resale within verified platforms to avoid fraud.", duration: "1–24 hours", price: "₱300–₱600" },
  { icon: "⚡", name: "Last-Minute Assistance", desc: "Show is tomorrow and you still don't have a ticket? We check resale platforms, verified channels, and fan networks to find remaining availability.", duration: "ASAP", price: "₱1,500–₱3,000" },
];
const PROOFS = [
  { cat: "feedback", icon: "💬", title: "SEVENTEEN Manila Client", date: "May 2026", label: "5★ Review", desc: "Philippine client secured VIP floor for SEVENTEEN Manila. Glowing review left after the show." },
  { cat: "transaction", icon: "🧾", title: "GCash Payment Receipt", date: "May 2026", label: "Confirmed", desc: "GCash payment for SEVENTEEN KSPO Dome — ₱9,800 confirmed and acknowledged." },
  { cat: "result", icon: "🎟", title: "BTS Vegas — QR Ticket", date: "Apr 2026", label: "Delivered", desc: "QR ticket delivered within 3 minutes of payment confirmation for BTS Las Vegas." },
  { cat: "feedback", icon: "💬", title: "aespa SG Client", date: "Apr 2026", label: "5★ Review", desc: "Singapore client secured Premium section for aespa at Singapore Indoor Stadium." },
  { cat: "transaction", icon: "💸", title: "PayPal Transfer Proof", date: "Apr 2026", label: "Confirmed", desc: "PayPal payment confirmed for IVE Hong Kong assistance." },
  { cat: "result", icon: "✅", title: "BLACKPINK Manila — VIP", date: "Mar 2026", label: "Completed", desc: "2 VIP floor tickets secured despite the show selling out in under 4 minutes." },
  { cat: "feedback", icon: "💬", title: "NewJeans Taipei Client", date: "Mar 2026", label: "5★ Review", desc: "Taiwanese client secured front-row premium seats for NewJeans Taipei Arena." },
  { cat: "transaction", icon: "🧾", title: "Bank Transfer Screenshot", date: "Feb 2026", label: "Verified", desc: "Bank transfer verified for STRAY KIDS Macau assistance." },
  { cat: "result", icon: "🎉", title: "IVE HK — Premium Row 1", date: "Feb 2026", label: "Completed", desc: "Premium Row 1 secured for IVE AsiaWorld-Expo after client failed 2 solo attempts." },
];
const REVIEWS = [
  { stars: 5, text: "Got my SEVENTEEN pit ticket in 4 minutes flat. The live updates kept me calm throughout the whole presale.", author: "K.", region: "PH", date: "May 2026", hasPhoto: true },
  { stars: 5, text: "Tried to get BTS tickets on my own and failed 3 times. Used Daegu Assistance and got premium seats first try.", author: "Anonymous", region: "America", date: "Apr 2026", hasPhoto: false },
  { stars: 5, text: "Really professional service. They sent me screenshots every step and my ticket arrived exactly as described.", author: "J.L.", region: "SG", date: "Apr 2026", hasPhoto: true },
  { stars: 4, text: "Great service overall. Took a bit longer than expected during the presale rush but they communicated well.", author: "M.T.", region: "Taiwan", date: "Mar 2026", hasPhoto: false },
  { stars: 5, text: "Used them for aespa Paris and it was flawless. Navigated the French site for me — couldn't have done it myself.", author: "Anonymous", region: "Europe", date: "Mar 2026", hasPhoto: true },
  { stars: 5, text: "Third time using Daegu Assistance and they never disappoint. Loyal customer forever!", author: "C.P.", region: "HK", date: "Feb 2026", hasPhoto: false },
];
const FAQS = [
  { q: "How do I start an inquiry?", a: "Send us a message on Messenger or Telegram with your event details — artist, date, venue, and preferred section. We'll respond within 2 hours." },
  { q: "Is my payment safe?", a: "Yes. All payments go through secure, encrypted gateways. We never store card numbers, and transactions are protected by fraud detection systems." },
  { q: "What if you can't get my ticket?", a: "If we're unable to secure tickets during the assisted presale or general sale, a full refund of the service fee is issued within 24 hours." },
  { q: "Do you need my account login?", a: "No. We book tickets using our own verified accounts and transfer or deliver the QR ticket to you. Your personal accounts are never required." },
  { q: "How do I receive my ticket?", a: "QR-code tickets are delivered via email and in-app. You can also save them to Apple Wallet or Google Wallet for offline access at the venue." },
  { q: "Can I request specific seats?", a: "Yes! Let us know your row, section, or seat number preference and we'll do our best to match it during the booking process." },
  { q: "Do you cover sold-out shows?", a: "Sometimes. We monitor resale platforms and verified fan networks for sold-out events. Availability and pricing vary — ask us and we'll check." },
  { q: "Is there a minimum order?", a: "No minimum! Whether you need 1 ticket or 20, we're happy to assist. Group bookings of 4+ qualify for discounted service fees." },
];
const FEATURES = [
  { icon: "🎟", title: "Seamless Booking", desc: "From discovery to door in under 60 seconds. Browse live availability, choose your seats on an interactive map, and receive your QR ticket instantly.", perks: ["Real-time seat availability refresh", "Instant QR code generation", "Apple Wallet & Google Wallet support", "Email + SMS confirmation"] },
  { icon: "📱", title: "Mobile-First Design", desc: "Designed smartphone-first because over 80% of ticket purchases happen on mobile. Every tap, swipe, and checkout flow is optimized for speed.", perks: ["One-thumb navigation", "Touch-friendly seat picker", "Face/fingerprint payment", "Offline QR ticket access"] },
  { icon: "🔒", title: "AI Fraud Protection", desc: "Our machine-learning system monitors every transaction in real time, flagging scalpers, fake listings, and suspicious patterns before they reach you.", perks: ["Scalper bot detection", "Verified resale marketplace", "Unique per-ticket QR hashes", "24/7 security monitoring"] },
  { icon: "🔄", title: "Resale & Transfer", desc: "Can't attend? Safely list your ticket at a capped fair price, or gift it directly to a friend — all within the platform with full verification.", perks: ["Price-capped resale market", "Instant friend transfers", "Seller identity verification", "Buyer guarantee on all resales"] },
  { icon: "👥", title: "Social & Group Booking", desc: "Plan concert nights with friends: share event pages, invite your group, and lock in adjacent seats together in a single checkout.", perks: ["Group invite links", "Adjacent seat locking", "Split payment between friends", "Social share cards"] },
];
const SEARCH_DATA = [
  { page: "home", title: "Home — About the Assistance", desc: "Learn about Daegu Assistance and our featured services" },
  { page: "events", title: "Events — Browse Concerts", desc: "Find upcoming K-POP concerts across 9 regions" },
  { page: "events", title: "Events — Seat Map", desc: "Interactive seating with VIP, Premium, Standard and Accessible sections" },
  { page: "events", title: "Events — Payment Methods", desc: "GCash, PayPal, Apple Pay, Alipay, Credit Card and more" },
  { page: "services", title: "Services — Concert Ticketing", desc: "Professional presale queuing and ticket securing service" },
  { page: "services", title: "Services — Group Booking", desc: "Book for groups of 4+ with discounted service fees" },
  { page: "services", title: "Services — Pricing", desc: "Early-bird, standard, last-minute and group pricing tiers" },
  { page: "proofs", title: "Proofs — Proof Gallery", desc: "Verified photos of completed transactions and results" },
  { page: "proofs", title: "Proofs — Before & After", desc: "Real examples of tickets secured for clients" },
  { page: "reviews", title: "Reviews — Client Testimonials", desc: "4.9 stars from 1,284 verified reviews" },
  { page: "reviews", title: "Reviews — Submit Feedback", desc: "Leave your own review and photo" },
  { page: "process", title: "Process — How It Works", desc: "5-step timeline from inquiry to ticket delivery" },
  { page: "process", title: "Process — FAQ", desc: "Frequently asked questions about our service" },
  { page: "process", title: "Process — Why Choose Us", desc: "Proven track record, fast response, 9 regions covered" },
  { page: "home", title: "SEVENTEEN Dome Tour Slots", desc: "KSPO Dome Aug 15-17 — slots now open" },
  { page: "events", title: "BLACKPINK Manila Sep 2026", desc: "Mall of Asia Arena · Sep 3, 2026 · From ₱5,800" },
  { page: "events", title: "BTS Las Vegas Oct 2026", desc: "Allegiant Stadium · Oct 1, 2026 · From USD 250" },
];

// ---- NAV ----
function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('[data-page]').forEach(a => a.classList.toggle('active', a.dataset.page === page));
  document.getElementById('page-' + page)?.classList.add('active');
  window.scrollTo(0, 0);
  closeModal();
}
function toggleMob() { document.getElementById('mobileNav').classList.toggle('open') }

// ---- THEME ----
function toggleTheme() {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  document.documentElement.setAttribute('data-theme', isLight ? 'dark' : 'light');
  const icon = isLight ? '🌙' : '☀️';
  document.getElementById('themeBtn').textContent = icon;
  document.getElementById('mobThemeBtn').textContent = icon + ' Theme';
}

// ---- SEARCH ----
function openSearch() { document.getElementById('searchOverlay').classList.add('open'); setTimeout(() => document.getElementById('searchInput').focus(), 50) }
function closeSearch() { document.getElementById('searchOverlay').classList.remove('open'); document.getElementById('searchInput').value = ''; document.getElementById('searchResults').innerHTML = '' }
function doSearch(q) {
  const res = document.getElementById('searchResults');
  if (!q.trim()) { res.innerHTML = ''; return }
  const m = SEARCH_DATA.filter(d => (d.title + d.desc).toLowerCase().includes(q.toLowerCase())).slice(0, 5);
  res.innerHTML = m.map(x => `<div class="search-result-item" onclick="navigate('${x.page}');closeSearch()"><div class="sr-page">${x.page}</div><div style="font-weight:600;font-size:0.85rem">${x.title}</div><div style="font-size:0.75rem;color:var(--text-muted);margin-top:0.2rem">${x.desc}</div></div>`).join('') || '<div style="padding:1rem;color:var(--text-muted);font-size:0.85rem">No results found.</div>';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeSearch(); closeModal() } });

// ---- MODAL ----
function openModal(tag, title, body, meta, actions) {
  document.getElementById('mTag').textContent = tag;
  document.getElementById('mTitle').textContent = title;
  document.getElementById('mBody').innerHTML = body;
  document.getElementById('mMeta').innerHTML = meta || '';
  document.getElementById('mActions').innerHTML = actions || '';
  document.getElementById('modal').classList.add('open');
}
function closeModal() { document.getElementById('modal').classList.remove('open') }

function openEventModal(e) {
  openModal(e.region + ' · ' + e.genre, e.artist, `<strong>${e.venue}</strong><br><span style="color:var(--text-muted)">${e.city}</span>`,
    `<div class="modal-meta-row"><span class="modal-meta-label">Date</span><span class="modal-meta-val">${e.date}</span></div>
 <div class="modal-meta-row"><span class="modal-meta-label">Venue</span><span class="modal-meta-val">${e.venue}, ${e.city}</span></div>
 <div class="modal-meta-row"><span class="modal-meta-label">Starting Price</span><span class="modal-meta-val">${e.price}</span></div>
 <div class="modal-meta-row"><span class="modal-meta-label">Region</span><span class="modal-meta-val">${e.region}</span></div>`,
    `<button class="btn-primary" onclick="closeModal();navigate('services')">Book Assistance</button>
 <button class="btn-outline" onclick="toast('📩 Message us on Messenger or Telegram!');closeModal()">Inquire</button>`);
}
function openSvcModal(name) {
  const s = SVCS.find(x => x.name === name) || SVCS[0];
  openModal('Service', s.name, s.desc,
    `<div class="modal-meta-row"><span class="modal-meta-label">Est. Duration</span><span class="modal-meta-val">${s.duration}</span></div>
 <div class="modal-meta-row"><span class="modal-meta-label">Service Fee</span><span class="modal-meta-val">${s.price}</span></div>`,
    `<button class="btn-primary" onclick="closeModal();toggleFloat()">Contact Us</button>
 <button class="btn-outline" onclick="closeModal();navigate('process')">How It Works</button>`);
}
function openProofModal(title, desc, date, details, price) {
  openModal('Completed Work', title, desc,
    `<div class="modal-meta-row"><span class="modal-meta-label">Date</span><span class="modal-meta-val">${date}</span></div>
 <div class="modal-meta-row"><span class="modal-meta-label">Details</span><span class="modal-meta-val">${details}</span></div>
 <div class="modal-meta-row"><span class="modal-meta-label">Price</span><span class="modal-meta-val">${price}</span></div>`,
    `<button class="btn-primary" onclick="closeModal();navigate('services')">Get Same Service</button>
 <button class="btn-outline" onclick="closeModal()">Close</button>`);
}
function openProofCardModal(i) {
  const p = PROOFS[i];
  openModal(p.cat.charAt(0).toUpperCase() + p.cat.slice(1), p.title, `<p style="font-size:2.5rem;margin-bottom:0.75rem">${p.icon}</p><p>${p.desc}</p>`,
    `<div class="modal-meta-row"><span class="modal-meta-label">Date</span><span class="modal-meta-val">${p.date}</span></div>
 <div class="modal-meta-row"><span class="modal-meta-label">Status</span><span class="modal-meta-val">${p.label}</span></div>`,
    `<button class="btn-primary" onclick="closeModal();navigate('services')">Book Similar</button>
 <button class="btn-outline" onclick="closeModal()">Close</button>`);
}
function openContact() {
  openModal('Contact', 'Get In Touch', '<p style="color:var(--text-muted)">Our team is available <strong style="color:var(--text)">8AM–10PM PHT (GMT+8)</strong> daily. For presale-day assistance, message us at least 24 hours in advance.</p>',
    `<div class="modal-meta-row"><span class="modal-meta-label">Messenger</span><span class="modal-meta-val">@daeguassistance</span></div>
 <div class="modal-meta-row"><span class="modal-meta-label">Telegram</span><span class="modal-meta-val">@DaegusAssistance</span></div>
 <div class="modal-meta-row"><span class="modal-meta-label">Response Time</span><span class="modal-meta-val">Under 2 hours</span></div>`,
    `<a class="btn-primary" href="https://m.me/daeguassistance" target="_blank" rel="noopener" style="text-decoration:none;display:flex;align-items:center;justify-content:center;flex:1">💬 Messenger</a>
 <a class="btn-outline" href="https://t.me/DaegusAssistance" target="_blank" rel="noopener" style="text-decoration:none;display:flex;align-items:center;justify-content:center;flex:1">✈ Updates</a>`);
}
function openLegal(title, type) {
  const content = {
    privacy: `<p style="color:var(--text-muted);font-size:0.83rem;line-height:1.7"><strong style="color:var(--text);display:block;margin-bottom:0.3rem">Data We Collect</strong>Name, contact info, event preferences, and payment references only.<br><br><strong style="color:var(--text);display:block;margin-bottom:0.3rem">How We Use It</strong>Solely to complete your booking and communicate updates. Never sold or shared with third parties.<br><br><strong style="color:var(--text);display:block;margin-bottom:0.3rem">Payment Security</strong>We never store card numbers. All payments go through encrypted, third-party gateways.</p>`,
    terms: `<p style="color:var(--text-muted);font-size:0.83rem;line-height:1.7"><strong style="color:var(--text);display:block;margin-bottom:0.3rem">Service Agreement</strong>We provide ticket assistance on a best-effort basis. Full refund of service fee if we cannot secure your ticket.<br><br><strong style="color:var(--text);display:block;margin-bottom:0.3rem">Payments</strong>Ticket cost and service fee are separate. Ticket cost is non-refundable once secured.<br><br><strong style="color:var(--text);display:block;margin-bottom:0.3rem">Conduct</strong>Clients agree not to misuse proofs or share booking details publicly without consent.</p>`
  };
  openModal('Legal', title, content[type], null, `<button class="btn-outline" onclick="closeModal()" style="flex:1">Close</button>`);
}

// ---- TOAST ----
let toastTmr;
function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTmr); toastTmr = setTimeout(() => t.classList.remove('show'), 3000);
}

// ---- LANG ----
function switchLang(l) {
  const labels = { en: 'English', ko: '한국어', zh: '中文', fr: 'Français', tl: 'Filipino' };
  toast('🌐 Switched to ' + labels[l] + ' — full translation coming soon!');
}

// ---- ANNOUNCEMENTS ----
function toggleAnn(item) {
  const ex = item.querySelector('.ann-expand');
  const was = ex.classList.contains('open');
  document.querySelectorAll('.ann-expand').forEach(e => e.classList.remove('open'));
  if (!was) ex.classList.add('open');
}

// ---- EVENTS ----
function renderEvents(filter) {
  const grid = document.getElementById('eventsGrid');
  const list = filter === 'all' ? EVENTS : EVENTS.filter(e => e.region === filter);
  if (!list.length) { grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--text-muted)">No events found for this region yet. <span style="color:var(--pink);cursor:pointer" onclick="navigate(\'services\')">Request assistance</span> for any show.</div>'; return }
  grid.innerHTML = list.map(e => `<div class="event-card" onclick='openEventModal(${JSON.stringify(e)})'><div class="event-img"><div class="event-img-bg" style="background:linear-gradient(135deg,${e.colors[0]}60,${e.colors[1]}80)"></div><div class="event-genre">${e.genre}</div><div class="event-artist">${e.artist}</div></div><div class="event-body"><div class="event-meta"><div class="event-info"><h4>${e.venue}</h4><p>${e.city} · ${e.date}</p></div><div class="event-price"><div class="price-from">from</div><div class="price-val">${e.price}</div></div></div><div class="event-footer"><span class="region-badge">${e.region}</span><button class="ticket-btn" onclick="event.stopPropagation();openReservation()">Book Tickets</button></div></div></div>`).join('');
}
function filterRegion(btn, region) {
  if (btn) { document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active') }
  renderEvents(region);
}
renderEvents('all');

// ---- SEAT MAP ----
const ZONES = [
  { label: 'VIP', count: 18, taken: [2, 5, 11], type: 'vip', price: '₱18,000' },
  { label: 'VIP', count: 20, taken: [0, 7, 14], type: 'vip', price: '₱18,000' },
  { label: 'PRM', count: 24, taken: [3, 8, 15, 20], type: 'premium', price: '₱9,500' },
  { label: 'PRM', count: 26, taken: [1, 9, 16, 22], type: 'premium', price: '₱9,500' },
  { label: 'STD', count: 30, taken: [4, 10, 17, 23, 27], type: 'standard', price: '₱4,200' },
  { label: 'STD', count: 30, taken: [2, 11, 18, 24, 28], type: 'standard', price: '₱4,200' },
  { label: 'ACC', count: 8, taken: [3, 6], type: 'accessibility', price: '₱3,000' },
];
const sm = document.getElementById('seatMap');
ZONES.forEach(z => {
  const row = document.createElement('div'); row.className = 'seat-row';
  const lbl = document.createElement('div'); lbl.className = 'zone-label'; lbl.textContent = z.label;
  const sr = document.createElement('div'); sr.className = 'seats-row';
  for (let i = 0; i < z.count; i++) {
    const s = document.createElement('div');
    const taken = z.taken.includes(i);
    s.className = 'seat ' + (taken ? 'taken' : z.type);
    if (!taken) { s.title = z.type.toUpperCase() + ' — ' + z.price; s.onclick = () => toast(`${z.type.toUpperCase()} seat — ${z.price}. Message us to reserve!`) }
    else s.title = 'Taken';
    sr.appendChild(s);
  }
  row.appendChild(lbl); row.appendChild(sr); sm.appendChild(row);
});

// ---- FEATURES ----
function setFeature(i, tab) {
  document.querySelectorAll('.feature-tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  const f = FEATURES[i];
  document.getElementById('fIcon').textContent = f.icon;
  document.getElementById('fTitle').textContent = f.title;
  document.getElementById('fDesc').textContent = f.desc;
  document.getElementById('fPerks').innerHTML = f.perks.map(p => `<div class="perk"><div class="perk-dot"></div>${p}</div>`).join('');
}

// ---- REVIEWS ----
let currentReviewFilter = 'all';
function getReviewList(filter) {
  return filter === 5 || filter === 4 ? REVIEWS.filter(r => r.stars === filter) : filter === 'photo' ? REVIEWS.filter(r => r.hasPhoto) : REVIEWS;
}
function renderRevs(filter) {
  currentReviewFilter = filter;
  const grid = document.getElementById('reviewsGrid');
  const list = getReviewList(filter);
  grid.innerHTML = list.map(r => {
    const imgAttrs = r.photoData ? `style="background-image:url('${r.photoData}');background-size:cover;background-position:center;background-repeat:no-repeat"` : '';
    const imgContent = r.photoData ? '' : `<span style="font-size:2rem;opacity:0.3">📷</span><div style="font-size:0.65rem;color:var(--pink);margin-top:0.3rem">Tap to verify</div>`;
    return `<div class="review-card"><div class="rc-top"><div class="rc-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</div><div class="rc-date">${r.date}</div></div>${r.hasPhoto ? `<div class="rc-img" ${imgAttrs} onclick="toast('📸 Photo proof verified by our team')">${imgContent}</div>` : ''}<p class="rc-text">${r.text}</p><div class="rc-author"><div class="rc-avatar">${r.author[0]}</div><div><div class="rc-name">${r.author}</div><div class="rc-anon">${r.region} · Verified</div></div></div></div>`;
  }).join('');
  updateReviewSummary();
}
function filterRevs(btn, filter) {
  document.querySelectorAll('.rev-filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active'); renderRevs(filter);
}
function updateReviewSummary() {
  const avg = REVIEWS.reduce((sum, r) => sum + r.stars, 0) / REVIEWS.length;
  const big = document.querySelector('.big-rating');
  const starDisp = document.querySelector('.star-display');
  if (big) big.textContent = avg.toFixed(1);
  if (starDisp) starDisp.textContent = '★★★★★'.slice(0, Math.round(avg)) + '☆☆☆☆☆'.slice(Math.round(avg));
}
renderRevs('all');

// ---- STAR PICKER ----
let selStars = 0;
function setStars(n) { selStars = n; document.querySelectorAll('#starPicker span').forEach((s, i) => s.classList.toggle('lit', i < n)) }
function hoverS(n) { document.querySelectorAll('#starPicker span').forEach((s, i) => s.style.color = i < n ? 'var(--pink-light)' : '') }
function resetS() { document.querySelectorAll('#starPicker span').forEach((s, i) => { s.style.color = ''; s.classList.toggle('lit', i < selStars) }) }

// ---- PHOTO UPLOAD ----
function handlePhoto(input) {
  const file = input.files[0]; if (!file) return;
  if (file.size > 5 * 1024 * 1024) { toast('⚠ File too large. Max 5MB.'); input.value = ''; return }
  const r = new FileReader();
  r.onload = e => {
    document.getElementById('photoPreview').src = e.target.result;
    document.getElementById('photoFileName').textContent = file.name;
    document.getElementById('photoPreviewWrap').style.display = 'block';
    document.getElementById('photoLabel').textContent = '✅ Photo attached: ' + file.name;
    toast('📷 Photo uploaded!');
  };
  r.readAsDataURL(file);
}
function removePhoto() {
  document.getElementById('photoFile').value = '';
  document.getElementById('photoPreview').src = '';
  document.getElementById('photoPreviewWrap').style.display = 'none';
  document.getElementById('photoLabel').textContent = 'Click to upload a photo of your ticket or experience';
}

// ---- SUBMIT REVIEW ----
function submitReview() {
  if (!selStars) { toast('⭐ Please select a star rating first!'); return }
  const text = document.getElementById('rvText').value.trim();
  if (!text) { toast('✏️ Please write your review!'); return }
  const name = document.getElementById('rvName').value.trim() || 'Anonymous';
  const region = document.getElementById('rvRegion').value || 'Unknown';
  const hasPhoto = document.getElementById('photoPreviewWrap').style.display === 'block';
  const photoData = hasPhoto ? document.getElementById('photoPreview').src : '';
  const date = new Date();
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const reviewDate = `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
  REVIEWS.unshift({ stars: selStars, text, author: name, region, date: reviewDate, hasPhoto, photoData });
  renderRevs(currentReviewFilter);
  document.getElementById('reviewSuccess').textContent = '✔ Review posted! Thank you for your feedback.';
  document.getElementById('reviewSuccess').style.display = 'block';
  document.getElementById('rvText').value = '';
  document.getElementById('rvName').value = '';
  document.getElementById('anonCheck').checked = false;
  setStars(0);
  removePhoto();
  setTimeout(() => {
    document.getElementById('reviewSuccess').style.display = 'none';
    document.getElementById('reviewSuccess').textContent = '✔ Thank you! Your review has been submitted for verification.';
  }, 5000);
}

// ---- PROOFS ----
function renderProofs(cat) {
  const g = document.getElementById('proofsGallery');
  const list = cat === 'all' ? PROOFS : PROOFS.filter(p => p.cat === cat);
  g.innerHTML = list.map((p, i) => `<div class="proof-card" onclick="openProofCardModal(${PROOFS.indexOf(p)})"><div class="proof-img"><span class="proof-placeholder">${p.icon}</span><div class="proof-label">${p.label}</div></div><div class="proof-body"><div class="proof-cat">${p.cat}</div><div class="proof-title">${p.title}</div><div class="proof-date">${p.date}</div></div></div>`).join('');
}
function filterProofs(btn, cat) {
  document.querySelectorAll('.proof-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active'); renderProofs(cat);
}
renderProofs('all');

// ---- SERVICES ----
document.getElementById('servicesGrid').innerHTML = SVCS.map(s => `<div class="service-card" onclick="openSvcModal('${s.name}')"><div class="sc-icon">${s.icon}</div><div class="sc-name">${s.name}</div><p class="sc-desc">${s.desc}</p><div class="sc-meta"><div class="sc-meta-row"><span class="sc-meta-label">Est. Duration</span><span class="sc-meta-val">${s.duration}</span></div><div class="sc-meta-row"><span class="sc-meta-label">Service Fee</span><span class="sc-meta-val">${s.price}</span></div></div><button class="sc-btn" onclick="event.stopPropagation();openSvcModal('${s.name}')">Learn More →</button></div>`).join('');

// ---- FAQ ----
document.getElementById('faqContainer').innerHTML = FAQS.map((f, i) => `<div class="faq-item"><button class="faq-q" onclick="toggleFaq(${i},this)">${f.q}<span class="arrow">▾</span></button><div class="faq-a" id="faq-${i}">${f.a}</div></div>`).join('');
function toggleFaq(i, btn) {
  const a = document.getElementById('faq-' + i), wasOpen = a.classList.contains('open');
  document.querySelectorAll('.faq-a').forEach(x => x.classList.remove('open'));
  document.querySelectorAll('.faq-q').forEach(x => x.classList.remove('open'));
  if (!wasOpen) { a.classList.add('open'); btn.classList.add('open') }
}

// ---- CAROUSEL ----
const CI = [
  { icon: "🎤", title: "SEVENTEEN World Tour", desc: "Seoul · Aug 2026" },
  { icon: "👑", title: "BLACKPINK Born Pink", desc: "Manila · Sep 2026" },
  { icon: "🌟", title: "aespa Synk Tour", desc: "Singapore · Sep 2026" },
  { icon: "💜", title: "BTS World Tour", desc: "Las Vegas · Oct 2026" },
  { icon: "🐰", title: "NewJeans Fan Meet", desc: "Taipei · Oct 2026" },
  { icon: "🦋", title: "IVE Show What I Have", desc: "Hong Kong · Nov 2026" },
  { icon: "🗼", title: "aespa Europe Leg", desc: "Paris · Nov 2026" },
  { icon: "🎸", title: "STRAY KIDS MANIAC", desc: "Macau · Dec 2026" },
];
document.getElementById('carouselTrack').innerHTML = [...CI, ...CI].map(c => `<div class="carousel-card" onclick="navigate('events')"><div class="cc-icon">${c.icon}</div><div class="cc-title">${c.title}</div><div class="cc-desc">${c.desc}</div></div>`).join('');

// ---- STATS ----
function animCount(el, target, suffix) {
  let v = 0; const step = (target / 1500) * 16;
  const t = setInterval(() => { v += step; if (v >= target) { el.textContent = target.toLocaleString() + suffix; clearInterval(t) } else el.textContent = Math.floor(v).toLocaleString() + suffix }, 16);
}
setTimeout(() => { animCount(document.getElementById('ctr-clients'), 2418, '+'); animCount(document.getElementById('ctr-works'), 3104, '+') }, 600);

// ---- VISITOR ----
document.getElementById('visitorCount').textContent = (1284 + Math.floor(Math.random() * 40)).toLocaleString();

// ---- SCROLL TOP ----
window.addEventListener('scroll', () => document.getElementById('scrollTop').classList.toggle('show', window.scrollY > 400));

// ---- FLOAT MENU ----
function toggleFloat() { document.getElementById('floatMenu').classList.toggle('open') }
document.addEventListener('click', e => { if (!e.target.closest('.float-contact')) document.getElementById('floatMenu').classList.remove('open') });

// ---- RESERVATION & PAYMENT ----
let currentReservation = {};
let currentPaymentMethod = 'gcash';

// Initialize event dropdown
function initEventDropdown() {
  const select = document.getElementById('resEvent');
  if (!select) return;
  select.innerHTML = '<option value="">Choose an event...</option>' + 
    EVENTS.map((e, i) => `<option value="${i}">${e.artist} - ${e.date} (${e.price})</option>`).join('');
  
  // Add event listener for real-time updates
  select.addEventListener('change', updateReservationPreview);
  
  // Initialize with first event if available
  if (EVENTS.length > 0 && select.value === '') {
    select.value = '0';
    updateReservationPreview();
  }
}

function updateReservationPreview() {
  const eventIdx = document.getElementById('resEvent').value;
  const qty = document.getElementById('resQty').value || 1;
  const section = document.getElementById('resSection').value;
  
  const previewContainer = document.getElementById('resPreview');
  if (!previewContainer) return;
  
  if (!eventIdx || !section) {
    previewContainer.innerHTML = '';
    return;
  }
  
  const event = EVENTS[eventIdx];
  const sectionPrices = {
    'VIP': 18000,
    'Premium': 9500,
    'Standard': 4200,
    'Accessible': 3000
  };
  
  const unitPrice = sectionPrices[section] || 5000;
  const subtotal = unitPrice * parseInt(qty);
  const serviceFee = Math.ceil(subtotal * 0.05);
  const total = subtotal + serviceFee;
  
  const sectionNames = {
    'VIP': 'VIP Front Rows',
    'Premium': 'Premium Sightlines',
    'Standard': 'Standard General Admission',
    'Accessible': 'Accessible (Wheelchair)'
  };
  
  previewContainer.innerHTML = `
    <div style="background:var(--bg2);padding:1.2rem;border-radius:0.4rem;border:1px solid var(--border);margin-top:1rem">
      <div style="font-size:0.7rem;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.8rem">📋 Preview</div>
      <div style="display:flex;justify-content:space-between;font-size:0.85rem;margin-bottom:0.5rem">
        <span style="color:var(--text-muted)">Event:</span>
        <span style="color:var(--text);font-weight:600">${event.artist}</span>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:0.85rem;margin-bottom:0.5rem">
        <span style="color:var(--text-muted)">Date:</span>
        <span style="color:var(--text);font-weight:600">${event.date}</span>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:0.85rem;margin-bottom:0.5rem">
        <span style="color:var(--text-muted)">Venue:</span>
        <span style="color:var(--text);font-weight:600">${event.venue}, ${event.city}</span>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:0.85rem;margin-bottom:0.5rem">
        <span style="color:var(--text-muted)">Section:</span>
        <span style="color:var(--text);font-weight:600">${sectionNames[section]}</span>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:0.85rem;margin-bottom:1rem;padding-bottom:1rem;border-bottom:1px solid var(--border)">
        <span style="color:var(--text-muted)">Qty:</span>
        <span style="color:var(--text);font-weight:600">${qty} ticket(s)</span>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:0.85rem;margin-bottom:0.3rem">
        <span style="color:var(--text-muted)">Subtotal:</span>
        <span style="color:var(--text)">₱${subtotal.toLocaleString()}</span>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:0.85rem;margin-bottom:0.8rem">
        <span style="color:var(--text-muted)">Service Fee:</span>
        <span style="color:var(--text)">₱${serviceFee.toLocaleString()}</span>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:0.9rem;font-weight:600;color:var(--pink)">
        <span>Total:</span>
        <span>₱${total.toLocaleString()}</span>
      </div>
    </div>
  `;
}

// Add event listeners for quantity and section changes
document.addEventListener('DOMContentLoaded', function() {
  const qtyInput = document.getElementById('resQty');
  const sectionSelect = document.getElementById('resSection');
  
  if (qtyInput) {
    qtyInput.addEventListener('change', updateReservationPreview);
    qtyInput.addEventListener('input', updateReservationPreview);
  }
  
  if (sectionSelect) {
    sectionSelect.addEventListener('change', updateReservationPreview);
  }
});

function openReservation() {
  initEventDropdown();
  document.getElementById('reservationModal').classList.add('open');
  currentReservation = {};
}

function closeReservation() {
  document.getElementById('reservationModal').classList.remove('open');
}

function closePayment() {
  document.getElementById('paymentModal').classList.remove('open');
}

function proceedToPayment() {
  // Validate reservation form
  const eventIdx = document.getElementById('resEvent').value;
  const qty = document.getElementById('resQty').value;
  const section = document.getElementById('resSection').value;
  const name = document.getElementById('resName').value.trim();
  const email = document.getElementById('resEmail').value.trim();
  const phone = document.getElementById('resPhone').value.trim();

  if (!eventIdx) { toast('🎟 Please select an event'); return }
  if (!qty || qty < 1) { toast('📊 Please enter valid quantity'); return }
  if (!section) { toast('💺 Please select a section'); return }
  if (!name) { toast('👤 Please enter your name'); return }
  if (!email || !email.includes('@')) { toast('📧 Please enter valid email'); return }
  if (!phone) { toast('📱 Please enter your phone number'); return }

  // Store reservation data
  const event = EVENTS[eventIdx];
  currentReservation = {
    eventIdx,
    event,
    qty: parseInt(qty),
    section,
    name,
    email,
    phone,
    requests: document.getElementById('resRequests').value.trim(),
    basePrice: event.price,
    timestamp: new Date().toISOString()
  };

  // Calculate price (simplified)
  const sectionPrices = {
    'VIP': 18000,
    'Premium': 9500,
    'Standard': 4200,
    'Accessible': 3000
  };
  const unitPrice = sectionPrices[section] || 5000;
  const subtotal = unitPrice * currentReservation.qty;
  const serviceFee = Math.ceil(subtotal * 0.05); // 5% service fee
  currentReservation.subtotal = subtotal;
  currentReservation.serviceFee = serviceFee;
  currentReservation.total = subtotal + serviceFee;

  // Close reservation and open payment
  closeReservation();
  openPaymentModal();
}

function openPaymentModal() {
  // Show payment summary
  const summary = `
    <div class="payment-summary-row">
      <span class="payment-summary-label">Event:</span>
      <span class="payment-summary-val">${currentReservation.event.artist}</span>
    </div>
    <div class="payment-summary-row">
      <span class="payment-summary-label">Date:</span>
      <span class="payment-summary-val">${currentReservation.event.date}</span>
    </div>
    <div class="payment-summary-row">
      <span class="payment-summary-label">Section:</span>
      <span class="payment-summary-val">${currentReservation.section}</span>
    </div>
    <div class="payment-summary-row">
      <span class="payment-summary-label">Quantity:</span>
      <span class="payment-summary-val">${currentReservation.qty} ticket(s)</span>
    </div>
    <div class="payment-summary-row">
      <span class="payment-summary-label">Subtotal:</span>
      <span class="payment-summary-val">₱${currentReservation.subtotal.toLocaleString()}</span>
    </div>
    <div class="payment-summary-row">
      <span class="payment-summary-label">Service Fee (5%):</span>
      <span class="payment-summary-val">₱${currentReservation.serviceFee.toLocaleString()}</span>
    </div>
    <div class="payment-summary-row">
      <span class="payment-summary-label">Total Amount:</span>
      <span class="payment-summary-val" style="font-size:1rem;font-weight:700">₱${currentReservation.total.toLocaleString()}</span>
    </div>
  `;
  document.getElementById('paymentSummary').innerHTML = summary;
  document.getElementById('paymentTitle').textContent = `Complete Payment - ₱${currentReservation.total.toLocaleString()}`;
  
  selectPaymentMethod(document.querySelector('.pay-method-card'), 'gcash');
  document.getElementById('paymentModal').classList.add('open');
}

function selectPaymentMethod(card, method) {
  document.querySelectorAll('.pay-method-card').forEach(c => c.classList.remove('active'));
  card.classList.add('active');
  currentPaymentMethod = method;
  
  const formContainer = document.getElementById('paymentMethodForm');
  let formHTML = '';
  
  if (method === 'gcash') {
    formHTML = `
      <div class="payment-method-form-group">
        <div class="form-group">
          <label class="form-label">GCash Number</label>
          <input class="form-input" type="text" id="gcashNum" placeholder="09xx xxx xxxx" required>
        </div>
        <div style="font-size:0.8rem;color:var(--text-muted);margin-top:1rem;line-height:1.6">
          <strong style="color:var(--text)">📝 Instructions:</strong><br>
          1. Send payment to our verified GCash: +63 917 XXXXXXX<br>
          2. Screenshot your transaction reference<br>
          3. Upload the screenshot in the field below<br>
          4. We'll verify within 5 minutes
        </div>
        <div class="form-group" style="margin-top:1rem">
          <label class="form-label">Upload Payment Proof</label>
          <input class="form-input" type="text" id="gcashRef" placeholder="Transaction Reference" required>
        </div>
      </div>
    `;
  } else if (method === 'card') {
    formHTML = `
      <div class="payment-method-form-group">
        <div class="form-group">
          <label class="form-label">Cardholder Name</label>
          <input class="form-input" type="text" id="cardName" placeholder="Full name on card" required>
        </div>
        <div class="form-group">
          <label class="form-label">Card Number</label>
          <input class="form-input" type="text" id="cardNumber" placeholder="1234 5678 9012 3456" maxlength="19" required>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem">
          <div class="form-group">
            <label class="form-label">Expiry Date</label>
            <input class="form-input" type="text" id="cardExpiry" placeholder="MM/YY" maxlength="5" required>
          </div>
          <div class="form-group">
            <label class="form-label">CVV</label>
            <input class="form-input" type="text" id="cardCVV" placeholder="123" maxlength="3" required>
          </div>
        </div>
        <div style="font-size:0.75rem;color:var(--text-muted);margin-top:1rem">🔒 All card data is encrypted and secure. We never store card numbers.</div>
      </div>
    `;
  } else if (method === 'paypal') {
    formHTML = `
      <div class="payment-method-form-group">
        <div class="form-group">
          <label class="form-label">PayPal Email</label>
          <input class="form-input" type="email" id="paypalEmail" placeholder="you@paypal.com" required>
        </div>
        <div style="font-size:0.8rem;color:var(--text-muted);margin-top:1rem;line-height:1.6">
          <strong style="color:var(--text)">✅ PayPal Benefits:</strong><br>
          • Buyer protection included<br>
          • Secure checkout with PayPal<br>
          • No credit card needed
        </div>
      </div>
    `;
  } else if (method === 'bank') {
    formHTML = `
      <div class="payment-method-form-group">
        <div style="font-size:0.85rem;line-height:1.8;color:var(--text-muted)">
          <strong style="color:var(--text);display:block;margin-bottom:0.5rem">Bank Transfer Details:</strong>
          <div>Bank: BDO / BPI / GCB</div>
          <div>Account: Daegu Assistance Ltd</div>
          <div>Account #: 1234567890</div>
          <div style="margin-top:1rem;padding-top:1rem;border-top:1px solid var(--border)">
            <strong style="color:var(--text);display:block;margin-bottom:0.5rem">📝 Send Proof:</strong>
            After transfer, upload your receipt below
          </div>
        </div>
        <div class="form-group" style="margin-top:1rem">
          <label class="form-label">Transaction Reference</label>
          <input class="form-input" type="text" id="bankRef" placeholder="Bank ref #" required>
        </div>
      </div>
    `;
  }
  
  formContainer.innerHTML = formHTML;
}

function completePayment() {
  const confirmCheck = document.getElementById('paymentConfirm').checked;
  if (!confirmCheck) {
    toast('✅ Please confirm the terms and conditions');
    return;
  }

  // Validate payment method fields
  if (currentPaymentMethod === 'gcash') {
    if (!document.getElementById('gcashRef')?.value) {
      toast('📝 Please enter transaction reference');
      return;
    }
  } else if (currentPaymentMethod === 'card') {
    if (!document.getElementById('cardNumber')?.value || !document.getElementById('cardExpiry')?.value) {
      toast('💳 Please fill in all card details');
      return;
    }
  } else if (currentPaymentMethod === 'paypal') {
    if (!document.getElementById('paypalEmail')?.value) {
      toast('🅿️ Please enter your PayPal email');
      return;
    }
  } else if (currentPaymentMethod === 'bank') {
    if (!document.getElementById('bankRef')?.value) {
      toast('🏦 Please enter transaction reference');
      return;
    }
  }

  // Save reservation to localStorage
  const reservationId = 'RES-' + Date.now();
  const reservationData = {
    ...currentReservation,
    paymentMethod: currentPaymentMethod,
    reservationId,
    status: 'Pending',
    createdAt: new Date().toLocaleString()
  };

  // Get existing reservations
  let reservations = JSON.parse(localStorage.getItem('reservations') || '[]');
  reservations.push(reservationData);
  localStorage.setItem('reservations', JSON.stringify(reservations));

  // Show success message
  closePayment();
  showReservationSuccess(reservationId);
}

function showReservationSuccess(reservationId) {
  const modal = document.getElementById('modal');
  openModal(
    '✅ Booking Confirmed',
    'Your Reservation is Pending',
    `
    <div class="reservation-success">
      <div class="success-icon">🎉</div>
      <p><strong>Reservation ID:</strong> ${reservationId}</p>
      <p style="margin-top:1rem"><strong>${currentReservation.event.artist}</strong></p>
      <p>${currentReservation.event.date}</p>
      <p>${currentReservation.section} • ${currentReservation.qty} Ticket(s)</p>
      <p style="margin-top:1.5rem;font-size:0.9rem">Total: <strong style="color:var(--pink);font-size:1.1rem">₱${currentReservation.total.toLocaleString()}</strong></p>
    </div>
    <p style="margin-top:1.5rem;text-align:center;color:var(--text-muted);font-size:0.85rem">
      📧 A confirmation email has been sent to <strong>${currentReservation.email}</strong><br>
      Our team will review your payment within 2 hours and confirm your booking.
    </p>
    `,
    `
    <div style="display:flex;gap:0.5rem;font-size:0.85rem;color:var(--text-muted);margin-top:1rem;padding-top:1rem;border-top:1px solid var(--border)">
      <strong>Next Steps:</strong><br>
      • Check your email for payment instructions<br>
      • Complete payment by ${new Date(Date.now() + 24*60*60*1000).toLocaleDateString()}<br>
      • Message us on Telegram for status updates
    </div>
    `,
    `
    <button class="btn-primary" onclick="closeModal();navigate('home')" style="flex:1">Return Home</button>
    <button class="btn-outline" onclick="copyToClipboard('${reservationId}')" style="flex:1">Copy Reservation ID</button>
    `
  );
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
  toast('📋 Reservation ID copied!');
}

// Show reservations in console (for demo)
window.showReservations = function() {
  const reservations = JSON.parse(localStorage.getItem('reservations') || '[]');
  console.table(reservations);
  return reservations;
};
