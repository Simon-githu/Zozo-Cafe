import React from 'react';
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton
} from './ProductsElements';
import Carousel from 'react-elastic-carousel';
import { openModal } from '../../features/modal/modalSlice'
import { useDispatch } from 'react-redux';
const Products = ({ heading, data }) => {
  const breakPoints=[
    {width:500,itemsToShow:1},
    {width:768,itemsToShow:3},
  
];
const dispatch = useDispatch();
const order=()=>{
  dispatch(openModal())
}
  return (
    <ProductsContainer id="zozo">
      <ProductsHeading>{heading}</ProductsHeading>
      
      <ProductWrapper>
            <Carousel showArrows="true"  breakPoints={breakPoints}>
            {data.map((product, index) => (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductButton onClick={order}>{product.button}</ProductButton>
              </ProductInfo>
            </ProductCard>
            ))}
             </Carousel>
        
          
    
      </ProductWrapper>
     
    </ProductsContainer>
  );

            } 
export default Products;
