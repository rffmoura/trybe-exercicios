import React from 'react';
import { getGames } from '../api_fake/gamesAPI';

import CardGame from '../components/CardGame';
import Loading from '../components/Loading';

class home extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
          games: [],
          loading: true,
        }
      }
      componentDidMount(){
        this.fetchGames();
      }
    
       fetchGames = async () => {
        const games = await getGames()
        this.setState({games, loading: false})
      }
    
      render(){
        const { games, loading } = this.state;
        return (
          <main className="App">
            <header>
              <h1 className="header">Os melhores jogos de todos os tempos</h1>
            </header>
              {loading ? 
                <Loading />
                :
                <section className="main-container">
                  {games.map((game) => (
                    <div className="game-list">
                      <CardGame key={game.id} game={ game } />
                    </div> 
                  ))}
                </section>
              }
          </main>
        );
      }
}

export default home;