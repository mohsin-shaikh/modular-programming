import React, { useState, useEffect } from 'react';


const Timer = () => {
    const [ counter, setCounter] = useState(0);
    const setTimer = () => setCounter(counter + 1);

    const pad = (value) => {
        let valueString = value + "";
        if (valueString.length < 2) {
            return "0" + valueString;
        } else {
            return valueString;
        }
    }

    useEffect(() => {
        const id = setInterval(setTimer, 1000);
        return () => clearInterval(id);
    }, [setTimer]);
    
    return (
        <div>
            <label>{pad(parseInt(counter / 60))}</label>:<label>{pad(counter % 60)}</label>
        </div>
    );
}

export default Timer;