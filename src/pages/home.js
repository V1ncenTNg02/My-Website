import React from 'react'
import NavBar from '../components/navBar/navBar'
import PhotoCard from '../components/PhotoCard/PhotoCard'
import {webConfig} from '../configs/webContentConfig'
import HomeInfo from '../components/HomeInfo/HomeInfo'

import './pages.css'

export default function Home() {

  return (
    <div id='homePage'>
      <div id = "bg-1"></div>
      <NavBar config={webConfig.nav}/>
      <PhotoCard config={webConfig.photoCard}/>
      <HomeInfo/>
    </div>
  )
}
