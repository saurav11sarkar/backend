import { useNavigate } from "react-router-dom";

const About = () => {
  const navaget = useNavigate();
  const goToHome = ()=>{
    navaget('/')
  }
  const goToBack = ()=>{
    navaget(-1)
  }
  return (
    <div className="flex gap-3 justify-center items-center">
      <button className="border-2 p-2 mt-3 rounded bg-purple-400 text-white" onClick={goToHome}>Go To Home</button>
      <button className="border-2 p-2 mt-3 rounded bg-purple-400 text-white" onClick={goToBack}>Go To Back</button>
    </div>
  )
}

export default About;