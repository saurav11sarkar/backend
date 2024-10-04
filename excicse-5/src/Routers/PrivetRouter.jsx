import PropTypes from 'prop-types'
import { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import { Navigate } from 'react-router-dom'

const PrivetRouter = ({children}) => {
  const {user, loader} = useContext(AuthContext)
  if(loader){
    return <span className="loading loading-dots loading-lg"></span>
  }
  if(user){
    return children
  }
  
  return (
    <Navigate to={'/login'}></Navigate>
  )
}

PrivetRouter.propTypes = {
  children:PropTypes.node,
}

export default PrivetRouter