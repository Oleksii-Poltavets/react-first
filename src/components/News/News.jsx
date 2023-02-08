import React from 'react';
import { useState } from 'react';
// import styles from './News.module.css';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <div onClick={() => setCounter(0)}>Reset</div>
            <div>
                {counter}
            </div>
            <div>
                <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>+</button>
                <button onClick={() => setCounter(prevCounter => prevCounter - 1)}>-</button>
            </div>
        </div>
    )
}

const News = (props) => {

    return (
        <Counter/>
    );
}

export default News;