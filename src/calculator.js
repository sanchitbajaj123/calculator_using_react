
import React from 'react';
import './calculator.css';
import { useState } from 'react';

function Calculator() {
    let [val, setVal] = useState(" ");
    const handleButtonClick = (b) => {
        if(b ==='='){
            const result = eval(val); // Evaluate the expression using JavaScript's eval function (not recommended for production)
            setVal(result.toString());
        }else{
        setVal((p)=>p+=b);}
      
      };
      function clear(){
        setVal(" ");
      }
 
    return (
        <div className="calculator-container">
          <h2>Calculator</h2>
          <div className='display'>
            <input type="text" value={val} placeholder='0' className='expression' readOnly></input>
          </div>
          <div className="buttons">
            {['7', '8', '9', '/', '4', '5', '6', '*','1', '2', '3', '-', '0', '.', '=', '+'].map((b)=>(
              <button className="button" onClick={()=>handleButtonClick(b)}>
                {b}
              </button>
            ))}
            <button className="button clear" onClick={clear}>C</button>
          </div>
        </div>
      );
}

export default Calculator;
