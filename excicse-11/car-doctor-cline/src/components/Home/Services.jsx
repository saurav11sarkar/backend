import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Services = () => {
    const [servies, setServies] = useState([]);
    const [visites, setVisites] = useState(3);
    const [total, setTotal] = useState(0)

    useEffect(() => {
        fetch(`http://localhost:5000/carservice`)
            .then(res => res.json())
            .then(data => {
                setServies(data)
                setTotal(data.length)
            })
    }, [])

    const handleMore = () =>{
        setVisites(pre => pre + 3)
    }
    return (
        <div className="py-4">
            <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-center">Service</h3>
                <h1 className="text-4xl text-center font-bold">Our Service Area</h1>
                <p className="text-sm w-1/2 m-auto text-center">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                {
                    servies.slice(0,visites).map(service => <div key={service._id}>
                        <div className="card card-compact bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img
                                    src={service.img}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{service.title}</h2>
                                <div className="flex justify-between items-center">
                                    <p className="text-sky-500">Price : ${service.price}</p>
                                    <Link to={`/checkout/${service._id}`} className="btn btn-xs"><FaArrowRight className="text-sky-500" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className="flex justify-center items-center my-3">
                {
                    visites < total && <button onClick={handleMore} className="btn btn-info">More Services</button>
                }
            </div>
        </div>
    );
};

export default Services;