import './character.css'

function Character({character}){ //tambien se peude poner Character(props)
                                //y al usar en el return pondriamos props.character.name
                                //pero mas facil, desestructuro el objeto y queda como se ve
    return(
        <div className="card">
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name}/>
            <h4> status: {character.status}</h4>
            <h4> especie: {character.species}</h4>
            <h4> from: {character.origin.name}</h4>
            <h4> location: {character.location.name}</h4>
        </div>
    )
}

export default Character;
