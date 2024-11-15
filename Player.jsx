import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();

  const navigate = useNavigate();

  const [trailer, setTrailer] = useState({
    published_at: "",
    name: "",
    type: "",
    key: "",
  });

  

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODI3ZGIzNjZhNjQ0NzZhYWQzNGYzYTM0YTFiN2NlZiIsIm5iZiI6MTczMTUwODkxNy42NDk2NTMyLCJzdWIiOiI2NzM0Yjk4NjAyMjU3NzM2YmRkOWVlODAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.sQ36AbbaWijRemY2mxoqBsX-rTwhKm5bUvV_mIonD1k'
    }
  };

  useEffect ( () => {
    
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setTrailer(res.results[0]))
      .catch(err => console.error(err));
  },[])

  return (
    <div className='player'>
      <img src={back_arrow_icon} onClick={() => navigate('/')} />
      <iframe width='90%'height = '90%' title='Trailer' src={`https://www.youtube.com/embed/${trailer.key}`}
       frameborder="0" allowFullScreen></iframe>

      <div className="player-info">
        <p>{trailer.published_at.slice(0,10)}</p>
        <p>{trailer.name}</p>
        <p>{trailer.type}</p> 
      </div>
    </div>
  )
}

export default Player