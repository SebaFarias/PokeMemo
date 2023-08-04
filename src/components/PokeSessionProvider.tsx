'use client'

import { SessionProvider } from "next-auth/react"
import { Children } from "react"

const PokeSessionProvider = ({children}:{ children: React.ReactNode }) => {
  return(
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default PokeSessionProvider