import { Outlet } from "react-router-dom"
import Header from "./components/Header"

function App() {

  return (
    <div className="max-w-screen-xl m-auto">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default App
