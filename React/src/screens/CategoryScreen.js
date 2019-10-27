import React from 'react';

export const CategoryScreen = props => {
  const category = props.selectedCategory;
  return (
    <div className="content-area">
      <button 
        className={category === 'oneColor' ? 'selected' : null}
        onClick={() => props.onCategorySelect('oneColor')}>
        One Color
      </button>
      <button 
        className={category === 'summerTones' ? 'selected' : null}
        onClick={() => props.onCategorySelect('summerTones')}>
        Summer Tones
      </button>
      <button 
        className={category === 'minimalBlackAndWhite' ? 'selected' : null}
        onClick={() => props.onCategorySelect('minimalBlackAndWhite')}>
        Black and White
      </button>
    </div>
  )
};