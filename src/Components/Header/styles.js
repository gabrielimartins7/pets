import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  box-shadow: 0px 1px 1px  rgba(0, 0, 0, 0.1);
  width: 100%;
  z-index: 100;
  background: white;
  top: 0px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;

export const Img = styled.img`
  padding: 2rem ;
`;

export const Menu = styled.div`
  display: flex;
  width: 300px;
  justify-content: center;
  align-items: center;

  &::after{
    content: '';
    display: inline-block;
    width: 14px;
    height: 17px;
    background: url('../../Assets/usuario.svg') no-repeat center center;
    margin-left: 0.5rem;
    position: relative;
    top: -1px;
  }
`;

export const LinkMenu = styled(Link)`
  color: #333;
  text-decoration: none;
`;

export const Divider = styled.div`
  height: 20px;
  width: 1px;
  background-color: #333;
  margin: 10px;
`;