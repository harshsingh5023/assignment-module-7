import React from 'react';
import './banner.css';
import Technology from '../resources/technology 1.png'

function Banner() {
  return (
    <div className='b'>

    <div className='b-wrapper'>
      <div className='b-head'>
        <div className='b-h tip'>
            <span>Summer 2020</span>
        </div>
        <div className='b-h heading'>
            <span>New Collection</span>
        </div>
        <div className='b-h desc'>
            <p>We know how large objects will act, but things on a small scale.</p>
        </div>
        <div className='b-h btn'>
            <button className='btn'>Shop now</button>
        </div>
      </div>
      <div className='b-banner'>
            <div className='main'>

            <img src={Technology} alt="" />
            </div>
            <div className='big'></div>
            <div className='tiny'></div>
            <div className='purple-2'></div>
            <div className='medium'></div>
            <div className='purple'></div>
      </div>
    </div>
    </div>
  )
}

export default Banner
