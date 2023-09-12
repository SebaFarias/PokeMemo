'use client'

import { usePokeSessionContext } from '~/hooks/usePokeContext'
import LoadingBoard from './LoadingBoard'
import { useEffect } from 'react'
import Card from './Card'
export interface BoardProps {
}

const Board: React.FunctionComponent<BoardProps> = ({  }) => {
  const [context,setContext] = usePokeSessionContext()
  
  return false ? 
  <LoadingBoard/> 
  :
  <div className='flex w-4/5 m-auto'>
    {
    context.data.map(( row, rowIndex ) => row
      .map(( card, colIndex ) => <Card 
        id={card.id} 
        size={[context.rows,context.columns]} 
        position={[rowIndex,colIndex]}
        />))
    }
  </div>
}

export default Board 