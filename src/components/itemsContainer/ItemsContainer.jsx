import React, { useState } from 'react';
import SearchBox from './searchBox/searchBox';
import RenderItems from './renderItems/renderItems';

const ItemsContainer = () => {
    const [emojiSearched, setEmojiSearched] = useState('');

    const handleSearch = (wordSearched) => {
        console.log('wordSearched', wordSearched);
        setEmojiSearched(wordSearched);
    };

    return (
        <>
            <SearchBox onChange={(wordSearched) => handleSearch(wordSearched)} />
            <RenderItems emoji={emojiSearched} />
        </>
    );
};

export default ItemsContainer;




