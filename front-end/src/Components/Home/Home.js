import React, { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation';
import './Home.css'
import { TfiClose } from "react-icons/tfi";
import Place from '../Places/Place';

const Home = () => {

  const [showhomeAM1, setShowhomeAM1] = useState(false)
  const [showhomeAM1Btn2, setshowhomeAM1Btn2] = useState(false)

  useEffect(() => {
    setTimeout(() => setShowhomeAM1(true), 3000)
    setTimeout(() => setshowhomeAM1Btn2(true), 21000)
  }, [])
  return (
    <div className='home'>
      {showhomeAM1 && <div className='homeAnimation1' style={{zIndex:"99999"}}>
        <div className='homeAnimation1-closeDiv'><button onClick={() => setShowhomeAM1(false)}><TfiClose /></button></div>
        <div>
          <TypeAnimation
            // preRenderFirstString={true}
            sequence={[
              'Hey there 👋 ',
              1000,
              'Are you available at the moment ❓ ',
              1000,
              `Want to hang out around here 🗺️`,
              1000,
              'How about having fun at the shopping mall 🛍️',
              1000,
              'How about having fun at the lake 🌊',
              1000,
              'How about visiting the temple 🛕 ',
              1000,
              "We've got a plan for you 😇",
            ]}
            wrapper="h1"
            speed={70}
            style={{ fontSize: '2.5em', display: 'inline-block' }}
          />
        </div>
        <div>
          {showhomeAM1Btn2 && <button className='homeAnimation1-btn2'>plan my day</button>}
        </div>
      </div>}

      <Place/>
    </div>
  )
}

export default Home
