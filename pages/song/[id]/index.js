import Link from 'next/link'
import React from 'react'
import Meta from '../../../components/Meta'
import stylesCard from '../../../styles/Song.module.css'

const song = ({songElem}) => {
  return (
    <>
    <Meta title={songElem.name}/>
    <div>
      <h3>this is song {songElem.id} </h3>
      <h4>{songElem.name}</h4>
      <p>{songElem.body}</p>
      <Link href="/"> Go Back </Link>
    </div>
    </>
  )
}

export default song



export const getStaticProps= async(context)=>{
  const res = await fetch (`https://jsonplaceholder.typicode.com/comments/${context.params.id}`)
  const songElem = await res.json()
  return {
    props:{
      songElem
    }
  }
}


export const getStaticPaths = async ()=>{
  const res = await fetch (`https://jsonplaceholder.typicode.com/comments`)
  const songElem = await res.json()
  const idsArray = songElem.map(elem => elem.id)

  const paths = idsArray.map((elem)=> ({params:{id:elem.toString()}}))

  return {
    paths,
    fallback:false
  }
}