interface GamePromoProps{
  title: string
  description: string
}

const GamePromo:React.FunctionComponent<GamePromoProps> = ({ title, description }) => {
  return(
    <article className="border-amber-300 max-w-lg border-2 px-10 py-4">
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}

export default GamePromo