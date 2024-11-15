import React from 'react'
import './Home.css'
import Navbar from '../../components/navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_caption from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import Titlecards from '../../components/titile-cards/Titlecards'
import Footer from '../../components/footer/Footer'

const Home = () => {

  return (
    <div className='home'>

      <Navbar />

      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' draggable = {false} />

        <div className="hero-caption">
          <img src={hero_caption} alt="" className='caption-img' draggable = {false} />
          <p>Discovering the ties to a sceret ancient order, a youngman living in modern 
            istanbul embarks on a quest to save the city from immortal enemy.
          </p>
          <div className="caption-btns">
            <button className='play-icon'> <img src={play_icon} alt="" />Play</button>
            <button className='play-icon more-info'><img src={info_icon} alt="" />More info</button>
          </div>
        </div>
      </div>
      <div>
        <Titlecards category={"Popular"} />
        <Titlecards category={"Top Rated"} />
        <Titlecards category={"Upcoming"} />
        <Titlecards category={"Now Playing"} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home