import React,{Component} from 'react';
import Burger from '../../components/burgercomponents/completeburger';
import BuildControls from '../../components/burgercomponents/buildcontrols';

const PRICE_INGREDIENT={
    salad:0.6,meat:1.2,bacon:1.6,cheese:0.9
}
class burger extends Component{
    state={
        ingredients :{
            meat:0,
            salad:0,
            bacon:0,
            cheese:0
        },
        price:0
    }
    addIngredientHandler=(type)=>{
         const old=this.state.ingredients[type];
         const update=old+1;
         const updatedcounts={
             ...this.state.ingredients
         }
         updatedcounts[type]=update;
         const priceaddition=PRICE_INGREDIENT[type];
         const oldprice=this.state.price;
         const newprice=oldprice+priceaddition;
         this.setState({price:newprice,ingredients:updatedcounts});

    }
    removeIngredientHandler=(type)=>{
        const old=this.state.ingredients[type];
        if(old<=0){
            return
        }
        const update=old-1;
        const updatedcounts={
            ...this.state.ingredients
        }
        updatedcounts[type]=update;
        const priceaddition=PRICE_INGREDIENT[type];
        const oldprice=this.state.price;
        const newprice=oldprice-priceaddition;
        this.setState({price:newprice,ingredients:updatedcounts});

    }
    render(){
       
        return(
            <div>
               <Burger ingredients={this.state.ingredients} />
               <BuildControls removed={this.removeIngredientHandler} added={this.addIngredientHandler}
               />
            </div>
        )
    }
}

export default burger;