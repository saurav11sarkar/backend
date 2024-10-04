import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import BookingRow from "./BookingRow";

const NewBooking = () => {
    const { user } = useContext(AuthContext)
    const [book, setBook] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/booking?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBook(data)
            })
    }, [])
    const handleDeleteBooking = (id) => {
        setBook(prevase => prevase.filter(book => book._id !== id))
    }

    const handleUpdate = (id) => {
        setBook(prevent => prevent.map(booking => booking._id === id ? { ...booking, status: 'confirm' } : booking))
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name & Email</th>
                            <th>Service</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {book.map(booking => (
                            <BookingRow
                                key={booking._id}
                                booking={booking}
                                onDelete={handleDeleteBooking}
                                handleUpdate={handleUpdate}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default NewBooking;