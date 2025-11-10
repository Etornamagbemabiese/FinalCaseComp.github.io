// ============================================
// AGENT CHAT INTERFACE - JAVASCRIPT
// ============================================

// Store agent configuration
let agentConfig = {
    name: 'Agent',
    personality: 'friendly',
    avatar: 'ship',
    avatarIcon: 'fa-ship',
    avatarColor: '#007BFF'
};

document.addEventListener('DOMContentLoaded', function() {
    // Check if agent is already configured
    const savedConfig = localStorage.getItem('agentConfig');
    if (savedConfig) {
        agentConfig = JSON.parse(savedConfig);
        showChatInterface();
    initChatInterface();
    } else {
        initAgentSetup();
    }
    
    initHeaderActions();
});

function initAgentSetup() {
    const setupOverlay = document.getElementById('agentSetupOverlay');
    const agentNameInput = document.getElementById('agentName');
    const startChatBtn = document.getElementById('startChatBtn');
    const personalityOptions = document.querySelectorAll('.personality-option');
    const chatMainContainer = document.getElementById('chatMainContainer');
    
    if (!setupOverlay || !agentNameInput || !startChatBtn) return;
    
    let selectedPersonality = null;
    let selectedAvatar = null;
    let selectedAvatarIcon = null;
    let selectedAvatarColor = null;
    
    const avatarOptions = document.querySelectorAll('.avatar-option');
    
    // Handle avatar selection
    avatarOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from all options
            avatarOptions.forEach(opt => opt.classList.remove('active'));
            // Add active class to selected option
            this.classList.add('active');
            selectedAvatar = this.getAttribute('data-avatar');
            selectedAvatarIcon = this.getAttribute('data-icon');
            selectedAvatarColor = this.getAttribute('data-color');
            checkSetupComplete();
        });
    });
    
    // Handle personality selection
    personalityOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from all options
            personalityOptions.forEach(opt => opt.classList.remove('active'));
            // Add active class to selected option
            this.classList.add('active');
            selectedPersonality = this.getAttribute('data-personality');
            checkSetupComplete();
        });
    });
    
    // Handle name input
    agentNameInput.addEventListener('input', function() {
        checkSetupComplete();
    });
    
    function checkSetupComplete() {
        const name = agentNameInput.value.trim();
        if (name && selectedPersonality && selectedAvatar) {
            startChatBtn.disabled = false;
        } else {
            startChatBtn.disabled = true;
        }
    }
    
    // Handle start chat button
    startChatBtn.addEventListener('click', function() {
        const name = agentNameInput.value.trim();
        if (name && selectedPersonality && selectedAvatar) {
            agentConfig.name = name;
            agentConfig.personality = selectedPersonality;
            agentConfig.avatar = selectedAvatar;
            agentConfig.avatarIcon = selectedAvatarIcon;
            agentConfig.avatarColor = selectedAvatarColor;
            
            // Save to localStorage
            localStorage.setItem('agentConfig', JSON.stringify(agentConfig));
            
            // Update header title and avatar
            updateHeaderAvatar();
            
            // Hide setup screen and show chat
            setupOverlay.style.display = 'none';
            if (chatMainContainer) {
                chatMainContainer.style.display = 'flex';
            }
            
            // Initialize chat interface
            initChatInterface();
            
            // Show welcome message
            showWelcomeMessage();
        }
    });
}

function showChatInterface() {
    const setupOverlay = document.getElementById('agentSetupOverlay');
    const chatMainContainer = document.getElementById('chatMainContainer');
    const headerTitle = document.getElementById('agentHeaderTitle');
    
    if (setupOverlay) setupOverlay.style.display = 'none';
    if (chatMainContainer) {
        chatMainContainer.style.display = 'flex';
    }
    if (headerTitle) headerTitle.textContent = agentConfig.name;
    
    // Update header avatar
    updateHeaderAvatar();
    
    // Only show welcome message if chat messages container exists and is empty
    const chatMessages = document.getElementById('chatMessages');
    if (chatMessages && chatMessages.children.length === 0) {
        showWelcomeMessage();
    }
}

function updateHeaderAvatar() {
    const headerIcon = document.querySelector('.boatey-header-icon');
    if (headerIcon && agentConfig.avatarIcon) {
        headerIcon.innerHTML = `
            <div class="agent-avatar-icon" style="background: ${agentConfig.avatarColor};">
                <i class="fas ${agentConfig.avatarIcon}"></i>
            </div>
        `;
    }
}

function showWelcomeMessage() {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;
    
    const welcomeMessages = {
        friendly: `Hi there! I'm ${agentConfig.name}, your friendly AI companion. I'm here to help make your cruise experience amazing!`,
        professional: `Hello. I'm ${agentConfig.name}, your AI assistant. I'm here to provide you with professional guidance and support for your cruise planning needs.`,
        enthusiastic: `Hey there! I'm ${agentConfig.name} and I'm SO excited to help you! 🎉 Let's make your cruise experience absolutely incredible!`,
        calm: `Hello. I'm ${agentConfig.name}, your calm and thoughtful AI companion. I'm here to help guide you through your cruise journey.`,
        humorous: `Hey! I'm ${agentConfig.name}, and I'm here to help... while keeping things fun! 😄`,
        adventurous: `Ahoy! I'm ${agentConfig.name}, your adventurous AI companion! Ready to explore all the amazing possibilities for your cruise? 🌊`
    };
    
    const welcomeMessage = welcomeMessages[agentConfig.personality] || welcomeMessages.friendly;
    addChatMessage(chatMessages, 'bot', welcomeMessage);
}

function initChatInterface() {
    const chatMessages = document.getElementById('chatMessages');

    if (!chatMessages) return;

    function sendMessage(message) {
        if (!message) return;

        // Add user message
        addChatMessage(chatMessages, 'user', message);

        // Show typing indicator
        const typingIndicator = showTypingIndicator(chatMessages);

        // Simulate AI response
        setTimeout(() => {
            removeTypingIndicator(typingIndicator);
            const response = generateBoateyResponse(message);
            addChatMessage(chatMessages, 'bot', response);
        }, 1500);
    }

    // Initialize suggestions after chat is ready
    initSuggestionsDropdown(sendMessage);
}

function addChatMessage(container, type, text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message-bubble ${type}-message`;

    if (type === 'bot') {
        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        const avatarIcon = agentConfig.avatarIcon || 'fa-ship';
        const avatarColor = agentConfig.avatarColor || '#007BFF';
        avatar.innerHTML = `
            <div class="agent-avatar-small" style="background: ${avatarColor};">
                <i class="fas ${avatarIcon}"></i>
            </div>
        `;
        messageDiv.appendChild(avatar);
    }

    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'message-content-wrapper';

    const bubble = document.createElement('div');
    bubble.className = 'message-bubble-content';
    
    const textP = document.createElement('p');
    textP.textContent = text;
    bubble.appendChild(textP);
    
    contentWrapper.appendChild(bubble);
    
    const timeSpan = document.createElement('span');
    timeSpan.className = 'message-timestamp';
    const now = new Date();
    timeSpan.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    contentWrapper.appendChild(timeSpan);
    
    messageDiv.appendChild(contentWrapper);
    container.appendChild(messageDiv);
    container.scrollTop = container.scrollHeight;
}

function showTypingIndicator(container) {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message-bubble bot-message typing-indicator';
    const avatarIcon = agentConfig.avatarIcon || 'fa-ship';
    const avatarColor = agentConfig.avatarColor || '#007BFF';
    typingDiv.innerHTML = `
            <div class="message-avatar">
                <div class="agent-avatar-small" style="background: ${avatarColor};">
                    <i class="fas ${avatarIcon}"></i>
                </div>
            </div>
        <div class="message-content-wrapper">
            <div class="message-bubble-content">
                <div class="typing-indicator">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        </div>
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

function generateBoateyResponse(message) {
    const lowerMessage = message.toLowerCase();
    const personality = agentConfig.personality;

    // Personality-based response modifiers
    const personalityModifiers = {
        friendly: {
            greeting: "Hi!",
            enthusiasm: "",
            closing: "Feel free to ask me anything else!",
            tone: "warm and helpful"
        },
        professional: {
            greeting: "Certainly.",
            enthusiasm: "",
            closing: "Please let me know if you need further assistance.",
            tone: "professional and precise"
        },
        enthusiastic: {
            greeting: "Awesome!",
            enthusiasm: " 🎉",
            closing: "I'm so excited to help you more!",
            tone: "excited and energetic"
        },
        calm: {
            greeting: "I understand.",
            enthusiasm: "",
            closing: "Take your time, and feel free to ask more questions.",
            tone: "calm and thoughtful"
        },
        humorous: {
            greeting: "Ha!",
            enthusiasm: " 😄",
            closing: "Hope that helps! Anything else on your mind?",
            tone: "lighthearted and fun"
        },
        adventurous: {
            greeting: "Ahoy!",
            enthusiasm: " 🌊",
            closing: "Let's keep exploring together!",
            tone: "adventurous and bold"
        }
    };

    const modifier = personalityModifiers[personality] || personalityModifiers.friendly;

    // Thread summarization
    if (lowerMessage.includes('summar') || lowerMessage.includes('summary')) {
        const responses = {
            friendly: `${modifier.greeting} I'd be happy to summarize a forum thread for you! Which thread would you like me to summarize? You can click on any thread in the forum and I'll provide a quick summary of the key points and insights!`,
            professional: `I can assist you with forum thread summarization. Please specify which thread you would like me to summarize. I will provide a concise overview of the key points and insights.`,
            enthusiastic: `${modifier.greeting} I'd LOVE to summarize forum threads for you!${modifier.enthusiasm} Just point me to any thread and I'll give you an awesome summary with all the key points!`,
            calm: `I can help you summarize forum threads. Which thread would you like me to review? I'll provide a thoughtful overview of the main points and insights.`,
            humorous: `${modifier.greeting} Want me to summarize a thread?${modifier.enthusiasm} I'm like a cruise forum CliffNotes! Just tell me which one and I'll give you the highlights!`,
            adventurous: `${modifier.greeting} Ready to dive into forum threads!${modifier.enthusiasm} Which thread should we explore? I'll map out all the key insights for you!`
        };
        return responses[personality] || responses.friendly;
    }

    // Trip planning
    if (lowerMessage.includes('plan') || lowerMessage.includes('trip') || lowerMessage.includes('cruise')) {
        const responses = {
            friendly: `Great! I'd love to help you plan your cruise. Here are some things I can assist with:\n\n• Destination recommendations based on your preferences\n• Best time to travel\n• Excursion suggestions\n• Dining reservations\n• Onboard activities\n\nWhat type of cruise experience are you looking for?`,
            professional: `I can assist you with cruise planning. My services include:\n\n• Destination recommendations\n• Optimal travel timing analysis\n• Excursion recommendations\n• Dining reservation assistance\n• Onboard activity planning\n\nPlease specify your preferences and requirements.`,
            enthusiastic: `YES!${modifier.enthusiasm} I'm SO excited to help you plan an amazing cruise! Here's what I can do:\n\n• Find you the PERFECT destinations\n• Help you pick the best time to travel\n• Suggest incredible excursions\n• Get you set up with awesome dining\n• Plan amazing onboard activities\n\nTell me what kind of adventure you're looking for!`,
            calm: `I'd be happy to help you plan your cruise thoughtfully. I can assist with:\n\n• Destination recommendations\n• Travel timing considerations\n• Excursion options\n• Dining arrangements\n• Onboard activities\n\nWhat kind of experience are you hoping to have?`,
            humorous: `Planning a cruise?${modifier.enthusiasm} Let's make it epic! I can help with:\n\n• Finding destinations that'll blow your mind\n• Timing it just right (because nobody likes bad weather)\n• Excursions that are actually worth it\n• Dining that'll make you want to move on board\n• Activities that keep you entertained\n\nSo, what's your cruise style?`,
            adventurous: `${modifier.greeting} Let's plan an adventure!${modifier.enthusiasm} I can help you discover:\n\n• Exciting destinations\n• The best times for exploration\n• Thrilling excursions\n• Unique dining experiences\n• Amazing onboard adventures\n\nWhat kind of journey are you ready for?`
        };
        return responses[personality] || responses.friendly;
    }

    // Tips
    if (lowerMessage.includes('tip') || lowerMessage.includes('advice') || lowerMessage.includes('suggest')) {
        const responses = {
            friendly: `Here are some of my favorite cruise tips:\n\n• Book excursions early - popular ones sell out fast\n• Pack a carry-on with essentials for embarkation day\n• Take advantage of loyalty program perks\n• Try specialty dining at least once\n• Don't miss the evening shows - they're fantastic!\n• Use the ship's app for daily schedules\n\nWhat specific area would you like more tips on?`,
            professional: `Here are key recommendations for an optimal cruise experience:\n\n• Reserve excursions in advance\n• Prepare a carry-on for embarkation day\n• Utilize loyalty program benefits\n• Consider specialty dining options\n• Attend evening entertainment\n• Use the ship's mobile application for scheduling\n\nWhich area requires further guidance?`,
            enthusiastic: `Oh my gosh, I have SO many great tips!${modifier.enthusiasm}\n\n• Book excursions ASAP - the good ones disappear!\n• Pack a carry-on (trust me on this one!)\n• Use those loyalty perks - you earned them!\n• Try specialty dining - it's incredible!\n• Don't skip the shows - they're amazing!\n• Download the ship app - it's a game changer!\n\nWhat else do you want to know?`,
            calm: `Here are some thoughtful tips for your cruise:\n\n• Reserve excursions early for better availability\n• Pack essentials in a carry-on\n• Make use of loyalty program benefits\n• Consider specialty dining experiences\n• Enjoy the evening entertainment\n• Utilize the ship's app for planning\n\nIs there a particular aspect you'd like more guidance on?`,
            humorous: `Tips?${modifier.enthusiasm} I've got 'em!\n\n• Book excursions early (before they're gone like your vacation days)\n• Pack a carry-on (because waiting for luggage is no fun)\n• Use loyalty perks (you paid for them, after all!)\n• Try specialty dining (treat yo self!)\n• See the shows (they're actually good!)\n• Get the app (it's like having a cruise concierge in your pocket)\n\nWhat else can I help with?`,
            adventurous: `${modifier.greeting} Adventure tips incoming!${modifier.enthusiasm}\n\n• Book excursions early for the best adventures\n• Pack smart with a carry-on\n• Maximize loyalty program perks\n• Explore specialty dining\n• Experience the shows\n• Use the ship app for seamless planning\n\nReady for more adventure tips?`
        };
        return responses[personality] || responses.friendly;
    }

    // Loyalty
    if (lowerMessage.includes('loyalty') || lowerMessage.includes('tier') || lowerMessage.includes('points')) {
        const responses = {
            friendly: `I can help you understand the Crown & Anchor Society loyalty program! Here's what I can assist with:\n\n• Tier benefits and perks\n• How to earn and maximize points\n• Points redemption options\n• Tier progression strategies\n• Exclusive member offers\n\nWhat would you like to know about the loyalty program?`,
            professional: `I can provide information about the Crown & Anchor Society loyalty program. Areas of assistance include:\n\n• Tier benefits and privileges\n• Points accumulation and optimization\n• Redemption options\n• Tier advancement strategies\n• Exclusive member benefits\n\nWhat specific information do you require?`,
            enthusiastic: `The loyalty program is AMAZING!${modifier.enthusiasm} I can help with:\n\n• All the awesome tier benefits\n• How to rack up those points!\n• Cool redemption options\n• Strategies to level up\n• Exclusive member perks\n\nWhat do you want to know?`,
            calm: `I can guide you through the Crown & Anchor Society loyalty program. I can explain:\n\n• Tier benefits\n• Points earning and optimization\n• Redemption opportunities\n• Progression strategies\n• Member exclusives\n\nWhat aspect would you like to explore?`,
            humorous: `Loyalty program?${modifier.enthusiasm} Let's talk perks!\n\n• Tier benefits (the good stuff)\n• Points earning (like a game, but better)\n• Redemption options (free stuff, basically)\n• Leveling up strategies\n• Exclusive offers (because you're special)\n\nWhat's on your mind?`,
            adventurous: `${modifier.greeting} Let's explore the loyalty program!${modifier.enthusiasm}\n\n• Tier benefits and adventures\n• Points earning opportunities\n• Redemption options\n• Advancement strategies\n• Exclusive member experiences\n\nWhat would you like to discover?`
        };
        return responses[personality] || responses.friendly;
    }

    // Booking
    if (lowerMessage.includes('book') || lowerMessage.includes('cabin') || lowerMessage.includes('price')) {
        const responses = {
            friendly: `I'd be happy to help with booking! I can assist with:\n\n• Finding the best cruise deals\n• Cabin selection recommendations\n• Package options (drinks, WiFi, dining)\n• Price comparisons\n• Booking dates and availability\n\nWhat are you looking for in your next cruise?`,
            professional: `I can assist with booking services. Available support includes:\n\n• Deal identification and comparison\n• Cabin selection guidance\n• Package option analysis (beverages, connectivity, dining)\n• Price evaluation\n• Availability and scheduling\n\nWhat are your specific requirements?`,
            enthusiastic: `Let's get you booked!${modifier.enthusiasm} I can help with:\n\n• Finding AMAZING deals\n• Picking the perfect cabin\n• Awesome package options\n• Comparing prices\n• Finding the best dates\n\nWhat's your dream cruise?`,
            calm: `I can assist you with booking arrangements. I can help with:\n\n• Finding suitable deals\n• Cabin selection guidance\n• Package options\n• Price considerations\n• Availability planning\n\nWhat are you looking for?`,
            humorous: `Booking time!${modifier.enthusiasm} Let's do this:\n\n• Find you some deals (because who doesn't love a deal?)\n• Help pick a cabin (location, location, location!)\n• Package options (drinks, WiFi, food - the essentials)\n• Price comparisons (get the best bang for your buck)\n• Dates and availability\n\nWhat's on your wish list?`,
            adventurous: `${modifier.greeting} Ready to book an adventure?${modifier.enthusiasm}\n\n• Discover great deals\n• Find the perfect cabin\n• Explore package options\n• Compare prices\n• Plan your journey\n\nWhat adventure are you seeking?`
        };
        return responses[personality] || responses.friendly;
    }

    // General responses based on personality
    const generalResponses = {
        friendly: [
        "That's a great question! Let me help you with that. What specific information are you looking for?",
            "I'm here to help! Could you tell me more about what you need?",
        "I'd be happy to assist! What would you like to know about cruising or the RCG community?",
        "That's interesting! Let me provide some insights. What specific aspect would you like me to focus on?",
            "Great question! I can share some helpful information. What details are you most interested in?"
        ],
        professional: [
            "I can assist you with that. Please provide more specific details about what you need.",
            "Certainly. Could you clarify your requirements so I can provide the most accurate information?",
            "I'd be happy to help. What specific information are you seeking?",
            "I understand. Let me provide you with the relevant details. What aspect would you like me to focus on?",
            "I can help with that. What specific details would be most useful for you?"
        ],
        enthusiastic: [
            `That's awesome!${modifier.enthusiasm} I'm excited to help! What specifically do you want to know?`,
            `YES!${modifier.enthusiasm} I'm totally here for this! Tell me more about what you need!`,
            `I'm SO ready to help!${modifier.enthusiasm} What would you like to know about cruises or RCG?`,
            `That's so interesting!${modifier.enthusiasm} I'd love to dive into that! What should we focus on?`,
            `Great question!${modifier.enthusiasm} I've got info to share! What are you most curious about?`
        ],
        calm: [
            "I understand. Let me help you with that. What specific information are you looking for?",
            "I'm here to assist. Could you tell me more about what you need?",
            "I'd be happy to help. What would you like to know about cruising or the RCG community?",
            "That's a thoughtful question. Let me provide some insights. What aspect would you like to explore?",
            "I can help with that. What specific details would be most helpful for you?"
        ],
        humorous: [
            `Ha!${modifier.enthusiasm} Good question! Let me help you out. What specifically are you wondering about?`,
            `I'm on it!${modifier.enthusiasm} Tell me more about what you need and I'll see what I can do!`,
            `Sure thing!${modifier.enthusiasm} I'm here to help with all things cruise-related. What's on your mind?`,
            `That's a fun one!${modifier.enthusiasm} Let me break it down for you. What should we focus on?`,
            `Love it!${modifier.enthusiasm} I've got info for you! What are you most curious about?`
        ],
        adventurous: [
            `${modifier.greeting} Let's explore that!${modifier.enthusiasm} What specific information do you need?`,
            `${modifier.greeting} I'm ready to help!${modifier.enthusiasm} Tell me more about what you're looking for!`,
            `${modifier.greeting} Let's dive into that!${modifier.enthusiasm} What would you like to know about cruises or RCG?`,
            `${modifier.greeting} That's an adventure waiting to happen!${modifier.enthusiasm} What aspect should we focus on?`,
            `${modifier.greeting} Great question!${modifier.enthusiasm} I can help with that. What are you most interested in?`
        ]
    };

    const responses = generalResponses[personality] || generalResponses.friendly;
    return responses[Math.floor(Math.random() * responses.length)];
}

function initHeaderActions() {
    const minimizeBtn = document.getElementById('minimizeBtn');
    const settingsBtn = document.getElementById('settingsBtn');
    const closeBtn = document.getElementById('closeBtn');

    if (minimizeBtn) {
        minimizeBtn.addEventListener('click', function() {
            // Minimize functionality - could minimize to a small window
            alert('Minimize feature coming soon!');
        });
    }

    if (settingsBtn) {
        settingsBtn.addEventListener('click', function() {
            // Allow user to reset agent configuration
            if (confirm('Would you like to reset your agent? This will clear your current agent name and personality settings.')) {
                localStorage.removeItem('agentConfig');
                window.location.reload();
            }
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            // Navigate back to overview
            window.location.href = 'boatey.html';
        });
    }
}

function initSuggestionsDropdown(sendMessageCallback) {
    const suggestionsToggle = document.getElementById('suggestionsToggle');
    const suggestionsDropdown = document.getElementById('suggestionsDropdown');
    const suggestionItems = document.querySelectorAll('.suggestion-item');

    if (!suggestionsToggle || !suggestionsDropdown) return;

    // Toggle dropdown
    suggestionsToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        suggestionsToggle.classList.toggle('active');
        suggestionsDropdown.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!suggestionsDropdown.contains(e.target) && !suggestionsToggle.contains(e.target)) {
            suggestionsToggle.classList.remove('active');
            suggestionsDropdown.classList.remove('active');
        }
    });

    // Handle suggestion selection
    suggestionItems.forEach(item => {
        item.addEventListener('click', function() {
            const suggestion = this.getAttribute('data-suggestion');
            if (suggestion && sendMessageCallback) {
                // Close dropdown
                suggestionsToggle.classList.remove('active');
                suggestionsDropdown.classList.remove('active');
                
                // Send the message directly
                sendMessageCallback(suggestion);
            }
        });
    });
}

