const HOURS_TO_MS = 60 * 60 * 1000
const MINUTES_TO_MS = 60 * 1000
const SECONDS_TO_MS = 1000  

export class Timer{
  startTime: number
  running: boolean
  accumulated: number

  constructor(){
    this.startTime = -1
    this.running = false
    this.accumulated = 0
  }
  startNewGame(){
    this.stop()
    this.reset()
    this.start()
  }
  start(){
    this.startTime = new Date().getTime()
    this.running = true
  }
  stop(){
    const now = new Date().getTime()
    const delta = this.startTime > 0 ? now - this.startTime : 0
    this.startTime = -1
    this.running = false
    this.accumulated += delta
  }
  reset(){
    this.startTime = this.running? new Date().getTime() : -1
    this.accumulated = 0
  }
  toMiliseconds(){
    const now = new Date().getTime()
    const delta = this.startTime > 0? now - this.startTime : 0
    return this.accumulated + delta
  }
  toString(){
    const time        = this.toMiliseconds()
    const hours       = Math.floor(   time / HOURS_TO_MS )
    const minutes     = Math.floor( ( time % HOURS_TO_MS   ) / MINUTES_TO_MS )
    const seconds     = Math.floor( ( time % MINUTES_TO_MS ) / SECONDS_TO_MS )
    const hundredths  = Math.floor( ( time % SECONDS_TO_MS ) / 10 )
    return `${hours>0?hours+' : ':''}${minutes>=10?minutes:'0'+ minutes} : ${seconds>=10?seconds:'0'+ seconds} : ${hundredths>=10?hundredths:'0'+ hundredths}`
  }
}
