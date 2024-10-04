import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import SearchButton from "./SearchButton";

const Images = () => {
    const { images } = useContext(AuthContext);

    if (!images || images.length === 0) {
        return <p>No images to display</p>;
    }

    return (
        <>
        <SearchButton></SearchButton>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-4">
            {images.map((image) => (
                <div key={image.id} className="w-full h-auto">
                    <img
                        src={image.largeImageURL}
                        alt={image.user}
                        className="max-w-full h-auto object-cover rounded-xl border-2 border-blue-600 transition-transform transform hover:scale-105 duration-300 ease-in-out"
                    />
                </div>
            ))}
        </div>
        </>
        
    );
};

export default Images;
