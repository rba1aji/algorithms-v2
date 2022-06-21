import React from 'react';
import { useState, createContext, useContext, useEffect } from 'react';

export default function floyds() {
  const [input, setInput] = useState('');
  const weightMatrix = [];
  const outputArr=[];

  function Calculate() {
    //Order of execution
    String2WeightMatrix();
    Solve();
    ShowOutput();
  }

  function DemoInput() {
    setInput('0 inf 3 inf\n2 0 inf inf\ninf 7 0 1\n6 inf inf 0');
  }

  function WrongInputAlert() {
    alert(
      'ENTER VALID WEIGHT MATRIX\n\tmake sure you put inf for infinity\n\tweight matrix must be square matrix'
    );
  }

  function String2WeightMatrix() {
    //input string to 1D str array
    const wm1D = input.replaceAll('\n', ' ').replaceAll(/ +/g, ' ').split(' ');
    if (wm1D[0] == '') wm1D.shift();
    if (wm1D[wm1D.length - 1] == '') wm1D.pop();

    //check if input is nothing
    if (wm1D.length == 0) {
      WrongInputAlert();
    }

    //1D array to 2D int array matrix
    const n = Math.sqrt(wm1D.length);
    let k = 0;
    for (let i = 0; i < n; i++) {
      const tempArr = [];
      for (let j = 0; j < n; j++) {
        if (wm1D[k] == 'inf') {
          tempArr.push(Number.MAX_VALUE);
        } else {
          let temp = parseInt(wm1D[k], 10);
          if (Number.isNaN(temp)) {
            WrongInputAlert();
            return;
          } else tempArr.push(temp);
        }
        k++;
      }
      weightMatrix.push(tempArr);
    }
  }

  function Solve() {
    const n=weightMatrix.length;
    //Intermediates
    const intermediates = [];
    for (let i = 0; i < n; i++) {
      const tempArr = [];
      for (let j = 0; j <= i; j++) {
        tempArr.push(j);
      }
      intermediates.push(tempArr);
    }
    //digraphs
    let ta = weightMatrix;
    outputArr.push(ta)
    for (let a = 0; a < intermediates.length; a++) {
      for (let b = 0; b < intermediates[a].length; b++) {
        let imt = intermediates[a][b];
        for (let i = 0; i < n; i++) {
          for (let j = 0; j < n; j++) {
            if (
              i == j ||
              ta[i][imt] == Number.MAX_VALUE ||
              ta[imt][j] == Number.MAX_VALUE
            ) {
            } else {
              ta[i][j] = Math.min(ta[i][j], ta[i][imt] + ta[imt][j]);
            }
          }
        }
      }
      outputArr.push(ta)
    }
  }

  function ShowOutput(){
    
  }

  return (
    <>
      {/* Title */}
      <h1>Floyd's algorithm</h1>
      {/* Input box */}
      <label>Enter a WEIGHT MATRIX</label>
      <br/>
      <textarea
        rows={8}
        cols={25}
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      {/* Buttons */}
      <br />
      <button onClick={DemoInput}>Demo input</button>
      <button onClick={Calculate}>Find solution</button>
      <br />
        {/* Output box */}
        <textarea 
          id="outputBox"
          style={{height:0, width:0}} 
          value={}
        />
    </>
  );
}
