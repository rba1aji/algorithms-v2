import React from 'react';
import { useState, createContext, useContext, useEffect } from 'react';

export default function floyds() {
  
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([[]]);

  function Calculate() {
      // correctInput();
      String2WeightMatrix();
  }

  function DemoInput() {
    setInput('0 inf 3 inf\n2 0 inf inf\ninf 7 0 1\n6 inf inf 0');
    // Calculate();
  }


  function correctInput() {
    if (input[0] == '\n') setInput(input.replace('\n', ''));
  }
  function String2WeightMatrix() {
    const weightMatrix1D = input
      .replaceAll('\n', ' ')
      .replaceAll(/ +/g, ' ')
      .split(' ');
    //last character need to remove ws
    if(weightMatrix1D[0]==' ')weightMatrix1D.shift();
    let n = Math.sqrt(weightMatrix1D.length);
    let weightMatrix = [];
    let k = 0;
    for (let i = 0; i < n; i++) {
      let tempArr = [];
      for (let j = 0; j < n; j++) {
        if (weightMatrix1D[k] == 'inf') tempArr.push(Number.MAX_VALUE);
        else {
          let temp = parseInt(weightMatrix1D[k]);
          if (Number.isNaN(temp)) {
            alert(
              'ENTER VALID WEIGHT MATRIX\ntip:\nmake sure you put inf for infinity\nweight matrix must be square matrix\ntry removing white spaces after last element'
            );
            return;
          } else tempArr.push(temp);
        }
        k++;
      }
      weightMatrix.push(tempArr);
    }
    return weightMatrix;
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

      <button onClick={DemoInput}>Demo input</button>
      <button onClick={Calculate}>Find solution</button>
    </>
  );
}
