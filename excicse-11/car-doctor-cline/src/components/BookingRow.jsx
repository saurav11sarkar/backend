const BookingRow = ({ booking, onDelete, handleUpdate }) => {
    const { img, _id, email, title, price, countomerName, date, status } = booking;

    const handeleDelete = (id) => {
        const prosert = confirm('Are you sure you want to delete this booking?')
        if (prosert) {
            fetch(`http://localhost:5000/booking/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        onDelete(id);
                    }
                })
        }
    }

    const handleBookingConfirm = (id) => {
        fetch(`http://localhost:5000/booking/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    handleUpdate(id);
                }
            })
    }

    return (
        <tr>
            <td>
                <button onClick={() => handeleDelete(_id)} className="btn btn-xs btn-circle btn-outline">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </td>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={img || "https://img.daisyui.com/images/profile/demo/3@94.webp"}
                                alt={countomerName || 'Customer'} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{countomerName}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                {title}
                <br />
                <span className="badge badge-ghost badge-sm">{date}</span>
            </td>
            <td>{"$" + price}</td>
            <td>
                {status === 'confirm' ?
                    <span className="font-bold text-sky-400">Confirmed</span> :
                    <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>}
            </td>
        </tr>
    );
};

export default BookingRow;