import styles from "../styles/Home.module.css"
import Nav from "./Nav"
import React from 'react'
import Footer from "./Footer"
import Header from "./Header"
import Meta from "./Meta"


const Layout = ({children}) => {
  return (
    <>
    <Meta/>
    <Nav />
    <Header/>
    
    {/* <Login/> */}
    <Footer />
    </>
  )
}

export default Layout