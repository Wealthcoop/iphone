import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from "../utils";

// This updates your navigation bar links with your new Tech World branding
export const navLists = ["Our Work", "3D Architecture", "Case Studies", "Start a Project"];

// This transforms the video sliders into your agency's feature selling points
export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "We build clean, high-performance web apps.",
      "Smooth 3D graphics that load instantly.",
      "Engineered for high conversion rates.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: [
      "Interactive Product Visualization.",
      "Let buyers explore your hardware",
      "right from their browser tab.",
    ],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "Fluid Motion Design.",
      "Subtle scroll animations that guide users",
      "naturally down the page.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: [
      "Ready to scale your platform?",
      "Let's build something unforgettable together.",
    ],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

// This changes the text labels directly over the interactive 3D viewer panels
export const models = [
  {
    id: 1,
    title: "Matte Gold. Pure Elegance.",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "Deep Cobalt. Engineered Brilliance.",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "Pearl Ceramic. Seamless Design.",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "Carbon Stealth. Dark Mode Defined.",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: 'Standard Layout', value: "small" },
  { label: 'Ultra-Wide Screen', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Service",
  "Contact Sales",
];
