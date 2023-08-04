'use client'

import { signIn, signOut, useSession } from "next-auth/react"

export interface AuthShowcaseProps{

}

const AuthShowcase: React.FunctionComponent<AuthShowcaseProps> = props => {
  
  const { data: session, status } = useSession()

  return(
  <div>
    {status}
    <button onClick={status==='authenticated'? ()=>void signOut(): ()=>void signIn('google')}>{status==='authenticated'?'Sing out':'Sign in'}</button>
  </div>)
}

export default AuthShowcase