import Link from 'next/link'
import React from 'react'
import stylesCard from '../styles/Song.module.css'

const SongItem = ({song}) => {
  return (
    <Link href="/song/[id]" as={`/song/${song.id}`} >
        <a className={stylesCard.card} >
        <h3>{song.name}</h3>
        <p>{song.body}</p>

        </a>
    </Link>
  )
}

export default SongItem