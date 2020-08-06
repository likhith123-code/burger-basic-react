import React,{Component} from 'react';
import Layout from './components/layout/layouts';
import Burger from './containers/burgerbuilder/burger';

class App extends Component{
 render(){
   return(
      <div>
      <Layout>
        <Burger/>
      </Layout>
      </div>
   )
 }
}

export default App;
