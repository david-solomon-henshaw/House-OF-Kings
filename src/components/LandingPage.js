import React from 'react'
import Hero from '../components/Hero';
import CallToAction from '../components/CallToAction';

import WearTypes from './WearsTypes';
import New from './New';

const LandingPage = () => {
  return (
    <div>
        <Hero />
        <CallToAction />
        <WearTypes />
        <New />



    </div>
  )
}

export default LandingPage