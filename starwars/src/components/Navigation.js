import React from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  opacity: 0.8;
  background: linear-gradient(to right, rgba(0,0,0) 40%, rgba(255,255,255) 60%);
`;

const Logo = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(to left, rgba(0,0,0) 35%, rgba(255,255,255) 65%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function Navigation() {
  return (
    <NavBar>
      <Logo>React Wars</Logo>
    </NavBar>
  )
}

export default Navigation