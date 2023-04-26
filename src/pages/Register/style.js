import { css } from '@emotion/react'

export const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 30px;
`;

export const logo = css`
    margin: 50px 0px;
    font-size: 34px;
    font-weight: 600;
`;

export const mainContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    padding: 40px 20px;
    width: 400px;
`;

export const authForm = css`
    width: 100%;
`;

export const inputLabel = css`
    margin-left: 5px;
    font-size: 12px;
    font-weight: 600;
`;

export const loginButton = css`
    margin: 10px 0px;
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

export const signupMessage = css`
    margin-top: 20px;
    font-size: 14px;
    font-weight: 600;
    color: #777;
`;

export const register = css`
    margin-top: 10px;
    font-weight: 600;
`;

export const errorMsg = css`
    margin-left: 10px;
    margin-bottom: 20px;
    font-size: 12px;
    color: red;
`;