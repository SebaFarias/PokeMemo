'use client'

import { usePokeSessionContext } from '~/hooks/usePokeContext'
import LoadingBoard from './LoadingBoard'
import { useEffect } from 'react'
export interface BoardProps {
}

const Board: React.FunctionComponent<BoardProps> = ({  }) => {
  const [context,setContext] = usePokeSessionContext()
  
  return false ? 
  <LoadingBoard/> 
  :
  <div>
    {JSON.stringify(context)}
  </div>
}

export default Board 