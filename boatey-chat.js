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

// Comprehensive Knowledge Base
const knowledgeBase = {
    // Destinations & Excursions
    caribbean: {
        keywords: ['caribbean', 'caribbean excursions', 'tropical', 'beach', 'jamaica', 'bahamas', 'cozumel', 'st. thomas', 'st. maarten'],
        responses: {
            friendly: `The Caribbean offers amazing excursions! Popular options include:\n\n• Snorkeling and diving at coral reefs\n• Beach breaks at pristine islands\n• Zip-lining through tropical forests\n• Catamaran sailing tours\n• Historical tours of colonial cities\n• Rum distillery visits\n• Dolphin encounters\n\nWhich Caribbean destination are you most interested in?`,
            professional: `Caribbean excursions include:\n\n• Snorkeling and scuba diving\n• Beach access and water sports\n• Zip-lining and adventure tours\n• Cultural and historical tours\n• Catamaran and boat tours\n• Rum distillery visits\n• Wildlife encounters\n\nWhich specific destination or activity interests you?`,
            enthusiastic: `The Caribbean is INCREDIBLE! 🏝️ Here are amazing excursions:\n\n• Snorkeling with colorful fish and coral!\n• Beautiful beach breaks!\n• Zip-lining through the jungle!\n• Catamaran tours with drinks!\n• History tours of old cities!\n• Rum tasting (yes please!)\n• Swimming with dolphins!\n\nWhat sounds amazing to you?`,
            calm: `Caribbean excursions offer wonderful experiences:\n\n• Snorkeling and diving opportunities\n• Relaxing beach visits\n• Adventure activities like zip-lining\n• Cultural exploration tours\n• Boat and catamaran excursions\n• Local distillery tours\n• Wildlife interactions\n\nWhat type of experience interests you?`,
            humorous: `Caribbean excursions? 😄 Let's talk fun!\n\n• Snorkeling (fish are way cooler in person)\n• Beach time (because you need that tan)\n• Zip-lining (feel like Tarzan!)\n• Boat tours (with drinks, obviously)\n• History tours (learn while you vacation)\n• Rum tasting (because vacation)\n• Dolphin swims (they're smarter than you think)\n\nWhat catches your eye?`,
            adventurous: `Caribbean adventures await! 🌊\n\n• Scuba diving and snorkeling\n• Jungle zip-lining\n• Catamaran sailing\n• Historical exploration\n• Beach adventures\n• Rum distillery tours\n• Marine wildlife encounters\n\nReady for an adventure?`
        }
    },
    alaska: {
        keywords: ['alaska', 'alaskan', 'alaska excursions', 'glacier', 'juneau', 'skagway', 'ketchikan'],
        responses: {
            friendly: `Alaska cruises offer incredible excursions:\n\n• Glacier viewing and helicopter tours\n• Whale watching tours\n• Dog sledding experiences\n• Salmon fishing\n• Scenic railway journeys\n• Wildlife viewing (bears, eagles, seals)\n• Gold panning and mining tours\n• Native cultural experiences\n\nWhat type of Alaskan adventure interests you?`,
            professional: `Alaska excursions include:\n\n• Glacier tours and helicopter flights\n• Whale watching expeditions\n• Dog sledding experiences\n• Fishing tours\n• Scenic railway journeys\n• Wildlife viewing opportunities\n• Gold panning tours\n• Cultural heritage experiences\n\nWhich activity would you like more information about?`,
            enthusiastic: `Alaska is EPIC! 🏔️ Check out these amazing excursions:\n\n• Glacier helicopter tours (breathtaking!)\n• Whale watching (they're HUGE!)\n• Dog sledding (so cool!)\n• Salmon fishing (fresh catch!)\n• Scenic trains (stunning views!)\n• Bear and eagle viewing!\n• Gold panning (strike it rich!)\n• Native culture tours!\n\nWhat adventure calls to you?`,
            calm: `Alaska offers serene and majestic excursions:\n\n• Glacier viewing and helicopter tours\n• Peaceful whale watching\n• Dog sledding experiences\n• Fishing opportunities\n• Scenic railway journeys\n• Wildlife observation\n• Gold panning activities\n• Cultural learning experiences\n\nWhat resonates with you?`,
            humorous: `Alaska? 😄 Get ready for adventure!\n\n• Glacier tours (ice, ice, baby!)\n• Whale watching (they're the size of buses!)\n• Dog sledding (mush!)\n• Fishing (fresh is best!)\n• Train rides (choo choo through beauty!)\n• Wildlife viewing (bears! eagles!)\n• Gold panning (maybe you'll strike it rich!)\n• Culture tours (learn something cool!)\n\nWhat sounds fun?`,
            adventurous: `Alaska adventures are incredible! 🌊\n\n• Glacier helicopter tours\n• Whale watching expeditions\n• Dog sledding\n• Fishing adventures\n• Scenic railway journeys\n• Wildlife viewing\n• Gold panning\n• Cultural exploration\n\nReady to explore the Last Frontier?`
        }
    },
    mediterranean: {
        keywords: ['mediterranean', 'mediterranean ports', 'europe', 'greece', 'italy', 'spain', 'barcelona', 'rome', 'santorini', 'mykonos'],
        responses: {
            friendly: `Mediterranean ports are amazing! Popular destinations include:\n\n• Barcelona, Spain - architecture and culture\n• Rome, Italy - ancient history and cuisine\n• Santorini, Greece - stunning sunsets\n• Mykonos, Greece - beautiful beaches\n• Dubrovnik, Croatia - historic walled city\n• Naples, Italy - Pompeii and pizza\n• Marseille, France - Provencal charm\n• Venice, Italy - canals and romance\n\nWhich Mediterranean destination interests you?`,
            professional: `Mediterranean ports offer diverse experiences:\n\n• Barcelona - architectural and cultural sites\n• Rome - historical landmarks and cuisine\n• Santorini - scenic views and sunsets\n• Mykonos - beaches and nightlife\n• Dubrovnik - historic architecture\n• Naples - archaeological sites\n• Marseille - French culture\n• Venice - unique canal city\n\nWhich port would you like information about?`,
            enthusiastic: `The Mediterranean is STUNNING! 🏛️ Amazing ports:\n\n• Barcelona (Gaudí architecture!)\n• Rome (ancient history!)\n• Santorini (sunset paradise!)\n• Mykonos (beautiful beaches!)\n• Dubrovnik (Game of Thrones vibes!)\n• Naples (Pompeii and pizza!)\n• Marseille (French charm!)\n• Venice (romantic canals!)\n\nWhich one calls to you?`,
            calm: `Mediterranean ports offer rich cultural experiences:\n\n• Barcelona - art and architecture\n• Rome - ancient history\n• Santorini - peaceful sunsets\n• Mykonos - serene beaches\n• Dubrovnik - historic beauty\n• Naples - archaeological wonders\n• Marseille - Provencal culture\n• Venice - tranquil canals\n\nWhat interests you?`,
            humorous: `Mediterranean? 😄 So much to see!\n\n• Barcelona (wild architecture!)\n• Rome (ancient stuff everywhere!)\n• Santorini (sunset central!)\n• Mykonos (beach party!)\n• Dubrovnik (walk those walls!)\n• Naples (Pompeii and the best pizza!)\n• Marseille (French food, yes!)\n• Venice (gondolas, obviously!)\n\nWhere do you want to go?`,
            adventurous: `Mediterranean exploration awaits! 🌊\n\n• Barcelona - architectural wonders\n• Rome - ancient exploration\n• Santorini - volcanic beauty\n• Mykonos - island adventures\n• Dubrovnik - historic walls\n• Naples - archaeological sites\n• Marseille - cultural discovery\n• Venice - canal exploration\n\nReady to explore?`
        }
    },
    // Dining
    dining: {
        keywords: ['dining', 'restaurant', 'food', 'eat', 'meal', 'cuisine', 'specialty restaurant', 'main dining'],
        responses: {
            friendly: `Onboard dining is fantastic! Options include:\n\n• Main Dining Room - included, multi-course meals\n• Specialty Restaurants - upscale dining (extra fee)\n• Windjammer Buffet - casual, all-day dining\n• Café Promenade - quick snacks and coffee\n• Room Service - 24/7 (some items included)\n• Poolside grills - burgers and casual fare\n• Coffee shops - specialty coffees and pastries\n\nWhat type of dining experience are you looking for?`,
            professional: `Dining options onboard include:\n\n• Main Dining Room - included fine dining\n• Specialty Restaurants - premium dining venues\n• Windjammer - buffet-style dining\n• Café Promenade - casual café\n• Room Service - available 24/7\n• Poolside venues - casual dining\n• Coffee shops - specialty beverages\n\nWhich dining option interests you?`,
            enthusiastic: `The food is AMAZING! 🍽️ Options:\n\n• Main Dining (included fine dining!)\n• Specialty restaurants (upscale deliciousness!)\n• Windjammer (buffet with everything!)\n• Café Promenade (coffee and snacks!)\n• Room Service (24/7 convenience!)\n• Pool grills (burgers by the pool!)\n• Coffee shops (specialty drinks!)\n\nWhat are you craving?`,
            calm: `Dining onboard offers variety:\n\n• Main Dining Room - elegant included meals\n• Specialty restaurants - refined dining\n• Windjammer - casual buffet\n• Café Promenade - light fare\n• Room Service - convenient dining\n• Poolside - casual options\n• Coffee shops - beverages and pastries\n\nWhat appeals to you?`,
            humorous: `Food? 😄 Let's talk!\n\n• Main Dining (fancy, included!)\n• Specialty restaurants (upscale, extra cost but worth it!)\n• Windjammer (buffet paradise!)\n• Café (coffee and snacks!)\n• Room Service (because why leave your room?)\n• Pool grills (burgers while swimming!)\n• Coffee shops (caffeine fixes!)\n\nWhat sounds good?`,
            adventurous: `Dining adventures await! 🌊\n\n• Main Dining - culinary experiences\n• Specialty restaurants - unique flavors\n• Windjammer - diverse options\n• Café Promenade - quick bites\n• Room Service - convenience\n• Poolside - casual dining\n• Coffee shops - specialty beverages\n\nReady to explore the flavors?`
        }
    },
    specialtyRestaurants: {
        keywords: ['specialty restaurant', 'chops grille', 'giovanni', 'izumi', '150 central park', 'wonderland', 'jamie\'s'],
        responses: {
            friendly: `Specialty restaurants are worth it! Popular options:\n\n• Chops Grille - premium steakhouse\n• Giovanni's Table - Italian cuisine\n• Izumi - Japanese and sushi\n• 150 Central Park - fine dining\n• Wonderland - imaginative cuisine\n• Jamie's Italian - casual Italian\n• Sabor - Mexican flavors\n• Hooked Seafood - fresh seafood\n\nReservations recommended! Which cuisine interests you?`,
            professional: `Specialty restaurants available:\n\n• Chops Grille - steakhouse\n• Giovanni's Table - Italian\n• Izumi - Japanese/sushi\n• 150 Central Park - fine dining\n• Wonderland - creative cuisine\n• Jamie's Italian - Italian bistro\n• Sabor - Mexican\n• Hooked Seafood - seafood\n\nAdvanced reservations recommended. Which venue interests you?`,
            enthusiastic: `Specialty restaurants are INCREDIBLE! 🍴\n\n• Chops Grille (amazing steaks!)\n• Giovanni's (authentic Italian!)\n• Izumi (fresh sushi!)\n• 150 Central Park (fine dining!)\n• Wonderland (crazy creative!)\n• Jamie's (casual Italian!)\n• Sabor (Mexican flavors!)\n• Hooked (fresh seafood!)\n\nBook early - they fill up! Which one?`,
            calm: `Specialty restaurants offer refined dining:\n\n• Chops Grille - steakhouse\n• Giovanni's Table - Italian\n• Izumi - Japanese cuisine\n• 150 Central Park - fine dining\n• Wonderland - creative dishes\n• Jamie's Italian - Italian bistro\n• Sabor - Mexican\n• Hooked Seafood - seafood\n\nReservations are advisable. What interests you?`,
            humorous: `Specialty restaurants? 😄 Treat yourself!\n\n• Chops Grille (steaks that melt!)\n• Giovanni's (pasta perfection!)\n• Izumi (sushi skills!)\n• 150 Central Park (fancy fancy!)\n• Wonderland (food as art!)\n• Jamie's (casual Italian!)\n• Sabor (taco time!)\n• Hooked (fish, fresh!)\n\nBook ahead - they're popular! Which one?`,
            adventurous: `Specialty dining adventures! 🌊\n\n• Chops Grille - steakhouse\n• Giovanni's - Italian\n• Izumi - Japanese\n• 150 Central Park - fine dining\n• Wonderland - creative cuisine\n• Jamie's - Italian bistro\n• Sabor - Mexican\n• Hooked - seafood\n\nReserve your culinary adventure!`
        }
    },
    // Packing
    packing: {
        keywords: ['pack', 'packing', 'what to bring', 'luggage', 'clothes', 'essentials'],
        responses: {
            friendly: `Here's a helpful packing list:\n\nEssential Items:\n• Travel documents (passport, ID, boarding pass)\n• Medications and prescriptions\n• Comfortable walking shoes\n• Casual daywear\n• Evening attire (formal nights)\n• Swimwear and cover-ups\n• Sunscreen and hat\n• Camera or smartphone\n• Power adapter (if needed)\n• Small first aid kit\n\nWhat specific items are you wondering about?`,
            professional: `Recommended packing list:\n\nEssential Documents:\n• Passport/ID and boarding documents\n• Medications and prescriptions\n• Travel insurance information\n\nClothing:\n• Comfortable walking shoes\n• Casual daywear\n• Formal evening attire\n• Swimwear\n• Weather-appropriate items\n\nOther:\n• Sunscreen and protective gear\n• Electronics and chargers\n• Basic first aid supplies\n\nWhat specific category do you need guidance on?`,
            enthusiastic: `Packing essentials! 🧳\n\nMust-Haves:\n• Passport and documents (don't forget!)\n• Meds (bring extra!)\n• Comfy shoes (you'll walk a lot!)\n• Casual clothes (daytime fun!)\n• Formal wear (fancy nights!)\n• Swimsuit (pool time!)\n• Sunscreen (protect that skin!)\n• Camera (memories!)\n• Chargers (stay connected!)\n• First aid (just in case!)\n\nWhat else do you need to know?`,
            calm: `Thoughtful packing suggestions:\n\nDocuments:\n• Passport and identification\n• Boarding documents\n• Medications\n\nClothing:\n• Comfortable footwear\n• Casual and formal attire\n• Swimwear\n• Weather-appropriate items\n\nEssentials:\n• Sun protection\n• Electronics\n• Basic medical supplies\n\nWhat would you like more details on?`,
            humorous: `Packing? 😄 Don't overthink it!\n\nEssentials:\n• Passport (you need this!)\n• Meds (bring your pharmacy!)\n• Shoes (comfy ones!)\n• Clothes (casual + fancy!)\n• Swimsuit (pool calls!)\n• Sunscreen (burn = no fun!)\n• Camera (memories matter!)\n• Chargers (dead phone = sad!)\n• First aid (better safe!)\n\nWhat's your packing question?`,
            adventurous: `Pack for adventure! 🌊\n\nEssential Gear:\n• Travel documents\n• Medications\n• Comfortable shoes\n• Versatile clothing\n• Formal attire\n• Swimwear\n• Sun protection\n• Camera equipment\n• Chargers\n• First aid kit\n\nReady to pack smart?`
        }
    },
    // Ships
    ships: {
        keywords: ['ship', 'ships', 'vessel', 'largest ship', 'oasis class', 'quantum class', 'freedom class'],
        responses: {
            friendly: `Royal Caribbean has amazing ships! Classes include:\n\n• Oasis Class - Largest ships (Wonder, Symphony, Harmony, Allure, Oasis)\n• Quantum Class - Innovative features (Quantum, Anthem, Ovation, Spectrum, Odyssey)\n• Freedom Class - Great for families (Freedom, Liberty, Independence)\n• Voyager Class - Popular mid-size ships\n• Radiance Class - Glass architecture\n• Vision Class - Intimate experiences\n\nEach ship has unique features! What interests you?`,
            professional: `Ship classes available:\n\n• Oasis Class - Largest vessels with extensive amenities\n• Quantum Class - Technology-forward ships\n• Freedom Class - Family-friendly options\n• Voyager Class - Mid-size vessels\n• Radiance Class - Glass-focused design\n• Vision Class - Smaller, intimate ships\n\nWhich class or specific ship would you like information about?`,
            enthusiastic: `The ships are HUGE and AMAZING! 🚢\n\n• Oasis Class (biggest ships ever!)\n• Quantum Class (cool tech!)\n• Freedom Class (family fun!)\n• Voyager Class (great size!)\n• Radiance Class (so much glass!)\n• Vision Class (cozy and nice!)\n\nEach one is unique! Which catches your eye?`,
            calm: `Various ship classes offer different experiences:\n\n• Oasis Class - largest ships\n• Quantum Class - innovative features\n• Freedom Class - family-oriented\n• Voyager Class - mid-size\n• Radiance Class - glass architecture\n• Vision Class - intimate\n\nWhat type of experience are you seeking?`,
            humorous: `Ships? 😄 We've got big ones!\n\n• Oasis Class (so big you'll get lost!)\n• Quantum Class (futuristic fun!)\n• Freedom Class (family friendly!)\n• Voyager Class (just right!)\n• Radiance Class (all the windows!)\n• Vision Class (cozy!)\n\nWhich one sounds good?`,
            adventurous: `Explore our fleet! 🌊\n\n• Oasis Class - massive ships\n• Quantum Class - innovative\n• Freedom Class - family adventures\n• Voyager Class - versatile\n• Radiance Class - scenic\n• Vision Class - intimate\n\nWhich ship calls to you?`
        }
    },
    alaskaShips: {
        keywords: ['alaska ship', 'ships to alaska', 'alaska cruise ship', 'quantum alaska', 'ovation alaska', 'radiance alaska'],
        responses: {
            friendly: `Ships sailing to Alaska include:\n\n• Quantum of the Seas - Quantum Class\n• Ovation of the Seas - Quantum Class\n• Radiance of the Seas - Radiance Class\n• Brilliance of the Seas - Radiance Class\n• Serenade of the Seas - Radiance Class\n\nThese ships are perfect for Alaska with great viewing areas! Which ship interests you?`,
            professional: `Alaska itineraries available on:\n\n• Quantum of the Seas - Quantum Class\n• Ovation of the Seas - Quantum Class\n• Radiance of the Seas - Radiance Class\n• Brilliance of the Seas - Radiance Class\n• Serenade of the Seas - Radiance Class\n\nAll feature excellent viewing areas for scenic cruising. Which vessel interests you?`,
            enthusiastic: `Alaska ships are PERFECT for viewing! 🏔️\n\n• Quantum of the Seas (huge and amazing!)\n• Ovation of the Seas (Quantum class!)\n• Radiance of the Seas (so much glass!)\n• Brilliance of the Seas (great views!)\n• Serenade of the Seas (scenic!)\n\nAll have awesome viewing areas! Which one?`,
            calm: `Alaska cruises available on:\n\n• Quantum of the Seas\n• Ovation of the Seas\n• Radiance of the Seas\n• Brilliance of the Seas\n• Serenade of the Seas\n\nThese ships offer excellent scenic viewing. Which interests you?`,
            humorous: `Alaska ships? 😄 Great for glaciers!\n\n• Quantum (big and comfy!)\n• Ovation (Quantum class!)\n• Radiance (all the windows!)\n• Brilliance (bright views!)\n• Serenade (peaceful!)\n\nPerfect for Alaska viewing! Which ship?`,
            adventurous: `Alaska fleet options: 🌊\n\n• Quantum of the Seas\n• Ovation of the Seas\n• Radiance of the Seas\n• Brilliance of the Seas\n• Serenade of the Seas\n\nAll optimized for scenic Alaska cruising!`
        }
    },
    // Entertainment
    entertainment: {
        keywords: ['entertainment', 'show', 'shows', 'theater', 'broadway', 'comedy', 'music', 'performance'],
        responses: {
            friendly: `Entertainment onboard is fantastic! Options include:\n\n• Broadway-style musicals\n• Ice skating shows\n• Aqua theater performances\n• Comedy shows\n• Live music venues\n• Nightclub and dancing\n• Game shows and trivia\n• Outdoor movies\n\nShows are included and amazing! Which type interests you?`,
            professional: `Entertainment options include:\n\n• Broadway-style productions\n• Ice skating performances\n• Aqua theater shows\n• Comedy performances\n• Live music venues\n• Nightclub entertainment\n• Interactive game shows\n• Outdoor cinema\n\nAll included in your cruise fare. Which interests you?`,
            enthusiastic: `The entertainment is INCREDIBLE! 🎭\n\n• Broadway shows (West End quality!)\n• Ice shows (so cool!)\n• Aqua theater (water acrobatics!)\n• Comedy (laugh your head off!)\n• Live music (everywhere!)\n• Nightclubs (dance the night away!)\n• Game shows (interactive fun!)\n• Movies (under the stars!)\n\nAll included! What sounds fun?`,
            calm: `Entertainment offerings include:\n\n• Broadway-style musicals\n• Ice skating shows\n• Aqua theater performances\n• Comedy shows\n• Live music\n• Nightclub venues\n• Interactive games\n• Outdoor movies\n\nAll included. What interests you?`,
            humorous: `Entertainment? 😄 There's so much!\n\n• Broadway shows (fancy!)\n• Ice shows (cool, literally!)\n• Aqua theater (water stunts!)\n• Comedy (laughs guaranteed!)\n• Music (live bands!)\n• Nightclubs (party time!)\n• Game shows (participate!)\n• Movies (relaxing!)\n\nAll free! What catches your eye?`,
            adventurous: `Entertainment adventures! 🌊\n\n• Broadway productions\n• Ice performances\n• Aqua theater\n• Comedy shows\n• Live music\n• Nightlife\n• Interactive games\n• Outdoor cinema\n\nAll included in your adventure!`
        }
    },
    // WiFi & Technology
    wifi: {
        keywords: ['wifi', 'wi-fi', 'internet', 'internet package', 'surf', 'stream', 'voom', 'connectivity'],
        responses: {
            friendly: `WiFi packages available:\n\n• Surf - Basic internet for messaging and email\n• Surf & Stream - High-speed for streaming and video calls\n\nPackages can be purchased:\n• Per device (one device at a time)\n• For multiple devices\n• For the entire cruise duration\n\nSpeed varies by ship and location. Need help choosing a package?`,
            professional: `Internet packages:\n\n• Surf - Basic connectivity for messaging/email\n• Surf & Stream - High-speed for streaming/video\n\nPurchase options:\n• Single device\n• Multiple devices\n• Full cruise duration\n\nConnection quality varies by ship location. Which package meets your needs?`,
            enthusiastic: `WiFi options! 📶\n\n• Surf (basic, for messaging!)\n• Surf & Stream (fast, for streaming!)\n\nYou can get:\n• One device\n• Multiple devices\n• Full cruise\n\nSpeed depends on ship and where you are! Need help picking?`,
            calm: `Internet packages available:\n\n• Surf - basic connectivity\n• Surf & Stream - high-speed\n\nOptions for single or multiple devices, full cruise duration. Connection quality varies by location. What are your connectivity needs?`,
            humorous: `WiFi? 😄 Stay connected!\n\n• Surf (basic, email and messages!)\n• Surf & Stream (fast, Netflix and calls!)\n\nGet it for one device, multiple, or whole cruise. Speed varies (you're on a ship in the ocean!). What do you need?`,
            adventurous: `Stay connected at sea! 🌊\n\n• Surf - basic internet\n• Surf & Stream - high-speed\n\nSingle or multi-device, full cruise options. Connection varies by location.`
        }
    },
    // Drink Packages
    drinks: {
        keywords: ['drink package', 'drinks package', 'beverage package', 'alcohol', 'cocktail', 'soda package', 'deluxe beverage'],
        responses: {
            friendly: `Drink packages available:\n\n• Deluxe Beverage Package - Unlimited alcoholic and non-alcoholic drinks\n• Refreshment Package - Non-alcoholic premium drinks\n• Classic Soda Package - Unlimited fountain sodas\n\nPackages include:\n• Cocktails, wine, beer\n• Specialty coffee and tea\n• Fresh-squeezed juices\n• Bottled water\n• Fountain sodas\n\nWant to know which package is right for you?`,
            professional: `Beverage package options:\n\n• Deluxe Beverage Package - Unlimited alcoholic and non-alcoholic beverages\n• Refreshment Package - Premium non-alcoholic beverages\n• Classic Soda Package - Unlimited fountain sodas\n\nInclusions vary by package. Which package interests you?`,
            enthusiastic: `Drink packages! 🍹\n\n• Deluxe (unlimited everything!)\n• Refreshment (premium non-alcohol!)\n• Soda (unlimited sodas!)\n\nIncludes cocktails, wine, beer, coffee, juice, water, sodas! Which one sounds good?`,
            calm: `Beverage packages:\n\n• Deluxe - unlimited alcoholic and non-alcoholic\n• Refreshment - premium non-alcoholic\n• Classic Soda - unlimited sodas\n\nVarious beverages included. What are your preferences?`,
            humorous: `Drink packages? 😄 Let's talk!\n\n• Deluxe (unlimited drinks, yes!)\n• Refreshment (fancy non-alcohol!)\n• Soda (unlimited fizz!)\n\nCocktails, wine, beer, coffee, juice, water included! Which one?`,
            adventurous: `Beverage packages: 🌊\n\n• Deluxe - unlimited beverages\n• Refreshment - premium non-alcohol\n• Classic Soda - unlimited sodas\n\nIncludes cocktails, wine, coffee, and more!`
        }
    },
    // Cabin Types
    cabin: {
        keywords: ['cabin', 'cabin type', 'room', 'stateroom', 'suite', 'balcony', 'oceanview', 'interior', 'inside cabin'],
        responses: {
            friendly: `Cabin types available:\n\n• Interior - Windowless, most affordable\n• Ocean View - Window with ocean view\n• Balcony - Private balcony, popular choice\n• Suite - Spacious with extra amenities\n• Virtual Balcony - Interior with virtual window\n• Connected Rooms - For families/groups\n\nEach type offers different amenities. What's your preference?`,
            professional: `Stateroom categories:\n\n• Interior - No window, budget-friendly\n• Ocean View - Window with view\n• Balcony - Private balcony access\n• Suite - Premium accommodations\n• Virtual Balcony - Interior with screen\n• Connected - Multiple room options\n\nAmenities vary by category. Which interests you?`,
            enthusiastic: `Cabin options! 🛏️\n\n• Interior (affordable!)\n• Ocean View (see the ocean!)\n• Balcony (private outdoor space!)\n• Suite (fancy and spacious!)\n• Virtual Balcony (cool tech!)\n• Connected (for groups!)\n\nEach has different perks! What sounds good?`,
            calm: `Stateroom options:\n\n• Interior - affordable\n• Ocean View - natural light\n• Balcony - private outdoor space\n• Suite - premium accommodations\n• Virtual Balcony - interior with technology\n• Connected - multiple rooms\n\nWhat type appeals to you?`,
            humorous: `Cabins? 😄 Let's find your perfect room!\n\n• Interior (dark and cozy!)\n• Ocean View (see that water!)\n• Balcony (your own outdoor space!)\n• Suite (fancy!)\n• Virtual Balcony (futuristic!)\n• Connected (room for everyone!)\n\nWhich one calls to you?`,
            adventurous: `Stateroom adventures: 🌊\n\n• Interior - budget-friendly\n• Ocean View - scenic\n• Balcony - outdoor access\n• Suite - premium\n• Virtual Balcony - tech-enhanced\n• Connected - group options\n\nChoose your base!`
        }
    },
    // Spa & Wellness
    spa: {
        keywords: ['spa', 'massage', 'wellness', 'fitness', 'gym', 'salon', 'treatment', 'relax'],
        responses: {
            friendly: `Spa and wellness services include:\n\n• Massages (Swedish, deep tissue, hot stone)\n• Facials and skin treatments\n• Body wraps and scrubs\n• Acupuncture and acupuncture\n• Fitness center access (included)\n• Yoga and fitness classes\n• Hair salon services\n• Nail services\n• Thermal suite access\n\nTreatments are extra but so relaxing! Interested in any service?`,
            professional: `Spa services available:\n\n• Massage therapies\n• Facial treatments\n• Body treatments\n• Acupuncture services\n• Fitness facilities (included)\n• Fitness classes\n• Salon services\n• Nail services\n• Thermal suite access\n\nServices are à la carte. Which interests you?`,
            enthusiastic: `Spa services are AMAZING! 💆\n\n• Massages (so relaxing!)\n• Facials (glowing skin!)\n• Body treatments (pamper yourself!)\n• Acupuncture (healing!)\n• Gym (included, stay fit!)\n• Fitness classes (work out!)\n• Salon (look good!)\n• Nails (mani-pedi!)\n• Thermal suite (steam and relax!)\n\nTreat yourself! What sounds good?`,
            calm: `Spa and wellness offerings:\n\n• Massage therapies\n• Facial treatments\n• Body treatments\n• Acupuncture\n• Fitness center (included)\n• Fitness classes\n• Salon services\n• Nail services\n• Thermal suite\n\nAdditional fees apply. What interests you?`,
            humorous: `Spa? 😄 Treat yo self!\n\n• Massages (relaxation central!)\n• Facials (glow up!)\n• Body treatments (pamper time!)\n• Acupuncture (healing!)\n• Gym (included, no excuse!)\n• Classes (get moving!)\n• Salon (look fancy!)\n• Nails (pretty hands!)\n• Thermal suite (steam room!)\n\nWhat calls to you?`,
            adventurous: `Wellness adventures: 🌊\n\n• Massage therapies\n• Facial treatments\n• Body treatments\n• Acupuncture\n• Fitness center\n• Fitness classes\n• Salon services\n• Nail services\n• Thermal suite\n\nEnhance your cruise experience!`
        }
    },
    // Kids Activities
    kids: {
        keywords: ['kids', 'children', 'children activities', 'kids club', 'teen', 'family', 'adventure ocean'],
        responses: {
            friendly: `Kids programs are fantastic! Options include:\n\n• Adventure Ocean - Ages 3-17, age-appropriate activities\n• Babies & Tots - Under 3, parent-supervised\n• Teen programs - Dedicated teen spaces\n• Family activities - Activities for all ages\n• Character experiences - Meet DreamWorks characters\n• Arcade and games\n• Sports activities\n• Arts and crafts\n\nAll included! What age group are you asking about?`,
            professional: `Youth programs available:\n\n• Adventure Ocean - Ages 3-17, structured programs\n• Babies & Tots - Under 3, supervised play\n• Teen programs - Ages 12-17\n• Family activities - All ages\n• Character experiences - DreamWorks\n• Arcade facilities\n• Sports programs\n• Creative activities\n\nAll included. Which age group?`,
            enthusiastic: `Kids programs are AWESOME! 👶\n\n• Adventure Ocean (ages 3-17, so fun!)\n• Babies & Tots (under 3, cute!)\n• Teen programs (12-17, cool!)\n• Family activities (everyone together!)\n• Characters (DreamWorks friends!)\n• Arcade (games galore!)\n• Sports (get active!)\n• Arts & crafts (get creative!)\n\nAll included! What age?`,
            calm: `Youth programs:\n\n• Adventure Ocean - ages 3-17\n• Babies & Tots - under 3\n• Teen programs - 12-17\n• Family activities\n• Character experiences\n• Arcade\n• Sports\n• Creative activities\n\nAll included. Which age group interests you?`,
            humorous: `Kids activities? 😄 They'll love it!\n\n• Adventure Ocean (3-17, so much fun!)\n• Babies & Tots (under 3, supervised!)\n• Teens (12-17, their own space!)\n• Family time (all together!)\n• Characters (meet Shrek!)\n• Arcade (games!)\n• Sports (burn energy!)\n• Crafts (creative!)\n\nAll free! What age?`,
            adventurous: `Youth adventures: 🌊\n\n• Adventure Ocean - 3-17\n• Babies & Tots - under 3\n• Teen programs - 12-17\n• Family activities\n• Character experiences\n• Arcade\n• Sports\n• Creative activities\n\nAll included adventures!`
        }
    },
    // Tipping & Gratuities
    tipping: {
        keywords: ['tip', 'tipping', 'gratuity', 'gratuities', 'service charge'],
        responses: {
            friendly: `Tipping information:\n\n• Automatic gratuities are added daily (typically $14-18 per person per day)\n• Covers dining room, stateroom, and other service staff\n• Can be prepaid or added to onboard account\n• Can be adjusted at Guest Services\n• Additional tips for exceptional service are appreciated\n• Specialty restaurants may include gratuity in cover charge\n\nGratuities ensure excellent service! Have questions?`,
            professional: `Gratuity policy:\n\n• Automatic daily gratuities ($14-18/person/day)\n• Covers dining and housekeeping services\n• Prepaid or onboard account options\n• Adjustable at Guest Services\n• Additional tips optional\n• Specialty restaurants may include gratuity\n\nWhich aspect would you like more information about?`,
            enthusiastic: `Tipping info! 💰\n\n• Automatic gratuities ($14-18/day per person!)\n• Covers dining and room service!\n• Can prepay or add onboard!\n• Adjust at Guest Services if needed!\n• Extra tips appreciated for great service!\n• Specialty restaurants may include it!\n\nEasy and ensures great service! Questions?`,
            calm: `Gratuity information:\n\n• Automatic daily charges ($14-18/person/day)\n• Covers service staff\n• Prepaid or onboard options\n• Adjustable if needed\n• Additional tips optional\n• Specialty venues may include gratuity\n\nWhat would you like to know?`,
            humorous: `Tipping? 😄 Here's the deal!\n\n• Auto gratuities ($14-18/day per person)\n• Covers dining and housekeeping\n• Prepay or add onboard\n• Adjust at Guest Services (if needed)\n• Extra tips (always appreciated!)\n• Specialty restaurants (may include it)\n\nKeeps service great! Questions?`,
            adventurous: `Gratuity guide: 🌊\n\n• Automatic daily ($14-18/person/day)\n• Covers service staff\n• Prepaid or onboard\n• Adjustable\n• Additional tips optional\n• Specialty venues included\n\nEnsures excellent service!`
        }
    },
    // Best Times to Cruise
    bestTime: {
        keywords: ['best time', 'when to cruise', 'season', 'weather', 'hurricane season', 'peak season', 'off season'],
        responses: {
            friendly: `Best times to cruise vary by destination:\n\nCaribbean:\n• Peak: December-April (dry season, warm)\n• Shoulder: May, November (good weather, fewer crowds)\n• Hurricane season: June-October (lower prices, warmer)\n\nAlaska:\n• Peak: June-August (warmest, longest days)\n• Shoulder: May, September (cooler, fewer crowds)\n\nMediterranean:\n• Peak: May-September (warm, sunny)\n• Shoulder: April, October (milder, less crowded)\n\nWhat destination are you considering?`,
            professional: `Optimal cruise timing by region:\n\nCaribbean:\n• Peak: December-April\n• Shoulder: May, November\n• Low: June-October (hurricane season)\n\nAlaska:\n• Peak: June-August\n• Shoulder: May, September\n\nMediterranean:\n• Peak: May-September\n• Shoulder: April, October\n\nWhich destination interests you?`,
            enthusiastic: `Best times to cruise! 📅\n\nCaribbean:\n• Peak (Dec-Apr, perfect weather!)\n• Shoulder (May, Nov, good deals!)\n• Hurricane season (Jun-Oct, cheaper!)\n\nAlaska:\n• Peak (Jun-Aug, warmest!)\n• Shoulder (May, Sep, fewer people!)\n\nMediterranean:\n• Peak (May-Sep, sunny!)\n• Shoulder (Apr, Oct, milder!)\n\nWhat destination?`,
            calm: `Cruise timing by destination:\n\nCaribbean:\n• Peak: December-April\n• Shoulder: May, November\n• Low: June-October\n\nAlaska:\n• Peak: June-August\n• Shoulder: May, September\n\nMediterranean:\n• Peak: May-September\n• Shoulder: April, October\n\nWhat region interests you?`,
            humorous: `Best times? 😄 Depends where!\n\nCaribbean:\n• Peak (Dec-Apr, perfect!)\n• Shoulder (May, Nov, deals!)\n• Hurricane (Jun-Oct, cheaper but riskier!)\n\nAlaska:\n• Peak (Jun-Aug, warmest!)\n• Shoulder (May, Sep, cooler!)\n\nMediterranean:\n• Peak (May-Sep, sunny!)\n• Shoulder (Apr, Oct, milder!)\n\nWhere you going?`,
            adventurous: `Cruise timing adventures: 🌊\n\nCaribbean: Dec-Apr peak, May/Nov shoulder, Jun-Oct low\nAlaska: Jun-Aug peak, May/Sep shoulder\nMediterranean: May-Sep peak, Apr/Oct shoulder\n\nChoose your adventure timing!`
        }
    },
    // Formal Nights
    formal: {
        keywords: ['formal night', 'formal nights', 'formal attire', 'dress code', 'elegant night', 'gala night'],
        responses: {
            friendly: `Formal nights are special evenings!\n\n• Typically 1-2 per cruise (7+ night cruises)\n• Dress code: Cocktail dresses, suits, or tuxedos\n• Some lines are more relaxed - smart casual often acceptable\n• Main dining room enforces dress code\n• Specialty restaurants may have different requirements\n• Photos taken on formal nights\n• Enjoy special menus and entertainment\n\nIt's a chance to dress up and feel elegant! Want more details?`,
            professional: `Formal night information:\n\n• Frequency: 1-2 nights per cruise (7+ nights)\n• Attire: Cocktail dresses, suits, tuxedos\n• Flexibility: Smart casual often acceptable\n• Dining: Main dining room dress code\n• Venues: Specialty restaurants vary\n• Photography: Formal portraits available\n• Experience: Enhanced menus and entertainment\n\nWhich aspect would you like more information about?`,
            enthusiastic: `Formal nights are FANCY! 👗\n\n• 1-2 per cruise (dress up!)\n• Cocktail dresses, suits, tuxedos!\n• Some ships are more relaxed!\n• Main dining (enforced!)\n• Specialty restaurants (check requirements!)\n• Photos (look good!)\n• Special menus (fancy food!)\n\nGet dressed up and enjoy! More info?`,
            calm: `Formal nights:\n\n• 1-2 nights per cruise\n• Cocktail/suit/tuxedo attire\n• Some flexibility with smart casual\n• Main dining dress code\n• Venue-specific requirements\n• Photography available\n• Enhanced dining experience\n\nWhat would you like to know?`,
            humorous: `Formal nights? 😄 Dress to impress!\n\n• 1-2 per cruise (fancy time!)\n• Cocktail dresses, suits, tuxes!\n• Some ships relaxed (smart casual ok!)\n• Main dining (they check!)\n• Specialty restaurants (varies!)\n• Photos (smile!)\n• Fancy food (treat yourself!)\n\nGet fancy! Questions?`,
            adventurous: `Formal night adventures: 🌊\n\n• 1-2 nights per cruise\n• Cocktail/suit/tuxedo\n• Smart casual options\n• Main dining code\n• Venue requirements\n• Photography\n• Enhanced experience\n\nDress for adventure!`
        }
    },
    // Travel Documents
    documents: {
        keywords: ['documents', 'passport', 'visa', 'id', 'travel documents', 'birth certificate', 'documentation'],
        responses: {
            friendly: `Required documents vary by itinerary:\n\nClosed-loop cruises (US round-trip):\n• Government-issued ID + birth certificate OR\n• Valid passport (recommended)\n\nInternational cruises:\n• Valid passport (required)\n• May need visas depending on countries\n\nAlways bring:\n• Boarding pass\n• Travel insurance (recommended)\n• Credit card for onboard account\n• Medications and prescriptions\n\nCheck requirements for your specific cruise! Need help?`,
            professional: `Document requirements:\n\nClosed-loop (US round-trip):\n• Government ID + birth certificate, OR\n• Valid passport (recommended)\n\nInternational:\n• Valid passport (required)\n• Visas as required by itinerary\n\nEssential:\n• Boarding documents\n• Travel insurance\n• Payment method\n• Medical documentation\n\nVerify requirements for your specific itinerary.`,
            enthusiastic: `Documents needed! 📋\n\nClosed-loop (US round-trip):\n• ID + birth certificate OR passport!\n• Passport recommended!\n\nInternational:\n• Passport required!\n• Visas (check itinerary!)\n\nAlways bring:\n• Boarding pass!\n• Travel insurance!\n• Credit card!\n• Meds and prescriptions!\n\nCheck your specific cruise requirements!`,
            calm: `Document requirements:\n\nClosed-loop:\n• Government ID + birth certificate, OR\n• Passport (recommended)\n\nInternational:\n• Passport required\n• Visas as needed\n\nEssential items:\n• Boarding documents\n• Travel insurance\n• Payment method\n• Medical information\n\nVerify for your specific cruise.`,
            humorous: `Documents? 😄 Don't forget!\n\nClosed-loop:\n• ID + birth certificate OR passport\n• Passport is easier!\n\nInternational:\n• Passport (you need this!)\n• Visas (check if needed!)\n\nBring:\n• Boarding pass (obviously!)\n• Travel insurance (just in case!)\n• Credit card (for fun!)\n• Meds (important!)\n\nCheck your specific cruise!`,
            adventurous: `Travel document guide: 🌊\n\nClosed-loop: ID + birth cert OR passport\nInternational: Passport required + visas\nEssential: Boarding docs, insurance, payment, medical\n\nPrepare for your adventure!`
        }
    },
    // Loyalty Points
    earnPoints: {
        keywords: ['earn points', 'earning points', 'loyalty points', 'crown anchor points', 'how to earn', 'points strategy'],
        responses: {
            friendly: `Ways to earn Crown & Anchor points:\n\n• 1 point per night sailed (all guests)\n• Double points for solo travelers in double-occupancy cabins\n• Suite bookings earn double points\n• Points never expire\n• Points are per person, not per booking\n\nTips to maximize:\n• Book longer cruises\n• Stay in suites\n• Cruise during double-point promotions\n• Use RCG credit card for bonus points\n\nWant tips on reaching the next tier?`,
            professional: `Points earning structure:\n\n• 1 point per cruise night\n• Double points for solo travelers (double-occupancy)\n• Double points for suite accommodations\n• Points do not expire\n• Calculated per person\n\nMaximization strategies:\n• Longer cruises\n• Suite bookings\n• Promotional periods\n• Co-branded credit card usage\n\nWhich tier are you working toward?`,
            enthusiastic: `Earn points fast! 🎯\n\n• 1 point per night (everyone!)\n• Double for solo travelers!\n• Double for suites!\n• Points never expire!\n• Per person, not booking!\n\nMaximize:\n• Longer cruises (more points!)\n• Suites (double points!)\n• Promotions (double points!)\n• RCG credit card (bonus points!)\n\nWant tier strategies?`,
            calm: `Points earning:\n\n• 1 point per night\n• Double for solo (double-occupancy)\n• Double for suites\n• No expiration\n• Per person\n\nMaximize with:\n• Longer cruises\n• Suite bookings\n• Promotions\n• Credit card usage\n\nWhat tier are you aiming for?`,
            humorous: `Earn points? 😄 Let's rack 'em up!\n\n• 1 point per night (easy!)\n• Double for solo (bonus!)\n• Double for suites (fancy!)\n• Never expire (forever!)\n• Per person (not booking!)\n\nMaximize:\n• Longer cruises (more nights!)\n• Suites (double!)\n• Promotions (double points!)\n• Credit card (bonus!)\n\nWant tips?`,
            adventurous: `Points earning adventures: 🌊\n\n• 1 point per night\n• Double for solo/suites\n• No expiration\n• Per person\n\nMaximize: Longer cruises, suites, promotions, credit card\n\nChart your course to the next tier!`
        }
    },
    // Shopping
    shopping: {
        keywords: ['shopping', 'shop', 'stores', 'boutique', 'duty free', 'jewelry', 'souvenirs'],
        responses: {
            friendly: `Onboard shopping includes:\n\n• Duty-free shops (perfume, cosmetics, alcohol)\n• Jewelry stores (watches, diamonds, gems)\n• Clothing and accessories\n• Souvenirs and gifts\n• Electronics and cameras\n• Art auctions\n• Logo merchandise\n\nDuty-free prices are competitive! Shopping is a popular onboard activity. What are you looking for?`,
            professional: `Shopping venues:\n\n• Duty-free shops\n• Jewelry stores\n• Fashion and accessories\n• Souvenirs\n• Electronics\n• Art galleries\n• Branded merchandise\n\nDuty-free pricing available. Which category interests you?`,
            enthusiastic: `Shopping onboard! 🛍️\n\n• Duty-free (perfume, cosmetics, alcohol!)\n• Jewelry (watches, diamonds!)\n• Clothing (fashion!)\n• Souvenirs (gifts!)\n• Electronics (cameras!)\n• Art (auctions!)\n• Logo merch (branded stuff!)\n\nGreat prices! What are you shopping for?`,
            calm: `Shopping options:\n\n• Duty-free shops\n• Jewelry stores\n• Fashion and accessories\n• Souvenirs\n• Electronics\n• Art galleries\n• Branded merchandise\n\nDuty-free available. What interests you?`,
            humorous: `Shopping? 😄 Retail therapy at sea!\n\n• Duty-free (perfume, booze!)\n• Jewelry (sparkly things!)\n• Clothing (look good!)\n• Souvenirs (remember the trip!)\n• Electronics (gadgets!)\n• Art (fancy!)\n• Logo stuff (branded!)\n\nGood prices! What catches your eye?`,
            adventurous: `Shopping adventures: 🌊\n\n• Duty-free shops\n• Jewelry stores\n• Fashion\n• Souvenirs\n• Electronics\n• Art galleries\n• Branded merchandise\n\nExplore the shops!`
        }
    },
    // Seasickness
    seasickness: {
        keywords: ['seasick', 'seasickness', 'motion sickness', 'nausea', 'avoid seasick', 'prevent seasick', 'medication'],
        responses: {
            friendly: `Tips to avoid seasickness:\n\n• Choose mid-ship, lower deck cabins (less motion)\n• Book larger ships (more stable)\n• Take medication before sailing (Dramamine, Bonine)\n• Use wristbands or patches\n• Stay hydrated\n• Avoid heavy meals initially\n• Focus on horizon\n• Get fresh air\n• Modern ships have stabilizers (less motion)\n\nMost people adapt quickly! Need medication recommendations?`,
            professional: `Seasickness prevention:\n\n• Cabin selection: Mid-ship, lower decks\n• Ship size: Larger vessels more stable\n• Medication: Pre-trip consultation recommended\n• Wristbands/acupressure\n• Hydration important\n• Light meals initially\n• Horizon focus\n• Fresh air access\n• Ship stabilizers reduce motion\n\nConsult physician for medication.`,
            enthusiastic: `Avoid seasickness! 💊\n\n• Mid-ship, lower cabins (less motion!)\n• Bigger ships (more stable!)\n• Medication (Dramamine, Bonine!)\n• Wristbands (acupressure!)\n• Stay hydrated (water!)\n• Light meals (start easy!)\n• Look at horizon (focus!)\n• Fresh air (breathe!)\n• Stabilizers (ships have them!)\n\nMost adapt quickly! Need med tips?`,
            calm: `Seasickness prevention:\n\n• Mid-ship, lower deck cabins\n• Larger ships\n• Pre-trip medication\n• Wristbands\n• Hydration\n• Light meals\n• Horizon focus\n• Fresh air\n• Ship stabilizers\n\nMost adjust within a day.`,
            humorous: `Seasickness? 😄 Beat it!\n\n• Mid-ship, lower (less rocking!)\n• Big ships (more stable!)\n• Meds (Dramamine, Bonine!)\n• Wristbands (magic bands!)\n• Water (stay hydrated!)\n• Light food (start small!)\n• Horizon (look out!)\n• Air (breathe fresh!)\n• Stabilizers (tech helps!)\n\nMost feel better fast!`,
            adventurous: `Seasickness prevention: 🌊\n\n• Mid-ship, lower cabins\n• Larger ships\n• Medication\n• Wristbands\n• Hydration\n• Light meals\n• Horizon focus\n• Fresh air\n• Stabilizers\n\nSail comfortably!`
        }
    },
    // Cruise Line Comparison
    cruiseLines: {
        keywords: ['cruise line', 'cruise lines', 'royal caribbean vs', 'celebrity', 'silversea', 'difference', 'compare', 'which cruise line'],
        responses: {
            friendly: `Royal Caribbean Group brands:\n\n• Royal Caribbean International - Family-friendly, activities, larger ships\n• Celebrity Cruises - Premium, modern luxury, sophisticated\n• Silversea - Ultra-luxury, all-inclusive, intimate ships\n\nKey differences:\n• Royal Caribbean: More activities, casual, great for families\n• Celebrity: More refined, better dining, quieter\n• Silversea: Most luxurious, smallest ships, all-inclusive\n\nWhat type of experience are you looking for?`,
            professional: `Brand comparison:\n\n• Royal Caribbean International - Family-oriented, activity-focused\n• Celebrity Cruises - Premium, modern luxury\n• Silversea - Ultra-luxury, all-inclusive\n\nDifferentiators:\n• Royal Caribbean: Activities, casual atmosphere, families\n• Celebrity: Refined experience, premium dining, adults\n• Silversea: Luxury, intimate, all-inclusive\n\nWhich brand aligns with your preferences?`,
            enthusiastic: `Brand differences! 🚢\n\n• Royal Caribbean (family fun, activities!)\n• Celebrity (premium, sophisticated!)\n• Silversea (ultra-luxury, all-inclusive!)\n\nRoyal Caribbean: Activities, casual, families!\nCelebrity: Refined, great food, quieter!\nSilversea: Fanciest, small ships, everything included!\n\nWhat experience do you want?`,
            calm: `Brand offerings:\n\n• Royal Caribbean - Family, activities\n• Celebrity - Premium, refined\n• Silversea - Ultra-luxury, intimate\n\nRoyal Caribbean: Active, casual, families\nCelebrity: Sophisticated, premium dining\nSilversea: Luxury, all-inclusive, small\n\nWhat appeals to you?`,
            humorous: `Cruise lines? 😄 Let's compare!\n\n• Royal Caribbean (fun, families, activities!)\n• Celebrity (fancy, refined, quiet!)\n• Silversea (ultra-fancy, small, everything included!)\n\nRoyal: Play, casual, kids welcome!\nCelebrity: Sophisticated, great food, adults!\nSilversea: Luxury, intimate, all-inclusive!\n\nWhat's your style?`,
            adventurous: `Brand adventures: 🌊\n\n• Royal Caribbean - Family, activities\n• Celebrity - Premium, refined\n• Silversea - Ultra-luxury, intimate\n\nChoose your adventure style!`
        }
    },
    // Deals & Booking
    deals: {
        keywords: ['deal', 'deals', 'sale', 'discount', 'promotion', 'best price', 'cheap', 'affordable'],
        responses: {
            friendly: `Ways to find great deals:\n\n• Book early (best prices and cabin selection)\n• Last-minute deals (if flexible)\n• Shoulder season (lower prices, good weather)\n• Repositioning cruises (unique itineraries, lower cost)\n• Group rates (traveling with others)\n• Loyalty discounts (member rates)\n• Military discounts (if applicable)\n• Resident rates (certain states)\n\nSign up for email alerts for promotions! Looking for a specific destination?`,
            professional: `Deal opportunities:\n\n• Early booking discounts\n• Last-minute availability\n• Shoulder season pricing\n• Repositioning cruises\n• Group rates\n• Loyalty member rates\n• Military discounts\n• Resident rates\n\nSubscribe to promotional communications. Which destination interests you?`,
            enthusiastic: `Find deals! 💰\n\n• Book early (best prices!)\n• Last-minute (if flexible!)\n• Shoulder season (good deals!)\n• Repositioning (unique, cheaper!)\n• Groups (travel together!)\n• Loyalty (member rates!)\n• Military (discounts!)\n• Resident (state rates!)\n\nSign up for alerts! What destination?`,
            calm: `Deal opportunities:\n\n• Early booking\n• Last-minute\n• Shoulder season\n• Repositioning\n• Group rates\n• Loyalty discounts\n• Military rates\n• Resident rates\n\nSubscribe for promotions. What interests you?`,
            humorous: `Deals? 😄 Let's find 'em!\n\n• Book early (save money!)\n• Last-minute (if you're flexible!)\n• Shoulder season (good prices!)\n• Repositioning (unique trips!)\n• Groups (travel with friends!)\n• Loyalty (member perks!)\n• Military (discounts!)\n• Resident (state deals!)\n\nSign up for emails! Where to?`,
            adventurous: `Deal adventures: 🌊\n\n• Early booking\n• Last-minute\n• Shoulder season\n• Repositioning\n• Group rates\n• Loyalty discounts\n• Military rates\n• Resident rates\n\nDiscover your deal!`
        }
    },
    // Forum Summaries
    forum: {
        keywords: ['forum', 'summarize', 'summary', 'discussion', 'thread', 'community'],
        responses: {
            friendly: `I'd be happy to summarize forum threads for you! Which thread would you like me to summarize? You can click on any thread in the forum and I'll provide a quick summary of the key points and insights!`,
            professional: `I can assist you with forum thread summarization. Please specify which thread you would like me to summarize. I will provide a concise overview of the key points and insights.`,
            enthusiastic: `I'd LOVE to summarize forum threads for you! Just point me to any thread and I'll give you an awesome summary with all the key points!`,
            calm: `I can help you summarize forum threads. Which thread would you like me to review? I'll provide a thoughtful overview of the main points and insights.`,
            humorous: `Want me to summarize a thread? I'm like a cruise forum CliffNotes! Just tell me which one and I'll give you the highlights!`,
            adventurous: `Ready to dive into forum threads! Which thread should we explore? I'll map out all the key insights for you!`
        }
    },
    // Planning
    plan: {
        keywords: ['plan', 'planning', 'help me plan', 'trip planning', 'itinerary'],
        responses: {
            friendly: `Great! I'd love to help you plan your cruise. Here are some things I can assist with:\n\n• Destination recommendations based on your preferences\n• Best time to travel\n• Excursion suggestions\n• Dining reservations\n• Onboard activities\n\nWhat type of cruise experience are you looking for?`,
            professional: `I can assist you with cruise planning. My services include:\n\n• Destination recommendations\n• Optimal travel timing analysis\n• Excursion recommendations\n• Dining reservation assistance\n• Onboard activity planning\n\nPlease specify your preferences and requirements.`,
            enthusiastic: `YES! I'm SO excited to help you plan an amazing cruise! Here's what I can do:\n\n• Find you the PERFECT destinations\n• Help you pick the best time to travel\n• Suggest incredible excursions\n• Get you set up with awesome dining\n• Plan amazing onboard activities\n\nTell me what kind of adventure you're looking for!`,
            calm: `I'd be happy to help you plan your cruise thoughtfully. I can assist with:\n\n• Destination recommendations\n• Travel timing considerations\n• Excursion options\n• Dining arrangements\n• Onboard activities\n\nWhat kind of experience are you hoping to have?`,
            humorous: `Planning a cruise? Let's make it epic! I can help with:\n\n• Finding destinations that'll blow your mind\n• Timing it just right (because nobody likes bad weather)\n• Excursions that are actually worth it\n• Dining that'll make you want to move on board\n• Activities that keep you entertained\n\nSo, what's your cruise style?`,
            adventurous: `Let's plan an adventure! I can help you discover:\n\n• Exciting destinations\n• The best times for exploration\n• Thrilling excursions\n• Unique dining experiences\n• Amazing onboard adventures\n\nWhat kind of journey are you ready for?`
        }
    },
    // Loyalty Tiers
    loyalty: {
        keywords: ['loyalty', 'tier', 'benefits', 'diamond', 'platinum', 'gold', 'silver', 'crown anchor'],
        responses: {
            friendly: `I can help you understand the Crown & Anchor Society loyalty program! Here's what I can assist with:\n\n• Tier benefits and perks\n• How to earn and maximize points\n• Points redemption options\n• Tier progression strategies\n• Exclusive member offers\n\nWhat would you like to know about the loyalty program?`,
            professional: `I can provide information about the Crown & Anchor Society loyalty program. Areas of assistance include:\n\n• Tier benefits and privileges\n• Points accumulation and optimization\n• Redemption options\n• Tier advancement strategies\n• Exclusive member benefits\n\nWhat specific information do you require?`,
            enthusiastic: `The loyalty program is AMAZING! I can help with:\n\n• All the awesome tier benefits\n• How to rack up those points!\n• Cool redemption options\n• Strategies to level up\n• Exclusive member perks\n\nWhat do you want to know?`,
            calm: `I can guide you through the Crown & Anchor Society loyalty program. I can explain:\n\n• Tier benefits\n• Points earning and optimization\n• Redemption opportunities\n• Progression strategies\n• Member exclusives\n\nWhat aspect would you like to explore?`,
            humorous: `Loyalty program? Let's talk perks!\n\n• Tier benefits (the good stuff)\n• Points earning (like a game, but better)\n• Redemption options (free stuff, basically)\n• Leveling up strategies\n• Exclusive offers (because you're special)\n\nWhat's on your mind?`,
            adventurous: `Let's explore the loyalty program!\n\n• Tier benefits and adventures\n• Points earning opportunities\n• Redemption options\n• Advancement strategies\n• Exclusive member experiences\n\nWhat would you like to discover?`
        }
    }
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
    const setupCloseBtn = document.getElementById('setupCloseBtn');
    const personalityOptions = document.querySelectorAll('.personality-option');
    const chatMainContainer = document.getElementById('chatMainContainer');
    
    if (!setupOverlay || !agentNameInput || !startChatBtn) return;
    
    // Handle close button - navigate back to boatey.html
    if (setupCloseBtn) {
        setupCloseBtn.addEventListener('click', function() {
            window.location.href = 'boatey.html';
        });
    }
    
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
    
    // Handle line breaks in text
    const lines = text.split('\n');
    lines.forEach((line, index) => {
        if (line.trim()) {
            const textP = document.createElement('p');
            textP.textContent = line;
            bubble.appendChild(textP);
        } else if (index < lines.length - 1) {
            // Add spacing for empty lines
            const br = document.createElement('br');
            bubble.appendChild(br);
        }
    });
    
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
    const personality = agentConfig.personality || 'friendly';

    // Search through knowledge base
    for (const [topic, data] of Object.entries(knowledgeBase)) {
        for (const keyword of data.keywords) {
            if (lowerMessage.includes(keyword)) {
                const responses = data.responses;
                if (responses[personality]) {
                    return responses[personality];
                }
                // Fallback to friendly if personality not found
                return responses.friendly || responses[Object.keys(responses)[0]];
            }
        }
    }

    // Fallback: General responses based on personality
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
            "That's awesome! 🎉 I'm excited to help! What specifically do you want to know?",
            "YES! 🎉 I'm totally here for this! Tell me more about what you need!",
            "I'm SO ready to help! 🎉 What would you like to know about cruises or RCG?",
            "That's so interesting! 🎉 I'd love to dive into that! What should we focus on?",
            "Great question! 🎉 I've got info to share! What are you most curious about?"
        ],
        calm: [
            "I understand. Let me help you with that. What specific information are you looking for?",
            "I'm here to assist. Could you tell me more about what you need?",
            "I'd be happy to help. What would you like to know about cruising or the RCG community?",
            "That's a thoughtful question. Let me provide some insights. What aspect would you like to explore?",
            "I can help with that. What specific details would be most helpful for you?"
        ],
        humorous: [
            "Ha! 😄 Good question! Let me help you out. What specifically are you wondering about?",
            "I'm on it! 😄 Tell me more about what you need and I'll see what I can do!",
            "Sure thing! 😄 I'm here to help with all things cruise-related. What's on your mind?",
            "That's a fun one! 😄 Let me break it down for you. What should we focus on?",
            "Love it! 😄 I've got info for you! What are you most curious about?"
        ],
        adventurous: [
            "Ahoy! 🌊 Let's explore that! What specific information do you need?",
            "Ahoy! 🌊 I'm ready to help! Tell me more about what you're looking for!",
            "Ahoy! 🌊 Let's dive into that! What would you like to know about cruises or RCG?",
            "Ahoy! 🌊 That's an adventure waiting to happen! What aspect should we focus on?",
            "Ahoy! 🌊 Great question! I can help with that. What are you most interested in?"
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
                
                // Reset button text
                const buttonSpan = suggestionsToggle.querySelector('span');
                if (buttonSpan) {
                    buttonSpan.textContent = 'Select a question';
                }
                
                // Send the message directly
                sendMessageCallback(suggestion);
            }
        });
    });
}
