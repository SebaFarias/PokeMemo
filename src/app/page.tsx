import { Metadata, type NextPage } from "next";
import AuthShowcase from "~/components/AuthShowcase";
import GamePromo from "~/components/NewsBanners/GamePromo";
import { CardSkeleton } from "./loading";

interface HomeProps {

}

export const metadata: Metadata ={
  title:'Pokememo'
}

const Home: NextPage<HomeProps> = (props) => {
  return (
  <main className="w-full flex flex-col content-center min-h-screen flex-wrap gap-8">
    <CardSkeleton/>
    <CardSkeleton/>
    <CardSkeleton/>
    <CardSkeleton/>
    <GamePromo title="Modo clásico" description="Compite en igualdad de condiciones por un lugar en la tabla de posisiones"/>
    <AuthShowcase/>
  </main>
  )
}

export default Home