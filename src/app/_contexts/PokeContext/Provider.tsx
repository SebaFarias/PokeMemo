"use client"

import { ReactNode, useState } from "react";
import PokeContext, { defaultPokeState } from ".";

export interface ControllerType {
  reset: Function
}


const PokeContextProvider = ({children}:{children: ReactNode}) => {

  const [pokeState, setPokeState] = useState<typeof defaultPokeState | undefined>(defaultPokeState)
  const controller = {
    reset: () => {
      setPokeState(defaultPokeState)
    }
  }
  return (
    <PokeContext.Provider value={{ status: pokeState,controller}}>
      {children}
    </PokeContext.Provider>
  )
}

export default PokeContextProvider