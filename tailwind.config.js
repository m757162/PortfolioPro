/** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#2D3748",
//         secondary: "#4A5568", 
//         accent: "#3182CE",
//         background: "#FFFFFF",
//         surface: "#F7FAFC",
//         success: "#38A169",
//         warning: "#D69E2E",
//         error: "#E53E3E",
//       },
//       fontFamily: {
//         sans: ['Inter', 'system-ui', 'sans-serif'],
//         serif: ['Crimson Pro', 'Georgia', 'serif'],
//       },
//       animation: {
//         'fade-in': 'fadeIn 0.6s ease-out forwards',
//         'slide-up': 'slideUp 0.8s ease-out forwards',
//       },
//     },
//   },
//   plugins: [
//     require('@tailwindcss/forms'),
//     require('@tailwindcss/typography'),
//   ],
// }


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep navy for trust and professional authority
        primary: {
          DEFAULT: "#1a237e", // indigo-900
          50: "#e8eaf6", // indigo-50
          100: "#c5cae9", // indigo-100
          200: "#9fa8da", // indigo-200
          300: "#7986cb", // indigo-300
          400: "#5c6bc0", // indigo-400
          500: "#3f51b5", // indigo-500
          600: "#3949ab", // indigo-600
          700: "#303f9f", // indigo-700
          800: "#283593", // indigo-800
          900: "#1a237e", // indigo-900
        },
        // Secondary Colors - Coral energy for creative personality highlights
        secondary: {
          DEFAULT: "#ff6b6b", // red-400
          50: "#fef2f2", // red-50
          100: "#fee2e2", // red-100
          200: "#fecaca", // red-200
          300: "#fca5a5", // red-300
          400: "#f87171", // red-400
          500: "#ef4444", // red-500
          600: "#dc2626", // red-600
          700: "#b91c1c", // red-700
          800: "#991b1b", // red-800
          900: "#7f1d1d", // red-900
        },
        // Accent Colors - Gold premium positioning for key achievements
        accent: {
          DEFAULT: "#ffd700", // amber-300
          50: "#fffbeb", // amber-50
          100: "#fef3c7", // amber-100
          200: "#fde68a", // amber-200
          300: "#fcd34d", // amber-300
          400: "#fbbf24", // amber-400
          500: "#f59e0b", // amber-500
          600: "#d97706", // amber-600
          700: "#b45309", // amber-700
          800: "#92400e", // amber-800
          900: "#78350f", // amber-900
        },
        // Background and Surface Colors
        background: "#fafafa", // gray-50 - Clean canvas supporting content focus
        surface: "#ffffff", // white - Pure content containers with subtle depth
        
        // Text Colors
        text: {
          primary: "#2d3748", // gray-700 - Comfortable extended reading without harshness
          secondary: "#718096", // gray-500 - Clear hierarchy without losing readability
        },
        
        // Status Colors
        success: "#48bb78", // green-400 - Positive confirmation that builds confidence
        warning: "#ed8936", // orange-400 - Attention without creating anxiety
        error: "#f56565", // red-400 - Helpful guidance maintaining professional tone
        
        // Border Colors
        border: "#e2e8f0", // gray-200
        "border-light": "#f7fafc", // gray-50
      },
      fontFamily: {
        // Headlines - Geometric confidence that commands attention
        montserrat: ['Montserrat', 'sans-serif'],
        // Body - Exceptional readability supporting extended content engagement
        'source-sans': ['Source Sans Pro', 'sans-serif'],
        // Accents - Personal warmth for signature elements
        'dancing-script': ['Dancing Script', 'cursive'],
        // Default sans-serif stack
        sans: ['Source Sans Pro', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'heading': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'subheading': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '400' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'DEFAULT': '6px', // Modern softness without trendy excess
      },
      boxShadow: {
        'primary': '0 4px 12px rgba(26, 35, 126, 0.1)', // Subtle depth with navy tint
        'light': '0 2px 8px rgba(0, 0, 0, 0.05)', // Light shadow for subtle depth
        'card': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 25px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
        'scale-in': 'scaleIn 300ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionDuration: {
        '300': '300ms', // Purposeful transitions for state changes
      },
      transitionTimingFunction: {
        'out': 'ease-out', // Smooth, professional transitions
      },
    },
  },
  plugins: [],
}