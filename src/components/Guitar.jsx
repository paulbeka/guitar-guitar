import * as React from 'react';

const Guitar = () => {
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