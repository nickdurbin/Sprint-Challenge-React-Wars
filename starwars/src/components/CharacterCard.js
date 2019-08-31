import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10% auto;
  padding: 1rem;
  width: 40%;
  height: 300px;
  background-color: tan;
  font-size: 2rem;
  opacity: 0.7;
  border: 1px solid black;
  border-radius: 20px;
`;

const H1 = styled.h1`
  font-size: 2.3rem;
  font-weight: 600;
`;

const H3 = styled.h3`
  font-size: 1.4rem;
`;

function CharacterCard(props) {
  return (
    <Card key={props.url}>
      <H1>{props.name}</H1>
      <H3>Height: {props.height}</H3>
      <H3>Gender: {props.gender}</H3>
      <H3>Birth Year: {props.birth_year}</H3>
    </Card>
  )
}

export default CharacterCard