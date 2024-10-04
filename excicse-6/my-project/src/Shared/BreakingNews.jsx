import Marquee from "react-fast-marquee";
const BreakingNews = () => {
    return (
        <div className="flex justify-center items-center border rounded-xl bg-slate-700 my-3">
            <button className="btn btn-sm text-white btn-secondary">Bracking news</button>

            <Marquee pauseOnHover={true} speed={200} className="text-sm">
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default BreakingNews;