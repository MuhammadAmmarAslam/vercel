import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#021D1F",
        secondary: "#657384",
        light100: "#F2F4F7",
        light200: "#D9DDE3",
        light300: "#F9FAFB",
        gray: "#868686",
        gray300: "#7A7A7A",
        gray400: "#B1B1B1",
        gray200: "#EFEFEF",
        gray600: "#E6FEFF",
        gray700: "#8C95A0",
        gray250: "#8C95A0",
        gray500: "#DCDCDC",
        gray100: "#D9D9D9",
        darkgray: "#6A6A6A",
        black100: "#1E1E1E",
        lightblue: "#1A80FC",
        bluebold: "#5272E9",
        purple: "#5D5DFF",
        blue:"#3E66DF",
        darkblack:"#050505",
        purplelight:"#E9EFFF",
        dark: "#292D32",
        lightgreen:"#B9C8F3",
        green:"#34C759",
        green100:"#24B0C9",
        graywhite:"#787880",
      },
      boxShadow: {
        "navigation-item": "0px 4px 50px 0px rgba(51, 57, 91, 0.20)",
        "graph-item": "20px 14px 40px 0px rgba(0,0,0,0.08)",
        "reveiw-box": "20px 8px 80px 0px rgba(0,0,0,0.16)",
        "calendar-box": "0px 0px 0px 1px #E4E4E4",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      fontFamily: {
        inter: "var(--font-inter)",
        jakarta: "var(--font-jakarta)",
        manrope: "var(--font-manrope)",
        montserrat: "var(--font-montserrat)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
