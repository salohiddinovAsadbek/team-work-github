import React from 'react'
import '../src/styles/home.css'
import Horse from '../src/images/horse.png'
function home() {
  return (
    <div className="home">
    <header>Cornelia 
    is the new</header>
    <div className="pic">
      <img src={Horse} alt="horse" />
    
    </div>
    <p>black</p>
    </div>
  )
}

export default home
