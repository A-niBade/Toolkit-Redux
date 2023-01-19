import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./store/slices/counter";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    pokemons = [],
    page,
  } = useSelector((state) => state.pokemons);

  const { counter } = useSelector((state) => state.counter);

  useEffect(() => {
    if (counter < 0) return;
    dispatch(getPokemons(counter));
  }, [counter]);

  return (
    <>
      <h1>POKEMON APP</h1>
      <hr />

      <span>Loading {isLoading ? "True" : "False"}</span>

      <ul>
        {pokemons.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button disabled={isLoading} onClick={() => dispatch(decrement())}>
        Previous
      </button>

      <button disabled={isLoading} onClick={() => dispatch(increment())}>
        Next
      </button>
    </>
  );
};
