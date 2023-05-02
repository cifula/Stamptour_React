/** @jsxImportSource @emotion/react */
import * as s from './style';
import React from 'react';
import SideMenu from '../../components/SideMenu/SideMenu';

const Main = () => {
    return (
        <div css={s.container}>
            <SideMenu />
            <div>
                <h1>홈입니다</h1>
            </div>
        </div>
    );
};

export default Main;