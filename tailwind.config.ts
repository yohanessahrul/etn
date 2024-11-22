import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'col-identity-1': '#FFCC00', // yellow
      'col-identity-2': '#0E9749', // green
      'primary': {
        100: '#CCFACD',
        200: '#9CF3AA',
        300: '#66DF82',
        400: '#3EC068',
        500: '#0E9749',
        600: '#0A8049',
        700: '#086C48',
        800: '#045841',
        900: '#02483D',
      },
      'neutral': {
        100: '#F3F3F3',
        200: '#E7E7E7',
        300: '#B7B7B7',
        400: '#707070',
        500: '#121212',
        600: '#0F0D0E',
        700: '#0B0A08',
        800: '#0A0607',
        900: '#080405',
      },
      'secondary': {
        100: '#FFF9CC',
        200: '#FFF099',
        300: '#FFE668',
        400: '#FFDC40',
        500: '#FFCD00',
        600: '#DAAA00',
        700: '#B68B00',
        800: '#936D00',
        900: '#7B5701',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
