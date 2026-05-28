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
export const navLists = ["Our Studio", "3D Showcase", "Case Studies", "Hire Tech World"];

// This transforms the video sliders into your agency's feature selling points
export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "We engineer immersive web experiences.",
      "Game-changing 3D graphics.",
      "Groundbreaking conversion performance.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: [
      "Dynamic Product Visualization.",
      "Let customers explore your hardware",
      "from every single angle, live.",
    ],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "Fluid Motion Design.",
      "Silky smooth scroll animations",
      "powered by high-end GSAP technology.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: [
      "Ready to launch your platform?",
      "Let's build something unforgettable.",
    ],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

// This changes the text labels directly over the interactive 3D viewer panels
export const models = [
  {
    id: 1,
    title: "Interactive Web Design Concept: Matte Gold Finish",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "Interactive Web Design Concept: Deep Cobalt Finish",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "Interactive Web Design Concept: Pearl Ceramic Finish",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "Interactive Web Design Concept: Carbon Stealth Finish",
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
