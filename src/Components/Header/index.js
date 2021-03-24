import React from 'react';
import { Nav, Container, Img, Menu, Divider, LinkMenu } from './styles';

import Dogs from '../../Assets/dogs.svg';

function Header() {
  return (
    <Container className="header">
      <Nav className="nav container">
        <LinkMenu className="logo" to="/" aria-label="Pets - Home">
          <Img src={Dogs} alt="" />
        </LinkMenu>
        <Menu className="containerMenu">
          <LinkMenu className="link" to="/login">Login</LinkMenu>
          <Divider className="linkDivider"></Divider>
          <LinkMenu className="link" to="/cadastro"> Cadastre-se</LinkMenu>
        </Menu>
       
      </Nav>
    </Container>
  );
}

export default Header;
