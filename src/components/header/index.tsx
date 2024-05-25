"use client"
import styled from 'styled-components';
import LogoSvg from '../../assets/Logo.svg';
import Image from 'next/image';

const HeaderContainer = styled.header`
   padding: 2rem 0;
   width: 100%;
   max-width: 1180px;
   margin: 0 auto;


`
export function Header (){
    return (
        <HeaderContainer>
            <Image src={LogoSvg.src} width={150} height={150} alt="logo"  />
        </HeaderContainer>
    )
}