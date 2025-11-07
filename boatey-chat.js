// ============================================
// BOATEY CHAT INTERFACE - JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initChatInterface();
    initHeaderActions();
    initSuggestionsDropdown();
});

function initChatInterface() {
    const chatInput = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendBtn');
    const chatMessages = document.getElementById('chatMessages');

    if (!chatInput || !sendBtn || !chatMessages) return;

    function sendMessage() {
        const message = chatInput.value.trim();
        if (!message) return;

        // Add user message
        addChatMessage(chatMessages, 'user', message);
        chatInput.value = '';

        // Show typing indicator
        const typingIndicator = showTypingIndicator(chatMessages);

        // Simulate AI response
        setTimeout(() => {
            removeTypingIndicator(typingIndicator);
            const response = generateBoateyResponse(message);
            addChatMessage(chatMessages, 'bot', response);
        }, 1500);
    }

    sendBtn.addEventListener('click', sendMessage);
    
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

function addChatMessage(container, type, text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message-bubble ${type}-message`;

    if (type === 'bot') {
        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.innerHTML = `
            <div class="boatey-avatar-small">
                <video class="boatey-avatar-video" autoplay muted loop playsinline>
                    <source src="Animation.mp4" type="video/mp4">
                </video>
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
    typingDiv.innerHTML = `
            <div class="message-avatar">
                <div class="boatey-avatar-small">
                    <video class="boatey-avatar-video" autoplay muted loop playsinline>
                        <source src="Animation.mp4" type="video/mp4">
                    </video>
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

    // Thread summarization
    if (lowerMessage.includes('summar') || lowerMessage.includes('summary')) {
        return "Ahoy! I'd be happy to summarize a forum thread for you. Which thread would you like me to summarize? You can click on any thread in the forum and I'll provide a quick AI summary of the key points and insights!";
    }

    // Trip planning
    if (lowerMessage.includes('plan') || lowerMessage.includes('trip') || lowerMessage.includes('cruise')) {
        return "Great! I'd love to help you plan your cruise. Here are some things I can assist with:\n\n• Destination recommendations based on your preferences\n• Best time to travel\n• Excursion suggestions\n• Dining reservations\n• Onboard activities\n\nWhat type of cruise experience are you looking for?";
    }

    // Tips
    if (lowerMessage.includes('tip') || lowerMessage.includes('advice') || lowerMessage.includes('suggest')) {
        return "Here are some of my favorite cruise tips:\n\n• Book excursions early - popular ones sell out fast\n• Pack a carry-on with essentials for embarkation day\n• Take advantage of loyalty program perks\n• Try specialty dining at least once\n• Don't miss the evening shows - they're fantastic!\n• Use the ship's app for daily schedules\n\nWhat specific area would you like more tips on?";
    }

    // Loyalty
    if (lowerMessage.includes('loyalty') || lowerMessage.includes('tier') || lowerMessage.includes('points')) {
        return "I can help you understand the Crown & Anchor Society loyalty program! Here's what I can assist with:\n\n• Tier benefits and perks\n• How to earn and maximize points\n• Points redemption options\n• Tier progression strategies\n• Exclusive member offers\n\nWhat would you like to know about the loyalty program?";
    }

    // Booking
    if (lowerMessage.includes('book') || lowerMessage.includes('cabin') || lowerMessage.includes('price')) {
        return "I'd be happy to help with booking! I can assist with:\n\n• Finding the best cruise deals\n• Cabin selection recommendations\n• Package options (drinks, WiFi, dining)\n• Price comparisons\n• Booking dates and availability\n\nWhat are you looking for in your next cruise?";
    }

    // General responses
    const responses = [
        "That's a great question! Let me help you with that. What specific information are you looking for?",
        "Ahoy! I'm here to help. Could you tell me more about what you need?",
        "I'd be happy to assist! What would you like to know about cruising or the RCG community?",
        "That's interesting! Let me provide some insights. What specific aspect would you like me to focus on?",
        "Great question! Based on community discussions, I can share some helpful information. What details are you most interested in?"
    ];

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
            // Settings functionality
            alert('Settings feature coming soon!');
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            // Navigate back to overview
            window.location.href = 'boatey.html';
        });
    }
}

function initSuggestionsDropdown() {
    const suggestionsToggle = document.getElementById('suggestionsToggle');
    const suggestionsDropdown = document.getElementById('suggestionsDropdown');
    const closeSuggestionsBtn = document.getElementById('closeSuggestionsBtn');
    const suggestionItems = document.querySelectorAll('.suggestion-item');
    const chatInput = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendBtn');

    if (!suggestionsToggle || !suggestionsDropdown) return;

    // Toggle dropdown
    suggestionsToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        suggestionsDropdown.classList.toggle('active');
    });

    // Close dropdown
    if (closeSuggestionsBtn) {
        closeSuggestionsBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            suggestionsDropdown.classList.remove('active');
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!suggestionsDropdown.contains(e.target) && !suggestionsToggle.contains(e.target)) {
            suggestionsDropdown.classList.remove('active');
        }
    });

    // Handle suggestion selection
    suggestionItems.forEach(item => {
        item.addEventListener('click', function() {
            const suggestion = this.getAttribute('data-suggestion');
            if (suggestion && chatInput) {
                chatInput.value = suggestion;
                chatInput.focus();
                suggestionsDropdown.classList.remove('active');
                
                // Auto-send the message
                setTimeout(() => {
                    if (sendBtn) {
                        sendBtn.click();
                    }
                }, 100);
            }
        });
    });
}

