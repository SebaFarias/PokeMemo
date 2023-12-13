"use client"

import { usePokeSessionContext } from "~/hooks/usePokeContext"
import Card from "./Card"

export interface BoardProps{}

const getClasses = (rows:number,cols:number) => {
  let classes = ""
  if(typeof rows === 'undefined' || typeof cols === 'undefined') return ''
  if(rows < 13 && rows > 0) classes += `grid-rows-${rows} `
  if(cols < 13 && cols > 0) classes += `grid-cols-${cols} `
  return classes
}

const Board: React.FunctionComponent<BoardProps> = ( ) => {
const { status, matrixController } = usePokeSessionContext()

const onCardClick = (row:number,col:number) => {
  console.log(row,col)
}

return <ul
  className={`grid ${getClasses(status!.rows,status!.cols)} justify-items-center items-center w-[85vmin] h-[85vmin]`}
>
{status?.matrix.getMatrix().map((row,rowIndx)=>row.map((card,colIndx)=><Card 
    key={`${rowIndx}-${colIndx}`}
    handleClick={onCardClick}
    card={card}
    row={rowIndx}
    col={colIndx}
  />))}
</ul>
}

export default Board