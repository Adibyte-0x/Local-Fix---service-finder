// ================= GOOGLE TRANSLATOR =================

function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {
            pageLanguage: "en",
            includedLanguages: "en,hi,mr,gu,bn,ta,te,kn,ml,pa,ur,es,ja",
            autoDisplay: false,
        },
        "google_translate_element"
    );
}

function translateSite(selectElement) {

    // Get selected language from whichever dropdown was changed
    const language = selectElement.value;

    if (!language) {
        return;
    }

    const translator = document.querySelector(".goog-te-combo");

    if (!translator) {
        console.log("Google Translate has not loaded yet.");

        // Wait for Google Translate to load
        setTimeout(() => {
            const retryTranslator = document.querySelector(".goog-te-combo");

            if (!retryTranslator) {
                alert("⚠️ Google Translate is not available. Please refresh the page.");
                return;
            }

            retryTranslator.value = language;
            retryTranslator.dispatchEvent(new Event("change"));
        }, 1000);

        return;
    }

    // Tell Google Translate to change language
    translator.value = language;
    translator.dispatchEvent(new Event("change"));

    // Keep both dropdowns synchronized
    const desktopSelect = document.getElementById("languageSelect");
    const mobileSelect = document.getElementById("languageSelectMobile");

    if (desktopSelect) {
        desktopSelect.value = language;
    }

    if (mobileSelect) {
        mobileSelect.value = language;
    }
}
/* ================= MOCK DATA (Simulating Database) ================= */
const mockServices = [
    { id: 'electrician', name: 'Electrician', icon: 'zap', desc: 'Wiring, repairs, and installations.' },
    { id: 'plumber', name: 'Plumber', icon: 'droplet', desc: 'Leaky faucets, pipe repairs.' },
    { id: 'mechanic', name: 'Mechanic', icon: 'wrench', desc: 'Vehicle maintenance & fixes.' },
    { id: 'carpenter', name: 'Carpenter', icon: 'hammer', desc: 'Furniture and wood repairs.' },
    { id: 'ac-repair', name: 'AC Repair', icon: 'snowflake', desc: 'Cooling system diagnostics.' },
    { id: 'cleaning', name: 'Cleaning', icon: 'sparkles', desc: 'Home and deep cleaning.' }
];

const mockProviders = [
    {
        id: 'p1', name: 'Jhatkaa Electrical Services', category: 'Electrician',
        rating: 4.8, reviews: 124, experience: 15, distance: 2.5, price: 500,
        verified: true, available: 'Available Today',
        desc: 'Experienced and reliable electrician for all your home wiring needs.',
        about: 'Jhatkaa Electrical has served the community for 15 years, known for quality work.',
        skills: ['Panel Upgrades', 'Rewiring', 'Troubleshooting']
    },
    {
        id: 'p2', name: 'Pipejodya Plumbing', category: 'Plumber',
        rating: 4.5, reviews: 89, experience: 8, distance: 4.1, price: 450,
        verified: true, available: 'Available Tomorrow',
        desc: 'Fast and efficient plumbing solutions for homes and businesses.',
        about: 'We fix leaks fast so you do not have to worry. 24/7 emergency support.',
        skills: ['Leak Repair', 'Drain Cleaning', 'Pipe fitting']
    },
    {
        id: 'p3', name: 'AC ki Tesi AC Services', category: 'AC Repair',
        rating: 4.9, reviews: 210, experience: 12, distance: 6.0, price: 1200,
        verified: true, available: 'Available Today',
        desc: 'Keep your home cool with our expert AC repair and servicing.',
        about: 'Certified HVAC professionals ensuring your AC runs at peak efficiency.',
        skills: ['AC Gas Refill', 'Filter Cleaning', 'Compressor Repair']
    },
    {
        id: 'p4', name: 'Swachh Bharat Cleaners', category: 'Cleaning',
        rating: 4.2, reviews: 45, experience: 3, distance: 1.2, price: 350,
        verified: false, available: 'Available Tomorrow',
        desc: 'Professional eco-friendly cleaning services for your home.',
        about: 'A startup cleaning service dedicated to spotless environments.',
        skills: ['Deep Cleaning', 'Dusting', 'Floor polishing']
    },
    {
        id: 'p5', name: 'Sutari Carpenter', category: 'Carpenter',
        rating: 4.4, reviews: 48, experience: 5, distance: 3.2, price: 500,
        verified: false, available: 'Available Tomorrow',
        desc: 'Professional eco-friendly carpenter services for you.',
        about: 'A startup  service dedicated to spotless work.',
        skills: ['Wood shaping', 'Wood cuting', 'Carpenter ITI']
    },
    {
        id: 'p6', name: 'Ziyan Khan The Mechanic', category: 'Mechanic',
        rating: 5.0, reviews: 50, experience: 2, distance: 0, price: 70000000,
        verified: false, available: 'Available Now',
        desc: 'Dengerous car and bike service for you !',
        about: 'Treats your vehicle as a patient, vehicles are more Valuable for him than human .',
        skills: ['Online Mechanic course', 'Repairing Vision', 'Killer Smile']
    },
    {
        id: 'p7', name: 'Shubham Bhaiya zanke', category: 'Electrician',
        rating: 4.69, reviews: 69, experience: 19, distance: "near by a ", price: 150,
        verified: false, available: 'Available yesterday',
        desc: 'current flows through his veins instead of blood .',
        about: 'he is from japan so he can make electricity by walking .',
        skills: ['Ohms law', 'can light buld by putting it in mouth', 'BEE-pass']
    },
    {
        id: 'p8', name: 'Saar-thak the Plumber', category: 'Plumber',
        rating: 3.14, reviews: 8, experience: 8, distance: 8, price: 8,
        verified: true, available: 'Available today',
        desc: 'he used to do plumbing in extream situation, even if he have physics backlog !',
        about: 'he solve water blockage cause he cant fix a blockage from amravati',
        skills: ['pw plumbing certificate', 'tap fitting', '1st year all clear']
    },
    {
        id: 'p9', name: 'Tale Tejaswi carpenter ', category: 'Carpenter',
        rating: 4.5, reviews: 7, experience: 3, distance: 4, price: 60,
        verified: true, available: 'Available today',
        desc: 'Carpenter is not him , he is carpenter',
        about: 'can create a iron man suit with wood , so we can call him tony tale',
        skills: ['wood job', 'wood work', 'bas itna hi hai']
    },
    {
        id: 'p10', name: 'Umar - tere naam Ac service', category: 'AC Repair',
        rating: 4.8, reviews: 67, experience: 8, distance: 9, price: 1100,
        verified: true, available: 'Available today',
        desc: 'Your Ac needs him',
        about: 'he is Sallu bhois fan but can  repair Ac',
        skills: ['Ac repair', 'fook marke filter saaf karna', 'Ac_la toh ham bhi rakhte hai..']
    },
    {
        id: 'p11', name: 'Om  cleaner', category: 'Cleaning',
        rating: 4.8, reviews: 47, experience: 8, distance: 5, price: 700,
        verified: true, available: 'Available today',
        desc: 'clean room like a pro ! like you can see your face on tiles',
        about: 'no room in hostel but can clean yours',
        skills: ['yt jhadu tutorial', 'yt pochha tutorial', 'thats it']
    },
    {
        id: 'p12', name: 'shivro ff cleaner', category: 'Cleaning',
        rating: 4.8, reviews: 47, experience: 8, distance: 5, price: 700,
        verified: true, available: 'Available today',
        desc: 'khelega free fire !',
        about: 'can clean your room while playing free fire',
        skills: ['One tap head', '1v4 pochha', 'Custom room cleaning']
    }
];

// App State
const state = {
    currentUser: null,
    authRole: 'customer',
    authMode: 'login',
    currentView: 'home',
    searchQuery: { service: '', location: '', sortBy: 'rating' },
    activeBookingProvider: null,
    bookingStep: 1,
    myRequests: []
};

/* ================= AUTH STORAGE & HELPERS (localStorage backed) ================= */

const AUTH_KEYS = {
    users: 'localfix_users',
    session: 'localfix_session',
    providers: 'localfix_providers'
};

const store = {
    read(key, fallback) {
        try {
            const raw = localStorage.getItem(key) || sessionStorage.getItem(key);
            return raw ? JSON.parse(raw) : fallback;
        } catch (err) {
            return fallback;
        }
    },
    write(key, value, useSession) {
        try {
            (useSession ? sessionStorage : localStorage).setItem(key, JSON.stringify(value));
        } catch (err) { /* storage unavailable */ }
    },
    remove(key) {
        try {
            localStorage.removeItem(key);
            sessionStorage.removeItem(key);
        } catch (err) { /* ignore */ }
    }
};

const auth = {
    // Demo-only obfuscation. A real app must hash passwords on a server.
    hash(password) {
        let h = 5381;
        for (let i = 0; i < password.length; i++) {
            h = ((h << 5) + h) + password.charCodeAt(i);
            h |= 0;
        }
        return 'lf1$' + Math.abs(h).toString(36) + '$' + password.length;
    },

    isEmail(value) {
        return /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(value);
    },

    isPhone(value) {
        return /^[0-9]{10}$/.test((value || '').replace(/[\s+()-]/g, '').slice(-10)) && (value || '').replace(/\D/g, '').length >= 10;
    },

    passwordScore(password) {
        if (!password) return 0;
        let score = 0;
        if (password.length >= 8) score++;
        if (password.length >= 12) score++;
        if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;
        return Math.min(score, 4);
    },

    users() {
        return store.read(AUTH_KEYS.users, []);
    },

    findUser(email) {
        const target = (email || '').trim().toLowerCase();
        return this.users().find(u => u.email === target) || null;
    },

    saveUser(user) {
        const users = this.users();
        const index = users.findIndex(u => u.email === user.email);
        if (index === -1) users.push(user); else users[index] = user;
        store.write(AUTH_KEYS.users, users);
        return user;
    },

    createUser({ name, email, phone, password, role }) {
        const user = {
            id: 'u' + Date.now().toString(36),
            name: name,
            email: email.trim().toLowerCase(),
            phone: phone || '',
            role: role === 'provider' ? 'provider' : 'customer',
            passwordHash: this.hash(password),
            createdAt: new Date().toISOString()
        };
        return this.saveUser(user);
    },

    startSession(user, remember) {
        state.currentUser = user;
        state.authRole = user.role;
        store.remove(AUTH_KEYS.session);
        store.write(AUTH_KEYS.session, { email: user.email, at: Date.now() }, !remember);
    },

    endSession() {
        state.currentUser = null;
        store.remove(AUTH_KEYS.session);
    },

    restoreSession() {
        const session = store.read(AUTH_KEYS.session, null);
        if (!session || !session.email) return null;
        const user = this.findUser(session.email);
        if (!user) {
            store.remove(AUTH_KEYS.session);
            return null;
        }
        state.currentUser = user;
        state.authRole = user.role;
        return user;
    },

    seedDemoAccount() {
        if (!this.findUser('demo@localfix.com')) {
            this.createUser({
                name: 'Demo User',
                email: 'demo@localfix.com',
                phone: '9999999999',
                password: 'demo1234',
                role: 'customer'
            });
        }
    },

    // Load providers registered in earlier sessions back into the searchable list
    loadStoredProviders() {
        const saved = store.read(AUTH_KEYS.providers, []);
        saved.forEach(p => {
            if (!mockProviders.some(existing => existing.id === p.id)) mockProviders.push(p);
        });
    },

    setFieldError(id, message) {
        const input = document.getElementById(id);
        const error = document.getElementById(id + '-error');
        if (input) input.classList.add('invalid');
        if (error) {
            error.innerText = message;
            error.classList.add('show');
        }
    },

    clearErrors(ids) {
        ids.forEach(id => {
            const input = document.getElementById(id);
            const error = document.getElementById(id + '-error');
            if (input) input.classList.remove('invalid');
            if (error) {
                error.innerText = '';
                error.classList.remove('show');
            }
        });
    },

    setAlert(id, type, message) {
        const box = document.getElementById(id);
        if (!box) return;
        box.className = 'auth-alert show ' + type;
        box.innerHTML = message;
    },

    clearAlert(id) {
        const box = document.getElementById(id);
        if (!box) return;
        box.className = 'auth-alert';
        box.innerHTML = '';
    }
};


/* ===== business account seeding + extra state ===== */
state.dashTab = null;

auth.seedBusinessAccounts = function () {
    if (!this.findUser('owner@localfix.com')) {
        const owner = this.createUser({
            name: 'Aditya (Owner)',
            email: 'owner@localfix.com',
            phone: '9000012345',
            password: 'owner1234',
            role: 'customer'
        });
        owner.role = 'owner';
        this.saveUser(owner);
    }
    if (!this.findUser('pro@localfix.com')) {
        const pro = this.createUser({
            name: 'Jhatkaa Electrical Services',
            email: 'pro@localfix.com',
            phone: '9000067890',
            password: 'pro12345',
            role: 'provider'
        });
        pro.providerId = 'p1';
        this.saveUser(pro);
    }
};

/* =========================================================
   LOCALFIX BUSINESS ENGINE
   Bookings · Pricing · Payments · Escrow · Payouts · Reviews
   ========================================================= */

const BIZ_KEYS = {
    bookings: 'localfix_bookings',
    ledger: 'localfix_ledger',
    reviews: 'localfix_reviews',
    counter: 'localfix_counter'
};

/* Business configuration — this is how the platform (owner) earns */
const BUSINESS = {
    companyName: 'LocalFix Services Pvt. Ltd.',
    gstin: '27ABCDE1234F1Z5',
    address: 'Innovation Cell, GCOE Jalgaon, Maharashtra 425002',
    supportPhone: '+91 90000 12345',
    commissionRate: 0.15,      // 15% taken from every job (owner revenue)
    customerServiceFee: 39,    // flat convenience fee paid by customer
    gstRate: 0.18,             // 18% GST on taxable amount
    visitFee: 99,              // inspection/visit charge
    visitFeeWaiverAbove: 1500, // visit fee waived on larger jobs
    payoutDelayDays: 2,        // provider payout released after job completion
    cancellationFeeRate: 0.10, // charged if cancelled after provider accepted
    urgency: {
        standard: { label: 'Standard (within 48 hrs)', rate: 0, icon: 'clock' },
        priority: { label: 'Priority (same day)', rate: 0.10, icon: 'zap' },
        emergency: { label: 'Emergency (within 2 hrs)', rate: 0.25, icon: 'siren' }
    },
    coupons: {
        FIRST50: { type: 'flat', value: 50, min: 300, label: '₹50 off your first booking' },
        LOCAL10: { type: 'percent', value: 10, max: 200, min: 500, label: '10% off (max ₹200)' },
        GCOEJ25: { type: 'percent', value: 25, max: 500, min: 800, label: '25% campus offer (max ₹500)' }
    }
};

const TIME_SLOTS = [
    { id: 'morning', label: 'Morning · 8:00 AM – 12:00 PM' },
    { id: 'afternoon', label: 'Afternoon · 12:00 PM – 4:00 PM' },
    { id: 'evening', label: 'Evening · 4:00 PM – 8:00 PM' },
    { id: 'night', label: 'Night · 8:00 PM – 10:00 PM (+₹150)' }
];

const money = n => '₹' + Number(n || 0).toLocaleString('en-IN', { maximumFractionDigits: 2, minimumFractionDigits: 2 });
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const AVATAR_HOST = 'ui-avatars' + '.com/api/';
function avatarUrl(name, size) {
    return 'https' + '://' + AVATAR_HOST + '?name=' + encodeURIComponent(name || 'LF') +
        '&background=2f7d6d&color=fff&bold=true&size=' + (size || 96);
}

/* ================= DATA LAYER ================= */

const db = {
    bookings() { return store.read(BIZ_KEYS.bookings, []); },
    saveBookings(list) { store.write(BIZ_KEYS.bookings, list); },
    upsertBooking(booking) {
        const list = this.bookings();
        const i = list.findIndex(b => b.id === booking.id);
        if (i === -1) list.unshift(booking); else list[i] = booking;
        this.saveBookings(list);
        return booking;
    },
    getBooking(id) { return this.bookings().find(b => b.id === id) || null; },
    ledger() { return store.read(BIZ_KEYS.ledger, []); },
    addLedger(entry) {
        const list = this.ledger();
        list.unshift(Object.assign({ at: new Date().toISOString() }, entry));
        store.write(BIZ_KEYS.ledger, list);
    },
    reviews() { return store.read(BIZ_KEYS.reviews, []); },
    addReview(review) {
        const list = this.reviews();
        list.unshift(review);
        store.write(BIZ_KEYS.reviews, list);
    },
    nextId(prefix) {
        const counters = store.read(BIZ_KEYS.counter, {});
        counters[prefix] = (counters[prefix] || 1000) + 1;
        store.write(BIZ_KEYS.counter, counters);
        return prefix + '-' + counters[prefix];
    }
};

/* ================= PRICING ENGINE ================= */

const pricing = {
    quote(opts) {
        const rate = Number(opts.rate) || 0;
        const hours = Number(opts.hours) || 1;
        const urgencyKey = opts.urgency || 'standard';
        const urgency = BUSINESS.urgency[urgencyKey] || BUSINESS.urgency.standard;

        const labour = Math.round(rate * hours);
        const nightFee = opts.slot === 'night' ? 150 : 0;
        const surcharge = Math.round(labour * urgency.rate);
        const visitFee = labour >= BUSINESS.visitFeeWaiverAbove ? 0 : BUSINESS.visitFee;
        const materials = Math.max(0, Number(opts.materials) || 0);

        const subtotal = labour + surcharge + visitFee + nightFee + materials;

        let discount = 0;
        let couponLabel = '';
        const code = (opts.coupon || '').trim().toUpperCase();
        const coupon = BUSINESS.coupons[code];
        if (coupon && subtotal >= coupon.min) {
            discount = coupon.type === 'flat'
                ? coupon.value
                : Math.min(Math.round(subtotal * coupon.value / 100), coupon.max);
            couponLabel = code;
        }

        const taxable = Math.max(0, subtotal - discount);
        const platformFee = BUSINESS.customerServiceFee;
        const gst = Math.round((taxable + platformFee) * BUSINESS.gstRate);
        const total = taxable + platformFee + gst;

        // Owner economics
        const commission = Math.round(taxable * BUSINESS.commissionRate);
        const providerPayout = taxable - commission;
        const platformRevenue = commission + platformFee;

        return {
            rate, hours, urgencyKey, urgencyLabel: urgency.label,
            labour, surcharge, visitFee, nightFee, materials,
            subtotal, discount, couponLabel, platformFee, gst, total,
            commission, commissionRate: BUSINESS.commissionRate,
            providerPayout, platformRevenue
        };
    }
};

/* ================= PAYMENT GATEWAY (simulated) ================= */

const gateway = {
    luhn(num) {
        const digits = (num || '').replace(/\D/g, '');
        if (digits.length < 13 || digits.length > 19) return false;
        let sum = 0, alt = false;
        for (let i = digits.length - 1; i >= 0; i--) {
            let d = parseInt(digits[i], 10);
            if (alt) { d *= 2; if (d > 9) d -= 9; }
            sum += d; alt = !alt;
        }
        return sum % 10 === 0;
    },
    cardBrand(num) {
        const d = (num || '').replace(/\D/g, '');
        if (/^4/.test(d)) return 'Visa';
        if (/^5[1-5]/.test(d)) return 'Mastercard';
        if (/^6/.test(d)) return 'RuPay';
        if (/^3[47]/.test(d)) return 'Amex';
        return 'Card';
    },
    validUpi(id) { return /^[\w.\-]{2,}@[a-zA-Z]{2,}$/.test((id || '').trim()); },
    validExpiry(value) {
        const m = /^(\d{2})\s*\/\s*(\d{2})$/.exec((value || '').trim());
        if (!m) return false;
        const month = parseInt(m[1], 10);
        const year = 2000 + parseInt(m[2], 10);
        if (month < 1 || month > 12) return false;
        const now = new Date();
        const exp = new Date(year, month, 0, 23, 59, 59);
        return exp >= now;
    },
    charge(amount, method, meta) {
        // Simulated authorisation — resolves with a transaction record
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    txnId: 'TXN' + Date.now().toString(36).toUpperCase(),
                    amount: amount,
                    method: method,
                    meta: meta || {},
                    status: 'captured',
                    at: new Date().toISOString()
                });
            }, 1400);
        });
    }
};

/* ================= CORE APPLICATION ================= */

const booking = {
    step: 1,
    provider: null,
    processing: false,
    data: {
        date: '', slot: 'morning', hours: 2, urgency: 'standard',
        desc: '', address: '', landmark: '', contact: '',
        coupon: '', materials: 0, method: 'upi'
    },
    quote: null,
    lastBookingId: null
};

const app = {
    init() {
        if (window.lucide) lucide.createIcons();
        auth.seedDemoAccount();
        auth.seedBusinessAccounts();
        auth.loadStoredProviders();
        auth.restoreSession();
        this.renderCategories();
        this.populateProviderCategories();
        this.updateAuthUI();
        this.renderAuthCopy();
        this.renderTrustStats();
        this.navigate('home');
    },

    navigate(viewId) {
        document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
        const target = document.getElementById('view-' + viewId);
        if (!target) {
            document.getElementById('view-home').classList.add('active');
            state.currentView = 'home';
            return;
        }
        target.classList.add('active');
        state.currentView = viewId;
        window.scrollTo(0, 0);

        if (viewId === 'search') this.renderSearchResults();
        if (viewId === 'dashboard') this.renderDashboard();
        if (viewId === 'login') this.renderAuthCopy();
        if (viewId === 'provider-onboarding') {
            this.populateProviderCategories();
            if (window.lucide) lucide.createIcons();
        }
    },

    toggleMobileMenu() {
        document.getElementById('mobile-menu').classList.toggle('active');
    },

    /* ======== HOME ======== */

    renderCategories() {
        const grid = document.getElementById('home-categories');
        if (!grid) return;
        grid.innerHTML = mockServices.map(s => `
            <div class="category-card" onclick="app.setSearchService('${esc(s.name)}')">
                <div class="cat-icon"><i data-lucide="${s.icon}"></i></div>
                <h3>${esc(s.name)}</h3>
                <p class="text-small text-muted mt-2">${esc(s.desc)}</p>
            </div>`).join('');
        if (window.lucide) lucide.createIcons();
    },

    renderTrustStats() {
        const el = document.getElementById('trust-stats');
        if (!el) return;
        const bookings = db.bookings();
        const completed = bookings.filter(b => b.status === 'Completed').length;
        const stats = [
            { icon: 'users', value: mockProviders.length + '+', label: 'Verified professionals' },
            { icon: 'check-circle', value: (1240 + completed).toLocaleString('en-IN'), label: 'Jobs completed' },
            { icon: 'shield-check', value: '100%', label: 'Secure escrow payments' },
            { icon: 'star', value: '4.7/5', label: 'Average rating' }
        ];
        el.innerHTML = stats.map(s => `
            <div class="stat-card">
                <i data-lucide="${s.icon}"></i>
                <div class="stat-value">${s.value}</div>
                <div class="stat-label">${s.label}</div>
            </div>`).join('');
        if (window.lucide) lucide.createIcons();
    },

    useCurrentLocation(inputId) {
        const field = document.getElementById(inputId);
        if (!field) return;
        field.value = 'Jalgaon, Maharashtra';
        this.showToast('Location detected: Jalgaon, Maharashtra', 'success');
    },

    setSearchService(serviceName) {
        document.getElementById('hero-service').value = serviceName;
        this.executeSearch();
    },

    executeSearch() {
        state.searchQuery.service = document.getElementById('hero-service').value;
        state.searchQuery.location = document.getElementById('hero-location').value;
        this.navigate('search');
    },

    /* ======== SEARCH ======== */

    providerRating(p) {
        const reviews = db.reviews().filter(r => r.providerId === p.id);
        if (!reviews.length) return { rating: Number(p.rating) || 0, count: Number(p.reviews) || 0 };
        const baseCount = Number(p.reviews) || 0;
        const baseSum = (Number(p.rating) || 0) * baseCount;
        const sum = reviews.reduce((t, r) => t + r.stars, baseSum);
        const count = baseCount + reviews.length;
        return { rating: Math.round((sum / count) * 10) / 10, count: count };
    },

    renderSearchResults() {
        const container = document.getElementById('search-results-container');
        if (!container) return;
        const get = id => document.getElementById(id);
        const sortVal = get('sort-select') ? get('sort-select').value : 'rating';
        const filterVerified = get('filter-verified') ? get('filter-verified').checked : false;
        const maxDist = get('filter-distance') ? parseFloat(get('filter-distance').value) : 50;
        const minRating = get('filter-rating') ? parseFloat(get('filter-rating').value) : 0;
        const maxPrice = get('filter-price') ? parseFloat(get('filter-price').value) : Infinity;

        const titleText = state.searchQuery.service ? state.searchQuery.service + 's near you' : 'All professionals near you';
        get('search-title').innerText = titleText;

        let results = mockProviders.filter(p => {
            const dist = Number(p.distance);
            const r = this.providerRating(p);
            if (state.searchQuery.service && p.category !== state.searchQuery.service) return false;
            if (filterVerified && !p.verified) return false;
            if (!isNaN(dist) && dist > maxDist) return false;
            if (r.rating < minRating) return false;
            if (Number(p.price) > maxPrice) return false;
            return true;
        });

        results.sort((a, b) => {
            if (sortVal === 'rating') return this.providerRating(b).rating - this.providerRating(a).rating;
            if (sortVal === 'distance') return (Number(a.distance) || 99) - (Number(b.distance) || 99);
            if (sortVal === 'price') return a.price - b.price;
            return 0;
        });

        const countEl = get('result-count');
        if (countEl) countEl.innerText = results.length + ' professional' + (results.length === 1 ? '' : 's') + ' available';

        if (!results.length) {
            container.innerHTML = '<div class="empty-state"><i data-lucide="search-x"></i><h3>No professionals found</h3><p class="text-muted">Try widening the distance or clearing filters.</p></div>';
            if (window.lucide) lucide.createIcons();
            return;
        }

        container.innerHTML = results.map(p => {
            const r = this.providerRating(p);
            const jobs = db.bookings().filter(b => b.providerId === p.id && b.status === 'Completed').length;
            return `
            <div class="provider-card">
                <img src="${avatarUrl(p.name, 96)}" class="prov-avatar" alt="${esc(p.name)}">
                <div class="prov-info">
                    <div class="prov-header">
                        <div>
                            <div class="prov-name">${esc(p.name)} ${p.verified ? '<i data-lucide="badge-check" class="badge-verified" title="Verified"></i>' : ''}${p.isNew ? '<span class="tag">New</span>' : ''}</div>
                            <div class="text-small text-muted">${esc(p.category)} · ${esc(p.available)}</div>
                        </div>
                        <div class="text-right">
                            <div class="price-tag">₹${p.price}<span class="text-small text-muted">/hr</span></div>
                        </div>
                    </div>
                    <div class="prov-meta">
                        <span class="rating"><i data-lucide="star" style="width:14px"></i> ${r.rating || 'New'} (${r.count})</span>
                        <span><i data-lucide="map-pin" style="width:14px"></i> ${esc(p.distance)} km</span>
                        <span><i data-lucide="briefcase" style="width:14px"></i> ${esc(p.experience)} yrs</span>
                        ${jobs ? `<span><i data-lucide="check-circle" style="width:14px"></i> ${jobs} jobs here</span>` : ''}
                    </div>
                    <p class="text-small text-muted mt-2">${esc(p.desc)}</p>
                    <div class="prov-actions">
                        <button class="btn btn-outline" onclick="app.viewProfile('${p.id}')">View profile</button>
                        <button class="btn btn-primary" onclick="app.openBookingModal('${p.id}')">Book &amp; pay</button>
                    </div>
                </div>
            </div>`;
        }).join('');
        if (window.lucide) lucide.createIcons();
    },

    /* ======== PROFILE ======== */

    viewProfile(providerId) {
        const p = mockProviders.find(x => x.id === providerId);
        if (!p) return;
        const r = this.providerRating(p);
        const reviews = db.reviews().filter(rv => rv.providerId === p.id);
        const completed = db.bookings().filter(b => b.providerId === p.id && b.status === 'Completed').length;
        const sample = pricing.quote({ rate: p.price, hours: 2, urgency: 'standard' });

        document.getElementById('profile-container').innerHTML = `
            <div class="profile-header">
                <img src="${avatarUrl(p.name, 160)}" class="profile-avatar" alt="${esc(p.name)}">
                <div class="profile-main">
                    <h1>${esc(p.name)} ${p.verified ? '<i data-lucide="badge-check" class="badge-verified"></i>' : ''}</h1>
                    <p class="text-muted" style="font-size:1.05rem">${esc(p.category)} · ${esc(p.available)}</p>
                    <div class="prov-meta mt-2">
                        <span class="rating"><i data-lucide="star" style="width:16px"></i> ${r.rating || 'New'} (${r.count} reviews)</span>
                        <span><i data-lucide="map-pin" style="width:16px"></i> ${esc(p.distance)} km away</span>
                        <span><i data-lucide="check-circle" style="width:16px"></i> ${completed} jobs on LocalFix</span>
                    </div>
                    <div class="prov-actions mt-4">
                        <button class="btn btn-primary" onclick="app.openBookingModal('${p.id}')"><i data-lucide="calendar-check"></i> Book &amp; pay securely</button>
                        <button class="btn btn-outline" onclick="app.showToast('Chat opens after your booking is confirmed.')"><i data-lucide="message-circle"></i> Message</button>
                    </div>
                </div>
            </div>
            <div class="profile-body">
                <div>
                    <div class="profile-section">
                        <h3>About</h3>
                        <p class="mt-2 text-muted">${esc(p.about)}</p>
                        <h4 class="mt-4">Services offered</h4>
                        <div class="profile-tags">${(p.skills || []).map(s => `<span class="tag">${esc(s)}</span>`).join('')}</div>
                    </div>
                    <div class="profile-section">
                        <h3>Recent Reviews</h3>
                        <div class="review-item">
                            <div class="rating mb-2"><i data-lucide="star"></i><i data-lucide="star"></i><i data-lucide="star"></i><i data-lucide="star"></i><i data-lucide="star"></i></div>
                            <p>"Bohot sahi kaam karte hai ye log, Highly recommended!"</p>
                            <p class="text-small text-muted mt-2">- konitari human</p>
                        </div>
                        <div class="review-item">
                            <div class="rating mb-2"><i data-lucide="star"></i><i data-lucide="star"></i><i data-lucide="star"></i><i data-lucide="star"></i></div>
                            <p>"ek number service, phir se lunga 👍"</p>
                            <p class="text-small text-muted mt-2">- Aditya W.</p>
                        </div>
                        <div class="review-item">
                            <div class="rating mb-2"><i data-lucide="star"></i><i data-lucide="star"></i><i data-lucide="star"></i><i data-lucide="star"></i></div>
                            <p>"loved it ."</p>
                            <p class="text-small text-muted mt-2">- shubham Z.</p>
                        </div>
                        <div class="review-item">
                            <div class="rating mb-2"><i data-lucide="star"></i><i data-lucide="star"></i><i data-lucide="star"></i></div>
                            <p>"thoda sahi thoda baster !"</p>
                            <p class="text-small text-muted mt-2">- Ziyan Xcr.</p>
                        </div>
                    </div>
                </div>
                  <div>
                    <div class="profile-section">
                        <h3>Quick Details</h3>
                        <ul class="mt-4" style="display:flex; flex-direction:column; gap:15px; color: var(--text-muted)">
                            <li><strong style="color:var(--text-main)">Starting Price:</strong> ₹${p.price}/hr</li>
                            <li><strong style="color:var(--text-main)">Experience:</strong> ${p.experience} Years</li>
                            <li><strong style="color:var(--text-main)">Working Hours:</strong> Mon-Sat (8am-6pm)</li>
                        </ul>
                    </div>
                </div>
            </div>
                <div>
                    <div class="profile-section price-card">
                        <h3>Sample estimate</h3>
                        <p class="text-small text-muted">For a standard 2-hour job</p>
                        <div class="quote-line"><span>Labour (2 hrs × ₹${p.price})</span><span>${money(sample.labour)}</span></div>
                        <div class="quote-line"><span>Visit &amp; inspection</span><span>${money(sample.visitFee)}</span></div>
                        <div class="quote-line"><span>Platform fee</span><span>${money(sample.platformFee)}</span></div>
                        <div class="quote-line"><span>GST (18%)</span><span>${money(sample.gst)}</span></div>
                        <div class="quote-line total"><span>Estimated total</span><span>${money(sample.total)}</span></div>
                        <button class="btn btn-primary w-100 mt-4" onclick="app.openBookingModal('${p.id}')">Get exact quote</button>
                        <ul class="trust-list mt-4">
                            <li><i data-lucide="shield-check"></i> Money held in escrow until job completion</li>
                            <li><i data-lucide="receipt"></i> GST invoice for every booking</li>
                            <li><i data-lucide="rotate-ccw"></i> Free cancellation before acceptance</li>
                        </ul>
                    </div>
                </div>
            </div>`;
        if (window.lucide) lucide.createIcons();
        this.navigate('profile');
    },

    /* ======== BOOKING + PAYMENT FLOW ======== */

    openBookingModal(providerId) {
        const provider = mockProviders.find(p => p.id === providerId);
        if (!provider) return;

        if (!state.currentUser) {
            this.showToast('Please log in to book and pay.', 'error');
            this.openAuth('customer');
            return;
        }
        if (state.currentUser.providerId === providerId) {
            this.showToast('You cannot book your own listing.', 'error');
            return;
        }

        const today = new Date();
        today.setDate(today.getDate() + 1);
        booking.provider = provider;
        booking.step = 1;
        booking.processing = false;
        booking.quote = null;
        booking.data = {
            date: today.toISOString().slice(0, 10),
            slot: 'morning',
            hours: 2,
            urgency: 'standard',
            desc: '',
            address: '',
            landmark: '',
            contact: state.currentUser.phone || '',
            coupon: '',
            materials: 0,
            method: 'upi'
        };
        document.getElementById('booking-modal').classList.add('active');
        document.body.classList.add('modal-open');
        this.renderBooking();
    },

    closeModal(modalId) {
        const el = document.getElementById(modalId);
        if (el) el.classList.remove('active');
        document.body.classList.remove('modal-open');
    },

    bookingSet(field, value) {
        booking.data[field] = value;
        if (['hours', 'urgency', 'slot', 'materials'].indexOf(field) > -1) this.renderBooking();
    },

    slotTaken(providerId, date, slot) {
        return db.bookings().some(b =>
            b.providerId === providerId && b.date === date && b.slot === slot &&
            ['Pending', 'Accepted', 'In Progress'].indexOf(b.status) > -1);
    },

    applyCoupon() {
        const code = (document.getElementById('bk-coupon').value || '').trim().toUpperCase();
        booking.data.coupon = code;
        const q = this.currentQuote();
        if (code && !q.couponLabel) {
            this.showToast('Coupon not valid for this order value.', 'error');
        } else if (code) {
            this.showToast('Coupon ' + code + ' applied — you saved ' + money(q.discount), 'success');
        }
        this.renderBooking();
    },

    currentQuote() {
        return pricing.quote({
            rate: booking.provider ? booking.provider.price : 0,
            hours: booking.data.hours,
            urgency: booking.data.urgency,
            slot: booking.data.slot,
            coupon: booking.data.coupon,
            materials: booking.data.materials
        });
    },

    renderBooking() {
        const p = booking.provider;
        if (!p) return;
        const d = booking.data;
        const q = this.currentQuote();
        booking.quote = q;
        const stepNames = ['Schedule', 'Job details', 'Quote', 'Payment'];
        const minDate = new Date().toISOString().slice(0, 10);

        let body = '';

        if (booking.step === 1) {
            body = `
                <h4>When do you need ${esc(p.category)} help?</h4>
                <div class="form-row mt-2">
                    <div class="form-group">
                        <label for="bk-date">Preferred date</label>
                        <input type="date" id="bk-date" class="modal-input" min="${minDate}" value="${d.date}" onchange="app.bookingSet('date', this.value)">
                    </div>
                    <div class="form-group">
                        <label for="bk-hours">Estimated hours</label>
                        <input type="number" id="bk-hours" class="modal-input" min="1" max="12" step="0.5" value="${d.hours}" onchange="app.bookingSet('hours', parseFloat(this.value)||1)">
                    </div>
                </div>
                <label class="field-label mt-2">Time slot</label>
                <div class="slot-grid">
                    ${TIME_SLOTS.map(s => {
                        const taken = this.slotTaken(p.id, d.date, s.id);
                        return `<button type="button" class="slot-btn ${d.slot === s.id ? 'selected' : ''} ${taken ? 'disabled' : ''}"
                            ${taken ? 'disabled title="Already booked"' : `onclick="app.bookingSet('slot','${s.id}')"`}>
                            ${s.label}${taken ? '<span class="slot-tag">Booked</span>' : ''}
                        </button>`;
                    }).join('')}
                </div>
                <label class="field-label mt-4">How urgent is it?</label>
                <div class="urgency-grid">
                    ${Object.keys(BUSINESS.urgency).map(k => {
                        const u = BUSINESS.urgency[k];
                        return `<button type="button" class="urgency-btn ${d.urgency === k ? 'selected' : ''}" onclick="app.bookingSet('urgency','${k}')">
                            <i data-lucide="${u.icon}"></i>
                            <strong>${u.label}</strong>
                            <span class="text-small text-muted">${u.rate ? '+' + (u.rate * 100) + '% of labour' : 'No extra charge'}</span>
                        </button>`;
                    }).join('')}
                </div>
                <div class="live-estimate mt-4">
                    <span>Live estimate</span><strong>${money(q.total)}</strong>
                </div>`;
        }

        if (booking.step === 2) {
            body = `
                <h4>Tell the professional what is wrong</h4>
                <div class="form-group mt-2">
                    <label for="bk-desc">Describe the job</label>
                    <textarea id="bk-desc" class="modal-input" rows="3" placeholder="E.g. Kitchen sink is leaking from the pipe joint since yesterday..." oninput="app.bookingSet('desc', this.value)">${esc(d.desc)}</textarea>
                </div>
                <div class="form-group">
                    <label for="bk-address">Service address</label>
                    <input type="text" id="bk-address" class="modal-input" placeholder="House / flat, street, area, city" value="${esc(d.address)}" oninput="app.bookingSet('address', this.value)">
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="bk-landmark">Landmark (optional)</label>
                        <input type="text" id="bk-landmark" class="modal-input" placeholder="Near GCOE main gate" value="${esc(d.landmark)}" oninput="app.bookingSet('landmark', this.value)">
                    </div>
                    <div class="form-group">
                        <label for="bk-contact">Contact number</label>
                        <input type="tel" id="bk-contact" class="modal-input" placeholder="10-digit mobile" value="${esc(d.contact)}" oninput="app.bookingSet('contact', this.value)">
                    </div>
                </div>
                <div class="form-group">
                    <label for="bk-materials">Estimated material cost (optional)</label>
                    <input type="number" id="bk-materials" class="modal-input" min="0" step="50" value="${d.materials}" placeholder="0" onchange="app.bookingSet('materials', parseFloat(this.value)||0)">
                    <span class="text-small text-muted">Parts and spares the professional may need to buy.</span>
                </div>`;
        }

        if (booking.step === 3) {
            body = `
                <h4>Your quote</h4>
                <div class="quote-box mt-2">
                    <div class="quote-head">
                        <div>
                            <strong>${esc(p.name)}</strong>
                            <div class="text-small text-muted">${esc(p.category)} · ${esc(d.date)} · ${TIME_SLOTS.filter(s => s.id === d.slot)[0].label}</div>
                        </div>
                        <span class="tag">${esc(q.urgencyLabel)}</span>
                    </div>
                    <div class="quote-line"><span>Labour (${d.hours} hrs × ₹${p.price}/hr)</span><span>${money(q.labour)}</span></div>
                    ${q.surcharge ? `<div class="quote-line"><span>Urgency surcharge</span><span>${money(q.surcharge)}</span></div>` : ''}
                    ${q.nightFee ? `<div class="quote-line"><span>Night slot fee</span><span>${money(q.nightFee)}</span></div>` : ''}
                    ${q.materials ? `<div class="quote-line"><span>Materials (estimate)</span><span>${money(q.materials)}</span></div>` : ''}
                    <div class="quote-line"><span>Visit &amp; inspection ${q.visitFee ? '' : '<em>(waived)</em>'}</span><span>${money(q.visitFee)}</span></div>
                    ${q.discount ? `<div class="quote-line discount"><span>Coupon ${esc(q.couponLabel)}</span><span>− ${money(q.discount)}</span></div>` : ''}
                    <div class="quote-line"><span>Platform convenience fee</span><span>${money(q.platformFee)}</span></div>
                    <div class="quote-line"><span>GST (18%)</span><span>${money(q.gst)}</span></div>
                    <div class="quote-line total"><span>Total payable</span><span>${money(q.total)}</span></div>
                </div>
                <div class="coupon-row mt-4">
                    <input type="text" id="bk-coupon" class="modal-input" placeholder="Coupon code (try FIRST50, LOCAL10, GCOEJ25)" value="${esc(d.coupon)}">
                    <button class="btn btn-outline" onclick="app.applyCoupon()">Apply</button>
                </div>
                <div class="split-box mt-4">
                    <div><span>Professional receives</span><strong>${money(q.providerPayout)}</strong></div>
                    <div><span>LocalFix platform earns (${Math.round(q.commissionRate * 100)}% + fee)</span><strong>${money(q.platformRevenue)}</strong></div>
                </div>
                <p class="text-small text-muted mt-2"><i data-lucide="shield-check" style="width:14px"></i> Your payment stays in escrow and is released to the professional only after you mark the job complete.</p>`;
        }

        if (booking.step === 4) {
            body = `
                <h4>Choose how to pay</h4>
                <div class="pay-grid mt-2">
                    ${[
                        { id: 'upi', label: 'UPI', sub: 'GPay, PhonePe, Paytm', icon: 'smartphone' },
                        { id: 'card', label: 'Card', sub: 'Credit / Debit', icon: 'credit-card' },
                        { id: 'netbanking', label: 'Net banking', sub: 'All major banks', icon: 'landmark' },
                        { id: 'cod', label: 'Pay after service', sub: 'Cash / UPI to pro', icon: 'wallet' }
                    ].map(m => `
                        <button type="button" class="pay-btn ${d.method === m.id ? 'selected' : ''}" onclick="app.selectPayMethod('${m.id}')">
                            <i data-lucide="${m.icon}"></i>
                            <strong>${m.label}</strong>
                            <span class="text-small text-muted">${m.sub}</span>
                        </button>`).join('')}
                </div>
                <div id="pay-fields" class="pay-fields mt-4">${this.payFieldsHtml()}</div>
                <div class="pay-summary mt-4">
                    <span>Amount payable now</span>
                    <strong>${d.method === 'cod' ? money(q.platformFee + Math.round(q.platformFee * BUSINESS.gstRate)) : money(q.total)}</strong>
                </div>
                ${d.method === 'cod' ? `<p class="text-small text-muted mt-2">Only the platform fee is collected now. The remaining ${money(q.total - q.platformFee - Math.round(q.platformFee * BUSINESS.gstRate))} is paid directly to the professional after the job.</p>` : ''}
                <div class="secure-note mt-2"><i data-lucide="lock"></i> 256-bit encrypted · PCI-DSS simulated demo gateway</div>`;
        }

        if (booking.step === 5) {
            const b = db.getBooking(booking.lastBookingId);
            body = `
                <div class="success-wrap text-center">
                    <i data-lucide="check-circle" class="success-icon"></i>
                    <h4>Booking confirmed</h4>
                    <p class="text-muted">Booking <strong>${esc(b.id)}</strong> is confirmed with ${esc(b.providerName)}.</p>
                    <div class="receipt-mini mt-4">
                        <div><span>Paid</span><strong>${money(b.payment.paidNow)}</strong></div>
                        <div><span>Method</span><strong>${b.payment.method.toUpperCase()}</strong></div>
                        <div><span>Txn ID</span><strong>${esc(b.payment.txnId)}</strong></div>
                        <div><span>Scheduled</span><strong>${esc(b.date)}</strong></div>
                    </div>
                    <div class="modal-actions mt-4">
                        <button class="btn btn-outline" onclick="app.openInvoice('${b.id}')">View invoice</button>
                        <button class="btn btn-primary" onclick="app.closeModal('booking-modal'); app.navigate('dashboard')">Track booking</button>
                    </div>
                </div>`;
        }

        const footer = booking.step >= 5 ? '' : `
            <button class="btn btn-outline" id="btn-prev" style="visibility:${booking.step === 1 ? 'hidden' : 'visible'}" onclick="app.bookingPrev()">Back</button>
            <div class="footer-total">${booking.step < 4 ? 'Estimate: <strong>' + money(q.total) + '</strong>' : ''}</div>
            <button class="btn btn-primary" id="btn-next" onclick="app.bookingNext()" ${booking.processing ? 'disabled' : ''}>
                ${booking.processing ? '<span class="spinner"></span> Processing…' : (booking.step === 4 ? (booking.data.method === 'cod' ? 'Confirm booking' : 'Pay ' + money(q.total)) : 'Continue')}
            </button>`;

        document.getElementById('booking-modal-inner').innerHTML = `
            <div class="modal-header">
                <div>
                    <h3>${booking.step === 5 ? 'Payment successful' : 'Book ' + esc(p.name)}</h3>
                    ${booking.step < 5 ? `<p class="text-small text-muted">Step ${booking.step} of 4 · ${stepNames[booking.step - 1]}</p>` : ''}
                </div>
                <button class="icon-btn" onclick="app.closeModal('booking-modal')"><i data-lucide="x"></i></button>
            </div>
            ${booking.step < 5 ? `<div class="stepper">${stepNames.map((n, i) => `<div class="stepper-item ${i + 1 <= booking.step ? 'done' : ''}"><span>${i + 1}</span>${n}</div>`).join('')}</div>` : ''}
            <div class="modal-body">${body}</div>
            ${footer ? `<div class="modal-footer">${footer}</div>` : ''}`;
        if (window.lucide) lucide.createIcons();
    },

    selectPayMethod(method) {
        booking.data.method = method;
        this.renderBooking();
    },

    payFieldsHtml() {
        const m = booking.data.method;
        if (m === 'upi') {
            return `<div class="form-group"><label for="pay-upi">UPI ID</label>
                <input type="text" id="pay-upi" class="modal-input" placeholder="yourname@okicici">
                <span class="text-small text-muted">Demo tip: any valid format works, e.g. aditya@okhdfc</span></div>`;
        }
        if (m === 'card') {
            return `<div class="form-group"><label for="pay-card">Card number</label>
                    <input type="text" id="pay-card" class="modal-input" maxlength="19" placeholder="4111 1111 1111 1111" oninput="app.formatCard(this)"></div>
                <div class="form-row">
                    <div class="form-group"><label for="pay-name">Name on card</label><input type="text" id="pay-name" class="modal-input" placeholder="ADITYA WANKHEDE"></div>
                    <div class="form-group"><label for="pay-exp">Expiry (MM/YY)</label><input type="text" id="pay-exp" class="modal-input" maxlength="5" placeholder="08/29"></div>
                    <div class="form-group"><label for="pay-cvv">CVV</label><input type="password" id="pay-cvv" class="modal-input" maxlength="4" placeholder="123"></div>
                </div>
                <span class="text-small text-muted">Demo tip: test card 4111 1111 1111 1111</span>`;
        }
        if (m === 'netbanking') {
            return `<div class="form-group"><label for="pay-bank">Select your bank</label>
                <select id="pay-bank" class="modal-input">
                    <option value="">Choose a bank</option>
                    <option>State Bank of India</option><option>HDFC Bank</option><option>ICICI Bank</option>
                    <option>Axis Bank</option><option>Bank of Maharashtra</option><option>Kotak Mahindra Bank</option>
                </select></div>`;
        }
        return `<div class="cod-note"><i data-lucide="info"></i> Pay the professional directly in cash or UPI after the job is done. A small platform fee is collected now to confirm the slot.</div>`;
    },

    formatCard(input) {
        const digits = input.value.replace(/\D/g, '').slice(0, 16);
        input.value = digits.replace(/(.{4})/g, '$1 ').trim();
    },

    bookingPrev() {
        if (booking.step > 1) { booking.step--; this.renderBooking(); }
    },

    bookingNext() {
        if (booking.processing) return;
        const d = booking.data;

        if (booking.step === 1) {
            if (!d.date) return this.showToast('Please choose a date.', 'error');
            if (new Date(d.date) < new Date(new Date().toISOString().slice(0, 10))) return this.showToast('Please pick today or a future date.', 'error');
            if (this.slotTaken(booking.provider.id, d.date, d.slot)) return this.showToast('That slot is already booked. Pick another.', 'error');
            if (!d.hours || d.hours < 1) return this.showToast('Estimated hours must be at least 1.', 'error');
        }
        if (booking.step === 2) {
            if ((d.desc || '').trim().length < 10) return this.showToast('Please describe the job (at least 10 characters).', 'error');
            if ((d.address || '').trim().length < 8) return this.showToast('Please enter a complete service address.', 'error');
            if (!auth.isPhone((d.contact || '').trim())) return this.showToast('Enter a valid 10-digit contact number.', 'error');
        }
        if (booking.step === 4) return this.processPayment();

        booking.step++;
        this.renderBooking();
    },

    collectPaymentMeta() {
        const m = booking.data.method;
        if (m === 'upi') {
            const upi = (document.getElementById('pay-upi').value || '').trim();
            if (!gateway.validUpi(upi)) return { error: 'Enter a valid UPI ID, e.g. name@okhdfc' };
            return { meta: { upi: upi, label: upi } };
        }
        if (m === 'card') {
            const num = document.getElementById('pay-card').value || '';
            const name = (document.getElementById('pay-name').value || '').trim();
            const exp = document.getElementById('pay-exp').value || '';
            const cvv = document.getElementById('pay-cvv').value || '';
            if (!gateway.luhn(num)) return { error: 'That card number is not valid.' };
            if (name.length < 3) return { error: 'Enter the name printed on the card.' };
            if (!gateway.validExpiry(exp)) return { error: 'Enter a valid, unexpired expiry date (MM/YY).' };
            if (!/^\d{3,4}$/.test(cvv)) return { error: 'Enter a valid CVV.' };
            const digits = num.replace(/\D/g, '');
            return { meta: { brand: gateway.cardBrand(digits), last4: digits.slice(-4), label: gateway.cardBrand(digits) + ' •••• ' + digits.slice(-4) } };
        }
        if (m === 'netbanking') {
            const bank = document.getElementById('pay-bank').value;
            if (!bank) return { error: 'Please select your bank.' };
            return { meta: { bank: bank, label: bank } };
        }
        return { meta: { label: 'Cash / UPI after service' } };
    },

    processPayment() {
        const collected = this.collectPaymentMeta();
        if (collected.error) return this.showToast(collected.error, 'error');

        const q = this.currentQuote();
        const d = booking.data;
        const codFee = q.platformFee + Math.round(q.platformFee * BUSINESS.gstRate);
        const paidNow = d.method === 'cod' ? codFee : q.total;

        booking.processing = true;
        this.renderBooking();

        gateway.charge(paidNow, d.method, collected.meta).then(txn => {
            const provider = booking.provider;
            const id = db.nextId('LF');
            const payoutDate = new Date();
            payoutDate.setDate(payoutDate.getDate() + BUSINESS.payoutDelayDays);

            const record = {
                id: id,
                createdAt: new Date().toISOString(),
                customerEmail: state.currentUser.email,
                customerName: state.currentUser.name,
                providerId: provider.id,
                providerName: provider.name,
                service: provider.category,
                date: d.date,
                slot: d.slot,
                slotLabel: TIME_SLOTS.filter(s => s.id === d.slot)[0].label,
                hours: d.hours,
                urgency: d.urgency,
                desc: d.desc,
                address: d.address,
                landmark: d.landmark,
                contact: d.contact,
                status: 'Pending',
                quote: q,
                payment: {
                    method: d.method,
                    label: collected.meta.label,
                    txnId: txn.txnId,
                    paidNow: paidNow,
                    dueOnCompletion: d.method === 'cod' ? q.total - codFee : 0,
                    escrow: d.method !== 'cod' ? q.providerPayout : 0,
                    status: d.method === 'cod' ? 'Partially paid' : 'Held in escrow',
                    at: txn.at
                },
                payout: { status: 'Scheduled', amount: q.providerPayout, dueOn: payoutDate.toISOString().slice(0, 10) },
                timeline: [{ at: new Date().toISOString(), label: 'Booking created and payment ' + (d.method === 'cod' ? 'partially collected' : 'captured') }]
            };

            db.upsertBooking(record);
            db.addLedger({ bookingId: id, type: 'charge', gross: paidNow, commission: q.commission, platformFee: q.platformFee, gst: q.gst, providerPayout: q.providerPayout, platformRevenue: q.platformRevenue, method: d.method });

            booking.lastBookingId = id;
            booking.processing = false;
            booking.step = 5;
            this.renderBooking();
            this.renderTrustStats();
            this.showToast('Payment successful — booking ' + id + ' confirmed.', 'success');
        });
    },

    /* ======== INVOICE ======== */

    openInvoice(bookingId) {
        const b = db.getBooking(bookingId);
        if (!b) return;
        const q = b.quote;
        document.getElementById('invoice-modal-inner').innerHTML = `
            <div class="modal-header">
                <h3>Tax invoice</h3>
                <button class="icon-btn" onclick="app.closeModal('invoice-modal')"><i data-lucide="x"></i></button>
            </div>
            <div class="modal-body">
                <div id="invoice-print" class="invoice">
                    <div class="invoice-head">
                        <div>
                            <h2>${BUSINESS.companyName}</h2>
                            <p class="text-small text-muted">${BUSINESS.address}<br>GSTIN: ${BUSINESS.gstin} · ${BUSINESS.supportPhone}</p>
                        </div>
                        <div class="text-right">
                            <div class="invoice-no">${esc(b.id)}</div>
                            <div class="text-small text-muted">${new Date(b.createdAt).toLocaleString('en-IN')}</div>
                            <span class="status-badge status-${b.status.toLowerCase().replace(/\s/g, '-')}">${esc(b.status)}</span>
                        </div>
                    </div>
                    <div class="invoice-parties">
                        <div><strong>Billed to</strong><p class="text-small">${esc(b.customerName)}<br>${esc(b.customerEmail)}<br>${esc(b.address)}<br>${esc(b.contact)}</p></div>
                        <div><strong>Service by</strong><p class="text-small">${esc(b.providerName)}<br>${esc(b.service)}<br>${esc(b.date)} · ${esc(b.slotLabel)}</p></div>
                    </div>
                    <table class="invoice-table">
                        <thead><tr><th>Description</th><th class="text-right">Amount</th></tr></thead>
                        <tbody>
                            <tr><td>Labour — ${esc(b.service)} (${b.hours} hrs × ₹${q.rate}/hr)</td><td class="text-right">${money(q.labour)}</td></tr>
                            ${q.surcharge ? `<tr><td>Urgency surcharge — ${esc(q.urgencyLabel)}</td><td class="text-right">${money(q.surcharge)}</td></tr>` : ''}
                            ${q.nightFee ? `<tr><td>Night slot fee</td><td class="text-right">${money(q.nightFee)}</td></tr>` : ''}
                            ${q.materials ? `<tr><td>Materials estimate</td><td class="text-right">${money(q.materials)}</td></tr>` : ''}
                            <tr><td>Visit &amp; inspection</td><td class="text-right">${money(q.visitFee)}</td></tr>
                            ${q.discount ? `<tr><td>Discount (${esc(q.couponLabel)})</td><td class="text-right">− ${money(q.discount)}</td></tr>` : ''}
                            <tr><td>Platform convenience fee</td><td class="text-right">${money(q.platformFee)}</td></tr>
                            <tr><td>GST @ 18%</td><td class="text-right">${money(q.gst)}</td></tr>
                            <tr class="total-row"><td>Total</td><td class="text-right">${money(q.total)}</td></tr>
                        </tbody>
                    </table>
                    <div class="invoice-foot">
                        <div><span>Payment method</span><strong>${esc(b.payment.label)}</strong></div>
                        <div><span>Transaction ID</span><strong>${esc(b.payment.txnId)}</strong></div>
                        <div><span>Paid now</span><strong>${money(b.payment.paidNow)}</strong></div>
                        ${b.payment.dueOnCompletion ? `<div><span>Due after service</span><strong>${money(b.payment.dueOnCompletion)}</strong></div>` : ''}
                        <div><span>Payment status</span><strong>${esc(b.payment.status)}</strong></div>
                    </div>
                    <p class="text-small text-muted mt-4">This is a computer-generated invoice issued by ${BUSINESS.companyName}. Professional payout of ${money(q.providerPayout)} is released after job completion; LocalFix retains ${money(q.platformRevenue)} as commission and platform fees.</p>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-outline" onclick="app.closeModal('invoice-modal')">Close</button>
                <button class="btn btn-primary" onclick="app.printInvoice()"><i data-lucide="printer"></i> Print / Save PDF</button>
            </div>`;
        document.getElementById('invoice-modal').classList.add('active');
        document.body.classList.add('modal-open');
        if (window.lucide) lucide.createIcons();
    },

    printInvoice() {
        const html = document.getElementById('invoice-print').innerHTML;
        const w = window.open('', '_blank', 'width=820,height=900');
        w.document.write('<html><head><title>LocalFix Invoice</title><link rel="stylesheet" href="styles.css"></head><body style="padding:32px;background:#fff"><div class="invoice">' + html + '</div></body></html>');
        w.document.close();
        setTimeout(() => w.print(), 400);
    },

    /* ======== BOOKING LIFECYCLE ======== */

    updateBookingStatus(id, status, note) {
        const b = db.getBooking(id);
        if (!b) return;
        b.status = status;
        b.timeline.push({ at: new Date().toISOString(), label: note || ('Status changed to ' + status) });

        if (status === 'Completed') {
            b.payment.status = b.payment.method === 'cod' ? 'Collected by professional' : 'Released to professional';
            b.payout.status = 'Paid';
            b.payout.paidAt = new Date().toISOString();
            db.addLedger({ bookingId: id, type: 'payout', amount: b.quote.providerPayout, providerId: b.providerId });
        }
        db.upsertBooking(b);
        this.renderDashboard();
        this.renderTrustStats();
        this.showToast('Booking ' + id + ' → ' + status, 'success');
    },

    cancelBooking(id) {
        const b = db.getBooking(id);
        if (!b) return;
        const feeApplies = b.status !== 'Pending';
        const fee = feeApplies ? Math.round(b.quote.subtotal * BUSINESS.cancellationFeeRate) : 0;
        const refund = Math.max(0, b.payment.paidNow - fee);
        if (!confirm('Cancel booking ' + id + '?\n\n' + (feeApplies
            ? 'The professional already accepted, so a ' + (BUSINESS.cancellationFeeRate * 100) + '% cancellation fee of ' + money(fee) + ' applies.\nRefund to you: ' + money(refund)
            : 'Free cancellation — full refund of ' + money(refund) + ' in 3-5 working days.'))) return;

        b.status = 'Cancelled';
        b.payment.status = refund > 0 ? 'Refunded ' + money(refund) : 'No refund';
        b.payout.status = 'Cancelled';
        b.refund = { amount: refund, fee: fee, at: new Date().toISOString() };
        b.timeline.push({ at: new Date().toISOString(), label: 'Cancelled by ' + (state.currentUser.role === 'provider' ? 'professional' : 'customer') + ' · refund ' + money(refund) });
        db.upsertBooking(b);
        db.addLedger({ bookingId: id, type: 'refund', amount: -refund, platformRevenue: fee });
        this.renderDashboard();
        this.showToast('Booking cancelled. Refund of ' + money(refund) + ' initiated.', 'success');
    },

    openReview(id) {
        const b = db.getBooking(id);
        if (!b) return;
        const stars = prompt('Rate ' + b.providerName + ' out of 5:', '5');
        if (stars === null) return;
        const n = Math.max(1, Math.min(5, parseInt(stars, 10) || 5));
        const text = prompt('Write a short review:', 'Great work, on time and professional.');
        if (text === null) return;
        db.addReview({ providerId: b.providerId, bookingId: b.id, stars: n, text: text, author: b.customerName, at: new Date().toISOString() });
        b.reviewed = true;
        db.upsertBooking(b);
        this.renderDashboard();
        this.showToast('Thanks for reviewing ' + b.providerName + '!', 'success');
    },

    /* ======== DASHBOARD ======== */

    setDashTab(tab) {
        state.dashTab = tab;
        this.renderDashboard();
    },

    renderDashboard() {
        const root = document.getElementById('dashboard-root');
        if (!root) return;
        if (!state.currentUser) {
            this.showToast('Please log in to view your dashboard.', 'error');
            this.openAuth('customer');
            return;
        }
        const user = state.currentUser;
        const isProvider = user.role === 'provider';
        const isOwner = user.role === 'owner';

        const tabs = isOwner
            ? [{ id: 'business', label: 'Business overview', icon: 'trending-up' }, { id: 'transactions', label: 'Transactions', icon: 'receipt' }]
            : isProvider
                ? [{ id: 'jobs', label: 'Job requests', icon: 'briefcase' }, { id: 'earnings', label: 'Earnings', icon: 'wallet' }, { id: 'bookings', label: 'My bookings', icon: 'calendar' }]
                : [{ id: 'bookings', label: 'My bookings', icon: 'calendar' }, { id: 'payments', label: 'Payments', icon: 'credit-card' }];

        if (!state.dashTab || !tabs.some(t => t.id === state.dashTab)) state.dashTab = tabs[0].id;

        root.innerHTML = `
            <div class="dash-head">
                <div>
                    <h2>Welcome back, ${esc(user.name)}</h2>
                    <p class="text-muted text-small">${isOwner ? 'Platform owner console' : isProvider ? 'Professional workspace' : 'Customer account'} · ${esc(user.email)}</p>
                </div>
                <div class="dash-head-actions">
                    ${!isOwner && !isProvider ? '<button class="btn btn-primary" onclick="app.navigate(\'search\')"><i data-lucide="plus"></i> New booking</button>' : ''}
                    ${isProvider ? '<button class="btn btn-outline" onclick="app.navigate(\'provider-onboarding\')">Edit listing</button>' : ''}
                </div>
            </div>
            <div class="dash-tabs">${tabs.map(t => `<button class="dash-tab ${state.dashTab === t.id ? 'active' : ''}" onclick="app.setDashTab('${t.id}')"><i data-lucide="${t.icon}"></i> ${t.label}</button>`).join('')}</div>
            <div id="dash-panel"></div>`;

        const panel = document.getElementById('dash-panel');
        if (isOwner) panel.innerHTML = state.dashTab === 'business' ? this.ownerOverviewHtml() : this.ownerTransactionsHtml();
        else if (isProvider && state.dashTab === 'jobs') panel.innerHTML = this.providerJobsHtml();
        else if (isProvider && state.dashTab === 'earnings') panel.innerHTML = this.providerEarningsHtml();
        else if (state.dashTab === 'payments') panel.innerHTML = this.customerPaymentsHtml();
        else panel.innerHTML = this.customerBookingsHtml();

        if (window.lucide) lucide.createIcons();
    },

    statusBadge(status) {
        return `<span class="status-badge status-${status.toLowerCase().replace(/\s/g, '-')}">${status}</span>`;
    },

    bookingCardHtml(b, role) {
        const actions = [];
        if (role === 'provider') {
            if (b.status === 'Pending') {
                actions.push(`<button class="btn btn-primary btn-sm" onclick="app.updateBookingStatus('${b.id}','Accepted','Professional accepted the job')">Accept job</button>`);
                actions.push(`<button class="btn btn-outline btn-sm" onclick="app.cancelBooking('${b.id}')">Decline</button>`);
            }
            if (b.status === 'Accepted') actions.push(`<button class="btn btn-primary btn-sm" onclick="app.updateBookingStatus('${b.id}','In Progress','Professional started work')">Start job</button>`);
            if (b.status === 'In Progress') actions.push(`<button class="btn btn-primary btn-sm" onclick="app.updateBookingStatus('${b.id}','Completed','Job completed · payout released')">Mark complete</button>`);
        } else {
            if (['Pending', 'Accepted'].indexOf(b.status) > -1) actions.push(`<button class="btn btn-outline btn-sm" onclick="app.cancelBooking('${b.id}')">Cancel</button>`);
            if (b.status === 'In Progress') actions.push(`<button class="btn btn-primary btn-sm" onclick="app.updateBookingStatus('${b.id}','Completed','Customer confirmed completion · escrow released')">Confirm completion</button>`);
            if (b.status === 'Completed' && !b.reviewed) actions.push(`<button class="btn btn-primary btn-sm" onclick="app.openReview('${b.id}')">Leave review</button>`);
        }
        actions.push(`<button class="btn btn-outline btn-sm" onclick="app.openInvoice('${b.id}')">Invoice</button>`);

        return `
            <div class="booking-card">
                <div class="booking-top">
                    <div>
                        <strong>${esc(b.service)} · ${esc(role === 'provider' ? b.customerName : b.providerName)}</strong>
                        <div class="text-small text-muted">${esc(b.id)} · ${esc(b.date)} · ${esc(b.slotLabel)}</div>
                    </div>
                    ${this.statusBadge(b.status)}
                </div>
                <p class="text-small text-muted mt-2">${esc(b.desc)}</p>
                <div class="booking-meta">
                    <span><i data-lucide="map-pin" style="width:14px"></i> ${esc(b.address)}</span>
                    <span><i data-lucide="clock" style="width:14px"></i> ${b.hours} hrs</span>
                    <span><i data-lucide="credit-card" style="width:14px"></i> ${esc(b.payment.label)}</span>
                    <span><i data-lucide="shield-check" style="width:14px"></i> ${esc(b.payment.status)}</span>
                </div>
                <div class="booking-bottom">
                    <div class="booking-amount">
                        <span class="text-small text-muted">${role === 'provider' ? 'Your payout' : 'Total'}</span>
                        <strong>${money(role === 'provider' ? b.quote.providerPayout : b.quote.total)}</strong>
                    </div>
                    <div class="booking-actions">${actions.join('')}</div>
                </div>
            </div>`;
    },

    customerBookingsHtml() {
        const list = db.bookings().filter(b => b.customerEmail === state.currentUser.email);
        const active = list.filter(b => ['Pending', 'Accepted', 'In Progress'].indexOf(b.status) > -1);
        const past = list.filter(b => ['Completed', 'Cancelled'].indexOf(b.status) > -1);
        const spend = list.filter(b => b.status !== 'Cancelled').reduce((t, b) => t + b.quote.total, 0);

        return `
            <div class="kpi-grid">
                ${this.kpi('calendar-check', 'Active bookings', active.length)}
                ${this.kpi('check-circle', 'Completed', list.filter(b => b.status === 'Completed').length)}
                ${this.kpi('wallet', 'Total spent', money(spend))}
                ${this.kpi('shield', 'In escrow', money(list.filter(b => b.payment.status === 'Held in escrow').reduce((t, b) => t + b.payment.escrow, 0)))}
            </div>
            <div class="dash-section">
                <h3>Active bookings</h3>
                ${active.length ? active.map(b => this.bookingCardHtml(b, 'customer')).join('') : this.emptyHtml('No active bookings', 'Find a professional and book in under a minute.', "app.navigate('search')", 'Find a service')}
            </div>
            <div class="dash-section">
                <h3>History</h3>
                ${past.length ? past.map(b => this.bookingCardHtml(b, 'customer')).join('') : '<p class="text-muted text-small">No past bookings yet.</p>'}
            </div>`;
    },

    customerPaymentsHtml() {
        const list = db.bookings().filter(b => b.customerEmail === state.currentUser.email);
        if (!list.length) return this.emptyHtml('No payments yet', 'Your receipts and refunds will appear here.', "app.navigate('search')", 'Book a service');
        return `
            <div class="table-wrap">
                <table class="data-table">
                    <thead><tr><th>Booking</th><th>Date</th><th>Method</th><th>Status</th><th class="text-right">Paid</th><th></th></tr></thead>
                    <tbody>
                        ${list.map(b => `<tr>
                            <td><strong>${esc(b.id)}</strong><div class="text-small text-muted">${esc(b.providerName)}</div></td>
                            <td>${new Date(b.createdAt).toLocaleDateString('en-IN')}</td>
                            <td>${esc(b.payment.label)}</td>
                            <td>${this.statusBadge(b.status)}<div class="text-small text-muted">${esc(b.payment.status)}</div></td>
                            <td class="text-right">${money(b.payment.paidNow)}</td>
                            <td class="text-right"><button class="btn btn-outline btn-sm" onclick="app.openInvoice('${b.id}')">Invoice</button></td>
                        </tr>`).join('')}
                    </tbody>
                </table>
            </div>`;
    },

    providerJobsHtml() {
        const listing = mockProviders.find(p => p.id === state.currentUser.providerId);
        if (!listing) {
            return this.emptyHtml('Your listing is not published', 'Add your service details so customers can find and book you.', "app.navigate('provider-onboarding')", 'Complete provider profile');
        }
        const jobs = db.bookings().filter(b => b.providerId === listing.id);
        const incoming = jobs.filter(b => b.status === 'Pending');
        const running = jobs.filter(b => ['Accepted', 'In Progress'].indexOf(b.status) > -1);
        const done = jobs.filter(b => ['Completed', 'Cancelled'].indexOf(b.status) > -1);

        return `
            <div class="provider-panel">
                <strong>Your live listing</strong>
                <p class="text-small mt-2">${esc(listing.name)} · ${esc(listing.category)} · ₹${listing.price}/hr · ${esc(listing.city || 'Jalgaon')}</p>
                <div class="profile-tags">${(listing.skills || []).map(s => `<span class="tag">${esc(s)}</span>`).join('')}</div>
                <button class="btn btn-outline btn-sm mt-2" onclick="app.viewProfile('${listing.id}')">View public profile</button>
            </div>
            <div class="kpi-grid mt-4">
                ${this.kpi('inbox', 'New requests', incoming.length)}
                ${this.kpi('activity', 'In progress', running.length)}
                ${this.kpi('check-circle', 'Completed', jobs.filter(b => b.status === 'Completed').length)}
                ${this.kpi('star', 'Rating', this.providerRating(listing).rating || 'New')}
            </div>
            <div class="dash-section"><h3>New requests</h3>
                ${incoming.length ? incoming.map(b => this.bookingCardHtml(b, 'provider')).join('') : '<p class="text-muted text-small">No new requests right now.</p>'}</div>
            <div class="dash-section"><h3>Scheduled &amp; ongoing</h3>
                ${running.length ? running.map(b => this.bookingCardHtml(b, 'provider')).join('') : '<p class="text-muted text-small">Nothing scheduled.</p>'}</div>
            <div class="dash-section"><h3>History</h3>
                ${done.length ? done.map(b => this.bookingCardHtml(b, 'provider')).join('') : '<p class="text-muted text-small">No completed jobs yet.</p>'}</div>`;
    },

    providerEarningsHtml() {
        const pid = state.currentUser.providerId;
        const jobs = db.bookings().filter(b => b.providerId === pid && b.status !== 'Cancelled');
        const completed = jobs.filter(b => b.status === 'Completed');
        const gross = jobs.reduce((t, b) => t + b.quote.subtotal - b.quote.discount, 0);
        const commission = jobs.reduce((t, b) => t + b.quote.commission, 0);
        const paid = completed.reduce((t, b) => t + b.quote.providerPayout, 0);
        const pending = jobs.filter(b => b.status !== 'Completed').reduce((t, b) => t + b.quote.providerPayout, 0);

        return `
            <div class="kpi-grid">
                ${this.kpi('banknote', 'Gross job value', money(gross))}
                ${this.kpi('percent', 'Platform commission (15%)', money(commission))}
                ${this.kpi('wallet', 'Paid out to you', money(paid))}
                ${this.kpi('hourglass', 'Pending payout', money(pending))}
            </div>
            <div class="dash-section">
                <h3>Payout statements</h3>
                ${jobs.length ? `<div class="table-wrap"><table class="data-table">
                    <thead><tr><th>Booking</th><th>Job value</th><th>Commission</th><th>Your payout</th><th>Status</th></tr></thead>
                    <tbody>${jobs.map(b => `<tr>
                        <td><strong>${esc(b.id)}</strong><div class="text-small text-muted">${esc(b.date)}</div></td>
                        <td>${money(b.quote.subtotal - b.quote.discount)}</td>
                        <td class="text-danger">− ${money(b.quote.commission)}</td>
                        <td><strong>${money(b.quote.providerPayout)}</strong></td>
                        <td>${this.statusBadge(b.payout.status)}<div class="text-small text-muted">${b.payout.status === 'Paid' ? 'Settled' : 'Due ' + esc(b.payout.dueOn)}</div></td>
                    </tr>`).join('')}</tbody></table></div>`
                : '<p class="text-muted text-small">No earnings yet. Accept your first job to start earning.</p>'}
                <p class="text-small text-muted mt-2">Payouts are settled to your registered bank account ${BUSINESS.payoutDelayDays} working days after job completion.</p>
            </div>`;
    },

    ownerOverviewHtml() {
        const bookings = db.bookings();
        const valid = bookings.filter(b => b.status !== 'Cancelled');
        const gmv = valid.reduce((t, b) => t + b.quote.total, 0);
        const commission = valid.reduce((t, b) => t + b.quote.commission, 0);
        const fees = valid.reduce((t, b) => t + b.quote.platformFee, 0);
        const gst = valid.reduce((t, b) => t + b.quote.gst, 0);
        const payouts = valid.reduce((t, b) => t + b.quote.providerPayout, 0);
        const revenue = commission + fees;
        const cancelFees = bookings.filter(b => b.refund).reduce((t, b) => t + (b.refund.fee || 0), 0);
        const byCategory = {};
        valid.forEach(b => { byCategory[b.service] = (byCategory[b.service] || 0) + b.quote.total; });
        const max = Math.max(1, ...Object.values(byCategory));

        return `
            <div class="kpi-grid">
                ${this.kpi('trending-up', 'Gross merchandise value', money(gmv))}
                ${this.kpi('badge-indian-rupee', 'Platform revenue', money(revenue + cancelFees), 'Commission + fees')}
                ${this.kpi('users', 'Total bookings', bookings.length)}
                ${this.kpi('percent', 'Take rate', gmv ? Math.round((revenue / gmv) * 1000) / 10 + '%' : '0%')}
            </div>
            <div class="dash-grid mt-4">
                <div class="dash-card">
                    <h3>Revenue breakdown</h3>
                    <div class="quote-line"><span>Commission (${Math.round(BUSINESS.commissionRate * 100)}% of job value)</span><span>${money(commission)}</span></div>
                    <div class="quote-line"><span>Convenience fees</span><span>${money(fees)}</span></div>
                    <div class="quote-line"><span>Cancellation fees</span><span>${money(cancelFees)}</span></div>
                    <div class="quote-line"><span>GST collected (payable to govt.)</span><span>${money(gst)}</span></div>
                    <div class="quote-line"><span>Paid to professionals</span><span>− ${money(payouts)}</span></div>
                    <div class="quote-line total"><span>Net platform earnings</span><span>${money(revenue + cancelFees)}</span></div>
                </div>
                <div class="dash-card">
                    <h3>Revenue by category</h3>
                    ${Object.keys(byCategory).length ? Object.keys(byCategory).map(c => `
                        <div class="bar-row">
                            <span>${esc(c)}</span>
                            <div class="bar"><div class="bar-fill" style="width:${Math.round(byCategory[c] / max * 100)}%"></div></div>
                            <strong>${money(byCategory[c])}</strong>
                        </div>`).join('') : '<p class="text-muted text-small">No bookings yet.</p>'}
                </div>
            </div>`;
    },

    ownerTransactionsHtml() {
        const ledger = db.ledger();
        if (!ledger.length) return this.emptyHtml('No transactions yet', 'Every booking, payout and refund will be listed here.', "app.navigate('search')", 'View marketplace');
        return `
            <div class="table-wrap">
                <table class="data-table">
                    <thead><tr><th>When</th><th>Booking</th><th>Type</th><th class="text-right">Gross</th><th class="text-right">Commission</th><th class="text-right">Platform revenue</th></tr></thead>
                    <tbody>${ledger.map(l => `<tr>
                        <td>${new Date(l.at).toLocaleString('en-IN')}</td>
                        <td>${esc(l.bookingId || '—')}</td>
                        <td><span class="tag">${esc(l.type)}</span></td>
                        <td class="text-right">${l.gross != null ? money(l.gross) : (l.amount != null ? money(l.amount) : '—')}</td>
                        <td class="text-right">${l.commission != null ? money(l.commission) : '—'}</td>
                        <td class="text-right"><strong>${l.platformRevenue != null ? money(l.platformRevenue) : '—'}</strong></td>
                    </tr>`).join('')}</tbody>
                </table>
            </div>`;
    },

    kpi(icon, label, value, sub) {
        return `<div class="kpi-card">
            <i data-lucide="${icon}"></i>
            <div class="kpi-value">${value}</div>
            <div class="kpi-label">${label}</div>
            ${sub ? `<div class="text-small text-muted">${sub}</div>` : ''}
        </div>`;
    },

    emptyHtml(title, text, action, actionLabel) {
        return `<div class="empty-state">
            <i data-lucide="inbox"></i>
            <h3>${title}</h3>
            <p class="text-muted">${text}</p>
            ${action ? `<button class="btn btn-primary mt-2" onclick="${action}">${actionLabel}</button>` : ''}
        </div>`;
    },

    /* ======== AUTH UI (unchanged behaviour) ======== */

    switchAuthTab(role) {
        state.authRole = role === 'provider' ? 'provider' : 'customer';
        document.querySelectorAll('#auth-role-tabs .tab').forEach(t => t.classList.toggle('active', t.dataset.role === state.authRole));
        auth.clearAlert('auth-alert');
        this.renderAuthCopy();
    },

    switchAuthMode(mode, e) {
        if (e) e.preventDefault();
        state.authMode = mode === 'signup' ? 'signup' : 'login';
        document.getElementById('login-form').classList.toggle('active', state.authMode === 'login');
        document.getElementById('signup-form').classList.toggle('active', state.authMode === 'signup');
        auth.clearAlert('auth-alert');
        auth.clearErrors(['login-email', 'login-password', 'signup-name', 'signup-email', 'signup-phone', 'signup-password', 'signup-confirm', 'signup-terms']);
        this.renderAuthCopy();
    },

    renderAuthCopy() {
        const isSignup = state.authMode === 'signup';
        const isProvider = state.authRole === 'provider';
        const title = document.getElementById('auth-title');
        const subtitle = document.getElementById('auth-subtitle');
        if (title) title.innerText = isSignup ? 'Create your LocalFix account' : 'Welcome back to LocalFix';
        if (subtitle) subtitle.innerText = isSignup
            ? (isProvider ? 'Join as a professional and start earning.' : 'Sign up to book trusted local professionals.')
            : (isProvider ? 'Log in to manage jobs and payouts.' : 'Log in to track bookings and payments.');
        const notice = document.getElementById('signup-provider-notice');
        if (notice) notice.classList.toggle('show', isSignup && isProvider);
        if (window.lucide) lucide.createIcons();
    },

    openAuth(role, e) {
        if (e) e.preventDefault();
        this.navigate('login');
        this.switchAuthMode('login');
        this.switchAuthTab(role || 'customer');
    },

    togglePassword(inputId, btn) {
        const input = document.getElementById(inputId);
        if (!input) return;
        const show = input.type === 'password';
        input.type = show ? 'text' : 'password';
        if (btn) btn.innerText = show ? 'Hide' : 'Show';
    },

    updatePasswordMeter(value) {
        const bar = document.getElementById('pw-meter-bar');
        const label = document.getElementById('pw-meter-label');
        if (!bar || !label) return;
        const score = auth.passwordScore(value);
        const map = [
            { w: '10%', c: '#d64545', t: 'Too weak' },
            { w: '35%', c: '#d64545', t: 'Weak password' },
            { w: '60%', c: '#d99a2b', t: 'Fair password' },
            { w: '80%', c: '#3c9b6b', t: 'Good password' },
            { w: '100%', c: '#2f7d6d', t: 'Strong password' }
        ];
        const s = map[score];
        bar.style.width = s.w;
        bar.style.background = s.c;
        label.innerText = value ? s.t : 'Use 8+ characters with letters and numbers.';
    },

    forgotPassword(e) {
        if (e) e.preventDefault();
        const email = (document.getElementById('login-email').value || '').trim();
        if (!auth.isEmail(email)) return auth.setAlert('auth-alert', 'error', 'Enter your email address first, then click "Forgot password?".');
        if (!auth.findUser(email)) return auth.setAlert('auth-alert', 'error', 'No account found with that email address.');
        auth.setAlert('auth-alert', 'success', 'Password reset link sent to ' + email + ' (demo only).');
    },

    handleLogin(e) {
        e.preventDefault();
        auth.clearAlert('auth-alert');
        auth.clearErrors(['login-email', 'login-password']);
        const email = (document.getElementById('login-email').value || '').trim().toLowerCase();
        const password = document.getElementById('login-password').value || '';
        let ok = true;
        if (!email) { auth.setFieldError('login-email', 'Email address is required.'); ok = false; }
        else if (!auth.isEmail(email)) { auth.setFieldError('login-email', 'Enter a valid email address.'); ok = false; }
        if (!password) { auth.setFieldError('login-password', 'Password is required.'); ok = false; }
        if (!ok) return;

        const user = auth.findUser(email);
        if (!user || user.passwordHash !== auth.hash(password)) {
            auth.setAlert('auth-alert', 'error', 'Incorrect email or password. Please try again.');
            return;
        }
        if (state.authRole === 'provider' && user.role === 'customer') {
            auth.setAlert('auth-alert', 'error', 'This email is registered as a customer account. Switch to the Customer tab.');
            return;
        }
        auth.startSession(user, document.getElementById('login-remember').checked);
        document.getElementById('login-form').reset();
        state.dashTab = null;
        this.updateAuthUI();
        this.showToast('Welcome back, ' + user.name + '!', 'success');
        this.navigate('dashboard');
    },

    handleSignup(e) {
        e.preventDefault();
        auth.clearAlert('auth-alert');
        const ids = ['signup-name', 'signup-email', 'signup-phone', 'signup-password', 'signup-confirm', 'signup-terms'];
        auth.clearErrors(ids);
        const name = (document.getElementById('signup-name').value || '').trim();
        const email = (document.getElementById('signup-email').value || '').trim().toLowerCase();
        const phone = (document.getElementById('signup-phone').value || '').trim();
        const password = document.getElementById('signup-password').value || '';
        const confirm = document.getElementById('signup-confirm').value || '';
        const terms = document.getElementById('signup-terms').checked;
        let ok = true;

        if (name.length < 3) { auth.setFieldError('signup-name', 'Enter your full name (at least 3 characters).'); ok = false; }
        if (!auth.isEmail(email)) { auth.setFieldError('signup-email', 'Enter a valid email address.'); ok = false; }
        else if (auth.findUser(email)) { auth.setFieldError('signup-email', 'An account with this email already exists.'); ok = false; }
        if (!auth.isPhone(phone)) { auth.setFieldError('signup-phone', 'Enter a valid 10-digit mobile number.'); ok = false; }
        if (password.length < 8) { auth.setFieldError('signup-password', 'Password must be at least 8 characters.'); ok = false; }
        else if (!/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) { auth.setFieldError('signup-password', 'Password must include both letters and numbers.'); ok = false; }
        if (confirm !== password) { auth.setFieldError('signup-confirm', 'Passwords do not match.'); ok = false; }
        if (!terms) { auth.setFieldError('signup-terms', 'Please accept the terms to continue.'); ok = false; }
        if (!ok) return;

        const user = auth.createUser({ name: name, email: email, phone: phone, password: password, role: state.authRole });
        auth.startSession(user, true);
        document.getElementById('signup-form').reset();
        this.updatePasswordMeter('');
        this.updateAuthUI();

        if (user.role === 'provider') {
            this.showToast('Account created. Complete your listing to appear in search.', 'success');
            this.navigate('provider-onboarding');
            auth.setAlert('onboard-alert', 'success', 'Signed in as ' + user.email + '. Fill in your service details to publish your listing.');
            ['pj-email:' + user.email, 'pj-name:' + user.name, 'pj-phone:' + (user.phone || '')].forEach(pair => {
                const idx = pair.indexOf(':');
                const el = document.getElementById(pair.slice(0, idx));
                if (el) el.value = pair.slice(idx + 1);
            });
            return;
        }
        this.showToast('Account created. You are now signed in!', 'success');
        this.navigate('dashboard');
    },

    populateProviderCategories() {
        const select = document.getElementById('pj-category');
        if (!select) return;
        const extra = ['Tutor'];
        const names = mockServices.map(s => s.name).concat(extra.filter(n => !mockServices.some(s => s.name === n)));
        select.innerHTML = '<option value="">Select a category</option>' + names.map(n => `<option value="${n}">${n}</option>`).join('');
    },

    handleProviderJoin(e) {
        e.preventDefault();
        auth.clearAlert('onboard-alert');
        const ids = ['pj-name', 'pj-email', 'pj-phone', 'pj-password', 'pj-confirm', 'pj-category', 'pj-city', 'pj-price', 'pj-experience', 'pj-distance', 'pj-desc', 'pj-about', 'pj-skills', 'pj-terms'];
        auth.clearErrors(ids);
        const val = id => (document.getElementById(id).value || '').trim();
        const name = val('pj-name');
        const email = val('pj-email').toLowerCase();
        const phone = val('pj-phone');
        const password = document.getElementById('pj-password').value || '';
        const confirm = document.getElementById('pj-confirm').value || '';
        const category = val('pj-category');
        const city = val('pj-city');
        const price = parseFloat(val('pj-price'));
        const experience = parseFloat(val('pj-experience'));
        const distance = parseFloat(val('pj-distance'));
        const desc = val('pj-desc');
        const about = val('pj-about');
        const skills = val('pj-skills').split(',').map(s => s.trim()).filter(Boolean);
        const availability = val('pj-availability') || 'Available Today';
        const terms = document.getElementById('pj-terms').checked;
        const signedInProvider = state.currentUser && state.currentUser.email === email;
        let ok = true;

        if (name.length < 3) { auth.setFieldError('pj-name', 'Enter your business or full name.'); ok = false; }
        if (!auth.isEmail(email)) { auth.setFieldError('pj-email', 'Enter a valid email address.'); ok = false; }
        else if (!signedInProvider && auth.findUser(email)) { auth.setFieldError('pj-email', 'An account with this email already exists. Log in instead.'); ok = false; }
        if (!auth.isPhone(phone)) { auth.setFieldError('pj-phone', 'Enter a valid 10-digit mobile number.'); ok = false; }
        if (!signedInProvider) {
            if (password.length < 8) { auth.setFieldError('pj-password', 'Password must be at least 8 characters.'); ok = false; }
            else if (!/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) { auth.setFieldError('pj-password', 'Password must include letters and numbers.'); ok = false; }
            if (confirm !== password) { auth.setFieldError('pj-confirm', 'Passwords do not match.'); ok = false; }
        }
        if (!category) { auth.setFieldError('pj-category', 'Select the service you offer.'); ok = false; }
        if (city.length < 2) { auth.setFieldError('pj-city', 'Enter your city or locality.'); ok = false; }
        if (isNaN(price) || price <= 0) { auth.setFieldError('pj-price', 'Enter your hourly rate.'); ok = false; }
        if (isNaN(experience) || experience < 0) { auth.setFieldError('pj-experience', 'Enter your years of experience.'); ok = false; }
        if (isNaN(distance) || distance < 0) { auth.setFieldError('pj-distance', 'Enter an approximate distance in km.'); ok = false; }
        if (desc.length < 10) { auth.setFieldError('pj-desc', 'Write a short headline (at least 10 characters).'); ok = false; }
        if (about.length < 20) { auth.setFieldError('pj-about', 'Tell customers a bit more (at least 20 characters).'); ok = false; }
        if (!skills.length) { auth.setFieldError('pj-skills', 'Add at least one skill.'); ok = false; }
        if (!terms) { auth.setFieldError('pj-terms', 'Please accept the provider terms.'); ok = false; }
        if (!ok) return auth.setAlert('onboard-alert', 'error', 'Please fix the highlighted fields and submit again.');

        let user = signedInProvider ? state.currentUser : auth.findUser(email);
        if (!user) user = auth.createUser({ name: name, email: email, phone: phone, password: password, role: 'provider' });

        const existing = mockProviders.find(p => p.id === user.providerId);
        const listing = existing || { id: 'p' + Date.now().toString(36), rating: 0, reviews: 0, verified: false, isNew: true };
        Object.assign(listing, {
            name: name, category: category, experience: experience, distance: distance, price: price,
            city: city, phone: phone, email: email, available: availability, desc: desc, about: about, skills: skills
        });
        if (!existing) mockProviders.push(listing);

        const saved = store.read(AUTH_KEYS.providers, []).filter(p => p.id !== listing.id);
        saved.push(listing);
        store.write(AUTH_KEYS.providers, saved);

        user.role = 'provider';
        user.providerId = listing.id;
        auth.saveUser(user);
        auth.startSession(user, true);

        document.getElementById('provider-form').reset();
        this.populateProviderCategories();
        this.updateAuthUI();
        state.dashTab = 'jobs';
        this.showToast(existing ? 'Listing updated.' : 'Your provider listing is now live!', 'success');
        this.navigate('dashboard');
    },

    updateAuthUI() {
        const loginBtn = document.getElementById('nav-login-btn');
        const logoutBtn = document.getElementById('nav-logout-btn');
        const mobileLogin = document.getElementById('mobile-login-link');
        const mobileLogout = document.getElementById('mobile-logout-link');
        const user = state.currentUser;
        if (loginBtn) {
            loginBtn.innerText = user ? 'Dashboard' : 'Login';
            loginBtn.onclick = () => app.navigate(user ? 'dashboard' : 'login');
        }
        if (logoutBtn) logoutBtn.style.display = user ? 'inline-flex' : 'none';
        if (mobileLogin) mobileLogin.innerText = user ? 'Dashboard' : 'Login';
        if (mobileLogout) mobileLogout.style.display = user ? 'block' : 'none';
    },

    logout() {
        auth.endSession();
        state.dashTab = null;
        this.updateAuthUI();
        this.showToast('You have been logged out.');
        this.navigate('home');
    },

    /* ======== UTILITIES ======== */

    showToast(message, type) {
        const container = document.getElementById('toast-container');
        if (!container) return;
        const toast = document.createElement('div');
        toast.className = 'toast toast-' + (type || 'info');
        toast.innerText = message;
        container.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(8px)';
            setTimeout(() => toast.remove(), 300);
        }, 3200);
    }
};

window.onload = () => app.init();

