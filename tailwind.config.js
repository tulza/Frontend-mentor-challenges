/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,json}"],
  theme: {
    extend: {
      colors: {
        homehl: `hsl(var(--home-highlight))`,
        grayish: `hsl(var(--grayish))`,
        homebg: `hsl(var(--home-background))`,
      },
    },
  },
  plugins: [],
};
