// Enhanced Presentation with TECHY ANIMATIONS and LAPTOP-OPTIMIZED CREDITS
class TechyPresentationController {
    constructor() {
        this.currentSlide = 0;
        this.totalSlides = 9;
        this.slides = document.querySelectorAll('.slide');
        this.indicators = document.querySelectorAll('.indicator');
        this.progressFill = document.querySelector('.progress-fill');
        this.currentSlideElement = document.getElementById('currentSlide');
        this.totalSlidesElement = document.getElementById('totalSlides');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.transitionOverlay = document.querySelector('.transition-overlay');
        this.creditsAnimationsTriggered = false;
        this.creditsAnimationTimeout = null;
        this.isTransitioning = false;
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateSlideDisplay();
        this.setupTechyAnimations();
        this.setupTouchSupport();
        this.addAnimationDelays();
        this.setupLaptopCreditsAnimations();
        this.initializeTechyEffects();
    }

    initializeTechyEffects() {
        // Initialize techy visual effects
        this.createDigitalNoise();
        this.setupTechyHoverEffects();
        this.startAmbientTechEffects();
    }

    createDigitalNoise() {
        // Add subtle digital noise effect
        const noiseOverlay = document.createElement('div');
        noiseOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            opacity: 0.02;
            z-index: 1;
            background: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1"/><feColorMatrix in="colorNoise" type="saturate" values="0"/></filter></defs><rect width="100%" height="100%" filter="url(%23noiseFilter)" opacity="0.05"/></svg>');
            animation: digitalFlicker 0.1s infinite;
        `;
        document.body.appendChild(noiseOverlay);
    }

    setupTechyHoverEffects() {
        // Add techy hover effects to interactive elements
        const interactiveElements = document.querySelectorAll('.nav-btn, .indicator, .compact-member-card, .leader-card-compact');
        
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.filter = 'brightness(1.2) contrast(1.1)';
                element.style.transition = 'all 0.1s linear';
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.filter = 'brightness(1) contrast(1)';
            });
        });
    }

    startAmbientTechEffects() {
        // Ambient scanning lines effect
        setInterval(() => {
            if (Math.random() < 0.1) { // 10% chance every interval
                this.createScanningLine();
            }
        }, 3000);
    }

    createScanningLine() {
        const scanLine = document.createElement('div');
        scanLine.style.cssText = `
            position: fixed;
            top: ${Math.random() * 100}%;
            left: 0;
            width: 100%;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.6), transparent);
            pointer-events: none;
            z-index: 2;
            animation: scanAcross 1.5s linear forwards;
        `;
        
        document.body.appendChild(scanLine);
        
        setTimeout(() => {
            if (scanLine.parentNode) {
                scanLine.parentNode.removeChild(scanLine);
            }
        }, 1500);
    }

    setupEventListeners() {
        // Wait for DOM to be fully loaded before setting up event listeners
        setTimeout(() => {
            // Navigation buttons with enhanced event handling
            if (this.prevBtn) {
                this.prevBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Previous button clicked');
                    this.previousSlide();
                });
                
                this.prevBtn.addEventListener('touchend', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.previousSlide();
                });
            }

            if (this.nextBtn) {
                this.nextBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Next button clicked');
                    this.nextSlide();
                });
                
                this.nextBtn.addEventListener('touchend', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.nextSlide();
                });
            }
        }, 100);
        
        // Keyboard navigation with techy effects
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));
        
        // Enhanced slide indicators
        this.indicators.forEach((indicator, index) => {
            indicator.style.cursor = 'pointer';
            indicator.style.zIndex = '1001';
            
            indicator.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log(`Indicator ${index} clicked`);
                this.goToSlide(index);
            });
            
            indicator.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.goToSlide(index);
                }
            });
            
            // Techy hover effects for indicators
            indicator.addEventListener('mouseenter', () => {
                if (!indicator.classList.contains('active')) {
                    indicator.style.background = 'rgba(37, 99, 235, 0.6)';
                    indicator.style.transform = 'scale(1.3)';
                    indicator.style.boxShadow = '0 0 10px rgba(37, 99, 235, 0.5)';
                }
            });
            
            indicator.addEventListener('mouseleave', () => {
                if (!indicator.classList.contains('active')) {
                    indicator.style.background = 'rgba(37, 99, 235, 0.3)';
                    indicator.style.transform = 'scale(1)';
                    indicator.style.boxShadow = 'none';
                }
            });
        });
        
        // Prevent default scrolling
        document.addEventListener('wheel', (e) => {
            const activeSlide = document.querySelector('.slide.active .slide-content');
            if (activeSlide && !activeSlide.classList.contains('scrollable')) {
                e.preventDefault();
            }
        }, { passive: false });
    }

    setupTechyAnimations() {
        // Enhanced techy animation detection for credits slide
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    const creditsSlide = document.querySelector('[data-slide="8"]');
                    if (creditsSlide && creditsSlide.classList.contains('active')) {
                        if (!this.creditsAnimationsTriggered) {
                            setTimeout(() => {
                                this.triggerLaptopCreditsAnimations();
                            }, 300);
                        }
                    } else {
                        this.resetCreditsState();
                    }
                }
            });
        });
        
        this.slides.forEach(slide => {
            observer.observe(slide, { attributes: true });
        });
    }

    resetCreditsState() {
        this.creditsAnimationsTriggered = false;
        if (this.creditsAnimationTimeout) {
            clearTimeout(this.creditsAnimationTimeout);
            this.creditsAnimationTimeout = null;
        }
        
        // Reset all credit animations
        const animatedElements = document.querySelectorAll(
            '.animated-leader, .vaishnavi-card, .rushikesh-card, .aditya-card, .shubham-card, .footer-card'
        );
        
        animatedElements.forEach(element => {
            element.classList.remove(
                'techy-animate-leader', 
                'techy-animate-vaishnavi', 
                'techy-animate-rushikesh', 
                'techy-animate-aditya', 
                'techy-animate-shubham', 
                'techy-animate-footer'
            );
            if (element.classList.contains('compact-member-card') || element.classList.contains('footer-card')) {
                element.style.opacity = '0';
            }
        });
    }

    triggerLaptopCreditsAnimations() {
        if (this.creditsAnimationsTriggered) {
            return;
        }

        console.log('🔥 TECHY CREDITS ANIMATIONS - Laptop Optimized Layout!');
        this.creditsAnimationsTriggered = true;
        
        // Reset states
        this.resetCreditsState();
        
        // Create dramatic entry effect
        this.triggerTransitionEffect('glitch');
        
        // 1. Mayank (Leader) - TECHY entry at 0.5s
        setTimeout(() => {
            const leaderCard = document.querySelector('.animated-leader');
            if (leaderCard) {
                leaderCard.classList.add('techy-animate-leader');
                console.log('⚡ MAYANK - Leader digital materialization!');
                
                // Add continuing tech effects
                setTimeout(() => {
                    this.addTechyGlowEffect(leaderCard);
                }, 2000);
            }
        }, 500);

        // 2. Vaishnavi - Sharp slide from left at 2.8s
        setTimeout(() => {
            const vaishnaviCard = document.querySelector('.vaishnavi-card');
            if (vaishnaviCard) {
                vaishnaviCard.classList.add('techy-animate-vaishnavi');
                console.log('🔧 VAISHNAVI - Digital slide-in from left!');
                this.createGlitchEffect(vaishnaviCard);
            }
        }, 2800);

        // 3. Rushikesh - Sharp slide from right at 3.2s
        setTimeout(() => {
            const rushikeshCard = document.querySelector('.rushikesh-card');
            if (rushikeshCard) {
                rushikeshCard.classList.add('techy-animate-rushikesh');
                console.log('⚡ RUSHIKESH - Digital slide-in from right!');
                this.createGlitchEffect(rushikeshCard);
            }
        }, 3200);

        // 4. Aditya - Digital materialization at 3.6s
        setTimeout(() => {
            const adityaCard = document.querySelector('.aditya-card');
            if (adityaCard) {
                adityaCard.classList.add('techy-animate-aditya');
                console.log('🎨 ADITYA - Digital materialization!');
                this.createGlitchEffect(adityaCard);
            }
        }, 3600);

        // 5. Shubham - Scale with digital glitch at 4.0s
        setTimeout(() => {
            const shubhamCard = document.querySelector('.shubham-card');
            if (shubhamCard) {
                shubhamCard.classList.add('techy-animate-shubham');
                console.log('📊 SHUBHAM - Digital glitch entry!');
                this.createGlitchEffect(shubhamCard);
            }
        }, 4000);

        // 6. Collaborative footer at 5.0s
        setTimeout(() => {
            const footerCard = document.querySelector('.footer-card');
            if (footerCard) {
                footerCard.classList.add('techy-animate-footer');
                console.log('🤝 COLLABORATIVE STATEMENT - Digital assembly!');
            }
        }, 5000);

        // 7. Final celebration effect at 6.0s
        setTimeout(() => {
            this.triggerTechyCelebration();
            console.log('🎊 TECHY CELEBRATION PROTOCOL ACTIVATED!');
        }, 6000);
    }

    setupLaptopCreditsAnimations() {
        // Enhanced interactions for laptop-optimized member cards
        const compactMemberCards = document.querySelectorAll('.compact-member-card');
        
        compactMemberCards.forEach((card, index) => {
            // Techy hover effects
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.05)';
                card.style.zIndex = '10';
                card.style.filter = 'brightness(1.1) contrast(1.2)';
                
                // Add member-specific glow
                if (card.classList.contains('vaishnavi-card')) {
                    card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(16, 185, 129, 0.6)';
                } else if (card.classList.contains('rushikesh-card')) {
                    card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(139, 92, 246, 0.6)';
                } else if (card.classList.contains('aditya-card')) {
                    card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(245, 158, 11, 0.6)';
                } else if (card.classList.contains('shubham-card')) {
                    card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(239, 68, 68, 0.6)';
                }
                
                // Animate avatar
                const avatar = card.querySelector('.compact-avatar');
                if (avatar) {
                    avatar.style.transform = 'scale(1.2) rotate(5deg)';
                }
                
                // Animate badge
                const badge = card.querySelector('.compact-badge');
                if (badge) {
                    badge.style.transform = 'scale(1.1)';
                    badge.style.filter = 'brightness(1.3)';
                }
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
                card.style.boxShadow = '';
                card.style.zIndex = '1';
                card.style.filter = 'brightness(1) contrast(1)';
                
                const avatar = card.querySelector('.compact-avatar');
                if (avatar) {
                    avatar.style.transform = 'scale(1) rotate(0deg)';
                }
                
                const badge = card.querySelector('.compact-badge');
                if (badge) {
                    badge.style.transform = 'scale(1)';
                    badge.style.filter = 'brightness(1)';
                }
            });
            
            // Rainbow pop-up click interaction
            card.addEventListener('click', () => {
                this.showTechyAppreciation(card);
            });
        });

        // Enhanced leader card interactions
        const leaderCard = document.querySelector('.animated-leader');
        if (leaderCard) {
            leaderCard.addEventListener('mouseenter', () => {
                leaderCard.style.transform = 'scale(1.03)';
                leaderCard.style.filter = 'brightness(1.15) contrast(1.1)';
            });
            
            leaderCard.addEventListener('mouseleave', () => {
                leaderCard.style.transform = 'scale(1)';
                leaderCard.style.filter = 'brightness(1) contrast(1)';
            });

            // Leader appreciation
            leaderCard.addEventListener('click', () => {
                this.showTechyAppreciation(leaderCard, true);
            });
        }
    }

    showTechyAppreciation(card, isLeader = false) {
        // Show TECHY rainbow appreciation when member card is clicked
        const memberName = isLeader ? 
            card.querySelector('.leader-name-compact').textContent : 
            card.querySelector('.compact-name').textContent;
        
        const appreciationMessages = {
            'Mayank': '🔥 SYSTEM LEADER - PROTOCOL ACTIVATED! 👑',
            'Vaishnavi': '📊 RESEARCH MODULE - EXCELLENCE ACHIEVED! ⭐',
            'Rushikesh': '⚡ TECH CORE - INNOVATION PROTOCOL! 🔧',
            'Aditya': '🎨 CREATIVE ENGINE - VISION ENHANCED! ✨',
            'Shubham': '📈 DATA MATRIX - INSIGHTS PROCESSED! 🔍'
        };
        
        const message = appreciationMessages[memberName] || `SYSTEM ACK: ${memberName}!`;
        
        // Create techy rainbow popup
        const appreciationPopup = document.createElement('div');
        appreciationPopup.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(45deg, 
                rgba(37, 99, 235, 0.95), 
                rgba(124, 58, 237, 0.95),
                rgba(245, 158, 11, 0.95),
                rgba(239, 68, 68, 0.95),
                rgba(16, 185, 129, 0.95)
            );
            background-size: 400% 400%;
            color: white;
            padding: 30px 40px;
            font-family: 'Courier New', monospace;
            font-size: 1.4rem;
            font-weight: 700;
            z-index: 9999;
            text-align: center;
            box-shadow: 
                0 30px 60px rgba(0, 0, 0, 0.5),
                0 0 40px rgba(37, 99, 235, 0.6),
                inset 0 0 20px rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(15px);
            border: 2px solid rgba(255, 255, 255, 0.3);
            clip-path: polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px));
            animation: 
                techyRainbowPop 4s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards,
                rainbowShift 2s linear infinite;
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
            letter-spacing: 1px;
        `;
        
        appreciationPopup.innerHTML = `
            <div style="font-size: 3.5rem; margin-bottom: 15px; animation: glowPulse 1.5s ease-in-out infinite;">${isLeader ? '👑' : '⭐'}</div>
            <div style="text-transform: uppercase; letter-spacing: 2px;">${message}</div>
            <div style="font-size: 0.9rem; opacity: 0.9; margin-top: 12px; font-weight: 400; font-family: 'Inter', sans-serif;">CONTRIBUTION ACKNOWLEDGED - SYSTEM ENHANCED!</div>
            <div style="margin-top: 15px; font-size: 2rem; animation: digitalFlicker 0.1s infinite;">⚡ ⚡ ⚡</div>
        `;
        
        document.body.appendChild(appreciationPopup);
        
        // Create particle burst effect
        this.createTechyParticleBurst();
        
        // Remove popup after animation
        setTimeout(() => {
            if (appreciationPopup.parentNode) {
                appreciationPopup.parentNode.removeChild(appreciationPopup);
            }
        }, 4000);
    }

    createTechyParticleBurst() {
        // Create techy particle burst effect
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                this.createTechyParticle();
            }, i * 50);
        }
    }

    createTechyParticle() {
        const particle = document.createElement('div');
        const shapes = ['◆', '▲', '●', '■', '♦'];
        const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];
        const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.cssText = `
            position: fixed;
            font-size: 1.2rem;
            color: ${randomColor};
            pointer-events: none;
            z-index: 10000;
            left: 50%;
            top: 50%;
            animation: techyParticleBurst 2s ease-out forwards;
            text-shadow: 0 0 10px ${randomColor};
            font-family: 'Courier New', monospace;
            font-weight: bold;
        `;
        
        particle.textContent = randomShape;
        particle.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;
        
        document.body.appendChild(particle);
        
        // Set random direction for burst
        const angle = Math.random() * Math.PI * 2;
        const distance = 150 + Math.random() * 200;
        const endX = Math.cos(angle) * distance;
        const endY = Math.sin(angle) * distance;
        
        particle.style.setProperty('--end-x', `${endX}px`);
        particle.style.setProperty('--end-y', `${endY}px`);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 2000);
    }

    addTechyGlowEffect(element) {
        // Add continuing techy glow effect
        element.style.animation += ', techyGlow 3s ease-in-out infinite alternate';
    }

    createGlitchEffect(element) {
        // Create temporary glitch effect on element
        const originalFilter = element.style.filter;
        let glitchCount = 0;
        const maxGlitches = 5;
        
        const glitchInterval = setInterval(() => {
            if (glitchCount >= maxGlitches) {
                clearInterval(glitchInterval);
                element.style.filter = originalFilter;
                return;
            }
            
            element.style.filter = `hue-rotate(${Math.random() * 360}deg) brightness(${0.8 + Math.random() * 0.6}) contrast(${0.8 + Math.random() * 0.8})`;
            
            setTimeout(() => {
                element.style.filter = originalFilter;
            }, 50);
            
            glitchCount++;
        }, 100);
    }

    triggerTransitionEffect(type = 'digital') {
        if (!this.transitionOverlay) return;
        
        this.transitionOverlay.style.opacity = '1';
        
        if (type === 'glitch') {
            this.transitionOverlay.style.animation = 'glitchTransition 0.8s linear forwards';
        } else {
            this.transitionOverlay.style.animation = 'digitalSweep 0.6s linear forwards';
        }
        
        setTimeout(() => {
            this.transitionOverlay.style.opacity = '0';
            this.transitionOverlay.style.animation = 'none';
        }, type === 'glitch' ? 800 : 600);
    }

    triggerTechyCelebration() {
        // Create ultimate techy celebration
        const celebration = document.createElement('div');
        celebration.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1000;
            background: radial-gradient(circle at center, 
                rgba(37, 99, 235, 0.2) 0%, 
                rgba(16, 185, 129, 0.15) 30%,
                rgba(245, 158, 11, 0.1) 60%,
                transparent 80%);
            animation: techyCelebrationPulse 4s ease-out forwards;
        `;
        
        document.body.appendChild(celebration);
        
        // Create scanning celebration effect
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                this.createCelebrationScanLine();
            }, i * 200);
        }
        
        // Create digital rain effect
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                this.createDigitalRainDrop();
            }, i * 100);
        }
        
        setTimeout(() => {
            if (celebration.parentNode) {
                celebration.parentNode.removeChild(celebration);
            }
        }, 4000);
    }

    createCelebrationScanLine() {
        const scanLine = document.createElement('div');
        scanLine.style.cssText = `
            position: fixed;
            top: ${Math.random() * 100}%;
            left: -100%;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, 
                transparent, 
                rgba(37, 99, 235, 0.8) 20%,
                rgba(16, 185, 129, 1) 50%,
                rgba(245, 158, 11, 0.8) 80%,
                transparent
            );
            pointer-events: none;
            z-index: 1001;
            animation: celebrationScan 2s ease-out forwards;
            box-shadow: 0 0 10px rgba(16, 185, 129, 0.8);
        `;
        
        document.body.appendChild(scanLine);
        
        setTimeout(() => {
            if (scanLine.parentNode) {
                scanLine.parentNode.removeChild(scanLine);
            }
        }, 2000);
    }

    createDigitalRainDrop() {
        const rainDrop = document.createElement('div');
        const characters = ['0', '1', '▲', '◆', '●', '■'];
        const randomChar = characters[Math.floor(Math.random() * characters.length)];
        const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        rainDrop.style.cssText = `
            position: fixed;
            left: ${Math.random() * 100}%;
            top: -20px;
            color: ${randomColor};
            font-family: 'Courier New', monospace;
            font-size: ${0.8 + Math.random() * 0.8}rem;
            font-weight: bold;
            pointer-events: none;
            z-index: 1001;
            animation: digitalRain 3s linear forwards;
            text-shadow: 0 0 8px ${randomColor};
            opacity: 0.8;
        `;
        
        rainDrop.textContent = randomChar;
        document.body.appendChild(rainDrop);
        
        setTimeout(() => {
            if (rainDrop.parentNode) {
                rainDrop.parentNode.removeChild(rainDrop);
            }
        }, 3000);
    }

    setupTouchSupport() {
        let startX = 0;
        let startY = 0;
        let endX = 0;
        let endY = 0;

        document.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });

        document.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;
            this.handleSwipe(startX, startY, endX, endY);
        });
    }

    handleSwipe(startX, startY, endX, endY) {
        const deltaX = endX - startX;
        const deltaY = endY - startY;
        const minSwipeDistance = 50;

        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
            if (deltaX > 0) {
                this.previousSlide();
            } else {
                this.nextSlide();
            }
        }
    }

    addAnimationDelays() {
        // Add staggered animation delays to grid items
        const cardGrids = document.querySelectorAll('.points-grid, .specs-grid, .impact-grid, .stats-grid');
        
        cardGrids.forEach(grid => {
            const cards = grid.children;
            Array.from(cards).forEach((card, index) => {
                card.style.setProperty('--delay', `${index * 0.1}s`);
            });
        });

        const solutionSections = document.querySelectorAll('.solution-section');
        solutionSections.forEach((section, index) => {
            section.style.setProperty('--delay', `${index * 0.2}s`);
        });

        const sourceCategories = document.querySelectorAll('.source-category');
        sourceCategories.forEach((category, index) => {
            category.style.setProperty('--delay', `${index * 0.1}s`);
        });
    }

    handleKeyPress(e) {
        if (this.isTransitioning) return;
        
        switch(e.key) {
            case 'ArrowRight':
            case ' ':
            case 'PageDown':
                e.preventDefault();
                this.nextSlide();
                break;
            case 'ArrowLeft':
            case 'PageUp':
                e.preventDefault();
                this.previousSlide();
                break;
            case 'Home':
                e.preventDefault();
                this.goToSlide(0);
                break;
            case 'End':
                e.preventDefault();
                this.goToSlide(this.totalSlides - 1);
                break;
            case 'ArrowUp':
                e.preventDefault();
                this.scrollActiveSlide(-100);
                break;
            case 'ArrowDown':
                e.preventDefault();
                this.scrollActiveSlide(100);
                break;
            case 'r':
            case 'R':
                if (this.currentSlide === 8) {
                    e.preventDefault();
                    this.resetCreditsState();
                    setTimeout(() => {
                        this.triggerLaptopCreditsAnimations();
                    }, 100);
                }
                break;
        }
    }

    scrollActiveSlide(delta) {
        const activeSlideContent = document.querySelector('.slide.active .slide-content.scrollable');
        if (activeSlideContent) {
            activeSlideContent.scrollBy({
                top: delta,
                behavior: 'smooth'
            });
        }
    }

    nextSlide() {
        if (this.currentSlide < this.totalSlides - 1 && !this.isTransitioning) {
            console.log(`Moving to next slide: ${this.currentSlide + 1}`);
            this.triggerTransitionEffect('digital');
            this.currentSlide++;
            this.updateSlideDisplay();
        }
    }

    previousSlide() {
        if (this.currentSlide > 0 && !this.isTransitioning) {
            console.log(`Moving to previous slide: ${this.currentSlide - 1}`);
            this.triggerTransitionEffect('digital');
            this.currentSlide--;
            this.updateSlideDisplay();
        }
    }

    goToSlide(slideIndex) {
        if (slideIndex >= 0 && slideIndex < this.totalSlides && slideIndex !== this.currentSlide && !this.isTransitioning) {
            console.log(`Going to slide: ${slideIndex}`);
            this.triggerTransitionEffect('digital');
            this.currentSlide = slideIndex;
            this.updateSlideDisplay();
        }
    }

    updateSlideDisplay() {
        this.isTransitioning = true;
        
        // Update slide visibility with techy transitions
        this.slides.forEach((slide, index) => {
            slide.classList.remove('active', 'prev');
            
            if (index === this.currentSlide) {
                slide.classList.add('active');
            } else if (index < this.currentSlide) {
                slide.classList.add('prev');
            }
        });

        // Update indicators with techy effects
        this.indicators.forEach((indicator, index) => {
            const isActive = index === this.currentSlide;
            indicator.classList.toggle('active', isActive);
            
            if (isActive) {
                indicator.style.background = '#2563eb';
                indicator.style.transform = 'scale(1.3)';
                indicator.style.boxShadow = '0 0 15px rgba(37, 99, 235, 0.8)';
            } else {
                indicator.style.background = 'rgba(37, 99, 235, 0.3)';
                indicator.style.transform = 'scale(1)';
                indicator.style.boxShadow = 'none';
            }
        });

        // Update progress bar with techy animation
        const progressPercent = ((this.currentSlide + 1) / this.totalSlides) * 100;
        this.progressFill.style.width = `${progressPercent}%`;

        // Update slide counter
        this.currentSlideElement.textContent = this.currentSlide + 1;

        // Update navigation buttons
        if (this.prevBtn) this.prevBtn.disabled = this.currentSlide === 0;
        if (this.nextBtn) this.nextBtn.disabled = this.currentSlide === this.totalSlides - 1;

        // Reset scroll position
        setTimeout(() => {
            const newActiveSlideContent = document.querySelector('.slide.active .slide-content.scrollable');
            if (newActiveSlideContent) {
                newActiveSlideContent.scrollTo({ top: 0, behavior: 'smooth' });
            }
            this.isTransitioning = false;
        }, 400);

        // Trigger slide-specific animations
        this.triggerSlideAnimations();
    }

    triggerSlideAnimations() {
        const activeSlide = this.slides[this.currentSlide];
        const animatedElements = activeSlide.querySelectorAll('[style*="animation"]');
        
        // Re-trigger animations
        animatedElements.forEach(element => {
            const originalAnimation = element.style.animation;
            element.style.animation = 'none';
            element.offsetHeight; // Force reflow
            element.style.animation = originalAnimation;
        });

        // Special handling for credits slide
        if (this.currentSlide === 8) {
            setTimeout(() => {
                this.triggerLaptopCreditsAnimations();
            }, 200);
        }
    }
}

// Enhanced Techy Utility Functions
class TechyPresentationUtils {
    static addTechyHoverEffects() {
        const cards = document.querySelectorAll('.card, .point-card, .spec-card, .impact-card, .stat-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.03)';
                this.style.transition = 'all 0.2s linear';
                this.style.filter = 'brightness(1.1) contrast(1.1)';
                this.style.boxShadow = '0 15px 30px rgba(37, 99, 235, 0.2)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.filter = 'brightness(1) contrast(1)';
                this.style.boxShadow = '';
            });
        });
    }

    static setupTechyAccessibility() {
        const navButtons = document.querySelectorAll('.nav-btn');
        const indicators = document.querySelectorAll('.indicator');
        
        navButtons.forEach((btn, index) => {
            if (index === 0) {
                btn.setAttribute('aria-label', 'Previous slide - Digital transition');
            } else {
                btn.setAttribute('aria-label', 'Next slide - Digital transition');
            }
        });

        indicators.forEach((indicator, index) => {
            indicator.setAttribute('aria-label', `Navigate to slide ${index + 1} with techy effect`);
            indicator.setAttribute('role', 'button');
            indicator.setAttribute('tabindex', '0');
        });
    }

    static addTechyLoadingAnimation() {
        document.body.classList.add('techy-loading');
        
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.body.classList.remove('techy-loading');
                document.body.classList.add('techy-loaded');
            }, 300);
        });
    }
}

// Performance Optimization for Techy Effects
class TechyPerformanceOptimizer {
    static optimizeTechyAnimations() {
        const isSlowDevice = navigator.hardwareConcurrency < 4;
        
        if (isSlowDevice) {
            document.body.classList.add('reduced-techy-motion');
            
            const style = document.createElement('style');
            style.textContent = `
                .reduced-techy-motion * {
                    animation-duration: 0.2s !important;
                    transition-duration: 0.15s !important;
                }
            `;
            document.head.appendChild(style);
        }
    }
}

// Initialize the TECHY presentation
let presentation;

document.addEventListener('DOMContentLoaded', () => {
    // Initialize main techy presentation controller
    presentation = new TechyPresentationController();
    
    // Apply techy utility enhancements
    TechyPresentationUtils.addTechyLoadingAnimation();
    TechyPresentationUtils.addTechyHoverEffects();
    TechyPresentationUtils.setupTechyAccessibility();
    
    // Apply performance optimizations
    TechyPerformanceOptimizer.optimizeTechyAnimations();
    
    // Add enhanced techy styles
    const techyStyle = document.createElement('style');
    techyStyle.textContent = `
        /* TECHY LOADING AND ANIMATION STYLES */
        body.techy-loading {
            overflow: hidden;
        }
        
        body.techy-loading .slide {
            opacity: 0;
            filter: blur(2px);
        }
        
        body.techy-loaded .slide.active {
            opacity: 1;
            filter: blur(0);
        }
        
        /* TECHY RAINBOW APPRECIATION POPUP */
        @keyframes techyRainbowPop {
            0% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.3) rotate(-15deg);
                filter: blur(3px) hue-rotate(0deg);
            }
            15% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1.2) rotate(5deg);
                filter: blur(0px) hue-rotate(90deg);
            }
            30% {
                transform: translate(-50%, -50%) scale(0.9) rotate(-3deg);
                filter: hue-rotate(180deg);
            }
            45% {
                transform: translate(-50%, -50%) scale(1.05) rotate(1deg);
                filter: hue-rotate(270deg);
            }
            85% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1) rotate(0deg);
                filter: hue-rotate(360deg);
            }
            100% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.7) rotate(0deg);
                filter: hue-rotate(360deg);
            }
        }
        
        @keyframes rainbowShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        
        @keyframes glowPulse {
            0%, 100% { 
                transform: scale(1); 
                filter: brightness(1) drop-shadow(0 0 10px currentColor);
            }
            50% { 
                transform: scale(1.1); 
                filter: brightness(1.3) drop-shadow(0 0 20px currentColor);
            }
        }
        
        @keyframes digitalFlicker {
            0%, 90%, 100% { opacity: 1; }
            95% { opacity: 0.7; }
        }
        
        /* TECHY PARTICLE EFFECTS */
        @keyframes techyParticleBurst {
            0% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(0.5) rotate(0deg);
            }
            70% {
                opacity: 0.8;
                transform: translate(calc(-50% + var(--end-x)), calc(-50% + var(--end-y))) scale(1.2) rotate(720deg);
            }
            100% {
                opacity: 0;
                transform: translate(calc(-50% + var(--end-x)), calc(-50% + var(--end-y))) scale(0.3) rotate(720deg);
            }
        }
        
        /* TECHY TRANSITION EFFECTS */
        @keyframes glitchTransition {
            0% { 
                opacity: 0; 
                filter: hue-rotate(0deg) contrast(1);
            }
            20% { 
                opacity: 0.8; 
                filter: hue-rotate(90deg) contrast(1.5);
            }
            40% { 
                opacity: 0.6; 
                filter: hue-rotate(180deg) contrast(1.2);
            }
            60% { 
                opacity: 0.8; 
                filter: hue-rotate(270deg) contrast(1.5);
            }
            80% { 
                opacity: 0.4; 
                filter: hue-rotate(360deg) contrast(1.1);
            }
            100% { 
                opacity: 0; 
                filter: hue-rotate(0deg) contrast(1);
            }
        }
        
        @keyframes digitalSweep {
            0% { 
                opacity: 0; 
                transform: scaleX(0);
            }
            50% { 
                opacity: 1; 
                transform: scaleX(1);
            }
            100% { 
                opacity: 0; 
                transform: scaleX(0);
            }
        }
        
        @keyframes scanAcross {
            0% { 
                transform: translateX(-100%); 
                opacity: 0;
            }
            50% { 
                opacity: 1;
            }
            100% { 
                transform: translateX(100%); 
                opacity: 0;
            }
        }
        
        /* TECHY CELEBRATION EFFECTS */
        @keyframes techyCelebrationPulse {
            0% { opacity: 0; transform: scale(0.8); }
            50% { opacity: 1; transform: scale(1.1); }
            100% { opacity: 0; transform: scale(1.3); }
        }
        
        @keyframes celebrationScan {
            0% { 
                left: -100%; 
                opacity: 0;
            }
            50% { 
                opacity: 1;
            }
            100% { 
                left: 100%; 
                opacity: 0;
            }
        }
        
        @keyframes digitalRain {
            0% { 
                transform: translateY(-20px); 
                opacity: 0;
            }
            10% { 
                opacity: 1;
            }
            90% { 
                opacity: 0.8;
            }
            100% { 
                transform: translateY(100vh); 
                opacity: 0;
            }
        }
        
        @keyframes techyGlow {
            0% { 
                filter: brightness(1) drop-shadow(0 0 10px rgba(37, 99, 235, 0.3));
                transform: scale(1);
            }
            100% { 
                filter: brightness(1.2) drop-shadow(0 0 25px rgba(124, 58, 237, 0.5));
                transform: scale(1.02);
            }
        }
        
        /* TECHY FOCUS STYLES */
        .nav-btn:focus-visible,
        .indicator:focus-visible,
        .compact-member-card:focus-visible {
            outline: 2px solid #2563eb !important;
            outline-offset: 2px;
            box-shadow: 0 0 20px rgba(37, 99, 235, 0.5) !important;
        }
        
        /* Enhanced button styles for better clicking */
        .nav-btn {
            cursor: pointer !important;
            pointer-events: all !important;
            user-select: none !important;
            z-index: 1002 !important;
        }
        
        .nav-btn:hover {
            cursor: pointer !important;
        }
        
        .nav-btn:active {
            transform: scale(0.95) !important;
        }
        
        /* TECHY HELP TEXT */
        .techy-help {
            position: fixed;
            bottom: 70px;
            right: 20px;
            background: linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(37, 99, 235, 0.2));
            color: #00ff41;
            font-family: 'Courier New', monospace;
            padding: 12px 18px;
            font-size: 11px;
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 1000;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(37, 99, 235, 0.3);
            clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
            text-shadow: 0 0 5px #00ff41;
        }
        
        [data-slide="8"].active .techy-help {
            opacity: 1;
        }
        
        .techy-help .title {
            color: #2563eb;
            font-weight: bold;
            margin-bottom: 6px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
    `;
    document.head.appendChild(techyStyle);
    
    // Add techy help text for credits slide
    const techyHelp = document.createElement('div');
    techyHelp.className = 'techy-help';
    techyHelp.innerHTML = `
        <div class="title">⚡ TECHY CONTROLS ⚡</div>
        <div>• [R] - REPLAY ANIMATIONS</div>
        <div>• [CLICK] - RAINBOW APPRECIATION</div>
        <div>• [ESC] - DIGITAL DIAGNOSTICS</div>
    `;
    document.body.appendChild(techyHelp);
    
    console.log('🔥 TECHY PRESENTATION SYSTEM INITIALIZED!');
    console.log('⚡ Navigation: Sharp digital transitions');
    console.log('📱 Touch: Linear swipe detection');
    console.log('🎊 Credits: Laptop-optimized with rainbow popups');
    console.log('🔧 Tech Level: MAXIMUM DIGITAL PRECISION');
    console.log('🛠️ Navigation buttons should now work properly!');
});

// Export for external access
window.TechyPresentationController = TechyPresentationController;
window.presentation = presentation;