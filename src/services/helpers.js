import { FEATURE_KEYS } from '../constants/campers.js';

export const capitalizeFirstLetter = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const formatPrice = (price) => {
  return Number(price).toFixed(2);
};

export function featuresExisted(camper) {
  const selectedFeatures = FEATURE_KEYS.reduce((acc, key) => {
    if (key in camper) {
      acc[key] = camper[key];
    }
    return acc;
  }, {});

  const filteredFeatures = [];

  for (const key in selectedFeatures) {
    if (selectedFeatures[key]) {
      filteredFeatures.push(key);
    }
  }
  return filteredFeatures;
}
