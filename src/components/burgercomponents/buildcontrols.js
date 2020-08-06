import React from 'react';
import classes from './buildcontrols.css';
import BuildControl from './buildcontrol/buildcontrol';

const cont=[
    {label:'Salad',type:'salad'},
    {label:'Cheese',type:'cheese'},
    {label:'Bacon',type:'bacon'},
    {label:'Meat',type:'meat'}
]
const controls = (props) =>{
    return(
        <div className={classes.BuildControls}>
      {cont.map(ans=>(
         <BuildControl 
          add={()=>props.added(ans.type)} 
          remove={()=>props.removed(ans.type)}
         label={ans.label} 
         key={ans.label}
         />
      ))}
    </div>
    )
    

}
export default controls;