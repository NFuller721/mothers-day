import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        scaleHeart: "scale 3s ease-in-out infinite",
        drawHeart: "draw 2s ease-in-out alternate infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
