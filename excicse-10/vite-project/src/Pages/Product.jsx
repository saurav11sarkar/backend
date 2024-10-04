import { Link } from "react-router-dom";

const Product = () => {
  const arr = [
    {id: 'MERN001', course_name:'MERN Stack', price:10000, duration:'5 Months'},
    {id: 'Java002', course_name:'Java Stack', price:15000, duration:'6 Months'},
    {id: 'py0102', course_name:'Python Stack', price:5000, duration:'4 Months'},
    {id: 'REACT199', course_name:'React.JS', price:20000, duration:'7 Months'},
  ]
  return (
    <div>
      <ul>
        {
          arr.map(data=><div key={data.id}>
            <li><Link to={`/product/${data.id}`}>{data.course_name}</Link></li>
          </div>)
        }
      </ul>
    </div>
  )
}

export default Product;