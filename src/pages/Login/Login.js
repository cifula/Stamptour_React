/** @jsxImportSource @emotion/react */
import * as s from './style';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiLock } from 'react-icons/fi';
import AuthInput from './../../components/UI/Auth/AuthInput/AuthInput';
import axios from 'axios';

const Login = () => {
    const [ loginUser, setLoginUser ] = useState({username: "", password: ""});
    const [ errorMessages, setErrorMessages ] = useState({username: "", password: ""});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginUser({ ...loginUser, [name]: value });
    }

    const loginHandleSubmit = async () => {
        const option = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        try {
            const response = await axios.post("http://localhost:8080/auth/login", JSON.stringify(loginUser), option);
            setErrorMessages({usename: "", password: ""});
            const accessToken = response.data.grantType + " " + response.data.accessToken;
            localStorage.setItem("accessToken", accessToken);
            // setRefresh(false);
        }catch(error) {
            setErrorMessages({usename: "", password: "", ...error.response.data.errorData});
        }
    }
    return (
        <div css={s.container}>
            <header>
                <h1 css={s.logo}>Login</h1>
            </header>
            <main css={s.mainContainer}>
                <div css={s.authForm}>
                    <label css={s.inputLabel}>ID</label>
                    <AuthInput type="id" placeholder="Type your ID" onChange={handleChange} name="username">
                        <FiUser />
                    </AuthInput>

                    <label css={s.inputLabel}>Password</label>
                    <AuthInput type="password" placeholder="Type your Password" onChange={handleChange} name="password">
                        <FiLock />
                    </AuthInput>

                    <button css={s.loginButton} onClick={loginHandleSubmit}>LOGIN</button>
                </div>
            </main>

            <footer>
                <div css={s.register}><Link to="/register">SIGN UP</Link></div>
            </footer>
        </div>
    );
};

export default Login;