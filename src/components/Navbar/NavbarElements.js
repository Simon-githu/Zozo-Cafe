import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { GiChefToque } from 'react-icons/gi';

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (device-width: 360px) and (device-height: 640px){
    position: absolute;
    bottom: 480px;
    right:45px;
}
  @media screen and (device-width: 411px) and (device-height: 731px){
    position: absolute;
    bottom: 550px;
    right:60px;
}  @media screen and (device-width: 320px) and (device-height: 568px){
    position: absolute;
    bottom: 430px;
    right:45px
}
@media screen and (device-width: 375px) and (device-height: 667px){
    position: absolute;
    bottom: 500px;
    right:40px
}
@media screen and (device-width: 414px) and (device-height: 736px){
    position: absolute;
    bottom: 550px;
    right:60px
}
@media screen and (device-width: 768px) and (device-height: 1024px){
    position: absolute;
    bottom: 910px;
    right:290px
}
@media screen and (device-width: 1024px) and (device-height: 1366px){
    position: absolute;
    bottom: 1200px;
    right:380px
}
@media screen and (device-width: 540px) and (device-height: 720px){
    position: absolute;
    bottom: 656px;
   right:200px
}
@media screen and (device-width: 280px) and (device-height: 653px){
    position: absolute;
    bottom: 520px;
   
}
`;
export const Bars = styled(GiChefToque)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
  &:hover {
    p{
      color:#e9ba23
    }
    ${Bars}{
      color:#e9ba23
    }
  }
`;



export const Logo = styled.img`
 height:400px;
 position: relative;
 top:50px;
 @media screen and (max-width: 947px) {
   height:300px
  }
  @media screen and (device-width: 360px) and (device-height: 640px){
    height:280px
}
@media screen and (device-width: 320px) and (device-height: 568px){
    height:250px
}
@media screen and (device-width: 768px) and (device-height: 1024px){
    height:240px
}
@media screen and (device-width: 1024px) and (device-height: 1366px){
    height:300px
}
@media screen and (device-width: 540px) and (device-height: 720px){
    height:160px
}
@media screen and (device-width: 280px) and (device-height: 653px){
  height:200px
}
`;
 