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
        base: {
          start: "#1a1033",
          end: "#0d0d0d",
        },
        band: {
          teal: "#0f2b2b",
          burgundy: "#2b0f1a",
          slate: "#1a1a2e",
        },
        accent: "#e87040",
        muted: "#d4d4d8",
      },
      fontFamily: {
        heading: ['"Anybody"', "sans-serif"],
        body: ['"Instrument Sans"', "sans-serif"],
      },
      letterSpacing: {
        "tight-heading": "-0.02em",
        "wide-label": "0.15em",
      },
    },
  },
  plugins: [],
};
export default config;
