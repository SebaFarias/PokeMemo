export enum CardState {
  SOLVED = 'solved',
  HIDDEN = 'hidden',
  SHOWN = 'shown',
}
const MIN_POKE_RANGE = 1
const MAX_POKE_RANGE = 649
export type Position<Row,Col> = [Row,Col]
export type Positions<Row,Col> = Position<Row,Col>[]
export interface Card {
  id: number,
  status: CardState,
}

export const generateIdsSet = (size:number,range:[number,number]): Set<number> =>{
  const [min,max] = range
  const idsSet = new Set<number>()
  while(idsSet.size<size){
    idsSet.add(Math.floor(Math.random() * (max - min + 1)) + min)
  }
  return idsSet
}
export const generateIdsMatrix = (rows:number,cols:number,idSet:Set<number>): number[][] => {
  const matrix = [...Array(rows)].fill([...Array(cols)])
  if(rows*cols%2!==0)matrix[rows-1]=[...Array(cols-1)]
  idSet.forEach( id => {
    let availables = getFreeSpaces(matrix)
    const indx1 = Math.floor(Math.random()*availables.length)
    const pos1 = availables[indx1]!
    matrix[pos1[0]][pos1[1]] = id
    availables.splice(indx1,1)
    const indx2 = Math.floor(Math.random()*availables.length)
    const pos2 = availables[indx2]!
    matrix[pos2[0]][pos2[1]] = id
    availables.splice(indx2,1)
  })  
  return matrix
}

const getFreeSpaces = (twoDimMatrix:number[][]) => {
  const freeSpaces: Position<number,number>[] = []
  twoDimMatrix.forEach( (row,rowIndex) => {
    row.forEach((id,colIndex)=>{
      if( typeof id === 'undefined'){
        const pos: Position<number,number> = [rowIndex,colIndex] 
        freeSpaces.push(pos)
      }
    })
})
  return freeSpaces
}
export const generatePokeMatrix = (rows:number,cols:number):Card[][] => {
  return generateIdsMatrix(rows,cols,
    generateIdsSet( Math.floor(rows*cols/2),[MIN_POKE_RANGE,MAX_POKE_RANGE] )
  )
  .map( row => row.map( id => {
    return {
      id: id,
      status: CardState.HIDDEN,
    }
  }))
}

