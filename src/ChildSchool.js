import React from 'react';

function ChildSchool({ question, currentOption, onPredict }) {
  return (
    <div style={{ border: '1px solid #444', margin: '1rem', padding: '1rem' }}>
      <h2>{question}</h2>
      <p>{currentOption.name}</p>
      <img 
        src={currentOption.img} 
        alt={currentOption.name} 
        style={{ width: '150px', height: 'auto' }} 
      />
      <br />
      <button onClick={onPredict} style={{ marginTop: '0.5rem' }}>
        Change Prediction
      </button>
    </div>
  );
}

export default ChildSchool;

