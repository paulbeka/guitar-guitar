
import {useEffect, useState} from 'react'
import React from 'react';
import './App.css';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Page from './Page';
import {List} from "@mui/material";
import {FullPage, Slide} from 'react-full-page';

function App() {
    return (
        <FullPage>
            <Slide>
                <Page background="https://i.pinimg.com/originals/ce/1e/ba/ce1eba34cbb8f1fe1ad56e7d11fffcca.jpg"/>
            </Slide>
            <Slide>
                <Page background="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b4905cef-0220-4ad4-b348-6eef239e89f7/d6l58q6-ad1b9547-24b6-4af5-980c-d40754e36a8e.png/v1/fill/w_1024,h_581,strp/gretsch_wallpaper_1924_x_1090_by_dangerousdeven_d6l58q6-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTgxIiwicGF0aCI6IlwvZlwvYjQ5MDVjZWYtMDIyMC00YWQ0LWIzNDgtNmVlZjIzOWU4OWY3XC9kNmw1OHE2LWFkMWI5NTQ3LTI0YjYtNGFmNS05ODBjLWQ0MDc1NGUzNmE4ZS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.b3fmR3SXICqBBln4Mbaj3HoM6OwQpo1njnoXuHqwmZM"/>
            </Slide>

        </FullPage>

    )

}

export default App
