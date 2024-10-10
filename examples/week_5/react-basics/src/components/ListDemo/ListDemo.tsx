import React from 'react';
import "./ListDemo.css";

type FullName = {firstName: string, lastName: string}

const DUMMY_DATA: FullName[] = [
    {firstName: "John", lastName: "Doe"},
    {firstName: "Jane", lastName: "Doe"},
    {firstName: "Mark", lastName: "Doe"},
    {firstName: "Elizabeth", lastName: "Doe"},
];

function ListDemo() {
  return (
    <>
        {
        /*
            To display each item in an array to the dom, we use the map function
            The map function transforms each item in an array
            We will go over each item and return a TSX to be displayed to the page
        */
        
            DUMMY_DATA.map((obj: FullName, index) => {
                return (
                    <div className='name-div' key={index}>
                        <div className='firstName-div'>{obj.firstName}</div>
                        <div className='lastName-div'>{obj.lastName}</div>
                    </div>
                )
            })
        
        
        }
    </>
  )
}

export default ListDemo