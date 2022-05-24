import React from 'react'
import Link from 'next/link'
import styles from "../styles/Nav.module.css"
import {MdAccountCircle}  from 'react-icons/md'
const Nav = () => {
  return (
    <div>
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li className={styles.li}><Link href="/" className={styles.a}>Home</Link></li>
                <li className={styles.li}><Link href="/about" className={styles.a}>About</Link></li>
                <li className={styles.li}><Link href="/contact" className={styles.a}>Contact</Link></li>
                <li className={styles.li}><Link href="/fav" className={styles.a}>Favourite songs</Link></li>
                <li className={styles.li}><Link href="/playlist" className={styles.a}>Your Playlist</Link></li>
                <li className={styles.li}><Link href="/login" className={styles.a}><MdAccountCircle/></Link></li>
                <li className={styles.li}><Link href="/signup" className={styles.a}>Sign up</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav