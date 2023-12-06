import { useContext } from 'react'
import PokeContext from '~/app/_contexts/PokeContext'
import { CardState } from '~/model/boardMatrix/IdMatrix'
import { PokeMemoMatrix, Position } from '~/model/boardMatrix/PokeMemoMatrix'

export const usePokeSessionContext = () => {
  const [ state, controller ] = useContext(PokeContext)

  if(state===undefined){
    throw new Error('usePokeContext must be within PokeSessionContext provider')
  }
  const matrixController = {
    setRows: ( newValue:number ) => {
    },
    setCols: ( newValue:number ) => {
    },
    getNewBoard: () => {
    },
    startGame: () => {
    },
    pauseGame: () => {
    },
    blockBoard: () => {
    },
    allowBoard: () => {
    },
    addError: () => {
    },
    flipFirstCard: (pos:Position) => {
    },
    flipSecondCard: ( pos: Position) => {
    },
    checkWin: () => {
    },
    clickCard: (pos: Position) => {
    }

  }
  return { state , matrixController }
}