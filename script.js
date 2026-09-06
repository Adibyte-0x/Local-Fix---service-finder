// ================= GOOGLE TRANSLATOR =================

function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {
            pageLanguage: "en",
            includedLanguages: "en,hi,mr,gu,bn,ta,te,kn,ml,pa",
            autoDisplay: false
        },
        "google_translate_element"
    );
}

function translateSite() {

    const language = document.getElementById("languageSelect").value;

    if (!language) {
        return;
    }

    const translator = document.querySelector(".goog-te-combo");
if (!translator) {
    alert("⚠️ Translation unavailable. Your browser may be blocking Google Translate. Please disable Shields or try another browser.");
    return;
}
    if (!translator) {
        console.log("Google Translate has not loaded yet.");
        return;
    }

    translator.value = language;

    translator.dispatchEvent(new Event("change"));
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
    currentView: 'home',
    searchQuery: { service: '', location: '', sortBy: 'rating' },
    activeBookingProvider: null,
    bookingStep: 1,
    myRequests: []
};

/* ================= CORE APPLICATION LOGIC ================= */

const app = {
    init() {
        lucide.createIcons();
        this.renderCategories();
        this.navigate('home');
        
        // Listen for browser back/forward buttons (basic hash routing could go here)
    },

    navigate(viewId) {
        // Hide all views
        document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
        // Show target view
        document.getElementById(`view-${viewId}`).classList.add('active');
        state.currentView = viewId;
        window.scrollTo(0,0);

        // View specific logic
        if (viewId === 'search') this.renderSearchResults();
        if (viewId === 'dashboard') this.renderDashboard();
    },

    toggleMobileMenu() {
        document.getElementById('mobile-menu').classList.toggle('active');
    },

    // ======== HOME PAGE LOGIC ========

    renderCategories() {
        const grid = document.getElementById('home-categories');
        grid.innerHTML = mockServices.map(s => `
            <div class="category-card" onclick="app.setSearchService('${s.name}')">
                <div class="cat-icon"><i data-lucide="${s.icon}"></i></div>
                <h3>${s.name}</h3>
                <p class="text-small text-muted mt-2">${s.desc}</p>
            </div>
        `).join('');
        lucide.createIcons();
    },

    useCurrentLocation(inputId) {
        // Mock geolocation for demo
        document.getElementById(inputId).value = 'Downtown Area (Mocked)';
        this.showToast('Location detected successfully.');
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

    // ======== SEARCH RESULTS LOGIC ========

    renderSearchResults() {
        const container = document.getElementById('search-results-container');
        const sortVal = document.getElementById('sort-select') ? document.getElementById('sort-select').value : 'rating';
        const filterVerified = document.getElementById('filter-verified') ? document.getElementById('filter-verified').checked : false;
        const maxDist = document.getElementById('filter-distance') ? parseFloat(document.getElementById('filter-distance').value) : 50;
        const minRating = document.getElementById('filter-rating') ? parseFloat(document.getElementById('filter-rating').value) : 0;

        // Update Title
        const titleText = state.searchQuery.service ? `${state.searchQuery.service}s near you` : 'All Professionals near you';
        document.getElementById('search-title').innerText = titleText;

        // Filter Logic
        let results = mockProviders.filter(p => {
            if (state.searchQuery.service && p.category !== state.searchQuery.service) return false;
            if (filterVerified && !p.verified) return false;
            if (p.distance > maxDist) return false;
            if (p.rating < minRating) return false;
            return true;
        });

        // Sort Logic
        results.sort((a, b) => {
            if (sortVal === 'rating') return b.rating - a.rating;
            if (sortVal === 'distance') return a.distance - b.distance;
            if (sortVal === 'price') return a.price - b.price;
            return 0;
        });

        // Render Logic
        if (results.length === 0) {
            container.innerHTML = `<div class="text-center p-4"><p>No providers found matching your criteria. Try adjusting filters.</p></div>`;
            return;
        }

        container.innerHTML = results.map(p => `
            <div class="provider-card">
                <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(p.name)}&background=random" class="prov-avatar" alt="${p.name}">
                <div class="prov-info">
                    <div class="prov-header">
                        <div>
                            <div class="prov-name">${p.name} ${p.verified ? '<i data-lucide="badge-check" class="badge-verified" title="Verified"></i>' : ''}</div>
                            <div class="text-small mt-2">${p.category}</div>
                        </div>
                        <div class="text-right">
                            <div style="font-weight: 600;">₹${p.price}<span class="text-small text-muted">/hr</span></div>
                        </div>
                    </div>
                    <div class="prov-meta">
                        <span class="rating"><i data-lucide="star" style="width:14px"></i> ${p.rating} (${p.reviews})</span>
                        <span><i data-lucide="map-pin" style="width:14px"></i> ${p.distance} km</span>
                        <span><i data-lucide="briefcase" style="width:14px"></i> ${p.experience} yrs exp.</span>
                    </div>
                    <p class="text-small text-muted mt-2">${p.desc}</p>
                    <div class="prov-actions">
                        <button class="btn btn-outline" onclick="app.viewProfile('${p.id}')">View Profile</button>
                        <button class="btn btn-primary" onclick="app.openBookingModal('${p.id}')">Request Service</button>
                    </div>
                </div>
            </div>
        `).join('');
        lucide.createIcons();
    },

    // ======== PROFILE VIEW ========

    viewProfile(providerId) {
        const p = mockProviders.find(x => x.id === providerId);
        if (!p) return;

        const container = document.getElementById('profile-container');
        container.innerHTML = `
            <div class="profile-header">
                <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(p.name)}&background=random&size=150" class="profile-avatar" alt="${p.name}">
                <div class="profile-main">
                    <h1>${p.name} ${p.verified ? '<i data-lucide="badge-check" class="badge-verified"></i>' : ''}</h1>
                    <p class="text-muted" style="font-size: 1.1rem">${p.category} • ${p.available}</p>
                    
                    <div class="prov-meta" style="font-size: 1rem; margin-top: 15px;">
                        <span class="rating"><i data-lucide="star" style="width:16px"></i> ${p.rating} (${p.reviews} reviews)</span>
                        <span><i data-lucide="map-pin" style="width:16px"></i> ${p.distance} km away</span>
                    </div>
                    
                    <div class="prov-actions mt-4">
                        <button class="btn btn-primary" onclick="app.openBookingModal('${p.id}')">Request Service Now</button>
                        <button class="btn btn-outline"><i data-lucide="message-circle"></i> Message</button>
                    </div>
                </div>
            </div>

            <div class="profile-body">
                <div>
                    <div class="profile-section">
                        <h3>About Provider</h3>
                        <p class="mt-2 text-muted">${p.about}</p>
                        
                        <h4 class="mt-4">Services Offered</h4>
                        <div class="profile-tags">
                            ${p.skills.map(s => `<span class="tag">${s}</span>`).join('')}
                        </div>
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
        `;
        lucide.createIcons();
        this.navigate('profile');
    },

    // ======== MULTI-STEP BOOKING MODAL ========

    openBookingModal(providerId) {
        state.activeBookingProvider = mockProviders.find(p => p.id === providerId);
        state.bookingStep = 1;
        document.getElementById('booking-modal').classList.add('active');
        this.updateBookingUI();
    },

    closeModal(modalId) {
        document.getElementById(modalId).classList.remove('active');
    },

    updateBookingUI() {
        // Hide all steps
        document.querySelectorAll('.booking-step').forEach(el => el.classList.remove('active'));
        
        // Show current step
        if (state.bookingStep <= 3) {
            document.getElementById(`step-${state.bookingStep}`).classList.add('active');
            document.getElementById('modal-footer').style.display = 'flex';
        } else {
            // Success step
            document.getElementById('step-success').classList.add('active');
            document.getElementById('modal-footer').style.display = 'none';
        }

        // Setup Review Data on Step 3
        if (state.bookingStep === 3) {
            document.getElementById('review-provider').innerText = state.activeBookingProvider.name;
            document.getElementById('review-date').innerText = `${document.getElementById('book-date').value} (${document.getElementById('book-time').value})`;
            document.getElementById('review-address').innerText = document.getElementById('book-address').value;
        }

        // Button states
        document.getElementById('btn-prev').style.visibility = state.bookingStep === 1 ? 'hidden' : 'visible';
        document.getElementById('btn-next').innerText = state.bookingStep === 3 ? 'Confirm Request' : 'Next';
    },

    bookingNext() {
        // Basic Validation
        if (state.bookingStep === 1 && !document.getElementById('book-date').value) return this.showToast('Please select a date.');
        if (state.bookingStep === 2 && !document.getElementById('book-address').value) return this.showToast('Please enter an address.');

        if (state.bookingStep === 3) {
            this.submitBooking();
        } else {
            state.bookingStep++;
            this.updateBookingUI();
        }
    },

    bookingPrev() {
        if (state.bookingStep > 1) {
            state.bookingStep--;
            this.updateBookingUI();
        }
    },

    submitBooking() {
        const reqId = 'REQ-' + Math.floor(Math.random() * 90000 + 10000);
        
        // Save to mock dashboard requests
        state.myRequests.unshift({
            id: reqId,
            provider: state.activeBookingProvider.name,
            service: state.activeBookingProvider.category,
            date: document.getElementById('book-date').value,
            status: 'Pending'
        });

        document.getElementById('req-id').innerText = reqId;
        state.bookingStep = 4; // Show success
        this.updateBookingUI();

        // Auto close after 3 seconds and go to dashboard (if logged in, else home)
        setTimeout(() => {
            this.closeModal('booking-modal');
            if(state.currentUser) this.navigate('dashboard');
            else {
                this.showToast('Please login to track your request.');
                this.navigate('home');
            }
        }, 3000);
    },

    // ======== AUTH & DASHBOARD LOGIC ========

    switchAuthTab(type) {
        document.querySelectorAll('.auth-tabs .tab').forEach(t => t.classList.remove('active'));
        event.target.classList.add('active');
        // Just visual for demo
    },

    handleLogin(e) {
        e.preventDefault();
        state.currentUser = { name: "Demo User", email: "demo@localfix.com" };
        
        // Update Nav UI
        document.getElementById('nav-login-btn').innerText = "Dashboard";
        document.getElementById('nav-login-btn').onclick = () => app.navigate('dashboard');
        
        this.showToast('Logged in successfully!');
        this.navigate('dashboard');
    },

    renderDashboard() {
        if (!state.currentUser) {
            this.navigate('login');
            return;
        }

        document.getElementById('dash-user-name').innerText = state.currentUser.name;
        
        const reqContainer = document.getElementById('dash-active-requests');
        
        if (state.myRequests.length === 0) {
            reqContainer.innerHTML = '<p class="text-muted mt-2">You have no active service requests. <a href="#" style="color:var(--accent)" onclick="app.navigate(\'search\')">Find a service</a></p>';
        } else {
            reqContainer.innerHTML = state.myRequests.map(r => `
                <div class="request-item">
                    <div>
                        <strong>${r.service}</strong> - ${r.provider}
                        <div class="text-small text-muted mt-2"><i data-lucide="calendar" style="width:12px"></i> ${r.date} | ID: ${r.id}</div>
                    </div>
                    <div>
                        <span class="status-badge status-${r.status.toLowerCase()}">${r.status}</span>
                    </div>
                </div>
            `).join('');
            lucide.createIcons();
        }
    },

    // ======== UTILITIES ========
    
    showToast(message) {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.style.cssText = `
            background: #333; color: white; padding: 12px 24px; border-radius: 8px;
            margin-bottom: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            animation: fadeIn 0.3s;
        `;
        toast.innerText = message;
        
        // Container positioning
        container.style.cssText = `position: fixed; bottom: 20px; right: 20px; z-index: 9999; display: flex; flex-direction: column; align-items: flex-end;`;
        
        container.appendChild(toast);
        
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transition = 'opacity 0.3s';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
};

// Start application
window.onload = () => {
    app.init();
};
