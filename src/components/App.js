// import React from 'react'
// import '../styles/App.css';
// const App = () => {

  
//   return (
//     <div id="main">

//     </div>
//   )
// }


// export default App;


import React, { useState } from "react";
import "../styles/App.css";
const App = () => {
  const [count, setCount] = useState(1);
   const [getClass, setClass] = useState("normal");
  
  function handleIncre(){
     setCount(count+1)
     if((count+1)%3==0 && (count+1)%5!==0 ){
       setClass("fizz")
     }else if((count+1)%5==0 && (count+1)%3!==0){
       setClass("buzz")
     }else if((count+1)%3==0 && (count+1)%5==0){
        setClass("fizzbuzz")
     }else{
       setClass("normal")
     }
  }
  
  function handleDecre(){
     setCount(count-1)
  if((count-1)%3==0 && (count-1)%5!==0 ){
       setClass("fizz")
     }else if((count-1)%5==0 && (count-1)%3!==0){
       setClass("buzz")
     }else if((count-1)%3==0 && (count-1)%5==0){
        setClass("fizzbuzz")
     }else{
       setClass("normal")
     }
  }
  
  return (
    <div id="main">
    

      <button
        id="increment" 
        onClick={handleIncre}
      >
        Increment
      </button>

      <div id="counter" className={getClass}>
    
        {count} 
      </div>

      <button
        id="decrement" 
        onClick={handleDecre}
      >
        Decrement
      </button>
    </div>
  );
};

export default App;





