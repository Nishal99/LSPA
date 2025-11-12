import React from 'react'
import Carousel from '../components/Carousel'
import BlogDisplay from '../components/BlogDisplay'
import Welcome from '../components/Welcome'
import What from '../components/What'
import Services from '../components/Services'
import PurposeMission from '../components/PurposeMission'
import QuickLinksCarousel from '../components/QuickLinksCarousel'
import FightWithGovernment from '../components/FightWithGovernment'

const Home = () => {
  return (
    <div>
        
        <Carousel/>
        <Welcome/>
        <What/>
        <FightWithGovernment/>
        <PurposeMission/>
        <QuickLinksCarousel/>
        <BlogDisplay/>
        <Services/>

    </div>
  )
}

export default Home