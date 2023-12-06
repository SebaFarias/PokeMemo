"use client"

import { ReactNode, useState } from "react";
import { PokeMemoMatrix } from "~/model/boardMatrix/PokeMemoMatrix";
import { Timer } from "~/model/time/Timer";
import PokeContext from ".";

export const defaultPokeState = {
  cols: 3,
  rows: 4,
  matrix: new PokeMemoMatrix(3,4),
  score: 0,
  moves:0,
  errors:0,
  timer: new Timer(),
  finished: false,
}
export type PokeState = typeof defaultPokeState

const PokeContextProvider = ({children}:{children: ReactNode}) => {

  const [pokeState, setPokeState] = useState(defaultPokeState)
  const controller = {

  }

  return (
    <PokeContext.Provider value={[pokeState,controller]}>
      {children}
    </PokeContext.Provider>
  )
}

export default PokeContextProvider