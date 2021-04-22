import React from 'react';

const SongsList = ({songs, onSelectedSong}) => {
    const ListOfSongs = songs.map((song, index) => {


    const handleClick = (song) => {

        

        onSelectedSong(song)

    }

        return <tr>
            <td>{index +1}</td>
            <td><a href={song.link[0].attributes.href}>{song.["im:name"].label}</a></td>
            <td>{song.["im:artist"].label}</td>
            <td><a href={song.link[1].attributes.href}>Preview</a></td>
            <td><button onClick ={() => {handleClick(song)}}>More Info</button></td>
            </tr>
        
    })


    return(
        <table>
            <thead>
                <tr>
                    <th>Position</th>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Preview Download</th>
                    <th>More Info</th>
                </tr>
            </thead>
            {/* <tbody>

            </tbody> */}
            {ListOfSongs}
        </table>
    )
}

export default SongsList;