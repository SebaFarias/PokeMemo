"use client"

import { usePokeSessionContext } from "~/hooks/usePokeContext"
import Card from "./Card"
import { useState } from "react"

export interface BoardProps{}

const Board: React.FunctionComponent<BoardProps> = props => {
const { state, matrixController } = usePokeSessionContext()
const [ distribution, setDistribution ] = useState<[string,string]>([`grid-rows-${state.rows}`,`grid-cols-${state.cols}`])

return <ul
  className={`grid ${distribution[0]} ${distribution[1]} justify-items-center items-center w-[85vmin] h-[85vmin]`}
>
{state.matrix.getMatrix().map((row,rowIndx)=>row.map((card,colIndx)=><Card 
    key={`${rowIndx}-${colIndx}`}
    card={card}
    row={rowIndx}
    col={colIndx}
  />))}
</ul>
}

export default Board