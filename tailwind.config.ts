import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#151c2c",
        secondary: "#182237",
        lightBg: "#2e374a",
        txtColor: "#fff",
        secondaryTxt: "#b7bac1",
        positive: "rgb(132 204 22 / 1)",
        negative: "rgb(239 68 68 / 1)",
      },
    },
  },
  plugins: [],
}
export default config
