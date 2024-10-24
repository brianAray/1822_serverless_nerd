import axios from "axios";
import React, { useState } from "react";

function LoginComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    try{
        const response = await axios.post("http://localhost:3000/login", {
            username,
            password
        });
        console.log(response.data);
    }catch(error){
        console.error("Error logging in: ", error);
    }
  }

  return (
    <>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
        <button onClick={loginUser}>Login</button>
    </>
  );
}

export default LoginComponent;
