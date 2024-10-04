import { Link, useLocation, useParams } from "react-router-dom";

const Courses = () => {
    const {id} = useParams();
    const location = useLocation();
    const arr = [
        {id: 'MERN001', course_name:'MERN Stack', price:10000, duration:'5 Months'},
        {id: 'Java002', course_name:'Java Stack', price:15000, duration:'6 Months'},
        {id: 'py0102', course_name:'Python Stack', price:5000, duration:'4 Months'},
        {id: 'REACT199', course_name:'React.JS', price:20000, duration:'7 Months'},
      ]

      const filterId = arr.filter(data => data.id === id)
    return (
        <div>
            {
                filterId.map(data=><div key={data.id}>
                    <p>{data.id}</p>
                    <p>{data.course_name}</p>
                    {
                        location.pathname !== '/product/REACT199' && (
                            <>
                            <p>{data.duration}</p>
                            <p>{data.price}</p>
                            </>
                        )
                    }
                </div>)
            }
            <button className="border-2 p-2 mt-3 rounded bg-purple-400 text-white"><Link to={'/product'}>All Course</Link></button>
        </div>
    );
};

export default Courses;