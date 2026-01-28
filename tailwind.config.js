/**
 * Yoder Graphics - Unified Tailwind Configuration
 * ================================================
 * This is the single source of truth for all brand colors, fonts, and custom utilities.
 * Import this config in all HTML files using the CDN approach.
 *
 * Usage in HTML:
 * <script src="https://cdn.tailwindcss.com"></script>
 * <script src="tailwind.config.js"></script>
 *
 * Or inline (copy the tailwind.config object below)
 */

tailwind.config = {
    theme: {
        extend: {
            colors: {
                // Brand Colors - Primary Palette
                brand: {
                    green: '#00953b',        // Primary brand green
                    'green-light': '#20a75b', // Lighter green for hovers/accents
                    'green-dark': '#007a30',  // Darker green for contrast
                    orange: '#f9a01f',        // Secondary accent color
                    'orange-light': '#ffb74d', // Lighter orange
                    teal: '#1cd59d',          // Tertiary accent
                },
                // Neutral Colors
                neutral: {
                    white: '#ffffff',
                    'off-white': '#f1eeee',
                    'light-gray': '#f4f4f4',
                    gray: '#58595b',
                    'dark-gray': '#171717',
                    black: '#000000',
                }
            },
            fontFamily: {
                // Primary font family
                display: ['"Red Hat Display"', 'sans-serif'],
            },
            fontSize: {
                // Custom sizes matching brand typography
                'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '800' }],
                'section': ['3rem', { lineHeight: '1.2', fontWeight: '800' }],
                'subsection': ['2rem', { lineHeight: '1.3', fontWeight: '700' }],
            },
            spacing: {
                // Custom spacing that matches CSS variables
                'xs': '0.5rem',
                'sm': '1rem',
                'md': '1.5rem',
                'lg': '2rem',
                'xl': '3rem',
            },
            borderRadius: {
                'sm': '8px',
                'md': '12px',
                'lg': '25px',
                'xl': '50px',
            },
            boxShadow: {
                'sm': '0 1px 3px rgba(0, 0, 0, 0.08)',
                'md': '0 4px 10px rgba(0, 0, 0, 0.05)',
                'lg': '0 4px 15px rgba(0, 0, 0, 0.08)',
                'xl': '0 8px 25px rgba(0, 0, 0, 0.15)',
                'lift': '0 20px 40px rgba(0, 0, 0, 0.15)',
            },
            transitionDuration: {
                'fast': '200ms',
                'normal': '300ms',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'gradient': 'gradient 15s ease infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
            },
        },
    },
};

/**
 * CSS Custom Properties (for use outside Tailwind)
 * Copy these to your CSS file if needed:
 *
 * :root {
 *     --brand-green: #00953b;
 *     --brand-green-light: #20a75b;
 *     --brand-green-dark: #007a30;
 *     --brand-orange: #f9a01f;
 *     --brand-orange-light: #ffb74d;
 *     --brand-teal: #1cd59d;
 *
 *     --neutral-white: #ffffff;
 *     --neutral-off-white: #f1eeee;
 *     --neutral-light-gray: #f4f4f4;
 *     --neutral-gray: #58595b;
 *     --neutral-dark-gray: #171717;
 *     --neutral-black: #000000;
 *
 *     --font-display: "Red Hat Display", sans-serif;
 * }
 */
