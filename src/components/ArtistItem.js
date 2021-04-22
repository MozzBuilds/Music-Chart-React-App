import React from 'react';

const ArtistItem = ({selectedSong}) => {
    return(
        <div>
            <h2>Selected Song</h2>
        <h3>Artist: {selectedSong.["im:artist"].label}</h3>
        <h4>Title: {selectedSong.["im:name"].label}</h4>
        <img src={selectedSong.["im:image"][2].label} alt="Album cover"/>
        <p></p>
        <p></p>
        </div>
    )
}


export default ArtistItem;
