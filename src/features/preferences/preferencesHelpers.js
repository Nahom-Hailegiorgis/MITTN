// Helper utility to easily access preferences state and actions
// Import this file in any component where you need to access preferences

import { useSelector, useDispatch } from "react-redux";
import {
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
  setAllPreferences,
} from "./features/preferences/preferencesSlice";

// Custom hook to easily access all preferences state and actions
export const usePreferences = () => {
  const dispatch = useDispatch();
  const preferences = useSelector((state) => state.preferences);

  // Return all state and pre-bound action creators
  return {
    // State
    ...preferences,

    // Actions (pre-bound with dispatch)
    actions: {
      setPref: (pref) => dispatch(setPref(pref)),
      setMinimumRating: (rating) => dispatch(setMinimumRating(rating)),
      setMinPrice: (price) => dispatch(setMinPrice(price)),
      setMaxPrice: (price) => dispatch(setMaxPrice(price)),
      setHairType: (type) => dispatch(setHairType(type)),

      setScalpType: (type) => dispatch(setScalpType(type)),
      setPorosity: (porosity) => dispatch(setPorosity(porosity)),
      setHairConcerns: (concerns) => dispatch(setHairConcerns(concerns)),
      setSkinTypes: (types) => dispatch(setSkinTypes(types)),
      setSkinConcerns: (concerns) => dispatch(setSkinConcerns(concerns)),
      setSpfNeeds: (needs) => dispatch(setSpfNeeds(needs)),
      setProductTexture: (texture) => dispatch(setProductTexture(texture)),
      setExfoliationType: (type) => dispatch(setExfoliationType(type)),

      setAllergens: (allergens) => dispatch(setAllergens(allergens)),

      togglePref: (key) => dispatch(togglePref(key)),
      cycleToggle: (field, options) =>
        dispatch(cycleToggle({ field, options })),
      resetPreferences: () => dispatch(resetPreferences()),
      setAllPreferences: (preferences) =>
        dispatch(setAllPreferences(preferences)),
    },
  };
};

// Helper function to get current preferences as a plain object (useful for saving to database)
export const usePreferencesData = () => {
  const preferences = useSelector((state) => state.preferences);

  // Remove the options object since it's static data
  const { options, ...preferencesData } = preferences;

  return preferencesData;
};

// Helper function to get only the options (useful for dropdowns)
export const usePreferencesOptions = () => {
  const { options } = useSelector((state) => state.preferences);
  return options;
};

// Helper selectors for specific preference categories
export const useHairPreferences = () => {
  return useSelector((state) => ({
    hairType: state.preferences.hairType,

    scalpType: state.preferences.scalpType,
    porosity: state.preferences.porosity,

    hairConcerns: state.preferences.hairConcerns,
  }));
};

export const useSkinPreferences = () => {
  return useSelector((state) => ({
    skinTypes: state.preferences.skinTypes,
    skinConcerns: state.preferences.skinConcerns,
    spfNeeds: state.preferences.spfNeeds,
    productTexture: state.preferences.productTexture,
    exfoliationType: state.preferences.exfoliationType,
  }));
};

export const useGeneralPreferences = () => {
  return useSelector((state) => ({
    pref: state.preferences.pref,
    minimumrating: state.preferences.minimumrating,
    minPrice: state.preferences.minPrice,
    maxPrice: state.preferences.maxPrice,

    toggles: state.preferences.toggles,

    allergens: state.preferences.allergens,
  }));
};

// Helper function to format preferences for API calls or saving
export const formatPreferencesForSave = (preferences) => {
  return {
    general: {
      pref: preferences.pref,
      minimumrating: preferences.minimumrating,
      minPrice: preferences.minPrice,
      maxPrice: preferences.maxPrice,

      toggles: preferences.toggles,

      allergens: preferences.allergens,
    },
    hair: {
      hairType: preferences.hairType,

      scalpType: preferences.scalpType,
      porosity: preferences.porosity,

      hairConcerns: preferences.hairConcerns,
    },
    skin: {
      skinTypes: preferences.skinTypes,
      skinConcerns: preferences.skinConcerns,
      spfNeeds: preferences.spfNeeds,
      productTexture: preferences.productTexture,
      exfoliationType: preferences.exfoliationType,
    },
  };
};
