import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
  HomeContainer,
  HomeContent,
  HomeItems,
  HomeH1,
  HomeP,
  HomeBtn,
  Text
} from './HomeElements';
import {  useDispatch } from 'react-redux';
import { openModal } from '../../features/modal/modalSlice'
import Typing from 'react-typing-animation';


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
 
  
  const dispatch = useDispatch();
const order=()=>{
  dispatch(openModal())
}
  const toggle = () => {
    setIsOpen(!isOpen);
  
  };

  return (
    <HomeContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HomeContent>
        <HomeItems>
          <HomeH1>Greatest Zozo Ever</HomeH1>
          <HomeP>Ready in 60 seconds</HomeP>
          <Text> <Typing ><span>#MonateWateng</span>
        
         
          </Typing></Text>
          
          <HomeBtn onClick={order}>Place Order</HomeBtn>
      
        </HomeItems>
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
