import React from 'react'
import SplitWithImage from '../components/Landing/Details'
import LargeWithAppLinksAndSocial from '../components/Footer'
import WithSubnavigation from '../components/Navbar'
import GridListWith from '../components/Landing/Features'
import ThreeTierPricingHorizontal from '../components/Landing/Pricing'

const LandingPage = () => {
  return (
    <div>
        <WithSubnavigation/>
       <SplitWithImage/> 
       <GridListWith/>
       <ThreeTierPricingHorizontal/>
       <LargeWithAppLinksAndSocial/>
    </div>
  )
}

export default LandingPage