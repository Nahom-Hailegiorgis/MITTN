/*
- takes the info of what the user the product clicked and ai fills in the brand, product name, price, etc.
    - ai finds keywords of the brand so that it takes the correct image from the logos folder in assets folder to display it
    - ai finds 3 similar products with similar props and ingredients
*/

export const productData = {
  name: "Product Name",
  brand: "Brand",
  image:
    "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=400&fit=crop",
  price: "$9.99",
  score: 50,
  scoreOutOf: 100,
  description: "A long description",
  features: ["Scented", "Low-Priority", "Cruelty Free", "Vegan"],
  ingredients: [
    "Aqua/Water",
    "Glycerin",
    "Sodium Cocoyl Glycinate",
    "Coco-Betaine",
    "Ceramide NP",
    "Ceramide AP",
    "Ceramide EOP",
    "Hyaluronic Acid",
    "Niacinamide",
    "Salicylic Acid",
  ],
  whatDoYouLike: "",
  similarProducts: [
    //ai fills this stuff out
    /*
    {
      id: 1,
      name: "Gentle Skin Cleanser",
      brand: "Cetaphil",
      image:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=150&h=200&fit=crop",
      price: "$12.99",
      rating: 4.3,
    },
    {
      id: 2,
      name: "Hydrating Cleanser",
      brand: "Neutrogena",
      image:
        "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=150&h=200&fit=crop",
      price: "$9.99",
      rating: 4.1,
    },
    {
      id: 3,
      name: "Foaming Facial Cleanser",
      brand: "La Roche-Posay",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=150&h=200&fit=crop",
      price: "$15.99",
      rating: 4.6,
    },
    */
  ],
};
