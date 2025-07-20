import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import carouselData from '../data/carousel';
//import { searchProduct } from '../services/openaiService';

function Home() {
  const [leftIndex, setLeftIndex] = useState(0);
  const [centerIndex, setCenterIndex] = useState(1);
  const [rightIndex, setRightIndex] = useState(2);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  const handleLeft = () => {
    // Everything moves left: right becomes center, center becomes left, new item becomes right
    const newRight = (rightIndex + 1) % carouselData.length;
    setLeftIndex(centerIndex);
    setCenterIndex(rightIndex);
    setRightIndex(newRight);
  };

  const handleRight = () => {
    // Everything moves right: left becomes center, center becomes right, new item becomes left
    const newLeft = (leftIndex - 1 + carouselData.length) % carouselData.length;
    setRightIndex(centerIndex);
    setCenterIndex(leftIndex);
    setLeftIndex(newLeft);
  };

  const handleSearch = async (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      setIsSearching(true);
      try {
        const product = await searchProduct(searchQuery.trim());
        // Navigate to Product page with the product data
        navigate('/product', { state: { product } });
      } catch (error) {
        console.error('Search failed:', error);
        alert('Search failed. Please try again.');
      } finally {
        setIsSearching(false);
      }
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          className="search-input"
          placeholder={isSearching ? "Searching..." : "Search for a Product"}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleSearch}
          disabled={isSearching}
          title="Search for a Product!"
        />
      </div>
      <div>
        {/* Center image - more opaque */}
        <img
          src={carouselData[centerIndex].image}
          className='center'
          style={{opacity: 1}}
          alt={carouselData[centerIndex].title}
        />
        
        {/* Left side image - less opaque */}
        <img
          src={carouselData[leftIndex].image}
          className='side'
          style={{opacity: 0.6}}
          alt={carouselData[leftIndex].title}
        />
        
        {/* Right side image - less opaque */}
        <img
          src={carouselData[rightIndex].image}
          className='side'
          style={{left: "25%", opacity: 0.6}}
          alt={carouselData[rightIndex].title}
        />
        
        {/* Info container with center item's content */}
        <div className='info-container'>
          <h3 className='title'>{carouselData[centerIndex].title}</h3>
          <p className='description'>{carouselData[centerIndex].description}</p>
        </div>
        
        {/* Navigation arrows */}
        <button className="arrow" style={{left: '5%'}} onClick={handleLeft}>
          &#8592;
        </button>
        <button className="arrow" style={{left: '35%'}} onClick={handleRight}>
          &#8594;
        </button>
      </div>
    </div>
  );
}

export default Home;