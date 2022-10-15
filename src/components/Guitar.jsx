import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { Card, Button, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
const Guitar = () => {
    const [open, setOpen] = React.useState(false);
    const handleTooltipClose = () => {
      setOpen(false);
    };
  
    const handleTooltipOpen = () => {
      setOpen(true);
    };
    return (
        <>
            <img 
            onClick={() => {console.log("hello")}}
            style={{maxWidth: '250px'}} 
            src="https://images.guitarguitar.co.uk/cdn/large/160/12050912030058f.jpg"/>
        </>
    );
}

export default Guitar;