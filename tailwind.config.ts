import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2F95FB",
        mark: "#A3CEF8",
        light: "#4B4B4B",
        lightest: "#6D6D6D",
        "primary-button-hover": "#338AE2",
        "light-button-bg": "#E7F3FF",
        "light-button-hover": "#D5EAFF",
        "light-button-text": "#1A8CFF"
      }
    },
  },
  plugins: [],
};
export default config;
