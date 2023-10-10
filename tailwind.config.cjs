/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter'],
      },
      fontSize: {
        '5xl': ['3.4rem', {
          lineHeight: '1.2'
        }],
        }
    },
  },
  plugins: [],
}
