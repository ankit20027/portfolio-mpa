import React from 'react';
import MyPic from '../../assets/pic.jpg';
import './Home.css'

function Home() {
  return (
    <div className='box'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      <div className='me-flex'>
        <h1>Hey👋,<br/> I'm <span className='word-highlight'>Ankit Chaurasia</span> - curious, <br/>
        passionate <span className='word-highlight'>developer</span> who likes to <br/>
        work on end to end applications.</h1>
        <h2>Looking forward to create and impact on society.</h2>
        <div class="social-links">
          {/* To add links */}
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-github"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
      <img className='pic' src={MyPic} alt='My Pic' height={'400px'}/>
    </div>
  )
}

export default Home;