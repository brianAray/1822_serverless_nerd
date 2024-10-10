import React, { useState } from "react";

function Form(props: any) {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  function submitHandler(event: any) {
    event.preventDefault();
    props.setState({ username, password });
  }

  function updateLoginInfo(){
    props.setState({username, password})
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="username"
        onChange={(event: any) => setUsername(event.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(event: any) => setPassword(event.target.value)}
      />
      <input type="button" onClick={updateLoginInfo} value="submit"/>
    </form>
  );
}

export default Form;
