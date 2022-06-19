import React from 'react';
import { createContext, useContext, useState } from 'react';
// import InputArea from '../../components/InputArea';
export default function warshalls() {
  return (
    <>
      <h1>Warshall's algorithm</h1>
      <label>Enter an ADJACENCY MATRIX</label>
      <InputBox />
    </>
  );
}

const inputContext = createContext();

function InputBox() {
  return (
    <>
      <textarea rows={7} cols={28} placeholder={``} />;
    </>
  );
}
