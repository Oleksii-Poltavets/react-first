import React, { useEffect, useState } from 'react';
// import styles from './Music.module.css';

const MusicContainer = () => {
    const [, setToggle] = useState(true);
    useEffect(() => {
        const id = setInterval(() => {
        setToggle(toggle => !toggle);
        }, 3000);
        return () => clearInterval(id);
    }, []);
    return (
        <div>
            <MemoisedMusic title={'MemoisedMusic'} memo={true}/>
            <Music title={'NoMemo'} memo={false}/>
        </div>
    )
}

const Music = ({title, memo}) => {
    const [counter, iterateCounter] = useState(0);
    useEffect(
        () => {
                if(counter <= 10) {
                iterateCounter(counter + 1);
            }
        }
    )
    console.log(`${memo ? "<MemoizedMovie>" : "<Movie>"} rendered`);
    return (
        <div>
            <h1>{title}</h1>
            Was rendered {counter} times;
        </div>
    );
}

const MemoisedMusic = React.memo(Music);

export default MusicContainer;