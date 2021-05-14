import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../features/modal/modalSlice';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  const dispatch = useDispatch();
  const order=()=>{
    dispatch(openModal())
  }
  return (
    <FeatureContainer id="zozo-of-the-day">
      <h1>Zozo of the Day</h1>
      <p>Four(4) slices of french toast with russian, mushroom, vienna, burger,cheese and chips</p>
      <h1>#Nthwela</h1>
      <FeatureButton onClick={order}>Order Now</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
