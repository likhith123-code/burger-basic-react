import React from 'react';
import classes from './buildcontrol.css';

const buildcontrol = (props) =>{
   return (
       <div className={classes.BuildControl}>
           <div className={classes.Label}>{props.label}</div>
           <button className={classes.Less} onClick={props.remove} > Less</button>
           <button className={classes.More} onClick={props.add}>More</button>
       </div>
   )
}
export default buildcontrol;