import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <div className='hero'>
      <img src="src\assets\SelfPhoto.jpg" alt="my-profile" className="self-img" />
      <h1>Hello,</h1>
      <h1><span>I'm Tausif Raja</span>, Frontend Developer from Nepal.</h1>
      <p>I am a BSc(Hons) Computer Science with Artifical Intelligence undergraduate interested in Embedded Systems, IoT, and Data Science, aiming to turn theory into practical solutions.</p>
      <p></p>
      <div className="hero-action">
        <div className="hero-connect"><a href='/contact'>Connect With me</a></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero

