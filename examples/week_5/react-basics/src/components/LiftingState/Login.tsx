import React, { useEffect, useState } from 'react'
import Form from './Form'

function Login() {

    let [loginInfo, setLoginInfo] = useState({username: "", password: ""});

    useEffect(() => {
        console.log(loginInfo);
    }, [loginInfo]);

    
  return (
    <>
        <Form setState={setLoginInfo}/>
    </>
  )
}

export default Login