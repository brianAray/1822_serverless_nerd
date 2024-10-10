import React from 'react'

function Button(props: {bgColor: string, isRound?: boolean}) {
  return (
    <button style={{
        backgroundColor: props.bgColor,
        color: "white",
        border: "none",
        borderRadius: props.isRound ? "8px" : "0px",
        padding: "8px",
        fontSize: "20px"
    }}>Click Me</button>
  )
}

export default Button