import { Context, createContext, } from "react";
import { PokeMemoMatrix } from "~/model/boardMatrix/PokeMemoMatrix";
import { Timer } from "~/model/time/Timer";
import { ControllerType } from "./Provider";

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

interface PokeContextValue{
  status?: PokeState,
  controller?: ControllerType,
}
const PokeContext: Context<PokeContextValue> = createContext({}) 

export default PokeContext