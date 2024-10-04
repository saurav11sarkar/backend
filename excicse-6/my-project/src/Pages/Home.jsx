import BreakingNews from "../Shared/BreakingNews";
const Home = () => {
    return (
        <div>
            <BreakingNews></BreakingNews>
            <div className="grid md:grid-cols-4 gap-4">

                <div className="md:col-span-1">
                    <h2>
                        Right side
                    </h2>
                </div>

                <div className="md:col-span-2">
                    <h2>
                        Middle side news
                    </h2>
                </div>

                <div className="md:col-span-1">
                    <h2>
                        Left side news
                    </h2>
                </div>

            </div>

        </div>
    );
};

export default Home;