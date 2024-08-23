import React from "react";
import {useState, useReducer } from "react";
import './Subscribe.css'
import img1 from './assets/images/image1 (1).jpg'
import img2 from './assets/images/image1 (2).jpg';
import img3 from './assets/images/image1 (3).jpg';

const initialstate = {count:0};

function Welcome (state,action){
    switch(action.category){
        case 'increment':
            return {count :state.count+1};
        case 'decrement':
            return {count :state.count>0 ? state.count-1:0};
        case 'reset':
            return {count: 0};
        default:
            throw new Error();
    }
}
const Details=({imgsrc,product,price})=>{
        const [state,dispatch] = React.useReducer(Welcome,initialstate);
        return(
            <div className="container">
              <div className="product">
               <img src={imgsrc} alt="" />
               <h2>{product}</h2>
               <p>{price}</p>
               <p>This product is very unique</p>
               <div className="card">
                    <button onClick={()=>dispatch({category: "increment"})}>+</button>
                    <input type="number"  value={state.count} />
                    <button onClick={()=>dispatch({category: "decrement"})}>-</button>
               </div>
               <h2>$Total {state.count * price}</h2>
              
               </div>
              
            </div>

        )
    }


const Subscribe =() =>{
    return(
      <div className="App">
        <Details imgsrc={img1} product="Photo 1" price={500} />
        <Details imgsrc={img2} product="Photo 2" price={300} />
        <Details imgsrc={img3} product="Photo 3" price={400} />
      </div>  
    )
}
export default Subscribe;