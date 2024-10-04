import PropTypes from 'prop-types';
import { SlLocationPin } from "react-icons/sl";
import { TbCoinTakaFilled } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Jobs = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job
    return (
        <div className="card card-compact bg-base-100 w-full shadow-xl">
            <figure>
                <img
                    src={logo}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className='flex gap-2'>
                    <button className='btn'>{remote_or_onsite}</button>
                    <button className='btn'>{job_type}</button>
                </div>
                <div className='flex justify-between'>
                    <h2 className='flex justify-center items-center gap-1'><SlLocationPin /> {location}</h2>
                    <h2 className='flex justify-center items-center gap-1'><TbCoinTakaFilled /> {salary}</h2>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/job/${id}`} className='btn'>View Details</Link>
                </div>
            </div>
        </div>
    );
};

Jobs.propTypes = {
    job: PropTypes.object,
};

export default Jobs;