module.exports = {
  mode: 'jit',
  purge: [
    './safelist.txt',
    './app/pages/**/*.vue',
    './app/components/ch/**/*.vue'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        50: '#ffedee',
        100: '#fae1e2',
        200: '#ffccce',
        300: '#fa9da1',
        400: '#fc656b',
        500: '#e53940',
        600: '#d8232a',
        700: '#bf1f25',
        800: '#99191e',
        900: '#801519',
      },
      secondary: {
        50: '#f0f4f7',
        100: '#dfe4e9',
        200: '#acb4bd',
        300: '#828e9a',
        400: '#596978',
        500: '#46596b',
        600: '#2f4356',
        700: '#263645',
        800: '#1c2834',
        900: '#131b22',
      },
      text: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      },
      blue: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
      },
      green: {
        50: '#ecfdf5',
        100: '#d1fae5',
        200: '#a7f3d0',
        300: '#6ee7b7',
        400: '#34d399',
        500: '#10b981',
        600: '#059669',
        700: '#047857',
        800: '#065f46',
        900: '#064e3b',
      },
      indigo: {
        50: '#eef2ff',
        100: '#e0e7ff',
        200: '#c7d2fe',
        300: '#a5b4fc',
        400: '#818cf8',
        500: '#6366f1',
        600: '#4f46e5',
        700: '#4338ca',
        800: '#3730a3',
        900: '#312e81',
      },
      orange: {
        50: '#fff7ed',
        100: '#ffedd5',
        200: '#fed7aa',
        300: '#fdba74',
        400: '#fb923c',
        500: '#f97316',
        600: '#ea580c',
        700: '#c2410c',
        800: '#9a3412',
        900: '#7c2d12',
      },
      pink: {
        50: '#fdf2f8',
        100: '#fce7f3',
        200: '#fbcfe8',
        300: '#f9a8d4',
        400: '#f472b6',
        500: '#ec4899',
        600: '#db2777',
        700: '#be185d',
        800: '#9d174d',
        900: '#831843',
      },
      purple: {
        50: '#f5f3ff',
        100: '#ede9fe',
        200: '#ddd6fe',
        300: '#c4b5fd',
        400: '#a78bfa',
        500: '#8b5cf6',
        600: '#7c3aed',
        700: '#6d28d9',
        800: '#5b21b6',
        900: '#4c1d95',
      },
      red: {
        50: '#ffedee',
        100: '#fae1e2',
        200: '#ffccce',
        300: '#fa9da1',
        400: '#fc656b',
        500: '#e53940',
        600: '#d8232a',
        700: '#bf1f25',
        800: '#99191e',
        900: '#801519',
      },
      teal: {
        50: '#f2fdfc',
        100: '#cbfbf8',
        200: '#98f6f3',
        300: '#5de8ea',
        400: '#2bced4',
        500: '#14afb8',
        600: '#0d8b96',
        700: '#0f6b75',
        800: '#11575f',
        900: '#13474e',
      },
      yellow: {
        50: '#fffbeb',
        100: '#fef3c7',
        200: '#fde68a',
        300: '#fcd34d',
        400: '#fbbf24',
        500: '#f59e0b',
        600: '#d97706',
        700: '#b45309',
        800: '#92400e',
        900: '#78350f',
      },
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      },
      white: '#ffffff',
      black: '#000000',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    fontFamily: {
      regular: 'FrutigerNeueLTPro-Regular',
      italic: 'FrutigerNeueLTPro-Italic',
      bold: 'FrutigerNeueLTPro-Bold',
      'bold-italic': 'FrutigerNeueLTPro-BoldIt',
    },
    boxShadow: {
      sm: '0px 1px 2px 0px rgba(0,0,0,0.05)',
      DEFAULT:
        '0px 1px 2px 0px rgba(0,0,0,0.06), 0px 1px 5px 0px rgba(0,0,0,0.08)',
      md: '0px 2px 4px -1px rgba(0,0,0,0.06), 0px 4px 10px -1px rgba(0,0,0,0.08)',
      lg: '0px 4px 6px -2px rgba(0,0,0,0.04), 0px 10px 20px -6px rgba(0,0,0,0.07)',
      xl: '0px 10px 10px -5px rgba(0,0,0,0.03), 0px 16px 25px -10px rgba(0,0,0,0.07)',
      '2xl':
        '1px 12px 60px -15px rgba(0,0,0,0.11), 0px 10px 20px 0px rgba(0,0,0,0.03)',
    },
    borderRadius: {
      none: '0',
      xs: '0.0625rem',
      sm: '0.125rem',
      DEFAULT: '0.1875rem',
      lg: '0.3125rem',
      xl: '0.375rem',
      '2xl': '0.5rem',
      '3xl': '0.625rem',
      '4xl': '0.75rem',
      '5xl': '0.9375rem',
      '6xl': '1.5rem',
      full: '9999px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
