import React from 'react';
import { Link } from 'react-router-dom';

class CardGame extends React.Component {
  render() {
    const { game: { id, title, img } } = this.props;
    return (
      <div className='card'>
        <img src={img} alt='Imagem de um jogo' />
        <h3>{title}</h3>
        <Link to={`details/${id}`}>Ver detalhes</Link>
      </div>
    )
  }
}

export default CardGame;