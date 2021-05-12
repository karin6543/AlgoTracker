import styled, {createGlobalStyle, css} from 'styled-components'
import React from 'react'

export const GlobalStyle = createGlobalStyle`
    html{
        height:100%;
    }
    body {
        font-family:Arial, Helvetica, sans-serif;

        height:100%;
        margin:0;
        color:#000;
    }
`;

export const sharedStyle = css `
    background-color:#eee;
    height:40px;
    border-radius:5px;
    border:1px solid #ddd;
    margin:10px 0 20px 0;
    padding:20px;
    box-sizing: border-box
`