/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react';

const menuItem = css`
    display: flex;
    width: 220px;
    height: 42px;

    align-items: center;
    
    border-radius: 4px;
`

const menuIcon = css`

`

const menuTitle = css`

`

const MenuItem = ({children, title, onClick}) => {
    return (
        <div css={menuItem} onClick={onClick}>
            <div css={menuIcon}>{children}</div>
            <div css={menuTitle}>{title}</div>
        </div>
    );
};

export default MenuItem;