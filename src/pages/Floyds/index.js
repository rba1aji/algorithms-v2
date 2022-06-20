import React from 'react';
import { useState, createContext, useContext, useEffect } from 'react';
export default function floyds() {
  const [input, setInput] = useState('');

  function Calculate() {}

  function Demo() {
    setInput('0 inf 3 inf\n2 0 inf inf\ninf 7 0 1\n6 inf inf 0');
  }

  return (
    <>
      <h1>Floyd's algorithm</h1>

      <textarea
        rows={8}
        cols={25}
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      <br />
      <button onClick={Calculate}>Find solution</button>
      <button onClick={Demo}>Demo</button>
    </>
  );
}
