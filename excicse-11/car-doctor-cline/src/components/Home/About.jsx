import person from "../../assets/images/about_us/person.jpg"
import parts from "../../assets/images/about_us//parts.jpg"
const About = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content lg:flex-row flex-col">
                <div className="lg:w-1/2 relative">
                    <img
                        src={person}
                        className=" w-full lg:w-3/4 rounded-lg shadow-2xl" />

                        <img src={parts} alt=""  className="absolute w-1/2 top-1/2 right-8 rounded-xl border-4 border-white hidden lg:block"/>
                </div>

                <div className="lg:w-1/2 space-y-3">
                <h3 className="text-2xl font-semibold text-sky-500">About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="pt-6">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable
                    </p>
                    <p className="py-4">
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;