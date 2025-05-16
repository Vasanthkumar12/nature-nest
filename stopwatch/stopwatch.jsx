import React from 'react'
const { useState } = require("react");

const [time, setTime] = useState()
const [seconds, setSeconds] = useState(0)
const [minutes, setMinutes] = useState(0)
const [hours, setHours] = useState(0)


export const stopwatch = () => {
  return (
    <div>
        <h1>{seconds} : {minutes} : {hours}</h1>
    </div>
  )
}
