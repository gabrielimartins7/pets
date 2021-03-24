import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

import signInBackgroundImg from '../../Assets/login.jpg';

export const Title = styled.h1`
   font-family: var(--type-second);
   line-height: 1;
   font-size: 3rem;
   margin: 1rem 0;
   position: relative;
   z-index: 1;

   &::after {
     content: '';
     display: block;
     width: 1.5rem;
     height: 1.5rem;
     background: var(--yellow);
     position: absolute;
     bottom: 5px;
     left: --5px;
     border-radius: 0.2rem;
     z-index: -1;
   }
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;
`;

const apperFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`

  animation: ${apperFromLeft} 1s;
  form {
    margin: 80px 0;
    width: 340px;
    h1 {
      margin-bottom: 24px;
    }
    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.3s;
      &:hover {
        color: ${ '#f4ede8'};
      }
    }
  }
 
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;

export const LinkLogin = styled(Link)`
  color: #ffa500;
  font-family: var(--type-second);
  font-size: 20px;
  text-decoration: none;

  &::after {
    content: '';
    display: block;
    background: #ddd;
    height: 0.5rem;
    width: 3rem;
    border-radius: 0.2rem;
  }
`;