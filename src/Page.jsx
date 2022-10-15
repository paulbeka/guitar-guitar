import React from 'react';
import { useState } from 'react';
import Guitar from './components/Guitar';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Page = (props) => {
  const [brandName, setBrandName] = useState('');
  
  const handleChange = (event) => {
    setBrandName(event.target.value);
  }
    return (
        <div class="container" style={{background:props.background}}>
          <div class="logo">
            <img src="src/assets/gglogo.png"/>
          </div>
          <div class="search">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Brand Name</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={brandName}
                label="Brand Name" 
                onChange={handleChange}
              >
                <MenuItem value={10}></MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div class="carousel">
            <Guitar/>
          </div>
        </div>
      )
}

export default Page;