import React from 'react';
const Page = (props) => {
    return (
        <div className="container"
             style={{
                 backgroundImage: `url("${props.background}"`,
                 backgroundRepeat: 'no-repeat',
                 backgroundSize: 'cover',
                 backgroundPosition: '100% 0%',
                 filter: 'brightness(100%)',
             }}
             onScroll={() => {
                 console.log("scroll")
             }}
        >
            <div className="logo">
                <img src="src/assets/gglogo.png"/>
            </div>
            <div className="filter">
            </div>
            <div className="content">
            </div>
        </div>
    )
}

export default Page;