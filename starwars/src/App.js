import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import Navigation from './components/Navigation';
import CharacterCard from './components/CharacterCard';

const MainContent = styled.section`
  display: flex;
  width: 100%;
`;


const App = () => {
 
  const [data, setData] = useState([{}]);
  const [page, setPage] = useState();

  useEffect(() => {
    axios
     .get(`https://swapi.co/api/people`)
     .then(res => {
       setData(res.data.results);
       console.log(res.data.results);
     })
     .catch(err => {
       console.log(err, 'The force is not with you!');
     })
  }, [page]);

  return (
    <>
    <Navigation />
    <MainContent className="App">
    
      {data.map(character => {
        return <CharacterCard name={character.name} height={character.height} gender={character.gender} birth_year={character.birth_year} url={character.url}/>
      }
      )}
      
    </MainContent>
    </>
  );
}

export default App;
