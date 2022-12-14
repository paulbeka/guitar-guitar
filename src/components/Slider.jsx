import React from 'react';
import {FullPage, Slide} from 'react-full-page';

const Slider = () => {
    return (
        <FullPage controls>
            <Slide>
                <h1>Inner slide content</h1>
            </Slide>
            <Slide>
                <h1>Another slide content</h1>
            </Slide>
        </FullPage>);
};

export default Slider;
