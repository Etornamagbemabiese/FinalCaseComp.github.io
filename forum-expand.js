// ============================================
// FORUM EXPANSION - Generate Additional Threads
// ============================================

const additionalThreads = [
    {
        id: 7,
        title: "Best Time to Book for Caribbean Cruises",
        username: "Jennifer Smith",
        tier: "gold",
        avatar: "https://ui-avatars.com/api/?name=Jennifer+Smith&background=FF6B6B&color=fff&size=64",
        time: "6 hours ago",
        content: "When is the best time to book a Caribbean cruise for the best prices? Looking to plan for next year.",
        summary: "Boatey AI Summary: Best booking times are typically 6-12 months in advance, with shoulder seasons (April-May, September-October) offering better prices. Last-minute deals can be found but selection is limited.",
        replies: 20,
        likes: 145
    },
    {
        id: 8,
        title: "WiFi Packages - Worth It?",
        username: "Mark Thompson",
        tier: "silver",
        avatar: "https://ui-avatars.com/api/?name=Mark+Thompson&background=00AEEF&color=fff&size=64",
        time: "8 hours ago",
        content: "Do you really need WiFi on a cruise? Is it worth the cost? I'm trying to decide if I should get a package.",
        summary: "Boatey AI Summary: WiFi quality varies by ship and location. Basic packages work for messaging, but streaming requires premium. Many cruisers recommend disconnecting for a true vacation experience.",
        replies: 20,
        likes: 198
    },
    {
        id: 9,
        title: "Solo Cruiser Tips and Experiences",
        username: "Amanda Lee",
        tier: "platinum",
        avatar: "https://ui-avatars.com/api/?name=Amanda+Lee&background=001F54&color=fff&size=64",
        time: "12 hours ago",
        content: "First time cruising solo. Any tips? What are the best activities for solo travelers?",
        summary: "Boatey AI Summary: Solo cruisers recommend joining meetups, trying specialty dining, and taking advantage of single supplement deals. Many ships have solo traveler lounges and activities.",
        replies: 20,
        likes: 267
    },
    {
        id: 10,
        title: "Drink Package Math - Is It Worth It?",
        username: "Chris Rodriguez",
        tier: "gold",
        avatar: "https://ui-avatars.com/api/?name=Chris+Rodriguez&background=FF6B6B&color=fff&size=64",
        time: "1 day ago",
        content: "Trying to figure out if the drink package makes financial sense. How many drinks per day would I need to break even?",
        summary: "Boatey AI Summary: Typically need 5-7 drinks per day to break even on most packages. Consider your drinking habits, port days, and whether you want specialty coffees and bottled water included.",
        replies: 20,
        likes: 312
    },
    {
        id: 11,
        title: "Mediterranean Cruise Ports Not to Miss",
        username: "Sophie Martin",
        tier: "diamond",
        avatar: "https://ui-avatars.com/api/?name=Sophie+Martin&background=00AEEF&color=fff&size=64",
        time: "1 day ago",
        content: "Planning a Mediterranean cruise. Which ports are absolute must-sees?",
        summary: "Boatey AI Summary: Top ports include Santorini, Barcelona, Rome (Civitavecchia), Mykonos, and Dubrovnik. Each offers unique culture, history, and stunning scenery.",
        replies: 20,
        likes: 289
    },
    {
        id: 12,
        title: "What to Pack for a 7-Day Cruise",
        username: "Tom Wilson",
        tier: "silver",
        avatar: "https://ui-avatars.com/api/?name=Tom+Wilson&background=001F54&color=fff&size=64",
        time: "2 days ago",
        content: "First cruise coming up! What's the essential packing list for a week-long Caribbean cruise?",
        summary: "Boatey AI Summary: Essentials include swimwear, casual day clothes, formal night attire, comfortable walking shoes, sunscreen, medications, and travel documents. Pack light - laundry services available.",
        replies: 20,
        likes: 234
    },
    {
        id: 13,
        title: "Kids Club Programs - Age Groups and Activities",
        username: "Rachel Green",
        tier: "gold",
        avatar: "https://ui-avatars.com/api/?name=Rachel+Green&background=FF6B6B&color=fff&size=64",
        time: "2 days ago",
        content: "What are the kids club programs like? My kids are 5, 8, and 12. Will they enjoy it?",
        summary: "Boatey AI Summary: Kids clubs are divided by age groups (3-5, 6-8, 9-11, 12-17) with age-appropriate activities. Programs include games, crafts, sports, and themed events. Most kids love it!",
        replies: 20,
        likes: 178
    },
    {
        id: 14,
        title: "Balcony vs Inside Cabin - First Timer",
        username: "David Park",
        tier: "silver",
        avatar: "https://ui-avatars.com/api/?name=David+Park&background=00AEEF&color=fff&size=64",
        time: "3 days ago",
        content: "Is it worth paying extra for a balcony cabin on my first cruise?",
        summary: "Boatey AI Summary: Balcony cabins offer private outdoor space and natural light, great for relaxation. Inside cabins are budget-friendly and you'll spend most time exploring the ship anyway. Consider your budget and preferences.",
        replies: 20,
        likes: 201
    },
    {
        id: 15,
        title: "Tipping Guidelines and Gratuities",
        username: "Lisa Chen",
        tier: "platinum",
        avatar: "https://ui-avatars.com/api/?name=Lisa+Chen&background=001F54&color=fff&size=64",
        time: "3 days ago",
        content: "How does tipping work on cruises? Are gratuities automatically added?",
        summary: "Boatey AI Summary: Most cruise lines automatically add daily gratuities ($14-18 per person). You can adjust these at guest services. Additional tips for exceptional service are always appreciated.",
        replies: 20,
        likes: 156
    },
    {
        id: 16,
        title: "Motion Sickness Prevention Tips",
        username: "Michael Brown",
        tier: "gold",
        avatar: "https://ui-avatars.com/api/?name=Michael+Brown&background=FF6B6B&color=fff&size=64",
        time: "4 days ago",
        content: "I get seasick easily. What are the best ways to prevent motion sickness on a cruise?",
        summary: "Boatey AI Summary: Tips include choosing mid-ship cabins, using wristbands, taking medication before sailing, staying hydrated, avoiding heavy meals, and focusing on the horizon. Modern ships have stabilizers that help significantly.",
        replies: 20,
        likes: 223
    },
    {
        id: 17,
        title: "Formal Night Dress Code - What to Wear",
        username: "Emma Davis",
        tier: "diamond",
        avatar: "https://ui-avatars.com/api/?name=Emma+Davis&background=00AEEF&color=fff&size=64",
        time: "4 days ago",
        content: "What's the dress code for formal nights? Do I need a tuxedo or can I get away with a suit?",
        summary: "Boatey AI Summary: Formal nights typically require cocktail dresses or suits. Tuxedos are optional but welcomed. Some lines are more relaxed - check your specific cruise line's policy. Smart casual is often acceptable.",
        replies: 20,
        likes: 187
    },
    {
        id: 18,
        title: "Best Shore Excursions in Cozumel",
        username: "James Miller",
        tier: "gold",
        avatar: "https://ui-avatars.com/api/?name=James+Miller&background=001F54&color=fff&size=64",
        time: "5 days ago",
        content: "Stopping in Cozumel on our Caribbean cruise. What are the must-do excursions?",
        summary: "Boatey AI Summary: Top Cozumel excursions include snorkeling at Palancar Reef, visiting Tulum ruins, beach breaks at Paradise Beach, and swimming with dolphins. Snorkeling is particularly popular here.",
        replies: 20,
        likes: 245
    },
    {
        id: 19,
        title: "Cruise Ship Size - Mega vs Smaller Ships",
        username: "Sarah Taylor",
        tier: "platinum",
        avatar: "https://ui-avatars.com/api/?name=Sarah+Taylor&background=FF6B6B&color=fff&size=64",
        time: "5 days ago",
        content: "What's the difference between mega ships and smaller ships? Which is better for first-timers?",
        summary: "Boatey AI Summary: Mega ships offer more activities, dining options, and entertainment but can feel crowded. Smaller ships provide more intimate experiences and access to unique ports. First-timers often prefer mega ships for variety.",
        replies: 20,
        likes: 198
    },
    {
        id: 20,
        title: "Travel Insurance for Cruises - Necessary?",
        username: "Robert Kim",
        tier: "silver",
        avatar: "https://ui-avatars.com/api/?name=Robert+Kim&background=00AEEF&color=fff&size=64",
        time: "6 days ago",
        content: "Is travel insurance really necessary for a cruise? What does it typically cover?",
        summary: "Boatey AI Summary: Travel insurance covers trip cancellation, medical emergencies, and evacuation. Highly recommended, especially for expensive trips or if you have health concerns. Cruise lines offer their own policies.",
        replies: 20,
        likes: 134
    },
    {
        id: 21,
        title: "Luggage Delivery and Embarkation Process",
        username: "Maria Garcia",
        tier: "gold",
        avatar: "https://ui-avatars.com/api/?name=Maria+Garcia&background=001F54&color=fff&size=64",
        time: "1 week ago",
        content: "How does luggage work on embarkation day? When will I get my bags?",
        summary: "Boatey AI Summary: You drop off luggage at the terminal (tagged with your cabin number). Bags are delivered to your cabin by evening. Keep essentials in a carry-on. Arrive early to avoid delays.",
        replies: 20,
        likes: 167
    }
];

// Generate replies for each thread
function generateReplies(threadId, count = 20) {
    const replyTemplates = [
        "Great question! I've been on several cruises and...",
        "In my experience, I would recommend...",
        "That's a common concern. Here's what worked for me...",
        "I had a similar situation last year. What I did was...",
        "Based on my research and personal experience...",
        "You should definitely consider...",
        "I've found that the best approach is...",
        "Don't forget to...",
        "One thing I wish I knew before...",
        "My tip would be to..."
    ];

    const names = ["Alex", "Jordan", "Casey", "Morgan", "Riley", "Taylor", "Quinn", "Avery", "Cameron", "Dakota"];
    const tiers = ["silver", "gold", "platinum", "diamond"];
    const times = ["30 minutes ago", "1 hour ago", "2 hours ago", "3 hours ago", "5 hours ago", "1 day ago"];

    const replies = [];
    for (let i = 0; i < count; i++) {
        replies.push({
            name: names[Math.floor(Math.random() * names.length)] + " " + (i + 1),
            tier: tiers[Math.floor(Math.random() * tiers.length)],
            time: times[Math.floor(Math.random() * times.length)],
            content: replyTemplates[Math.floor(Math.random() * replyTemplates.length)] + " " + generateReplyContent(threadId)
        });
    }
    return replies;
}

function generateReplyContent(threadId) {
    const contents = [
        "it made a huge difference in my experience.",
        "the staff was incredibly helpful with this.",
        "I highly recommend doing this early.",
        "this saved me a lot of time and money.",
        "it's worth the extra cost in my opinion.",
        "you won't regret it!",
        "this was the highlight of my trip.",
        "definitely book this in advance.",
        "the quality exceeded my expectations.",
        "I'll be doing this again on my next cruise."
    ];
    return contents[Math.floor(Math.random() * contents.length)];
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { additionalThreads, generateReplies };
}

