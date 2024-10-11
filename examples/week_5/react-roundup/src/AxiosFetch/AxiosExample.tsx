import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AxiosExample() {

    const [data, setData] = useState([] as any);

    // request interceptor

    axios.interceptors.request.use((config: any): any => {
        // Modify the request config before sending
        config.headers.Authorization = "Bearer your_token_here"
        return config;
    }, (error) => {
        return Promise.reject(error);
    })

    // Response Interceptor
    axios.interceptors.response.use((response: any): any => {
        // modify the response before resolving the promise
        response.data = {message: "I have been changed"};
        return response;
    }, (error) => {
        // Handle errors globally
        console.error(error);
        return Promise.reject(error);
    })

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => {
                // Axios will automatically turn the response into a JS object
                setData(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

  return (
    <div>AxiosExample</div>
  )
}

export default AxiosExample