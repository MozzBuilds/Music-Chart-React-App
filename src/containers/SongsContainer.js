import React, {useState, useEffect} from 'react';
import ArtistItem from '../components/ArtistItem';
import SongsList from '../components/SongsList';




const SongsContainer = () => {

    const [songs, setSongs] = useState([])
    const [selectedSong, setSelectedSong] = useState(null)

    useEffect(() => {
        getSongs();
    }, []);
        
    const getSongs = () => {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(response => response.json())
        .then(songs => setSongs(songs.feed.entry))
    }


    const onSelectedSong = (selectedSong) => {
        setSelectedSong(selectedSong);
    }


    return(
        <div>
        <p>Container</p>
        <SongsList songs={songs} onSelectedSong={onSelectedSong}/>
        <ArtistItem selectedSong={selectedSong}/>
        </div>
    )
};

export default SongsContainer;
