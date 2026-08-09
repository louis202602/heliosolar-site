import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#08131F",
        solar: {
          50: "#FFF9E6",
          100: "#FFF2BF",
          200: "#FFE68A",
          300: "#FFD233",
          400: "#FFC01A",
          500: "#FFB800",
          600: "#E59A00",
          700: "#B87A00",
        },
        ocean: {
          50: "#F3F7FF",
          100: "#E5EEFF",
          200: "#C6DAF7",
          300: "#7EA8E8",
          400: "#3F7BD8",
          500: "#1764D8",
          600: "#0F4FB0",
          700: "#0B3C91",
          800: "#082C6E",
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
        display: ["var(--font-display)", "Sora", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      boxShadow: {
        glow: "0 0 60px rgba(255, 184, 0, 0.18)",
        panel: "0 24px 80px rgba(6, 23, 37, 0.18)",
        card: "0 18px 60px rgba(6, 23, 37, 0.07)",
        "card-hover": "0 34px 90px rgba(6, 23, 37, 0.16)",
        "solar-btn": "0 12px 34px rgba(255, 184, 0, 0.28)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "reveal-up": {
          from: { opacity: "0", transform: "translateY(22px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
