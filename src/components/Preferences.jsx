//Preferences.jsx in components folder 
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
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
  cycleToggle
} from '../features/preferences/preferencesSlice';

function Preferences() {
  const dispatch = useDispatch();
const [allergensInput, setAllergensInput] = useState('');

  const {
    pref,
    minimumrating,
    minPrice,
    maxPrice,
    hairType,
    scalpType,
    porosity,
    hairConcerns,
    skinTypes,
    skinConcerns,
    spfNeeds,
    productTexture,
    exfoliationType,
    allergens,
    toggles,
    options
  } = useSelector((state) => state.preferences);

useEffect(() => {
  setAllergensInput(allergens.join(', '));
}, [allergens]);

const handleInputBlur = (inputValue, reduxAction) => {
  const arr = inputValue
    .split(',')
    .map(item => toTitleCase(item.trim()))
    .filter(item => item !== '');
  dispatch(reduxAction(arr));
};

  const {
    hairConcernOptions,
    skinTypeOptions,
    skinConcernOptions,
    spfNeedsOptions,
    productTextureOptions,
    exfoliationTypeOptions,
    toggleOptions,
    toggleColors,
    toggleLabels
  } = options;

const handleMinChange = (e) => {
  const val = e.target.value;
  if (val === '' || /^\d*\.?\d*$/.test(val)) {
    dispatch(setMinPrice(val));
  }
};

const handleMaxChange = (e) => {
  const val = e.target.value;
  if (val === '' || /^\d*\.?\d*$/.test(val)) {
    dispatch(setMaxPrice(val));
  }
};

const handleMinBlur = () => {
  if (minPrice === '') return;
  let num = Math.ceil(Number(minPrice));
  if (num > Number(maxPrice)) {
    num = Number(maxPrice);
  }
      if (num <= 0) {
    num = 1;
  }
  dispatch(setMinPrice(num));
};

const handleMaxBlur = () => {
  if (maxPrice === '') return;
  let num = Math.ceil(Number(maxPrice));
  if (num < Number(minPrice)) {
    num = Number(minPrice) + 10;
  }
      if (num <= 0) {
    num = 10;
  }
  dispatch(setMaxPrice(num));
};


  const toTitleCase = (str) => {
    return str
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

const handleAllergensChange = (e) => setAllergensInput(e.target.value);


  const changePrefs = (newPref) => {
    dispatch(setPref(newPref));
    console.log(`${newPref} is the new preference`);
  };

  const handleCycleToggle = (field, options) => {
    dispatch(cycleToggle({ field, options }));
  };

  return (
    <div>
      <div className='chooseprefs'>
        <button className={`prefsbutton ${pref === "hair" ? "active" : ""}`} onClick={() => changePrefs("hair")}>hair</button>
        <button className={`prefsbutton ${pref === "skin" ? "active" : ""}`} onClick={() => changePrefs("skin")}>skin</button>
      </div>
      
      <div className='mutual-container'>
        <div className='pref'>
          <h3 className='pref-title'>Price:</h3>
          <input
            className="price-input"
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={handleMinChange}
            onBlur={handleMinBlur}
            min="1"
            max="1000"
            step="1"
          />
          <h2 className='price-separator'>-</h2>
          <input
            className="price-input"
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={handleMaxChange}
            onBlur={handleMaxBlur}
            min="1"
            max="1000"
            step="1"
            style={{ left: "13.5%" }}
          />


          <h3 className='pref-title' style={{ left: "34%", top: "20%", fontSize: "1.25rem" }}>Minimum Rating:</h3>
          <input
            type="range"
            className="rating-slider"
            min="0"
            max="5"
            step="0.5"
            value={minimumrating}
            onChange={(e) => dispatch(setMinimumRating(e.target.value))}
          />
          <span className="rating-value">{minimumrating}</span>
        </div>

        <div className='pref' style={{ top: '37.5%' }}>
          <div>
            <button
              className={`pref-button ${toggles.crueltyFree ? 'on' : 'off'}`}
              onClick={() => dispatch(togglePref('crueltyFree'))}
              style={{ left: "1.5%" }}
            >
              Cruelty-Free
            </button>

            <button
              className={`pref-button ${toggles.scented ? 'on' : 'off'}`}
              onClick={() => dispatch(togglePref('scented'))}
              style={{ left: "36%" }}
            >
              Scented
            </button>
            <button
              className={`pref-button ${toggles.ecoFriendly ? 'on' : 'off'}`}
              onClick={() => dispatch(togglePref('ecoFriendly'))}
              style={{ left: "71%", width: "11%" }}
            >
              Eco-Friendly
            </button>
          </div>
        </div>

        <div className='pref' style={{ top: '70%' }}>
          <div>
            <h3 className='pref-title' style={{ left: "70%", top: "20%", fontSize: "1.25rem" }}>Allergens:</h3>
            <input
              type="text"
              className="brand-input"
              style={{ left: "69%" }}
              placeholder="e.g. Fragrance, Soy..."
               value={allergensInput}
onChange={handleAllergensChange}
onBlur={() => handleInputBlur(allergensInput, setAllergens)}
              title="Select Your Allergens"
            />
          </div>
        </div>
      </div>

      <div className='pref-container'>
        {pref === "hair" && (
          <div className='specific-prefs'>
            <div className='pref' style={{ top: "47.5%", width: "94.5%", height: "48%", left: "2.75%" }}>
              <div>
                <h3 className='pref-title' style={{ left: "3%", top: "12.5%" }}>Porosity:</h3>
                <button
                  className="pref-button"
                  style={{
                    left: "13%",
                    top: "12.5%",
                    backgroundColor: toggleColors[porosity],
                    width: "10%"
                  }}
                  onClick={() => handleCycleToggle('porosity', toggleOptions.porosity)}
                >
                  {toggleLabels[porosity]}
                </button>

                <h3 className='pref-title' style={{ left: "25%", top: "12.5%" }}>Hair Type:</h3>
                <button
                  className="pref-button"
                  style={{
                    left: "36.5%",
                    top: "12.5%",
                    backgroundColor: toggleColors[hairType],
                    width: "10%"
                  }}
                  onClick={() => handleCycleToggle('hairType', toggleOptions.hairType)}
                >
                  {toggleLabels[hairType]}
                </button>

                

                <h3 className='pref-title' style={{ left: "74.5%", top: "12.5%" }}>Scalp Type:</h3>
                <button
                  className="pref-button"
                  style={{
                    left: "87%",
                    top: "12.5%",
                    backgroundColor: toggleColors[scalpType],
                    width: "10%"
                  }}
                  onClick={() => handleCycleToggle('scalpType', toggleOptions.scalpType)}
                >
                  {toggleLabels[scalpType]}
                </button>
              </div>

              <div className="multi-select-group">
                <Select
                  isMulti
                  name="hairConcerns"
                  options={hairConcernOptions}
                  className="multi-select"
                  classNamePrefix="react-select"
                  placeholder="Select Hair Concerns"
                  value={hairConcerns}
                  onChange={(selected) => dispatch(setHairConcerns(selected))}
                />


              </div>

              <div>
               

              

<button
    className={`pref-button ${toggles.isProteinSensitive ? 'on' : 'off'}`}
    onClick={() => dispatch(togglePref('isProteinSensitive'))}
    style={{ left: "51.25%", top: "71.5%", width: "12%", height: "15%", whiteSpace: 'nowrap' }}
  >
    Protein Sensitive
  </button>
              </div>
            </div>
          </div>
        )}

        {pref === "skin" && (
          <div className='specific-prefs'>
            <div className='pref' style={{ top: "47.5%", width: "94.5%", height: "48%", left: "2.75%" }}>
              <div className="multi-select-group"  style={{marginTop: "1.75%"}}>
                <Select
                  isMulti
                  name="skinTypes"
                  options={skinTypeOptions}
                  className="multi-select"
                  classNamePrefix="react-select"
                  placeholder="Select Skin Types"
                  value={skinTypes}
                  onChange={(selected) => dispatch(setSkinTypes(selected))}
                />

                <Select
                  isMulti
                  name="skinConcerns"
                  options={skinConcernOptions}
                  className="multi-select"
                  style={{ left: "33%" }}
                  classNamePrefix="react-select"
                  placeholder="Select Skin Concerns"
                  value={skinConcerns}
                  onChange={(selected) => dispatch(setSkinConcerns(selected))}
                />

                <Select
                  isMulti
                  name="spfNeeds"
                  options={spfNeedsOptions}
                  className="multi-select"
                  style={{ left: "66%" }}
                  classNamePrefix="react-select"
                  placeholder="Select SPF Needs"
                  value={spfNeeds}
                  onChange={(selected) => dispatch(setSpfNeeds(selected))}
                />
              </div>

              <div className="multi-select-group" style={{ marginTop: "1.5%", width: "82.5%", justifyContent: "start"}}>
                <Select
                  isMulti
                  name="productTexture"
                  options={productTextureOptions}
                  className="multi-select"
                  classNamePrefix="react-select"
                  placeholder="Select Product Textures"
                  value={productTexture}
                  onChange={(selected) => dispatch(setProductTexture(selected))}
                />

                <Select
                  isMulti
                  name="exfoliationType"
                  options={exfoliationTypeOptions}
                  className="multi-select"
                  style={{ left: "33%" }}
                  classNamePrefix="react-select"
                  placeholder="Select Exfoliation Types"
                  value={exfoliationType}
                  onChange={(selected) => dispatch(setExfoliationType(selected))}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Preferences;
