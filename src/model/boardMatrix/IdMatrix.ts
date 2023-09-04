import { Position } from "./PokeMemoMatrix"

const MIN_POKE_RANGE = 1
const MAX_POKE_RANGE = 649
export class IdMatrix {
  private idRange: [number,number]
  private rows: number
  private columns: number
  private idList: Set<number>
  private matrix: number[][]

  constructor( rows:number , columns:number){
    this.idRange = [MIN_POKE_RANGE,MAX_POKE_RANGE]
    this.rows = rows
    this.columns = columns
    this.idList = this.generateIdsSet(this.idRange)
    this.matrix = this.generateIdMatrix()
  }
  
  generateIdsSet(range:[number,number]): Set<number>{
    const [min,max] = range
    const idsSet = new Set<number>()
    while(idsSet.size<Math.floor(this.rows*this.columns/2)){
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
    return this.matrix.map((row,rowIndx)=>row.map((id,colIndx)=>{
      if(typeof id === 'undefined'){
        const position: Position<number,number> = [rowIndx,colIndx]
        return position
      }
    })).flat()
  }
  getRandomPosition(){
    let position : Position<number,number> = [-1,-1]
    const availables = this.getAvailableSpaces()
    if(availables.length>0){
      const randomIndex = Math.floor(Math.random() * availables.length)
      position = availables[randomIndex]!
    }
    return position 
  }
  getMatrix = () => this.matrix
  
  reset(rows=0,cols=0){
    if( rows > 0 ) this.rows = rows
    if( cols > 0 ) this.columns = cols
    this.matrix = [...Array(this.rows)]
    .fill([...Array(this.columns)])
    if(this.rows*this.columns%2!==0)
    this.matrix[this.rows-1]=[...Array(this.columns-1)]
  }
  generateIdMatrix( rows = 0, cols = 0){
    this.reset(rows,cols)
    this.idList.forEach( (id) => {
      console.log(id)
      const [rowPos1,colPos1] = this.getRandomPosition()
      const row1 = this.matrix[rowPos1]
      if(row1 && rowPos1> -1 && colPos1> -1) row1[colPos1] = id 
      const [rowPos2,colPos2] = this.getRandomPosition()
      const row2 = this.matrix[rowPos2]
      if(row2 && rowPos2> -1 && colPos2> -1) row2[colPos2] = id      
      console.log(this.matrix)
    })
    return this.matrix
  }
}

