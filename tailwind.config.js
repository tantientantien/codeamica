/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      padding: {
        default: "54px",
      },
      width: {
        card: "300px",
      },
      height: {
        card: "300px",
      },
      minWidth: {
        cardGrid: "988px",
      },
      lineHeight: {
        card: "23.7px",
      },
    },
  },
  plugins: [],
};
