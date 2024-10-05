import { useEffect, useState } from "react";
import axios from "axios";


function App() {
  const [joks, setjoks] = useState([]);

  useEffect(() => {
    axios
      .get("/api/joke")
      .then((res) => setjoks(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={"text-center"}>
      <h1>Chai an full stack</h1>
      <p>Jokes: {joks.length}</p>
      <div className="grid grid-cols-3 gap-3 mx-4">
        {joks.map((jok) => (
          <div className="bg-slate-400 rounded text-white p-2" key={jok.id}>
            <h2>{jok.title}</h2>
            <p>{jok.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
