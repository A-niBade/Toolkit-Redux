import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./store/slices/counter";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const { isLoading, pokemons = [] } = useSelector((state) => state.pokemons);
  const { counter } = useSelector((state) => state.counter);
  const [page, setPage] = useState(0);

  const handleNextPage = () => {
    setPage((currentPage) => currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (page === 0) return;
    setPage((currentPage) => currentPage - 1);
  };

  useEffect(() => {
    if (counter < 0) return;
    dispatch(getPokemons(page));
  }, [page]);

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

      <button disabled={isLoading} onClick={handlePreviousPage}>
        Previous
      </button>

      <button disabled={isLoading} onClick={handleNextPage}>
        Next
      </button>
    </>
  );
};
