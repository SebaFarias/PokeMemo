import { useContext } from 'react'
import { PokeContext } from '~/components/PokeSessionContext'
import { CardState } from '~/model/boardMatrix/IdMatrix'
import { PokeMemoMatrix, Position } from '~/model/boardMatrix/PokeMemoMatrix'

export const usePokeSessionContext = () => {
  const context = useContext(PokeContext)
  if(context===undefined){
    throw new Error('usePokeContext must be within PokeSessionContext provider')
  }
  const [ globalState, setGlobalState ] = context
  const matrixController = {
    setRows: ( newValue:number ) => {
      setGlobalState( prevState => {
        return({
          ...prevState,
          rows: newValue,
          started: false,
          data: new PokeMemoMatrix(newValue,prevState.columns)
        })
      })
    },
    setCols: ( newValue:number ) => {
      setGlobalState( prevState => {
        return({
          ...prevState,
          columns: newValue,
          started: false,
          data: new PokeMemoMatrix(prevState.rows,newValue),
        })
      })
    },
    getNewBoard: () => {
      setGlobalState( prevState => {
        return ({
          ...prevState,
          data: new PokeMemoMatrix(prevState.rows, prevState.columns),
        })
      })
    },
    startGame: () => {
      setGlobalState( prevState => {
        prevState.timer.stop()
        prevState.timer.reset()
        return({
          ... prevState,
          errors: 0,
          started: true,
          blocked: false,
          clicked:[],
        })
      })
    },
    pauseGame: () => {
      setGlobalState( prevState => {
        prevState.timer.stop()
        return({
          ... prevState,
          blocked: true,

        })
      })
    },
    blockBoard: () => {
      setGlobalState( prevState => {
        return({
          ...prevState,
          blocked: true,
        })
      })
    },
    allowBoard: () => {
      setGlobalState( prevState => {
        return({
          ...prevState,
          blocked: false,
        })
      })
    },
    addError: () => {
      setGlobalState( prevState => {
        return({
          ...prevState,
          errors: prevState.errors + 1,
        })
      })
    },
    flipFirstCard: (pos:Position) => {
      const [row,col] = pos
      setGlobalState( prevState => {
        prevState.clicked.push(pos)
        prevState.data.flip([row,col])
        return({
          ...prevState,
          blocked: true
        })
      })    
    },
    flipSecondCard: ( pos: Position) => {
      const [row,col] = pos
      setGlobalState( prevState => {
        prevState.data.flip(pos)
        const pos1 = prevState.clicked[0]!
        const pos2 = pos
        const success = prevState.data.compare(pos1,pos2)
        if(success){ 
          prevState.data.solvePair(pos1,pos2)
          return({...prevState})
        }
        matrixController.addError()
        prevState.data.flip(pos1)
        prevState.data.flip(pos2)
        return({...prevState})
      })

    },
    checkWin: () => {
      if( !globalState.data.isSolved() ) return
      console.log("Ganaste!!!!!") //TODO: Do something cool when you win
    },
    clickCard: (pos: Position) => {
      const [row,col] = pos
      const pokeCard = globalState.data.getCard([row,col])
      if( pokeCard.status === CardState.HIDDEN && !globalState.blocked ){ 
        if( globalState.data.isSolvedCard( pokeCard ) ) return
        if( globalState.clicked.length < 1 ) matrixController.flipFirstCard(pos)
        if( globalState.clicked.length > 0 ) matrixController.flipSecondCard(pos)  
        matrixController.checkWin()
      }
    }

  }
  return { context: context[0] , matrixController }
}