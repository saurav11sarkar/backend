import { Link, useLocation } from "react-router-dom"

const Header = () => {
    const location = useLocation()
    const links = <>
        <li><Link to={"/"} className={location.pathname === "/" ? "border-2 border-sky-600":""}>Log In</Link></li>
        <li><Link to={"/register"} className={location.pathname === "/register" ? "border-2 border-sky-600":""}>Sing Up</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to={"/"} className="btn btn-ghost text-xl">Sing In</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">

                    {links}
                </ul>
            </div>
        </div>
    )
}

export default Header