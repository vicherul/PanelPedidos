module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          50: '#eef6ff',
          100: '#dbeafe',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        card: '0 6px 18px rgba(15, 23, 42, 0.08)',
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [],
}
