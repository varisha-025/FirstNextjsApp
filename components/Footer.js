import Link from 'next/link'
import React from 'react'
import styles from "../styles/Home.module.css"
const Footer = () => {
  return (
    <div className={styles.footer}>
        <ul>
            <li><Link href="/"> Facebook</Link></li>
            <li><Link href="/"> Twitter</Link></li>
            <li><Link href="/"> Instagram</Link></li>
            <li><Link href="/"> Youtube</Link></li>
        </ul>
    </div>
  )
}

export default Footer