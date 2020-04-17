import React from 'react'
import Landing from './Landing'
import OurAction from './OurAction'
import Map from '../global/Map/Map.container'
import Carousel from './Carousel/Carousel.container'
import NewCarousel from './Carousel/NewCarousel'
import ActWithUs from './ActWithUs'
import News from './News'
import TheyTrustUs from './TheyTrustUs'

const Home = () => {
  return (
    <>
      <Landing />
      <OurAction />
      <Map />
      {/* <Carousel /> */}
      <NewCarousel />
      <ActWithUs />
      <News />
      <TheyTrustUs />
    </>
  );
}

export default Home;
