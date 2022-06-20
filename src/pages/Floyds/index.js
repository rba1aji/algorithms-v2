import React from 'react';
import { useState, createContext, useContext, useEffect } from 'react';

export default function floyds() {
  
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([[]]);

  function Calculate() {
      // CorrectInput();
      String2WeightMatrix();
  }

  function DemoInput() {
    setInput('0 inf 3 inf\n2 0 inf inf\ninf 7 0 1\n6 inf inf 0');
    // Calculate();
  }


  function String2WeightMatrix() {
    
    //input string to 1D str array
    const wm1D = input
      .replaceAll('\n', ' ')
      .replaceAll(/ +/g, ' ')
      .split(' ');
    if(wm1D[0]=="")wm1D.shift();
    if(wm1D[wm1D.length-1]=="")wm1D.pop();

    //1D array to 2D int array matrix
    const n = Math.sqrt(wm1D.length);
    const wm = []; //weight matrix
    let k = 0;
    for (let i = 0; i < n; i++) {
      let tempArr = [];
      for (let j = 0; j < n; j++) {
        if (wm1D[k] == 'inf') tempArr.push(Number.MAX_VALUE);
        else {
          let temp = parseInt(wm1D[k],10);
          if (Number.isNaN(temp)) {
            alert(
              'ENTER VALID WEIGHT MATRIX\ntip:\nmake sure you put inf for infinity\nweight matrix must be square matrix\ntry removing white spaces after last element'
            );
            return;
          } else tempArr.push(temp);
        }
        k++;
      }
      wm.push(tempArr);
    }
    return wm;
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
