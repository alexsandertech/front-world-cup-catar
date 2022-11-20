import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { 
  NavBar, 
  Banner, 
  GroupSession, 
  NextGamesSession,
  Footer } from '../components'

export default function Home() {
  return (
    <div className='container-page'>
      <NavBar/>
      <Banner/>
      <GroupSession/>
      <NextGamesSession/> 
      <Footer/>
    </div>
  )
}
