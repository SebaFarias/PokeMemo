import { useContext } from 'react'
import { PokeContext } from '~/components/PokeSessionContext'

export const usePokeSessionContext = () => {
  const context = useContext(PokeContext)
  if(context===undefined){
    throw new Error('usePokeContext must be within PokeSessionContext provider')
  }
  const [ globalState, setGlobalState ] = context
  const boardController = {

    }
  return context
}