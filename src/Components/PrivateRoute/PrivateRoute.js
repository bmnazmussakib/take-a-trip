import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let location = useLocation();
    return (
        <div>
            {loggedInUser.email ? children : <Navigate to="/login" state={{ from: location }} />};
        </div>
  )
  }


export default PrivateRoute;