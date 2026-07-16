// Declare language switching globally so inline HTML onclick works
let currentLang = 'az';

function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('landing_lang', lang);
    renderLocalizedContent();
}

function toggleFaq(element) {
    element.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Check LocalStorage or Browser Preferences
    const storedLang = localStorage.getItem('landing_lang');
    if (storedLang && (storedLang === 'az' || storedLang === 'ru')) {
        currentLang = storedLang;
    } else {
        const browserLang = navigator.language || navigator.userLanguage;
        currentLang = (browserLang.startsWith('ru')) ? 'ru' : 'az';
    }

    // Initialize UI Translation Engine
    renderLocalizedContent();

    // 2. Midnight Countdown Timer System
    const updateTimers = () => {
        const now = new Date();
        const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
        
        let totalSeconds = Math.floor((endOfDay - now) / 1000);
        if (totalSeconds < 0) totalSeconds = 0;

        const h = Math.floor(totalSeconds / 3600);
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = totalSeconds % 60;

        const hoursStr = h < 10 ? '0' + h : h;
        const minutesStr = m < 10 ? '0' + m : m;
        const secondsStr = s < 10 ? '0' + s : s;

        document.querySelectorAll('.timer_container').forEach(container => {
            const hEl = container.querySelector('.hours');
            const mEl = container.querySelector('.minutes');
            const sEl = container.querySelector('.seconds');

            if (hEl) hEl.textContent = hoursStr;
            if (mEl) mEl.textContent = minutesStr;
            if (sEl) sEl.textContent = secondsStr;
        });
    };

    updateTimers();
    setInterval(updateTimers, 1000);

    // 3. Smooth Anchor Scroll Mechanics
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 4. Form Validation and Multi-Language Redirection Setup
    const orderForm = document.getElementById('order_form');
    const hiddenIframe = document.getElementById('hidden_iframe');
    let isSubmitting = false;

    if (orderForm && hiddenIframe) {
        hiddenIframe.onload = function() {
            if (isSubmitting) {
                window.location.href = `success.html?lang=${currentLang}`;
            }
        };

        orderForm.addEventListener('submit', function(event) {
            const phoneInput = orderForm.querySelector('input[name="phone"]');
            const nameInput = orderForm.querySelector('input[name="name"]');
            const translations = landingConfig.i18n[currentLang];

            const formData = {
                name: nameInput ? nameInput.value.trim() : '',
                phone: phoneInput ? phoneInput.value.trim() : ''
            };

            const validationRules = {
                name: { pattern: /^[a-zA-Zа-яА-ЯёЁ\s]*$/ },
                phone: { minLength: 9, maxLength: 28, pattern: /^[\d+\-\s()]+$/ }
            };

            let isValid = true;

            if (!formData.phone) {
                alert(translations.alertEmptyPhone);
                isValid = false;
            } else if (formData.phone.length < validationRules.phone.minLength) {
                alert(translations.alertMinPhone);
                isValid = false;
            } else if (formData.phone.length > validationRules.phone.maxLength) {
                alert(translations.alertMaxPhone);
                isValid = false;
            } else if (!validationRules.phone.pattern.test(formData.phone)) {
                alert(translations.alertPatternPhone);
                isValid = false;
            }

            if (isValid && formData.name) {
                if (!validationRules.name.pattern.test(formData.name)) {
                    alert(translations.alertPatternName);
                    isValid = false;
                }
            }

            if (!isValid) {
                event.preventDefault();
                return;
            }

            // Set dynamic redirect parameter safely to maintain language context
            const redirectInput = document.getElementById('dynamic_redirect');
            if (redirectInput) {
                let currentFolderURL = window.location.href.split('?')[0].split('#')[0];
                if (currentFolderURL.endsWith('index.html')) {
                    currentFolderURL = currentFolderURL.replace('index.html', '');
                }
                if (!currentFolderURL.endsWith('/')) {
                    currentFolderURL += '/';
                }
                redirectInput.value = `${currentFolderURL}success.html?lang=${currentLang}`;
            }

            if (typeof fbq === 'function') {
                fbq('track', 'Lead');
            }

            isSubmitting = true;
            const submitBtn = orderForm.querySelector('.submit-btn');
            if (submitBtn) submitBtn.textContent = (currentLang === 'ru') ? 'Отправка...' : 'Göndərilir...';
        });
    }
});

// Dynamic i18n DOM Injection Engine
function renderLocalizedContent() {
    const config = landingConfig;
    const trans = config.i18n[currentLang];

    // Toggle Active Class in Selector
    const azBtn = document.getElementById('btn-lang-az');
    const ruBtn = document.getElementById('btn-lang-ru');
    if (azBtn && ruBtn) {
        azBtn.classList.toggle('active', currentLang === 'az');
        ruBtn.classList.toggle('active', currentLang === 'ru');
    }

    // Set Main document language
    document.documentElement.lang = currentLang;

    // Helper function to format Cents gracefully
    const formatCentsHtml = (priceString, fontSize) => {
        const parts = String(priceString).split('.');
        if (parts.length === 2) {
            return `${parts[0]}<span style="font-size: ${fontSize}px;">.${parts[1]}</span>`;
        }
        return priceString;
    };

    // 1. Inject API Keys & Settings
    const keyInp = document.getElementById('web3forms_key');
    const subInp = document.getElementById('web3forms_subject');
    const nameInp = document.getElementById('web3forms_from_name');
    if (keyInp) keyInp.value = config.web3formsAccessKey;
    if (subInp) subInp.value = trans.subjectLine;
    if (nameInp) nameInp.value = trans.fromName;

    // 2. Inject Ticker Bar
    const tickerTrack = document.getElementById('ticker-track');
    if (tickerTrack) {
        const tickerHtml = trans.tickerItems.map(item => `<span>${item}</span>`).join(' • ');
        tickerTrack.innerHTML = `${tickerHtml} • ${tickerHtml}`;
    }

    // 3. Hero Sections & Assets
    const heroTitle = document.getElementById('hero-title');
    const heroImg = document.getElementById('hero-img');
    const saleBadge = document.getElementById('sale-badge');
    const timerTitle = document.getElementById('timer-title-text');
    const lblHours = document.getElementById('label-hours');
    const lblMinutes = document.getElementById('label-minutes');
    const lblSeconds = document.getElementById('label-seconds');

    if (heroTitle) heroTitle.textContent = trans.heroTitle;
    if (heroImg) {
        heroImg.src = config.heroImg;
        heroImg.alt = trans.heroTitle;
    }
    if (saleBadge) saleBadge.textContent = config.saleBadge;
    if (timerTitle) timerTitle.textContent = trans.timerTitle;
    if (lblHours) lblHours.textContent = trans.timerHours;
    if (lblMinutes) lblMinutes.textContent = trans.timerMinutes;
    if (lblSeconds) lblSeconds.textContent = trans.timerSeconds;

// 4. Inject Dynamic Pricing Cards (With Built-in Delivery Perks)
    const generatePricingCardsHTML = () => {
        return config.packages.map(pkg => {
            const activeClass = pkg.isActiveDefault ? 'active' : '';
            const ribbon = pkg.isPopular ? `<span class="popular-ribbon">${trans.popularRibbon}</span>` : '';
            const processedNewPrice = formatCentsHtml(pkg.newPrice, 18);
            const processedOldPrice = formatCentsHtml(pkg.oldPrice, 12);
            const localizedName = trans.packageNames[pkg.id];
            const localizedAttr = trans.packageDataAttrs[pkg.id];
            
            // Logically choose the shipping text based on package ID
            const shippingText = (pkg.id === 'double') ? trans.shippingLabelDouble : trans.shippingLabelBase;

            return `
                <div class="pricing-card ${activeClass}" data-package="${localizedAttr}">
                    ${ribbon}
                    <div class="card-radio"></div>
                    <div class="card-details">
                        <span class="package-name">${localizedName}</span>
                        <div class="pricing-row">
                            <span class="new-price">${processedNewPrice} <small>${config.currencySymbol}</small></span>
                            <span class="old-price">${processedOldPrice} ${config.currencySymbol}</span>
                        </div>
                        <span class="card-shipping-note">${shippingText}</span>
                    </div>
                </div>
            `;
        }).join('');
    };

    const topPricing = document.getElementById('pricing-wrapper-top');
    const bottomPricing = document.getElementById('pricing-wrapper-bottom');
    if (topPricing) topPricing.innerHTML = generatePricingCardsHTML();
    if (bottomPricing) bottomPricing.innerHTML = generatePricingCardsHTML();

    const pkgHidden = document.getElementById('selected_package');
    if (pkgHidden) {
        const defaultPkg = config.packages.find(p => p.isActiveDefault) || config.packages[0];
        pkgHidden.value = trans.packageDataAttrs[defaultPkg.id];
    }

    // Rebind newly drawn pricing cards click listeners
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('click', () => {
            const actualValue = card.getAttribute('data-package');
            pricingCards.forEach(c => {
                c.classList.toggle('active', c.getAttribute('data-package') === actualValue);
            });
            if (pkgHidden) pkgHidden.value = actualValue;
        });
    });

    // 5. Stock Warn & Delivery Area
    const stockWarn = document.getElementById('stock-warning-text');
    const delTitle = document.getElementById('delivery-title');
    const delDesc = document.getElementById('delivery-desc');
    const ctaText = document.getElementById('cta-btn-text');

    if (stockWarn) stockWarn.innerHTML = trans.stockWarning;
    if (delTitle) delTitle.textContent = trans.deliveryTitle;
    if (delDesc) delDesc.textContent = trans.deliveryDesc;
    if (ctaText) ctaText.textContent = trans.ctaText;

    // 6. Narrative Presentation Grid
    const narrativeGrid = document.getElementById('narrative-grid');
    if (narrativeGrid) {
        narrativeGrid.innerHTML = config.narrativeGrid.map(block => {
            if (block.type === 'image') {
                return `<div class="story-image-card"><img src="${block.src}" alt=""></div>`;
            } else if (block.type === 'text') {
                return `<div class="narrative-text"><p>${trans[block.translationKey]}</p></div>`;
            } else if (block.type === 'spec-overlay') {
                const alignClass = block.align === 'right' ? 'alignment-right' : '';
                return `<div class="story-image-card spec-overlay-card ${alignClass}"><img src="${block.src}" alt=""></div>`;
            }
            return '';
        }).join('');
    }

    // 7. Tech Specs Row
    const specsTitle = document.getElementById('specs-title');
    const specsTable = document.getElementById('specs-table');
    if (specsTitle) specsTitle.textContent = trans.specsTitle;
    if (specsTable) {
        specsTable.innerHTML = trans.technicalSpecs.map(spec => `
            <div class="specs-row">
                <span class="spec-label">${spec.label}</span>
                <span class="spec-val">${spec.value}</span>
            </div>
        `).join('');
    }

// 8. Reviews (Vertical Stack Layout with 280px Photo Dimensions)
    const revTitle = document.getElementById('reviews-title');
    const revSlider = document.getElementById('reviewsSlider');
    if (revTitle) revTitle.textContent = trans.reviewsSectionTitle;
    if (revSlider) {
        revSlider.innerHTML = trans.reviews.map(rev => {
            // Render photo with 100% width and 480px height
            const photoHtml = rev.userPhoto 
                ? `<div style="width: 100%; height: 480px; margin-bottom: 12px; border-radius: 8px; overflow: hidden; background: #e2e8f0;">
                        <img src="${rev.userPhoto}" alt="${rev.author}" style="width: 100%; height: 100%; object-fit: cover;">
                   </div>`
                : '';

            // Verified Badge markup (hidden with display: none per requested proportions)
            const verifiedHtml = rev.verifiedPurchase 
                ? `<span style="display: none; font-size: 11px; background: #e2fbe8; color: #10b981; padding: 2px 6px; border-radius: 4px; font-weight: 600; margin-left: auto;">✓ Проверенный покупатель</span>`
                : '';

            return `
                <div class="review_card" style="width: 100%; background: #f8fafc; border: 1px solid #e2e8f0; padding: 16px; border-radius: 12px; display: flex; flex-direction: column; gap: 8px; box-sizing: border-box;">
                    ${photoHtml}
                    <div style="display: flex; align-items: center; margin-bottom: 5px; gap: 8px;">
                        <div style="color: #fbbf24; letter-spacing: 1px;">${rev.stars}</div>
                        ${verifiedHtml}
                    </div>
                    <h4 style="margin: 4px 0 8px 0; color: var(--text-main); font-weight: 600; font-size: 15px;">${rev.author}</h4>
                    <p style="margin: 0; font-size: 13px; color: var(--text-muted); line-height: 1.5; font-style: normal;">"${rev.text}"</p>
                </div>
            `;
        }).join('');
    }
    
    // 9. FAQ Section
    const faqTitle = document.getElementById('faq-section-title');
    const faqContainer = document.getElementById('faq-container');
    if (faqTitle) faqTitle.textContent = trans.faqTitle;
    if (faqContainer) {
        faqContainer.innerHTML = trans.faqs.map(faq => `
            <div class="faq_item" onclick="toggleFaq(this)">
                <div class="faq_trigger">
                    <span>${faq.question}</span>
                    <span class="faq_icon">+</span>
                </div>
                <div class="faq_answer"><p>${faq.answer}</p></div>
            </div>
        `).join('');
    }

    // 10. Checkout Form
    const chkTitle = document.getElementById('checkout-title');
    const chkSubtitle = document.getElementById('checkout-subtitle');
    const lblName = document.getElementById('label-name');
    const lblPhone = document.getElementById('label-phone');
    const subBtn = document.getElementById('submit-btn-text');
    const secTxt = document.getElementById('security-text');

    if (chkTitle) chkTitle.textContent = trans.checkoutTitle;
    if (chkSubtitle) chkSubtitle.textContent = trans.checkoutSubtitle;
    if (lblName) lblName.textContent = trans.labelName;
    if (lblPhone) lblPhone.textContent = trans.labelPhone;
    if (subBtn) subBtn.textContent = trans.submitBtnText;
    if (secTxt) secTxt.textContent = trans.securityText;

    // 11. Footer Elements
    const fComp = document.getElementById('footer-company');
    const fPhon = document.getElementById('footer-phone');
    const fPol = document.getElementById('footer-policy');

    if (fComp) fComp.textContent = trans.footerCompany;
    if (fPhon) fPhon.textContent = trans.footerPhone;
    if (fPol) fPol.textContent = trans.footerPolicyText;
}