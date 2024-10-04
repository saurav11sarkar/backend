import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  }
  return (
    <>
      <div>
        <div className='w-60 m-auto bg-slate-300 p-10 rounded'>
          <p className={`text-sm font-semibold mb-3 `}>You have clicked <span className={count %2== 0? 'text-red-700': ''}>{count}</span> time</p>
          <button onClick={handleCount} className='text-center border-2 bg-blue-600 px-3 py-2 rounded-lg shadow text-white hover:bg-blue-700'>count</button>
        </div>
      </div>
    </>
  )
}

export default App;
