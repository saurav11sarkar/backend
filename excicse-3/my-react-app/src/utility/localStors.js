const getStroedJobApplication = () => {
    const stroJobApplication = localStorage.getItem('job-application');

    if(stroJobApplication){
        return JSON.parse(stroJobApplication)
    }
    return [];
}

const seveJobApplication = id =>{
    const stroJobApplication = getStroedJobApplication();
    const exists = stroJobApplication.find(jobId => jobId === id);

    if(!exists){
        stroJobApplication.push(id);
        localStorage.setItem('job-application', JSON.stringify(stroJobApplication));
    }
}

export {getStroedJobApplication, seveJobApplication};