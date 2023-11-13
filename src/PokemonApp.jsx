import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getPokemons } from "./store/slices/pokemons";

const PokemonApp = () => {

    const { pokemons, page, isLoading } = useSelector(state => state.pokemons)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemons())

    }, [])

    return (
        <section>
            <h1>Pokemon Api</h1>

            <hr />

            {isLoading ? "Fetching..." : ""}

            <ul>
                {pokemons.map(pokemon => (
                    <li key={pokemon?.url}>{pokemon?.name}</li>
                ))}
            </ul>

            <button onClick={() => dispatch(getPokemons(page))}>Next</button>
        </section>
    )
}

export default PokemonApp