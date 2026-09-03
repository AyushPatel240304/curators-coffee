import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cinematic charcoal base — the story lives in darkness,
        // photography supplies the warmth.
        ink: "#0B0A09",        // near-black background for cinematic scenes
        charcoal: "#1A1613",   // slightly lifted panels
        cream: "#F3ECE1",      // warm off-white for light business sections
        sand: "#E4D8C7",       // muted neutral for borders / captions
        coffee: "#3A2A1E",     // deep coffee brown
        copper: "#C6784A",     // restrained copper accent (not terracotta)
        copperlt: "#E0A277",   // lighter copper for hovers
      },
      fontFamily: {
        // Display: high-contrast editorial serif.
        display: ["var(--font-display)", "Georgia", "serif"],
        // Body: clean humanist grotesque.
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        // Utility: mono for the scroll timeline labels (a real sequence).
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      transitionTimingFunction: {
        glide: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
