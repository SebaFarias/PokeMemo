import { create } from 'zustand'
import { Card, PokeMemoMatrix } from './model/boardMatrix/PokeMemoMatrix'
import { Timer } from './model/time/Timer'

export interface PokeStatus {
  cols: number,
  rows: number,
  matrix: Card[][],
  score: number,
  moves: number,
  errors: number,
  timer: string,
  finished: boolean,
}

export const useStore = create<PokeStatus>((set)=>({
  cols: 3,
  rows: 4,
  matrix: new PokeMemoMatrix(3,4).getMatrix(),
  score: 0,
  moves:0,
  errors:0,
  timer: new Timer().toString(),
  finished: false,
}))