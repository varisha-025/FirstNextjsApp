import React from 'react'
import stylesCard from '../styles/Song.module.css'
import SongItem from './SongItem'

const SongList = ({songs}) => {
    return (
        <div className={stylesCard.grid}>

            {songs.map(elem => 
                <SongItem key={elem.id} song={elem}/>

            )}
        </div>
    )
}

export default SongList