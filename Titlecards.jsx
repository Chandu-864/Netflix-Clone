import React, { useEffect, useRef, useState } from 'react'
import './Titlecards.css'
import cards_data from '../../assets/cards/Cards_data.js'
import { FaPlay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';


const Titlecards = ({category}) => {  

  const [moviesList, setMoviesList] = useState([]);

  const cardList = useRef(null);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODI3ZGIzNjZhNjQ0NzZhYWQzNGYzYTM0YTFiN2NlZiIsIm5iZiI6MTczMTUwODkxNy42NDk2NTMyLCJzdWIiOiI2NzM0Yjk4NjAyMjU3NzM2YmRkOWVlODAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.sQ36AbbaWijRemY2mxoqBsX-rTwhKm5bUvV_mIonD1k'
    }
  };

  useEffect( () => {
    if (category) {
      fetch(`https://api.themoviedb.org/3/movie/${(category.toLowerCase().replace(" ", "_"))}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setMoviesList(res.results))
      .catch(err => console.error(err));
    }
    else {
      setMoviesList(cards_data)
    }
  },[])

  const scrollBack = () => {
    cardList.current.scrollBy(
      {
        left: -1080,
        behavior: 'smooth',
      }
    )
  }

  const scrollFront = () => {
    cardList.current.scrollBy(
      {
        left: 1080,
        behavior: 'smooth',
      }
    )
  }

  const handleScroll = () => {

    const { scrollLeft, scrollWidth, clientWidth } = cardList.current;
    console.log(scrollLeft + clientWidth);
    console.log(scrollWidth)

    if (scrollLeft <= 0) {
      //setCards(initialCards)
      //cardList.current.scrollLeft = scrollWidth / 3;
      setMoviesList((prevCards) => [...moviesList, ...prevCards]);
      //setMoviesList(moviesList)
    } 
    else if (scrollLeft + clientWidth >= (scrollWidth - 1040)) {
      setMoviesList((prevCards) => [...prevCards, ...moviesList]);  // Append new cards to the existing ones
    }

  };

  return (
    <div className='title-cards'>
      <h2>{category ? category : "Other Movies"}</h2>
      <IoIosArrowBack className='back-arrow' onClick={scrollBack} />
      <div className="card-list" ref={cardList} onScroll={handleScroll}>
        {
          moviesList.map( (card_data, index) => {
            return (
              <Link to={`/player/${card_data.id}`} className="card" key={index}>
                <img src={card_data.image || `https://image.tmdb.org/t/p/w500${card_data.backdrop_path}`} />
                {/*<div className='pop-up'>
                  <button className='card-btn'><FaPlay /></button>
                  <button className='card-btn'><AiFillLike /></button>
                  <button className='card-btn'><AiFillDislike /></button>
                  <button className='card-btn'><FaPlus /></button>
                </div>*/}
                <p className='card-title'>{card_data.original_title || card_data.name}</p>
              </Link>
            )
          } )
        }
      </div>
      <IoIosArrowForward className='front-arrow' onClick={scrollFront} />
    </div>
  )
}

export default Titlecards