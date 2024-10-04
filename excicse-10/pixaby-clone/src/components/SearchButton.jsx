import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const SearchButton = () => {
    const {handleClick, setQuery} = useContext(AuthContext);

    const handleSearch = (e) => {
        e.preventDefault();
        const name = e.target.search.value; // Access the input value correctly
        setQuery(name);
    };
    return (
       <div className="max-w-screen-xl mx-auto">
         <div  className="flex flex-col md:flex-row justify-between my-3 gap-3">
            <div className="flex gap-4 justify-center">
                <button onClick={()=>handleClick('nature')} className="btn btn-sm btn-outline">nature</button>
                <button onClick={()=>handleClick('fashion')} className="btn btn-sm btn-outline btn-secondary">fashion</button>
                <button onClick={()=>handleClick('backgrounds')} className="btn btn-sm btn-outline btn-accent">backgrounds</button>
                <button onClick={()=>handleClick('education')} className="btn btn-sm btn-outline btn-info">education</button>
                <button onClick={()=>handleClick('religion')} className="btn btn-sm btn-outline btn-success">religion</button>
                <button onClick={()=>handleClick('travel')} className="btn btn-sm btn-outline btn-warning">travel</button>
                <button onClick={()=>handleClick('animals')} className="btn btn-sm btn-outline btn-error">animals</button>
            </div>
            <form onSubmit={handleSearch}>
            <input type="text" name="search" placeholder="Type here" className="input input-bordered w-full" />
            </form>
        </div>
       </div>
    );
};

export default SearchButton;
