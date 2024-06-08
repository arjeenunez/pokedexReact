import Pokecard from "./Pokecard"
import "./Pokedex.css"
import React, { Component } from 'react'

class Pokedex extends Component {
    render() {
        const { pokemons, totalExp, isWinner } = this.props;
        let title;
        if (isWinner) {
            title = <h1 className="Pokedex-winner">You win!</h1>
        } else {
            title = <h1 className="Pokedex-loser">You lose!</h1>
        }

        return (
            <div className="Pokedex">
                {title}
                <p className="Pokedex-exp">Total exp {totalExp}</p>
                <div className="Pokedex-cards">
                        {pokemons.map(p => (
                            <Pokecard  id={p.id} name={p.name} type={p.type} exp={p.base_experience}/>
                        ))}
                </div>
            </div>
        )
    }
}

export default Pokedex;