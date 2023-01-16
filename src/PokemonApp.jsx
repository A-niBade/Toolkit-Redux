import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>POKEMON APP</h1>
      <hr />

      <ul>
        <li>HOLA</li>
        <li>HOLA</li>
        <li>HOLA</li>
      </ul>
    </>
  );
};
