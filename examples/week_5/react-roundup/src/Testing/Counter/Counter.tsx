import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

  return (
    <>
        <p>Count: {count}</p>
        <button onClick={(e: any) => setCount(count + 1)}>Increment</button>
        <button onClick={(e: any) => setCount(count - 1)}>Decrement</button>
    </>
  )
}

export default Counter