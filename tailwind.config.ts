import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#08131F",
        solar: {
          100: "#FFF2BF",
          300: "#FFD233",
          500: "#FFB800",
          600: "#E59A00",
        },
        ocean: {
          50: "#F3F7FF",
          100: "#E5EEFF",
          300: "#7EA8E8",
          500: "#1764D8",
          700: "#0B3C91",
          900: "#071D4A",
          950: "#030F2C",
        },
        slatebrand: {
          100: "#E6EBEF",
          300: "#A9B7C1",
          500: "#687B88",
          700: "#344957",
          900: "#172631",
        },
        paper: "#F7FAFC",
        mist: "#DDE7ED",
      },
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      boxShadow: {
        glow: "0 0 60px rgba(245, 183, 0, 0.18)",
        panel: "0 24px 80px rgba(6, 23, 37, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
