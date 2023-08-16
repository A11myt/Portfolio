const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.{js,jsx,mdx}", "./public/**/*.js"],
  important: true,
  darkMode: false,
  theme: {
    colors: {
      main: {
        10: 'var(--mainOrange)',
        25: 'var(--peachOrange)',
        50: 'var(--lightOrange)',
        100: 'var( --antiqueWhite)',
        125: 'var( --antiqueWhiteLight)',
      },
      accent: {
        10: 'var(--blue)',
        25: 'var(--blueJeans)',
        50: 'var(--lightSkyBlue)',
        100: 'var(--nonPhotoBlue)',
      },
      dark: {
        10: 'var()',
        25: 'var()',
        50: 'var()',
        100: 'var()',
      },
      light: {
        10: 'var()',
        25: 'var()',
        50: 'var()',
        100: 'var()',
      },
    },
    fontWeight: {
      hairline: '100',
      extralight: '200',
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    fontFamily: {
      'PassionOne': ['PassionOne', 'monospace'],
      'Hack': ['Hack', 'monospace'],
      'DMMono': ['DMMono', 'monospace']
    },
    extend: {
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
      },
      gridTemplateColumns: {
        'mycols': '65% 35%',
      }

    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      const newComponents = {
        '.vertical-rl': {
          writingMode: 'vertical-rl'
        },
      
      }
      addComponents(newComponents)
    }),
  ]
}