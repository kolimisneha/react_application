import React, { useState } from 'react';
import './App.css';

function Increment() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if(count>0){
        setCount(count - 1);
        }
    };

    return (
        <div className='increment'>
            <h1>Counter: {count}</h1>
            <button onClick={handleIncrement} className='mx-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'>
                Increment
            </button>
            <button onClick={handleDecrement} className='mx-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700'>
                Decrement
            </button>
        </div>
    );
}

export default Increment;
