import React from 'react'
import Recommended from '../components/Recommended';
import SwiperComponent from '../components/SwiperComponent';
import EffectCard from '../components/EffectCard';
import Filter from '../components/Filter';

const Home = () => {

  return (
    <div>
        <EffectCard />
        <Filter />
        <Recommended />
        <SwiperComponent />
    </div>
  )
}

export default Home