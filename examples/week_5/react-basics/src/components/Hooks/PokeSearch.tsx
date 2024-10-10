import React, { useEffect, useState } from 'react'

interface Pokemon {
    abilities: [
        {
            ability: {
                name: string
            }
        }
    ]
}


function PokeSearch() {
    let [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined);

    useEffect(() => {
        async function getDitto(){
            let response = await fetch("https://pokeapi.co/api/v2/pokemon/3");
            let responseBody = await response.json();
            
            console.log(responseBody);
            setPokemon(responseBody);
        }

        getDitto();
    }, [])
  return (
    <>
        {
            pokemon ? pokemon.abilities.map((obj: any, index: number) => {
                return (
                    <h3 key={index}>{obj.ability.name}</h3>
                )
            }) : <h2>Loading</h2>
        }
    </>
  )
}

export default PokeSearch