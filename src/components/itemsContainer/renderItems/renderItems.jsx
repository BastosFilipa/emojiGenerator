import React from 'react';
import emojis from '../../../resources/emojis';
import './renderItems.css';

const RenderItems = ({ emoji }) => {
  let emojisFiltered;
 
  if(emoji.length === 0) {
    emojisFiltered = [];
  }
  
  emojisFiltered = emojis.filter(item => item.title.toLowerCase().includes(emoji.toLowerCase()));

  const handleEmojiClick = (emoji) => {
    navigator.clipboard.writeText(emoji.symbol);
  };

  return (
    <>
      <ul className="item">
          { emoji.length !== 0 && emojisFiltered.map((emoji) => (
              <li className="tooltip" onClick={ () => handleEmojiClick(emoji) } key={emoji.title}>
                <span className="tooltiptext">Copy</span>
                <div>{emoji.symbol}</div>
                <div className="label">{emoji.title}</div>
              </li>
          ))}
      </ul>
    </>
  );
}

export default RenderItems;




