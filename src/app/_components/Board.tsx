"use client"

import { useStore } from "~/store"
import Card from "./Card"
import { useEffect } from "react"
import { Card as PokeCard } from "~/model/boardMatrix/PokeMemoMatrix"

export interface BoardProps{
}


const getClasses = (rows:number,cols:number) => {
  let classes = ""
  if(typeof rows === 'undefined' || typeof cols === 'undefined') return ''
  if(rows < 13 && rows > 0) classes += `grid-rows-${rows} `
  if(cols < 13 && cols > 0) classes += `grid-cols-${cols} `
  return classes
}

const Board: React.FunctionComponent<BoardProps> = () => {

  const matrix = useStore().matrix

const onCardClick = (row:number,col:number) => {
  console.log(row,col)
}

return <ul
  className={`grid grid-rows-3 grid-cols-4 justify-items-center items-center w-[85vmin] h-[85vmin]`}
>
{matrix && matrix.map((row,rowIndx)=>row.map((card,colIndx)=><Card 
    key={`${rowIndx}-${colIndx}`}
    handleClick={onCardClick}
    card={card}
    row={rowIndx}
    col={colIndx}
  />))}
</ul>
}

export default Board