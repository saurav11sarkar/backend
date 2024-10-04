import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
const Root = () => {
    return (
        <>
            <div className='max-w-screen-xl m-auto'>
                <Navbar></Navbar>
                <Outlet />
            </div>
        </>
    );
};

export default Root;