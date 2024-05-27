"use client"

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import Image from "next/image";
import styled from "styled-components";

import camiseta1 from '../assets/1.png';
import camiseta2 from '../assets/2.png';
import camiseta3 from '../assets/3.png';

const ProductsContainer = styled.div`
    display: flex;
    width: 100%;
    //isso serve para que o lado esquerdo fique smepre grudado na tela
    max-width: calc( 100vw - (100vw - 1180px) / 2 );
    margin-left: auto;
    min-height: 656px;
    overflow: hidden;
`;

const Product = styled.a`
  background-color: #1ea483;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  img {
    object-fit: cover;
  }
  footer {
    position: absolute;
    bottom: 0.25rem;
    left: 0.25rem;
    right: 0.25rem;

    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: rgba(0,0,0,0.6);
    padding: 2rem;

    //fazendo ele sair da tela para bno hover voltar
    transform: translateY(110%);
    opacity: 0;
    transition: 0.4s ease-in-out;


    strong{
      font-size: 1.125rem;
    }
    span{
      font-size: 2rem;
      color: ${props => props.theme['green500']};
    }
  }

  &:hover{
    footer{
      transform: translateY(0%);
      opacity: 1;
    }
  }
`;
export default function Home() {

  const [sliderRef ] = useKeenSlider({
    slides : {
      perView: 3,
      spacing: 48
    }
  })

  return (

    <ProductsContainer ref = {sliderRef} className='keen-slider'>
      <Product className='keen-slider__slide'>
        <Image src={camiseta1.src} width={520} height={520} alt=""/>

        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className='keen-slider__slide'>
        <Image src={camiseta2.src} width={520} height={520} alt=""/>

        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className='keen-slider__slide'>
        <Image src={camiseta3.src} width={520} height={520} alt=""/>

        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className='keen-slider__slide'>
        <Image src={camiseta3.src} width={520} height={520} alt=""/>

        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

   
    </ProductsContainer>

    
  );
}
