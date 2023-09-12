'use client'

import { useState } from "react"

export interface CardProps {
  size: [number,number]
  position: [number,number]
  id: number
}
enum Axis {
  'X'= 'x',
  'Y'= 'y'
}
const gap = 4

const Card: React.FunctionComponent<CardProps> = ({ size, position, id }) => {
  const [ row, col ] = position
  const [ rows, cols ] = size
  const [ cardSize, setCardState ] = useState([
    calculateCardSize(rows,gap,Axis.X),
    calculateCardSize(cols,gap,Axis.Y)
  ])
  return(
    <article className={`text-center border-red-600 border-2 align-middle basis-80 h-[${cardSize[1]}px]`}>
      {id}
    </article>
  )
}

const calculateCardSize = ( quantity: number , gap:number  , axis:Axis ) => {
  const space = axis === Axis.X ? window.innerWidth : window.innerHeight
  return Math.floor((0.8 * space - (gap * (quantity-1))) / quantity)
}
export default Card