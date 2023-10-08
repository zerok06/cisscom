/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter'],
      },
      fontSize: {
        '7xl': ['3.3rem', {
          lineHeight: '1.1'
        }],
        }
    },
  },
  plugins: [],
}
