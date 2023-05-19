import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate } from "react-router-dom";
import Swal from 'sweetalert2'

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);

    if(user){
        return children;
    }
    if(!user){
         
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You have to log in first to view details!',
            //footer: '<a href="">Why do I have this issue?</a>'
          })
        
        return <Navigate to={'/login'}></Navigate>   
    }
     

};

export default PrivateRoute;