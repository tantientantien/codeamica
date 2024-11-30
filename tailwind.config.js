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
        double: "108px"
      },
      width: {
        card: "300px",
        infoSection: "calc(100% - 216px)"
      },
      height: {
        card: "300px",
        courseSection: "493px"
      },
      minWidth: {
        cardGrid: "988px",
      },
      lineHeight: {
        card: "23.7px",
      },
      gap: {
        syllabusCol: "10px"
      }
    },
  },
  plugins: [],
};
