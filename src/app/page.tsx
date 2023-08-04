import { type NextPage } from "next";
import AuthShowcase from "~/components/AuthShowcase";
import GamePromo from "~/components/NewsBanners/GamePromo";

interface HomeProps {

}

const Home: NextPage<HomeProps> = (props) => {
  return (
  <main className="w-full flex flex-col content-center min-h-screen flex-wrap">
    <GamePromo title="Modo clásico" description="Compite en igualdad de condiciones por un lugar en la tabla de posisiones"/>
    <AuthShowcase/>
  </main>
  )
}

export default Home