import { useContext } from "react";
import { AuthContex } from "../Provider/AuthProvider";

const Home = () => {
  const {user} = useContext(AuthContex);
  return (
    <div>Home: {user}</div>
  )
}

export default Home;