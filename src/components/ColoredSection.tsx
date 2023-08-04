'use client'

import useObserver from "~/hooks/useObserver"
import { useState, useRef, useEffect } from 'react'

export interface ColoredSectionProps {
  color: string
}

const ColoredSection: React.FunctionComponent<ColoredSectionProps> = ({ color }) => {
  
  const sectionRef = useRef<HTMLDivElement>(null)
  const [ isIntersecting, setIsIntersecting ] = useState( false )
  const [ observer, setElements, entries ] = useObserver({
    threshold: 0.1,
    root: null,
  })

  useEffect(()=>{
    if(sectionRef.current)setElements([sectionRef?.current])
  },[setElements])

  useEffect(()=>{
    setIsIntersecting(Boolean(entries[0]?.isIntersecting))
  },[entries])


  return(
    <section className={`w-full h-screen ${color}`} ref={sectionRef}>
      {isIntersecting?"Sí":"No"}
    </section>
  )
}

export default ColoredSection
