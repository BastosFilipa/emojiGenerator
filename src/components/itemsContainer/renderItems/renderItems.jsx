import React from 'react';
import emojis from '../../../resources/emojis';
import './renderItems.css';

const RenderItems = (props) => {
  const emojisFiltered = emojis.filter(emoji => emoji.title.toLowerCase()
    .includes(props.emoji.toLowerCase()));

  const handleEmojiClick = (emoji) => {
    navigator.clipboard.writeText(emoji.symbol);
  };

  return (
    <>
      <ul className="item">
          { emojisFiltered.map((emoji) => (
              <li class="tooltip" onClick={ () => handleEmojiClick(emoji) } key={emoji.title}>
                <span class="tooltiptext">Copy</span>
                <div>{emoji.symbol}</div>
                <div className="label">{emoji.title}</div>
              </li>
          ))}
      </ul>
    </>
  );
}

export default RenderItems;




