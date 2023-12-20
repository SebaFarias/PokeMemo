import { PokeMemoMatrix } from "~/model/boardMatrix/PokeMemoMatrix"

const getNewBoard = async (rows=4, cols=3) => {
  'use server'
  return new PokeMemoMatrix(rows,cols)
}

module.exports = { getNewBoard }