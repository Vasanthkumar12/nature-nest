import { useState } from 'react'
import './App.css'

function App() {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [intervalId, setIntervalId] = useState(null)

  function startClock() {
    setIntervalId(setInterval(() => {
      setSeconds(prev => {
        let newSec = prev + 1

        if(newSec > 5) {
          setMinutes(prev => {
            let newMin = prev + 1
            
            if(newMin > 5) {
              setHours(prev => prev + 1)
              return 0
            }
            else {
              return newMin
            }
          })
          return 0
        }
        else {
          return newSec
        }
      })
    }, 1000))
  }

  function decide() {
    console.log(isRunning)
    if(!isRunning) {
      setIsRunning(true)
      startClock()
    }
    else {
      stopClock()
    }
  }

  function stopClock() {
    setIsRunning(false)
    console.log("stop")
    clearInterval(intervalId)
  }

  function reset() {
    setHours(0)
    setMinutes(0)
    setSeconds(0)
    clearInterval(intervalId)
  }
  return (
    <>
      <h1>Time = {hours < 10 ? "0" + hours : hours} : {minutes < 10 ? "0" + minutes : minutes} : {seconds < 10 ? "0" + seconds : seconds} </h1>
      <button onClick={decide}>{isRunning ? "stop" : "start" }</button>
      <button onClick={reset}>reset</button>
    </>
  )
}

export default App
