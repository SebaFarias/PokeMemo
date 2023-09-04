'use client'

import { useSession } from "next-auth/react"
import SessionLoader from "./SessionLoader"

export interface AuthBtnsProps {
  
}

const AuthBtns:React.FunctionComponent<AuthBtnsProps> = props => {
  const { data: session, status} = useSession()

  return true ? <div className='relative'>
    <SessionLoader/>
  </div>
  : <></>
}

export default AuthBtns