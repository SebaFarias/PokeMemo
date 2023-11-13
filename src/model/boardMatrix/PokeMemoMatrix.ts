import { CardState, IdMatrix } from "./IdMatrix"
export type Position = [row:number,col:number]
export type Positions = Position[]
export interface Card {
  id: number,
  status: CardState,
}

export class PokeMemoMatrix{
  private rows: number
  private columns: number
  private pokematrix: Card[][] 
  
  constructor( rows:number, columns:number ){
    this.rows = rows
    this.columns = columns
    this.pokematrix = new IdMatrix( this.rows, this.columns).getDisplayMatrix()
  }

  compare( [row1,col1]:Position,[row2,col2]:Position){
    return this.pokematrix[row1]![col1]?.id === this.pokematrix[row2]![col2]?.id
  }
  flip( [row,col]: Position ){
    this.pokematrix[row]![col]!.status = this.getNewState(this.pokematrix[row]![col]!.status)
  }
  getNewState( prevCardState:CardState ){
    if( prevCardState === CardState.HIDDEN ) return CardState.SHOWN
    if( prevCardState === CardState.SHOWN ) return CardState.HIDDEN
    return prevCardState
  }
  solvePair( [row1,col1]:Position,[row2,col2]:Position){
    this.pokematrix[row1]![col1]!.status = CardState.SOLVED
    this.pokematrix[row2]![col2]!.status = CardState.SOLVED
  }
  isSolved(){
    return this.pokematrix.every( row => {
      return row.every( pokemonCard => {
        return this.isSolvedCard(pokemonCard)
      })
    })
  }
  isSolvedCard(card:Card){
    return card.status === CardState.SOLVED
  }
  getCard([row,col]:Position){
    return this.pokematrix[row]![col]!
  }
  getMatrix(){
    return this.pokematrix
  } 
  
}

