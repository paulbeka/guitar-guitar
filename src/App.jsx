import { useState } from 'react'
import './App.css';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment'
import Guitar from './components/Guitar';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="container">
      <div class="logo">
        <img src='./src/assets/gglogo.png'/>
      </div>
      <div class="search">
        <TextField
          id="we"
          label="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon/>
              </InputAdornment>
            )
          }}
          variant="standard"
        />
      </div>
      <div class="guitar-1">
        <Guitar/>
      </div>
      <div class="guitar-2">
        <Guitar/>
      </div>
      <div class="guitar-3">
        <Guitar/>
      </div>
      <div class="guitar-4">
        <Guitar/>
      </div>
      <div class="guitar-5">
        <Guitar/>
      </div>
    </div>
  )
}

export default App
