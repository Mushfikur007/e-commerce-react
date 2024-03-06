import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>GET EXCLUSIVE OFFERS ON YOUR EMAIL</h1>
      <p>Subscribe to our newaletter and stay updated</p>
      <div>
        <input type="emial" placeholder='Your Email id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
