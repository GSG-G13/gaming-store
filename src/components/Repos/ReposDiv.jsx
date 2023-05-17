import React, { Component } from 'react'
import Loading from '../Loading/Loading'

class ReposDiv extends Component{
  render(){
    const { data } = this.props;
    return (
      <div className='data' >
        {
          data?.length ?
          data.map((game) => (
        <div className='repoDiv' key={game.id}>
          <div className="link">
            <a href={game.game_url} >{game.title}</a>
          </div>
          <p className="description">{game.short_description}</p>
          <img src={game.thumbnail} alt={game.title} className="game-img" />
          <div className='game-info'>
            <span className='genre'>Genre: {game.genre}</span>
            <span className='platform'>Platform: {game.platform}</span>
          </div>
            <span className='release_date'>Release date: {game.release_date}</span>
        </div>
          ))
        : <Loading/>
        }
      </div>
    )
  }
}


export default ReposDiv