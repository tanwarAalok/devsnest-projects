import React, { useState } from 'react';
import useGif from './useGif';

const Tag = () => {
    const [tag, setTag] = useState('dogs');
    const {gif, fetchGif} = useGif(tag);
    
    const handleClick = () => {
        fetchGif(tag);
    }

    return (
        <div className="container">
            <h1>Random {tag} Gif</h1>
            <img src={gif} alt="Random Gif" width="500" />
            <input value={tag} onChange={(e) => setTag(e.target.value)} />
            <button onClick={handleClick}>Click for new</button>
        </div>
    );
}
export default Tag;