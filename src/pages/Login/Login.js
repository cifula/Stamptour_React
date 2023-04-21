/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginInput from '../../components/UI/Login/LoginInput/LoginInput';
import { FiUser, FiLock } from 'react-icons/fi';
import { BsGoogle } from 'react-icons/bs';
import { SiNaver, SiKakao } from 'react-icons/si';

const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 30px;
`;

const logo = css`
    margin: 50px 0px;
    font-size: 34px;
    font-weight: 600;
`;

const mainContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    padding: 40px 20px;
    width: 400px;
`;

const authForm = css`
    width: 100%;
`;

const inputLabel = css`
    margin-left: 5px;
    font-size: 12px;
    font-weight: 600;
`;

const forgotPassword = css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 45px;
    width: 100%;
    font-size: 12px;
    font-weight: 600;
`;

const loginButton = css`
    margin-top: 40px;
    border: 1px solid #dbdbdb;
    border-radius: 7px;
    width: 100%;
    height: 50px;
    background-color: white;
    font-weight: 900;
    cursor: pointer;
    &:hover {
        background-color: #fafafa;
    }
    &:active {
        background-color: #eee;
    }
`;

const register = css`
    margin-top: 10px;
    font-weight: 600;
`;

const errorMsg = css`
    margin-left: 10px;
    margin-bottom: 20px;
    font-size: 12px;
    color: red;
`;


const Login = () => {
    return (
        <div css={container}>
            <header>
                <h1 css={logo}>Login</h1>
            </header>
            <main css={mainContainer}>
                <div css={authForm}>
                    <label css={inputLabel}>Email</label>
                    <LoginInput type="email" placeholder="Type your email" name="email">
                        <FiUser />
                    </LoginInput>

                    <label css={inputLabel}>Password</label>
                    <LoginInput type="password" placeholder="Type your password" name="password">
                        <FiLock />
                    </LoginInput>

                    <button css={loginButton}>LOGIN</button>
                </div>
            </main>

            <footer>
                <div css={register}><Link to="/register">SIGN UP</Link></div>
            </footer>
        </div>
    );
};

export default Login;