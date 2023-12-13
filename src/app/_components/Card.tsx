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
  
  return(<li className='w-full h-full text-center align-middle' onClick={()=>console.log('click')}>{JSON.stringify(card)}</li>)
}

export default Card