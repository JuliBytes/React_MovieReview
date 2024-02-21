import React, { useState } from 'react';
import '../estilos/estilos.css';

function MovieReview(props) {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
  
    const incrementLikes = () => {
      setLikes(likes + 1);
    };
  
    const incrementDislikes = () => {
      setDislikes(dislikes + 1);
    };
  
    return (
      <div className="contenedor-movie">
        <img
          className='imagen-movie'
          src={require(`../imagenes/${props.imagen}`)}
          alt={props.titulo}
        />
        <div className='contenedor-texto-movie'>
          <h2 className='titulo-movie'>{props.titulo}</h2>
          <p className='resena-movie'>{props.resena}</p>
          <div className='botones-contador'>
            <button onClick={incrementLikes}>Like 👍({likes})</button>
            <button onClick={incrementDislikes}>Dislike 👎({dislikes})</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default MovieReview;
