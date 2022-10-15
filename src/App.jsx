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
                <Page background="white"/>
            </Slide>
            <Slide>
                <Page background="white"/>
            </Slide>

        </FullPage>

    )

}

export default App
