import React from 'react';
import { useState, createContext, useContext, useEffect } from 'react';
export default function floyds() {
  return (
    <>
      <h1>Floyd's algorithm</h1>
      <InputBox />
    </>
  );
}

const [input, setInput] = useState('');
function getInput(event) {
  setInput(...input, event.target.value);
}
function InputBox() {
  return <textarea rows={8} cols={25} onChange={getInput} />;
}
