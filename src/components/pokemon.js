import React,{useState, useEffect} from 'react';

const Pokemon =(props) =>{
    const {state, setState} = props;

    const onClick = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=964")
            .then(response => {
                return response.json()
            })
            .then(response => {
                    setState({
                        pokemon: response.results
                    })
            })
    };

    return(
        <div>
            <div>
                <button onClick={onClick}> Gotta catch them all!! </button>
            </div>
            <div style={{overflow:'auto', height:'500px', margin:'20px, 300px, auto, 300px'}}>
                {state.pokemon ? state.pokemon.map((item, index) => {
                    return(<div key={index}> {item.name} </div>)
                }): null}
            </div>
        </div>
    )
} 

export default Pokemon;