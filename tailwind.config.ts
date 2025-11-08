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
        primary: {
          DEFAULT: "#005f86",
          dark: "#004a6b",
          light: "#0074a3",
        },
        secondary: {
          DEFAULT: "#2D6A4F",
          dark: "#1f4a37",
          light: "#3d8a67",
        },
        background: "#F8FAFC",
        accent: "#E5E7EB",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          md: "3rem",
        },
        screens: {
          xl: "1280px",
        },
      },
    },
  },
  plugins: [],
};
export default config;

