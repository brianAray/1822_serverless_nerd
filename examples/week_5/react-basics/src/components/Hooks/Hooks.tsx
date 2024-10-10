import React, { useEffect, useState } from 'react'

/*
    What is a hook?
        - Extra methods added to functional components to provide the same functionality of class components

    useState()
        - Create state variables
        - When a state variable updates, it will cause the component to re-render
    
    useEffect()
        - runs the callback function provided to it on the array of values you are observing
        - You can also not provide anything in the array and it will run once when the page loads

    What is state?
        - variables that are directly tied to the component

*/


function Hooks() {

    // let isVisible = false;

    // let [visibility, setVisibility] = useState(false);

    // let [count, setCount] = useState(0);

    let [state, setState] = useState({
        visibility: false,
        count: 0
    });


    useEffect(() => {
        console.log("useEffect triggered")
    }, [])


    function toggleVisibility(){
        // isVisible = !isVisible;

        // console.log(isVisible);
        // setVisibility(!visibility);

        setState({...state, visibility: !state.visibility});

    }

    function incrementCount(){
        // setCount(++count);
        setState({...state, count: ++state.count});
    }

    function decrementCount(){
        // setCount(--count);
        setState({...state, count: --state.count});
    }

  return (
    <>
        <button onClick={toggleVisibility}>Toggle</button>

        {
            state.visibility ? 
                <h2>
                    Am I visible?
                </h2>
                :
                <></>
        }

        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>

        <h2>Count: {state.count} </h2>
    </>
  )
}

export default Hooks