import { useEffect, useState } from "react";
import Jobs from "../AppliedJob/Jobs";

const FeaturedJob = () => {
    const [jobs, setJobs] = useState([]);
    const [length, setLength] = useState(4);
    
    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <h2>Feature Job: {jobs.length}</h2>

            <div className="grid grid-cols-2 gap-4">
                {
                    jobs.slice(0,length).map(job => <Jobs key={job.id} job={job}></Jobs>)
                }
            </div>
            <div className="flex justify-center items-center my-3">
            <div className={length === jobs.length && 'hidden'}>
                <button onClick={() => setLength(jobs.length)} className="btn">View More</button>
            </div>
            </div>
        </div>
    );
};

export default FeaturedJob;