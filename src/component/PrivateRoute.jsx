import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate } from "react-router-dom";
import Swal from 'sweetalert2'

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
      
    if(loading){
        return <progress className="progress w-56"></progress>;
     }
    if(user){
        return children;
    }
    if(!user){
         
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You have to log in first to view details!',
           
          })
        
        return <Navigate to={'/login'}></Navigate>   
    }
     

};

export default PrivateRoute;