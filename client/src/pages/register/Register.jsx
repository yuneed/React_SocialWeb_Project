import { useRef } from 'react';
import './register.css';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const navigate = useNavigate()

    const handleClick = async (e) => {
        e.preventDefault();

        if(passwordAgain.current.value !== password.current.value){
            passwordAgain.current.setCustomValidity("password don't match!");
        }else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            try {
                await axios.post("/auth/register", user);
                navigate("/login");
            }catch(err) {
                console.log(err);
            }
            
        }
    };

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Yun'SNS</h3>
                    <span className="loginDesc">Connect with friends and the world 
                    around you on Yun'SNS.</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder='Username' required ref={username}  className="loginInput" />
                        <input placeholder='Email' required ref={email} className="loginInput" type='email' />
                        <input placeholder='password' required ref={password} className="loginInput" type='password' minLength="6" />
                        <input placeholder='Password Again' required ref={passwordAgain} className="loginInput" type='password' />

                        <button className="loginButton" type='submit'>Sign Up</button>
                        <button className="loginRegisterButton">Log into Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}