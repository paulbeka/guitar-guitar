import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <img 
      style={{
        maxWidth:'500px',
        marginRight: '500px ',
      }}
      src='./src/assets/gglogo.png'/>
      <TextField
        id="input-with-icon-textfield"
        label="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
    </div>
  )
}

export default App
