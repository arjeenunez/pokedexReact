import "./Pokecard.css"

function Pokecard({id, name, type, exp}) {

    let imgId = id + "";
    if (imgId.length === 1) imgId = "00" + imgId;
    if (imgId.length === 2) imgId = "0" + imgId;
    const imgLink = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imgId}.png`;
    return (
        <div className="Pokecard">
            <div className="Pokecard-img-container">
                <img className="Pokecard-img" src={ imgLink } alt={name} />
            </div>
            <h2 className="Pokecard-name">{ name }</h2>
            <p className="Pokecard-type">Type: { type }</p>
            <p className="Pokecard-exp">Exp: {exp}</p>
        </div>
    )
}

export default Pokecard;