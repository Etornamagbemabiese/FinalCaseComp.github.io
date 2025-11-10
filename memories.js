// ============================================
// MEMORIES PAGE INTERACTIVITY
// ============================================

// Sample photo data (in a real app, this would come from an API)
const photoData = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
        title: 'Sunset on the Caribbean',
        location: 'Caribbean Sea',
        date: 'March 15, 2024',
        category: 'destinations',
        ship: 'Symphony of the Seas'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
        title: 'Pool Deck Fun',
        location: 'On Board',
        date: 'April 2, 2024',
        category: 'activities',
        ship: 'Harmony of the Seas'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
        title: 'Gourmet Dining Experience',
        location: 'Main Dining Room',
        date: 'May 10, 2024',
        category: 'dining',
        ship: 'Oasis of the Seas'
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
        title: 'Alaska Adventure',
        location: 'Alaska',
        date: 'June 22, 2024',
        category: 'destinations',
        ship: 'Quantum of the Seas'
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
        title: 'Rock Climbing Wall',
        location: 'Sports Deck',
        date: 'July 5, 2024',
        category: 'activities',
        ship: 'Allure of the Seas'
    },
    {
        id: 6,
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
        title: 'Mediterranean Port',
        location: 'Barcelona, Spain',
        date: 'August 18, 2024',
        category: 'destinations',
        ship: 'Odyssey of the Seas'
    },
    {
        id: 7,
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
        title: 'Specialty Restaurant',
        location: 'Chops Grille',
        date: 'September 3, 2024',
        category: 'dining',
        ship: 'Wonder of the Seas'
    },
    {
        id: 8,
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
        title: 'Ship at Sunset',
        location: 'On Board',
        date: 'October 12, 2024',
        category: 'ships',
        ship: 'Icon of the Seas'
    },
    {
        id: 9,
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
        title: 'Tropical Paradise',
        location: 'Cozumel, Mexico',
        date: 'November 8, 2024',
        category: 'destinations',
        ship: 'Freedom of the Seas'
    },
    {
        id: 10,
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
        title: 'Broadway Show',
        location: 'Royal Theater',
        date: 'December 1, 2024',
        category: 'activities',
        ship: 'Navigator of the Seas'
    },
    {
        id: 11,
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
        title: 'Chef\'s Table Experience',
        location: 'Specialty Dining',
        date: 'December 15, 2024',
        category: 'dining',
        ship: 'Mariner of the Seas'
    },
    {
        id: 12,
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
        title: 'Northern Lights',
        location: 'Norwegian Fjords',
        date: 'January 5, 2024',
        category: 'destinations',
        ship: 'Anthem of the Seas'
    }
];

// Animate stat counters
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = formatNumber(target);
            clearInterval(timer);
        } else {
            element.textContent = formatNumber(Math.floor(current));
        }
    }, 16);
}

function formatNumber(num) {
    if (num >= 1000) {
        return num.toLocaleString();
    }
    return num.toString();
}

// Initialize stat animations
function initStatAnimations() {
    const statValues = document.querySelectorAll('.stat-value-memories');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.5 });

    statValues.forEach(stat => observer.observe(stat));
}

// Generate photo cards
function generatePhotoCards(filter = 'all') {
    const grid = document.getElementById('photoFeedGrid');
    if (!grid) return;

    const filteredPhotos = filter === 'all' 
        ? photoData 
        : photoData.filter(photo => photo.category === filter);

    grid.innerHTML = filteredPhotos.map(photo => `
        <div class="photo-card" data-category="${photo.category}">
            <img src="${photo.image}" alt="${photo.title}" loading="lazy">
            <div class="photo-tag">${getCategoryLabel(photo.category)}</div>
            <div class="photo-overlay">
                <div class="photo-title">${photo.title}</div>
                <div class="photo-meta">
                    <div class="photo-meta-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${photo.location}</span>
                    </div>
                    <div class="photo-meta-item">
                        <i class="fas fa-calendar"></i>
                        <span>${photo.date}</span>
                    </div>
                    <div class="photo-meta-item">
                        <i class="fas fa-ship"></i>
                        <span>${photo.ship}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function getCategoryLabel(category) {
    const labels = {
        'ships': 'On Board',
        'destinations': 'Destination',
        'activities': 'Activity',
        'dining': 'Dining'
    };
    return labels[category] || 'Memory';
}

// Initialize photo feed filters
function initPhotoFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            // Filter photos
            const filter = btn.getAttribute('data-filter');
            generatePhotoCards(filter);
        });
    });
}

// Load more photos
function initLoadMore() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (!loadMoreBtn) return;

    let currentPage = 1;
    const photosPerPage = 12;

    loadMoreBtn.addEventListener('click', () => {
        // Simulate loading more photos
        loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Loading...</span>';
        loadMoreBtn.disabled = true;

        setTimeout(() => {
            // In a real app, this would fetch more photos from an API
            currentPage++;
            loadMoreBtn.innerHTML = '<i class="fas fa-sync-alt"></i> <span>Load More Memories</span>';
            loadMoreBtn.disabled = false;

            // If we've loaded all photos, hide the button
            if (currentPage * photosPerPage >= photoData.length) {
                loadMoreBtn.style.display = 'none';
            }
        }, 1000);
    });
}

// Initialize ranking filter
function initRankingFilter() {
    const rankingFilter = document.getElementById('rankingFilter');
    if (!rankingFilter) return;

    rankingFilter.addEventListener('change', (e) => {
        // In a real app, this would filter the leaderboard data
        console.log('Filter changed to:', e.target.value);
        // You could add animation or data refresh here
    });
}

// Add smooth scroll behavior
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initStatAnimations();
    generatePhotoCards();
    initPhotoFilters();
    initLoadMore();
    initRankingFilter();
    initSmoothScroll();

    // Add fade-in animation to cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards
    document.querySelectorAll('.stat-card-memories, .ranking-card, .achievements-card, .photo-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        cardObserver.observe(card);
    });
});

