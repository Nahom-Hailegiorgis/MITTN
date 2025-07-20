import { createSlice } from "@reduxjs/toolkit";

// === Option Arrays (unchanged) ===
const hairConcernOptions = [
  { value: "frizz", label: "Frizz" },
  { value: "breakage", label: "Breakage" },
  { value: "splitEnds", label: "Split Ends" },
  { value: "dandruff", label: "Dandruff" },
  { value: "hairLoss", label: "Hair Loss / Thinning" },
  { value: "colorTreated", label: "Color-Treated or Dyed" },
  { value: "heatDamage", label: "Heat Damage" },
  { value: "volume", label: "Flatness / Volume" },
];

const skinTypeOptions = [
  { value: "oily", label: "Oily" },
  { value: "dry", label: "Dry" },
  { value: "normal", label: "Normal" },
  { value: "combination", label: "Combination" },
  { value: "sensitive", label: "Sensitive" },
  { value: "acneProne", label: "Acne-prone" },
  { value: "matureAging", label: "Mature / Aging" },
];

const skinConcernOptions = [
  { value: "acne", label: "Acne" },
  { value: "blackheads", label: "Blackheads / Whiteheads" },
  { value: "hyperpigmentation", label: "Hyperpigmentation" },
  { value: "unevenTone", label: "Uneven skin tone" },
  { value: "texture", label: "Texture" },
  { value: "dryPatches", label: "Dry patches / Flakiness" },
  { value: "oiliness", label: "Oiliness / Shine" },
  { value: "redness", label: "Redness / Rosacea" },
  { value: "largePores", label: "Large pores" },
  { value: "wrinkles", label: "Wrinkles / Fine lines" },
  { value: "dehydration", label: "Dehydration" },
  { value: "darkCircles", label: "Dark circles / Eye bags" },
  { value: "sunDamage", label: "Sun damage / Melasma / Sunburn recovery" },
];

const spfNeedsOptions = [
  { value: "mineral", label: "Mineral" },
  { value: "chemical", label: "Chemical" },
];

const productTextureOptions = [
  { value: "gel", label: "Gel" },
  { value: "cream", label: "Cream" },
  { value: "balm", label: "Balm" },
  { value: "oil", label: "Oil" },
  { value: "serum", label: "Serum" },
];

const exfoliationTypeOptions = [
  { value: "physical", label: "Physical" },
  { value: "chemical", label: "Chemical (AHA/BHA)" },
  { value: "enzyme", label: "Enzyme" },
];

const toggleOptions = {
  hairType: ["Straight", "Wavy", "Curly", "Coily"],
  scalpType: ["Oily", "Dry", "Normal", "Sensitive", "Flaky"],
  porosity: ["Low", "Medium", "High"],
};

const toggleColors = {
  both: "#88B04B",
  online: "#6CACE4",
  "in-store": "#F4A261",
  Low: "#88B04B",
  Medium: "#6CACE4",
  High: "#F4A261",
  Straight: "#6CACE4",
  Wavy: "#88B04B",
  Curly: "#F4A261",
  Coily: "#C86FC9",
  Fine: "#88B04B",
  Thick: "#F4A261",
  Oily: "#F4A261",
  Dry: "#6CACE4",
  Normal: "#88B04B",
  Sensitive: "#FFB5E8",
  Flaky: "#B39CD0",
  Daily: "#4CAF50",
  TwotoThreetimesperWeek: "#FFB74D",
  Weekly: "#81D4FA",
};

const toggleLabels = {
  both: "Both",
  online: "Online",
  "in-store": "In-Store",
  Low: "Low",
  Medium: "Medium",
  High: "High",
  Straight: "Straight",
  Wavy: "Wavy",
  Curly: "Curly",
  Coily: "Coily",
  Fine: "Fine",
  Thick: "Thick",
  Oily: "Oily",
  Dry: "Dry",
  Normal: "Normal",
  Sensitive: "Sensitive",
  Flaky: "Flaky",
  Daily: "Daily",
  TwotoThreetimesperWeek: "2-3x/week",
  Weekly: "Weekly",
};

// === Helpers ===
const getDefaultOptions = (allOptions, defaultValues) =>
  allOptions.filter((opt) => defaultValues.includes(opt.value));

const baseInitialState = {
  pref: "hair",
  minimumrating: 3,
  minPrice: 1,
  maxPrice: 1000,
  hairType: "Straight",
  scalpType: "Normal",
  porosity: "Medium",
  hairConcerns: getDefaultOptions(hairConcernOptions, ["frizz"]),
  skinTypes: getDefaultOptions(skinTypeOptions, ["normal"]),
  skinConcerns: getDefaultOptions(skinConcernOptions, ["acne", "unevenTone"]),
  spfNeeds: getDefaultOptions(spfNeedsOptions, ["chemical"]),
  productTexture: getDefaultOptions(productTextureOptions, ["gel", "cream"]),
  exfoliationType: getDefaultOptions(exfoliationTypeOptions, ["chemical"]),
  allergens: [],
  toggles: {
    crueltyFree: true,
    scented: false,
    ecoFriendly: true,

    isProteinSensitive: false,
  },
  options: {
    hairConcernOptions,
    skinTypeOptions,
    skinConcernOptions,
    spfNeedsOptions,
    productTextureOptions,
    exfoliationTypeOptions,
    toggleOptions,
    toggleColors,
    toggleLabels,
  },
};

const saveToLocalStorage = (state) => {
  try {
    const { options, ...cleanedState } = state;
    localStorage.setItem("userPreferences", JSON.stringify(cleanedState));
  } catch (err) {
    console.error("Error saving to localStorage:", err);
  }
};

const loadInitialState = () => {
  try {
    const saved = localStorage.getItem("userPreferences");
    if (saved) {
      return {
        ...baseInitialState,
        ...JSON.parse(saved),
      };
    }
  } catch (err) {
    console.error("Error loading preferences from localStorage:", err);
  }
  return baseInitialState;
};

// === Slice ===
const preferencesSlice = createSlice({
  name: "preferences",
  initialState: loadInitialState(),
  reducers: {
    setPref: (state, action) => {
      state.pref = action.payload;
      saveToLocalStorage(state);
    },
    setMinimumRating: (state, action) => {
      state.minimumrating = action.payload;
      saveToLocalStorage(state);
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
      saveToLocalStorage(state);
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
      saveToLocalStorage(state);
    },

    setHairType: (state, action) => {
      state.hairType = action.payload;
      saveToLocalStorage(state);
    },
    setScalpType: (state, action) => {
      state.scalpType = action.payload;
      saveToLocalStorage(state);
    },
    setPorosity: (state, action) => {
      state.porosity = action.payload;
      saveToLocalStorage(state);
    },

    setHairConcerns: (state, action) => {
      state.hairConcerns = action.payload;
      saveToLocalStorage(state);
    },
    setSkinTypes: (state, action) => {
      state.skinTypes = action.payload;
      saveToLocalStorage(state);
    },
    setSkinConcerns: (state, action) => {
      state.skinConcerns = action.payload;
      saveToLocalStorage(state);
    },
    setSpfNeeds: (state, action) => {
      state.spfNeeds = action.payload;
      saveToLocalStorage(state);
    },
    setProductTexture: (state, action) => {
      state.productTexture = action.payload;
      saveToLocalStorage(state);
    },
    setExfoliationType: (state, action) => {
      state.exfoliationType = action.payload;
      saveToLocalStorage(state);
    },

    setAllergens: (state, action) => {
      state.allergens = action.payload;
      saveToLocalStorage(state);
    },

    togglePref: (state, action) => {
      const key = action.payload;
      state.toggles[key] = !state.toggles[key];
      saveToLocalStorage(state);
    },
    cycleToggle: (state, action) => {
      const { field, options } = action.payload;
      const currentValue = state[field];
      const currentIndex = options.indexOf(currentValue);
      const nextIndex = (currentIndex + 1) % options.length;
      state[field] = options[nextIndex];
      saveToLocalStorage(state);
    },
    resetPreferences: () => {
      localStorage.removeItem("userPreferences");
      return baseInitialState;
    },
  },
});

export const {
  setPref,
  setMinimumRating,
  setMinPrice,
  setMaxPrice,
  setHairType,
  setScalpType,
  setPorosity,
  setHairConcerns,
  setSkinTypes,
  setSkinConcerns,
  setSpfNeeds,
  setProductTexture,
  setExfoliationType,
  setAllergens,
  togglePref,
  cycleToggle,
  resetPreferences,
} = preferencesSlice.actions;

export default preferencesSlice.reducer;
