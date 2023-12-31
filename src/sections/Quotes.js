import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
min-width: 100vw;
height: 40vh;
background-color: rgba(225,214,210,255);

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const QuotesBlock = styled.div`
font-family: 'Times New Roman';
font-size: 4rem;



`
const QuotesText = styled.div`
text-align: center;

h1{
    font-family: 'Arial';
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 5px;
}

p{
    margin-top: 10px;
    margin-bottom: 20px;
}

@media (max-width: 48em) {
  font-size: ${props => props.theme.fontmd};
}

@media (max-width: 30em) {
  font-size: ${props => props.theme.fontxs};
}
`



const Quotes = () => {
  return (
    <Section>
        
        <QuotesBlock>"</QuotesBlock>
        <QuotesText>
        <h1> Don't be insecure</h1>
        <p>Love Your Self</p>
        
        
        </QuotesText>
        


    </Section>
  )
}

export default Quotes