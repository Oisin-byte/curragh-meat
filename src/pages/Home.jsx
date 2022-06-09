import React from 'react'
import Announcement from '../components/Announcement'
import Catergories from '../components/Catergories'
import NavBar from '../components/NavBar'
import Slider from '../components/Slider'


const Home = () => {
  return (
    <div>
      <Announcement/>
      <NavBar/>
      <Slider />
      <Catergories />
    </div>
  )
}

export default Home