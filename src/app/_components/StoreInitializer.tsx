"use client"

import { FunctionComponent, useRef } from "react"
import { PokeStatus, useStore } from "~/store"
import { PokeState } from "../_contexts/PokeContext"
import { Card } from "~/model/boardMatrix/PokeMemoMatrix"


interface StoreInitializerProps {
  pokeStatus: PokeStatus
}

const StoreInitializer : FunctionComponent<StoreInitializerProps> = ( props ) => {
  const initialized = useRef(false)
  const {cols,rows,matrix, score, moves, errors, timer, finished} = props.pokeStatus
  if(!initialized.current){
    useStore.setState({
      cols,
      rows,
      matrix,
      score,
      moves,
      errors,
      timer,
      finished,
    })
  }
  return <></>
}

export default StoreInitializer