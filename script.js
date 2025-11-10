// ============================================
// RCG CONNECT - JAVASCRIPT
// ============================================

// Thread data for modals
const threadData = {
    1: {
        title: "Best Family Excursions for First-Timers",
        username: "Sarah Johnson",
        tier: "gold",
        avatar: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=FF6B6B&color=fff&size=128",
        time: "2 hours ago",
        content: "Looking for recommendations for our first family cruise. Kids are 8 and 12. What excursions would you suggest in the Caribbean? We're particularly interested in activities that are both fun and educational."
    },
    2: {
        title: "Diamond Tier Perks - What's New in 2025?",
        username: "Michael Chen",
        tier: "diamond",
        avatar: "https://ui-avatars.com/api/?name=Michael+Chen&background=001F54&color=fff&size=128",
        time: "5 hours ago",
        content: "Just reached Diamond tier! Excited to explore all the new benefits. Anyone have insights on the exclusive lounge access? Also curious about the priority boarding and specialty dining credits."
    },
    3: {
        title: "Alaska Cruise Packing Tips",
        username: "Emma Williams",
        tier: "platinum",
        avatar: "https://ui-avatars.com/api/?name=Emma+Williams&background=00AEEF&color=fff&size=128",
        time: "1 day ago",
        content: "First time cruising to Alaska in June. What should I pack? Weather tips and must-have items appreciated! I've heard the weather can be unpredictable, so I want to be prepared."
    },
    4: {
        title: "Specialty Dining Recommendations",
        username: "David Martinez",
        tier: "silver",
        avatar: "https://ui-avatars.com/api/?name=David+Martinez&background=FF6B6B&color=fff&size=128",
        time: "3 days ago",
        content: "Which specialty restaurants are worth the extra cost? Looking for the best value and experience. We're celebrating an anniversary and want to make it special."
    },
    5: {
        title: "Entertainment Shows Not to Miss",
        username: "Lisa Anderson",
        tier: "gold",
        avatar: "https://ui-avatars.com/api/?name=Lisa+Anderson&background=001F54&color=fff&size=128",
        time: "4 days ago",
        content: "What are the must-see shows and entertainment on the latest ships? Planning our evening schedule and don't want to miss the best performances."
    },
    6: {
        title: "Loyalty Points Strategy",
        username: "Robert Taylor",
        tier: "diamond",
        avatar: "https://ui-avatars.com/api/?name=Robert+Taylor&background=00AEEF&color=fff&size=128",
        time: "1 week ago",
        content: "Best ways to maximize loyalty points? Share your tips for earning and redeeming points effectively. I'm close to the next tier and want to optimize my strategy."
    }
};

// AI Concierge conversation data
const aiConciergeData = {
    threads: [
        { title: "Best Family Excursions for First-Timers", tier: "Gold", replies: 24 },
        { title: "Alaska Cruise Packing Tips", tier: "Platinum", replies: 18 },
        { title: "Specialty Dining Recommendations", tier: "Silver", replies: 31 }
    ],
    destinations: [
        { name: "Caribbean", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop" },
        { name: "Alaska", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop" },
        { name: "Europe", image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&h=300&fit=crop" }
    ],
    perks: {
        current: "Platinum",
        next: "Diamond",
        points: 230,
        benefits: [
            "Priority check-in and boarding",
            "Complimentary specialty dining (2 nights)",
            "Exclusive lounge access",
            "Free WiFi package",
            "20% off spa services",
            "Complimentary laundry service"
        ]
    }
};

// ============================================
// INITIALIZATION
// ============================================

// Fix Forum link IMMEDIATELY - don't wait for DOMContentLoaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixForumLink);
} else {
    fixForumLink();
}

// Also fix it after a short delay to catch any late-loading elements
setTimeout(fixForumLink, 100);
setTimeout(fixForumLink, 500);

// Initialize all functions when DOM is ready
function initializeAll() {
    // Fix Forum link again after everything loads
    fixForumLink();
    
    initMobileMenu();
    initProfileDropdown();
    initThreadModals();
    initStatsAnimation();
    // initChatWidget(); // Disabled - AI chat widget removed
    initParallax();
    initScrollAnimations();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        initializeAll();
        initBookingsTabs();
        initSignInOut();
        initNavActions();
        
        // Fix Forum link one more time after all initialization
        setTimeout(fixForumLink, 200);
    });
} else {
    // DOM is already ready
    initializeAll();
    initBookingsTabs();
    initSignInOut();
    initNavActions();
    
    // Fix Forum link one more time after all initialization
    setTimeout(fixForumLink, 200);
}

// ============================================
// FORUM LINK FIX - Run first to ensure it works
// ============================================

function fixForumLink() {
    // Find all Forum links in navigation
    const forumLinks = document.querySelectorAll('nav a[href*="forum.html"], .nav-links a[href*="forum.html"], #forumNavLink');
    
    forumLinks.forEach(link => {
        if (!link || !link.parentNode) return;
        
        // Remove ALL event listeners by completely replacing the link
        const parent = link.parentNode;
        const text = link.textContent || 'Forum';
        const classes = link.className;
        const id = link.id;
        
        // Create completely new link element
        const newLink = document.createElement('a');
        newLink.href = 'forum.html';
        newLink.textContent = text;
        if (classes) newLink.className = classes;
        if (id) newLink.id = id;
        newLink.style.pointerEvents = 'auto';
        newLink.style.cursor = 'pointer';
        newLink.style.textDecoration = 'none';
        
        // Replace old link
        parent.replaceChild(newLink, link);
        
        // Add ONLY navigation handler - highest priority
        newLink.addEventListener('click', function(e) {
            console.log('Forum link clicked - forcing navigation');
            // Stop everything
            e.stopImmediatePropagation();
            e.stopPropagation();
            e.preventDefault();
            // Force navigation
            window.location.href = 'forum.html';
            return false;
        }, true); // Capture phase - runs first
        
        // Prevent any modal from opening
        newLink.addEventListener('click', function(e) {
            e.stopImmediatePropagation();
            e.stopPropagation();
        }, false);
    });
}

// ============================================
// MOBILE MENU
// ============================================

function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuToggle && navLinks) {
        // Create overlay element if it doesn't exist
        let overlay = document.querySelector('.mobile-menu-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'mobile-menu-overlay';
            document.body.appendChild(overlay);
        }

        function toggleMenu() {
            const isActive = navLinks.classList.contains('active');
            navLinks.classList.toggle('active');
            if (overlay) {
                overlay.classList.toggle('active');
            }
            
            // Prevent body scroll when menu is open
            if (navLinks.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
                document.documentElement.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
                document.documentElement.style.overflow = '';
            }
            
            // Toggle icon between hamburger and X
            const icon = mobileMenuToggle.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        }

        mobileMenuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMenu();
        });

        // Close menu when clicking overlay (but not on links)
        overlay.addEventListener('click', function(e) {
            // Don't close if clicking on a link or inside the menu
            if (e.target.closest('a') || e.target.closest('.nav-links')) {
                return;
            }
            e.preventDefault();
            e.stopPropagation();
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });

        // Handle link clicks - SIMPLE: just close menu, never prevent navigation
        // Use event delegation to avoid interfering with navigation
        navLinks.addEventListener('click', function(e) {
            // Only handle if clicking on a link
            const link = e.target.closest('a');
            if (!link) return;
            
            // On mobile, close menu but NEVER prevent navigation
            if (window.innerWidth <= 768) {
                const href = link.getAttribute('href');
                if (href && href !== '#' && !href.startsWith('javascript:')) {
                    // Close menu immediately but don't prevent navigation
                    toggleMenu();
                    // Navigation will proceed normally
                }
            }
        }, false);

        // Close menu when clicking outside (for desktop only)
        // Don't interfere with mobile navigation at all
        document.addEventListener('click', function(e) {
            // Only handle desktop clicks
            if (window.innerWidth > 768) {
                // Don't interfere with ANY link clicks
                if (e.target.closest('a')) {
                    return;
                }
                // Only close if clicking outside menu and toggle
                if (!mobileMenuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                    navLinks.classList.remove('active');
                    if (overlay) overlay.classList.remove('active');
                    document.body.style.overflow = '';
                    document.documentElement.style.overflow = '';
                    const icon = mobileMenuToggle.querySelector('i');
                    if (icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            }
        });

        // Close menu on window resize if switching to desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    }
}

// ============================================
// PROFILE DROPDOWN
// ============================================

function initProfileDropdown() {
    const profileToggle = document.getElementById('profileToggle');
    const profileDropdown = document.getElementById('profileDropdown');

    if (profileToggle && profileDropdown) {
        profileToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            profileDropdown.classList.toggle('active');
        });

        document.addEventListener('click', function(e) {
            if (!profileToggle.contains(e.target) && !profileDropdown.contains(e.target)) {
                profileDropdown.classList.remove('active');
            }
        });
    }
}

// ============================================
// THREAD MODALS
// ============================================

function initThreadModals() {
    // First, make sure modal is closed
    const modal = document.getElementById('threadModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Only select thread cards that are NOT in navigation
    const allThreadCards = document.querySelectorAll('.thread-card');
    const closeModal = document.getElementById('closeModal');

    allThreadCards.forEach(card => {
        // ALWAYS skip if it's in navigation
        if (card.closest('nav')) {
            return;
        }
        
        // ALWAYS skip if it's a link
        if (card.tagName === 'A') {
            return;
        }
        
        // ALWAYS skip if it has a Forum link inside
        if (card.querySelector('a[href*="forum.html"]')) {
            return;
        }
        
        // Remove any existing listeners by cloning
        const newCard = card.cloneNode(true);
        card.parentNode.replaceChild(newCard, card);
        
        newCard.addEventListener('click', function(e) {
            // ALWAYS let links work - don't interfere with ANY links
            const clickedLink = e.target.closest('a');
            if (clickedLink) {
                // Let ALL links navigate normally
                return;
            }
            
            // Don't interfere with navigation
            if (e.target.closest('nav') || this.closest('nav')) {
                return;
            }
            
            // Only open modal if clicking on the card itself, not a link
            const threadId = this.getAttribute('data-thread');
            if (threadId) {
                e.preventDefault();
                e.stopPropagation();
                openThreadModal(threadId);
            }
        });
    });

    if (closeModal) {
        closeModal.addEventListener('click', function() {
            closeThreadModal();
        });
    }

    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeThreadModal();
            }
        });
    }

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeThreadModal();
        }
    });
}

function openThreadModal(threadId) {
    // Don't open modal if we're navigating
    if (window.location.href.includes('forum.html') && !document.querySelector('.thread-card[data-thread="' + threadId + '"]')) {
        return;
    }
    
    const modal = document.getElementById('threadModal');
    const data = threadData[threadId];

    if (!modal || !data) return;
    
    // Make sure we're not on a navigation link
    if (document.activeElement && document.activeElement.href && document.activeElement.href.includes('forum.html')) {
        return;
    }

    // Update modal content
    const modalTitle = document.getElementById('modalTitle');
    const modalUsername = document.getElementById('modalUsername');
    const modalUsername2 = document.getElementById('modalUsername2');
    
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalUsername) modalUsername.textContent = data.username;
    if (modalUsername2) modalUsername2.textContent = data.username;
    
    const modalTier = document.getElementById('modalTier');
    const modalTier2 = document.getElementById('modalTier2');
    if (modalTier) {
        modalTier.textContent = data.tier.charAt(0).toUpperCase() + data.tier.slice(1);
        modalTier.className = `tier-badge ${data.tier}`;
    }
    if (modalTier2) {
        modalTier2.textContent = data.tier.charAt(0).toUpperCase() + data.tier.slice(1);
        modalTier2.className = `tier-badge ${data.tier}`;
    }
    
    const modalTime = document.getElementById('modalTime');
    const modalContent = document.getElementById('modalContent');
    if (modalTime) modalTime.textContent = data.time;
    if (modalContent) modalContent.textContent = data.content;
    
    const avatar1 = document.getElementById('modalAvatar');
    const avatar2 = document.getElementById('modalAvatar2');
    if (avatar1) avatar1.src = data.avatar;
    if (avatar2) avatar2.src = data.avatar;

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeThreadModal() {
    const modal = document.getElementById('threadModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ============================================
// STATS ANIMATION
// ============================================

function initStatsAnimation() {
    const statItems = document.querySelectorAll('.stat-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statItems.forEach(item => {
        observer.observe(item);
    });
}

function animateCounter(statItem) {
    const numberElement = statItem.querySelector('.stat-number');
    const target = parseInt(statItem.getAttribute('data-count'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            numberElement.textContent = target;
            clearInterval(timer);
        } else {
            numberElement.textContent = Math.floor(current);
        }
    }, 16);
}

// ============================================
// CHAT WIDGET
// ============================================

let chatState = {
    isOpen: false,
    conversationStep: 0
};

function initChatWidget() {
    const chatBubble = document.getElementById('chatBubble');
    const chatContainer = document.getElementById('chatContainer');
    const chatClose = document.getElementById('chatClose');

    if (chatBubble) {
        chatBubble.addEventListener('click', function() {
            toggleChat();
        });
    }

    if (chatClose) {
        chatClose.addEventListener('click', function() {
            toggleChat();
        });
    }

    // Start conversation when chat opens
    if (chatContainer) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !chatState.isOpen) {
                    // Auto-open chat after user scrolls down a bit
                    setTimeout(() => {
                        if (!chatState.isOpen) {
                            // Don't auto-open, let user click
                        }
                    }, 3000);
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(document.getElementById('forum'));
    }
}

function toggleChat() {
    const chatContainer = document.getElementById('chatContainer');
    const chatMessages = document.getElementById('chatMessages');
    const chatActions = document.getElementById('chatActions');

    chatState.isOpen = !chatState.isOpen;

    if (chatState.isOpen) {
        chatContainer.classList.add('active');
        startConversation(chatMessages, chatActions);
    } else {
        chatContainer.classList.remove('active');
        // Reset conversation
        chatState.conversationStep = 0;
        if (chatMessages) chatMessages.innerHTML = '';
        if (chatActions) chatActions.innerHTML = '';
    }
}

function startConversation(chatMessages, chatActions) {
    if (!chatMessages) return;

    // Clear previous messages
    chatMessages.innerHTML = '';
    chatActions.innerHTML = '';

    // Initial greeting
    setTimeout(() => {
        addMessage(chatMessages, 'bot', 'Hi Cruiser 👋 — I\'m your AI Concierge!');
    }, 500);

    setTimeout(() => {
        addMessage(chatMessages, 'bot', 'Would you like help finding threads, planning your next voyage, or learning about your tier perks?');
    }, 1500);

    setTimeout(() => {
        showActionButtons(chatActions);
    }, 2500);
}

function addMessage(container, type, text) {
    if (!container) return;

    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${type}`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.textContent = text;
    
    messageDiv.appendChild(contentDiv);
    container.appendChild(messageDiv);
    
    // Scroll to bottom
    container.scrollTop = container.scrollHeight;
}

function showTypingIndicator(container) {
    if (!container) return;

    const typingDiv = document.createElement('div');
    typingDiv.className = 'typing-indicator';
    typingDiv.innerHTML = `
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
    `;
    container.appendChild(typingDiv);
    container.scrollTop = container.scrollHeight;
    return typingDiv;
}

function removeTypingIndicator(typingDiv) {
    if (typingDiv && typingDiv.parentNode) {
        typingDiv.parentNode.removeChild(typingDiv);
    }
}

function showActionButtons(container) {
    if (!container) return;

    container.innerHTML = `
        <button class="chat-action-btn" onclick="handleChatAction('threads')">
            <i class="fas fa-search"></i> Find Threads
        </button>
        <button class="chat-action-btn" onclick="handleChatAction('cruise')">
            <i class="fas fa-ship"></i> Recommend a Cruise
        </button>
        <button class="chat-action-btn" onclick="handleChatAction('perks')">
            <i class="fas fa-star"></i> My Loyalty Perks
        </button>
    `;
}

function handleChatAction(action) {
    const chatMessages = document.getElementById('chatMessages');
    const chatActions = document.getElementById('chatActions');

    if (!chatMessages) return;

    // Show typing indicator
    const typingIndicator = showTypingIndicator(chatMessages);

    setTimeout(() => {
        removeTypingIndicator(typingIndicator);

        switch(action) {
            case 'threads':
                handleFindThreads(chatMessages, chatActions);
                break;
            case 'cruise':
                handleRecommendCruise(chatMessages, chatActions);
                break;
            case 'perks':
                handleLoyaltyPerks(chatMessages, chatActions);
                break;
        }
    }, 1500);
}

function handleFindThreads(chatMessages, chatActions) {
    addMessage(chatMessages, 'user', 'Find Threads');
    addMessage(chatMessages, 'bot', 'Here are some popular threads based on your Platinum tier:');

    setTimeout(() => {
        const threadsDiv = document.createElement('div');
        threadsDiv.className = 'message-content bot';
        threadsDiv.style.background = 'var(--gray-light)';
        threadsDiv.style.padding = '1rem';
        threadsDiv.style.borderRadius = '12px';
        threadsDiv.style.marginTop = '0.5rem';

        aiConciergeData.threads.forEach(thread => {
            const threadItem = document.createElement('div');
            threadItem.style.padding = '0.75rem 0';
            threadItem.style.borderBottom = '1px solid var(--gray)';
            threadItem.innerHTML = `
                <strong>${thread.title}</strong><br>
                <small style="color: var(--gray-dark);">${thread.tier} • ${thread.replies} replies</small>
            `;
            threadsDiv.appendChild(threadItem);
        });

        const messageDiv = document.createElement('div');
        messageDiv.className = 'chat-message bot';
        messageDiv.appendChild(threadsDiv);
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 500);

    setTimeout(() => {
        showActionButtons(chatActions);
    }, 1000);
}

function handleRecommendCruise(chatMessages, chatActions) {
    addMessage(chatMessages, 'user', 'Recommend a Cruise');
    addMessage(chatMessages, 'bot', 'Based on your preferences, here are some amazing destinations:');

    setTimeout(() => {
        const carouselDiv = document.createElement('div');
        carouselDiv.className = 'destination-carousel';
        carouselDiv.style.marginTop = '0.5rem';

        aiConciergeData.destinations.forEach(dest => {
            const card = document.createElement('div');
            card.className = 'destination-card';
            card.innerHTML = `
                <img src="${dest.image}" alt="${dest.name}" onerror="this.src='https://via.placeholder.com/400x300/00AEEF/FFFFFF?text=${dest.name}'">
                <div class="destination-overlay">${dest.name}</div>
            `;
            carouselDiv.appendChild(card);
        });

        const messageDiv = document.createElement('div');
        messageDiv.className = 'chat-message bot';
        messageDiv.appendChild(carouselDiv);
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 500);

    setTimeout(() => {
        showActionButtons(chatActions);
    }, 1000);
}

function handleLoyaltyPerks(chatMessages, chatActions) {
    addMessage(chatMessages, 'user', 'My Loyalty Perks');
    
    const perks = aiConciergeData.perks;
    addMessage(chatMessages, 'bot', `You're currently a ${perks.current} member with ${perks.points} points until ${perks.next} tier!`);

    setTimeout(() => {
        const benefitsDiv = document.createElement('div');
        benefitsDiv.className = 'tier-benefits';
        benefitsDiv.innerHTML = `
            <h4>Your ${perks.current} Benefits:</h4>
            <ul>
                ${perks.benefits.map(benefit => `<li><i class="fas fa-check-circle"></i> ${benefit}</li>`).join('')}
            </ul>
        `;

        const messageDiv = document.createElement('div');
        messageDiv.className = 'chat-message bot';
        messageDiv.appendChild(benefitsDiv);
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 500);

    setTimeout(() => {
        showActionButtons(chatActions);
    }, 1000);
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    // Animate thread cards
    const threadCards = document.querySelectorAll('.thread-card');
    threadCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
        observer.observe(card);
    });
}

// ============================================
// PARALLAX EFFECT
// ============================================

function initParallax() {
    const hero = document.querySelector('.hero');
    const heroBackground = document.querySelector('.hero-background');

    if (!hero || !heroBackground) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;

        if (scrolled < hero.offsetHeight) {
            heroBackground.style.transform = `translateY(${rate}px)`;
        }
    });
}

// ============================================
// SMOOTH SCROLL TO FORUM
// ============================================

function scrollToForum() {
    window.location.href = 'forum.html';
}

// ============================================
// REPLY BOX FUNCTIONALITY (MOCK)
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const replyButtons = document.querySelectorAll('.reply-submit');
    replyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const textarea = this.previousElementSibling;
            if (textarea && textarea.value.trim()) {
                // Mock reply submission
                alert('Reply submitted! (This is a demo)');
                textarea.value = '';
            }
        });
    });
});

// ============================================
// BOOKINGS TABS
// ============================================

function initBookingsTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabButtons.length === 0 || tabContents.length === 0) {
        console.log('Bookings tabs not found');
        return;
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetTab = this.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            } else {
                console.log('Tab content not found:', targetTab);
            }
        });
    });

    // Ensure first tab is active on load
    const firstButton = document.querySelector('.tab-button.active');
    const firstContent = document.querySelector('.tab-content.active');
    if (firstButton && firstContent) {
        firstButton.classList.add('active');
        firstContent.classList.add('active');
    } else if (tabButtons.length > 0 && tabContents.length > 0) {
        // Fallback: activate first tab if none are active
        tabButtons[0].classList.add('active');
        tabContents[0].classList.add('active');
    }
}

// ============================================
// SIGN IN/OUT FUNCTIONALITY
// ============================================

function initSignInOut() {
    const signInBtn = document.getElementById('signInBtn');
    const signOutBtn = document.getElementById('signOutBtn');
    const userProfile = document.getElementById('userProfile');
    const navActions = document.querySelector('.nav-actions');

    // Check if user is signed in (from localStorage)
    const isSignedIn = localStorage.getItem('rcgSignedIn') === 'true';

    if (isSignedIn) {
        showUserProfile();
    }

    if (signInBtn) {
        signInBtn.addEventListener('click', function() {
            // Simulate sign in
            localStorage.setItem('rcgSignedIn', 'true');
            showUserProfile();
        });
    }

    if (signOutBtn) {
        signOutBtn.addEventListener('click', function() {
            // Sign out
            localStorage.setItem('rcgSignedIn', 'false');
            hideUserProfile();
        });
    }
}

function showUserProfile() {
    const userProfile = document.getElementById('userProfile');
    const signInBtn = document.getElementById('signInBtn');
    
    if (userProfile && signInBtn) {
        userProfile.style.display = 'flex';
        signInBtn.style.display = 'none';
    }
}

function hideUserProfile() {
    const userProfile = document.getElementById('userProfile');
    const signInBtn = document.getElementById('signInBtn');
    
    if (userProfile && signInBtn) {
        userProfile.style.display = 'none';
        signInBtn.style.display = 'flex';
    }
}

// ============================================
// NAVIGATION ACTIONS
// ============================================

function initNavActions() {
    // Need Help Button
    const needHelpBtn = document.getElementById('needHelpBtn');
    if (needHelpBtn) {
        needHelpBtn.addEventListener('click', function() {
            showHelpModal();
        });
    }

    // Favorites Button
    const favoritesBtn = document.getElementById('favoritesBtn');
    if (favoritesBtn) {
        // Load favorites count from localStorage
        updateFavoritesCount();
        
        favoritesBtn.addEventListener('click', function() {
            showFavoritesModal();
        });
    }

    // Manage My Cruise Button
    const manageCruiseBtn = document.getElementById('manageCruiseBtn');
    if (manageCruiseBtn) {
        manageCruiseBtn.addEventListener('click', function() {
            showManageCruiseModal();
        });
    }
}

function showHelpModal() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'helpModal';
    modal.innerHTML = `
        <div class="modal-content help-modal">
            <div class="modal-header">
                <h2>Need Help?</h2>
                <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="help-section">
                    <h3><i class="fas fa-phone"></i> Contact Support</h3>
                    <p>Our support team is available 24/7 to assist you.</p>
                    <div class="contact-options">
                        <a href="tel:+18005227272" class="contact-btn">
                            <i class="fas fa-phone"></i>
                            <span>Call: 1-800-522-7272</span>
                        </a>
                        <a href="mailto:support@rcgconnect.com" class="contact-btn">
                            <i class="fas fa-envelope"></i>
                            <span>Email Support</span>
                        </a>
                    </div>
                </div>
                <div class="help-section">
                    <h3><i class="fas fa-question-circle"></i> Frequently Asked Questions</h3>
                    <div class="help-links">
                        <a href="loyalty.html#faq" class="help-link">Loyalty Program FAQ</a>
                        <a href="forum.html" class="help-link">Community Forum</a>
                        <a href="boatey.html" class="help-link">Ask Boatey AI</a>
                    </div>
                </div>
                <div class="help-section">
                    <h3><i class="fas fa-book"></i> Resources</h3>
                    <div class="help-links">
                        <a href="#" class="help-link">Booking Guide</a>
                        <a href="#" class="help-link">Cruise Preparation</a>
                        <a href="#" class="help-link">Loyalty Benefits</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

function showFavoritesModal() {
    // Get favorites from localStorage
    const favorites = JSON.parse(localStorage.getItem('rcgFavorites') || '[]');
    
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'favoritesModal';
    modal.innerHTML = `
        <div class="modal-content favorites-modal">
            <div class="modal-header">
                <h2><i class="fas fa-heart"></i> My Favorites</h2>
                <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                ${favorites.length === 0 ? `
                    <div class="empty-favorites">
                        <i class="fas fa-heart"></i>
                        <h3>No favorites yet</h3>
                        <p>Start exploring and save your favorite threads, cruises, and content!</p>
                        <a href="forum.html" class="cta-button primary">
                            <span>Explore Forum</span>
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                ` : `
                    <div class="favorites-list">
                        ${favorites.map((fav, index) => `
                            <div class="favorite-item">
                                <div class="favorite-content">
                                    <h4>${fav.title || 'Favorite Item'}</h4>
                                    <p>${fav.description || ''}</p>
                                </div>
                                <button class="remove-favorite" onclick="removeFavorite(${index})">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        `).join('')}
                    </div>
                `}
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

function removeFavorite(index) {
    const favorites = JSON.parse(localStorage.getItem('rcgFavorites') || '[]');
    favorites.splice(index, 1);
    localStorage.setItem('rcgFavorites', JSON.stringify(favorites));
    updateFavoritesCount();
    showFavoritesModal(); // Refresh modal
}

function updateFavoritesCount() {
    const favorites = JSON.parse(localStorage.getItem('rcgFavorites') || '[]');
    const badgeCount = document.querySelector('#favoritesBtn .badge-count');
    if (badgeCount) {
        badgeCount.textContent = favorites.length;
        badgeCount.style.display = favorites.length > 0 ? 'flex' : 'none';
    }
}

function showManageCruiseModal() {
    const isSignedIn = localStorage.getItem('rcgSignedIn') === 'true';
    
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'manageCruiseModal';
    modal.innerHTML = `
        <div class="modal-content manage-cruise-modal">
            <div class="modal-header">
                <h2><i class="fas fa-calendar-check"></i> Manage My Cruise</h2>
                <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                ${!isSignedIn ? `
                    <div class="sign-in-prompt">
                        <i class="fas fa-user-lock"></i>
                        <h3>Sign In Required</h3>
                        <p>Please sign in to manage your cruise bookings and reservations.</p>
                        <button class="cta-button primary" onclick="document.getElementById('signInBtn').click(); this.closest('.modal-overlay').remove();">
                            <span>Sign In</span>
                            <i class="fas fa-arrow-right"></i>
                        </button>
                    </div>
                ` : `
                    <div class="cruise-management">
                        <div class="management-section">
                            <h3><i class="fas fa-search"></i> Find My Booking</h3>
                            <p>Enter your booking number or last name to access your reservation.</p>
                            <div class="search-booking">
                                <input type="text" placeholder="Booking Number or Last Name" class="booking-input">
                                <button class="cta-button primary">
                                    <span>Search</span>
                                    <i class="fas fa-search"></i>
                                </button>
                            </div>
                        </div>
                        <div class="management-section">
                            <h3><i class="fas fa-list"></i> Quick Actions</h3>
                            <div class="quick-actions-grid">
                                <a href="#" class="action-card">
                                    <i class="fas fa-edit"></i>
                                    <span>Modify Booking</span>
                                </a>
                                <a href="#" class="action-card">
                                    <i class="fas fa-calendar-alt"></i>
                                    <span>Check In</span>
                                </a>
                                <a href="#" class="action-card">
                                    <i class="fas fa-utensils"></i>
                                    <span>Dining Reservations</span>
                                </a>
                                <a href="#" class="action-card">
                                    <i class="fas fa-spa"></i>
                                    <span>Spa & Activities</span>
                                </a>
                            </div>
                        </div>
                    </div>
                `}
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 30px rgba(10, 14, 39, 0.15)';
    } else {
        navbar.style.boxShadow = '0 1px 0 rgba(0, 0, 0, 0.05)';
    }
});

