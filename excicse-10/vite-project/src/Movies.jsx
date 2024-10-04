import { useState } from 'react';
import { movies } from './data';

const Movies = () => {
    const [allMovies, setAllMovies] = useState(movies);

    const hendleFilter = (catag) => {
        setAllMovies(movies.filter(movie => movie.category === catag))
    }

    return (
        <>
            <div className='my-3 flex gap-3 justify-center items-center'>
                <button onClick={() => setAllMovies(movies)} className='border-2 border-gray-500 hover:bg-gray-500 px-4 py-2 rounded-lg'>All</button>

                <button onClick={() => hendleFilter('Action')} className='border-2 border-sky-500 hover:bg-sky-500 px-4 py-2 rounded-lg'>Action</button>

                <button onClick={() => hendleFilter('Thriller')} className='border-2 hover:bg-green-500 border-green-500 px-4 py-2 rounded-lg'>Thriller</button>

                <button onClick={() => hendleFilter('Animation')} className='border-2 border-yellow-500 hover:bg-yellow-500 px-4 py-2 rounded-lg'>Animation</button>

                <button onClick={() => hendleFilter('Horror')} className='border-2 hover:bg-purple-500 px-4 py-2 border-purple-500 rounded-lg'>Horror</button>

                <button onClick={() => hendleFilter('Drama')} className='border-2 hover:bg-blue-500 px-4 py-2 border-blue-500 rounded-lg'>Drama</button>

                <button onClick={() => hendleFilter('Sci-Fi')} className='border-2 hover:bg-pink-500 px-4 py-2 border-pink-500 rounded-lg'>Sci-Fi</button>
            </div>
            <div className='grid grid-cols-3 gap-4 p-3'>

                {allMovies.map(movie => (
                    <div
                        className='border-2 rounded-lg text-center font-semibold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white'
                        key={movie.id}
                    >
                        <img
                            src={movie.backdrop_path}
                            alt={movie.title}
                            className='rounded-lg w-full'
                        />
                        <h2>{movie.title}</h2>
                        <p>{movie.release_date}</p>
                    </div>
                ))}
            </div>

        </>
    );
};

export default Movies;
