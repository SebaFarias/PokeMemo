import { FunctionComponent } from 'react'
import { Card as CardType} from '~/model/boardMatrix/PokeMemoMatrix'

export interface CardProps {
  row: number,
  col: number,
  card?: CardType,
}

const Card : FunctionComponent<CardProps> = props => {
  const { card } = props
  
  return(<li className=''>{card?.id??''}</li>)
}

export default Card