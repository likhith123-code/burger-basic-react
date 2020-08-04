import React from 'react';
import styled from 'styled-components';

const StyledDiv=styled.div`
  text-align:center;
  margin:10px auto;
  width:60%;
  border:2px solid black;
`;
const p=(props)=>{
    return(
       <StyledDiv>
           <h2>Name : {props.name}</h2>
           <p>I am {props.age} years old.</p>
       </StyledDiv>
    )
}

export default p;