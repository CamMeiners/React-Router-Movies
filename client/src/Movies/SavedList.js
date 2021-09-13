import React from 'react';
import { useHistory } from 'react-router';

export default function SavedList(props) {
  const history = useHistory()
  function onClick(){
      history.push('/')
  }
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div onClick={onClick} className="home-button">Home</div>
 
    </div>
    
  );
}
