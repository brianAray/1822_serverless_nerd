import axios from 'axios';
import React, { useState } from 'react'

function ConfirmationComponent(props: any) {
  return (
    <>
        <h2>Confirmation</h2>
        <input
            type="text"
            placeholder='Confirmation Code'
            onChange={(e) => props.setConfirmationCode(e.target.value)}
        />
        <button onClick={props.confirmUser}>Confirm</button>
    </>
  )
}

export default ConfirmationComponent