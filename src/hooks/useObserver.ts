import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";


const useObserver = (options?: IntersectionObserverInit)
: [
  IntersectionObserver | null,
  Dispatch<SetStateAction<Element[]>>,
  IntersectionObserverEntry[]
] => {

  const [ elements, setElements ] = useState<Element[]>([])
  const [ entries, setEntries ] = useState<IntersectionObserverEntry[]>([])

  let observer = useRef<IntersectionObserver|null>(null)
  if(typeof window !== "undefined") observer = useRef( new IntersectionObserver(observedEntries => {
    setEntries(observedEntries)
  }, options ))

  useEffect(()=>{
    const currentObserver = observer.current
    currentObserver && currentObserver.disconnect()
  
    if( currentObserver && elements && elements.length > 0){
      elements.forEach( element => currentObserver.observe(element) )
    }

    return(() =>{
      if(currentObserver) currentObserver.disconnect()
    })

  },[elements])


  return [ observer.current, setElements, entries ]
}

export default useObserver