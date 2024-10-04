import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStroedJobApplication } from "../../utility/localStors";

const AppliedJob = () => {
    const jobs = useLoaderData();
    const [apply, setApply] = useState([]);
    const [display, setDisplay] = useState([])

    const handleJobFilter = (filter) => {
        if (filter === 'all') {
            setDisplay(apply);
        } else if (filter === 'remote') {
            const remoteJobs = apply.filter(job => job.remote_or_onsite === 'Remote');
            setDisplay(remoteJobs);
        } else if (filter === 'onsite') {
            const onsiteJobs = apply.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplay(onsiteJobs);
        }
    };

    useEffect(()=>{
        const storeId = getStroedJobApplication();
        if(jobs.length > 0){
            const jobApply = storeId.map(id => jobs.find(job => job.id === id));
            setApply(jobApply);
            setDisplay(jobApply);
        }
    },[jobs])
    return (
        <div>
            <h2>Apply job: {apply.length}</h2>
            <details className="dropdown">
                <summary className="btn m-1">Filter</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-24 p-2 shadow">
                    <li onClick={() => handleJobFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>

            <ul>
                {
                    display.map(job => <li key={job.id}>{job.job_title} at {job.company_name} ({job.remote_or_onsite})</li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJob;