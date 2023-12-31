import React from 'react';
import styled from 'styled-components';
import logo1 from '../assets/Logos/carrotcloth.png'
import logo2 from '../assets/Logos/carrotparfume.png'

const Section = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(244, 244, 244, 255);
  overflow: hidden;

  @media (max-width: 48em) and (min-width: 30em) {
  display: flex;
  /* align-items: center;
  justify-content: center; */
  }
  
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.fontxxl};
  font-family: 'Kaushan Script';
  font-weight: 250;
  margin-top: 0;

  @media (max-width: 48em) {
    font-size: ${props => props.theme.fontxxl};
   }

  @media (max-width: 30em) {
    font-size: ${props => props.theme.fontlg};
  }
`;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 8rem;
  margin-bottom: 8rem;
  
  @media (max-width: 48em) and (min-width: 30em) {
  margin: auto;
  }
  

`;

const ProductCard = styled.div`
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
`;

const ProductLogo = styled.div`

img {
  width: 150px;
}

`
const ProductTitle = styled.h3`
  font-size: ${(props) => props.theme.fontxl};
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  margin-bottom: 10px;
`;

const VisitStoreButton = styled.button`
  color: #000;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
  font-size: ${(props) => props.theme.fontmd};
  font-family: 'Sirin Stencil';
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 2rem;
  margin-bottom: 2rem;

  &:hover {
    background-color: #fff;
  }
`;

const Products = () => {
  return (
    <Section id="products">
      <Title data-scroll data-scroll-speed="-2">
        Explore Our Product Collection
      </Title>
      <ProductContainer>
        {/* Example Product Card - Customize and Duplicate for More Products */}
        <ProductCard>
          <ProductLogo><img src={logo1} alt="carrotcloth" /></ProductLogo>
          <ProductTitle>Carrotcloth.id</ProductTitle>
          <ProductDescription>
          Carrotcloth.id is a distinguished clothing brand that takes pride in its commitment to quality and style.
          </ProductDescription>
          <VisitStoreButton><a href="https://store.carrotcore.com">Visit Store</a></VisitStoreButton>
        </ProductCard>
        <ProductCard>
        <ProductLogo><img src={logo2} alt="carrotparfume" /></ProductLogo>
          <ProductTitle>Carrotparfume</ProductTitle>
          <ProductDescription>
          Carrotparfume is a unique fragrance brand that captivates the senses with its exquisite scents. 
          </ProductDescription>
          <VisitStoreButton><a href="https://store.carrotcore.com">Visit Store</a></VisitStoreButton>
        </ProductCard>

        {/* Add more ProductCards as needed */}
      </ProductContainer>
      
    </Section>
  );
};

export default Products;
