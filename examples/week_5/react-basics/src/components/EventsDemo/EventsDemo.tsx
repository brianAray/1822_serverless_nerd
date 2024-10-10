import React from 'react'

function EventsDemo() {

    function clickEventHandler(){
        console.log("Click Event Triggered");
    }

    function hoverEventHandler(){
        console.log("Hover Event Triggered");
    }

    function inputHandler(event: React.ChangeEvent<HTMLInputElement>){
        console.log(event.target.value);
    }

  return (
    <>
        <button onClick={clickEventHandler}>Click Event</button>
        <button onMouseOver={hoverEventHandler}>Hover Event</button>
        <input type="text" placeholder='Username' onChange={inputHandler}></input>
    </>
  )
}

export default EventsDemo