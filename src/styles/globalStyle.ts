"use client"
import styled, { createGlobalStyle } from "styled-components";

const  GlobalStyle = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        --webkit-font-smoothing: antialised;
        background-color: ${props => props.theme['gray900']};
        color: ${props => props.theme['gray100']};
    }

`

export default GlobalStyle;

