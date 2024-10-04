import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Foother from "../Foother/Foother"


const Root = () => {
  return (
    <>
    <div className="max-w-screen-xl m-auto">
    <Header></Header>
    <Outlet></Outlet>
    </div>
    <Foother></Foother>
    </>
  )
}

export default Root