import { type NextPage } from "next"

const Loading: NextPage = () => {
  return (
    <main className="flex flex-col justify-center items-center gap-4">
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
    </main>
  )
}

export default Loading

export const CardSkeleton = ()=>{
  return(
    <div className="animate-pulse flex flex-col gap-4 justify-center items-start border-amber-300 max-w-lg border-2 px-10 py-4">
      <div className="rounded-full bg-slate-200 h-5 w-28"></div>
      <div className="rounded-full bg-slate-200 h-5 w-full"></div>
      <div className="rounded-full bg-slate-200 h-5 w-40"></div>
    </div>
  )
}