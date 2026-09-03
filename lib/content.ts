/**
 * All site copy lives here so the demo is easy to re-skin.
 * Each cinematic scene also carries the placeholder gradient it renders.
 */

export interface Scene {
  id: string;
  index: string;
  eyebrow: string;
  headline: string;
  description: string;
  /** placeholder gradient stand-in for the eventual photography */
  gradient: string;
  scrollRange: string;
}

export const scenes: Scene[] = [
  {
    id: "bean",
    index: "01",
    eyebrow: "The Origin",
    headline: "Every journey begins\nwith a single bean.",
    description:
      "Every exceptional cup starts long before it's brewed. It begins with a carefully selected bean.",
    gradient:
      "radial-gradient(90% 90% at 50% 45%, #2A1E15 0%, #140E0A 55%, #0B0A09 100%)",
    scrollRange: "0–15%",
  },
  {
    id: "roasting",
    index: "02",
    eyebrow: "Transformation",
    headline: "Crafted by fire.",
    description:
      "Heat unlocks the aroma, depth and character hidden inside every bean.",
    gradient:
      "radial-gradient(80% 80% at 50% 60%, #7A2E10 0%, #3A1608 45%, #140A06 100%)",
    scrollRange: "15–30%",
  },
  {
    id: "grinding",
    index: "03",
    eyebrow: "Precision",
    headline: "Ground to perfection.",
    description:
      "Consistency matters. Every grind is tuned for balance and flavour.",
    gradient:
      "radial-gradient(85% 85% at 50% 50%, #3E2C1E 0%, #23180F 55%, #0E0A07 100%)",
    scrollRange: "30–45%",
  },
  {
    id: "brewing",
    index: "04",
    eyebrow: "Craft",
    headline: "Every drop matters.",
    description:
      "Pressure, temperature and timing come together to create a perfectly balanced espresso.",
    gradient:
      "radial-gradient(80% 90% at 50% 55%, #4A3320 0%, #2A1B10 50%, #100A06 100%)",
    scrollRange: "45–60%",
  },
  {
    id: "cup",
    index: "05",
    eyebrow: "The Result",
    headline: "Curated for every sip.",
    description:
      "Crafted with intention and served with care, every cup reflects our passion for exceptional coffee.",
    gradient:
      "radial-gradient(75% 80% at 50% 48%, #5B4227 0%, #33241528 40%, #0D0A07 100%), radial-gradient(60% 60% at 50% 45%, #2E2116 0%, #0B0A09 100%)",
    scrollRange: "60–75%",
  },
  {
    id: "cafe",
    index: "06",
    eyebrow: "The Destination",
    headline: "More than coffee.\nA place to belong.",
    description:
      "Whether you're meeting friends, working quietly, or enjoying a slow morning, Curators Coffee is designed for meaningful moments.",
    gradient:
      "linear-gradient(180deg, #1D1610 0%, #2A201642 40%, #0B0A09 100%), radial-gradient(70% 60% at 60% 40%, #6B5334 0%, transparent 60%)",
    scrollRange: "75–100%",
  },
];

export interface MenuItem {
  name: string;
  price: string;
  note: string;
  gradient: string;
}

export const menu: MenuItem[] = [
  {
    name: "Signature Coffee",
    price: "₹280",
    note: "Single-origin espresso, pulled to order.",
    gradient: "linear-gradient(160deg, #3A2A1E, #1A1210)",
  },
  {
    name: "Cold Coffee",
    price: "₹320",
    note: "Slow-steeped 18 hours over ice.",
    gradient: "linear-gradient(160deg, #4A3624, #241812)",
  },
  {
    name: "Desserts",
    price: "₹240",
    note: "Rotating patisserie, made in-house daily.",
    gradient: "linear-gradient(160deg, #5B4029, #2A1C12)",
  },
  {
    name: "Seasonal Special",
    price: "₹360",
    note: "This month: cardamom honey latte.",
    gradient: "linear-gradient(160deg, #6B4A2E, #33221548)",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  meta: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "The most considered cup of coffee I've had in the city. It feels like the whole room slows down.",
    name: "Ananya R.",
    meta: "Regular since 2023",
  },
  {
    quote:
      "You can taste the care in every step. The space is calm, the light is beautiful, the espresso is faultless.",
    name: "Dev M.",
    meta: "Local Guide",
  },
  {
    quote:
      "My default work-from-café spot. Warm, quiet, and the seasonal specials are always worth trying.",
    name: "Priya K.",
    meta: "Verified visit",
  },
];

export const galleryTiles = [
  { span: "row-span-2", gradient: "linear-gradient(150deg,#3A2A1E,#120C08)" },
  { span: "", gradient: "linear-gradient(150deg,#5B4029,#241812)" },
  { span: "", gradient: "linear-gradient(150deg,#4A3320,#1A120C)" },
  { span: "row-span-2", gradient: "linear-gradient(150deg,#6B4A2E,#2A1C12)" },
  { span: "", gradient: "linear-gradient(150deg,#3E2C1E,#140E0A)" },
  { span: "", gradient: "linear-gradient(150deg,#7A5636,#33241548)" },
  { span: "", gradient: "linear-gradient(150deg,#4A3624,#1A120C)" },
  { span: "", gradient: "linear-gradient(150deg,#5B4227,#241812)" },
];
