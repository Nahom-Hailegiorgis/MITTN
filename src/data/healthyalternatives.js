/*
- takes the data of the 3 products the user likes then spits out 5 similar products.
    - in this way: if user says hair for all 3 products, then the 5 similar will be hair.
    - if the user says hair, skin, energy drink then the 5 will be split between the 3 topics (whatever is easiest 2 hair 2 skin 1 energy)
    - the healthy alternatives are not produced until user clicks "healthier" button
*/
export const whatUserLikes = [
  {
    id: 1,
    name: "Artifical Alternative 1",
    description: "Placeholder for bad alternative product",
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=150&h=200&fit=crop",
  },
  {
    id: 2,
    name: "Artifical Alternative 2",
    description: "Placeholder for bad alternative product",
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=150&h=200&fit=crop",
  },
];

export const healthyAlternativesData = [
  {
    id: 1,
    name: "Natural Alternative 1",
    description: "Placeholder for healthy alternative product",
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=150&h=200&fit=crop",
  },
  {
    id: 2,
    name: "Natural Alternative 2",
    description: "Placeholder for healthy alternative product",
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=150&h=200&fit=crop",
  },
];
