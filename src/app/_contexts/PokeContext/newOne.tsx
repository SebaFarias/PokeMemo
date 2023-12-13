import { ReactNode, ReducerWithoutAction, createContext, useReducer } from "react"
import { PokeMemoMatrix } from "~/model/boardMatrix/PokeMemoMatrix"
import { Timer } from "~/model/time/Timer"
import { defaultPokeState } from "."

type Action = {type:'changeSize'}|{type:'newBoard'}|{type:'flipCard'}
type PokeStatus = {
  cols: number,
  rows: number,
  matrix: PokeMemoMatrix,
  score: number,
  moves: number,
  errors: number,
  timer: Timer,
  finished: boolean,
}
type Dispatch = (action:Action)=> void
type PokeContextProviderProps = { children: ReactNode}

const PokeContext = createContext<{state:PokeStatus,dispatch:Dispatch}|undefined>(undefined)

const pokeReducer = (state: PokeStatus, action: Action) => {
  switch(action.type){
    case "changeSize":
    case "newBoard":
    case "flipCard":
    default:
  }
}
const PokeContextProvider = ({children}:PokeContextProviderProps) => {
  const [state, dispatch] = useReducer<[PokeStatus,ReducerWithoutAction<any>]>(pokeReducer,defaultPokeState)
  return(
    <PokeContext.Provider value={{state,dispatch}}>
      {children}
    </PokeContext.Provider>
  )
}