import React, { Component } from "react";
import Pokedex from "./Pokedex";

class Pokegame extends Component {
    static defaultProps = {
        pokemons: [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
        ]
    }
    render() {
        let hand1 = [];
        let hand2 = [];
        const arrLength = Object.keys(this.props.pokemons).length;
        const rando = () => Math.floor(Math.random() * arrLength)
        for (let i = 0; i < 4; i++) {
            hand1.push(this.props.pokemons[rando()])
            hand2.push(this.props.pokemons[rando()])
        }
        const exp1 = hand1.reduce((total, el) => total + el.base_experience, 0);
        const exp2 = hand2.reduce((total, el) => total + el.base_experience, 0);
        console.log(hand1, hand2)
        return (
            <div>
                <Pokedex pokemons={hand1} totalExp={exp1} isWinner={exp1 > exp2} />
                <Pokedex pokemons={hand2} totalExp={exp2} isWinner={exp1 < exp2}/>
            </div>
        )
    }
}

export default Pokegame;