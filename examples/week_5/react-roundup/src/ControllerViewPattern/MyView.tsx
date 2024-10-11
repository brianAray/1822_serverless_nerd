import React from 'react'

type MyProps = {count: number, onIncrement: any}

function MyView({count, onIncrement}: MyProps) {
  return (
    <>
        <p>Count: {count}</p>
        <button onClick={onIncrement}>Increment</button>
    </>
  )
}

export default MyView