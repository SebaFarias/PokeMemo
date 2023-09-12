'use client'

import { Dispatch, PropsWithChildren, SetStateAction, createContext, useMemo, useState } from "react"
import { Card, IdMatrix } from "~/model/boardMatrix/IdMatrix"
import { Timer } from '~/model/time/Timer'

export interface PokeContext{
  data: Card[][],
  rows: number,
  columns: number,
  blocked: boolean,
  started: boolean,
  running: boolean,
  timer: Timer,
  errors: number,
}

const defaultState:PokeContext = {
  data: new IdMatrix(3,5).getDisplayMatrix(),
  rows: 3,
  columns: 5,
  blocked: false,
  started: false,
  running: false,
  timer: new Timer(),
  errors: 0,
}

export const PokeContext = createContext<[PokeContext,Dispatch<SetStateAction<PokeContext>>]|undefined>(undefined)

export const PokeContextProvider: React.FunctionComponent<PropsWithChildren> = (props) => {

  const [ global, setGlobal] = useState(defaultState)
  const contextValue 
  : [PokeContext,Dispatch<SetStateAction<PokeContext>>] = useMemo(()=>[global,setGlobal],[global])

  return <PokeContext.Provider value={contextValue} {...props}/>
}

export default PokeContextProvider