import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TbCoinTakaFilled } from "react-icons/tb";
import { seveJobApplication } from "../../utility/localStors";

const JobDetiles = () => {
    const jobs = useLoaderData();
    const {id} = useParams();

    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)

    const heandleToster = () => {
        seveJobApplication(idInt)
        toast("SuccesFully");
    }
    return (
        <div>
           <h2 className="text-center text-4xl font-bold p-7">Job Details</h2>

           <section className="grid md:grid-cols-4 gap-4 my-3 px-2">
            <div className="md:col-span-3">
                <p className="text-justify mb-1"><strong>Job Description:</strong> {job.job_description}</p>
                <p className="text-justify mb-2"><strong>Job Responsibility:</strong> {job.job_responsibility}</p>
                <p className="text-justify mb-2"><strong>Educational Requirements:</strong> {job.educational_requirements}</p>
                <p className="text-justify mb-2"><strong>Experiences:</strong> {job.experiences}</p>

            </div>
            <div className="md:col-span-1 bg-slate-600 px-2 rounded">
                <h2>Job Details</h2>
                <hr />
                <h2 className='flex justify-center items-center gap-1'><TbCoinTakaFilled /> {job.salary}</h2>
                <h2 className='flex justify-center items-center gap-1'><TbCoinTakaFilled /> {job.job_title}</h2>
                <br />
                <h2>Contact Information</h2>
                <hr />
                <button onClick={heandleToster} className="bg-blue-500 text-white px-4 py-2  my-4 rounded hover:bg-blue-600 transition duration-200">Apply Now</button>

            </div>
            </section> 
           <ToastContainer />
        </div>
    );
};

export default JobDetiles;