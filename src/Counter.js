// import React, { Component } from 'react';
// const containerStyle = {
//   display: 'flex'
// }
// const buttonStyle = {
//   fontSize: '1.5rem',
//   width: '40px',
//   height: '40px'
// }
// class Counter extends Component {
//   render() {
//     return (
//       <div className="App" >
//         <header className="App-header">
//           <h1>0</h1>
//           <div style={containerStyle}>
//             <button type="button" style={buttonStyle}>-</button>
//             <button type="button" style={buttonStyle}>+</button>
//           </div>
//         </header>
//       </div>
//     );
//   }
// }
// export default Counter;
import React from 'react'

import { useSelector, useDispatch } from "react-redux";
import {
    Increment,Decrement
} from './Actions/CounterActions'
const Counter = () => {
    const counter = useSelector((state) => state.counter);
    console.log(counter,"counter")
    const dispatch = useDispatch();
  return (
    
    <div className="App">
        <div className="header">
            <h1>{counter}</h1>
        </div>
<div className='container' style={containerStyle}>
<button type="button" style={buttonStyle} onClick={() => dispatch(Increment())}>+</button>
<button type="button" style={buttonStyle} onClick={()=>dispatch(Decrement())}>-</button>

    </div>
    </div>
    
  )
}


const buttonStyle={
    fontSize: '1.5rem',
     width: '40px',
     height: '40px' ,

}
const containerStyle={
    display: 'flex'
}
export default Counter