import { FunctionComponent } from 'react'
import { Card as CardType} from '~/model/boardMatrix/PokeMemoMatrix'

export interface CardProps {
  row: number,
  col: number,
  handleClick: Function,
  card?: CardType,
}

const Card : FunctionComponent<CardProps> = props => {
  const { card, handleClick, row, col } = props
  
  return(
    <li 
      className='flex w-full h-full text-center align-middle p-2' 
      >
      <button
      className='m-auto border-[#1D379C] rounded border-4 w-full h-full bg-[radial-gradient(50%_50%_at_50%_50%,#68E2F8_0%,_#1E61B0_120%)]'
      onClick = { () => handleClick(row,col) }
      >
        {JSON.stringify(card?.id)}
      </button>
    </li>
  )
}

export default Card