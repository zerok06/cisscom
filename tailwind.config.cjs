/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter'],
      },
      fontSize: {
        '5xl': ['2.8rem', {
          lineHeight: '1.1'
        }],
        }
    },
  },
  plugins: [],
}
