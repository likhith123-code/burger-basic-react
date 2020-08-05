import React from 'react';
import classes from './styles.css';

//using css modules
const p=(props)=>{
    return(
       <div className={classes.person}>
           <h2>Name : {props.name}</h2>
           <p>I am {props.age} years old.</p>
       </div>
    )
}

export default p;