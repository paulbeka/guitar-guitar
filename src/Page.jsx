import React from 'react';
import styles from './Page.module.css';
const Page = (props) => {
    return (
        <div className={styles.container}
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
            <div className={styles.logo}>
                <img src="src/assets/gglogo.png"/>
            </div>
            <div className={styles.filter}>
            </div>
            <div className={styles.content}>
            </div>
        </div>
    )
}

export default Page;