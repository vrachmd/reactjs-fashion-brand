import React from 'react';
import styled from 'styled-components';
import BgImg from '../assets/Bgimg/emile.png';
import {  FaTwitter, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background-image: url(${BgImg});
  background-size: contain;
  background-position: center;
  display: flex;
  flex-direction: column; /* Updated to column */
  align-items: center; /* Center vertically */

  @media (max-width: 48em) {
    background-size: cover;
  }

  @media (max-width: 30em) {
    background-size: cover;
  }
  
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.fontxxl};
  font-family: 'Kaushan Script';
  text-transform: capitalize;
  font-weight: 250;
  text-align: center; /* Center horizontally */
  position: relative;
  margin-top: 2rem;
  z-index: 5;

  @media (max-width: 30em) {
    font-size: ${props => props.theme.fontxl};
    width: 80%;
  }
  
`;

const Subtitle = styled.div`
  font-family: 'poppins';
  font-size: 16px;
  margin-top: 2rem;
  position: relative;
  z-index: 5;
`;

const SocialColumn = styled.div`
  display: flex;
  flex-direction: row; /* Updated to column */
  align-items: center; /* Center horizontally */
  gap: 1rem;
  margin: auto;
  /* position: absolute;
  bottom: 40%;
  left: 50%;
  transform: translateX(-50%); */

  @media (max-width: 48em) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`

const SocialIcon = styled.a`
  font-size: 4rem;
  color: #000;
  transition: color 0.3s ease;

  &:hover {
    color: #3498db; /* Change to your desired hover color */
  }

  @media (max-width: 48em) {
    font-size: 3rem;
    
  }

  @media (max-width: 30em) {
    font-size: 2rem;
  }
`;

const Social = () => {
  return (
    <Section>
      <Title data-scroll data-scroll-speed="-2">
        Walk through the world with us
      </Title>
      <Subtitle data-scroll data-scroll-speed="-2">
        Connect with us on social media.
      </Subtitle>
      <SocialColumn>
        <SocialIcon href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </SocialIcon>
        <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </SocialIcon>
        <SocialIcon href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <FaTiktok />
        </SocialIcon>
      </SocialColumn>
    </Section>
  );
};

export default Social;