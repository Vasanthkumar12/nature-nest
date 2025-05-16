import React, { useEffect, useState } from 'react'

const App = () => {
  
const [isRunning, setIsRunning] = useState(false)
const [seconds, setSeconds] = useState(0)
const [minutes, setMinutes] = useState(0)
const [hours, setHous] = useState(0)

let intervalId

useEffect(() => {
  if(isRunning) {
    intervalId = setInterval(updateTime, 1000)
  }
  return () => clearInterval(intervalId)
}, [isRunning])

const updateTime = () => {
  setSeconds(pre => pre + 1)
  if(seconds == 60) {
    setSeconds(0)
    setMinutes(pre => pre + 1)
  }
  if(minutes == 60) {
    setMinutes(0)
    setHous(pre => pre + 1)
  }
}

const reset = () => {
  setSeconds(0)
  setMinutes(0)
  setHous(0)
  setIsRunning(false)
}
  return (
    <div>
      <h1>{hours}:{minutes}:{seconds}</h1>
      <button onClick={() => setIsRunning(true)}>start</button>
      <button onClick={() => setIsRunning(false)}>stop</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default App