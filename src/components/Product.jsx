import React, { useState } from 'react';
import redbull from "../assets/carousel_images/redbull.png";
import ogx from "../assets/carousel_images/ogx.webp";
import neutrogena from "../assets/carousel_images/neutrogena.avif";
import cleanandclear from "../assets/carousel_images/cleanandclear.webp";
import stives from "../assets/carousel_images/stives.webp";

function Product() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showReviews, setShowReviews] = useState(false);

  // Product data from JSON
  const productData = {
    name: "Mini Glycolic Acid 7% Exfoliating and Brightening Daily Toner",
    brand: "The Ordinary",
    description: "Shop The Ordinary's Glycolic Acid 7% Toning Solution at Sephora. This exfoliating toning solution contains seven percent glycolic acid.",
    images: [
      "https://www.sephora.com/productimages/sku/s2714384-main-hero.jpg",
      "https://www.sephora.com/productimages/product/p509295-av-8-zoom.jpg",
      "https://www.sephora.com/productimages/product/p509295-av-12-zoom.jpg",
      "https://www.sephora.com/productimages/product/p509295-av-9-zoom.jpg"
    ],
    rating: 4.58,
    reviewCount: 750,
    price: "$8.70",
    url: "https://www.sephora.com/product/the-ordinary-mini-glycolic-acid-7-exfoliating-toning-solution-P509295",
    ingredients: "Glycolic Acid: An alpha hydroxy acid that exfoliates the skin.-Tasmanian Pepperberry Derivative: Helps reduce irritation associated with acid use.-Ginseng Root and Aloe Vera: Offer both visible radiance and soothing benefits.Aqua (Water), Glycolic Acid, Rosa damascena flower water, Centaurea cyanus flower water, Aloe Barbadensis Leaf Water, Propanediol, Glycerin, Triethanolamine, Aminomethyl Propanol, Panax Ginseng Root Extract, Tasmannia Lanceolata Fruit/Leaf Extract, Aspartic Acid, Alanine, Glycine, Serine, Valine, Isoleucine, Proline, Threonine, Histidine, Phenylalanine, Glutamic Acid, Arginine, PCA, Sodium PCA, Sodium Lactate, Fructose, Glucose, Sucrose, Urea, Hexyl Nicotinate, Dextrin, Citric Acid, Polysorbate 20, Gellan Gum, Trisodium Ethylenediamine Disuccinate, Sodium Chloride, Hexylene Glycol, Potassium Sorbate, Sodium Benzoate, 1,2-Hexanediol, Caprylyl Glycol.This formulation features a Tasmanian Pepperberry derivative, a plant extract that helps soothe the skin and reduce irritation commonly associated with exfoliation, making it suitable for frequent use. Additionally, the presence of this natural ingredient may cause seasonal color variation in the formula. With a carefully calibrated pH of approximately 3.6, the toner has an optimal balance between salt and acidity.",
    howToUse: "Suggested Usage:Face/Neck Application: Apply once daily, ideally in the evening. Apply to the face and neck using a cotton pad or ﬁngers.Scalp Application: Apply to dry scalp, three times a week. Tilt your head back and use the nozzle to gently dispense product from the front to the back of the head in a sweeping motion. Massage well.Body Application (Strawberry Skin): Apply to rough, bumpy skin on the arms and legs - Keratosis Pilaris (sometimes referred to as KP or strawberry skin). Do not rinse oﬀ. Do not use on sensitive, peeling, or compromised skin. Avoid the eye contour and contact with eyes.If eye or skin irritation occurs, rinse thoroughly, cease use, and consult a physician. Use only as directed on unbroken skin. Patch testing prior to use is advised. Keep out of reach of children.Sunburn Alert: This product contains an alpha hydroxy acid (AHA) that may increase your skin's sensitivity to the sun and particularly the possibility of sunburn. Use a sunscreen, wear protective clothing, and limit sun exposure while using this product and for a week afterwards.",
    reviews: [
      {
        name: "frenchvanilla46",
        datePublished: "2025-07-15",
        description: "After using this product I will tell you it works wonders! This is my second bottle and it cleared the hyperpigmentation on my body in just one month I am honestly shocked and it help with the acne scares on my face this is a a 10:10",
        rating: 5
      },
      {
        name: "Baileyxx",
        datePublished: "2025-07-05",
        description: "This product doesn't smell bad at all no irritation or burn marks it's gentle and a great product overall",
        rating: 5
      },
      {
        name: "murphy123d",
        datePublished: "2025-07-03",
        description: "I've been using this on ingrown hairs and it's worked wonders and I've tried everything it seems. Will always have this on hand.",
        rating: 4
      },
      {
        name: "UmQuinn",
        datePublished: "2025-07-01",
        description: "I like trying new skincare, but I always come back to this product. Nothing compares to the natural glow it gives me, and it helps keep pesky sebum at bay. It's a holy grail for my dry skin.",
        rating: 5
      },
      {
        name: "Aydila",
        datePublished: "2025-06-29",
        description: "I felt some kinda itching and warming up at the beginning. I'm too scared to use it. But after 3-4 days my face felt good and got smooth. I only use it as a night skincare. Absolutely loved it",
        rating: 5
      }
    ]
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} style={{ color: '#ffd700' }}>★</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" style={{ color: '#ffd700' }}>☆</span>);
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} style={{ color: '#ccc' }}>☆</span>);
    }
    
    return stars;
  };

  return (
    <div className='product'>
      {/* Left section - Images */}
      <div className='prod'>
        <img
          className='prod-img'
          src={productData.images[selectedImage]}
          alt={productData.name}
        />
        <div className='image-thumbnails'>
          {productData.images.slice(0, 4).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${productData.name} view ${index + 1}`}
              className={`thumbnail ${selectedImage === index ? 'selected' : ''}`}
              onClick={() => setSelectedImage(index)}
            />
          ))}
        </div>
        
        {/* Compatibility and Health Scores */}
        <div className='scores-section'>
          <div className='score-item'>
            <h4>Preference Compatibility</h4>
            <div className='score-value'>--/100</div>
            <div className='score-note'>Not yet calculated</div>
          </div>
          <div className='score-item'>
            <h4>Health Score</h4>
            <div className='score-value'>--/100</div>
            <div className='score-note'>Analyzing ingredients...</div>
          </div>
        </div>

        {/* Product Properties */}
        <div className='product-props'>
          <h4>Product Properties</h4>
          <div className='props-list'>
            <div className='prop-item'>
              <span className='prop-label'>Allergens:</span>
              <span className='prop-value'>Not specified</span>
            </div>
            <div className='prop-item'>
              <span className='prop-label'>Scented:</span>
              <span className='prop-value'>No</span>
            </div>
            <div className='prop-item'>
              <span className='prop-label'>Porosity:</span>
              <span className='prop-value'>Low</span>
            </div>
            <div className='prop-item'>
              <span className='prop-label'>Hair Type:</span>
              <span className='prop-value'>All types</span>
            </div>
            <div className='prop-item'>
              <span className='prop-label'>Hair Concerns:</span>
              <span className='prop-value'>Not applicable</span>
            </div>
            <div className='prop-item'>
              <span className='prop-label'>Exfoliation Type:</span>
              <span className='prop-value'>Chemical (AHA)</span>
            </div>
            <div className='prop-item'>
              <span className='prop-label'>SPF Needs:</span>
              <span className='prop-value'>Not applicable</span>
            </div>
            <div className='prop-item'>
              <span className='prop-label'>Skin Type:</span>
              <span className='prop-value'>Oily, Normal, Combination</span>
            </div>
            <div className='prop-item'>
              <span className='prop-label'>Skin Concerns:</span>
              <span className='prop-value'>Oily, Hyperpigmentation, Uneven tone, Texture, Large pores</span>
            </div>
            <div className='prop-item'>
              <span className='prop-label'>Protein Sensitive:</span>
              <span className='prop-value'>No</span>
            </div>
            <div className='prop-item'>
              <span className='prop-label'>Scalp Type:</span>
              <span className='prop-value'>Oily, Normal</span>
            </div>
          </div>
        </div>
      </div>

      {/* Middle section - Product Details */}
      <div className='prod-details'>
        <a href={productData.url} target="_blank" rel="noopener noreferrer" className='product-link'>
          <h1 className='product-name'>{productData.name}</h1>
        </a>
        
          <h3 className='brand-name'>{productData.brand}</h3>
        
        <div className='rating-section'>
          <div className='stars'>
            {renderStars(productData.rating)}
            <span className='rating-text'>({productData.rating}/5)</span>
            <span className='review-count'>{productData.reviewCount} reviews</span>
          </div>
        </div>

        <div className='price'>{productData.price}</div>

        <div className='description-section'>
          <h4>Description</h4>
          <p className='prod-description'>{productData.description}</p>
        </div>

        <div className='ingredients-section'>
          <h4>Ingredients</h4>
          <p className='ingredients'>{productData.ingredients}</p>
        </div>

        <div className='how-to-use-section'>
          <h4>How to Use</h4>
          <p className='how-to-use'>{productData.howToUse}</p>
        </div>

        <div className='reviews-section'>
          <h4 
            className='reviews-header'
            onClick={() => setShowReviews(!showReviews)}
            style={{ cursor: 'pointer' }}
          >
            Reviews {showReviews ? '▼' : '▶'}
          </h4>
          {showReviews && (
            <div className='reviews-list'>
              {productData.reviews.map((review, index) => (
                <div key={index} className='review-item'>
                  <div className='review-header'>
                    <strong>{review.name}</strong>
                    <span className='review-date'>{review.datePublished}</span>
                    <div className='review-stars'>
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <p className='review-text'>{review.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Right section - Similar Products */}
      <div className='similar-products'>
        <h4 className='similar-products-title'>Similar Products</h4>
        <div className='similar-products-list'>
          <div className='similar-product-item'>
            <img src={redbull} alt="Similar product 1" className='similar-img' />
            <span className='similar-product-name'>Energy Drink Alternative</span>
          </div>
          <div className='similar-product-item'>
            <img src={ogx} alt="Similar product 2" className='similar-img' />
            <span className='similar-product-name'>Hair Care Solution</span>
          </div>
          <div className='similar-product-item'>
            <img src={neutrogena} alt="Similar product 3" className='similar-img' />
            <span className='similar-product-name'>Skincare Treatment</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;