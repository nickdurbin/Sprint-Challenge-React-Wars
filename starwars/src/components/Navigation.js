import React from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  opacity: 0.8;
`;

const Logo = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
`;

function Navigation() {
  return (
    <NavBar>
      <Logo>React Wars</Logo>
    </NavBar>
  )
}

export default Navigation