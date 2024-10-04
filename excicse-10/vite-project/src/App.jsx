import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  
 
  return (
    <>
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
    </>
  )
}

export default App;
