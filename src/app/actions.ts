import { PokeMemoMatrix } from "~/model/boardMatrix/PokeMemoMatrix"
import { PokeState } from "./_contexts/PokeContext"
import { Timer } from "~/model/time/Timer"

const getNewBoard : PokeState = (rows=4, cols=3) => {
  'use server'

  const newState = {
    cols: cols,
    rows: rows,
    matrix: new PokeMemoMatrix(cols,rows),
    score: 0,
    moves:0,
    errors:0,
    timer: new Timer(),
    finished: false,
  }
  return newState
}

module.exports = { getNewBoard }