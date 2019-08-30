import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import Navigation from './components/Navigation';
import CharacterCard from './components/CharacterCard';


const App = () => {
 
  const [data, setData] = useState();

  useEffect(() => {
    axios
     .get(`https://swapi.co/api/people`)
     .then(res => {
       setData(res.data);
     })
     .catch(err => {
       console.log(err, 'The force is not with you!');
     })
  }, [data]);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
