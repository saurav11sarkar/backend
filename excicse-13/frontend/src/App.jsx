import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function App() {
  const jokes = useLoaderData();
  const [joks, setjoks] = useState(jokes);

  return (
    <div className={"text-center"}>
      <h1>Chai an full stack</h1>
      <p>Jokes: {joks.length}</p>
      <div className="grid grid-cols-3 gap-3">
        {joks.map((jok) => (
          <div key={jok.id}>
            <h2>{jok.title}</h2>
            <p>{jok.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
