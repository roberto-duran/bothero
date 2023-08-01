/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'border-sky-600',
    'bg-sky-600/50',
    'border-lime-500',
    'bg-lime-500/50',
    'border-amber-600',
    'bg-amber-600/50',
    'border-rose-400',
    'bg-rose-400/50',
    'border-fuchsia-700',
    'bg-fuchsia-700/50',
    'border-pink-600',
    'bg-pink-600/50'
  ],
  theme: {
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
