// Import all images
import celsius from "../assets/carousel_images/celsius.webp";
import redbull from "../assets/carousel_images/redbull.png";
import alaninu from "../assets/carousel_images/alaninu.webp";
import clifbar from "../assets/carousel_images/clifbar.webp";
import naturevalley from "../assets/carousel_images/naturevalley.png";
import larabar from "../assets/carousel_images/larabar.webp";
import sheamoisture from "../assets/carousel_images/sheamoisture.webp";
import cantu from "../assets/carousel_images/cantu.jpg";
import ogx from "../assets/carousel_images/ogx.webp";
import neutrogena from "../assets/carousel_images/neutrogena.avif";
import cleanandclear from "../assets/carousel_images/cleanandclear.webp";
import stives from "../assets/carousel_images/stives.webp";

const carouselData = [
  // ENERGY DRINKS
  {
    id: 1,
    image: celsius,
    title: "Celsius: Gut Disruptor Under the Mask",
    description:
      "A 2022 mouse study showed that low-dose sucralose—used in Celsius—is enough to significantly disrupt gut microbiota, reducing beneficial bacteria like Clostridium and butyrate producers, which inflame the gut and can affect metabolism long-term.",
  },
  {
    id: 2,
    image: redbull,
    title: "Red Bull: Short-Term Boost, Long-Term Risk",
    description:
      "Long‑term consumption linked to elevated blood pressure and heart rate, with acidic and sugary formula shown to erode tooth enamel—twice as much as soda over 5 days.",
  },
  {
    id: 3,
    image: alaninu,
    title: "Alani Nu: Sweet Package, Hidden Culprits",
    description:
      "Also sweetened with sucralose and artificial flavoring, which carry the same microbiome-disrupting effects shown in clinical trials—up to 20% rise in insulin response in some users.",
  },

  // ENERGY BARS
  {
    id: 4,
    image: clifbar,
    title: "Clif Bar: Natural? More Like a Sugar Spike",
    description:
      "Contains ~20 g sugar per bar (brown rice syrup). High sugar intake from bars like this is tied to insulin resistance and metabolic strain—30% increased diabetes risk from sweet drinks.",
  },
  {
    id: 5,
    image: naturevalley,
    title: "Nature Valley: Nature-Approved or Preserved?",
    description:
      "Although labelled '100% natural,' it often contains GMO corn syrup & preservatives, contributing to processed sugar overload and metabolic inflammation.",
  },
  {
    id: 6,
    image: larabar,
    title: "Lärabar: Minimal, But Not Innocent",
    description:
      "Some flavors include gums and oils that exacerbate digestion issues. Misleading serving sizes can hide excess calories—critical for gut comfort and weight management.",
  },

  // HAIR PRODUCTS
  {
    id: 7,
    image: sheamoisture,
    title: "SheaMoisture: Curl-Friendly? Check the Science",
    description:
      "Contains fragrance, alcohols, and comedogenic butters. These can disrupt scalp microbiome and clog follicles—leading to breakage, irritation, and worse curl definition over time.",
  },
  {
    id: 8,
    image: cantu,
    title: "Cantu: Temporary Smoothness, Chronic Clogging",
    description:
      "Mineral oils and silicones give shine, but build up on hair and scalp—blocking pores and hindering moisture absorption long-term.",
  },
  {
    id: 9,
    image: ogx,
    title: "OGX Shampoo: Formaldehyde Release Warning",
    description:
      "Contains DMDM hydantoin, a formaldehyde-releasing preservative linked in lawsuits to scalp irritation and hair shedding—contradicting its nourishing claims.",
  },

  // SKINCARE
  {
    id: 10,
    image: neutrogena,
    title: "Neutrogena Hydro Boost: Drying in Disguise",
    description:
      "Alcohol‑based polymers strip natural oils while promising hydration—damaging sensitive skin's barrier function and increasing long‑term dryness.",
  },
  {
    id: 11,
    image: cleanandclear,
    title: "Clean & Clear: Gentle? Think Again",
    description:
      "Packed with SLS and fragrances, proven to strip the skin barrier—leading to irritation, overproduction of oil, and microbiome imbalance.",
  },
  {
    id: 12,
    image: stives,
    title: "St. Ives Apricot Scrub: Scrubbing Away Skin Health",
    description:
      "Class-action lawsuit claimed crushed walnut shells cause microscopic skin tears and inflammation. Experts say it disrupts the skin barrier—risking chronic sensitivity.",
  },
];

export default carouselData;
