// ============================================
// BOATEY AI COMPANION - JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initBoateyChat();
    initQuickActions();
});

function initBoateyChat() {
    const input = document.getElementById('boateyInput');
    const sendBtn = document.getElementById('boateySendBtn');
    const messagesContainer = document.getElementById('boateyMessages');

    if (!input || !sendBtn || !messagesContainer) return;

    function sendMessage() {
        const message = input.value.trim();
        if (!message) return;

        // Add user message
        addMessage(messagesContainer, 'user', message);
        input.value = '';

        // Show typing indicator
        const typingIndicator = showTypingIndicator(messagesContainer);

        // Simulate AI response
        setTimeout(() => {
            removeTypingIndicator(typingIndicator);
            const response = generateBoateyResponse(message);
            addMessage(messagesContainer, 'bot', response);
        }, 1500);
    }

    sendBtn.addEventListener('click', sendMessage);
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

function initQuickActions() {
    const suggestionChips = document.querySelectorAll('.suggestion-chip');
    const input = document.getElementById('boateyInput');
    const sendBtn = document.getElementById('boateySendBtn');
    const messagesContainer = document.getElementById('boateyMessages');

    suggestionChips.forEach(chip => {
        chip.addEventListener('click', function() {
            const suggestion = this.getAttribute('data-suggestion');
            if (input && suggestion) {
                input.value = suggestion;
                input.focus();
                // Auto send
                setTimeout(() => {
                    if (sendBtn) sendBtn.click();
                }, 100);
            }
        });
    });
    
    // Clear chat button
    const clearBtn = document.querySelector('.chat-action-btn-premium[title="Clear Chat"]');
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            if (messagesContainer) {
                // Keep only the first welcome message
                const welcomeMsg = messagesContainer.querySelector('.bot-message-premium:first-child');
                messagesContainer.innerHTML = '';
                if (welcomeMsg) {
                    messagesContainer.appendChild(welcomeMsg);
                }
            }
        });
    }
}

function addMessage(container, type, text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message-premium ${type}-message-premium`;

    if (type === 'bot') {
        const avatar = document.createElement('div');
        avatar.className = 'message-avatar-premium';
        avatar.innerHTML = `
            <div class="boat-body-message-premium">
                <i class="fas fa-ship"></i>
            </div>
        `;
        messageDiv.appendChild(avatar);
    }

    const bubble = document.createElement('div');
    bubble.className = `message-bubble-premium ${type === 'bot' ? 'bot-bubble-premium' : 'user-bubble-premium'}`;
    
    const textP = document.createElement('p');
    textP.textContent = text;
    bubble.appendChild(textP);
    
    const timeSpan = document.createElement('span');
    timeSpan.className = 'message-time-premium';
    const now = new Date();
    timeSpan.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    bubble.appendChild(timeSpan);
    
    messageDiv.appendChild(bubble);
    container.appendChild(messageDiv);
    container.scrollTop = container.scrollHeight;
}

function showTypingIndicator(container) {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message-premium bot-message-premium typing-indicator-boatey';
    typingDiv.innerHTML = `
        <div class="message-avatar-premium">
            <div class="boat-body-message-premium">
                <i class="fas fa-ship"></i>
            </div>
        </div>
        <div class="message-bubble-premium bot-bubble-premium">
            <div class="typing-dots">
                <span></span>
                <span></span>
                <span></span>
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

