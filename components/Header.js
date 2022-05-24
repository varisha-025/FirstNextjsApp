import React from 'react'
import styles from "../styles/Header.module.css"
const Header = () => {
  return (
    <div className={styles.main}>
        <h1 className={styles.title}>
            <span>Spotify</span>Music
        </h1>
        <h4 className={styles.description}>
        Millions of songs and podcasts. No credit card needed.
        </h4>
        
        <button className={styles.button}>
            Get spotify for free
        </button>
    </div>
  )
}

export default Header