import { Position } from "./PokeMemoMatrix"

const MIN_POKE_RANGE = 1
const MAX_POKE_RANGE = 649
export enum CardState {
  SOLVED = 'solved',
  HIDDEN = 'hidden',
  SHOWN = 'shown',
}
export interface Card {
  id: number,
  status: CardState,
}


export class IdMatrix {
  private idRange: [number,number]
  private rows: number
  private columns: number
  private idList: Set<number>
  private matrix: number[][]
  private displayData: Card[][]

  constructor( rows:number , columns:number){
    this.idRange = [MIN_POKE_RANGE,MAX_POKE_RANGE]
    this.rows = rows
    this.columns = columns
    this.idList = this.generateIdsSet(this.idRange)
    this.matrix = this.generateIdMatrix()
    this.displayData = this.generatePokeMatrix()
  }
  
  generateIdsSet(range:[number,number]): Set<number>{
    const [min,max] = range
    const idsSet = new Set<number>()
    while( idsSet.size < Math.floor( this.rows*this.columns/2 )){
      idsSet.add(Math.floor(Math.random() * (max - min + 1)) + min)
    }
    return idsSet
  }
  getAllPositions(){
    const positions:Position<number,number>[] = []
    const emptyArray = [...Array(this.rows)].fill([...Array(this.columns)].fill(0))
    if(this.rows*this.columns%2!==0)emptyArray[this.rows-1] = [...Array(this.columns-1)].fill(0)
    emptyArray.forEach((row:number[],rowIndex)=>{
      row.forEach((point,colIndex)=>{
        const position: Position<number,number> = [rowIndex,colIndex]
        positions.push(position)
      })
    })
    return positions
  }
  getAvailableSpaces(){
    const thisMatrix = this.matrix
    return this.getAllPositions().map( position => {
      const [row,col] = position
      if(typeof thisMatrix[row]![col] === 'undefined'){
        return position
      }
    })
  }
  getRandomPosition(){
    let position : Position<number,number> = [-1,-1]
    const availables = this.getAvailableSpaces()
    if(availables.length>0){
      const randomIndex = Math.floor(Math.random() * availables.length)
      if(availables[randomIndex])position = availables[randomIndex]!
    }
    return position 
  }
  getMatrix = () => this.matrix
  getDisplayMatrix = () => this.displayData
  
  reset(rows=0,cols=0){
    if( rows > 0 ) this.rows = rows
    if( cols > 0 ) this.columns = cols
    this.matrix = [...Array(this.rows)]
    .fill([...Array(this.columns)])
    if(this.rows*this.columns%2!==0)
    this.matrix[this.rows-1]=[...Array(this.columns-1)]
  }
  getDistribution(){
    const positions = this.getAllPositions()
    const distribution: {[pos:string]: number} = Object.fromEntries(this.getAllPositions().map(value=>[value,-1]))
    this.idList.forEach( id => {
      const randomIndex1 = Math.floor( Math.random() * positions.length )
      const [rowPos1,colPos1] = positions.splice(randomIndex1,1)[0]!
      const randomIndex2 = Math.floor( Math.random() * positions.length )
      const [rowPos2,colPos2] = positions.splice(randomIndex2,1)[0]!
      distribution[`${rowPos1},${colPos1}`] = id
      distribution[`${rowPos2},${colPos2}`] = id
    })
    return distribution
  }
  generateIdMatrix( rows = 0, cols = 0){
    this.reset(rows,cols)
    const distribution = this.getDistribution()
    this.matrix = this.matrix
    .map( ( row,rowIndx ) => row
    .map( (point,colIndx) => distribution[`${rowIndx},${colIndx}`]!))
    return this.matrix
  }
  generatePokeMatrix(){
    this.displayData = this.matrix
    .map( row => row
    .map( id => {
      return { 
        id:id,
        status: CardState.HIDDEN
      }
    }))
    return this.displayData
  }
}

