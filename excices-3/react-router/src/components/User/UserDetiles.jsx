import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserDetiles = ({ user }) => {
    const { id, name, email } = user;
    return (
        <div className='flex flex-col border-2 border-orange-600 m-3 rounded-lg p-3 justify-center items-center'>
            <h1>{id}</h1>
            <h3>{name}</h3>
            <p>{email}</p>
            <Link to={`/user/${id}`} className='text-sky-500 text-sm underline'>More Detailes</Link>
        </div>
    );
};

UserDetiles.propTypes = {
    user: PropTypes.object,
};

export default UserDetiles;