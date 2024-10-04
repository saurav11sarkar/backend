import About from "./About";
import Banner from "./Banner";
import Services from "./Services";

const Home = () => {
    return (
        <div className="max-w-screen-xl m-auto">
            <Banner/>
            <About/>
            <Services/>
        </div>
    );
};

export default Home;