import React from 'react';
import classes from './layouts.css';

const layout =(props)=>{
    return (
        <div>
            <div>Toolbar</div>
            <main className={classes.content}>
                {props.children}
            </main>
        </div>
    )
}
export default layout;