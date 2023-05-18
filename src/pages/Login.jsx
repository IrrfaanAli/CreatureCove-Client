import { Link, useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { AuthContext } from "../providers/AuthProviders";
import { useContext, useState } from "react";
import app from "../firebase/firebase.config";


const Login = () => {
    
 const [err,setErr] = useState('');
    
    
    const auth = getAuth(app);
    const GoogleProvider = new GoogleAuthProvider();
 
    const { userlogin } = useContext(AuthContext);
    const  navigate = useNavigate();
    const handleLogIn = event => {

        event.preventDefault();

        const form = event.target;

        const email = form.email.value;

        const password = form.password.value;

    
        userlogin(email, password)
            .then(result => {
                console.log(result.user);
                 navigate('/');             
            })
            .catch(error=> {
            setErr(error.message);
            })
         
        
          
    }
    const handleGoolgeSignIn = () =>{
        signInWithPopup(auth,GoogleProvider)
        .then(result => {
            console.log(result.user);
            navigate('/'); 
           
        })
        .catch(error =>{
            console.log(error);
        })
    }
   

    return (
        <>
            <Navbar></Navbar>
            <div>

                <div className="hero min-h-screen bg-base-200">
                <p className='text-red-500'>{err}</p>
                <form onSubmit={handleLogIn}>
                        <div className="card flex-shrink-0 w-full h-1/2  max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name="password" className="input input-bordered" />
                                    <label className="label">
                                        <Link to={'/signup'}><button>signup</button></Link>
                                  </label>
                                </div>
                                <div className="divider">OR</div>
                                <button onClick={handleGoolgeSignIn} >google</button>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Login</button>
                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
           
            <Footer></Footer>
        </>
    );
};

export default Login;