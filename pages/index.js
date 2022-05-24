import Head from 'next/head'
import { server } from '../config/index'
import styles from '../styles/Home.module.css'
import SongList from '../components/SongList'
import Meta from "../components/Meta"
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Home({ songs }) {
  // console.log(songs)
  return (
    <div>
      <Meta />
      <Nav />
      {/* <Header/> */}
      <div>
        <div className={styles.container}>
        <main className={styles.main}>
          <Header/>
            <SongList songs={songs} />
           
        </main>
        </div>
    </div>
      <Footer />

    </div>
  )
}


export const getStaticProps = async () => {
  const res = await fetch(`http://jsonplaceholder.typicode.com/comments`);
  const songs = await res.json();
  return {
    props: {
      songs
    }
  }
}