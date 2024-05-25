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

export const Container = styled.main`
        width: 100%;
        max-width: 1180px;
        margin: 0 auto;
        height: 100vh;
        display: flex;

`