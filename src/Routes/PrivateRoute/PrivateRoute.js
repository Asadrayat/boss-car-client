import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Authprovider/Authprovider';

const PrivateRoute = ({children}) => {
    const {user,loading } = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <h1 className='text-5xl'>Loading....</h1>
    }
    if(user){
        return children;
    }
    return <Navigate state={{form:location}} replace></Navigate>
};

export default PrivateRoute;