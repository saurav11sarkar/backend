import { useEffect, useState } from "react";

const UseEffectUse = () => {
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        document.title = counter
    }, [counter])
    return (
        <div className="my-3">
            <h2 className="w-1/4 rounded-full mx-auto border-2 text-center border-sky-500 p-5 text-2xl font-semibold">{counter}</h2>
            <div className="flex gap-3 justify-center items-center mt-3">
                <button className="bg-blue-500 p-2 rounded-lg text-white" onClick={() => setCounter(counter + 1)}>Incrice</button>
                <button className="bg-blue-500 p-2 rounded-lg text-white" onClick={() => setCounter(pre => counter > 0 ? pre - 1 : pre)}>Decrice</button>
            </div>

        </div>
    );
};

export default UseEffectUse;