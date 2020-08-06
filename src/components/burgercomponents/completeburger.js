import React from 'react';
import classes from './completeburger.css';
import BurgerIngredient from './ingredients';

const item = (props)=>{
  const finalingredients = Object.keys(props.ingredients).map(igKey=>{
    return [...Array(props.ingredients[igKey])].map((_,i) =>{
      return <BurgerIngredient key={igKey+i} type={igKey} />
    }
    )
  })
    return(
        <div className={classes.content}>
          <BurgerIngredient type='bread-top'/>
           {finalingredients}
          <BurgerIngredient type='bread-bottom'/>
        </div>
    )
}
export default item;