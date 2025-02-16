import React, { useState } from 'react';
import ChildSchool from './ChildSchool';
import ChildMovie from './ChildMovie';
import './App.css';

function App() {
  // --- Child #1: "Best school in the AUC" ---
  const schools = [
    {
      name: 'Spelman College',
      img: '/SpelmanCollege.jpg',
    },
    {
      name: 'Morehouse College',
      img: '/Morehouse_College_Logo.jpg',
    },
    {
      name: 'Clark Atlanta University',
      img: '/CAU.jpg',
    },
  ];
  const [schoolIndex, setSchoolIndex] = useState(0);

  const handleSchoolPredict = () => {
    setSchoolIndex((prev) => (prev + 1) % schools.length);
  };

  // --- Child #2: "Best movie" ---
  const movies = [
    {
      name: 'American Psycho',
      img: '/AmericanPsycho.jpg',
    },
    {
      name: 'Fight Club',
      img: '/FightClub.jpg',
    },
    {
      name: 'Interstellar',
      img: '/Interstellar.jpg',
    },
  ];
  const [movieIndex, setMovieIndex] = useState(0);

  const handleMoviePredict = () => {
    setMovieIndex((prev) => (prev + 1) % movies.length);
  };

  return (
    <div className="App">
      <h1>AUC/Movie Predicts</h1>

      {/* Child #1: Best school in the AUC */}
      <ChildSchool
        question="What's the best school in the AUC?"
        currentOption={schools[schoolIndex]}
        onPredict={handleSchoolPredict}
      />

      {/* Child #2: Best movie */}
      <ChildMovie
        question="What is the best movie?"
        currentOption={movies[movieIndex]}
        onPredict={handleMoviePredict}
      />
    </div>
  );
}

export default App;

