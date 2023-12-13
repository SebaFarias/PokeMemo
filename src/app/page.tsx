import Board from "./_components/Board";
import TimeShower from "./_components/TimeShower";

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white">
      <h1>PokeMemo</h1>
      <TimeShower/>
      <Board/>
    </main>
  );
}