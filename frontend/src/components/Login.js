import { useDispatch } from 'react-redux'
import {login} from "../features/userSlice"
import React,{useState} from 'react'
import "./Login.css"

import api from '../features/api'

const Login = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        registerUser();
        const resToken = localStorage.token;
        e.preventDefault();
        dispatch(
            login({
                name: name,
                email: email,
                password: password,
                token: resToken,
                loggedIn: true,
            })
        );
        setEmail("");
        setPassword("");
    };

    async function registerUser(){

        const response = await api.post('/auth/register',{
            name:name,
            email:email,
            password:password,
        }).catch(function(error){
            console.log(error)
        });
        localStorage.setItem('token',response.data.token);
        return response;
    }

    return (
        <div className='login'>
            <form className='login_form' onSubmit={(e)=> handleSubmit(e)}>
                <h1>
                    Login
                </h1>
                <input type="name" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)}/>
                <input type="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <button type="submit" className="submit_btn">Submit</button>
            </form>
            
        </div>
    )
}

export default Login
