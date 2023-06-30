import { NextPage } from "next";
import { api } from "~/utils/api"

const Highscores: NextPage = () => {

  const list = api.match.getAll

  return (
    <>
      <h1>Hola</h1>
    </>
  )
}

export default Highscores