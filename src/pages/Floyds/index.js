import React from 'react';
import { useState, createContext, useContext, useEffect } from 'react';

export default function floyds() {

  const [input, setInput] = useState('');
  const [output, setOutput] = useState([[]]);

  function Calculate() {
    
    const weightMatrix=String2WeightMatrix();

    function String2WeightMatrix() {
      
    }

  }

  function Demo() {
    setInput('0 inf 3 inf\n2 0 inf inf\ninf 7 0 1\n6 inf inf 0');
    <Calculate />;
  }

  return (
    <>
      <h1>Floyd's algorithm</h1>

      <label>Enter a WEIGHT MATRIX</label>
      <textarea
        rows={8}
        cols={25}
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      <br />

      <button onClick={Demo}>Demo</button>
      <button onClick={Calculate}>Find solution</button>
    </>
  );
}
