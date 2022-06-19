import React from 'react';
import { createContext, useContext, useState, useEffect } from 'react';
// import InputArea from '../../components/InputArea';

// const [input, setInput] = useState(0);
const input=createContext();

export default function warshalls() {
  return (
    <>
      <h1>Warshall's algorithm</h1>
      <label>Enter an ADJACENCY MATRIX</label>
      <InputBox />
      <ShowInput />
    </>
  );
}

function ShowInput(){
  return(
    <p>{useContext(input)}</p>
  );
}

function InputBox() {
  function getInput(event) {
    // useEffect(()=>{
      <input.Provider value={event.target.value}>
        <ShowInput/>
      </input.Provider>
    // });
  }
  return (
    <>
      <textarea rows={7} cols={28} placeholder={``} onChange={getInput} />
    </>
  );
}
