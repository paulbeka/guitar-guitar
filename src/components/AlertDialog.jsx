import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SearchIcon from "@mui/icons-material/Search.js";
import {IconButton} from "@mui/material";
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SongRecommendations from "./SongRecommendations.jsx";

const AlertDialog = (props) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        console.log(props.spotifyId)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div style={{display: props.spotifyId === 'invalid' ? 'none' : 'unset'}}>
            <IconButton onClick={(event) => handleClickOpen(event)} type="submit" aria-label="search">
                <HeadphonesIcon/>
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle>
                    {"Listen to associated song"}
                </DialogTitle>
                <DialogContent>
                    <SongRecommendations spotifyId={props.spotifyId} youtubeUrl={props.youtubeUrl}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>CLOSE</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AlertDialog;