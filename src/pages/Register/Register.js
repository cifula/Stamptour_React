/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiUser, FiLock } from 'react-icons/fi';
import { BiRename } from 'react-icons/bi';
import { AiFillSetting } from 'react-icons/ai';
import * as s from './style';
import axios from 'axios';
import AuthInput from './../../components/UI/Auth/AuthInput/AuthInput';

const Register = () => {
    const [registerUser, setRegisterUser] = useState({username: "", password: "", name:""})
    const [errorMessages, setErrorMessages] = useState({username: "", password: "", name: ""});
    const navigate = useNavigate();

    const onChangeHandle = (e) => {
        const {name, value} = e.target;
        setRegisterUser({...registerUser, [name]: value});
    }

    const registeSubmit = async () => {
        const data = {
            ...registerUser
        }
        const option = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        try {
            await axios.post("http://localhost:8080/auth/signup", JSON.stringify(data), option);
            setErrorMessages({username: "", password: "", name: ""});
            alert("회원가입 성공!");
            navigate("/login");
            
        } catch(error) {
            setErrorMessages({username: "", password: "", name: "", ...error.response.data.errorData});
        }
    }

    return (
        <div css={s.container}>
            <header>
                <h1 css={s.logo}>SIGN UP</h1>
            </header>
            <main css={s.mainContainer}>
                <div css={s.authForm}>
                    <label css={s.inputLabel}>ID</label>
                    <AuthInput type="id" placeholder="Type your ID" name="username" onChange={onChangeHandle}>
                        <FiUser />
                    </AuthInput>
                    <div css={s.errorMsg}>{errorMessages.id}</div>

                    <label css={s.inputLabel}>Password</label>
                    <AuthInput type="password" placeholder="Type your Password" name="password" onChange={onChangeHandle}>
                        <FiLock />
                    </AuthInput>
                    <div css={s.errorMsg}>{errorMessages.password}</div>

                    <label css={s.inputLabel}>Name</label>
                    <AuthInput type="text" placeholder="Type your name" name="name" onChange={onChangeHandle}>
                        <BiRename />
                    </AuthInput>
                    <div css={s.errorMsg}>{errorMessages.name}</div>
                    
                    <button css={s.loginButton} onClick={registeSubmit}>REGISTER</button>
                </div>
            </main>

            <footer>
                <div css={s.register}><Link to="/login">LOGIN</Link></div>
            </footer>
        </div>
    );
};

export default Register;