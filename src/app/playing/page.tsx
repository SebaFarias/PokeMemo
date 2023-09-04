import { usePokeSessionContext } from "~/hooks/usePokeContext"

const Playing = () => {
  const [context, setContext] = usePokeSessionContext()
  return(
    <>
      {JSON.stringify(context)}
    </>
  )
}