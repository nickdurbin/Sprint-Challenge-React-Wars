import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import Navigation from './components/Navigation';
import CharacterCard from './components/CharacterCard';
import StarWarsCrawl from './components/StarWarsCrawl';

const MainContent = styled.section`
  width: 100%;
  margin: 0 auto;
  height: 100vh;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  margin: 1rem;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  opacity: 0.8;
`;

const App = () => {
 
  const [data, setData] = useState([{}]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
     .get(`https://swapi.co/api/people/?page=${page}`)
     .then(res => {
       setData(res.data.results);
       console.log(res.data.results);
     })
     .catch(err => {
       console.log(err, 'The force is not with you!');
     })
  }, [page]);

  console.log(page);

  return (
    <>
    <StarWarsCrawl />
    <Navigation />
    <MainContent className="App">

      <Button className="previous" onClick={() => setPage(page - 1)}>
        Prev
      </Button>
      <Button className="next" onClick={() => setPage(page + 1)}>
        Next
      </Button>

        {data.map(character => {
          return <CharacterCard name={character.name} height={character.height} gender={character.gender} birth_year={character.birth_year} url={character.url}/>
        }
        )}

      <Button className="previous" onClick={() => setPage(page - 1)}>
        Prev
      </Button>
      <Button className="next" onClick={() => setPage(page + 1)}>
        Next
      </Button>
      
    </MainContent>
    </>
  );
}

export default App;
