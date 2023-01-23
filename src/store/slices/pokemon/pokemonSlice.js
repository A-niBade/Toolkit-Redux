import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    page: 0,
    pokemons: [],
    isLoading: false,
    pageCounter: 0,
  },
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;
    },
    incrementPage: (state) => {
      state.pageCounter += 1;
    },
    decrementPage: (state) => {
      if (state.pageCounter === 0) return;
      state.pageCounter -= 1;
    },
  },
});

export const {
  startLoadingPokemons,
  setPokemons,
  incrementPage,
  decrementPage,
} = pokemonSlice.actions;
