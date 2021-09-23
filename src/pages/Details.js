import React from 'react';
import { Link } from 'react-router-dom';
import { getGame } from '../api_fake/gamesAPI';
import Loading from '../components/Loading';

class Details extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      game: {},
      loading: true,
    }
  }

  componentDidMount(){
    this.fetchGame();
  }

  fetchGame = async () => {
    const { match: { params: { id } } } = this.props;
    console.log(id);
    const game = await getGame(id)
    console.log(game)
    this.setState({game, loading: false})
  }

  render() {
    const { game: { 
    img, 
    title,
    price,
    sales, 
    description,
    release_year: releaseYear }, 
    loading } = this.state;
    return (
      <section>
        { loading ? 
          <Loading /> :         
          <div>
            <img src={ img } alt={ title } />
            <h3>{title}</h3>
            <p>{ description}</p>
            <span>{price}</span>
            <span>{sales}</span>
            <span>{releaseYear}</span>
            <Link to="/">Voltar</Link>
          </div>
      }
      </section>
    )
  }
}

export default Details;