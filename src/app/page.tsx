import Board from "./_components/Board";
import TimeShower from "./_components/TimeShower";
import StoreInitializer from "./_components/StoreInitializer";
import { PokeMemoMatrix } from "~/model/boardMatrix/PokeMemoMatrix";
import { Timer } from "~/model/time/Timer";

export default async function Home() {

const initialState = {
  cols: 3,
  rows: 4,
  matrix: new PokeMemoMatrix(3,4).getMatrix(),
  score: 0,
  moves:0,
  errors:0,
  timer: new Timer().toString(),
  finished: false,
}

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white">
      <h1>PokeMemo</h1>
      <StoreInitializer pokeStatus={initialState} />
      <TimeShower/>
      <Board/>
    </main>
  );
}