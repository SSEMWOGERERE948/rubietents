import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Replace these with exact colors from the Rubie Tents logo.
          DEFAULT: "#8B1E3F",
          dark: "#5F132A",
          gold: "#D99A2B",
          sand: "#FFF7EA",
          ink: "#191716",
          muted: "#6F625B",
        },
      },
      boxShadow: {
        soft: "0 16px 40px rgba(25, 23, 22, 0.10)",
      },
      backgroundImage: {
        "fabric-grid":
          "linear-gradient(rgba(139,30,63,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(139,30,63,0.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
