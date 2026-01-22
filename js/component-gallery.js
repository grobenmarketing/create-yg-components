document.addEventListener('DOMContentLoaded', function() {
    // 1. Define the HTML for the slider
    // Note: All images use relative paths from the project root.
    // The slider container structure allows the wave to sit BEHIND the swiper.
    const sliderHTML = `
    <div class="slider-container">
        <!-- Wave Background: Absolute position, z-index 1 -->
        <div class="abstract-background">
            <img src="https://yg-site-preview.netlify.app/img/waves.svg"
                 alt="Abstract waves"
                 class="abstract-waves"
                 onerror="this.style.display='none'">
        </div>

        <!-- Swiper: Relative position, z-index 2 (on top of waves) -->
        <div class="swiper mySwiper">
            <div class="swiper-wrapper">

                <!-- SLIDE 1: Fleet Graphics -->
                <div class="swiper-slide slide">
                    <div class="slide-content">
                        <div class="slide-image">
                            <img src="https://yg-site-preview.netlify.app/img/bannerimg-brochure.png"
                                 alt="FLEET GRAPHICS"
                                 class="slide-img">
                        </div>
                        <div class="slide-text">
                            <h2 class="slide-title">FLEET GRAPHICS</h2>
                            <h3 class="slide-subtitle">BUYER'S GUIDE</h3>
                            <p class="slide-description">Download for Free</p>
                            <div class="slide-button-container">
                                <a href="https://mailchi.mp/b3e4122ddf2a/2025-fleet-guide" target="_blank">
                                    <button class="slide-button">Get Your Free Copy</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- SLIDE 2: Large Format -->
                <div class="swiper-slide slide">
                    <div class="slide-content">
                        <div class="slide-image">
                            <img src="https://yg-site-preview.netlify.app/img/bannerimg-signs.png"
                                 alt="LARGE FORMAT"
                                 class="slide-img">
                        </div>
                        <div class="slide-text">
                            <h2 class="slide-title">LARGE FORMAT</h2>
                            <h3 class="slide-subtitle">PRINTING</h3>
                            <p class="slide-description">signs, decals, wraps & more</p>
                            <div class="slide-button-container">
                                <a href="/signs">
                                    <button class="slide-button">See Our Work</button>
                                </a>
                                <a href="/quote">
                                    <button class="slide-button-secondary">Get a Quote</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- SLIDE 3: In-House Creative -->
                <div class="swiper-slide slide">
                    <div class="slide-content">
                        <div class="slide-image">
                            <img src="https://yg-site-preview.netlify.app/img/bannerimg-computer.png"
                                 alt="IN-HOUSE"
                                 class="slide-img">
                        </div>
                        <div class="slide-text">
                            <h2 class="slide-title">IN-HOUSE</h2>
                            <h3 class="slide-subtitle">CREATIVE</h3>
                            <p class="slide-description">design & brand management</p>
                            <div class="slide-button-container">
                                <a href="/creative">
                                    <button class="slide-button">See Our Work</button>
                                </a>
                                <a href="/quote">
                                    <button class="slide-button-secondary">Get a Quote</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- SLIDE 4: Commercial Printing -->
                <div class="swiper-slide slide">
                    <div class="slide-content">
                        <div class="slide-image">
                            <img src="https://yg-site-preview.netlify.app/img/bannerimg-cards.png"
                                 alt="COMMERCIAL"
                                 class="slide-img">
                        </div>
                        <div class="slide-text">
                            <h2 class="slide-title">COMMERCIAL</h2>
                            <h3 class="slide-subtitle">PRINTING</h3>
                            <p class="slide-description">cards, flyers, brochures & more</p>
                            <div class="slide-button-container">
                                <a href="/print/commercial-printing">
                                    <button class="slide-button">See Our Work</button>
                                </a>
                                <a href="/quote">
                                    <button class="slide-button-secondary">Get a Quote</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- SLIDE 5: Custom Apparel -->
                <div class="swiper-slide slide">
                    <div class="slide-content">
                        <div class="slide-image">
                            <img src="https://yg-site-preview.netlify.app/img/bannerimg-apparel.png"
                                 alt="CUSTOM"
                                 class="slide-img">
                        </div>
                        <div class="slide-text">
                            <h2 class="slide-title">CUSTOM</h2>
                            <h3 class="slide-subtitle">APPAREL</h3>
                            <p class="slide-description">explore various styles</p>
                            <div class="slide-button-container">
                                <a href="/promo/apparel">
                                    <button class="slide-button">See Our Work</button>
                                </a>
                                <a href="/quote">
                                    <button class="slide-button-secondary">Get a Quote</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- SLIDE 6: Vehicle Wraps -->
                <div class="swiper-slide slide">
                    <div class="slide-content">
                        <div class="slide-image">
                            <img src="https://yg-site-preview.netlify.app/img/bannerimg-wraps.png"
                                 alt="VEHICLE"
                                 class="slide-img">
                        </div>
                        <div class="slide-text">
                            <h2 class="slide-title">VEHICLE</h2>
                            <h3 class="slide-subtitle">WRAPS</h3>
                            <p class="slide-description">for your Fleet</p>
                            <div class="slide-button-container">
                                <a href="/vehicle-graphics">
                                    <button class="slide-button">See Our Work</button>
                                </a>
                                <a href="/quote">
                                    <button class="slide-button-secondary">Get a Quote</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- SLIDE 7: Promo Items -->
                <div class="swiper-slide slide">
                    <div class="slide-content">
                        <div class="slide-image">
                            <img src="https://yg-site-preview.netlify.app/img/bannerimg-promoitems.png"
                                 alt="PROMO"
                                 class="slide-img">
                        </div>
                        <div class="slide-text">
                            <h2 class="slide-title">PROMO</h2>
                            <h3 class="slide-subtitle">ITEMS</h3>
                            <p class="slide-description">endless options</p>
                            <div class="slide-button-container">
                                <a href="/promo/promotional-products">
                                    <button class="slide-button">See Our Work</button>
                                </a>
                                <a href="/quote">
                                    <button class="slide-button-secondary">Get a Quote</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!-- Custom Navigation Buttons -->
        <div class="custom-swiper-button-prev">
            <svg viewBox="0 0 16 16" fill="currentColor">
                <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
            </svg>
        </div>
        <div class="custom-swiper-button-next">
            <svg viewBox="0 0 16 16" fill="currentColor">
                <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
            </svg>
        </div>
    </div>
    `;

    // 2. Inject into Placeholder
    const placeholder = document.getElementById('slider-placeholder');
    if (placeholder) {
        placeholder.innerHTML = sliderHTML;

        // 3. Initialize Swiper AFTER injection
        // We do this inside the if-block to ensure elements exist
        var swiper = new Swiper(".mySwiper", {
            loop: true,
            speed: 600,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".custom-swiper-button-next",
                prevEl: ".custom-swiper-button-prev",
            },
            keyboard: {
                enabled: true,
            },
        });

        console.log('Slider injected and Swiper initialized.');
    } else {
        console.error('Slider placeholder not found.');
    }
});
