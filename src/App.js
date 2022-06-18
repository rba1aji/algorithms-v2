import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useNavigate,
} from 'react-router-dom';
import Knapsack from './components/Knapsack';
import Floyds from './components/Floyds';
import Warshalls from './components/Warshalls';
// import Knapsack from './pages/Knapsack';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { useState, useContext } from 'react';
function Layout() {
  const [inputType, setInputType] = useState("");
  const context=useContext();
  return (
    <>
      <SelectAlgorithm />
      <InputArea />
      <Outlet />
    </>
  );
}

function SelectAlgorithm() {
  const navigate = useNavigate();
  const handleChange = (event) => {
    const val = event.target.value;
    navigate(val);
  };
  return (
    <Box>
      <FormControl style={{ width: 250 }}>
        <InputLabel id="demo-simple-select-label">Select algorithm</InputLabel>
        <Select
          label="Select algorithm"
          id="demo-simple-select"
          onChange={handleChange}
        >
          {/* <MenuItem value="/index">select</MenuItem> */}
          <MenuItem value="/knapsack" exact>
            Knapsack{' '}
          </MenuItem>
          <MenuItem value="/floyds" exact>
            Floyds{' '}
          </MenuItem>
          <MenuItem value="/warshalls" exact>
            warshalls{' '}
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

function InputArea() {
  return <textarea rows={7} cols={28} />;
}

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="index" element={null} />
            <Route path="knapsack" element={<Knapsack />} />
            <Route path="floyds" element={<Floyds />} />
            <Route path="warshalls" element={<Warshalls />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
