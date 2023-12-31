import React from 'react';
import styled from 'styled-components';

import img1 from '../assets/Images/1.webp';
import img2 from '../assets/Images/2.webp';
import img3 from '../assets/Images/3.webp';

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  width: 80vw;
  margin: 0 auto;
   /* overflow: hidden; Menambahkan overflow: hidden untuk menghindari gambar keluar dari container */

   @media (max-width: 40em) {
    width: 90vw;
   }

   @media (max-width: 30em) {
    width: 100vw;
   }
  img {
    width: 100%;
    height: auto;
    display: block; /* Menambahkan display: block agar gambar tidak menghasilkan whitespace tambahan */
  }
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: 'Kaushan Script';
  font-weight: 250;

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;

  @media (max-width: 64em) {
    font-size: ${props => props.theme.fontxxxl};
    top: 6rem;
   }

   @media (max-width: 48em) {
    font-size: ${props => props.theme.fontxxxl};
    top: 4rem;
   }

   @media (max-width: 30em) {
    font-size: ${props => props.theme.fontxxl};
    top: 4rem;
   }

`;

const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  text-align: justify;
  position: relative;
  margin-right: 25px;
  z-index: 5;
  margin-top: 20%;

  @media (max-width: 64em) {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;
    padding: 2rem;
    font-weight: 600;
    
    backdrop-filter: blur(2px);
    background-color: ${props => `rgba(${props.theme.textRgba},0.4)`};
    border-radius: 20px;
  }

  @media (max-width: 48em) {
    font-size: ${props => props.theme.fontlg};
  }

  @media (max-width: 30em) {
    font-size: ${props => props.theme.fontsm};
    width: 70%;
  }
`;

const Right = styled.div`
  width: 50%;
  position: relative;
  z-index: 4;

  .small-img-1,
  .small-img-2 {
    width: 40%;
    position: absolute;
    bottom: 10%;
    opacity: 0.95;
  }

  .small-img-1 {
    right: 80%;
  }

  .small-img-2 {
    left: 70%;
    bottom: 45%;
  }

  @media (max-width: 64em) {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  }
  img{
    object-fit: cover;
  }
  .small-img-1{
    width: 30%;
    height: auto;
    left: 10%;
    bottom: 30%;
  }

  .small-img-2{
    width: 30%;
    height: auto;
    left: 60%;
    bottom: 50%;
  }

`;

const About = () => {
  return (
    <Section id="fixed-target" className="about">
      <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
        About Us
      </Title>
      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
        Carrot Core is a rapidly growing company based in Jakarta. We focus on a diverse range of industries, showcasing our expertise in fashion, creative industries, and perfume.
        <br />
        <br />
        We are committed to delivering high-quality products and services, and Carrot Core continuously innovates to exceed the expectations of our customers. We sincerely thank you for choosing Carrot Core to be a part of your lifestyle and a source of inspiration.
      </Left>
      <Right>
        <img src={img1} alt="About Us" />
        <img data-scroll data-scroll-speed="5" src={img2} alt="About Us" className="small-img-1" />
        <img data-scroll data-scroll-speed="-2" src={img3} alt="About Us" className="small-img-2" />
      </Right>
    </Section>
  );
};

export default About;
