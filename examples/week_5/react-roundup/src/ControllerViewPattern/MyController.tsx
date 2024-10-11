import React, { useState } from 'react'
import MyView from './MyView';

/**
 * Controller
 * 
 * Responsible for User Input and Managing State
 * 
 * View
 * Responsible for representing data
 * 
 * Advantages of the CV Pattern
 * 
 * - Separation of concerns
    *  - Enforces a clear separartion of concerns between view and controller
 * - Testability
    *  - Allows for independent testing
    *  - The controller can be unit-tested without the need for UI interaction
    *  - View can be unit tested for rendering correctly
 * - Modularity
    *  - CV pattern promotes modularity through its clear separation and interchangeability
    *  - You can change the underlying UI without changing the underlying logic
 * - Collaboration
    *  - Mulitple devs can work on different parts of the application without interfering with each other
 * 
 * 
 */

function MyController() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }
  return (
    <MyView count={count} onIncrement={handleIncrement}/>
  )
}

export default MyController