import axios from "axios";
import React, { useState } from "react";
import ConfirmationComponent from "../ConfirmationComponent/ConfirmationComponent";

function RegisterComponent() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const [confirmationCode, setConfirmationCode] = useState("");
    const [isConfirming, setIsConfirming] = useState(false);

    const registerUser = async () => {
        try {
        const response = await axios.post("http://localhost:3000/register", {
            username,
            password,
            email,
        });

        console.log(response.data);
        setIsConfirming(true);
        } catch (error) {
        console.error("Error registering user: ", error);
        }
    };
    const confirmUser = async () => {
        try {
            const response = await axios.post("http://localhost:3000/confirm", {
                username,
                confirmationCode
            })
            console.log(response.data)
        } catch (error) {
            console.error("Error confirming user: ", error);
        }
    }

  return (
    <>
      {!isConfirming ? (
        <>
          <h2>Register</h2>
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
          <input
            type="text"
            placeholder="email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={registerUser}>Register</button>
        </>
      ) : (
        <ConfirmationComponent 
            setConfirmationCode={setConfirmationCode}
            confirmUser={confirmUser}
        />
      )}
    </>
  );
}

export default RegisterComponent;
