import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/Svgs/carrotcore.svg';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const Section = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  margin: 0 auto;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  position: relative;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20vh;
  margin: 0;

  img{
    width: 20vw;
    height: auto;
    filter: invert(100%); /* Ubah warna gambar menjadi putih */
  }

  @media (max-width: 48em) {

    height: 10vh;

  img{
    width: 100%;
    height: auto;
    filter: invert(100%); /* Ubah warna gambar menjadi putih */
  }

  }

`;

const ContactColumn = styled.div`
  text-align: center;
  margin-bottom: 20px;
  color: #fff;

  @media (max-width: 30em) {
    width: 70%;
    margin-bottom: 0;
  }
`;

const ContactInfo = styled.div`
  margin-top: 0.5rem;

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;

const FooterComponent = styled.footer`
  width: 80vw;
  margin-top: 0;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 1rem;
    padding: 0 1rem;
    border-top: 1px solid;
    border-bottom: 1px solid;
  }

  li {
    padding: 2rem;
    font-size: ${(props) => props.theme.fontmd};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media (max-width: 48em) {
    margin-top: 1rem;
    li {
      padding: 1rem;
      font-size: ${(props) => props.theme.fontsm};
    }
  }

  @media (max-width: 30em) {
    width: 100vw;
    margin-top: 3rem;
    li {
      padding: 0.5rem;
      font-size: ${(props) => props.theme.fontxs};
    }
}
`;

const Footer = () => {

  const {scroll} = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);

    scroll.scrollTo(elem,
    {
        offset:'-100',
        duration:'2000',
        easeing: [0.25,0.0,0.35,1.0]



    }
    )
  }
  return (
    <Section id="contacts">
      <LogoContainer>
        <img data-scroll data-scroll-speed="2"
        src={Logo} alt="" />
      </LogoContainer>
      <ContactColumn data-scroll data-scroll-speed="-2">
        <ContactInfo>Email: carrotcore@gmail.com</ContactInfo>
        <ContactInfo>Phone: +621-56955-012 || +62-896-5275-7540</ContactInfo>
        <ContactInfo>Address: Daan Mogot No. 3, Jelambar, Grogol, West Jakarta, Indonesia.</ContactInfo>
      </ContactColumn>
      <FooterComponent>
        <ul>
          <li onClick={() => handleScroll('#home')}>home</li>
          <li onClick={() => handleScroll('.about')}>about</li>
          <li onClick={() => handleScroll('#products')}>products</li>
          <li>
            <a href="https://store.carrotcore.com" target="_blank" rel="noreferrer">
              shop
            </a>
          </li>
          <li onClick={() => handleScroll('#contacts')}>contact us</li>
        </ul>
      </FooterComponent>
    </Section>
  );
};

export default Footer;
