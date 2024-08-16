import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: "#22577a", // Sidebar background blue
          dark: "#043658", // Darker variant for hover effects
        },
        secondary: {
          DEFAULT: "#38A3A5", // Main background light gray
          light: "#57CC99", // Cards background
          dark: "#374151", // Text color for dark elements
        },
        accent: {
          green: "#80ED99", // Accent color for stats, e.g. "Active Customers"
          red: "#C7F9CC", // Accent color for alerts or negative indicators
        },
        text: {
          DEFAULT: "#1F2937", // Default text color (dark gray)
          light: "#1F2937", // Light text color
        },
      },
    },
  },
  plugins: [],
};

export default config;
