import { useEffect, useState } from "react";

const Meal = () => {
    const [meals, setMeals] = useState([]);
    const [area, setArea] = useState('Indian');

    const handlSearch = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.meals);
                setMeals(data.meals);
                // e.target.reset()
            });
    }

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.meals);
                setMeals(data.meals);
            });
    }, [area]);

    return (
        <div className="max-w-screen-lg mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="my-3 flex gap-3 justify-center items-center">
                <button
                    onClick={() => setArea('Indian')}
                    className={`border-2 px-4 py-2 rounded-lg transition-colors 
                    ${area === 'Indian' ? 'bg-gray-500 text-white' : 'border-gray-500 hover:bg-gray-500'}`}
                >
                    Indian
                </button>

                <button
                    onClick={() => setArea('Canadian')}
                    className={`border-2 px-4 py-2 rounded-lg transition-colors 
                    ${area === 'Canadian' ? 'bg-sky-500 text-white' : 'border-sky-500 hover:bg-sky-500'}`}
                >
                    Canadian
                </button>

                <button
                    onClick={() => setArea('American')}
                    className={`border-2 px-4 py-2 rounded-lg transition-colors 
                    ${area === 'American' ? 'bg-green-500 text-white' : 'border-green-500 hover:bg-green-500'}`}
                >
                    American
                </button>

                <button
                    onClick={() => setArea('Thai')}
                    className={`border-2 px-4 py-2 rounded-lg transition-colors 
                    ${area === 'Thai' ? 'bg-yellow-500 text-white' : 'border-yellow-500 hover:bg-yellow-500'}`}
                >
                    Thai
                </button>

                <button
                    onClick={() => setArea('British')}
                    className={`border-2 px-4 py-2 rounded-lg transition-colors 
                    ${area === 'British' ? 'bg-purple-500 text-white' : 'border-purple-500 hover:bg-purple-500'}`}
                >
                    British
                </button>

                <button
                    onClick={() => setArea('Russian')}
                    className={`border-2 px-4 py-2 rounded-lg transition-colors 
                    ${area === 'Russian' ? 'bg-blue-500 text-white' : 'border-blue-500 hover:bg-blue-500'}`}
                >
                    Russian
                </button>
            </div>
            <form onSubmit={handlSearch} className="my-2 w-full md:w-auto">
                <input type="text" name="name" placeholder="Search by name" className="focus:outline-none w-10/12 md:w-auto border-2 rounded-lg border-sky-300 py-2 px-4 m-auto block" />
            </form>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
                {meals.map(meal => (
                    <div
                        key={meal.idMeal}
                        className="rounded-lg overflow-hidden transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300 text-white"
                    >
                        <img 
                            src={meal.strMealThumb} 
                            alt={meal.strMeal} 
                            className="w-full h-48 object-cover" 
                        />
                        <p className="text-xl text-center font-semibold py-2">{meal.strMeal}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Meal;
