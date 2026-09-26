/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury feminine skincare palette
        blush: {
          50: '#FFF6F8',   // Very light pink background
          100: '#FCECEF',  // Soft blush pink
          200: '#F8DFE5',  // Delicate rose tint
          300: '#DFA6B4',  // Dusty rose
          400: '#C98294',  // Soft rose accent
          500: '#A45D71',  // Muted rose
          600: '#7A4655',  // Deep rose / burgundy
          700: '#5F3441',  // Rich burgundy
        },
        cream: {
          50: '#FFFFFF',   // Pure white
          100: '#FCFAF9',  // Warm off-white
          200: '#F7F1EF',  // Soft beige / warm cream
          300: '#EFE7E4',  // Warm stone
          400: '#DFD5D1',  // Neutral border
        },
        charcoal: {
          700: '#4A4449',
          800: '#353035',
          900: '#252225',  // Primary typography
          950: '#171517',  // Deepest text
        },
        // Legacy alias mappings for backward compatibility
        brand: {
          violet: '#C98294',
          'violet-light': '#FFF6F8',
          plum: '#7A4655',
          'plum-hover': '#5F3441',
          'plum-deep': '#252225',
          coral: '#C98294',
          'coral-light': '#FCECEF',
          'coral-hover': '#A45D71',
          rose: '#DFA6B4',
        }
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['var(--font-playfair)', 'Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marqueeReverse 35s linear infinite',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'float-reverse': 'floatReverse 8s ease-in-out infinite',
        'petal-drift': 'petalDrift 14s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(1.5deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(8px) rotate(-1.5deg)' },
        },
        petalDrift: {
          '0%': { transform: 'translate(0px, 0px) rotate(0deg)' },
          '50%': { transform: 'translate(15px, -25px) rotate(15deg)' },
          '100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.015)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      }
    },
  },
  plugins: [],
};
