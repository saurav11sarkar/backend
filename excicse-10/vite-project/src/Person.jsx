import { useState } from "react";

const Person = ({ name, age, penCard }) => {
    const [count, setCount] = useState(0);
    
    const increaseBy = () => {
        setCount(prev => prev + 1);
    }
    const decreaseBy = () => {
        setCount(prev => (count > 0 ? prev - 1 : 0));
    }

    return (
        <div>
            <h2>{name}</h2>
            {
                age > 20 ? <h1>You can drive</h1> : <h2>You can not a drive</h2>
            }
            {
                penCard || <h2>Your are Male</h2>
            }
            <h1>{count}</h1>
            <button onClick={increaseBy} > Sum </button>
            <button onClick={decreaseBy} > Sub </button>
        </div>
    );
};

export default Person;