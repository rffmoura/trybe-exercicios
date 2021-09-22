import React from 'react';
import { Link } from 'react-router-dom';

class CardGame extends React.Component {
  render() {
    const { game: { id, title, img } } = this.props;
    console.log(img);
    return (
      <div className='card'>
        <img src={ img } alt={ title } />
        <h3>{title}</h3>
        <Link to={`details/${id}`}>Ver detalhes</Link>
      </div>
    )
  }
}

export default CardGame;