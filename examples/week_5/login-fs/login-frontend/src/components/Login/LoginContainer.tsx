import React, { useState } from 'react'
import LoginInput, { LoginInputType } from './LoginInput';
import axios from 'axios';
import AccountContainer from '../Account/AccountContainer';

const URL = "http://54.234.102.40:4000";

function LoginContainer(props: any) {


    async function updateUser(user: LoginInputType){
        try{
            let response: any = await getUser(user);
            props.setUser(response.data);
        }catch(error){
            console.error(error);
        }
    }

    async function getUser(user: LoginInputType){
        try{
            let response = await axios.post(`${URL}/users`, user);
            return response;
        }catch(error){
            console.error(error);
        }
    }


  return (
    <>
        <LoginInput updateUser={updateUser}/>
        <AccountContainer/>
    </>
  )
}

export default LoginContainer